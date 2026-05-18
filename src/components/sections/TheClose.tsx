import { ScrollReveal } from "@/components/utilities/ScrollReveal";

export function TheClose() {
  return (
    <section className="the-close" aria-label="Contact">
      <div className="the-close__inner">
        <ScrollReveal>
          <h2 className="the-close__statement">
            If your competitors are the{" "}
            <span className="the-close__highlight">#1 search result</span>{" "}
            online and you're not, there's a problem.
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={120}>
          <p className="the-close__sub">
            Rysen Growth. SEO and AI search visibility for law firms and medical practices.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="the-close__contact">
            <a
              href="mailto:marketing@rysengrowth.com"
              className="the-close__email"
            >
              marketing@rysengrowth.com
            </a>
            <span className="the-close__phone">(248) 406-6223</span>
            <span className="the-close__address">
              1 Campus Martius, Suite 200, Detroit, Michigan 48226
            </span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={320}>
          <p className="the-close__note">
            Replies are answered within one business day.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
