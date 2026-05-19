import Link from "next/link";
import { FlywheelVisualization } from "./FlywheelVisualization";

// Client list, replicated for the mobile fallback list (single source not
// shared with FlywheelVisualization to keep that component fully encapsulated)
const NODES = [
  { num: "01", slug: "aws-law-firm", vertical: "LEGAL", metro: "TAMPA", client: "AWS Law Firm", metric: "348 calls · 4 mo" },
  { num: "02", slug: "slim-dental", vertical: "MEDICAL", metro: "CHICAGO", client: "Slim Dental", metric: "+186% calls" },
  { num: "03", slug: "hartman-dermatology", vertical: "MEDICAL", metro: "MIAMI", client: "Hartman Dermatology", metric: "38% AI cite" },
  { num: "04", slug: "madison-clark", vertical: "BUILT BY US", metro: "AI PERSONA", client: "Madison Clark", metric: "100M views · 60d" },
  { num: "05", slug: "tyler-family-law", vertical: "LEGAL", metro: "ATLANTA", client: "Tyler Family Law", metric: "169 calls · 6 mo" },
  { num: "06", slug: "quattro-labs", vertical: "BUILT BY US", metro: "AUTO MEDIA", client: "Quattro Labs", metric: "150K followers" },
] as const;

export function TheWork() {
  return (
    <section className="the-work" id="work" aria-label="The work">
      <div className="the-work__inner">
        <div className="the-work__heading-row">
          <span className="how__bar" aria-hidden="true" />
          <p className="how__label">The Work</p>
        </div>
        <h2 className="how__heading">Six firms. Two verticals. One compound system.</h2>
        <p className="how__sub">
          Each firm we work with becomes the dominant result in their metro. Once they&apos;re hired, their competitors can&apos;t be.
        </p>

        {/* Desktop flywheel composition */}
        <div className="the-work__flywheel">
          <FlywheelVisualization />
        </div>

        {/* Mobile fallback vertical list */}
        <ol className="the-work__list the-work__list-mobile" aria-label="Case studies">
          {NODES.map((node) => (
            <li key={node.slug} className="the-work__list-item">
              <Link href={`/case-studies/${node.slug}`}>
                <span className="the-work__list-num">{node.num}</span>
                <span className="the-work__list-body">
                  <span className="the-work__list-label">{node.vertical} · {node.metro}</span>
                  <span className="the-work__list-client">{node.client}</span>
                  <span className="the-work__list-metric">{node.metric}</span>
                </span>
                <span className="the-work__list-arrow" aria-hidden="true">→</span>
              </Link>
            </li>
          ))}
        </ol>

        <p className="the-work__quote">
          Each firm receives exclusive territory rights for their metro and vertical. We don&apos;t dilute results across competitors in the same market.
        </p>
      </div>
    </section>
  );
}
