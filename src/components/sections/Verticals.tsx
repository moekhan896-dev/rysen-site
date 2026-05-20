import Link from "next/link";

function ScalesIllustration() {
  // Stylized scales of justice in gold + ink on a warm cream gradient ground.
  return (
    <svg viewBox="0 0 360 200" fill="none" aria-hidden="true" className="vert-illus">
      <defs>
        <pattern id="legal-dots" width="14" height="14" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="0.8" fill="rgba(31, 27, 22, 0.08)" />
        </pattern>
      </defs>
      <rect width="360" height="200" fill="url(#legal-dots)" />
      {/* Central post */}
      <line x1="180" y1="40" x2="180" y2="160" stroke="#1F1B16" strokeWidth="1.5" strokeLinecap="round" />
      {/* Top finial */}
      <circle cx="180" cy="38" r="4" fill="#1F1B16" />
      {/* Central beam */}
      <line x1="100" y1="68" x2="260" y2="68" stroke="#C9962C" strokeWidth="2" strokeLinecap="round" />
      {/* Left pan suspension lines */}
      <line x1="100" y1="68" x2="80" y2="106" stroke="#1F1B16" strokeWidth="1" />
      <line x1="100" y1="68" x2="120" y2="106" stroke="#1F1B16" strokeWidth="1" />
      {/* Left pan */}
      <path d="M 70 108 Q 100 122 130 108" stroke="#1F1B16" strokeWidth="1.5" fill="none" strokeLinejoin="round" />
      <line x1="70" y1="108" x2="130" y2="108" stroke="#1F1B16" strokeWidth="1" />
      {/* Right pan suspension lines */}
      <line x1="260" y1="68" x2="240" y2="106" stroke="#1F1B16" strokeWidth="1" />
      <line x1="260" y1="68" x2="280" y2="106" stroke="#1F1B16" strokeWidth="1" />
      {/* Right pan */}
      <path d="M 230 108 Q 260 122 290 108" stroke="#1F1B16" strokeWidth="1.5" fill="none" strokeLinejoin="round" />
      <line x1="230" y1="108" x2="290" y2="108" stroke="#1F1B16" strokeWidth="1" />
      {/* Base */}
      <line x1="150" y1="160" x2="210" y2="160" stroke="#1F1B16" strokeWidth="2" strokeLinecap="round" />
      <line x1="160" y1="166" x2="200" y2="166" stroke="#1F1B16" strokeWidth="1" strokeLinecap="round" />
      {/* Small gold accent dot at beam center */}
      <circle cx="180" cy="68" r="3" fill="#C9962C" />
    </svg>
  );
}

