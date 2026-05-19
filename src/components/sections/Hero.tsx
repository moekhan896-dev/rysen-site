import Link from "next/link";
import { HeroVisualization } from "./HeroVisualization";

function GavelIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M 10 1 L 15 6 L 13 8 L 8 3 Z" fill="#FFE817" />
      <path d="M 8 3 L 3 8 L 6 11 L 11 6 Z" fill="#FFE817" opacity="0.5" />
      <line x1="3" y1="13" x2="11" y2="13" stroke="#FFE817" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function CaduceusIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <line x1="8" y1="1" x2="8" y2="15" stroke="#FFE817" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M 8 4 Q 4 6 8 9 Q 12 12 8 14" stroke="#FFE817" strokeWidth="1.2" fill="none" strokeLinecap="round" />
      <path d="M 8 4 Q 12 6 8 9 Q 4 12 8 14" stroke="#FFE817" strokeWidth="1.2" fill="none" strokeLinecap="round" />
      <path d="M 5 2 L 8 1 L 11 2 L 8 4 Z" fill="#FFE817" />
    </svg>
  );
}

function UnderlineGraphic() {
  return (
    <svg
      className="hero__highlight-underline"
      viewBox="0 0 200 12"
      preserveAspectRatio="none"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M 2 8 Q 50 2 100 5 T 198 7"
        stroke="#FFE817"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M 2 7 L 12 7 M 8 3 L 12 7 L 8 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function VerticalBadge({
  icon,
  label,
  count,
}: {
  icon: React.ReactNode;
  label: string;
  count: number;
}) {
  return (
    <span className="hero__badge">
      <span className="hero__badge-icon">{icon}</span>
      <span className="hero__badge-label">{label}</span>
      <span className="hero__badge-sep" aria-hidden="true">·</span>
      <span className="hero__badge-count">{count} active</span>
    </span>
  );
}

export function Hero() {
  return (
    <section className="hero" aria-label="Hero">
      <div className="hero__grid-bg tech-grid-bg" aria-hidden="true" />
      <div className="hero__spotlight spotlight-signal" aria-hidden="true" />

      <div className="hero__inner">
        <div className="hero__left">
          <div className="hero__status">
            <span className="hero__status-dot" aria-hidden="true" />
            <span>Currently accepting 2 engagements · Q2 2026</span>
          </div>

          <h1 className="hero__headline">
            Make your firm the{" "}
            <span className="hero__highlight">
              #1 result
              <UnderlineGraphic />
            </span>{" "}
            for every search that matters.
          </h1>

          <p className="hero__sub">
            Rysen is the marketing firm engineered to dominate Google, ChatGPT,
            Perplexity, and Gemini for law firms and medical practices. One per metro.
          </p>

          <div className="hero__badges">
            <VerticalBadge icon={<GavelIcon />} label="Law firms" count={12} />
            <VerticalBadge icon={<CaduceusIcon />} label="Medical practices" count={9} />
          </div>

          <div className="hero__ctas">
            <Link href="/contact" className="hero__cta-primary">
              Request audit <ArrowIcon />
            </Link>
            <Link href="#work" className="hero__cta-secondary">
              See the work <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        <div className="hero__right">
          <HeroVisualization />
        </div>
      </div>
    </section>
  );
}
