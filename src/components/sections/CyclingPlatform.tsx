"use client";

// Session 45 — CyclingPlatform + shared HeroPlatformContext.
//
// The cycling word in the hero headline ("...to dominate Google /
// ChatGPT / Perplexity / Gemini"), rendered in each platform's brand
// color with a tiny inline platform logo. Swaps every ~2.6s with a
// fade + small slide. Exposes the current platform via a React
// context so the synced search bar in the same hero box can restyle
// itself to match the headline platform — one choreographed unit.
//
// State machine: a single `useEffect` driven interval ticks the
// platform index forward. The setState is wrapped in a brief
// `is-swapping` window so the displayed word animates out → label
// flips → animates in, with a ~140ms transition. Reduced-motion
// short-circuits the interval and locks on "Google."
//
// Lift state via HeroPlatformProvider — wrap the hero box content
// so any descendant (CyclingPlatform, HeroSearchTease, glyphs) can
// read the same `useHeroPlatform()` hook. No prop drilling.

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

// ---------- Types + data ----------

export type HeroPlatform = "google" | "chatgpt" | "perplexity" | "gemini";

type PlatformConfig = {
  key: HeroPlatform;
  label: string;
  color: string;
};

const PLATFORMS: ReadonlyArray<PlatformConfig> = [
  { key: "google", label: "Google", color: "#4285F4" },
  { key: "chatgpt", label: "ChatGPT", color: "#10A37F" },
  { key: "perplexity", label: "Perplexity", color: "#20B8A6" },
  { key: "gemini", label: "Gemini", color: "#9747FF" },
];

// Session 46 — slowed cycle so the synced search bar has room to
// type its query char-by-char and resolve a result chip on every
// platform. ~6s per platform: ~3s typing, ~500ms searching, ~1.5s
// chip hold, ~1s clear + cross-fade overlap.
const CYCLE_INTERVAL_MS = 6000;
const SWAP_TRANSITION_MS = 400;

// ---------- Context ----------

type HeroPlatformContextValue = {
  platform: HeroPlatform;
  config: PlatformConfig;
  index: number;
};

const HeroPlatformContext = createContext<HeroPlatformContextValue | null>(
  null
);

export function useHeroPlatform(): HeroPlatformContextValue {
  const v = useContext(HeroPlatformContext);
  if (!v) {
    // Safe fallback for SSR + tests: render as if Google is locked.
    return { platform: "google", config: PLATFORMS[0], index: 0 };
  }
  return v;
}

// ---------- Provider ----------

export function HeroPlatformProvider({ children }: { children: ReactNode }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduced) return;

    const id = setInterval(() => {
      setIndex((i) => (i + 1) % PLATFORMS.length);
    }, CYCLE_INTERVAL_MS);
    return () => clearInterval(id);
  }, []);

  const value = useMemo<HeroPlatformContextValue>(
    () => ({
      platform: PLATFORMS[index].key,
      config: PLATFORMS[index],
      index,
    }),
    [index]
  );

  return (
    <HeroPlatformContext.Provider value={value}>
      {children}
    </HeroPlatformContext.Provider>
  );
}

// ---------- The cycling word ----------
//
// Session 46 — fluid cross-fade. We keep the OUTGOING platform
// configured for ~SWAP_TRANSITION_MS while the INCOMING fades in, so
// there's overlap and no blank frame. The incoming platform starts
// in the "pre" state (translated down + invisible) and transitions
// to "in" on the next frame, while the outgoing is moved to "out"
// (translated up + invisible) simultaneously. ~150ms after swap
// start the outgoing element unmounts.

type PhaseLabel = "current" | "outgoing" | "incoming";

