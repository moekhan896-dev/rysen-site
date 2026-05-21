"use client";

// Session 40 — RosterTable.
//
// Replaces the chip-selector "SelectedWork" pattern with a single
// dashboard-style table showing all six active client engagements at
// once. The composition reads as "portfolio manager's screen": dense,
// editorial, glanceable. No clicking required to see the whole roster.
//
// Each row has:
//   - Brand block: tiny favicon + name + vertical/metro chip
//   - Primary query (the search term we rank for)
//   - Four-platform position pills (#1 across all)
//   - 30-day call/lead volume number
//   - 30-day position sparkline (tiny chart)
//   - "View case study →" link with hover affordance
//
// On hover, a subtle background tint and a brass border-left appears.
// The sparkline shifts slightly on hover so the row feels alive.

import Link from "next/link";

// =====================================================================
// Data — six clients, hand-curated to balance verticals + metros
// =====================================================================

type PlatformPos = { google: string; chatgpt: string; perplexity: string; gemini: string };

type RosterRow = {
  id: string;
  brand: string;
  vertical: "Legal" | "Medical" | "Brand-built";
  metro: string;
  query: string;
  positions: PlatformPos;
  volume: { num: string; label: string };
  spark: number[]; // 14 values, each 1-10 representing rank
  href: string;
};

const ROSTER: RosterRow[] = [
  {
    id: "aws",
    brand: "AWS Law Firm",
    vertical: "Legal",
    metro: "Tampa",
    query: "best probate lawyer tampa",
    positions: { google: "#1", chatgpt: "#1", perplexity: "#1", gemini: "#1" },
    volume: { num: "348", label: "calls · 4 mo" },
    spark: [3, 2, 2, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1],
    href: "/case-studies/aws-law-firm",
  },
  {
    id: "tyler",
    brand: "Tyler Family Law",
    vertical: "Legal",
    metro: "Atlanta",
    query: "atlanta divorce attorney",
    positions: { google: "#1", chatgpt: "#1", perplexity: "#1", gemini: "#2" },
    volume: { num: "169", label: "calls · 6 mo" },
    spark: [5, 4, 4, 3, 3, 2, 2, 1, 1, 1, 1, 1, 1, 1],
    href: "/case-studies/tyler-family-law",
  },
  {
    id: "slim",
    brand: "Slim Dental",
    vertical: "Medical",
    metro: "Chicago",
    query: "chicago dental implants",
    positions: { google: "#1", chatgpt: "#1", perplexity: "#1", gemini: "#1" },
    volume: { num: "+186%", label: "qualified calls" },
    spark: [4, 3, 3, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1],
    href: "/case-studies/slim-dental",
  },
  {
    id: "hartman",
    brand: "Hartman Dermatology",
    vertical: "Medical",
    metro: "Miami",
    query: "miami dermatologist",
    positions: { google: "#1", chatgpt: "#1", perplexity: "#1", gemini: "#1" },
    volume: { num: "38%", label: "AI citation rate" },
    spark: [6, 5, 4, 3, 3, 2, 2, 1, 1, 1, 1, 1, 1, 1],
    href: "/case-studies/hartman-dermatology",
  },
  {
    id: "madison",
    brand: "Madison Clark",
    vertical: "Brand-built",
    metro: "Internal",
    query: "ai persona case study",
    positions: { google: "#1", chatgpt: "#1", perplexity: "#1", gemini: "#1" },
    volume: { num: "100M", label: "views · 60 days" },
    spark: [8, 6, 5, 4, 3, 3, 2, 2, 1, 1, 1, 1, 1, 1],
    href: "/case-studies/madison-clark",
  },
  {
    id: "quattro",
    brand: "Quattro Labs",
    vertical: "Brand-built",
    metro: "Internal",
    query: "automotive media phoenix",
    positions: { google: "#1", chatgpt: "#1", perplexity: "#2", gemini: "#1" },
    volume: { num: "150K+", label: "followers · 4 yrs" },
    spark: [3, 2, 2, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1],
    href: "/case-studies/quattro-labs",
  },
];

// =====================================================================
// Root component
// =====================================================================

export function RosterTable() {
  return (
    <div className="roster-table">
      <div className="roster-table__head" aria-hidden="true">
        <div className="roster-table__col-brand">Client</div>
        <div className="roster-table__col-query">Primary query</div>
        <div className="roster-table__col-platforms">Platforms</div>
        <div className="roster-table__col-volume">30-day</div>
        <div className="roster-table__col-spark">Position trend</div>
        <div className="roster-table__col-cta">Case study</div>
      </div>

      {ROSTER.map((row) => (
        <RosterRowItem key={row.id} row={row} />
      ))}
    </div>
  );
}

