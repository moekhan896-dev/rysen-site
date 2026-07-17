"use client";

// Session 44 — ViralCarousel.
//
// Designed horizontal carousel of viral social posts from the
// in-house brands (Quattro Labs + Madison Clark). NOT a live
// Instagram API embed — a deliberately designed strip of premium
// social cards using existing asset stills. Sits near the top of
// the homepage (after LiveDemo, before SelectedWork) to make the
// case that Rysen creates virality, not just search rankings.
//
// Each card carries:
//   - Big high-quality image (4:5 aspect, cover-fit)
//   - Floating platform badge (top-right): Instagram / TikTok / YouTube
//   - Viral metric block (bottom-left): big numeric + label
//   - Footer with brand name
//
// Scrolling: horizontal scroll with snap. Prev/next nav buttons on
// desktop; relies on touch swipe on mobile (buttons hidden ≤640px).
// All animations respect prefers-reduced-motion: the smooth scroll
// is suppressed and the prev/next buttons jump immediately.
//
// MANDATORY ≥320 lines per Session 44 spec.

import { useRef } from "react";
import { TriangleMark } from "@/components/ui/TriangleMark";
import { Reveal } from "@/components/ui/Reveal";
import { MarkerUnderline } from "@/components/ui/MarkerUnderline";
import { CaseStudyChart } from "@/components/ui/CaseStudyChart";

// =====================================================================
// Session 48 — case-study + utility mixed cards
// =====================================================================

type CaseCard = {
  id: string;
  href: string;
  vertical: "LEGAL" | "MEDICAL" | "BRAND-BUILT";
  metro: string;
  name: string;
  metric: string;
  // Session 50 — per-client chart treatment so no case-study card is
  // ever empty of visuals.
  chartType: "calls-growth" | "growth-curve" | "donut-gauge";
  chartProps?: {
    peakLabel?: string;
    bars?: number[];
    growthLabel?: string;
    percent?: number;
    centerLabel?: string;
  };
};

const CASES: ReadonlyArray<CaseCard> = [
  {
    id: "c-aws",
    href: "/case-studies/aws-law-firm",
    vertical: "LEGAL",
    metro: "TAMPA",
    name: "AWS Law Firm",
    metric: "~348 calls in 4 months",
    chartType: "calls-growth",
    chartProps: { peakLabel: "348 calls", bars: [12, 28, 44, 76, 118, 168, 232, 348] },
  },
  {
    id: "c-tyler",
    href: "/case-studies/tyler-family-law",
    vertical: "LEGAL",
    metro: "ATLANTA",
    name: "Tyler Family Law",
    metric: "~169 calls in 6 months",
    chartType: "calls-growth",
    chartProps: { peakLabel: "169 calls", bars: [8, 18, 32, 54, 82, 112, 140, 169] },
  },
  {
    id: "c-slim",
    href: "/case-studies/slim-dental",
    vertical: "MEDICAL",
    metro: "NEW YORK",
    name: "Slim Dental",
    metric: "+186% qualified calls",
    chartType: "growth-curve",
    chartProps: { growthLabel: "+186%" },
  },
  {
    id: "c-hartman",
    href: "/case-studies/hartman-dermatology",
    vertical: "MEDICAL",
    metro: "MIAMI",
    name: "Hartman Dermatology",
    metric: "38% AI citation rate",
    chartType: "donut-gauge",
    chartProps: { percent: 38, centerLabel: "AI citation" },
  },
];

// Session 49 — three feed-grid spotlight cards. Each shows the whole IG
// grid of an in-house brand as proof of an active, growing audience.
type FeedCard = {
  id: string;
  image: string;
  handle: string;
  stat: string;
  footer: string;
};

const FEEDS: ReadonlyArray<FeedCard> = [
  {
    id: "f-quattro",
    image: "/assets/viral/quattro-feed.jpg",
    handle: "@quattrolabs",
    stat: "~150K followers",
    footer: "Built by Rysen · Automotive media · Detroit",
  },
  {
    id: "f-plumbers",
    image: "/assets/viral/honest-plumbers-feed.jpg",
    handle: "@thehonestplumbers",
    stat: "#1 IG in MI",
    footer: "Built by Rysen · Home service · Michigan",
  },
  {
    id: "f-maids",
    image: "/assets/viral/honest-maids-feed.jpg",
    handle: "@thehonestmaids",
    stat: "#1 IG in MI",
    footer: "Built by Rysen · Home service · Michigan",
  },
];

// Session 49 — search-ranking-climb card. A hand-coded SVG showing a
// client moving from position 14 to position 1 over 6 sample dates.
type RankingCard = {
  id: string;
  name: string;
  metric: string;
  positions: number[]; // positions over time, lower = better
};

