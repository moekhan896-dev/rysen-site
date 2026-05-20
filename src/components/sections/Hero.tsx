import Link from "next/link";
import { PlatformGallery } from "./PlatformGallery";

function ArrowIcon() {
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

export function Hero() {
  return (
    <section className="hero" aria-label="Hero">
      <div className="hero__bg-grid" aria-hidden="true" />
      <div className="hero__corner hero__corner--tl" aria-hidden="true" />
      <div className="hero__corner hero__corner--br" aria-hidden="true" />

      <div className="hero__inner">
        <div className="hero__head">
          <div className="hero__status">
            <span className="hero__status-dot" aria-hidden="true" />
            <span>Currently accepting 2 engagements · Q2 2026</span>
          </div>

          <div className="hero__verticals">
            <span>FOR LAW FIRMS</span>
            <span className="hero__verticals-sep" aria-hidden="true">·</span>
            <span>FOR MEDICAL PRACTICES</span>
          </div>

          <h1 className="hero__headline">
            <span className="hero__headline-line">Visibility, engineered</span>
            <span className="hero__headline-line hero__headline-line--accent">for the AI search era.</span>
          </h1>

          <p className="hero__sub">
            For selective law firms and medical practices. One firm per metro, ranked #1 across Google, ChatGPT, Perplexity, and Gemini.
          </p>

          <div className="hero__ctas">
            <Link href="/contact" className="hero__cta-primary">
              Request audit <ArrowIcon />
            </Link>
            <Link href="#selected-work" className="hero__cta-secondary">
              See the work
            </Link>
          </div>
        </div>

        <PlatformGallery />

        <div className="hero__more">
          <span className="hero__more-label">Also ranking #1 for:</span>
          <span className="hero__more-list">
            Tyler Family Law
            <span className="hero__more-dot" aria-hidden="true">·</span>
            Slim Dental
            <span className="hero__more-dot" aria-hidden="true">·</span>
            Madison Clark
            <span className="hero__more-dot" aria-hidden="true">·</span>
            Quattro Labs
            <span className="hero__more-dot" aria-hidden="true">·</span>
            30+ more
          </span>
        </div>
      </div>

      <div className="hero__stats-row">
        <div className="hero__stat">
          <div className="hero__stat-num">30+</div>
          <div className="hero__stat-label">Firms ranked #1 across metros</div>
        </div>
        <div className="hero__stat-divider" aria-hidden="true" />
        <div className="hero__stat">
          <div className="hero__stat-num">348</div>
          <div className="hero__stat-label">Single-quarter qualified calls, top client</div>
        </div>
        <div className="hero__stat-divider" aria-hidden="true" />
        <div className="hero__stat">
          <div className="hero__stat-num">100M</div>
          <div className="hero__stat-label">Brand views, internal AI persona project</div>
        </div>
      </div>
    </section>
  );
}
