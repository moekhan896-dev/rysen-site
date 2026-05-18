import Link from "next/link";
import { ScrollReveal } from "@/components/utilities/ScrollReveal";
import { FounderPortraitTreatment } from "./FounderPortraitTreatment";

export function TheTeam() {
  return (
    <section className="the-team" aria-label="The team">
      <div className="the-team__inner">
        <ScrollReveal>
          <div className="the-team__visual">
            <FounderPortraitTreatment />
          </div>
        </ScrollReveal>

        <div className="the-team__content">
          <ScrollReveal delay={120}>
            <p className="the-team__kicker">The team.</p>
          </ScrollReveal>
          <ScrollReveal delay={180}>
            <h2 className="the-team__heading">Built by operators.</h2>
          </ScrollReveal>
          <ScrollReveal delay={240}>
            <p className="the-team__paragraph">
              We didn't learn this from a course. Built Quattro Labs to 150,000 followers in the automotive space. Built and scaled the Madison Clark AI persona to 100 million views in 60 days with zero ad spend. Now applying the same playbooks to law firms and medical practices that intend to dominate their market.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={300}>
            <p className="the-team__credentials">
              Previously: Salesforce · Roku · Ross School of Business
            </p>
          </ScrollReveal>
          <ScrollReveal delay={360}>
            <Link href="/about" className="the-team__link">
              Read the full founder story.
            </Link>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
