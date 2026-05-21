"use client";

// Session 40 — Position Monitor: the new hero visual.
//
// A "live monitoring dashboard" for our flagship client (AWS Law Firm
// in Tampa, probate). The composition reads as a real product surface
// — header strip with a green live dot, featured client block, a row
// of four platform position pills, a 30-day sparkline, two stats
// (animated qualified-calls counter + AI citation donut), a 12-cell
// query coverage grid colored by ranking band, and a footer mark.
//
// The intent: communicate that Rysen runs on actual data and AI
// infrastructure, not creative-agency promises. The visual is dense,
// editorial, and intentionally evokes a Bloomberg terminal married to
// a designer-built analytics tool.
//
// Style:
//   - White card, subtle hairline border, soft shadow.
//   - Brass (#A88B47) as the single chromatic accent.
//   - Green (#4ADE80) only on the LIVE indicator + "held" trend pips.
//   - Geist Sans throughout, wide letter-spacing for the small caps.
//
// Performance:
//   - The animated counter only fires once per page-load (via
//     IntersectionObserver disconnect).
//   - The sparkline pulse and live-dot animations are CSS / SMIL,
//     suppressed by prefers-reduced-motion (handled at the global
//     CSS layer for SMIL, and a query check for the counter).
//
// Sizing:
//   - Component is fluid up to max-width 580px. Inside the hero grid
//     it sits in a fixed 580px right column on ≥1200px; on smaller
//     breakpoints it falls beneath the headline.

import { useEffect, useRef, useState } from "react";

// =====================================================================
// Root component
// =====================================================================

export function PositionMonitor() {
  return (
    <div
      className="position-monitor"
      role="figure"
      aria-label="Live position monitor for AWS Law Firm, Tampa probate practice"
    >
      <MonitorHeader />
      <FeaturedClient />
      <SparklineBlock />
      <StatsGrid />
      <QueryCoverage />
      <MonitorFooter />
    </div>
  );
}

// =====================================================================
// Header strip
// =====================================================================

function MonitorHeader() {
  return (
    <div className="position-monitor__header">
      <div className="position-monitor__header-left">
        <span className="position-monitor__live-dot" aria-hidden="true" />
        <span className="position-monitor__title">POSITION MONITOR</span>
        <span className="position-monitor__live-tag">LIVE</span>
      </div>
      <div className="position-monitor__header-right">
        <span>247 queries</span>
        <span className="position-monitor__header-sep">·</span>
        <span>6 clients</span>
        <span className="position-monitor__header-sep">·</span>
        <span>4 platforms</span>
      </div>
    </div>
  );
}

// =====================================================================
// Featured client + platform row
// =====================================================================

function FeaturedClient() {
  return (
    <div className="position-monitor__featured">
      <div className="position-monitor__featured-label">
        FEATURED · TAMPA · LEGAL
      </div>
      <div className="position-monitor__featured-name">AWS Law Firm</div>
      <div className="position-monitor__featured-query">
        &quot;best probate lawyer tampa&quot;
      </div>

      <div className="position-monitor__platform-row">
        <PlatformPill
          icon="google"
          label="Google"
          position="#1"
          trend="held"
        />
        <PlatformPill
          icon="chatgpt"
          label="ChatGPT"
          position="#1"
          trend="held"
        />
        <PlatformPill
          icon="perplexity"
          label="Perplexity"
          position="#1"
          trend="held"
        />
        <PlatformPill
          icon="gemini"
          label="Gemini"
          position="#1"
          trend="held"
        />
      </div>
    </div>
  );
}

type PlatformIcon = "google" | "chatgpt" | "perplexity" | "gemini";
type Trend = "held" | "up" | "down";

