import Image from "next/image";
import { ScrollReveal } from "@/components/utilities/ScrollReveal";

const VENTURES = [
  {
    num: "0.1",
    title: "Quattro Labs",
    body: "Built and operates Quattro Labs, the automotive media brand we grew from zero to 150,000+ Instagram followers since 2021. Active.",
  },
  {
    num: "0.2",
    title: "The Honest Plumbers",
    body: "Founded in 2022. Michigan's most-followed plumbing company on Instagram. Still running today.",
  },
  {
    num: "0.3",
    title: "The Honest Maids",
    body: "Founded in 2022. Michigan's most-followed cleaning company on Instagram.",
  },
  {
    num: "0.4",
    title: "Madison Clark",
    body: "AI persona we built and scaled to 100 million views in 60 days. Zero ad spend. The same playbook we now run for our clients.",
  },
] as const;

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

        <div className="the-team__copy">
          <ScrollReveal delay={120}>
            <p className="the-team__label">
              <span aria-hidden="true">05 — </span>
              The Team
            </p>
          </ScrollReveal>
          <ScrollReveal delay={180}>
            <h2 className="the-team__heading">
              Operators first. Agency second.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={240}>
            <p className="the-team__intro">Built by Art Khan, founder.</p>
          </ScrollReveal>

          <div className="the-team__ventures">
            {VENTURES.map((v, i) => (
              <ScrollReveal key={v.num} delay={300 + i * 60}>
                <div className="the-team__venture">
                  <span className="the-team__venture-num">{v.num}</span>
                  <div>
                    <h3 className="the-team__venture-title">{v.title}</h3>
                    <p className="the-team__venture-body">{v.body}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={580}>
            <p className="the-team__previously">
              Previously: Salesforce · Roku · Ross School of Business
            </p>
          </ScrollReveal>
        </div>
      </div>

      <ScrollReveal delay={160}>
        <div className="the-team__strip">
          <figure className="the-team__strip-item">
            <Image
              src="/assets/team/team-photo.png"
              alt="The Rysen team"
              width={280}
              height={210}
            />
            <figcaption>The team · Phoenix</figcaption>
          </figure>
          <figure className="the-team__strip-item">
            <Image
              src="/assets/office/interior-reception.png"
              alt="Rysen lobby"
              width={280}
              height={210}
            />
            <figcaption>Lobby · Phoenix HQ</figcaption>
          </figure>
          <figure className="the-team__strip-item">
            <Image
              src="/assets/office/exterior-front.png"
              alt="Rysen office exterior"
              width={280}
              height={210}
            />
            <figcaption>Office · Phoenix</figcaption>
          </figure>
        </div>
      </ScrollReveal>
    </section>
  );
}
