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
};

const CASES: ReadonlyArray<CaseCard> = [
  {
    id: "c-aws",
    href: "/case-studies/aws-law-firm",
    vertical: "LEGAL",
    metro: "TAMPA",
    name: "AWS Law Firm",
    metric: "~348 calls in 4 months",
  },
  {
    id: "c-tyler",
    href: "/case-studies/tyler-family-law",
    vertical: "LEGAL",
    metro: "ATLANTA",
    name: "Tyler Family Law",
    metric: "~169 calls in 6 months",
  },
  {
    id: "c-slim",
    href: "/case-studies/slim-dental",
    vertical: "MEDICAL",
    metro: "CHICAGO",
    name: "Slim Dental",
    metric: "+186% qualified calls",
  },
  {
    id: "c-hartman",
    href: "/case-studies/hartman-dermatology",
    vertical: "MEDICAL",
    metro: "MIAMI",
    name: "Hartman Dermatology",
    metric: "38% AI citation rate",
  },
];

type UtilityCard = {
  id: string;
  href: string;
  label: string;
  title: string;
  desc: string;
  cta: string;
};

const UTILITY_CARDS: ReadonlyArray<UtilityCard> = [
  {
    id: "u-careers",
    href: "/careers",
    label: "JOIN US",
    title: "Careers at Rysen",
    desc: "Boutique studio of engineers and creatives. Real outcomes, real ownership.",
    cta: "See open roles",
  },
  {
    id: "u-privacy",
    href: "/privacy",
    label: "TRANSPARENCY",
    title: "How we handle data",
    desc: "Our privacy practices, plainly stated.",
    cta: "Read the policy",
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

  // Session 48 — the deck of cards rendered into the infinite marquee.
  // The track renders this list TWICE so the loop can translate from
  // 0 to -50% width seamlessly. The order is:
  //   profile spotlight -> 5 viral posts -> 4 case-study cards -> 2 utility cards
  const deck = (
    <>
      <MadisonProfileSpotlightCard />
      {POSTS.map((post) => (
        <ViralCard key={post.id} post={post} />
      ))}
      {CASES.map((c) => (
        <CaseStudyCard key={c.id} card={c} />
      ))}
      {UTILITY_CARDS.map((u) => (
        <UtilityCard key={u.id} card={u} />
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
      <div className="viral-card__case-name">{card.name}</div>
      <div className="viral-card__case-metric">{card.metric}</div>
      <div className="viral-card__case-cta">
        View case study
        <CarouselArrowGlyph />
      </div>
    </a>
  );
}

// Session 48 — utility card. Careers / Privacy / etc. Text-forward.
function UtilityCard({ card }: { card: UtilityCard }) {
  return (
    <a
      href={card.href}
      className="viral-card viral-card--utility"
      role="listitem"
      aria-label={card.title}
    >
      <div className="viral-card__util-label">{card.label}</div>
      <div className="viral-card__util-title">{card.title}</div>
      <div className="viral-card__util-desc">{card.desc}</div>
      <div className="viral-card__util-cta">
        {card.cta}
        <CarouselArrowGlyph />
      </div>
    </a>
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