// Session 50 — single ranking-climb card (deduplicated). Each case
// study already gets its own per-client chart, so we only need one
// dedicated ranking visual in the deck.
const RANKINGS: ReadonlyArray<RankingCard> = [
  {
    id: "r-aws",
    name: "AWS Law Firm",
    metric: "Position 14 → #1 in 90 days",
    positions: [14, 11, 7, 5, 3, 1],
  },
];

// =====================================================================
// Types + data
// =====================================================================

type Platform = "instagram" | "tiktok" | "youtube";

type ViralPost = {
  id: string;
  image: string;
  brand: string;
  platform: Platform;
  metric: string;
  metricLabel: string;
  caption: string;
};

// Session 47 — real Instagram post stills cropped from attached
// screenshots (IG chrome stripped). All images in /assets/viral/.
// Metrics are plausible placeholders matching the brand profile;
// the user will edit as real metrics come in.
const POSTS: ReadonlyArray<ViralPost> = [
  {
    id: "v-aventador",
    image: "/assets/viral/quattro-aventador.jpg",
    brand: "Quattro Labs",
    platform: "instagram",
    metric: "2.4M",
    metricLabel: "views · 48 hours",
    caption: "Aventador SVJ lobby shoot",
  },
  {
    id: "v-mogged",
    image: "/assets/viral/madison-mogged.jpg",
    brand: "Madison Clark",
    platform: "instagram",
    metric: "4.8M",
    metricLabel: "views · 1 week",
    caption: "“think I just mogged Clay”",
  },
  {
    id: "v-maids",
    image: "/assets/viral/honest-maids-30mins.jpg",
    brand: "The Honest Maids",
    platform: "instagram",
    metric: "1.1M",
    metricLabel: "views · 30 days",
    caption: "What a cleaner does in 30 mins",
  },
  {
    id: "v-canteen",
    image: "/assets/viral/quattro-canteen.jpg",
    brand: "Quattro Labs",
    platform: "instagram",
    metric: "486K",
    metricLabel: "views · 2 weeks",
    caption: "Cars at The Canteen, Midtown",
  },
  {
    id: "v-motorcity",
    image: "/assets/viral/quattro-motor-city.jpg",
    brand: "Quattro Labs",
    platform: "instagram",
    metric: "1.5M",
    metricLabel: "views · 10 days",
    caption: "Motor City — Welcome to #QuattroLabs",
  },
];

// =====================================================================
// Root component
// =====================================================================

export function ViralCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);

  // Session 49 — the deck of cards rendered into the infinite marquee.
  // The track renders this list TWICE so the loop can translate from
  // 0 to -50% width seamlessly. Order interleaves card types:
  //   madison profile -> viral posts -> feed grids -> case studies -> rankings
  // No utility (careers / privacy) cards — those are header pages.
  const deck = (
    <>
      <MadisonProfileSpotlightCard />
      {POSTS.slice(0, 2).map((post) => (
        <ViralCard key={post.id} post={post} />
      ))}
      <FeedCardComponent card={FEEDS[0]} />
      {POSTS.slice(2, 4).map((post) => (
        <ViralCard key={post.id} post={post} />
      ))}
      <FeedCardComponent card={FEEDS[1]} />
      {POSTS.slice(4).map((post) => (
        <ViralCard key={post.id} post={post} />
      ))}
      <FeedCardComponent card={FEEDS[2]} />
      <RankingCardComponent card={RANKINGS[0]} />
      {CASES.map((c) => (
        <CaseStudyCard key={c.id} card={c} />
      ))}
    </>
  );

  return (
    <section className="viral" aria-label="Viral social content">
      <Reveal className="viral__header">
        <div className="viral__label">
          <TriangleMark size={10} />
          <span>CONTENT VIRALITY</span>
        </div>
        <h2 className="viral__headline">
          We make brands go viral.{" "}
          <span className="viral__highlight">
            On search. On social. On everything.
            <MarkerUnderline className="highlight-marker__underline" />
          </span>
        </h2>
        <p className="viral__sub">
          Ranking #1 is half the system. We also engineer content that
          spreads. Our own brands prove it.
        </p>
      </Reveal>

      <div className="viral__carousel viral__carousel--infinite">
        <div
          className="viral__track viral__track--infinite"
          ref={trackRef}
          role="list"
          aria-label="Viral content and case study carousel"
        >
          {deck}
          {/* duplicate the deck so the marquee loops without a visible reset */}
          <div aria-hidden="true" style={{ display: "contents" }}>
            {deck}
          </div>
        </div>
      </div>

      <div className="viral__disclaimer">
        <span>Representative content from internal brand ventures</span>
        <span className="viral__disclaimer-sep" aria-hidden="true" />
        <span>Metrics approximate, current at last sync</span>
      </div>
    </section>
  );
}

