import { AmbientTriangle } from "@/components/brand/AmbientTriangle";
import { SignalTriangle } from "@/components/brand/SignalTriangle";

const CREDENTIALS: ReadonlyArray<{ title: string; desc: string }> = [
  {
    title: "Brand operators",
    desc: "Founders here have built Quattro Labs (150K+ followers on Instagram), The Honest Plumbers (active service brand), and grew Madison Clark (an AI persona) to 100M+ views in 60 days. The senior team has run real brands at real scale.",
  },
  {
    title: "Senior pedigrees",
    desc: "Strategists with backgrounds at Salesforce, Roku, and big-agency operator roles. Ross School of Business. NASA recognition. The kind of senior pedigrees that don't run anonymous freelancer agencies.",
  },
  {
    title: "Data science team",
    desc: "A dedicated in-house data team builds custom attribution dashboards, runs cohort analysis, and develops predictive models for each client. Not vendor tools rebadged. Real data infrastructure, built for our specific use case.",
  },
];

export function FounderSection() {
  return (
    <section
      className="founder-rebrand"
      aria-label="Who runs Rysen"
    >
      <div className="section-corner-mark">
        <AmbientTriangle size={16} />
      </div>

      <div className="founder-rebrand-inner">
        <div className="section-eyebrow on-ink">
          <SignalTriangle size={10} decorative />
          <span className="eyebrow-rule" aria-hidden="true" />
          <span className="eyebrow-text">Who runs Rysen</span>
        </div>

        <h2 className="founder-rebrand-heading">Operators run this firm.</h2>

        <p className="founder-rebrand-lead">
          Most marketing agencies are run by consultants who have never built a
          brand. Rysen is different. The senior strategists here have founded,
          scaled, or operated brands of their own, and they bring that operator
          experience to every law firm and medical practice we serve. Backed by
          an in-house data science team that measures every dollar in attributed
          revenue, not impressions.
        </p>

        <blockquote className="founder-rebrand-quote pull-quote">
          <p>
            We don&apos;t sell our clients on growth playbooks we&apos;ve never
            run ourselves. We&apos;ve run them. Then we operate the same
            playbooks for them, backed by the data infrastructure to prove
            what&apos;s working.
          </p>
          <cite className="founder-rebrand-attribution">, Rysen leadership</cite>
        </blockquote>

        <div className="founder-operator-cards">
          {CREDENTIALS.map((cred) => (
            <article key={cred.title} className="founder-operator-card">
              <div className="founder-operator-card-mark">
                <SignalTriangle size={14} decorative />
              </div>
              <h3 className="founder-operator-card-title">{cred.title}</h3>
              <p className="founder-operator-card-desc">{cred.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