function PlatformPill({
  icon,
  label,
  position,
  trend,
}: {
  icon: PlatformIcon;
  label: string;
  position: string;
  trend: Trend;
}) {
  return (
    <div className="platform-pill">
      <div className="platform-pill__icon">
        {icon === "google" && <GoogleIconMini />}
        {icon === "chatgpt" && <ChatGPTIconMini />}
        {icon === "perplexity" && <PerplexityIconMini />}
        {icon === "gemini" && <GeminiIconMini />}
      </div>
      <div className="platform-pill__meta">
        <span className="platform-pill__label">{label}</span>
        <span className="platform-pill__position">{position}</span>
      </div>
      <div className="platform-pill__trend">
        {trend === "held" && <TrendHeldIcon />}
        {trend === "up" && <TrendUpIcon />}
      </div>
    </div>
  );
}

// =====================================================================
// Sparkline block — 30 data points, all near #1
// =====================================================================

function SparklineBlock() {
  return (
    <div className="position-monitor__sparkline-block">
      <div className="position-monitor__sparkline-header">
        <span className="position-monitor__sparkline-label">
          30-DAY POSITION TRAJECTORY
        </span>
        <span className="position-monitor__sparkline-current">
          Currently #1 · 24 days held
        </span>
      </div>
      <SparklineChart />
    </div>
  );
}

function SparklineChart() {
  // Coordinates chosen to hold near y=22 (Y reference for #1) with a
  // single small dip at index 5 (to y=24, ~rank #2) so the chart reads
  // as "almost always #1, briefly slipped, recovered" — telling the
  // story of a real campaign.
  const points: Array<[number, number]> = [
    [30, 22], [50, 24], [70, 22], [90, 21], [110, 22],
    [130, 24], [150, 22], [170, 21], [190, 22], [210, 21],
    [230, 22], [250, 21], [270, 22], [290, 21], [310, 22],
    [330, 21], [350, 22], [370, 21], [390, 22],
  ];

  const linePath = points
    .map(([x, y], i) => `${i === 0 ? "M" : "L"} ${x} ${y}`)
    .join(" ");
  const areaPath = `${linePath} L 390 80 L 30 80 Z`;

  return (
    <svg
      className="sparkline"
      viewBox="0 0 400 80"
      fill="none"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient
          id="sparkline-fill"
          x1="0%"
          y1="0%"
          x2="0%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#A88B47" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#A88B47" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Y-axis reference lines */}
      <line
        x1="0"
        y1="20"
        x2="400"
        y2="20"
        stroke="rgba(168, 139, 71, 0.16)"
        strokeWidth="0.5"
        strokeDasharray="3 3"
      />
      <line
        x1="0"
        y1="40"
        x2="400"
        y2="40"
        stroke="rgba(24, 23, 26, 0.04)"
        strokeWidth="0.5"
      />
      <line
        x1="0"
        y1="60"
        x2="400"
        y2="60"
        stroke="rgba(24, 23, 26, 0.04)"
        strokeWidth="0.5"
      />

      {/* Y labels */}
      <text
        x="2"
        y="22"
        fontSize="8"
        fontWeight="600"
        fill="#A88B47"
        letterSpacing="0.08em"
      >
        #1
      </text>
      <text
        x="2"
        y="42"
        fontSize="8"
        fontWeight="500"
        fill="#908F92"
        letterSpacing="0.08em"
      >
        #5
      </text>
      <text
        x="2"
        y="62"
        fontSize="8"
        fontWeight="500"
        fill="#908F92"
        letterSpacing="0.08em"
      >
        #10
      </text>

      {/* Filled area under the line */}
      <path d={areaPath} fill="url(#sparkline-fill)" />

      {/* The line itself */}
      <path
        d={linePath}
        stroke="#A88B47"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Data points */}
      {points.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="1.5" fill="#A88B47" />
      ))}

      {/* Current position pulse — last data point with glow */}
      <circle cx="390" cy="22" r="5" fill="#A88B47" opacity="0.3" />
      <circle cx="390" cy="22" r="3" fill="#A88B47">
        <animate
          attributeName="r"
          values="3;5;3"
          dur="2s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          values="1;0.6;1"
          dur="2s"
          repeatCount="indefinite"
        />
      </circle>
    </svg>
  );
}

