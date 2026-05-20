export function BuiltByOperators() {
  return (
    <section className="operators" aria-label="Built by operators">
      <div className="operators__inner">
        <div className="operators__header">
          <p className="operators__label">02 — Operators</p>
          <h2 className="operators__headline">
            Built by operators, <em>not consultants.</em>
          </h2>
          <p className="operators__sub">
            Before we marketed for law firms and medical practices, we built our own brands from zero. Same playbook. Different verticals. Real receipts.
          </p>
        </div>

        <div className="operators__cards">
          {/* Quattro Labs */}
          <article className="operator-card">
            <div className="operator-card__visual">
              <video
                className="operator-card__video"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-label="Quattro Labs car meet footage"
              >
                <source src="/assets/quattro-labs/car-meet-1.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="operator-card__body">
              <span className="operator-card__category">QUATTRO LABS · AUTOMOTIVE MEDIA</span>
              <h3 className="operator-card__name">Quattro Labs</h3>
              <p className="operator-card__desc">
                Built from zero to 150,000+ Instagram followers since 2021. Active. The brand we use as our own laboratory for organic growth experiments.
              </p>
              <div className="operator-card__metrics">
                <span>150K+ followers</span>
                <span>Active</span>
                <span>4 years</span>
              </div>
            </div>
          </article>

          {/* Madison Clark */}
          <article className="operator-card">
            <div className="operator-card__visual">
              <div className="operator-card__viz">
                <div className="operator-card__viz-big">100M</div>
                <div className="operator-card__viz-label">VIEWS · 60 DAYS · ZERO AD SPEND</div>

                <svg className="operator-card__viz-curve" viewBox="0 0 400 80" fill="none" aria-hidden="true">
                  <defs>
                    <linearGradient id="madison-curve-fill" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#FFE817" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#FFE817" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M 0 70 Q 80 68 120 65 Q 200 60 240 50 Q 320 35 400 5 L 400 80 L 0 80 Z"
                    fill="url(#madison-curve-fill)"
                  />
                  <path
                    d="M 0 70 Q 80 68 120 65 Q 200 60 240 50 Q 320 35 400 5"
                    stroke="#FFE817"
                    strokeWidth="2.5"
                    fill="none"
                    strokeLinecap="round"
                  />
                  <circle cx="0" cy="70" r="3" fill="#FFE817" />
                  <circle cx="120" cy="65" r="3" fill="#FFE817" />
                  <circle cx="240" cy="50" r="3" fill="#FFE817" />
                  <circle cx="400" cy="5" r="5" fill="#FFE817" />
                  <circle cx="400" cy="5" r="12" fill="#FFE817" opacity="0.25" />
                </svg>
              </div>
            </div>
            <div className="operator-card__body">
              <span className="operator-card__category">MADISON CLARK · AI PERSONA</span>
              <h3 className="operator-card__name">Madison Clark</h3>
              <p className="operator-card__desc">
                Built and scaled an AI-generated persona to 100 million views in 60 days. Zero ad spend. Proof that organic engineering works in any vertical.
              </p>
              <div className="operator-card__metrics">
                <span>100M views</span>
                <span>60 days</span>
                <span>Zero spend</span>
              </div>
            </div>
          </article>
        </div>

        {/* Gallery row: 3 more Quattro videos */}
        <div className="operators__gallery">
          <figure className="operators__gallery-item">
            <video
              className="operators__gallery-video"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            >
              <source src="/assets/quattro-labs/car-meet-1.mp4" type="video/mp4" />
            </video>
            <figcaption className="operators__gallery-caption">QUATTRO LABS · CAR MEET · 2025</figcaption>
          </figure>
          <figure className="operators__gallery-item">
            <video
              className="operators__gallery-video"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            >
              <source src="/assets/quattro-labs/car-meet-2.mp4" type="video/mp4" />
            </video>
            <figcaption className="operators__gallery-caption">QUATTRO LABS · PHOENIX · 2025</figcaption>
          </figure>
          <figure className="operators__gallery-item">
            <video
              className="operators__gallery-video"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            >
              <source src="/assets/quattro-labs/car-meet-3.mp4" type="video/mp4" />
            </video>
            <figcaption className="operators__gallery-caption">QUATTRO LABS · MEET HIGHLIGHTS</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
