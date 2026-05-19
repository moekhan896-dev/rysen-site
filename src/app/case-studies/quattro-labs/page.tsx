import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Quattro Labs Case Study, Built by Us, 150K Followers",
  description:
    "How Rysen built Quattro Labs into a recognized automotive brand with 150,000+ engaged followers across social platforms, active since 2021.",
};

export default function QuattroLabsPage() {
  return (
    <article className="case-study-placeholder" aria-label="Quattro Labs case study">
      <header className="case-study-placeholder__head">
        <p className="case-study-placeholder__tag">Built by us · Auto · Active since 2021</p>
        <h1 className="case-study-placeholder__title">Quattro Labs</h1>
        <p className="case-study-placeholder__lede">
          Built our own auto brand to 150,000+ followers. Live in the
          automotive vertical since 2021.
        </p>
      </header>

      <section className="case-study-placeholder__body">
        <p className="case-study-placeholder__placeholder">
          PLACEHOLDER: Full Quattro Labs case study content forthcoming. This
          page documents the proof-of-work that backs the Rysen operator
          claim: a brand built and scaled by the team using the same
          playbooks now applied to law firms and medical practices.
        </p>
        <p className="case-study-placeholder__placeholder">
          PLACEHOLDER: Engagement metrics, content velocity, audience growth
          curve, and the playbooks that produced them.
        </p>
      </section>

      <footer className="case-study-placeholder__foot">
        <Link href="/case-studies" className="case-study-placeholder__back">
          ← All case studies
        </Link>
        <Link href="/contact" className="case-study-placeholder__cta">
          Find out if your metro is open
        </Link>
      </footer>
    </article>
  );
}