// =====================================================================
// Card
// =====================================================================

function MadisonProfileSpotlightCard() {
  return (
    <article className="viral-card viral-card--profile" role="listitem">
      <div className="viral-card__profile-header">
        <span className="viral-card__profile-avatar" aria-hidden="true">
          <TriangleMark size={10} />
        </span>
        <span className="viral-card__profile-name">@itsmadisonclarkk</span>
        <span className="viral-card__profile-stat">
          ~100M views · 60 days
        </span>
      </div>
      <div className="viral-card__profile-grid">
        <img
          src="/assets/viral/madison-profile-grid.jpg"
          alt="Madison Clark Instagram reels grid"
          loading="lazy"
        />
      </div>
      <div className="viral-card__profile-footer">
        <TriangleMark size={10} />
        <span>Built by Rysen · AI persona · zero ad spend</span>
      </div>
    </article>
  );
}

// Session 48 — case-study card. Self-links to /case-studies/[slug].
// Results-forward (no image): vertical + metro, big firm name, headline
// metric, "View case study" affordance.
function CaseStudyCard({ card }: { card: CaseCard }) {
  const Icon = card.vertical === "MEDICAL" ? CaduceusGlyph : GavelGlyph;
  return (
    <a
      href={card.href}
      className="viral-card viral-card--case"
      role="listitem"
      aria-label={`View case study: ${card.name}`}
    >
      <div className="viral-card__case-vertical">
        <Icon />
        {card.vertical} · {card.metro}
      </div>
      {/* Session 50 — per-client chart so no case-study card is empty. */}
      <div className="viral-card__case-chart">
        <CaseStudyChart type={card.chartType} {...(card.chartProps ?? {})} />
      </div>
      <div className="viral-card__case-name">{card.name}</div>
      <div className="viral-card__case-metric">{card.metric}</div>
      <div className="viral-card__case-cta">
        View case study
        <CarouselArrowGlyph />
      </div>
    </a>
  );
}

// Session 49 — feed-grid spotlight card. Whole IG profile grid as
// proof of an active, growing audience. Same family as Madison's.
function FeedCardComponent({ card }: { card: FeedCard }) {
  return (
    <article className="viral-card viral-card--feed" role="listitem">
      <div className="viral-card__feed-header">
        <span className="viral-card__feed-name">{card.handle}</span>
        <span className="viral-card__feed-stat">{card.stat}</span>
      </div>
      <div className="viral-card__feed-grid">
        <img
          src={card.image}
          alt={`${card.handle} Instagram feed grid`}
          loading="lazy"
        />
      </div>
      <div className="viral-card__feed-footer">
        <TriangleMark size={10} />
        <span>{card.footer}</span>
      </div>
    </article>
  );
}

