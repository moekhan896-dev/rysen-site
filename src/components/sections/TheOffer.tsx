import Link from "next/link";

const PATH_01_LIST = [
  "30-day comprehensive audit",
  "Custom 12-month growth plan",
  "Google Business Profile rebuild",
  "AI search optimization (ChatGPT, Perplexity, Gemini)",
  "Local rankings program",
  "Authority content engine",
  "Monthly reporting with revenue attribution",
] as const;

const PATH_02_LIST = [
  "All of Path 01",
  "Exclusive territory rights (metro + vertical lockup)",
  "Dedicated account team",
  "Custom landing page conversion engine",
  "Reputation acceleration (review velocity + response)",
  "Press placement program (3-5 publications / year)",
  "Quarterly strategy sessions on-site (Phoenix HQ)",
] as const;

export function TheOffer() {
  return (
    <section className="offer" aria-label="Engagement paths">
      <div className="offer__inner">
        <p className="offer__label">
          <span aria-hidden="true" /> 04 — Engagement
        </p>
        <h2 className="offer__headline">
          Two ways in. <em>One destination.</em>
        </h2>
        <p className="offer__sub">
          Whether you&apos;re establishing your visibility from zero or scaling an already-strong firm, we have a defined entry path.
        </p>

        <div className="offer__paths">
          {/* Path 01 */}
          <article className="path-card">
            <span className="path-card__label">Path 01</span>
            <h3 className="path-card__headline">Establish.</h3>
            <p className="path-card__tagline">For firms ranked outside the top 5 in their metro.</p>

            <span className="path-card__best-label">Best for</span>
            <p className="path-card__best">
              New or growing firms ready to claim their position before a competitor does.
            </p>

            <span className="path-card__includes-label">What&apos;s included</span>
            <ul className="path-card__list">
              {PATH_01_LIST.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <Link href="/contact" className="path-card__cta">
              Apply for engagement <span aria-hidden="true">→</span>
            </Link>
          </article>

          {/* Path 02 */}
          <article className="path-card">
            <span className="path-card__badge">Most aggressive</span>
            <span className="path-card__label">Path 02</span>
            <h3 className="path-card__headline">Dominate.</h3>
            <p className="path-card__tagline">For firms already in the top 3 ready for metro lockup.</p>

            <span className="path-card__best-label">Best for</span>
            <p className="path-card__best">
              Established firms ready to permanently lock competitors out of their metro.
            </p>

            <span className="path-card__includes-label">What&apos;s included</span>
            <ul className="path-card__list">
              {PATH_02_LIST.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <Link href="/contact" className="path-card__cta">
              Apply for engagement <span aria-hidden="true">→</span>
            </Link>
          </article>
        </div>
      </div>
    </section>
  );
}
