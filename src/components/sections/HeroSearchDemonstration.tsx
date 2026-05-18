"use client";

import { SignalTriangle } from "@/components/brand/SignalTriangle";
import type { SearchCycle } from "@/lib/heroSearchCycles";

export type CyclePhase =
  | "idle"
  | "typing"
  | "pulse"
  | "revealing"
  | "holding"
  | "deleting";

type Props = {
  cycle: SearchCycle;
  phase: CyclePhase;
  typedQuery: string;
  revealedElements: number;
};

export function HeroSearchDemonstration({
  cycle,
  phase,
  typedQuery,
  revealedElements,
}: Props) {
  const showCursor = phase === "idle" || phase === "typing";

  return (
    <div className="hero-search">
      <div
        className={`hero-search__bar${
          phase === "pulse" ? " hero-search__bar--pulse" : ""
        }`}
      >
        <svg
          className="hero-search__icon"
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          aria-hidden="true"
        >
          <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.5" />
          <line
            x1="13"
            y1="13"
            x2="17"
            y2="17"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>

        <span className="hero-search__query">
          {typedQuery}
          {showCursor && <span className="hero-search__cursor" aria-hidden="true" />}
        </span>

        <span className="hero-search__google" aria-hidden="true">
          <span style={{ color: "#4285F4" }}>G</span>
          <span style={{ color: "#EA4335" }}>o</span>
          <span style={{ color: "#FBBC05" }}>o</span>
          <span style={{ color: "#4285F4" }}>g</span>
          <span style={{ color: "#34A853" }}>l</span>
          <span style={{ color: "#EA4335" }}>e</span>
        </span>
      </div>

      <div
        className={`hero-search__result${
          revealedElements > 0 ? " is-revealing" : ""
        }`}
      >
        {revealedElements >= 1 && (
          <div className="hero-search__rank-tag">
            <SignalTriangle size={10} decorative />
            <span>1st result</span>
          </div>
        )}

        {revealedElements >= 2 && (
          <div className="hero-search__url">{cycle.url}</div>
        )}

        {revealedElements >= 3 && (
          <h3 className="hero-search__firm">{cycle.firmName}</h3>
        )}

        {revealedElements >= 4 && (
          <p className="hero-search__snippet">{cycle.snippet}</p>
        )}

        {revealedElements >= 5 && (
          <div className="hero-search__badge" aria-hidden="true">
            <span>{cycle.resultBadgeText}</span>
          </div>
        )}
      </div>
    </div>
  );
}
