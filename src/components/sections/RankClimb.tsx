"use client";

// Session 42 — RankClimb: the new hero centerpiece.
//
// Full-width animated demonstration of what Rysen does: a search bar
// types a query, a results list appears, and the client row (AWS Law
// Firm) climbs from position 8 to position 1, locking in with a green
// "win" moment. Then the platform chrome swaps and the loop repeats
// across Google → ChatGPT → Perplexity → Gemini.
//
// State machine phases:
//   TYPING        ~1.8s   query types char-by-char with blinking cursor
//   SEARCHING     ~0.7s   subtle loading shimmer on the search bar
//   RESULTS_IN    ~0.6s   8 rows fade/slide in
//   CLIMBING      ~3.5s   client row animates from index 7 → index 0,
//                         one step every ~450ms, settling on each step
//   LOCKED        ~2.2s   client at #1: green left border, soft glow,
//                         "#1" badge snaps in (spring), "POSITION
//                         SECURED" microlabel fades in
//   PLATFORM_SWITCH ~0.6s toggle advances to next platform; surface
//                         chrome restyles per platform; query may
//                         change per platform; loop restarts
//
// All animations respect prefers-reduced-motion: when set, the machine
// jumps directly to the LOCKED end-state on the current platform and
// stops cycling.
//
// Layout: card occupies the full hero width up to 1080px, sits below
// the headline + sub + platform pills, and is the visual anchor of
// the new full-width hero. Single chromatic accent: electric green
// (--signal). Other tones are cool greys + platform brand colors.

import {
  useCallback,
  useEffect,
  useMemo,
  useReducer,
  useRef,
  useState,
} from "react";

// =====================================================================
// Types
// =====================================================================

type Platform = "google" | "chatgpt" | "perplexity" | "gemini";

type Phase =
  | "typing"
  | "searching"
  | "resultsIn"
  | "climbing"
  | "locked"
  | "switching";

type ResultRow = {
  id: string;
  domain: string;
  title: string;
  snippet: string;
  isClient: boolean;
};

type MachineState = {
  phase: Phase;
  platform: Platform;
  typedChars: number;
  clientIndex: number; // 0 = top
};

type MachineAction =
  | { type: "tick" }
  | { type: "char" }
  | { type: "setPhase"; phase: Phase }
  | { type: "stepClimb" }
  | { type: "nextPlatform" }
  | { type: "reset"; platform: Platform }
  | { type: "jumpToLocked"; platform: Platform };

// =====================================================================
// Data
// =====================================================================

const PLATFORM_ORDER: ReadonlyArray<Platform> = [
  "google",
  "chatgpt",
  "perplexity",
  "gemini",
];

const QUERIES: Record<Platform, string> = {
  google: "best probate lawyer tampa",
  chatgpt: "who is the best probate lawyer in tampa?",
  perplexity: "best probate lawyer tampa",
  gemini: "top rated probate attorney tampa",
};

const CLIENT_ROW: ResultRow = {
  id: "client-aws",
  domain: "awslawfirm.com",
  title: "AWS Law Firm, Tampa Probate Attorneys",
  snippet:
    "Tampa Bay's highest-rated probate practice. 20+ years of estate administration. Free consultations.",
  isClient: true,
};

// Seven realistic competitors. The client begins at index 7 (position
// 8), climbs to index 0 (position 1) over the CLIMBING phase.
const COMPETITORS: ReadonlyArray<ResultRow> = [
  {
    id: "comp-avvo",
    domain: "avvo.com",
    title: "Best Tampa Probate Lawyers on Avvo",
    snippet:
      "Directory of probate attorneys in Tampa, FL. Read reviews and find ratings.",
    isClient: false,
  },
  {
    id: "comp-martindale",
    domain: "martindale.com",
    title: "Tampa, FL Probate Attorneys | Martindale-Hubbell",
    snippet:
      "Find top Tampa probate lawyers. Peer-rated by lawyers and former clients.",
    isClient: false,
  },
  {
    id: "comp-biglaw",
    domain: "biglawfirm.com",
    title: "Statewide Florida Probate Services",
    snippet:
      "Multi-state legal services across the Southeast. Tampa office handles probate.",
    isClient: false,
  },
  {
    id: "comp-tampaprobate",
    domain: "tampaprobate.net",
    title: "Tampa Probate Specialists",
    snippet:
      "General probate filings and estate work. Tampa, FL based practice.",
    isClient: false,
  },
  {
    id: "comp-floridalaw",
    domain: "floridalaw.com",
    title: "Florida Probate Lawyers Network",
    snippet:
      "Connect with probate attorneys across Florida. Free consultations available.",
    isClient: false,
  },
  {
    id: "comp-yelp",
    domain: "yelp.com",
    title: "Top 10 Best Probate Lawyer in Tampa, FL",
    snippet:
      "Reviews on Probate Lawyer in Tampa, FL: Smith & Associates, Tampa Law Group.",
    isClient: false,
  },
  {
    id: "comp-lawyers",
    domain: "lawyers.com",
    title: "Tampa Probate Attorneys | Lawyers.com",
    snippet:
      "Find lawyers in Tampa, FL. Probate lawyers, attorneys and law firms.",
    isClient: false,
  },
];

