"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MapPin, MessageSquare, Search, Sparkles, Star, Navigation } from "lucide-react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const NETWORK_LINES: ReadonlyArray<[number, number, number, number]> = [
  [120, 80, 480, 220],
  [480, 220, 360, 420],
  [480, 220, 760, 180],
  [760, 180, 980, 340],
  [360, 420, 640, 500],
  [640, 500, 980, 340],
  [80, 360, 360, 420],
  [120, 80, 320, 60],
  [320, 60, 760, 180],
  [840, 60, 980, 340],
  [840, 60, 760, 180],
  [200, 480, 80, 360],
  [200, 480, 360, 420],
  [640, 500, 800, 540],
  [800, 540, 1080, 500],
  [1080, 500, 980, 340],
  [560, 60, 760, 180],
  [560, 60, 480, 220],
  [1080, 220, 980, 340],
  [1080, 220, 760, 180],
];

const NETWORK_NODES: ReadonlyArray<[number, number]> = [
  [120, 80], [320, 60], [560, 60], [840, 60], [80, 360], [200, 480],
  [360, 420], [480, 220], [640, 500], [760, 180], [800, 540], [980, 340],
  [1080, 220], [1080, 500],
];

const NOISE_FEED: ReadonlyArray<string> = [
  "Audience refresh: 18,247 records",
  "Pixel fired: home-page-view",
  "Cohort split: A/B test running",
  "Attribution model: last-touch",
  "Campaign ID: 8472-A loaded",
  "Pixel fired: scroll-50%",
];

type RevenueEventSource = "search" | "chatgpt" | "maps" | "perplexity" | "aio" | "local" | "reviews";

interface RevenueEvent {
  readonly id: string;
  readonly source: RevenueEventSource;
  readonly sourceLabel: string;
  readonly context: string;
  readonly result: string;
  readonly amount: number;
}

const REVENUE_POOL: ReadonlyArray<RevenueEvent> = [
  {
    id: "google-probate",
    source: "search",
    sourceLabel: "Google organic",
    context: "“probate lawyer tampa”",
    result: "Position #1 cited",
    amount: 4800,
  },
  {
    id: "chatgpt-estate",
    source: "chatgpt",
    sourceLabel: "ChatGPT citation",
    context: "“estate planning tampa”",
    result: "#1 referenced",
    amount: 2400,
  },
  {
    id: "maps-reviews",
    source: "reviews",
    sourceLabel: "Google Maps",
    context: "5★ review velocity · 22 calls/wk",
    result: "Direct intake",
    amount: 11200,
  },
  {
    id: "perplexity-estate",
    source: "perplexity",
    sourceLabel: "Perplexity citation",
    context: "“tampa estate attorney”",
    result: "Primary source",
    amount: 3600,
  },
  {
    id: "aio-snippet",
    source: "aio",
    sourceLabel: "Google AI Overviews",
    context: "Featured snippet · 1 of 3",
    result: "Direct cited",
    amount: 5200,
  },
  {
    id: "google-court",
    source: "search",
    sourceLabel: "Organic search",
    context: "“tampa probate court”",
    result: "Position #2",
    amount: 1800,
  },
  {
    id: "local-pack",
    source: "local",
    sourceLabel: "Local pack",
    context: "3-pack · 14 directions",
    result: "Map intent",
    amount: 4400,
  },
];

function SourceIcon({ source }: { source: RevenueEventSource }) {
  switch (source) {
    case "search":
      return <Search size={11} strokeWidth={2} aria-hidden="true" />;
    case "chatgpt":
      return <Sparkles size={11} strokeWidth={2} aria-hidden="true" />;
    case "maps":
    case "local":
      return <MapPin size={11} strokeWidth={2} aria-hidden="true" />;
    case "perplexity":
      return <MessageSquare size={11} strokeWidth={2} aria-hidden="true" />;
    case "aio":
      return <Sparkles size={11} strokeWidth={2} aria-hidden="true" />;
    case "reviews":
      return <Star size={11} strokeWidth={2} aria-hidden="true" />;
    default:
      return <Navigation size={11} strokeWidth={2} aria-hidden="true" />;
  }
}

function formatNumber(n: number): string {
  return Math.round(n).toLocaleString();
}

interface FeedEntry {
  readonly key: string;
  readonly event: RevenueEvent;
  readonly insertedAt: number; // ms timestamp
}

