"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Activity, MapPin, MessageSquare, Search, Sparkles, Star } from "lucide-react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

type StatExpanded = {
  readonly client: string;
  readonly description: string;
  readonly chart: ReadonlyArray<number>;
  readonly link: string;
};

type Stat = {
  readonly num: number;
  readonly displaySuffix: string;
  readonly label: string;
  readonly expanded: StatExpanded;
  readonly sparkline: ReadonlyArray<number>;
};

const stats: ReadonlyArray<Stat> = [
  {
    num: 30,
    displaySuffix: "+",
    label: "Law firms and medical practices currently engaged",
    expanded: {
      client: "AWS Law Firm · Tyler Family Law · Hartman Dermatology",
      description:
        "Engagements range from six months to three-plus years. Most clients renew before their first contract ends.",
      chart: [38, 48, 55, 62, 70, 80, 92, 100],
      link: "/clients",
    },
    sparkline: [10, 14, 18, 22, 26, 31, 35, 40, 46, 52, 60, 70],
  },
  {
    num: 200,
    displaySuffix: "+",
    label: "Top-3 ranks across priority queries",
    expanded: {
      client: "Aggregated across 30 active engagements",
      description:
        "Sustained top-3 positions in Google and Maps Pack for our clients' most valuable local-intent queries.",
      chart: [22, 35, 48, 60, 72, 85, 92, 100],
      link: "/work",
    },
    sparkline: [20, 28, 34, 40, 50, 58, 70, 82, 95, 110, 130, 155],
  },
  {
    num: 1240,
    displaySuffix: "%",
    label: "Highest single-client growth in 8 months",
    expanded: {
      client: "Tyler Family Law · Atlanta",
      description:
        "1,240% lead-volume growth in eight months. Now operating a four-week intake waitlist.",
      chart: [4, 10, 22, 38, 56, 78, 92, 100],
      link: "/case-studies/tyler-family-law",
    },
    sparkline: [5, 8, 12, 22, 38, 60, 95, 150, 240, 380, 580, 820],
  },
];

type ActivitySource = "search" | "chatgpt" | "maps" | "perplexity" | "reviews" | "snippet" | "local";
interface Activity {
  readonly text: string;
  readonly highlight: string;
  readonly time: string;
  readonly source: ActivitySource;
}

const ACTIVITY_POOL: ReadonlyArray<Activity> = [
  { text: "AWS Law · #1 ", highlight: "“probate lawyer tampa”", time: "2m ago", source: "search" },
  { text: "Tyler Family Law · ", highlight: "cited by ChatGPT", time: "8m ago", source: "chatgpt" },
  { text: "Hartman Dermatology · ", highlight: "22 reviews this week", time: "14m ago", source: "reviews" },
  { text: "Coleman & Co · #1 ", highlight: "“estate attorney LA”", time: "31m ago", source: "search" },
  { text: "Ridge Dental · ", highlight: "Perplexity primary source", time: "42m ago", source: "perplexity" },
  { text: "Vance Legal · ", highlight: "+3 positions Chicago", time: "1h ago", source: "local" },
  { text: "Meridian Health · ", highlight: "featured snippet NYC", time: "1h ago", source: "snippet" },
  { text: "AWS Law · ", highlight: "14 calls today", time: "2h ago", source: "maps" },
];

function ActivityIcon({ source }: { source: ActivitySource }) {
  switch (source) {
    case "search":
      return <Search size={11} strokeWidth={2} aria-hidden="true" />;
    case "chatgpt":
    case "snippet":
      return <Sparkles size={11} strokeWidth={2} aria-hidden="true" />;
    case "maps":
    case "local":
      return <MapPin size={11} strokeWidth={2} aria-hidden="true" />;
    case "perplexity":
      return <MessageSquare size={11} strokeWidth={2} aria-hidden="true" />;
    case "reviews":
      return <Star size={11} strokeWidth={2} aria-hidden="true" />;
  }
}

function useCountUp(
  target: number,
  trigger: boolean,
  duration = 1500
): { display: string; complete: boolean } {
  const [value, setValue] = useState(0);
  const [complete, setComplete] = useState(false);
  const rafRef = useRef<number | null>(null);
  const startedRef = useRef(false);

  useEffect(() => {
    if (!trigger || startedRef.current) return;
    startedRef.current = true;

    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduce) {
      setValue(target);
      setComplete(true);
      return;
    }

    const start = performance.now();
    const easeOutExpo = (t: number): number =>
      t === 1 ? 1 : 1 - Math.pow(2, -10 * t);

    const frame = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      setValue(Math.round(easeOutExpo(t) * target));
      if (t < 1) {
        rafRef.current = requestAnimationFrame(frame);
      } else {
        setComplete(true);
      }
    };
    rafRef.current = requestAnimationFrame(frame);

    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, [trigger, target, duration]);

  return { display: value.toLocaleString(), complete };
}

