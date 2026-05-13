"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const TEAM_DOT_COUNT = 18;
const TEAM_COLS = 6;
const TEAM_ROWS = 3;
// 32x32 viewBox, dots arranged in 6x3 grid with even spacing
const TEAM_COL_STEP = 32 / (TEAM_COLS + 1); // ~4.57
const TEAM_ROW_STEP = 32 / (TEAM_ROWS + 1); // 8

function FoundedVisual() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      aria-hidden="true"
      className="cb-svg-founded"
    >
      <rect
        x="3"
        y="6"
        width="26"
        height="22"
        rx="2"
        fill="none"
        stroke="var(--line)"
        strokeWidth="1"
      />
      {/* 3 small header lines */}
      <line x1="6" y1="10" x2="10" y2="10" stroke="var(--text-muted)" strokeWidth="0.8" />
      <line x1="13" y1="10" x2="17" y2="10" stroke="var(--text-muted)" strokeWidth="0.8" />
      <line x1="20" y1="10" x2="24" y2="10" stroke="var(--text-muted)" strokeWidth="0.8" />
      {/* 2019 text */}
      <text
        x="16"
        y="21"
        textAnchor="middle"
        fontFamily="JetBrains Mono, monospace"
        fontSize="8"
        fontWeight="600"
        fill="var(--text)"
      >
        2019
      </text>
      {/* Accent underline that pulses */}
      <rect
        className="cb-founded-underline"
        x="14"
        y="23"
        width="4"
        height="1"
        fill="var(--accent)"
      />
    </svg>
  );
}

function HQVisual() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      aria-hidden="true"
      className="cb-svg-hq"
    >
      {/* 4 buildings, heights 14, 18, 22, 16 from left */}
      <rect x="3" y={32 - 14} width="5" height="14" fill="var(--text)" />
      <rect x="9" y={32 - 18} width="5" height="18" fill="var(--text)" />
      <rect x="15" y={32 - 22} width="5" height="22" fill="var(--text)" />
      <rect x="21" y={32 - 16} width="5" height="16" fill="var(--text)" />
      {/* Pin at base of tallest building (cx around 17.5, base at y=32) */}
      <circle
        className="cb-hq-pin"
        cx="17.5"
        cy="31"
        r="1.5"
        fill="var(--accent)"
      />
    </svg>
  );
}

function TeamVisual() {
  const reducedMotion = useReducedMotion();
  const [pulsedIdx, setPulsedIdx] = useState<number>(-1);

  useEffect(() => {
    if (reducedMotion) return;
    const timeouts: ReturnType<typeof setTimeout>[] = [];
    const id = setInterval(() => {
      const next = Math.floor(Math.random() * TEAM_DOT_COUNT);
      setPulsedIdx(next);
      const t = setTimeout(() => setPulsedIdx(-1), 400);
      timeouts.push(t);
    }, 2000);
    return () => {
      clearInterval(id);
      timeouts.forEach(clearTimeout);
    };
  }, [reducedMotion]);

  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      aria-hidden="true"
      className="cb-svg-team"
    >
      {Array.from({ length: TEAM_DOT_COUNT }, (_, i) => {
        const col = i % TEAM_COLS;
        const row = Math.floor(i / TEAM_COLS);
        const cx = TEAM_COL_STEP * (col + 1);
        const cy = TEAM_ROW_STEP * (row + 1);
        const isPulsed = i === pulsedIdx;
        return (
          <circle
            key={i}
            cx={cx}
            cy={cy}
            r="1.25"
            fill={isPulsed ? "var(--accent)" : "var(--accent-soft)"}
            className={isPulsed ? "cb-team-dot cb-team-dot-pulse" : "cb-team-dot"}
          />
        );
      })}
    </svg>
  );
}

function EngagementsVisual() {
  // 4 bars: FL (20), CA (16), IL (12), NY (14) — heights in 32px viewBox
  const bars: ReadonlyArray<{ x: number; h: number }> = [
    { x: 4, h: 20 },
    { x: 11, h: 16 },
    { x: 18, h: 12 },
    { x: 25, h: 14 },
  ];
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      aria-hidden="true"
      className="cb-svg-engagements"
    >
      {bars.map((b, i) => (
        <rect
          key={i}
          x={b.x}
          y={32 - b.h}
          width="3"
          height={b.h}
          rx="0.5"
          fill="var(--accent)"
          className={`cb-engagement-bar cb-engagement-bar-${i}`}
        />
      ))}
    </svg>
  );
}

function ThisWeekVisual() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      aria-hidden="true"
      className="cb-svg-thisweek"
    >
      {/* Pulsing green LIVE dot */}
      <circle
        className="cb-thisweek-dot"
        cx="8"
        cy="16"
        r="1.5"
        fill="var(--success, #2da567)"
      />
      {/* Waveform polyline with dash-scan animation */}
      <polyline
        className="cb-thisweek-wave"
        points="14,16 17,12 20,18 23,10 26,17 29,16"
        fill="none"
        stroke="var(--accent)"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CredibilityBand() {
  return (
    <section
      className="credibility-band"
      aria-label="Company credibility indicators"
    >
      <div className="credibility-band-inner">
        <div className="credibility-tile">
          <div className="credibility-tile-visual">
            <FoundedVisual />
          </div>
          <div className="credibility-tile-value">2019</div>
          <div className="credibility-tile-label">Founded · 6 years in</div>
        </div>

        <div className="credibility-tile">
          <div className="credibility-tile-visual">
            <HQVisual />
          </div>
          <div className="credibility-tile-value">Detroit</div>
          <div className="credibility-tile-label">Headquartered in MI</div>
        </div>

        <div className="credibility-tile">
          <div className="credibility-tile-visual">
            <TeamVisual />
          </div>
          <div className="credibility-tile-value">18</div>
          <div className="credibility-tile-label">
            Operators across 4 disciplines
          </div>
        </div>

        <div className="credibility-tile">
          <div className="credibility-tile-visual">
            <EngagementsVisual />
          </div>
          <div className="credibility-tile-value">30+</div>
          <div className="credibility-tile-label">Firms currently engaged</div>
        </div>

        <div className="credibility-tile">
          <div className="credibility-tile-visual">
            <ThisWeekVisual />
          </div>
          <div className="credibility-tile-value">47</div>
          <div className="credibility-tile-label">
            Client touchpoints this week
          </div>
        </div>
      </div>

      <div className="credibility-band-footer">
        Independent · Founder-led · Detroit, MI · Est. 2019
      </div>
    </section>
  );
}
