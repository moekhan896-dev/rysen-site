"use client";

import { useEffect, useRef, useState } from "react";

// 8 monthly data points (months 1-8). Y values represent growth %.
const POINTS: ReadonlyArray<{ x: number; y: number; label: string }> = [
  { x: 0, y: 0, label: "M1" },
  { x: 1, y: 18, label: "M2" },
  { x: 2, y: 62, label: "M3" },
  { x: 3, y: 145, label: "M4" },
  { x: 4, y: 320, label: "M5" },
  { x: 5, y: 540, label: "M6" },
  { x: 6, y: 870, label: "M7" },
  { x: 7, y: 1240, label: "M8" },
];

const WIDTH = 360;
const HEIGHT = 220;
const PADDING = { left: 36, right: 16, top: 16, bottom: 28 };

function scaleX(x: number): number {
  return (
    PADDING.left +
    ((WIDTH - PADDING.left - PADDING.right) * x) / (POINTS.length - 1)
  );
}

function scaleY(y: number): number {
  const max = 1300;
  return HEIGHT - PADDING.bottom - ((HEIGHT - PADDING.top - PADDING.bottom) * y) / max;
}

export function GrowthChart() {
  const ref = useRef<SVGSVGElement | null>(null);
  const [drawn, setDrawn] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduce) {
      setDrawn(true);
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setDrawn(true);
            obs.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // Build the path string
  const linePath = POINTS.map(
    (p, i) => `${i === 0 ? "M" : "L"} ${scaleX(p.x)} ${scaleY(p.y)}`
  ).join(" ");
  const areaPath = `${linePath} L ${scaleX(POINTS[POINTS.length - 1].x)} ${
    HEIGHT - PADDING.bottom
  } L ${scaleX(0)} ${HEIGHT - PADDING.bottom} Z`;

  const final = POINTS[POINTS.length - 1];

  return (
    <div className="growth-chart-card case-stat">
      <div className="growth-chart-label">Lead volume · 8 months</div>
      <svg
        ref={ref}
        className={`growth-chart-svg${drawn ? " is-drawn" : ""}`}
        viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
        preserveAspectRatio="xMidYMid meet"
        role="img"
        aria-label="Lead volume growth chart, increasing from 0 to 1,240% over 8 months"
      >
        <defs>
          <linearGradient id="growthGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.18" />
            <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Horizontal gridlines */}
        {[0, 400, 800, 1200].map((y, i) => (
          <line
            key={i}
            x1={PADDING.left}
            x2={WIDTH - PADDING.right}
            y1={scaleY(y)}
            y2={scaleY(y)}
            stroke="var(--line)"
            strokeWidth="0.5"
            strokeDasharray="2 4"
          />
        ))}

        {/* Y-axis labels */}
        {[0, 400, 800, 1200].map((y, i) => (
          <text
            key={i}
            x={PADDING.left - 6}
            y={scaleY(y) + 3}
            textAnchor="end"
            fontSize="9"
            fill="var(--text-faint)"
            fontFamily="Geist, system-ui, sans-serif"
          >
            {y === 0 ? "0%" : `${y.toLocaleString()}%`}
          </text>
        ))}

        {/* X-axis labels (every other) */}
        {POINTS.filter((_, i) => i % 2 === 0).map((p) => (
          <text
            key={p.label}
            x={scaleX(p.x)}
            y={HEIGHT - PADDING.bottom + 14}
            textAnchor="middle"
            fontSize="9"
            fill="var(--text-faint)"
            fontFamily="Geist, system-ui, sans-serif"
          >
            {p.label}
          </text>
        ))}

        {/* Area fill (only after line drawn) */}
        <path
          d={areaPath}
          fill="url(#growthGradient)"
          className="growth-chart-area"
        />

        {/* Line — animated stroke-dashoffset */}
        <path
          d={linePath}
          fill="none"
          stroke="var(--accent)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="growth-chart-line"
        />

        {/* Final point dot */}
        <circle
          cx={scaleX(final.x)}
          cy={scaleY(final.y)}
          r="5"
          fill="white"
          stroke="var(--accent)"
          strokeWidth="2"
          className="growth-chart-dot"
        />

        {/* Final value annotation */}
        <text
          x={scaleX(final.x) - 8}
          y={scaleY(final.y) - 10}
          textAnchor="end"
          fontSize="11"
          fontWeight="600"
          fill="var(--accent)"
          fontFamily="Geist, sans-serif"
          className="growth-chart-final-label"
        >
          +1,240%
        </text>
      </svg>
    </div>
  );
}