// Base ordering: 7 competitors first, client last. Reducer mutates a
// copy of this on CLIMBING ticks to slide the client up.
const BASE_RESULTS: ReadonlyArray<ResultRow> = [
  ...COMPETITORS,
  CLIENT_ROW,
];

// =====================================================================
// Platform config
// =====================================================================

type PlatformConfig = {
  label: string;
  surface: "browser" | "chat" | "answer" | "spark";
  urlLabel: string;
  PlatformIcon: () => React.JSX.Element;
};

const PLATFORM_CONFIG: Record<Platform, PlatformConfig> = {
  google: {
    label: "Google",
    surface: "browser",
    urlLabel: "google.com/search?q=best+probate+lawyer+tampa",
    PlatformIcon: GoogleIcon,
  },
  chatgpt: {
    label: "ChatGPT",
    surface: "chat",
    urlLabel: "chat.openai.com",
    PlatformIcon: ChatGPTIcon,
  },
  perplexity: {
    label: "Perplexity",
    surface: "answer",
    urlLabel: "perplexity.ai",
    PlatformIcon: PerplexityIcon,
  },
  gemini: {
    label: "Gemini",
    surface: "spark",
    urlLabel: "gemini.google.com",
    PlatformIcon: GeminiIcon,
  },
};

// =====================================================================
// Phase timings (ms)
// =====================================================================

const TIMING = {
  typingPerChar: 70,
  searching: 700,
  resultsIn: 600,
  climbStep: 450,
  locked: 2200,
  switching: 600,
} as const;

// =====================================================================
// Reducer
// =====================================================================

const initialState: MachineState = {
  phase: "typing",
  platform: "google",
  typedChars: 0,
  clientIndex: 7,
};

function reducer(state: MachineState, action: MachineAction): MachineState {
  switch (action.type) {
    case "char":
      return { ...state, typedChars: state.typedChars + 1 };
    case "setPhase":
      return { ...state, phase: action.phase };
    case "stepClimb":
      if (state.clientIndex <= 0) return state;
      return { ...state, clientIndex: state.clientIndex - 1 };
    case "nextPlatform": {
      const idx = PLATFORM_ORDER.indexOf(state.platform);
      const next = PLATFORM_ORDER[(idx + 1) % PLATFORM_ORDER.length];
      return {
        ...state,
        platform: next,
        phase: "typing",
        typedChars: 0,
        clientIndex: 7,
      };
    }
    case "reset":
      return {
        ...state,
        platform: action.platform,
        phase: "typing",
        typedChars: 0,
        clientIndex: 7,
      };
    case "jumpToLocked":
      return {
        ...state,
        platform: action.platform,
        phase: "locked",
        typedChars: QUERIES[action.platform].length,
        clientIndex: 0,
      };
    case "tick":
    default:
      return state;
  }
}

// =====================================================================
// useReducedMotion
// =====================================================================

function useReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);
  return reduced;
}

// =====================================================================
// Root component
// =====================================================================

