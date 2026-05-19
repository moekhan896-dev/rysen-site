import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Slim Dental Case Study, Chicago Implant Dentistry, #1 Map Pack",
  description:
    "How Rysen took Slim Dental to the #1 position in the Chicago map pack for implant dentistry, with a +186% increase in qualified consultation calls.",
};

export default function SlimDentalPage() {
  return (
    <article
      className="case-study-placeholder"
      aria-label="Slim Dental case study"
    >
      <header className="case-study-placeholder__head">
        <p className="case-study-placeholder__tag">
          Medical · Dental · Chicago
        </p>
        <h1 className="case-study-placeholder__title">Slim Dental</h1>
        <p className="case-study-placeholder__lede">
          #1 in the Chicago map pack for implant dentistry. +186% qualified
          calls. Twelve-month engagement.
        </p>
      </header>

      <section className="case-study-placeholder__body">
        <p className="case-study-placeholder__placeholder">
          PLACEHOLDER: Full Slim Dental case study content forthcoming.
          Map pack dominance achieved through Google Business Profile
          optimization, review velocity engineering, and structured-data
          implementation specific to dental practices.
        </p>
        <p className="case-study-placeholder__placeholder">
          PLACEHOLDER: Phase-by-phase breakdown, competitive landscape, and
          the conversion architecture that turned visibility into bookings.
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
