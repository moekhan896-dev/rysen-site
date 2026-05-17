import Link from "next/link";
import { SignalTriangle } from "@/components/brand/SignalTriangle";
import { ScrollReveal } from "@/components/utilities/ScrollReveal";

export function Leadership() {
  return (
    <section className="leadership-section" aria-label="Leadership">
      <div className="leadership-corner-mark" aria-hidden="true">
        <SignalTriangle size={14} decorative />
      </div>
      <div className="leadership">
        <ScrollReveal>
          <SignalTriangle size={24} className="leadership__mark" decorative />
        </ScrollReveal>
        <ScrollReveal delay={150}>
          <blockquote className="leadership__quote">
            We do not sell growth strategies we have never run ourselves. We
            have run them. Then we operate the same playbooks for our clients,
            backed by the data to prove what is working.
          </blockquote>
        </ScrollReveal>
        <ScrollReveal delay={300}>
          <cite className="leadership__attribution">Rysen Leadership</cite>
        </ScrollReveal>
        <ScrollReveal delay={400} yOffset={0} duration={600}>
          <div className="leadership__rule" aria-hidden="true" />
        </ScrollReveal>
        <ScrollReveal delay={500}>
          <p className="leadership__credentials">
            The senior team includes founders of Quattro Labs, The Honest
            Plumbers, and the team that grew Madison Clark to 100 million views
            in 60 days.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={600}>
          <Link href="/about" className="leadership__link">
            Read about the firm
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