export function RankClimb() {
  const reduced = useReducedMotion();
  const [state, dispatch] = useReducer(reducer, initialState);
  const timers = useRef<Array<ReturnType<typeof setTimeout>>>([]);

  const clearTimers = useCallback(() => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
  }, []);

  const queueTimer = useCallback((fn: () => void, delay: number) => {
    const id = setTimeout(fn, delay);
    timers.current.push(id);
  }, []);

  // Reduced-motion path: jump to locked end-state and stop.
  useEffect(() => {
    if (!reduced) return;
    dispatch({ type: "jumpToLocked", platform: "google" });
    return clearTimers;
  }, [reduced, clearTimers]);

  // Main state-machine driver. Each phase schedules its own follow-on.
  useEffect(() => {
    if (reduced) return;

    const platform = state.platform;
    const phase = state.phase;
    const query = QUERIES[platform];

    if (phase === "typing") {
      if (state.typedChars < query.length) {
        queueTimer(() => dispatch({ type: "char" }), TIMING.typingPerChar);
      } else {
        queueTimer(
          () => dispatch({ type: "setPhase", phase: "searching" }),
          400
        );
      }
    } else if (phase === "searching") {
      queueTimer(
        () => dispatch({ type: "setPhase", phase: "resultsIn" }),
        TIMING.searching
      );
    } else if (phase === "resultsIn") {
      queueTimer(
        () => dispatch({ type: "setPhase", phase: "climbing" }),
        TIMING.resultsIn
      );
    } else if (phase === "climbing") {
      if (state.clientIndex > 0) {
        queueTimer(() => dispatch({ type: "stepClimb" }), TIMING.climbStep);
      } else {
        queueTimer(
          () => dispatch({ type: "setPhase", phase: "locked" }),
          200
        );
      }
    } else if (phase === "locked") {
      queueTimer(
        () => dispatch({ type: "setPhase", phase: "switching" }),
        TIMING.locked
      );
    } else if (phase === "switching") {
      queueTimer(
        () => dispatch({ type: "nextPlatform" }),
        TIMING.switching
      );
    }

    return clearTimers;
  }, [
    state.phase,
    state.platform,
    state.typedChars,
    state.clientIndex,
    reduced,
    queueTimer,
    clearTimers,
  ]);

  // Cleanup on unmount.
  useEffect(() => clearTimers, [clearTimers]);

  // Build current results order. Client at index `state.clientIndex`,
  // competitors fill the other slots in their fixed sequence.
  const results = useMemo<ResultRow[]>(() => {
    const out: ResultRow[] = COMPETITORS.slice();
    out.splice(state.clientIndex, 0, CLIENT_ROW);
    return out;
  }, [state.clientIndex]);

  const platformConfig = PLATFORM_CONFIG[state.platform];
  const visibleQuery = QUERIES[state.platform].slice(0, state.typedChars);
  const showResults =
    state.phase === "resultsIn" ||
    state.phase === "climbing" ||
    state.phase === "locked" ||
    state.phase === "switching";

  return (
    <div
      className={`rank-climb rank-climb--${state.platform} rank-climb--phase-${state.phase}`}
      role="figure"
      aria-label="Live rank-climb demonstration across four search platforms"
    >
      <SurfaceChrome platform={state.platform} config={platformConfig} />

      <SearchBar
        platform={state.platform}
        query={visibleQuery}
        phase={state.phase}
        config={platformConfig}
      />

      {showResults && (
        <ResultsList
          results={results}
          clientIndex={state.clientIndex}
          phase={state.phase}
          platform={state.platform}
        />
      )}

      <PlatformToggle current={state.platform} />

      <div className="rank-climb__caption" aria-hidden="true">
        <span className="rank-climb__caption-dot" />
        <span>LIVE DEMO · RANK CLIMB 8 → 1</span>
      </div>
    </div>
  );
}

// =====================================================================
// SurfaceChrome — top strip + URL bar (varies by platform)
// =====================================================================

function SurfaceChrome({
  platform,
  config,
}: {
  platform: Platform;
  config: PlatformConfig;
}) {
  return (
    <div className="rank-climb__chrome">
      <div className="rank-climb__chrome-dots" aria-hidden="true">
        <span className="rank-climb__chrome-dot rank-climb__chrome-dot--red" />
        <span className="rank-climb__chrome-dot rank-climb__chrome-dot--yellow" />
        <span className="rank-climb__chrome-dot rank-climb__chrome-dot--green" />
      </div>
      <div className="rank-climb__chrome-url">
        <LockIcon />
        <span>{config.urlLabel}</span>
      </div>
      <div className={`rank-climb__platform-marker rank-climb__platform-marker--${platform}`}>
        <config.PlatformIcon />
        <span>{config.label}</span>
      </div>
    </div>
  );
}

