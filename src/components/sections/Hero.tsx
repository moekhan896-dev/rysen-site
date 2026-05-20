import Link from "next/link";

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

const LEGAL_PHOTO = "https://images.unsplash.com/photo-1589994965851-a8f479c573a9?w=1200&q=85";
const MEDICAL_PHOTO = "https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?w=1200&q=85";

export function Hero() {
  return (
    <section className="hero" aria-label="Hero">
      <div className="hero__grid">
        {/* LEFT: Law firm world */}
        <div className="hero__panel hero__panel--left">
          <img
            src={LEGAL_PHOTO}
            alt="Law firm office interior"
            className="hero__panel-image"
            loading="eager"
          />
          <div className="hero__panel-overlay" aria-hidden="true" />

          <div className="hero__panel-label">
            <span className="hero__panel-label-marker" aria-hidden="true" />
            <span>FOR LAW FIRMS</span>
          </div>

          <div className="hero__panel-bottom">
            <div className="hero__panel-tagline">
              Probate · Family · Personal injury · Estate
            </div>
            <div className="hero__panel-overlay-card">
              <div className="hero__panel-overlay-card-line">
                <span className="hero__panel-overlay-card-badge">#1</span>
                <span className="hero__panel-overlay-card-domain">awslawfirm.com</span>
              </div>
              <div className="hero__panel-overlay-card-title">Tampa Probate Attorneys</div>
              <div className="hero__panel-overlay-card-metric">348 calls · Q1 2026</div>
            </div>
          </div>
        </div>

        {/* CENTER: Content */}
        <div className="hero__center">
          <div className="hero__status">
            <span className="hero__status-dot" aria-hidden="true" />
            <span>Currently accepting 2 engagements · Q2 2026</span>
          </div>

          <h1 className="hero__headline">
            Make your{" "}
            <span className="hero__vertical-mark">law firm</span> or{" "}
            <span className="hero__vertical-mark">medical practice</span> the{" "}
            <span className="hero__highlight">#1 result</span> on Google.
          </h1>

          <p className="hero__sub">
            Rysen is the marketing firm engineered for selective law firms and medical practices. One per metro. Across Google, ChatGPT, Perplexity, and Gemini.
          </p>

          <div className="hero__ctas">
            <Link href="/contact" className="hero__cta-primary">
              Request audit <ArrowIcon />
            </Link>
            <Link href="#selected-work" className="hero__cta-secondary">
              See the work
            </Link>
          </div>

          <div className="hero__platforms">
            <span className="hero__platforms-label">Visibility engineered across</span>
            <div className="hero__platforms-list">
              <span>Google</span>
              <span className="hero__platforms-dot" aria-hidden="true" />
              <span>ChatGPT</span>
              <span className="hero__platforms-dot" aria-hidden="true" />
              <span>Perplexity</span>
              <span className="hero__platforms-dot" aria-hidden="true" />
              <span>Gemini</span>
            </div>
          </div>
        </div>

        {/* RIGHT: Medical world */}
        <div className="hero__panel hero__panel--right">
          <img
            src={MEDICAL_PHOTO}
            alt="Modern medical clinic interior"
            className="hero__panel-image"
            loading="eager"
          />
          <div className="hero__panel-overlay" aria-hidden="true" />

          <div className="hero__panel-label">
            <span className="hero__panel-label-marker" aria-hidden="true" />
            <span>FOR MEDICAL PRACTICES</span>
          </div>

          <div className="hero__panel-bottom">
            <div className="hero__panel-tagline">
              Dental · Dermatology · Regenerative · Aesthetics
            </div>
            <div className="hero__panel-overlay-card">
              <div className="hero__panel-overlay-card-line">
                <span className="hero__panel-overlay-card-badge">#1</span>
                <span className="hero__panel-overlay-card-domain">hartmandermatology.com</span>
              </div>
              <div className="hero__panel-overlay-card-title">Miami Cosmetic Dermatology</div>
              <div className="hero__panel-overlay-card-metric">38% AI citation rate</div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats row below hero grid */}
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