export function CyclingPlatform() {
  const { config } = useHeroPlatform();
  const [currentConfig, setCurrentConfig] = useState(config);
  const [outgoingConfig, setOutgoingConfig] = useState<PlatformConfig | null>(
    null
  );
  const [phase, setPhase] = useState<"steady" | "swapping">("steady");

  // When the provider index ticks, kick off a cross-fade: keep the
  // existing config as outgoing, mount the new one as incoming.
  useEffect(() => {
    if (config.key === currentConfig.key) return;
    setOutgoingConfig(currentConfig);
    setCurrentConfig(config);
    // Force the incoming element to start in `pre` state and flip to
    // `in` on the next frame so the transition runs.
    setPhase("swapping");
    // After the swap window, drop the outgoing element.
    const id = window.setTimeout(() => {
      setOutgoingConfig(null);
      setPhase("steady");
    }, SWAP_TRANSITION_MS);
    return () => window.clearTimeout(id);
  }, [config, currentConfig]);

  // Drive the "pre → in" frame flip so the incoming actually animates.
  const [incomingReady, setIncomingReady] = useState(false);
  useEffect(() => {
    if (phase !== "swapping") {
      setIncomingReady(false);
      return;
    }
    const raf = window.requestAnimationFrame(() => setIncomingReady(true));
    return () => window.cancelAnimationFrame(raf);
  }, [phase, currentConfig.key]);

  return (
    <span className="cycling-platform__slot" aria-live="polite">
      {outgoingConfig && (
        <span
          key={`out-${outgoingConfig.key}`}
          className="cycling-platform__word is-out"
          style={{ color: outgoingConfig.color }}
        >
          <span className="cycling-platform__logo" aria-hidden="true">
            <PlatformGlyph platform={outgoingConfig.key} />
          </span>
          {outgoingConfig.label}
        </span>
      )}
      <span
        key={`in-${currentConfig.key}`}
        className={`cycling-platform__word ${
          phase === "swapping"
            ? incomingReady
              ? "is-in"
              : "is-pre"
            : "is-in"
        }`}
        style={{ color: currentConfig.color }}
      >
        <span className="cycling-platform__logo" aria-hidden="true">
          <PlatformGlyph platform={currentConfig.key} />
        </span>
        {currentConfig.label}
      </span>
    </span>
  );
}

// ---------- Inline platform glyphs ----------

function PlatformGlyph({ platform }: { platform: HeroPlatform }) {
  if (platform === "google") {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
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
  if (platform === "chatgpt") {
    return (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="#10A37F"
        aria-hidden="true"
      >
        <path d="M22 9.4c0-1.3-.5-2.6-1.5-3.5-.9-.9-2.2-1.5-3.5-1.5-.4 0-.7 0-1.1.1-.7-1.5-2.3-2.5-4-2.5-1.3 0-2.6.5-3.5 1.5-.4.4-.7.8-.9 1.3-1.3-.1-2.6.3-3.6 1.2-.9.9-1.5 2.2-1.5 3.5 0 .4 0 .8.1 1.1-1.5.7-2.5 2.3-2.5 4 0 1.3.5 2.6 1.5 3.5 1.1 1.1 2.6 1.6 4 1.5.7 1.4 2.2 2.4 4 2.4 1.3 0 2.6-.5 3.5-1.5.4-.4.7-.8.9-1.3 1.3.1 2.6-.3 3.6-1.2 1-.9 1.5-2.2 1.5-3.5 0-.4 0-.8-.1-1.1 1.5-.7 2.5-2.3 2.5-4z" />
      </svg>
    );
  }
  if (platform === "perplexity") {
    return (
      <svg
        width="22"
        height="22"
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
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
      <defs>
        <linearGradient id="cp-gem-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4285F4" />
          <stop offset="50%" stopColor="#9747FF" />
          <stop offset="100%" stopColor="#EA4335" />
        </linearGradient>
      </defs>
      <path
        d="M12 2 L14 10 L22 12 L14 14 L12 22 L10 14 L2 12 L10 10 Z"
        fill="url(#cp-gem-grad)"
      />
    </svg>
  );
}