// =====================================================================
// SearchBar — typed query + cursor + searching shimmer
// =====================================================================

function SearchBar({
  platform,
  query,
  phase,
  config,
}: {
  platform: Platform;
  query: string;
  phase: Phase;
  config: PlatformConfig;
}) {
  const isTyping = phase === "typing";
  const isSearching = phase === "searching";
  const isAnswerSurface = config.surface === "chat" || config.surface === "answer" || config.surface === "spark";

  return (
    <div
      className={`rank-climb__searchbar rank-climb__searchbar--${platform} ${
        isSearching ? "is-searching" : ""
      }`}
    >
      {isAnswerSurface ? (
        <span className="rank-climb__searchbar-prefix" aria-hidden="true">
          <config.PlatformIcon />
        </span>
      ) : (
        <SearchGlyphIcon />
      )}
      <span className="rank-climb__query">
        {query}
        {isTyping && <span className="rank-climb__cursor" aria-hidden="true" />}
      </span>
      {isSearching && (
        <span className="rank-climb__searchbar-shimmer" aria-hidden="true" />
      )}
    </div>
  );
}

// =====================================================================
// ResultsList — renders rows in current order, client gets special
// treatment, animates row-to-row position
// =====================================================================

function ResultsList({
  results,
  clientIndex,
  phase,
  platform,
}: {
  results: ResultRow[];
  clientIndex: number;
  phase: Phase;
  platform: Platform;
}) {
  return (
    <ol
      className={`rank-climb__results rank-climb__results--${platform}`}
      aria-label={`Top ${results.length} search results`}
    >
      {results.map((row, i) => {
        const position = i + 1;
        const isClientAtThisRow = row.isClient;
        const isLocked = isClientAtThisRow && phase === "locked";
        const isClimbing = isClientAtThisRow && phase === "climbing";
        return (
          <ResultRowView
            key={row.id}
            row={row}
            position={position}
            isClient={isClientAtThisRow}
            isClimbing={isClimbing}
            isLocked={isLocked}
            clientIndex={clientIndex}
            phase={phase}
          />
        );
      })}
    </ol>
  );
}

function ResultRowView({
  row,
  position,
  isClient,
  isClimbing,
  isLocked,
  clientIndex,
  phase,
}: {
  row: ResultRow;
  position: number;
  isClient: boolean;
  isClimbing: boolean;
  isLocked: boolean;
  clientIndex: number;
  phase: Phase;
}) {
  const classes = [
    "rank-climb__row",
    isClient ? "rank-climb__row--client" : "",
    isClimbing ? "is-climbing" : "",
    isLocked ? "is-locked" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <li className={classes} aria-current={isLocked ? "true" : undefined}>
      <span className="rank-climb__row-position" aria-hidden="true">
        {position}
      </span>
      <span className="rank-climb__row-favicon">
        {isClient ? <RysenTriangleGlyph /> : <span className="rank-climb__row-favicon-letter">{row.domain[0].toUpperCase()}</span>}
      </span>
      <span className="rank-climb__row-body">
        <span className="rank-climb__row-domain">{row.domain}</span>
        <span className="rank-climb__row-title">{row.title}</span>
        <span className="rank-climb__row-snippet">{row.snippet}</span>
      </span>
      {isLocked && (
        <span className="rank-climb__badge" aria-label="Position 1 secured">
          <span className="rank-climb__badge-num">#1</span>
          <span className="rank-climb__badge-label">POSITION SECURED</span>
        </span>
      )}
      {isClimbing && (
        <span className="rank-climb__climb-trail" aria-hidden="true">
          <span>climbing · {clientIndex + 1} → {clientIndex}</span>
        </span>
      )}
      {/* Microcopy when phase changes but row isn't client */}
      {!isClient && phase === "locked" && (
        <span className="rank-climb__row-shifted" aria-hidden="true" />
      )}
    </li>
  );
}

// =====================================================================
// PlatformToggle — four chips at the bottom; active one highlighted
// =====================================================================

