import Link from "next/link";
import { ScrollReveal } from "@/components/utilities/ScrollReveal";
import { RysenLogo } from "@/components/brand/RysenLogo";

export function TheClose() {
  return (
    <section className="the-close" aria-label="Find out if your metro is open">
      <div className="the-close__inner">
        <ScrollReveal>
          <p className="the-close__label">
            <span aria-hidden="true">08 — </span>
            Find out if your metro is open.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={120}>
          <h2 className="the-close__headline">
            If your competitors own the #1 result and you don&apos;t, we should talk.
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={220}>
          <Link href="/contact" className="the-close__cta">
            Request audit
          </Link>
        </ScrollReveal>

        <ScrollReveal delay={300}>
          <div className="the-close__contact">
            <a href="mailto:marketing@rysengrowth.com" className="the-close__email">
              marketing@rysengrowth.com
            </a>
            <span className="the-close__phone">(248) 406-6223</span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={400}>
          <div className="the-close__mark">
            <RysenLogo size="xl" variant="inverse" />
            <p className="the-close__mark-caption">Detroit · Phoenix · 2026</p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
