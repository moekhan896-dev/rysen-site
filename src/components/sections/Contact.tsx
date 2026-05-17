import { SignalTriangle } from "@/components/brand/SignalTriangle";
import { ScrollReveal } from "@/components/utilities/ScrollReveal";

export function Contact() {
  return (
    <section className="contact-confidential-section" aria-label="Contact">
      <div className="contact-confidential-corner-mark" aria-hidden="true">
        <SignalTriangle size={14} decorative />
      </div>
      <div className="contact-confidential">
        <ScrollReveal>
          <h2 className="contact-confidential__heading">To request an audit</h2>
        </ScrollReveal>
        <ScrollReveal delay={150}>
          <div className="contact-confidential__lines">
            <p className="contact-confidential__line">
              Write to{" "}
              <a href="mailto:marketing@rysengrowth.com">
                marketing@rysengrowth.com
              </a>
            </p>
            <p className="contact-confidential__line">
              or call <a href="tel:+12484066223">(248) 406-6223</a>
            </p>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={300} yOffset={0} duration={600}>
          <div className="contact-confidential__rule" aria-hidden="true" />
        </ScrollReveal>
        <ScrollReveal delay={400}>
          <div className="contact-confidential__address">
            <p>1 Campus Martius, Suite 200</p>
            <p>Detroit, Michigan 48226</p>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={500} yOffset={0} duration={600}>
          <div className="contact-confidential__rule" aria-hidden="true" />
        </ScrollReveal>
        <ScrollReveal delay={600}>
          <p className="contact-confidential__note">
            Audits are scheduled within one business day.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