function RosterRowItem({ row }: { row: RosterRow }) {
  return (
    <Link
      href={row.href}
      className="roster-row"
      aria-label={`View case study for ${row.brand}`}
    >
      {/* Brand block */}
      <div className="roster-row__brand">
        <div className="roster-row__favicon">
          <RysenTriangleMicro />
        </div>
        <div className="roster-row__brand-text">
          <div className="roster-row__brand-name">{row.brand}</div>
          <div className="roster-row__brand-meta">
            <span className="roster-row__vertical">{row.vertical}</span>
            <span className="roster-row__sep" aria-hidden="true">·</span>
            <span className="roster-row__metro">{row.metro}</span>
          </div>
        </div>
      </div>

      {/* Query */}
      <div className="roster-row__query">
        <span className="roster-row__query-quote" aria-hidden="true">&ldquo;</span>
        <span className="roster-row__query-text">{row.query}</span>
        <span className="roster-row__query-quote" aria-hidden="true">&rdquo;</span>
      </div>

      {/* Four-platform positions */}
      <div className="roster-row__platforms">
        <RosterPlatformPip
          icon="google"
          label="G"
          position={row.positions.google}
        />
        <RosterPlatformPip
          icon="chatgpt"
          label="C"
          position={row.positions.chatgpt}
        />
        <RosterPlatformPip
          icon="perplexity"
          label="P"
          position={row.positions.perplexity}
        />
        <RosterPlatformPip
          icon="gemini"
          label="Ge"
          position={row.positions.gemini}
        />
      </div>

      {/* Volume */}
      <div className="roster-row__volume">
        <div className="roster-row__volume-num">{row.volume.num}</div>
        <div className="roster-row__volume-label">{row.volume.label}</div>
      </div>

      {/* Sparkline */}
      <div className="roster-row__spark">
        <RosterSparkline points={row.spark} />
      </div>

      {/* CTA */}
      <div className="roster-row__cta">
        <span className="roster-row__cta-text">View</span>
        <span className="roster-row__cta-arrow" aria-hidden="true">
          <RosterArrowIcon />
        </span>
      </div>
    </Link>
  );
}

// =====================================================================
// Platform pip
// =====================================================================

type PipIcon = "google" | "chatgpt" | "perplexity" | "gemini";

function RosterPlatformPip({
  icon,
  label,
  position,
}: {
  icon: PipIcon;
  label: string;
  position: string;
}) {
  return (
    <div className={`roster-pip roster-pip--${icon}`}>
      <span className="roster-pip__icon" aria-hidden="true">
        {icon === "google" && <RosterGoogleDot />}
        {icon === "chatgpt" && <RosterChatGPTDot />}
        {icon === "perplexity" && <RosterPerplexityDot />}
        {icon === "gemini" && <RosterGeminiDot />}
      </span>
      <span className="sr-only">{label}</span>
      <span className="roster-pip__pos">{position}</span>
    </div>
  );
}

// =====================================================================
// Sparkline — 14 data points
// =====================================================================

function RosterSparkline({ points }: { points: number[] }) {
  // Map rank 1-10 to y coordinates. y=4 for rank #1, y=36 for rank #10.
  const width = 120;
  const height = 40;
  const xStep = width / (points.length - 1);
  const yFor = (rank: number) => 4 + ((rank - 1) / 9) * 32;

  const linePath = points
    .map((rank, i) => `${i === 0 ? "M" : "L"} ${i * xStep} ${yFor(rank)}`)
    .join(" ");
  const areaPath = `${linePath} L ${width} ${height} L 0 ${height} Z`;

  return (
    <svg
      className="roster-sparkline"
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient
          id="roster-spark-fill"
          x1="0%"
          y1="0%"
          x2="0%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#A88B47" stopOpacity="0.22" />
          <stop offset="100%" stopColor="#A88B47" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* #1 reference line */}
      <line
        x1="0"
        y1="4"
        x2={width}
        y2="4"
        stroke="rgba(168, 139, 71, 0.2)"
        strokeWidth="0.5"
        strokeDasharray="2 3"
      />

      <path d={areaPath} fill="url(#roster-spark-fill)" />
      <path
        d={linePath}
        stroke="#A88B47"
        strokeWidth="1.4"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Endpoint dot */}
      <circle
        cx={width}
        cy={yFor(points[points.length - 1])}
        r="2.2"
        fill="#A88B47"
      />
    </svg>
  );
}

// =====================================================================
// Inline icons + glyphs
// =====================================================================

function RysenTriangleMicro() {
  return (
    <svg width="12" height="12" viewBox="0 0 32 32" aria-hidden="true">
      <polygon points="4,4 28,4 4,28" fill="#FFE817" />
    </svg>
  );
}

function RosterGoogleDot() {
  return (
    <svg width="9" height="9" viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="10" fill="#4285F4" />
    </svg>
  );
}

function RosterChatGPTDot() {
  return (
    <svg width="9" height="9" viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="10" fill="#10A37F" />
    </svg>
  );
}

function RosterPerplexityDot() {
  return (
    <svg width="9" height="9" viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="10" fill="#20B8A6" />
    </svg>
  );
}

function RosterGeminiDot() {
  return (
    <svg width="9" height="9" viewBox="0 0 24 24" aria-hidden="true">
      <defs>
        <linearGradient id="roster-gem-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4285F4" />
          <stop offset="50%" stopColor="#9747FF" />
          <stop offset="100%" stopColor="#EA4335" />
        </linearGradient>
      </defs>
      <circle cx="12" cy="12" r="10" fill="url(#roster-gem-grad)" />
    </svg>
  );
}

function RosterArrowIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M3 7H11M11 7L7 3M11 7L7 11"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
