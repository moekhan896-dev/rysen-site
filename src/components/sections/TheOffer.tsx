import Link from "next/link";
import Image from "next/image";
import { ScrollReveal } from "@/components/utilities/ScrollReveal";

export function TheOffer() {
  return (
    <section className="the-offer" aria-label="The offer">
      <div className="the-offer__inner">
        <div className="the-offer__copy">
          <ScrollReveal>
            <p className="the-offer__label">
              <span aria-hidden="true">04 — </span>
              The Offer
            </p>
          </ScrollReveal>
          <ScrollReveal delay={80}>
            <h2 className="the-offer__heading">
              We work with one firm per metro. By invitation.
            </h2>
          </ScrollReveal>

          <div className="the-offer__list">
            <ScrollReveal delay={140}>
              <div className="the-offer__item">
                <span className="the-offer__item-num">0.1</span>
                <div>
                  <h3 className="the-offer__item-title">Exclusivity</h3>
                  <p className="the-offer__item-body">
                    One law firm and one medical practice per metro. Once you&apos;re hired, your competitors can&apos;t be.
                  </p>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="the-offer__item">
                <span className="the-offer__item-num">0.2</span>
                <div>
                  <h3 className="the-offer__item-title">Audit-first</h3>
                  <p className="the-offer__item-body">
                    Every engagement begins with a 30-day audit. If we can&apos;t see a clear path to #1, we tell you. No retainer.
                  </p>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={260}>
              <div className="the-offer__item">
                <span className="the-offer__item-num">0.3</span>
                <div>
                  <h3 className="the-offer__item-title">Attribution</h3>
                  <p className="the-offer__item-body">
                    Reported in revenue, not impressions. Every dollar attributed to source.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={340}>
            <Link href="/contact" className="the-offer__cta">
              Request your audit <span aria-hidden="true">→</span>
            </Link>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={200}>
          <div className="the-offer__visual">
            <div className="the-offer__visual-bg" aria-hidden="true" />
            <div className="the-offer__visual-photo">
              <Image
                src="/assets/office/interior-workspace.png"
                alt="Rysen workspace"
                width={200}
                height={280}
              />
            </div>
            <div className="the-offer__visual-card" aria-hidden="false">
              <span className="the-offer__visual-card-bar" />
              <span className="the-offer__visual-card-label">CURRENTLY ACCEPTING</span>
              <span className="the-offer__visual-card-value">2 engagements</span>
              <span className="the-offer__visual-card-period">Q2 2026</span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