// =====================================================================
// Stats grid — animated counter + citation donut
// =====================================================================

function StatsGrid() {
  return (
    <div className="position-monitor__stats-grid">
      <div className="position-monitor__stat">
        <div className="position-monitor__stat-label">
          QUALIFIED CALLS · 30 DAYS
        </div>
        <div className="position-monitor__stat-num">
          <span aria-hidden="true">~</span>
          <AnimatedNumber value={87} />
        </div>
        <div className="position-monitor__stat-sub">
          +186% vs prior period
        </div>
      </div>
      <div className="position-monitor__stat">
        <div className="position-monitor__stat-label">AI CITATION RATE</div>
        <CitationDonut percent={38} />
      </div>
    </div>
  );
}

function AnimatedNumber({
  value,
  className,
}: {
  value: number;
  className?: string;
}) {
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasFired = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) {
      setDisplay(value);
      hasFired.current = true;
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasFired.current) {
            hasFired.current = true;
            let cur = 0;
            const step = value / 50;
            const interval = setInterval(() => {
              cur += step;
              if (cur >= value) {
                setDisplay(value);
                clearInterval(interval);
              } else {
                setDisplay(Math.floor(cur));
              }
            }, 30);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}

function CitationDonut({ percent }: { percent: number }) {
  const radius = 26;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percent / 100) * circumference;

  return (
    <div className="citation-donut" aria-label={`${percent} percent AI citation rate`}>
      <svg width="72" height="72" viewBox="0 0 72 72" aria-hidden="true">
        <circle
          cx="36"
          cy="36"
          r={radius}
          stroke="rgba(168, 139, 71, 0.16)"
          strokeWidth="6"
          fill="none"
        />
        <circle
          cx="36"
          cy="36"
          r={radius}
          stroke="#A88B47"
          strokeWidth="6"
          fill="none"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          transform="rotate(-90 36 36)"
        />
      </svg>
      <div className="citation-donut__center">
        <div className="citation-donut__num">
          {percent}
          <span className="citation-donut__pct">%</span>
        </div>
      </div>
    </div>
  );
}

// =====================================================================
// Query coverage grid — 12 sample queries with ranking dots
// =====================================================================

type QueryStatus = "good" | "mid" | "low";

function QueryCoverage() {
  return (
    <div className="position-monitor__grid-block">
      <div className="position-monitor__grid-header">
        <span className="position-monitor__grid-label">
          QUERY COVERAGE · 12 OF 247 SHOWN
        </span>
        <span className="position-monitor__grid-legend">
          <span className="position-monitor__legend-item">
            <span className="position-monitor__legend-dot position-monitor__legend-dot--good" />{" "}
            #1-3
          </span>
          <span className="position-monitor__legend-item">
            <span className="position-monitor__legend-dot position-monitor__legend-dot--mid" />{" "}
            4-10
          </span>
          <span className="position-monitor__legend-item">
            <span className="position-monitor__legend-dot position-monitor__legend-dot--low" />{" "}
            11+
          </span>
        </span>
      </div>
      <QueryGrid />
    </div>
  );
}

function QueryGrid() {
  const queries: Array<{ q: string; status: QueryStatus }> = [
    { q: "probate lawyer tampa", status: "good" },
    { q: "estate planning tampa", status: "good" },
    { q: "will lawyer tampa fl", status: "good" },
    { q: "tampa probate attorney", status: "good" },
    { q: "probate cost florida", status: "good" },
    { q: "tampa estate attorney", status: "good" },
    { q: "florida probate process", status: "mid" },
    { q: "probate vs trust tampa", status: "good" },
    { q: "small estate tampa", status: "mid" },
    { q: "contest will tampa", status: "good" },
    { q: "florida estate tax", status: "good" },
    { q: "tampa trust lawyer", status: "good" },
  ];

  return (
    <div className="query-grid">
      {queries.map((item, i) => (
        <div
          key={i}
          className={`query-grid__cell query-grid__cell--${item.status}`}
        >
          <span
            className={`query-grid__dot query-grid__dot--${item.status}`}
            aria-hidden="true"
          />
          <span className="query-grid__text">{item.q}</span>
        </div>
      ))}
    </div>
  );
}

