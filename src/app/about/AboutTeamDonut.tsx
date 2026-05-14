"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface Segment {
  readonly label: string;
  readonly count: number;
  readonly color: string;
  readonly desc: string;
}

const SEGMENTS: ReadonlyArray<Segment> = [
  { label: "Leadership", count: 2, color: "#1d4ed8", desc: "Strategy & client relationships" },
  { label: "Data Science", count: 4, color: "#3b6ce0", desc: "Attribution & reporting" },
  { label: "SEO Strategists", count: 8, color: "#6189e8", desc: "Search & local" },
  { label: "Content & Account", count: 4, color: "#88a6ef", desc: "Production & cadence" },
];

const TOTAL = 18;
const RADIUS = 80;
const STROKE = 22;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

export function AboutTeamDonut() {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  let cumulative = 0;

  return (
    <div className="about-team-donut" ref={ref}>
      <div className="about-donut-wrap">
        <svg viewBox="0 0 220 220" width="220" height="220" aria-hidden="true">
          <circle
            cx="110"
            cy="110"
            r={RADIUS}
            fill="none"
            stroke="var(--line)"
            strokeWidth={STROKE}
          />
          {SEGMENTS.map((seg) => {
            const fraction = seg.count / TOTAL;
            const dashLength = fraction * CIRCUMFERENCE;
            const offset = -cumulative * CIRCUMFERENCE;
            cumulative += fraction;
            return (
              <motion.circle
                key={seg.label}
                cx="110"
                cy="110"
                r={RADIUS}
                fill="none"
                stroke={seg.color}
                strokeWidth={STROKE}
                strokeLinecap="butt"
                transform="rotate(-90 110 110)"
                strokeDasharray={`${dashLength} ${CIRCUMFERENCE - dashLength}`}
                strokeDashoffset={offset}
                initial={{ pathLength: 0 }}
                animate={inView ? { pathLength: 1 } : undefined}
                transition={{
                  duration: 1.2,
                  ease: [0.16, 1, 0.3, 1],
                }}
              />
            );
          })}
          <text
            x="110"
            y="106"
            textAnchor="middle"
            fontFamily="Geist, sans-serif"
            fontSize="32"
            fontWeight="500"
            fill="var(--text)"
          >
            18
          </text>
          <text
            x="110"
            y="128"
            textAnchor="middle"
            fontFamily="JetBrains Mono, monospace"
            fontSize="10"
            letterSpacing="1.2"
            fill="var(--text-muted)"
          >
            OPERATORS
          </text>
        </svg>
      </div>

      <ul className="about-donut-legend">
        {SEGMENTS.map((seg, i) => (
          <motion.li
            key={seg.label}
            initial={{ opacity: 0, x: 12 }}
            animate={inView ? { opacity: 1, x: 0 } : undefined}
            transition={{ delay: 0.4 + i * 0.08, duration: 0.4 }}
          >
            <span
              className="about-donut-swatch"
              style={{ background: seg.color }}
              aria-hidden="true"
            />
            <div className="about-donut-legend-body">
              <div className="about-donut-legend-row">
                <span className="about-donut-legend-label">{seg.label}</span>
                <span className="about-donut-legend-count">{seg.count}</span>
              </div>
              <div className="about-donut-legend-desc">{seg.desc}</div>
            </div>
          </motion.li>
        ))}
      </ul>

      <div className="about-donut-anchor">14 in Detroit · 4 remote</div>
    </div>
  );
}