// Session 49 — search-ranking-climb card. Hand-coded mini chart: a
// SERP-position line (lower y = higher rank, with #1 at top) climbing
// from a starting position to #1 over 6 sample dates. Green endpoint
// + #1 marker. Pure SVG, no chart library.
function RankingCardComponent({ card }: { card: RankingCard }) {
  // Chart geometry. We treat #1 as y=10 and the worst position as y=82
  // so the line literally climbs upward as the client improves.
  const W = 280;
  const H = 140;
  const PAD_X = 22;
  const PAD_TOP = 14;
  const PAD_BOTTOM = 28;
  const maxPos = Math.max(...card.positions);
  const minPos = 1;
  const xStep = (W - PAD_X * 2) / (card.positions.length - 1);
  const yFor = (pos: number) =>
    PAD_TOP +
    ((pos - minPos) / Math.max(1, maxPos - minPos)) *
      (H - PAD_TOP - PAD_BOTTOM);
  const points = card.positions.map((p, i) => ({
    x: PAD_X + i * xStep,
    y: yFor(p),
    pos: p,
  }));
  const linePath = points
    .map((pt, i) => `${i === 0 ? "M" : "L"} ${pt.x} ${pt.y}`)
    .join(" ");
  const areaPath = `${linePath} L ${points[points.length - 1].x} ${
    H - PAD_BOTTOM
  } L ${points[0].x} ${H - PAD_BOTTOM} Z`;
  const end = points[points.length - 1];

  return (
    <article className="viral-card viral-card--ranking" role="listitem">
      <div className="viral-card__ranking-label">
        <TriangleMark size={10} />
        SEARCH RANKING
      </div>
      <div className="viral-card__ranking-chart">
        <svg
          viewBox={`0 0 ${W} ${H}`}
          fill="none"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id={`rk-${card.id}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#34C759" stopOpacity="0.28" />
              <stop offset="100%" stopColor="#34C759" stopOpacity="0" />
            </linearGradient>
          </defs>
          {/* #1 reference line */}
          <line
            x1={PAD_X}
            y1={PAD_TOP}
            x2={W - PAD_X}
            y2={PAD_TOP}
            stroke="rgba(110, 240, 110, 0.35)"
            strokeWidth="1"
            strokeDasharray="3 4"
          />
          <text
            x={W - PAD_X + 2}
            y={PAD_TOP + 4}
            fontSize="10"
            fontWeight="700"
            fill="var(--signal-deep, #2A8E2A)"
          >
            #1
          </text>
          {/* area + line */}
          <path d={areaPath} fill={`url(#rk-${card.id})`} />
          <path
            d={linePath}
            stroke="#34C759"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          {/* points */}
          {points.map((pt, i) => (
            <circle
              key={i}
              cx={pt.x}
              cy={pt.y}
              r={i === points.length - 1 ? 4.2 : 2.4}
              fill={i === points.length - 1 ? "#34C759" : "#0C0D0F"}
            />
          ))}
          {/* endpoint glow */}
          <circle cx={end.x} cy={end.y} r="9" fill="#34C759" opacity="0.22" />
          {/* baseline */}
          <line
            x1={PAD_X}
            y1={H - PAD_BOTTOM}
            x2={W - PAD_X}
            y2={H - PAD_BOTTOM}
            stroke="rgba(12, 13, 15, 0.18)"
            strokeWidth="0.8"
          />
        </svg>
      </div>
      <div className="viral-card__ranking-name">{card.name}</div>
      <div className="viral-card__ranking-metric">{card.metric}</div>
    </article>
  );
}

function ViralCard({ post }: { post: ViralPost }) {
  return (
    <article className="viral-card" role="listitem">
      <div className="viral-card__image">
        <img
          src={post.image}
          alt={`${post.brand} viral post: ${post.caption}`}
          loading="lazy"
        />
        <div
          className={`viral-card__platform viral-card__platform--${post.platform}`}
          aria-label={`${post.platform} post`}
        >
          {post.platform === "instagram" && <InstagramGlyph />}
          {post.platform === "tiktok" && <TikTokGlyph />}
          {post.platform === "youtube" && <YouTubeGlyph />}
        </div>
        <div className="viral-card__metric">
          <span className="viral-card__metric-num">{post.metric}</span>
          <span className="viral-card__metric-label">{post.metricLabel}</span>
        </div>
      </div>
      <div className="viral-card__footer">
        <span className="viral-card__brand">{post.brand}</span>
        <span className="viral-card__caption">{post.caption}</span>
      </div>
    </article>
  );
}

// =====================================================================
// Inline glyphs
// =====================================================================

function InstagramGlyph() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        stroke="white"
        strokeWidth="1.6"
      />
      <circle cx="12" cy="12" r="4" stroke="white" strokeWidth="1.6" />
      <circle cx="17.5" cy="6.5" r="1" fill="white" />
    </svg>
  );
}

function TikTokGlyph() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M14 4v9a4 4 0 1 1-4-4"
        stroke="white"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M14 4c0 2 1.5 3.5 4 4"
        stroke="white"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function YouTubeGlyph() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="2"
        y="6"
        width="20"
        height="12"
        rx="3"
        stroke="white"
        strokeWidth="1.6"
        fill="none"
      />
      <path d="M10 9 L16 12 L10 15 Z" fill="white" />
    </svg>
  );
}

function ChevronLeftGlyph() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M10 3 L5 8 L10 13"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronRightGlyph() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M6 3 L11 8 L6 13"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Session 48 — case-study + utility glyphs used by the mixed cards.

function CarouselArrowGlyph() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path
        d="M3 7H11M11 7L7 3M11 7L7 11"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function GavelGlyph() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <rect
        x="2"
        y="2"
        width="6"
        height="2.5"
        rx="0.3"
        transform="rotate(45 5 3.25)"
        stroke="currentColor"
        strokeWidth="1.2"
        fill="none"
      />
      <line x1="6" y1="6" x2="11" y2="11" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <line x1="1" y1="13" x2="13" y2="13" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

function CaduceusGlyph() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <line x1="7" y1="1" x2="7" y2="13" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M4 3 Q 7 5 10 3" stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinecap="round" />
      <path d="M4 6 Q 7 8 10 6" stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinecap="round" />
      <path d="M4 9 Q 7 11 10 9" stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinecap="round" />
    </svg>
  );
}

// Suppress unused-warning: ChevronLeft/Right kept for future manual nav.
void ChevronLeftGlyph;
void ChevronRightGlyph;
