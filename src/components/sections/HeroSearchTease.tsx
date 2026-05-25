"use client";

// Session 43 — HeroSearchTease.
//
// Compact, self-contained animated search bar that sits inside the
// hero box below the CTAs. Lightweight by design so it does NOT
// push the CTAs below the fold — it occupies a single row.
//
// Behavior:
//   - A query types itself character-by-character with a blinking
//     cursor (~50ms per char).
//   - Briefly pauses ~150ms after the last character.
//   - A small green "#1 result" chip spring-snaps into place to the
//     right of the typed query.
//   - The bar holds the chip + completed query for ~1.6s.
//   - The query clears (snap, not character-by-character).
//   - Advances to the next query and repeats.
//   - Cycles 3 queries forever (LA legal → Chicago dental → Miami derm).
//
// Reduced motion:
//   - Skips typing/clearing/cycling entirely.
//   - Renders the first query fully typed with the #1 chip visible.
//   - Cursor blink animation is disabled via CSS.

import { useEffect, useRef, useState } from "react";

// ---------- Constants ----------

const QUERIES = [
  "who is the best probate lawyer in Los Angeles?",
  "best Invisalign dentist in Chicago?",
  "top cosmetic dermatologist in Miami?",
] as const;

type Phase = "typing" | "holding" | "clearing";

const TIMING = {
  typingPerChar: 50,
  preHold: 150,
  hold: 1600,
  clearPause: 400,
  advancePause: 300,
} as const;

// ---------- Reduced-motion hook ----------

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

// ---------- Component ----------

export function HeroSearchTease() {
  const reduced = useReducedMotion();
  const [queryIndex, setQueryIndex] = useState(0);
  const [typed, setTyped] = useState("");
  const [phase, setPhase] = useState<Phase>("typing");
  const timers = useRef<Array<ReturnType<typeof setTimeout>>>([]);

  // Cleanup helper. Clears any pending timeouts so a phase change
  // doesn't double-fire after unmount or after reduced-motion flips.
  const clearTimers = () => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
  };

  const queueTimer = (fn: () => void, delay: number) => {
    const id = setTimeout(fn, delay);
    timers.current.push(id);
  };

  // Reduced-motion: skip all phases, render first query + chip.
  useEffect(() => {
    if (!reduced) return;
    clearTimers();
    setQueryIndex(0);
    setTyped(QUERIES[0]);
    setPhase("holding");
  }, [reduced]);

  // Phase driver. Each phase schedules its own follow-on so the
  // sequence runs end-to-end without a separate ticker.
  useEffect(() => {
    if (reduced) return;
    const current = QUERIES[queryIndex];

    if (phase === "typing") {
      if (typed.length < current.length) {
        queueTimer(() => {
          setTyped(current.slice(0, typed.length + 1));
        }, TIMING.typingPerChar);
      } else {
        // Fully typed — short pause, then show the chip.
        queueTimer(() => setPhase("holding"), TIMING.preHold);
      }
    } else if (phase === "holding") {
      queueTimer(() => setPhase("clearing"), TIMING.hold);
    } else if (phase === "clearing") {
      queueTimer(() => {
        setTyped("");
        queueTimer(() => {
          setQueryIndex((i) => (i + 1) % QUERIES.length);
          setPhase("typing");
        }, TIMING.advancePause);
      }, TIMING.clearPause);
    }

    return clearTimers;
  }, [phase, typed, queryIndex, reduced]);

  // Final cleanup on unmount.
  useEffect(() => () => clearTimers(), []);

  const showChip = phase === "holding";

  return (
    <div className="hero-tease" aria-hidden="true">
      <div className="hero-tease__bar">
        <SearchGlyph />
        <span className="hero-tease__query">
          {typed}
          {!reduced && <span className="hero-tease__cursor" />}
        </span>
        {showChip && (
          <span className="hero-tease__chip" key={`chip-${queryIndex}`}>
            <CheckGlyph />
            <span>#1 result</span>
          </span>
        )}
      </div>
    </div>
  );
}

// ---------- Inline glyphs ----------

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
