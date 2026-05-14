"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

/* ============ MOCKUPS — each emits its own live animations ============ */

function MockAttribution({ active }: { active: boolean }) {
  // 5 bars, heights tweaked every 6s
  const [heights, setHeights] = useState<number[]>([72, 54, 38, 28, 18]);
  useEffect(() => {
    if (!active) return;
    const id = setInterval(() => {
      setHeights((h) => h.map((v) => Math.max(12, Math.min(92, v + (Math.random() - 0.5) * 18))));
    }, 6000);
    return () => clearInterval(id);
  }, [active]);
  const labels = ["Organic", "GMB", "LSA", "AI", "Direct"];
  return (
    <svg viewBox="0 0 220 120" className="dde-mock-svg" aria-hidden="true">
      <line x1="10" y1="105" x2="210" y2="105" stroke="#404048" strokeWidth="0.5" />
      {heights.map((h, i) => (
        <g key={i}>
          <rect
            x={20 + i * 38}
            y={100 - h}
            width="22"
            height={h}
            rx="2"
            fill="#6b8eff"
            style={{ transition: "y 1.2s ease, height 1.2s ease" }}
          />
          <text x={31 + i * 38} y={116} fontSize="7" fill="#9a9aa3" textAnchor="middle">
            {labels[i]}
          </text>
        </g>
      ))}
    </svg>
  );
}

function MockRankTracking({ active }: { active: boolean }) {
  const [tick, setTick] = useState<number>(0);
  useEffect(() => {
    if (!active) return;
    const id = setInterval(() => setTick((t) => t + 1), 3000);
    return () => clearInterval(id);
  }, [active]);
  const base = [88, 70, 60, 48, 42, 34, 28, 22];
  const jitter = base.map((v, i) => v + Math.sin(tick * 0.7 + i) * 3);
  const pts = jitter.map((v, i) => `${10 + i * 28},${v}`).join(" ");
  return (
    <svg viewBox="0 0 220 120" className="dde-mock-svg" aria-hidden="true">
      <line x1="10" y1="100" x2="210" y2="100" stroke="#404048" strokeWidth="0.5" />
      <polyline
        points={pts}
        fill="none"
        stroke="#6b8eff"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ transition: "all 1s ease" }}
      />
      {jitter.map((v, i) => (
        <circle
          key={i}
          cx={10 + i * 28}
          cy={v}
          r={i === jitter.length - 1 ? 3 : 2}
          fill={i === jitter.length - 1 ? "#6b8eff" : "#22222a"}
          stroke="#6b8eff"
          strokeWidth="1"
          style={{ transition: "cy 1s ease" }}
        />
      ))}
      <text x="10" y="14" fontSize="7" fill="#9a9aa3">
        #28 → #1
      </text>
    </svg>
  );
}

interface CallRow {
  readonly id: number;
  readonly source: string;
  readonly time: string;
}

const CALL_SOURCES = ["Organic", "GMB", "LSA", "Referral", "AI Cite", "Direct"];