/** Builds an SVG path string for a sparkline given normalized 0-100 Y values. */
function sparklinePath(values: ReadonlyArray<number>, width: number, height: number): string {
  if (values.length < 2) return "";
  const max = Math.max(...values);
  const min = Math.min(...values);
  const range = max - min || 1;
  const stepX = width / (values.length - 1);
  return values
    .map((v, i) => {
      const x = i * stepX;
      const y = height - ((v - min) / range) * height;
      return `${i === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`;
    })
    .join(" ");
}

function Sparkline({ values, redrawKey }: { values: ReadonlyArray<number>; redrawKey: number }) {
  const W = 80;
  const H = 24;
  const d = sparklinePath(values, W, H);
  return (
    <svg
      className="stat-sparkline"
      viewBox={`0 0 ${W} ${H}`}
      width={W}
      height={H}
      aria-hidden="true"
    >
      <motion.path
        key={redrawKey}
        d={d}
        fill="none"
        stroke="var(--accent)"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0.4 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
      />
    </svg>
  );
}

function StatCard({
  stat,
  active,
  inView,
  onToggle,
  sparkKey,
  breathTick,
}: {
  stat: Stat;
  active: boolean;
  inView: boolean;
  onToggle: () => void;
  sparkKey: number;
  breathTick: number;
}) {
  const { display, complete } = useCountUp(stat.num, inView);

  // Split display into "all but last digit" + "last digit" so we can flicker just the tail.
  const lastDigit = display.slice(-1);
  const restOfNumber = display.slice(0, -1);

  return (
    <button
      type="button"
      onClick={onToggle}
      className={`stat-card-interactive${active ? " is-active" : ""}`}
      aria-expanded={active}
    >
      <div className="stat-num">
        <span className="counter">
          {restOfNumber}
          <span
            className={`stat-last-digit${
              complete && breathTick > 0 ? " is-breathing" : ""
            }`}
            key={`breath-${breathTick}`}
          >
            {lastDigit}
          </span>
        </span>
        {stat.displaySuffix}
      </div>
      <div className="stat-rule" aria-hidden="true"></div>

      <Sparkline values={stat.sparkline} redrawKey={sparkKey} />

      <div className="stat-label">{stat.label}</div>

      <AnimatePresence initial={false}>
        {active && (
          <motion.div
            key="expanded"
            className="stat-expanded"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="stat-expanded-inner">
              <div className="stat-chart" aria-hidden="true">
                {stat.expanded.chart.map((h, i) => (
                  <span
                    key={i}
                    className="stat-chart-bar"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
              <div className="stat-expanded-client">{stat.expanded.client}</div>
              <p className="stat-expanded-desc">{stat.expanded.description}</p>
              <span className="stat-expanded-link">
                Learn more <span className="arrow">→</span>
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
}

/** Detroit + 9 client cities, normalized to viewBox 0..1000 × 0..520. */
const CITY_DOTS: ReadonlyArray<{
  readonly name: string;
  readonly cx: number;
  readonly cy: number;
  readonly hq?: boolean;
}> = [
  { name: "Detroit (HQ)", cx: 720, cy: 195, hq: true },
  { name: "Tampa", cx: 778, cy: 380 },
  { name: "Miami", cx: 808, cy: 410 },
  { name: "Orlando", cx: 790, cy: 370 },
  { name: "Jacksonville", cx: 786, cy: 350 },
  { name: "Los Angeles", cx: 162, cy: 290 },
  { name: "San Diego", cx: 178, cy: 305 },
  { name: "San Francisco", cx: 110, cy: 250 },
  { name: "Chicago", cx: 660, cy: 215 },
  { name: "New York", cx: 855, cy: 215 },
];

function UsMap() {
  return (
    <svg
      className="stats-usmap"
      viewBox="0 0 1000 520"
      aria-hidden="true"
      preserveAspectRatio="xMidYMid meet"
    >
      {/* Stylized continental US outline, single thin path (approximate) */}
      <path
        className="stats-usmap-path"
        d="M 90,250 L 60,210 L 80,160 L 130,130 L 200,110 L 290,90 L 380,80 L 470,70 L 560,80 L 660,90 L 760,100 L 840,120 L 905,160 L 935,210 L 925,260 L 905,300 L 870,335 L 830,365 L 790,395 L 760,420 L 735,440 L 700,455 L 660,455 L 620,440 L 595,420 L 575,395 L 555,370 L 520,355 L 480,350 L 440,355 L 400,360 L 360,365 L 320,360 L 280,350 L 240,335 L 205,320 L 175,300 L 150,285 L 120,275 Z"
        fill="none"
        stroke="var(--line-strong)"
        strokeWidth="1"
      />
      {/* Florida tail */}
      <path
        className="stats-usmap-path"
        d="M 770,360 L 790,395 L 810,415 L 815,395 L 805,370 Z"
        fill="none"
        stroke="var(--line-strong)"
        strokeWidth="1"
      />

      {CITY_DOTS.map((city, i) =>
        city.hq ? (
          <g key={city.name} className="stats-usmap-hq">
            <circle
              cx={city.cx}
              cy={city.cy}
              r="14"
              fill="none"
              stroke="var(--accent)"
              strokeWidth="0.8"
              className="stats-usmap-hq-ring stats-usmap-hq-ring-outer"
            />
            <circle
              cx={city.cx}
              cy={city.cy}
              r="8"
              fill="none"
              stroke="var(--accent)"
              strokeWidth="1"
              className="stats-usmap-hq-ring stats-usmap-hq-ring-inner"
            />
            <circle
              cx={city.cx}
              cy={city.cy}
              r="4"
              fill="var(--accent)"
            />
          </g>
        ) : (
          <circle
            key={city.name}
            cx={city.cx}
            cy={city.cy}
            r="3"
            fill="var(--accent)"
            className={`stats-usmap-dot stats-usmap-dot-${i % 4}`}
          />
        )
      )}
    </svg>
  );
}

export function InteractiveStats() {
  const reducedMotion = useReducedMotion();
  const [activeIdx, setActiveIdx] = useState<number | null>(null);
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  // Activity feed state
  const [activityFeed, setActivityFeed] = useState<ReadonlyArray<{ key: string; activity: Activity }>>([]);
  const activityIdxRef = useRef<number>(0);
  const activityKeyRef = useRef<number>(0);

  // Sparkline redraw + number breathing
  const [sparkKey, setSparkKey] = useState<number>(0);
  const [breathTick, setBreathTick] = useState<number>(0);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el || !("IntersectionObserver" in window)) {
      setInView(true);
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            obs.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // Seed activity feed
  useEffect(() => {
    if (!inView || activityFeed.length > 0) return;
    const seed: { key: string; activity: Activity }[] = [];
    for (let i = 0; i < 5; i++) {
      const a = ACTIVITY_POOL[i % ACTIVITY_POOL.length];
      seed.push({ key: `seed-${i}`, activity: a });
    }
    activityIdxRef.current = 5 % ACTIVITY_POOL.length;
    activityKeyRef.current = 5;
    setActivityFeed(seed);
  }, [inView, activityFeed.length]);

  // Cycle activity every 5s
  useEffect(() => {
    if (!inView || reducedMotion) return;
    const id = setInterval(() => {
      const a = ACTIVITY_POOL[activityIdxRef.current % ACTIVITY_POOL.length];
      activityIdxRef.current = (activityIdxRef.current + 1) % ACTIVITY_POOL.length;
      activityKeyRef.current += 1;
      const entry = { key: `a-${activityKeyRef.current}`, activity: a };
      setActivityFeed((prev) => [entry, ...prev].slice(0, 5));
    }, 5000);
    return () => clearInterval(id);
  }, [inView, reducedMotion]);

  // Sparkline redraw cycle every 15s
  useEffect(() => {
    if (!inView || reducedMotion) return;
    const id = setInterval(() => setSparkKey((k) => k + 1), 15000);
    return () => clearInterval(id);
  }, [inView, reducedMotion]);

  // Number breathing every 8s (after first count-up settles)
  useEffect(() => {
    if (!inView || reducedMotion) return;
    const id = setInterval(() => setBreathTick((t) => t + 1), 8000);
    return () => clearInterval(id);
  }, [inView, reducedMotion]);

  return (
    <section
      className="stats-section stats-section-v4"
      id="stats"
      ref={sectionRef}
    >
      <div className="stats-divider" aria-hidden="true"></div>

      {/* Ambient US map background */}
      <div className="stats-usmap-wrap" aria-hidden="true">
        <UsMap />
      </div>

      <div className="stats-inner">
        <div className="section-2-eyebrow">By the numbers</div>
        <h2 className="section-2-h2">
          Quietly producing{" "}
          <span className="accent-text">exceptional</span> results.
        </h2>

        <div className="stats-layout">
          {/* Live activity feed */}
          <aside className="stats-activity" aria-label="Live client activity feed">
            <div className="stats-activity-head">
              <span className="stats-activity-dot" aria-hidden="true" />
              <Activity size={11} strokeWidth={2} aria-hidden="true" />
              <span className="stats-activity-label">Live activity</span>
            </div>
            <ul className="stats-activity-list" aria-live="polite">
              <AnimatePresence initial={false}>
                {activityFeed.map(({ key, activity }) => (
                  <motion.li
                    key={key}
                    layout
                    className="stats-activity-item"
                    initial={{ opacity: 0, y: -14 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <span className="stats-activity-icon">
                      <ActivityIcon source={activity.source} />
                    </span>
                    <span className="stats-activity-text">
                      {activity.text}
                      <span className="stats-activity-highlight">
                        {activity.highlight}
                      </span>
                    </span>
                    <span className="stats-activity-time">{activity.time}</span>
                  </motion.li>
                ))}
              </AnimatePresence>
            </ul>
          </aside>

          {/* Stat cards */}
          <div className="stats-grid stats-grid-interactive">
            {stats.map((stat, i) => (
              <StatCard
                key={stat.label}
                stat={stat}
                active={activeIdx === i}
                inView={inView}
                onToggle={() => setActiveIdx(activeIdx === i ? null : i)}
                sparkKey={sparkKey}
                breathTick={breathTick}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