// =====================================================================
// Footer
// =====================================================================

function MonitorFooter() {
  return (
    <div className="position-monitor__footer">
      <span className="position-monitor__footer-mark">
        <RysenTriangleSmall />
        <span>DATA + AI ENGINE</span>
      </span>
      <span className="position-monitor__footer-meta">
        Approximate figures · Exact metrics confidential
      </span>
    </div>
  );
}

// =====================================================================
// Inline platform + glyph icons (kept inline so the monitor is fully
// self-contained — no icon library dependency).
// =====================================================================

function GoogleIconMini() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M22.5 12.27c0-.85-.08-1.66-.22-2.45H12v4.63h5.92a5.06 5.06 0 0 1-2.2 3.32v2.76h3.56c2.08-1.92 3.28-4.74 3.28-8.26z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.56-2.76c-.98.66-2.24 1.05-3.72 1.05-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84A11 11 0 0 0 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.1A6.58 6.58 0 0 1 5.5 12c0-.73.13-1.44.34-2.1V7.06H2.18A11 11 0 0 0 1 12c0 1.77.42 3.45 1.18 4.94l3.66-2.84z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.07.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1A11 11 0 0 0 2.18 7.06l3.66 2.84C6.71 7.31 9.14 5.38 12 5.38z"
        fill="#EA4335"
      />
    </svg>
  );
}

function ChatGPTIconMini() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="#10A37F" aria-hidden="true">
      <path d="M22 9.4c0-1.3-.5-2.6-1.5-3.5-.9-.9-2.2-1.5-3.5-1.5-.4 0-.7 0-1.1.1-.7-1.5-2.3-2.5-4-2.5-1.3 0-2.6.5-3.5 1.5-.4.4-.7.8-.9 1.3-1.3-.1-2.6.3-3.6 1.2-.9.9-1.5 2.2-1.5 3.5 0 .4 0 .8.1 1.1-1.5.7-2.5 2.3-2.5 4 0 1.3.5 2.6 1.5 3.5 1.1 1.1 2.6 1.6 4 1.5.7 1.4 2.2 2.4 4 2.4 1.3 0 2.6-.5 3.5-1.5.4-.4.7-.8.9-1.3 1.3.1 2.6-.3 3.6-1.2 1-.9 1.5-2.2 1.5-3.5 0-.4 0-.8-.1-1.1 1.5-.7 2.5-2.3 2.5-4z" />
    </svg>
  );
}

function PerplexityIconMini() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect width="24" height="24" rx="4" fill="#20B8A6" />
      <path
        d="M12 6v12M6 9v6M18 9v6M9 7v10M15 7v10"
        stroke="white"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

function GeminiIconMini() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true">
      <defs>
        <linearGradient id="pm-gem-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4285F4" />
          <stop offset="50%" stopColor="#9747FF" />
          <stop offset="100%" stopColor="#EA4335" />
        </linearGradient>
      </defs>
      <path
        d="M12 2 L14 10 L22 12 L14 14 L12 22 L10 14 L2 12 L10 10 Z"
        fill="url(#pm-gem-grad)"
      />
    </svg>
  );
}

function TrendHeldIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <circle cx="6" cy="6" r="5" fill="rgba(74, 222, 128, 0.16)" />
      <path
        d="M3 6h6"
        stroke="#4ADE80"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function TrendUpIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <circle cx="6" cy="6" r="5" fill="rgba(74, 222, 128, 0.16)" />
      <path
        d="M3 7L6 4L9 7"
        stroke="#4ADE80"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function RysenTriangleSmall() {
  return (
    <svg width="10" height="10" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <polygon points="4,4 28,4 4,28" fill="#FFE817" />
    </svg>
  );
}
