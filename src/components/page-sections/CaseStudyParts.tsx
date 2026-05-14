"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export interface PhaseItem {
  readonly title: string;
  readonly window: string;
  readonly desc: string;
  readonly tactics: ReadonlyArray<string>;
}

export interface TacticItem {
  readonly title: string;
  readonly desc: string;
}

export function CaseStats({
  stats,
}: {
  stats: ReadonlyArray<{ value: string; label: string }>;
}) {
  return (
    <div className="case-hero-stats">
      {stats.map((s, i) => (
        <motion.div
          key={s.label}
          className="case-hero-stat"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.25 + i * 0.08 }}
        >
          <div className="case-hero-stat-value">{s.value}</div>
          <div className="case-hero-stat-label">{s.label}</div>
        </motion.div>
      ))}
    </div>
  );
}

export function CasePhases({ phases }: { phases: ReadonlyArray<PhaseItem> }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });
  return (
    <div className="case-phases" ref={ref}>
      <div
        className={`case-phases-line${inView ? " is-drawn" : ""}`}
        aria-hidden="true"
      />
      {phases.map((p, i) => (
        <motion.div
          key={p.title}
          className="case-phase"
          initial={{ opacity: 0, x: -12 }}
          animate={inView ? { opacity: 1, x: 0 } : undefined}
          transition={{ duration: 0.5, delay: 0.15 + i * 0.12 }}
        >
          <div className="case-phase-marker" aria-hidden="true" />
          <div className="case-phase-body">
            <div className="case-phase-window">{p.window}</div>
            <h3 className="case-phase-title">{p.title}</h3>
            <p className="case-phase-desc">{p.desc}</p>
            <ul className="case-phase-tactics">
              {p.tactics.map((t) => (
                <li key={t}>
                  <span className="case-phase-bullet" aria-hidden="true">
                    +
                  </span>
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export function CaseTacticsGrid({
  tactics,
}: {
  tactics: ReadonlyArray<TacticItem>;
}) {
  return (
    <div className="case-tactics">
      {tactics.map((t, i) => (
        <motion.div
          key={t.title}
          className="case-tactic"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.4, delay: i * 0.06 }}
        >
          <div className="case-tactic-num">{`0${i + 1}`}</div>
          <h3 className="case-tactic-title">{t.title}</h3>
          <p className="case-tactic-desc">{t.desc}</p>
        </motion.div>
      ))}
    </div>
  );
}

type TickFormat = "number" | "rank" | "percent";

function formatTick(v: number, kind: TickFormat): string {
  switch (kind) {
    case "rank":
      return `#${v}`;
    case "percent":
      return `${v}%`;
    default:
      return v.toString();
  }
}

export function CaseResultChart({
  label,
  values,
  tickFormat = "number",
  accentValue,
}: {
  readonly label: string;
  readonly values: ReadonlyArray<number>;
  readonly tickFormat?: TickFormat;
  readonly accentValue?: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  const W = 480;
  const H = 160;
  const max = Math.max(...values);
  const min = Math.min(...values);
  const range = max - min || 1;
  const stepX = W / (values.length - 1);
  const path = values
    .map((v, i) => {
      const x = i * stepX;
      const y = H - ((v - min) / range) * (H - 12) - 6;
      return `${i === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`;
    })
    .join(" ");

  return (
    <div className="case-chart" ref={ref}>
      <div className="case-chart-head">
        <span className="case-chart-label">{label}</span>
        {accentValue && (
          <span className="case-chart-accent">{accentValue}</span>
        )}
      </div>
      <svg
        viewBox={`0 0 ${W} ${H}`}
        width="100%"
        height={H}
        aria-hidden="true"
      >
        <line
          x1="0"
          y1={H - 0.5}
          x2={W}
          y2={H - 0.5}
          stroke="var(--line-strong)"
          strokeWidth="0.5"
        />
        <motion.path
          d={path}
          fill="none"
          stroke="var(--accent)"
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0.3 }}
          animate={inView ? { pathLength: 1, opacity: 1 } : undefined}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        />
        {values.map((v, i) => {
          const x = i * stepX;
          const y = H - ((v - min) / range) * (H - 12) - 6;
          return (
            <motion.circle
              key={i}
              cx={x}
              cy={y}
              r={i === values.length - 1 ? 4 : 2.5}
              fill={i === values.length - 1 ? "var(--accent)" : "var(--accent-soft)"}
              stroke="var(--accent)"
              strokeWidth={i === values.length - 1 ? 1 : 0}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : undefined}
              transition={{ duration: 0.3, delay: 1.0 + i * 0.05 }}
            />
          );
        })}
      </svg>
      <div className="case-chart-axis">
        {values.map((v, i) => (
          <span key={i} className="case-chart-tick">
            {formatTick(v, tickFormat)}
          </span>
        ))}
      </div>
    </div>
  );
}

export function CaseQuote({
  quote,
  attribution,
}: {
  quote: string;
  attribution: string;
}) {
  return (
    <motion.blockquote
      className="case-quote"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.5 }}
    >
      <span className="case-quote-mark" aria-hidden="true">“</span>
      <p className="case-quote-text">{quote}</p>
      <span className="case-quote-mark case-quote-mark-close" aria-hidden="true">
        ”
      </span>
      <cite className="case-quote-cite">{attribution}</cite>
    </motion.blockquote>
  );
}
