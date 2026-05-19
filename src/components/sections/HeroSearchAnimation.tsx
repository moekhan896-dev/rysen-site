"use client";

import { useEffect, useState } from "react";
import type { HeroCycle, SearchResult } from "@/lib/heroCycles";

type Phase = "idle" | "typing" | "initial" | "sorting" | "final" | "fadeout";

function SearchIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5" />
      <line
        x1="12.5"
        y1="12.5"
        x2="16"
        y2="16"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function GoogleWord() {
  return (
    <span
      style={{
        fontFamily: "var(--font-inter), system-ui, sans-serif",
        fontWeight: 700,
        fontSize: 13,
        letterSpacing: "-0.01em",
      }}
      aria-label="Google"
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
  mode,
  sorting,
}: {
  result: SearchResult;
  mode: "initial" | "final";
  sorting?: boolean;
}) {
  const isWinner = mode === "final" && !!result.isClient;
  const classes = [
    "hsa__row",
    sorting ? "is-sorting" : "",
    isWinner ? "is-winner" : "",
  ]
    .filter(Boolean)
    .join(" ");
  return (
    <div className={classes}>
      <div className="hsa__pip">{result.position}</div>
      <div className="hsa__row-body">
        <div className="hsa__domain">{result.domain}</div>
        <div className="hsa__title">{result.title}</div>
        <div className="hsa__snippet">{result.snippet}</div>
      </div>
      {isWinner && <div className="hsa__winner-tag">#1</div>}
    </div>
  );
}

export function HeroSearchAnimation({ cycle }: { cycle: HeroCycle }) {
  const [phase, setPhase] = useState<Phase>("idle");
  const [typed, setTyped] = useState("");

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setTyped(cycle.query);
      setPhase("final");
      return;
    }
    setPhase("idle");
    setTyped("");
    const timeouts: ReturnType<typeof setTimeout>[] = [];

    timeouts.push(setTimeout(() => setPhase("typing"), 400));

    const chars = cycle.query.length;
    const perChar = 2000 / chars;
    for (let i = 0; i < chars; i++) {
      timeouts.push(
        setTimeout(() => setTyped(cycle.query.slice(0, i + 1)), 400 + perChar * (i + 1))
      );
    }

    timeouts.push(setTimeout(() => setPhase("initial"), 2400));
    timeouts.push(setTimeout(() => setPhase("sorting"), 4000));
    timeouts.push(setTimeout(() => setPhase("final"), 5500));
    timeouts.push(setTimeout(() => setPhase("fadeout"), 7500));

    return () => timeouts.forEach(clearTimeout);
  }, [cycle.id, cycle.query]);

  const showInitial = phase === "initial" || phase === "sorting";
  const showFinal = phase === "final" || phase === "fadeout";

  return (
    <div className={`hsa${phase === "fadeout" ? " is-fading" : ""}`}>
      <div className="hsa__bar">
        <SearchIcon />
        <span className="hsa__query">
          {typed}
          {(phase === "idle" || phase === "typing") && (
            <span className="hsa__cursor" aria-hidden="true" />
          )}
        </span>
        <GoogleWord />
      </div>

      <div className="hsa__results">
        {showInitial &&
          cycle.initial.map((r) => (
            <ResultRow
              key={`i-${r.domain}`}
              result={r}
              mode="initial"
              sorting={phase === "sorting" && r.isClient}
            />
          ))}
        {showFinal &&
          cycle.final.map((r) => (
            <ResultRow key={`f-${r.domain}`} result={r} mode="final" />
          ))}
      </div>
    </div>
  );
}
