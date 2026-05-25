"use client";

// Session 45 — HeroSearchTease rewritten to sync with the cycling
// platform word in the headline.
//
// Reads HeroPlatformContext via useHeroPlatform(). On every platform
// tick, the tease swaps its query, surface accent, and result chip
// to match the headline's current platform. One choreographed unit:
//   Google      → search bar style, "AWS Law Firm · #1" result chip
//   ChatGPT     → chat-style framing, "Cited" chip
//   Perplexity  → "sources" prefix, "Primary source" chip
//   Gemini      → gradient spark glyph, "Cited" chip
//
// Compact: single row, ~46–52px tall, so it does not push the CTAs
// below the fold. The result chip is the only place green appears
// (the #1 win moment). Reduced motion: static, locked on the Google
// state with the result chip visible.

import { useEffect, useState } from "react";
import { useHeroPlatform, type HeroPlatform } from "./CyclingPlatform";

type PlatformSurface = {
  query: string;
  chipLabel: string;
  accent: string;
  prefix: "search" | "chat" | "sources" | "spark";
};

const SURFACES: Record<HeroPlatform, PlatformSurface> = {
  google: {
    query: "best probate lawyer tampa",
    chipLabel: "#1 result",
    accent: "#4285F4",
    prefix: "search",
  },
  chatgpt: {
    query: "who is the best probate lawyer in tampa?",
    chipLabel: "cited",
    accent: "#10A37F",
    prefix: "chat",
  },
  perplexity: {
    query: "best probate lawyer tampa",
    chipLabel: "primary source",
    accent: "#20B8A6",
    prefix: "sources",
  },
  gemini: {
    query: "top rated probate attorney tampa",
    chipLabel: "cited",
    accent: "#9747FF",
    prefix: "spark",
  },
};

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

  return (
    <div
      className={`hero-tease hero-tease--${platform}`}
      aria-hidden="true"
      style={{ ["--tease-accent" as never]: surface.accent }}
    >
      <div className="hero-tease__bar">
        <SurfacePrefix kind={surface.prefix} accent={surface.accent} />
        <span className="hero-tease__query">{surface.query}</span>
        <span className="hero-tease__chip">
          <CheckGlyph />
          <span>{surface.chipLabel}</span>
        </span>
      </div>
    </div>
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
      <rect
        x="2"
        y="3"
        width="5"
        height="5"
        rx="1"
        stroke={accent}
        strokeWidth="1.3"
        fill="none"
      />
      <rect
        x="9"
        y="3"
        width="5"
        height="5"
        rx="1"
        stroke={accent}
        strokeWidth="1.3"
        fill="none"
      />
      <rect
        x="2"
        y="9"
        width="5"
        height="5"
        rx="1"
        stroke={accent}
        strokeWidth="1.3"
        fill="none"
      />
      <rect
        x="9"
        y="9"
        width="5"
        height="5"
        rx="1"
        stroke={accent}
        strokeWidth="1.3"
        fill="none"
      />
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
        <linearGradient id="tease-spark-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4285F4" />
          <stop offset="50%" stopColor="#9747FF" />
          <stop offset="100%" stopColor="#EA4335" />
        </linearGradient>
      </defs>
      <path
        d="M8 1 L9.6 6 L14 7 L9.6 8 L8 13 L6.4 8 L2 7 L6.4 6 Z"
        fill="url(#tease-spark-grad)"
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
