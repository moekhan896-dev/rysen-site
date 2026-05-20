import Link from "next/link";

const LEGAL_CARD_PHOTO = "https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=800&q=85";
const MEDICAL_CARD_PHOTO = "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=85";

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
              <img
                src={LEGAL_CARD_PHOTO}
                alt="Law firm interior"
                className="vertical-card__visual-image"
                loading="lazy"
              />
              <div className="vertical-card__visual-overlay" aria-hidden="true" />
              <div className="vertical-card__visual-badge">LEGAL · VERTICAL 01</div>
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
              <img
                src={MEDICAL_CARD_PHOTO}
                alt="Modern medical clinic"
                className="vertical-card__visual-image"
                loading="lazy"
              />
              <div className="vertical-card__visual-overlay" aria-hidden="true" />
              <div className="vertical-card__visual-badge">MEDICAL · VERTICAL 02</div>
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
