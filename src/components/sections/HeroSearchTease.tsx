"use client";

// Session 46 — HeroSearchTease with live char-by-char typing.
//
// Reads the current platform from HeroPlatformContext. When the
// platform changes (every ~6s via Session 46's slowed cycle), the
// bar clears, types the new platform's query character-by-character
// with a blinking cursor (~50ms/char), briefly "searches," then
// resolves a green result chip and holds until the next platform.
//
// Phase machine (timing budget ~6s per platform):
//   typing     ~2.5-3.0s  query types char-by-char with blinking cursor
//   searching  ~500ms     micro-pause, optional shimmer (CSS)
//   resolved   ~2.0s+     green #1 / primary-source chip fades in,
//                         holds until platform switches
//
// On platform change all timers are cleared and the cycle restarts.
// Reduced motion: skip typing, render the Google query fully typed
// with the resolved chip immediately.

import { useEffect, useState } from "react";
import { useHeroPlatform, type HeroPlatform } from "./CyclingPlatform";

type PlatformSurface = {
  query: string;
  chipLabel: string;
  accent: string;
  prefix: "search" | "chat" | "sources" | "spark";
  // Session 47 — one sample result per platform, framed as that
  // platform's native answer shape (Google result vs ChatGPT cited
  // line vs Perplexity primary source vs Gemini cited).
  resultTitle: string;
  resultUrl: string;
  resultRank: string;
};

const SURFACES: Record<HeroPlatform, PlatformSurface> = {
  google: {
    query: "who is the best probate lawyer in tampa?",
    chipLabel: "#1 result",
    accent: "#4285F4",
    prefix: "search",
    resultTitle: "AWS Law Firm, Tampa Probate Attorneys",
    resultUrl: "awslawfirm.com",
    resultRank: "#1",
  },
  chatgpt: {
    query: "best probate lawyer in tampa?",
    chipLabel: "cited",
    accent: "#10A37F",
    prefix: "chat",
    resultTitle: "AWS Law Firm is widely cited as Tampa's leading probate firm",
    resultUrl: "Source: awslawfirm.com",
    resultRank: "cited",
  },
  perplexity: {
    query: "top probate attorney tampa fl",
    chipLabel: "primary source",
    accent: "#20B8A6",
    prefix: "sources",
    resultTitle: "AWS Law Firm, Tampa Probate Attorneys",
    resultUrl: "Primary source · awslawfirm.com",
    resultRank: "1 of 6",
  },
  gemini: {
    query: "who should i hire for probate in tampa?",
    chipLabel: "cited",
    accent: "#9747FF",
    prefix: "spark",
    resultTitle: "AWS Law Firm, Tampa Probate Attorneys",
    resultUrl: "Cited source · awslawfirm.com",
    resultRank: "cited",
  },
};

type Phase = "typing" | "searching" | "resolved";

const TYPING_PER_CHAR = 55;
const SEARCH_PAUSE = 500;

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