function PlatformToggle({ current }: { current: Platform }) {
  return (
    <div className="rank-climb__toggle" role="tablist" aria-label="Platform">
      {PLATFORM_ORDER.map((p) => {
        const cfg = PLATFORM_CONFIG[p];
        const isCurrent = p === current;
        return (
          <div
            key={p}
            className={`rank-climb__toggle-chip ${
              isCurrent ? "is-current" : ""
            }`}
            role="tab"
            aria-selected={isCurrent}
          >
            <cfg.PlatformIcon />
            <span>{cfg.label}</span>
            {isCurrent && (
              <span className="rank-climb__toggle-dot" aria-hidden="true" />
            )}
          </div>
        );
      })}
    </div>
  );
}

// =====================================================================
// Glyph icons (inline — no library)
// =====================================================================

function LockIcon() {
  return (
    <svg
      width="11"
      height="11"
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="3"
        y="6"
        width="8"
        height="6"
        rx="1"
        stroke="currentColor"
        strokeWidth="1.2"
        fill="none"
      />
      <path
        d="M5 6V4a2 2 0 014 0v2"
        stroke="currentColor"
        strokeWidth="1.2"
        fill="none"
      />
    </svg>
  );
}

function SearchGlyphIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 18 18"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.6" />
      <line
        x1="12.5"
        y1="12.5"
        x2="16"
        y2="16"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function RysenTriangleGlyph() {
  return (
    <svg width="14" height="14" viewBox="0 0 32 32" aria-hidden="true">
      <polygon points="4,4 28,4 4,28" fill="var(--signal-logo, #5BE000)" />
    </svg>
  );
}

function GoogleIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M22.5 12.27c0-.85-.08-1.66-.22-2.45H12v4.63h5.92a5.06 5.06 0 0 1-2.2 3.32v2.76h3.56c2.08-1.92 3.28-4.74 3.28-8.26z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.56-2.76c-.98.66-2.24 1.05-3.72 1.05-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84A11 11 0 0 0 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.1A6.58 6.58 0 0 1 5.5 12c0-.73.13-1.44.34-2.1V7.06H2.18A11 11 0 0 0 1 12c0 1.77.42 3.45 1.18 4.94l3.66-2.84z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.07.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1A11 11 0 0 0 2.18 7.06l3.66 2.84C6.71 7.31 9.14 5.38 12 5.38z"
        fill="#EA4335"
      />
    </svg>
  );
}

function ChatGPTIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="#10A37F"
      aria-hidden="true"
    >
      <path d="M22 9.4c0-1.3-.5-2.6-1.5-3.5-.9-.9-2.2-1.5-3.5-1.5-.4 0-.7 0-1.1.1-.7-1.5-2.3-2.5-4-2.5-1.3 0-2.6.5-3.5 1.5-.4.4-.7.8-.9 1.3-1.3-.1-2.6.3-3.6 1.2-.9.9-1.5 2.2-1.5 3.5 0 .4 0 .8.1 1.1-1.5.7-2.5 2.3-2.5 4 0 1.3.5 2.6 1.5 3.5 1.1 1.1 2.6 1.6 4 1.5.7 1.4 2.2 2.4 4 2.4 1.3 0 2.6-.5 3.5-1.5.4-.4.7-.8.9-1.3 1.3.1 2.6-.3 3.6-1.2 1-.9 1.5-2.2 1.5-3.5 0-.4 0-.8-.1-1.1 1.5-.7 2.5-2.3 2.5-4z" />
    </svg>
  );
}

function PerplexityIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <rect width="24" height="24" rx="4" fill="#20B8A6" />
      <path
        d="M12 6v12M6 9v6M18 9v6M9 7v10M15 7v10"
        stroke="white"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

function GeminiIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true">
      <defs>
        <linearGradient
          id="rc-gemini-grad"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#4285F4" />
          <stop offset="50%" stopColor="#9747FF" />
          <stop offset="100%" stopColor="#EA4335" />
        </linearGradient>
      </defs>
      <path
        d="M12 2 L14 10 L22 12 L14 14 L12 22 L10 14 L2 12 L10 10 Z"
        fill="url(#rc-gemini-grad)"
      />
    </svg>
  );
}