function MockCallTracking({ active }: { active: boolean }) {
  const [rows, setRows] = useState<CallRow[]>([
    { id: 1, source: "GMB", time: "2m" },
    { id: 2, source: "Organic", time: "8m" },
    { id: 3, source: "LSA", time: "14m" },
    { id: 4, source: "AI Cite", time: "22m" },
  ]);
  useEffect(() => {
    if (!active) return;
    let next = rows[0]?.id ? rows[0].id + 1 : 5;
    const id = setInterval(() => {
      const src = CALL_SOURCES[Math.floor(Math.random() * CALL_SOURCES.length)];
      const newRow: CallRow = { id: next++, source: src, time: "now" };
      setRows((prev) => [newRow, ...prev.slice(0, 3)].map((r, i) => ({
        ...r,
        time: i === 0 ? "now" : `${(i * 6 + 2)}m`,
      })));
    }, 8000);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);
  return (
    <div className="dde-call-list">
      {rows.map((r) => (
        <motion.div
          key={r.id}
          layout
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="dde-call-row"
        >
          <span className="dde-call-source">{r.source}</span>
          <span className="dde-call-time">{r.time}</span>
        </motion.div>
      ))}
    </div>
  );
}

function MockRevenueFunnel({ active }: { active: boolean }) {
  const [vals, setVals] = useState<number[]>([1200, 340, 92, 47]);
  useEffect(() => {
    if (!active) return;
    const id = setInterval(() => {
      setVals((v) => v.map((x, i) => x + (i === 0 ? 6 : i === 3 ? 1 : 2)));
    }, 5000);
    return () => clearInterval(id);
  }, [active]);
  const labels = ["Leads", "Consults", "Engaged", "Closed"];
  return (
    <div className="dde-funnel">
      {vals.map((v, i) => (
        <div key={i} className="dde-funnel-row">
          <span className="dde-funnel-label">{labels[i]}</span>
          <div
            className="dde-funnel-bar"
            style={{ width: `${100 - i * 22}%` }}
          />
          <span className="dde-funnel-val">{v.toLocaleString()}</span>
        </div>
      ))}
    </div>
  );
}

function MockABTest({ active }: { active: boolean }) {
  const [a, setA] = useState<number>(3.2);
  const [b, setB] = useState<number>(4.1);
  useEffect(() => {
    if (!active) return;
    const id = setInterval(() => {
      setA((v) => Math.max(2, Math.min(6, v + (Math.random() - 0.5) * 0.5)));
      setB((v) => Math.max(2, Math.min(7, v + (Math.random() - 0.5) * 0.5)));
    }, 4000);
    return () => clearInterval(id);
  }, [active]);
  return (
    <div className="dde-ab">
      <div className="dde-ab-row">
        <span className="dde-ab-label">Variant A</span>
        <div className="dde-ab-bar-wrap">
          <div className="dde-ab-bar" style={{ width: `${a * 13}%` }} />
        </div>
        <span className="dde-ab-val">{a.toFixed(2)}%</span>
      </div>
      <div className="dde-ab-row">
        <span className="dde-ab-label">Variant B</span>
        <div className="dde-ab-bar-wrap">
          <div className="dde-ab-bar dde-ab-bar-b" style={{ width: `${b * 13}%` }} />
        </div>
        <span className="dde-ab-val">{b.toFixed(2)}%</span>
      </div>
      <div className="dde-ab-winner">
        Winner: {b > a ? "B" : "A"} (+{Math.abs(b - a).toFixed(2)}%)
      </div>
    </div>
  );
}

function MockCohort({ active }: { active: boolean }) {
  const [hot, setHot] = useState<number>(0);
  useEffect(() => {
    if (!active) return;
    const id = setInterval(() => setHot(Math.floor(Math.random() * 12)), 3000);
    return () => clearInterval(id);
  }, [active]);
  const cells = Array.from({ length: 12 }, (_, i) => i);
  return (
    <div className="dde-cohort">
      {cells.map((i) => (
        <span
          key={i}
          className={`dde-cohort-cell${hot === i ? " is-hot" : ""}`}
          style={{ opacity: 0.3 + ((i % 5) * 0.12) }}
        />
      ))}
    </div>
  );
}

function MockPredictive({ active }: { active: boolean }) {
  const [tick, setTick] = useState<number>(0);
  useEffect(() => {
    if (!active) return;
    const id = setInterval(() => setTick((t) => t + 1), 10000);
    return () => clearInterval(id);
  }, [active]);
  const past = [22, 28, 36, 42, 50, 58];
  const projected = [66, 78, 90, 105];
  const allY = [...past, ...projected].map((v) => 110 - v);
  const pts = allY.map((y, i) => `${10 + i * 18},${y}`).join(" ");
  const splitX = 10 + 5 * 18;
  return (
    <svg viewBox="0 0 220 120" className="dde-mock-svg" aria-hidden="true" key={tick}>
      <line x1="10" y1="110" x2="210" y2="110" stroke="#404048" strokeWidth="0.5" />
      <line x1={splitX} y1="20" x2={splitX} y2="110" stroke="#404048" strokeWidth="0.5" strokeDasharray="2 2" />
      <polyline
        points={pts}
        fill="none"
        stroke="#6b8eff"
        strokeWidth="1.5"
        strokeDasharray={`${past.length * 18 - 5} 1000`}
      />
      <text x="14" y="14" fontSize="7" fill="#9a9aa3">
        Past
      </text>
      <text x={splitX + 4} y="14" fontSize="7" fill="#6b8eff">
        Projected
      </text>
    </svg>
  );
}

/* ============ MODULE DEFINITIONS ============ */

interface Module {
  readonly title: string;
  readonly subtitle: string;
  readonly detail: string;
  readonly live: string;
  readonly Mock: (props: { active: boolean }) => React.JSX.Element;
}

const MODULES: ReadonlyArray<Module> = [
  {
    title: "Custom Attribution Dashboards",
    subtitle: "Per-client, live, source-attributed",
    detail:
      "Every client gets a live dashboard tracking revenue by source. Updated weekly. Reviewed in standing meetings. No more “we got you impressions” reports.",
    live: "LIVE · UPDATED 4M AGO",
    Mock: MockAttribution,
  },
  {
    title: "Custom Rank Tracking",
    subtitle: "Across Google, Maps, AI surfaces",
    detail:
      "Daily rank tracking across Google organic, Google Maps, ChatGPT citations, Perplexity citations, and Google AI Overviews. Most agencies track one surface. We track five.",
    live: "TRACKING · 1,847 QUERIES",
    Mock: MockRankTracking,
  },
  {
    title: "Call Tracking & Source Attribution",
    subtitle: "Every call traced to its origin",
    detail:
      "Every phone call into your firm is tracked to its originating source via CallRail integration. You don't just see leads — you see which marketing channel produced each one.",
    live: "47 CALLS TODAY · 8 SOURCES",
    Mock: MockCallTracking,
  },
  {
    title: "Revenue Attribution",
    subtitle: "Closed cases mapped back to source",
    detail:
      "We integrate with your CRM so closed cases and revenue flow back into your attribution dashboard. You see exactly which marketing dollars produced which client revenue — by source, by query, by channel.",
    live: "$34,800 ATTRIBUTED THIS MONTH",
    Mock: MockRevenueFunnel,
  },
  {
    title: "A/B Testing on Landing Pages",
    subtitle: "Optimize what converts",
    detail:
      "Continuous A/B tests on landing pages — headlines, CTAs, form layouts, social proof placement. Conversion rates compound over time as we identify what works for your specific audience.",
    live: "12 ACTIVE TESTS",
    Mock: MockABTest,
  },
  {
    title: "Cohort Analysis",
    subtitle: "Which sources produce real clients",
    detail:
      "Not all leads are equal. We track which channels produce leads that actually become paying clients. If your GMB leads close at 35% but your paid search leads close at 8%, we know where to invest.",
    live: "ANALYZING 28 COHORTS",
    Mock: MockCohort,
  },
  {
    title: "Predictive Modeling",
    subtitle: "Which markets are worth investing in next",
    detail:
      "We model expected ROI for new keywords, new neighborhoods, new content topics — so you invest in what will compound 6-12 months from now, not what feels obvious today.",
    live: "12 OPPORTUNITIES MODELED",
    Mock: MockPredictive,
  },
];

export function DataDrivenEdge() {
  const ref = useRef<HTMLElement | null>(null);
  const inView = useInView(ref, { margin: "-10%" });
  const reducedMotion = useReducedMotion();
  const active = inView && !reducedMotion;

  return (
    <section className="dde-section" ref={ref} id="data-driven-edge">
      <div className="dde-inner">
        <div className="dde-header">
          <div className="dde-eyebrow">OUR EDGE</div>
          <h2 className="dde-h2">
            Where most agencies guess,{" "}
            <span className="dde-accent-italic">we measure.</span>
          </h2>
          <p className="dde-sub">
            Data infrastructure that most agencies don’t have — and most
            clients don’t realize they’re missing. Every decision we
            make is sourced from real numbers. Every dollar of work reports back
            to real revenue.
          </p>
        </div>

        <div className="dde-grid">
          {MODULES.map((m, i) => {
            const Mock = m.Mock;
            return (
              <motion.div
                key={m.title}
                className="dde-card"
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
              >
                <div className="dde-mock">
                  <Mock active={active} />
                </div>
                <h3 className="dde-card-title">{m.title}</h3>
                <p className="dde-card-subtitle">{m.subtitle}</p>
                <p className="dde-card-detail">{m.detail}</p>
                <div className="dde-card-live">
                  <span className="dde-card-livedot" aria-hidden="true" />
                  {m.live}
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="dde-editorial">
          <p>
            Most agencies have spreadsheets. We have systems. The seven data
            infrastructures above run continuously for every client. Every
            channel is measured. Every dollar reports back. Every decision is
            sourced from real numbers, not vibes.
          </p>
          <p>
            This is what “data-driven” actually means. Not a slogan.
            Not a sales line. Operational infrastructure that produces
            decisions you can defend in a partner meeting — because the data is
            right there, live, in your dashboard.
          </p>
          <p className="dde-editorial-final">
            Marketing decisions should report to math. Pick the agency that
            already does.
          </p>
        </div>
      </div>
    </section>
  );
}
