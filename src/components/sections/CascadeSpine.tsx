"use client";

// Session 42 — CascadeSpine.
//
// Vertical "spine" SVG that threads down the center of the Outcome
// cascade. Two layers:
//
//   1. A static cool-grey baseline that always reads.
//   2. A green-gradient progress line that draws on scroll using
//      stroke-dasharray + stroke-dashoffset transitioning to 0
//      when the parent enters the viewport (IntersectionObserver).
//
// On top of those two layers, a green pulse dot loops top-to-bottom
// via CSS keyframes, signaling the data flow.
//
// Reduced motion: progress line is rendered fully drawn on mount
// (no transition) and the pulse dot is paused.

import { useEffect, useRef, useState } from "react";

const SPINE_HEIGHT = 1200;
const SPINE_WIDTH = 40;

export function CascadeSpine({
  stationCount = 5,
}: {
  stationCount?: number;
}) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [drawn, setDrawn] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    if (reduced) {
      setDrawn(true);
      return;
    }
    const el = wrapRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setDrawn(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [reduced]);

  // Compute station node Y positions evenly along the spine. The
  // outer wrapper aligns each station card to one of these nodes.
  const nodes = Array.from({ length: stationCount }, (_, i) => {
    const pad = 80;
    const usable = SPINE_HEIGHT - pad * 2;
    return pad + (usable * i) / (stationCount - 1);
  });

  return (
    <div
      ref={wrapRef}
      className={`cascade-spine ${drawn ? "is-drawn" : ""} ${reduced ? "is-reduced" : ""}`}
      aria-hidden="true"
    >
      <svg
        className="cascade-spine__svg"
        viewBox={`0 0 ${SPINE_WIDTH} ${SPINE_HEIGHT}`}
        preserveAspectRatio="none"
        fill="none"
      >
        <defs>
          <linearGradient
            id="cascade-spine-grad"
            x1="0%"
            y1="0%"
            x2="0%"
            y2="100%"
          >
            <stop offset="0%" stopColor="var(--signal-deep, #34C759)" stopOpacity="0.7" />
            <stop offset="50%" stopColor="var(--signal, #6EF06E)" />
            <stop offset="100%" stopColor="var(--signal-bright, #7CFC00)" stopOpacity="0.85" />
          </linearGradient>
        </defs>

        {/* Static cool-grey baseline */}
        <line
          x1={SPINE_WIDTH / 2}
          y1="0"
          x2={SPINE_WIDTH / 2}
          y2={SPINE_HEIGHT}
          stroke="var(--line-medium, rgba(12,13,15,0.14))"
          strokeWidth="2"
          strokeLinecap="round"
        />

        {/* Drawn-on-scroll green progress line */}
        <line
          className="cascade-spine__progress"
          x1={SPINE_WIDTH / 2}
          y1="0"
          x2={SPINE_WIDTH / 2}
          y2={SPINE_HEIGHT}
          stroke="url(#cascade-spine-grad)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray={SPINE_HEIGHT}
          strokeDashoffset={drawn ? 0 : SPINE_HEIGHT}
        />

        {/* Station nodes: brass-style ring + soft green glow on the
            spine where each station meets it. */}
        {nodes.map((y, i) => (
          <g key={i} className="cascade-spine__node-group">
            <circle
              cx={SPINE_WIDTH / 2}
              cy={y}
              r="9"
              fill="var(--signal-soft, rgba(110,240,110,0.12))"
            />
            <circle
              cx={SPINE_WIDTH / 2}
              cy={y}
              r="5"
              fill="var(--canvas-elevated, #FFFFFF)"
              stroke="var(--signal, #6EF06E)"
              strokeWidth="2"
            />
            <circle
              cx={SPINE_WIDTH / 2}
              cy={y}
              r="2"
              fill="var(--signal-deep, #34C759)"
            />
          </g>
        ))}

        {/* Pulse traveling from top to bottom */}
        <g className="cascade-spine__pulse">
          <circle
            cx={SPINE_WIDTH / 2}
            cy="0"
            r="6"
            fill="var(--signal, #6EF06E)"
            opacity="0.9"
          />
          <circle
            cx={SPINE_WIDTH / 2}
            cy="0"
            r="14"
            fill="var(--signal, #6EF06E)"
            opacity="0.25"
          />
        </g>
      </svg>
    </div>
  );
}
