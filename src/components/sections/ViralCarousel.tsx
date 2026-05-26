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
];

// =====================================================================
// Root component
// =====================================================================

export function ViralCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollBy = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector(".viral-card") as HTMLElement | null;
    const step = card ? card.getBoundingClientRect().width + 20 : 340;
    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    track.scrollBy({
      left: step * direction,
      behavior: reduced ? "auto" : "smooth",
    });
  };

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

      <div className="viral__carousel">
        <button
          type="button"
          className="viral__nav viral__nav--prev"
          aria-label="Previous viral posts"
          onClick={() => scrollBy(-1)}
        >
          <ChevronLeftGlyph />
        </button>

        <div className="viral__track" ref={trackRef} role="list">
          {/* Session 47 — Madison Clark profile-grid spotlight card.
              Sits at the head of the carousel as the proof-piece:
              an entire IG profile of viral reels built from zero. */}
          <Reveal delay={0}>
            <MadisonProfileSpotlightCard />
          </Reveal>
          {POSTS.map((post, i) => (
            <Reveal key={post.id} delay={(i + 1) * 70}>
              <ViralCard post={post} />
            </Reveal>
          ))}
        </div>

        <button
          type="button"
          className="viral__nav viral__nav--next"
          aria-label="Next viral posts"
          onClick={() => scrollBy(1)}
        >
          <ChevronRightGlyph />
        </button>
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
