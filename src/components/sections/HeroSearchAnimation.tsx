"use client";

import { useEffect, useState } from "react";
import type { SearchCycle, SearchResult } from "@/lib/heroSearchCycles";

type Props = { cycle: SearchCycle };

type Phase =
  | "idle"
  | "typing"
  | "showing-initial"
  | "sorting"
  | "showing-final"
  | "fadeout";

function SearchIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      aria-hidden="true"
      style={{ flexShrink: 0 }}
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
  );
}

function GoogleWordmark() {
  return (
    <span
      style={{
        fontFamily: "var(--font-inter), system-ui, sans-serif",
        fontWeight: 700,
        fontSize: 14,
        letterSpacing: "-0.01em",
        flexShrink: 0,
      }}
      aria-hidden="true"
    >
      <span style={{ color: "#4285F4" }}>G</span>
      <span style={{ color: "#EA4335" }}>o</span>
      <span style={{ color: "#FBBC05" }}>o</span>
      <span style={{ color: "#4285F4" }}>g</span>
      <span style={{ color: "#34A853" }}>l</span>
      <span style={{ color: "#EA4335" }}>e</span>
    </span>
  );
}

function ResultRow({
  result,
  isSorting,
  highlight,
}: {
  result: SearchResult;
  isSorting?: boolean;
  highlight?: boolean;
}) {
  const classes = [
    "hero-demo__result",
    result.isClient ? "is-client" : "",
    isSorting ? "is-sorting" : "",
    highlight ? "is-highlight" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classes}>
      <div className="hero-demo__result-rank">{result.position}</div>
      <div className="hero-demo__result-content">
        <div className="hero-demo__result-url">{result.url}</div>
        <div className="hero-demo__result-title">{result.title}</div>
        <div className="hero-demo__result-snippet">{result.snippet}</div>
      </div>
      {highlight && (
        <div className="hero-demo__result-badge" aria-hidden="true">
          #1
        </div>
      )}
    </div>
  );
}

export function HeroSearchAnimation({ cycle }: Props) {
  const [phase, setPhase] = useState<Phase>("idle");
  const [typedQuery, setTypedQuery] = useState("");

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setTypedQuery(cycle.query);
      setPhase("showing-final");
      return;
    }

    const timeouts: ReturnType<typeof setTimeout>[] = [];
    setPhase("idle");
    setTypedQuery("");

    timeouts.push(setTimeout(() => setPhase("typing"), 400));

    const chars = cycle.query.length;
    const typingDuration = 2000;
    const perChar = typingDuration / chars;
    for (let i = 0; i < chars; i++) {
      timeouts.push(
        setTimeout(
          () => setTypedQuery(cycle.query.slice(0, i + 1)),
          400 + perChar * (i + 1)
        )
      );
    }

    timeouts.push(setTimeout(() => setPhase("showing-initial"), 2400));
    timeouts.push(setTimeout(() => setPhase("sorting"), 4000));
    timeouts.push(setTimeout(() => setPhase("showing-final"), 5500));
    timeouts.push(setTimeout(() => setPhase("fadeout"), 7500));

    return () => timeouts.forEach(clearTimeout);
  }, [cycle.id, cycle.query]);

  return (
    <div className={`hero-demo${phase === "fadeout" ? " is-fading" : ""}`}>
      <div
        className={`hero-demo__bar${
          phase === "showing-final" || phase === "fadeout" ? " has-result" : ""
        }`}
      >
        <SearchIcon />
        <span className="hero-demo__query">
          {typedQuery}
          {(phase === "idle" || phase === "typing") && (
            <span className="hero-demo__cursor" aria-hidden="true" />
          )}
        </span>
        <GoogleWordmark />
      </div>

      <div className="hero-demo__results">
        {(phase === "showing-initial" || phase === "sorting") &&
          cycle.initialResults.map((result) => (
            <ResultRow
              key={`initial-${result.url}`}
              result={result}
              isSorting={phase === "sorting" && result.isClient}
            />
          ))}

        {(phase === "showing-final" || phase === "fadeout") &&
          cycle.finalResults.map((result) => (
            <ResultRow
              key={`final-${result.url}`}
              result={result}
              highlight={result.isClient}
            />
          ))}
      </div>
    </div>
  );
}
