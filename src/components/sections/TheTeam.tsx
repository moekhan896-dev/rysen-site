import Link from "next/link";
import Image from "next/image";
import { ScrollReveal } from "@/components/utilities/ScrollReveal";

export function TheTeam() {
  return (
    <section className="the-team" aria-label="The team">
      <div className="the-team__inner">
        <ScrollReveal>
          <div className="the-team__portrait">
            <Image
              src="/assets/founder/art-khan-portrait.png"
              alt="Art Khan, Founder of Rysen Growth"
              width={420}
              height={520}
              priority
            />
          </div>
        </ScrollReveal>

        <div className="the-team__content">
          <ScrollReveal delay={120}>
            <p className="the-team__kicker">The team.</p>
          </ScrollReveal>
          <ScrollReveal delay={180}>
            <h2 className="the-team__heading">We built brands before we built yours.</h2>
          </ScrollReveal>
          <ScrollReveal delay={240}>
            <p className="the-team__paragraph">
              We didn't learn this from a course. We built Quattro Labs to 150,000+ followers in the automotive space. We built and scaled the Madison Clark AI persona to 100 million views in 60 days with zero ad spend. Then we made law firms famous on Google. Now we're selective about who else gets in.
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

      <ScrollReveal delay={120}>
        <div className="the-team__group">
          <Image
            src="/assets/team/team-photo.png"
            alt="The Rysen team"
            width={1280}
            height={720}
            className="the-team__group-image"
          />
          <p className="the-team__group-caption">Phoenix · 2026</p>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={180}>
        <div className="the-team__office-grid">
          <Image
            src="/assets/office/exterior-front.png"
            alt="Rysen office exterior"
            width={420}
            height={520}
          />
          <Image
            src="/assets/office/interior-workspace.png"
            alt="Rysen workspace"
            width={420}
            height={520}
          />
          <Image
            src="/assets/office/interior-reception.png"
            alt="Rysen lobby"
            width={420}
            height={520}
          />
        </div>
      </ScrollReveal>
    </section>
  );
}