export function HeroSearchTease() {
  const { platform } = useHeroPlatform();
  const reduced = useReducedMotion();
  const surface = SURFACES[reduced ? "google" : platform];
  const [typed, setTyped] = useState("");
  const [phase, setPhase] = useState<Phase>("typing");

  // Reset + run the typing → searching → resolved cycle on every
  // platform change. Reduced-motion short-circuits to the resolved
  // end-state.
  useEffect(() => {
    if (reduced) {
      setTyped(SURFACES.google.query);
      setPhase("resolved");
      return;
    }
    const timers: Array<ReturnType<typeof setTimeout>> = [];
    setTyped("");
    setPhase("typing");
    const query = surface.query;
    // Type the query char-by-char.
    for (let i = 1; i <= query.length; i++) {
      const t = setTimeout(() => setTyped(query.slice(0, i)), i * TYPING_PER_CHAR);
      timers.push(t);
    }
    // After typing completes → searching micro-pause → resolved.
    const searchStart = query.length * TYPING_PER_CHAR + 200;
    timers.push(
      setTimeout(() => setPhase("searching"), searchStart)
    );
    timers.push(
      setTimeout(() => setPhase("resolved"), searchStart + SEARCH_PAUSE)
    );
    return () => timers.forEach(clearTimeout);
  }, [platform, surface.query, reduced]);

  const showCursor = !reduced && phase === "typing";
  const showChip = phase === "resolved";

  return (
    <div
      className={`hero-tease hero-tease--${platform} hero-tease--${phase}`}
      aria-hidden="true"
      style={{ ["--tease-accent" as never]: surface.accent }}
    >
      <div className="hero-tease__bar">
        <SurfacePrefix kind={surface.prefix} accent={surface.accent} />
        <span className="hero-tease__query">
          {typed}
          {showCursor && <span className="hero-tease__cursor" />}
        </span>
        {showChip && (
          <span className="hero-tease__chip" key={`chip-${platform}`}>
            <CheckGlyph />
            <span>{surface.chipLabel}</span>
          </span>
        )}
      </div>

      {/* Session 47 — sample result row. Always rendered (reserved
          height via CSS min-height on .hero-tease__result-slot) so
          its fade-in NEVER changes layout. Visibility is purely an
          opacity + small translateY transition. */}
      <div className="hero-tease__result-slot">
        <div
          className="hero-tease__result"
          data-resolved={phase === "resolved" ? "true" : "false"}
          key={`result-${platform}`}
        >
          <span className="hero-tease__result-favicon" aria-hidden="true">
            <TriangleFavicon />
          </span>
          <span className="hero-tease__result-text">
            <span className="hero-tease__result-title">{surface.resultTitle}</span>
            <span className="hero-tease__result-url">{surface.resultUrl}</span>
          </span>
          <span className="hero-tease__result-rank">{surface.resultRank}</span>
        </div>
      </div>
    </div>
  );
}

function TriangleFavicon() {
  return (
    <svg width="12" height="12" viewBox="0 0 32 32" aria-hidden="true">
      <polygon points="4,4 28,4 4,28" fill="var(--signal, #6EF06E)" />
    </svg>
  );
}

// ---------- Prefix glyphs ----------

function SurfacePrefix({
  kind,
  accent,
}: {
  kind: PlatformSurface["prefix"];
  accent: string;
}) {
  if (kind === "search") return <SearchGlyph />;
  if (kind === "chat") return <ChatGlyph accent={accent} />;
  if (kind === "sources") return <SourcesGlyph accent={accent} />;
  return <SparkGlyph />;
}

function SearchGlyph() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className="hero-tease__icon"
    >
      <circle
        cx="7"
        cy="7"
        r="5"
        stroke="currentColor"
        strokeWidth="1.6"
        fill="none"
      />
      <line
        x1="11"
        y1="11"
        x2="14"
        y2="14"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ChatGlyph({ accent }: { accent: string }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className="hero-tease__icon"
    >
      <path
        d="M2 4 Q 2 2 4 2 H 12 Q 14 2 14 4 V 10 Q 14 12 12 12 H 7 L 4 14 V 12 H 4 Q 2 12 2 10 Z"
        stroke={accent}
        strokeWidth="1.4"
        fill="none"
      />
    </svg>
  );
}

function SourcesGlyph({ accent }: { accent: string }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className="hero-tease__icon"
    >
      <rect x="2" y="3" width="5" height="5" rx="1" stroke={accent} strokeWidth="1.3" fill="none" />
      <rect x="9" y="3" width="5" height="5" rx="1" stroke={accent} strokeWidth="1.3" fill="none" />
      <rect x="2" y="9" width="5" height="5" rx="1" stroke={accent} strokeWidth="1.3" fill="none" />
      <rect x="9" y="9" width="5" height="5" rx="1" stroke={accent} strokeWidth="1.3" fill="none" />
    </svg>
  );
}

function SparkGlyph() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 16 16"
      aria-hidden="true"
      className="hero-tease__icon"
    >
      <defs>
        <linearGradient id="tease-spark-grad-46" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4285F4" />
          <stop offset="50%" stopColor="#9747FF" />
          <stop offset="100%" stopColor="#EA4335" />
        </linearGradient>
      </defs>
      <path
        d="M8 1 L9.6 6 L14 7 L9.6 8 L8 13 L6.4 8 L2 7 L6.4 6 Z"
        fill="url(#tease-spark-grad-46)"
      />
    </svg>
  );
}

function CheckGlyph() {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M2 5L4 7L8 3"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
