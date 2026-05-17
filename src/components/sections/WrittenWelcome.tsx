import { SignalTriangle } from "@/components/brand/SignalTriangle";
import { ScrollReveal } from "@/components/utilities/ScrollReveal";

export function WrittenWelcome() {
  return (
    <section className="welcome-section" aria-label="Welcome">
      <div className="welcome-corner-mark" aria-hidden="true">
        <SignalTriangle size={12} decorative />
      </div>
      <div className="welcome">
        <ScrollReveal yOffset={0} duration={600}>
          <div className="welcome__rule" />
        </ScrollReveal>
        <ScrollReveal delay={200} duration={1000}>
          <p className="welcome__statement">
            We build organic dominance for boutique law firms and medical
            practices. The team is in Detroit. The work compounds across years,
            not months.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={400} yOffset={0} duration={600}>
          <div className="welcome__rule" />
        </ScrollReveal>
      </div>
    </section>
  );
}
