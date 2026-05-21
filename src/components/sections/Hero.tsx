import Link from "next/link";
import { PositionMonitor } from "./PositionMonitor";

// Session 40 hero: 2-column layout. Left column holds positioning,
// headline, sub copy, primary + secondary CTAs, and a three-number
// proof row. Right column holds the Position Monitor (the new hero
// visual). Both columns must be visible above the fold at 1440x900.
//
// The "Currently accepting" badge from earlier sessions is gone, the
// 30+/348/100M stats row is replaced with 1/4/247 proof points framed
// around the data + AI engineering positioning, and the PlatformGallery
// is removed entirely. PlatformGallery still exists in the file tree
// for now but is no longer rendered.

function ArrowIcon() {
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
      <div className="hero__inner">
        <div className="hero__content">
          <div className="hero__positioning">
            <span>ENGINEERED</span>
            <span className="hero__positioning-sep" aria-hidden="true" />
            <span>CREATIVE</span>
            <span className="hero__positioning-sep" aria-hidden="true" />
            <span>BOUTIQUE</span>
          </div>

          <h1 className="hero__headline">
            The <span className="hero__highlight">data and AI</span> firm
            engineering <span className="hero__bold">#1 rankings</span> for
            law firms and medical practices.
          </h1>

          <p className="hero__sub">
            A boutique studio of creatives and engineers. We compound
            visibility for one firm per metro across{" "}
            <strong>Google</strong>, <strong>ChatGPT</strong>,{" "}
            <strong>Perplexity</strong>, and <strong>Gemini</strong>.
          </p>

          <div className="hero__ctas">
            <Link href="/contact" className="hero__cta-primary">
              Request audit <ArrowIcon />
            </Link>
            <Link href="#selected-work" className="hero__cta-secondary">
              See the engine
            </Link>
          </div>

          <div className="hero__proof">
            <div className="hero__proof-item">
              <div className="hero__proof-num">1</div>
              <div className="hero__proof-label">firm per metro</div>
            </div>
            <div className="hero__proof-item">
              <div className="hero__proof-num">4</div>
              <div className="hero__proof-label">platforms monitored</div>
            </div>
            <div className="hero__proof-item">
              <div className="hero__proof-num">247</div>
              <div className="hero__proof-label">queries tracked per client</div>
            </div>
          </div>
        </div>

        <div className="hero__visual">
          <PositionMonitor />
        </div>
      </div>
    </section>
  );
}