export function EditorialBeat() {
  const reducedMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement | null>(null);
  const [inView, setInView] = useState(false);

  // --- LEFT: noise dashboard state ---
  const [impressions, setImpressions] = useState<number>(4287193);
  const [reach, setReach] = useState<number>(1842117);
  const [engagementRate, setEngagementRate] = useState<number>(3.24);
  const [ctrBars, setCtrBars] = useState<number[]>([62, 38, 71, 44, 58, 49]);
  const [noiseIdx, setNoiseIdx] = useState<number>(0);

  // --- RIGHT: revenue feed state ---
  const [feed, setFeed] = useState<ReadonlyArray<FeedEntry>>([]);
  const poolIdxRef = useRef<number>(0);
  const eventCounterRef = useRef<number>(0);
  const [totalRevenue, setTotalRevenue] = useState<number>(34800);
  const nowRef = useRef<number>(0);
  const [, forceTick] = useState<number>(0);

  // Detect in-view to gate the ambient animations
  useEffect(() => {
    const el = sectionRef.current;
    if (!el || !("IntersectionObserver" in window)) {
      setInView(true);
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => setInView(e.isIntersecting));
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // Seed initial feed entries on first view
  useEffect(() => {
    if (!inView || feed.length > 0) return;
    const now = Date.now();
    const seed: FeedEntry[] = [];
    for (let i = 0; i < 4; i++) {
      const ev = REVENUE_POOL[i % REVENUE_POOL.length];
      seed.push({
        key: `seed-${i}`,
        event: ev,
        insertedAt: now - (i + 1) * 6 * 60 * 1000, // stagger fake timestamps
      });
    }
    poolIdxRef.current = 4 % REVENUE_POOL.length;
    setFeed(seed);
  }, [inView, feed.length]);

  // Noise dashboard: impressions tick every 1.2s
  useEffect(() => {
    if (!inView || reducedMotion) return;
    const id = setInterval(() => {
      setImpressions((v) => v + Math.round(-8000 + Math.random() * 20000));
    }, 1200);
    return () => clearInterval(id);
  }, [inView, reducedMotion]);

  // Reach: every 1.8s
  useEffect(() => {
    if (!inView || reducedMotion) return;
    const id = setInterval(() => {
      setReach((v) => v + Math.round(-3000 + Math.random() * 6000));
    }, 1800);
    return () => clearInterval(id);
  }, [inView, reducedMotion]);

  // Engagement rate: every 2.5s, drift between 2.8% and 3.6%
  useEffect(() => {
    if (!inView || reducedMotion) return;
    const id = setInterval(() => {
      setEngagementRate(() => 2.8 + Math.random() * 0.8);
    }, 2500);
    return () => clearInterval(id);
  }, [inView, reducedMotion]);

  // CTR bars: every 3s
  useEffect(() => {
    if (!inView || reducedMotion) return;
    const id = setInterval(() => {
      setCtrBars(() => Array.from({ length: 6 }, () => 25 + Math.random() * 70));
    }, 3000);
    return () => clearInterval(id);
  }, [inView, reducedMotion]);

  // Noise feed cycling: every 2s
  useEffect(() => {
    if (!inView || reducedMotion) return;
    const id = setInterval(() => {
      setNoiseIdx((i) => (i + 1) % NOISE_FEED.length);
    }, 2000);
    return () => clearInterval(id);
  }, [inView, reducedMotion]);

  // Revenue feed: new event every 6s
  useEffect(() => {
    if (!inView || reducedMotion) return;
    const id = setInterval(() => {
      const ev = REVENUE_POOL[poolIdxRef.current % REVENUE_POOL.length];
      poolIdxRef.current = (poolIdxRef.current + 1) % REVENUE_POOL.length;
      eventCounterRef.current += 1;
      const entry: FeedEntry = {
        key: `e-${eventCounterRef.current}`,
        event: ev,
        insertedAt: Date.now(),
      };
      setFeed((prev) => [entry, ...prev].slice(0, 5));
    }, 6000);
    return () => clearInterval(id);
  }, [inView, reducedMotion]);

  // Revenue counter: ticks up every 4s by $80-$200
  useEffect(() => {
    if (!inView || reducedMotion) return;
    const id = setInterval(() => {
      setTotalRevenue((v) => v + 80 + Math.floor(Math.random() * 121));
    }, 4000);
    return () => clearInterval(id);
  }, [inView, reducedMotion]);

  // Drive a periodic re-render so "2m ago" timestamps stay current
  useEffect(() => {
    if (!inView) return;
    const id = setInterval(() => {
      nowRef.current = Date.now();
      forceTick((n) => n + 1);
    }, 30000);
    return () => clearInterval(id);
  }, [inView]);

  return (
    <section className="editorial-beat editorial-beat-v4" data-reveal ref={sectionRef}>
      <svg
        className="editorial-beat-network"
        viewBox="0 0 1200 600"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        {NETWORK_LINES.map(([x1, y1, x2, y2], i) => (
          <line
            key={`l-${i}`}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="currentColor"
            strokeWidth="0.5"
            className={`editorial-beat-line editorial-beat-line-${i % 4}`}
          />
        ))}
        {NETWORK_NODES.map(([cx, cy], i) => (
          <circle
            key={`n-${i}`}
            cx={cx}
            cy={cy}
            r="2"
            fill="currentColor"
            className={`editorial-beat-node editorial-beat-node-${i % 3}`}
          />
        ))}
      </svg>

      <div className="editorial-beat-content">
        <p className="editorial-beat-text">
          Most agencies sell{" "}
          <span className="editorial-beat-strike">impressions</span>.
          <br />
          We sell{" "}
          <span className="editorial-beat-emphasis">first position</span>.
        </p>
      </div>

      {/* DUAL PANEL FEED — NOISE vs REVENUE */}
      <div className="eb-panels">
        {/* LEFT — noise dashboard */}
        <div className="eb-noise-panel" aria-label="What other agencies show you">
          <div className="eb-noise-scanlines" aria-hidden="true" />

          <div className="eb-panel-eyebrow">What other agencies show you</div>

          <div className="eb-noise-metric eb-noise-metric-primary">
            <div className="eb-noise-label">Impressions this month</div>
            <motion.div
              className="eb-noise-bignum"
              key={Math.floor(impressions / 5)}
              initial={{ opacity: 0.55 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {formatNumber(impressions)}
            </motion.div>
          </div>

          <div className="eb-noise-row">
            <div className="eb-noise-metric">
              <div className="eb-noise-label">Reach</div>
              <div className="eb-noise-num">{formatNumber(reach)}</div>
            </div>
            <div className="eb-noise-metric">
              <div className="eb-noise-label">Engagement rate</div>
              <div className="eb-noise-num">{engagementRate.toFixed(2)}%</div>
            </div>
          </div>

          <div className="eb-noise-metric">
            <div className="eb-noise-label">CTR (last 6 days)</div>
            <div className="eb-noise-bars" aria-hidden="true">
              {ctrBars.map((h, i) => (
                <span
                  key={i}
                  className="eb-noise-bar"
                  style={{ height: `${Math.round(h)}%` }}
                />
              ))}
            </div>
          </div>

          <div className="eb-noise-feed">
            <span className="eb-noise-feed-prefix">›</span>
            <AnimatePresence mode="wait">
              <motion.span
                key={noiseIdx}
                className="eb-noise-feed-text"
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.2 }}
              >
                {NOISE_FEED[noiseIdx]}
              </motion.span>
            </AnimatePresence>
          </div>

          <div className="eb-noise-footer">
            What did this generate for your firm? Unclear.
          </div>
        </div>

        {/* DIVIDER with horizontal pulse */}
        <div className="eb-divider" aria-hidden="true">
          <span className="eb-divider-pulse" />
        </div>

        {/* RIGHT — live revenue feed */}
        <div className="eb-revenue-panel" aria-label="What we show you">
          <div className="eb-rev-glow" aria-hidden="true" />

          <div className="eb-rev-head">
            <div className="eb-rev-client">
              <span className="eb-rev-livedot" aria-hidden="true" />
              <span className="eb-rev-client-name">AWS Law Firm (Tampa)</span>
              <span className="eb-rev-live-label">Live</span>
            </div>
            <div className="eb-panel-eyebrow eb-panel-eyebrow-right">
              What we show you
            </div>
          </div>

          <ul className="eb-rev-feed" aria-live="polite">
            <AnimatePresence initial={false}>
              {feed.map((entry) => (
                <motion.li
                  key={entry.key}
                  className="eb-rev-event"
                  layout
                  initial={{ opacity: 0, y: -18, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                >
                  <span className="eb-rev-icon">
                    <SourceIcon source={entry.event.source} />
                  </span>
                  <div className="eb-rev-body">
                    <div className="eb-rev-line">
                      <span className="eb-rev-source">{entry.event.sourceLabel}</span>
                      <span className="eb-rev-sep"> · </span>
                      <span className="eb-rev-context">{entry.event.context}</span>
                    </div>
                    <div className="eb-rev-line eb-rev-line-2">
                      <span className="eb-rev-result">{entry.event.result}</span>
                      <span className="eb-rev-sep"> · </span>
                      <span className="eb-rev-amount">
                        ${formatNumber(entry.event.amount)} retained
                      </span>
                    </div>
                  </div>
                  <span className="eb-rev-time">{relativeTime(entry.insertedAt)}</span>
                </motion.li>
              ))}
            </AnimatePresence>
          </ul>

          <div className="eb-rev-total">
            <div className="eb-rev-total-label">Total revenue attributed this month</div>
            <div className="eb-rev-total-num">
              ${formatNumber(totalRevenue)}
            </div>
          </div>

          <div className="eb-rev-stamp">
            <span className="eb-rev-stamp-dot" aria-hidden="true" />
            Reviewed live · Rysen HQ · Detroit, MI
          </div>
        </div>
      </div>
    </section>
  );
}

function relativeTime(then: number): string {
  const diffSec = Math.max(0, (Date.now() - then) / 1000);
  if (diffSec < 90) return "now";
  const diffMin = Math.floor(diffSec / 60);
  if (diffMin < 60) return `${diffMin}m ago`;
  const diffHr = Math.floor(diffMin / 60);
  if (diffHr < 24) return `${diffHr}h ago`;
  return `${Math.floor(diffHr / 24)}d ago`;
}
