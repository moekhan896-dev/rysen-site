import Link from "next/link";
import {
  LegalVerticalIllustration,
  MedicalVerticalIllustration,
} from "@/components/illustrations/VerticalIllustrations";

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
            We engineer visibility differently for legal and medical. Same
            proprietary stack, different vertical playbooks.
          </p>
        </div>

        <div className="verticals__spread">
          <div className="verticals__divider" aria-hidden="true" />

          {/* LEGAL side */}
          <article className="vertical-side vertical-side--legal">
            <div className="vertical-side__label">
              <span>LEGAL · VERTICAL 01</span>
            </div>
            <div className="vertical-side__illustration">
              <LegalVerticalIllustration />
            </div>
            <h3 className="vertical-side__name">Legal</h3>
            <p className="vertical-side__desc">
              We work with one law firm per metro across personal injury,
              family law, estate planning, and complex litigation. Every
              engagement begins with a 30-day audit and ends with measurable
              case intake.
            </p>

            <div className="vertical-side__metrics">
              <div className="vertical-side__metric">
                <div className="vertical-side__metric-num">1</div>
                <div className="vertical-side__metric-label">
                  law firm per metro
                </div>
              </div>
              <div className="vertical-side__metric">
                <div className="vertical-side__metric-num">30 days</div>
                <div className="vertical-side__metric-label">
                  to a full audit
                </div>
              </div>
              <div className="vertical-side__metric">
                <div className="vertical-side__metric-num">$2,400+</div>
                <div className="vertical-side__metric-label">
                  avg case value
                </div>
              </div>
              <div className="vertical-side__metric">
                <div className="vertical-side__metric-num">4</div>
                <div className="vertical-side__metric-label">
                  practice areas
                </div>
              </div>
            </div>

            <Link href="/case-studies?filter=legal" className="vertical-side__cta">
              See legal case studies <span aria-hidden="true">→</span>
            </Link>
          </article>

          {/* MEDICAL side */}
          <article className="vertical-side vertical-side--medical">
            <div className="vertical-side__label">
              <span>MEDICAL · VERTICAL 02</span>
            </div>
            <div className="vertical-side__illustration">
              <MedicalVerticalIllustration />
            </div>
            <h3 className="vertical-side__name">Medical</h3>
            <p className="vertical-side__desc">
              We work with one medical practice per metro across implant
              dentistry, cosmetic dermatology, regenerative medicine, and
              specialty surgery. Compliance-first, attribution-accurate.
            </p>

            <div className="vertical-side__metrics">
              <div className="vertical-side__metric">
                <div className="vertical-side__metric-num">1</div>
                <div className="vertical-side__metric-label">
                  practice per metro
                </div>
              </div>
              <div className="vertical-side__metric">
                <div className="vertical-side__metric-num">38%</div>
                <div className="vertical-side__metric-label">
                  AI citation rate
                </div>
              </div>
              <div className="vertical-side__metric">
                <div className="vertical-side__metric-num">$8K+</div>
                <div className="vertical-side__metric-label">
                  avg case value, regen
                </div>
              </div>
              <div className="vertical-side__metric">
                <div className="vertical-side__metric-num">4</div>
                <div className="vertical-side__metric-label">
                  specialties
                </div>
              </div>
            </div>

            <Link
              href="/case-studies?filter=medical"
              className="vertical-side__cta"
            >
              See medical case studies <span aria-hidden="true">→</span>
            </Link>
          </article>
        </div>
      </div>
    </section>
  );
}
