import Link from "next/link";
import { SignalTriangle } from "@/components/brand/SignalTriangle";
import { ScrollReveal } from "@/components/utilities/ScrollReveal";

interface Briefing {
  numeral: string;
  category: string;
  firm: string;
  context: string;
  challenge: string;
  result: string;
  href: string;
}

const BRIEFINGS: ReadonlyArray<Briefing> = [
  {
    numeral: "i.",
    category: "Legal. Probate.",
    firm: "AWS Law Firm",
    context: "Tampa probate firm. Twelve months of engagement.",
    challenge:
      "Two decades of legal experience, no online presence. From page two to position one across all priority probate queries in Tampa Bay.",
    result:
      "Consultations grew by 240 percent. Now ranking first for every primary keyword in the metro.",
    href: "/case-studies/aws-law-firm",
  },
  {
    numeral: "ii.",
    category: "Legal. Divorce.",
    firm: "Tyler Family Law",
    context: "Atlanta family law firm. Eight months of engagement.",
    challenge:
      "Three other agencies said ranking against national divorce-firm chains in Atlanta was impossible. Tyler decided otherwise.",
    result:
      "Lead growth of 1,240 percent. First-result rankings across every priority divorce query. A four-week intake waitlist.",
    href: "/case-studies/tyler-family-law",
  },
  {
    numeral: "iii.",
    category: "Medical. Dermatology.",
    firm: "Hartman Dermatology",
    context: "Miami cosmetic dermatology practice. Ten months of engagement.",
    challenge:
      "Strong clinical reputation, page two visibility. The practice was Miami's secret. We made it Miami's go-to.",
    result:
      "Consultations grew by 78 percent. AI citation rate of 38 percent across cosmetic dermatology queries.",
    href: "/case-studies/hartman-dermatology",
  },
];

export function SelectedResults() {
  return (
    <section className="results-section" aria-label="Selected results">
      <div className="results-corner-mark" aria-hidden="true">
        <SignalTriangle size={12} decorative />
      </div>
      <div className="results-inner">
        <ScrollReveal>
          <div className="results-header">
            <span className="results-label">Selected results</span>
            <div className="results-label-rule" aria-hidden="true" />
          </div>
        </ScrollReveal>

        <div className="briefings">
          {BRIEFINGS.map((b, i) => (
            <ScrollReveal key={b.numeral} delay={i * 200}>
              <article className="briefing">
                <div className="briefing__index">
                  <span className="briefing__number">{b.numeral}</span>
                  <span className="briefing__category">{b.category}</span>
                </div>
                <h3 className="briefing__firm">{b.firm}</h3>
                <div className="briefing__context">{b.context}</div>
                <div className="briefing__rule" aria-hidden="true" />
                <p className="briefing__challenge">{b.challenge}</p>
                <p className="briefing__result">{b.result}</p>
                <Link href={b.href} className="briefing__link">
                  Read the full case study
                </Link>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