function CaduceusIllustration() {
  return (
    <svg viewBox="0 0 360 200" fill="none" aria-hidden="true" className="vert-illus">
      <defs>
        <pattern id="med-dots" width="14" height="14" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="0.8" fill="rgba(31, 27, 22, 0.08)" />
        </pattern>
      </defs>
      <rect width="360" height="200" fill="url(#med-dots)" />
      {/* Central staff */}
      <line x1="180" y1="32" x2="180" y2="170" stroke="#1F1B16" strokeWidth="1.5" strokeLinecap="round" />
      {/* Wings */}
      <path d="M 180 42 Q 160 32 140 36 Q 156 44 168 50" stroke="#1F1B16" strokeWidth="1.5" fill="none" strokeLinejoin="round" />
      <path d="M 180 42 Q 200 32 220 36 Q 204 44 192 50" stroke="#1F1B16" strokeWidth="1.5" fill="none" strokeLinejoin="round" />
      {/* Top sphere with gold accent */}
      <circle cx="180" cy="32" r="6" fill="#C9962C" />
      {/* Intertwined serpents */}
      <path d="M 180 60 Q 160 75 180 95 Q 200 115 180 135 Q 160 150 180 165" stroke="#1F1B16" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M 180 60 Q 200 75 180 95 Q 160 115 180 135 Q 200 150 180 165" stroke="#1F1B16" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      {/* Serpent heads */}
      <circle cx="166" cy="68" r="2.4" fill="#1F1B16" />
      <circle cx="194" cy="68" r="2.4" fill="#1F1B16" />
      {/* Small gold accent at staff base */}
      <line x1="170" y1="170" x2="190" y2="170" stroke="#C9962C" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function Verticals() {
  return (
    <section className="verticals" aria-label="Verticals">
      <div className="verticals__inner">
        <div className="verticals__header">
          <p className="verticals__label">
            <span aria-hidden="true" /> 02 — Verticals
          </p>
          <h2 className="verticals__headline">
            Two verticals. <em>One playbook.</em>
          </h2>
          <p className="verticals__sub">
            We work exclusively with law firms and medical practices. Each vertical has its own dedicated team, compliance considerations, and proven playbook.
          </p>
        </div>

        <div className="verticals__grid">
          {/* Card 01 — Legal */}
          <article className="vertical-card">
            <div className="vertical-card__visual">
              <ScalesIllustration />
            </div>
            <div className="vertical-card__body">
              <div className="vertical-card__number">01</div>
              <h3 className="vertical-card__name">Legal</h3>
              <p className="vertical-card__tagline">Law firms</p>
              <p className="vertical-card__desc">
                We work with one law firm per metro across personal injury, family law, estate planning, and complex litigation. Every engagement begins with a 30-day audit and ends with measurable case intake. We don&apos;t do volume. We do market dominance.
              </p>

              <span className="vertical-card__build-label">What we build</span>
              <ul className="vertical-card__build-list">
                <li className="vertical-card__build-item">Probate &amp; estate planning</li>
                <li className="vertical-card__build-item">Family law &amp; divorce</li>
                <li className="vertical-card__build-item">Personal injury</li>
                <li className="vertical-card__build-item">Complex litigation</li>
              </ul>

              <div className="vertical-card__metrics">
                <div>
                  <div className="vertical-card__metric-num">1</div>
                  <div className="vertical-card__metric-label">law firm per metro</div>
                </div>
                <div>
                  <div className="vertical-card__metric-num">30 days</div>
                  <div className="vertical-card__metric-label">to a full audit</div>
                </div>
                <div>
                  <div className="vertical-card__metric-num">$2,400+</div>
                  <div className="vertical-card__metric-label">avg case value, vertical</div>
                </div>
              </div>

              <Link href="/case-studies?filter=legal" className="vertical-card__cta">
                See legal case studies <span aria-hidden="true">→</span>
              </Link>
            </div>
          </article>

          {/* Card 02 — Medical */}
          <article className="vertical-card">
            <div className="vertical-card__visual">
              <CaduceusIllustration />
            </div>
            <div className="vertical-card__body">
              <div className="vertical-card__number">02</div>
              <h3 className="vertical-card__name">Medical</h3>
              <p className="vertical-card__tagline">Medical practices</p>
              <p className="vertical-card__desc">
                We work with one medical practice per metro across implant dentistry, cosmetic dermatology, regenerative medicine, and specialty surgery. Compliance-first, attribution-accurate, designed for high-ticket consultative care.
              </p>

              <span className="vertical-card__build-label">What we build</span>
              <ul className="vertical-card__build-list">
                <li className="vertical-card__build-item">Implant dentistry</li>
                <li className="vertical-card__build-item">Cosmetic dermatology</li>
                <li className="vertical-card__build-item">Regenerative medicine</li>
                <li className="vertical-card__build-item">Specialty surgery</li>
              </ul>

              <div className="vertical-card__metrics">
                <div>
                  <div className="vertical-card__metric-num">1</div>
                  <div className="vertical-card__metric-label">practice per metro</div>
                </div>
                <div>
                  <div className="vertical-card__metric-num">38%</div>
                  <div className="vertical-card__metric-label">AI search citation rate</div>
                </div>
                <div>
                  <div className="vertical-card__metric-num">$8K+</div>
                  <div className="vertical-card__metric-label">avg case value, regenerative</div>
                </div>
              </div>

              <Link href="/case-studies?filter=medical" className="vertical-card__cta">
                See medical case studies <span aria-hidden="true">→</span>
              </Link>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
