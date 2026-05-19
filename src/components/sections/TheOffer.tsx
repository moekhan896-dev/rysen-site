import Link from "next/link";
import { ScrollReveal } from "@/components/utilities/ScrollReveal";

export function TheOffer() {
  return (
    <section className="the-offer" aria-label="The offer">
      <div className="the-offer__inner">
        <ScrollReveal>
          <p className="the-offer__kicker">The offer.</p>
        </ScrollReveal>
        <ScrollReveal delay={80}>
          <h2 className="the-offer__heading">We pick clients. They don't pick us.</h2>
        </ScrollReveal>

        <div className="the-offer__statements">
          <ScrollReveal delay={160}>
            <p className="the-offer__statement">
              One law firm and one medical practice per metro. Once you're hired, your competitors can't be.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={220} yOffset={0} duration={600}>
            <span className="the-offer__rule" aria-hidden="true" />
          </ScrollReveal>
          <ScrollReveal delay={260}>
            <p className="the-offer__statement">
              We turn down most inquiries. The ones we accept go big.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={320} yOffset={0} duration={600}>
            <span className="the-offer__rule" aria-hidden="true" />
          </ScrollReveal>
          <ScrollReveal delay={360}>
            <p className="the-offer__statement">
              Reported in revenue. Not impressions. Every dollar attributed to source.
            </p>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={460}>
          <Link href="/contact" className="the-offer__cta">
            See if your metro is open
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
