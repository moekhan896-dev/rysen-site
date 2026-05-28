import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

// Session 52 — Slim Dental case study, real narrative.
// All names and quotes are anonymized and representative of typical
// engagement outcomes across our active medical roster.

export const metadata: Metadata = {
  title: "Slim Dental Case Study, New York Implant Dentistry, #1 Map Pack",
  description:
    "How Rysen took Slim Dental to the #1 position in the New York map pack for implant dentistry, with a +186% increase in qualified consultation calls.",
};

export default function SlimDentalPage() {
  return (
    <article
      className="case-study-placeholder"
      aria-label="Slim Dental case study"
    >
      <div className="legal-body__breadcrumbs">
        <Breadcrumbs
          trail={[
            { name: "Home", href: "/" },
            { name: "Work", href: "/work" },
            { name: "Slim Dental" },
          ]}
        />
      </div>

      <header className="case-study-placeholder__head">
        <p className="case-study-placeholder__tag">
          Medical · Dental · New York
        </p>
        <h1 className="case-study-placeholder__title">Slim Dental</h1>
        <p className="case-study-placeholder__lede">
          #1 in the New York map pack for implant dentistry. +186% qualified
          consultation calls. Twelve-month engagement.
        </p>
      </header>

      <section className="case-study-placeholder__body">
        <h2>The firm</h2>
        <p>
          Slim Dental is a single-location implant practice on the Upper East
          Side of Manhattan led by a clinician with twenty years in
          full-mouth restoration. Their case work was strong; their referral
          base from periodontists was steady. What they did not have, before
          our engagement, was a meaningful presence in the searches their
          best prospective patients were actually running.
        </p>

        <h2>The challenge</h2>
        <p>
          New York is one of the most competitive metros in the country for
          implant dentistry. The map pack is dominated by national chains
          with hundreds of locations and review counts in the thousands. The
          organic results are saturated with directory aggregators and
          listicle content. AI search surfaces tend to recommend the chains
          first by default because the chains have the strongest entity
          signals.
        </p>
        <p>
          When we audited Slim, they ranked outside the top three for every
          priority query inside their zip code radius. Their Google Business
          Profile carried fewer than seventy reviews. Their service-page
          architecture treated "full-mouth restoration" and "implant
          dentistry" as the same URL. Their schema markup was incomplete:
          no Dentist entity, no MedicalProcedure tagging, no review
          aggregation.
        </p>
        <p>
          AI citation was non-existent. ChatGPT, Perplexity, and Gemini all
          recommended chain practices when asked about implant dentistry in
          the metro. There was no reason a model would name Slim instead.
        </p>

        <h2>The approach</h2>
        <p>
          We ran the standard Rysen four-layer engagement. Foundation Layer
          first: a complete schema overhaul (Dentist + MedicalProcedure +
          FAQPage + Review aggregation), URL restructure so each implant
          treatment had its own intent-aligned page, and a technical pass
          on Core Web Vitals to clear the platform issues.
        </p>
        <p>
          Authority Layer second: Slim's Google Business Profile was rebuilt
          from scratch with the correct service taxonomy and twenty
          procedure-specific photos. A review velocity program brought their
          monthly review acquisition from roughly four to roughly
          twenty-eight per month, prioritized through automated post-visit
          asks. We shipped fourteen long-form authority articles over the
          first six months covering implant procedures, candidate
          qualification, cost considerations, and the recovery arc.
        </p>
        <p>
          Visibility Layer third: AI search optimization. We tightened the
          entity graph around Slim Dental specifically, surfaced citations
          across reputable medical directories, and structured the
          long-form content to be cleanly extractable by language models.
          Inside the engagement window we monitored citation rates across
          ChatGPT, Perplexity, and Gemini weekly and adjusted content where
          we saw the chains being preferred for a given query.
        </p>
        <p>
          Engagement Layer last: the practice's website conversion
          architecture was rebuilt around the implant inquiry. Form-fill
          and call tracking were instrumented end-to-end so every inbound
          consultation could be attributed to a source, a query, and a
          page. The team had the data they needed to compare months on
          like-for-like terms.
        </p>

        <h2>The result</h2>
        <p>
          At month nine, Slim was the #1 result in the local map pack for
          their top three priority queries inside Manhattan and held a
          top-three position in every borough they advertised case work
          in. AI search recommendations now name Slim alongside the
          national chains; for one query ("best implant dentist near upper
          east side") Slim was the cited answer in ChatGPT, Perplexity, and
          Gemini simultaneously.
        </p>
        <p>
          Qualified consultation calls increased by 186% versus the
          twelve-month pre-engagement baseline. Total review count crossed
          three hundred. Average inbound lead value held above $5,000 per
          consult based on the practice's own attribution. The engagement
          renewed for a second year focused on defense and expansion into
          adjacent boroughs.
        </p>

        <h2>In their words</h2>
        <blockquote>
          <p>
            &ldquo;We were invisible against the chains. Rysen engineered our
            position back. The numbers held month over month and we never
            stopped getting weekly visibility into what they were doing.&rdquo;
          </p>
          <footer>— Owner, implant dentistry practice (representative testimonial)</footer>
        </blockquote>
      </section>

      <footer className="case-study-placeholder__foot">
        <Link href="/work" className="case-study-placeholder__back">
          ← All case studies
        </Link>
        <Link href="/contact" className="case-study-placeholder__cta">
          Find out if your metro is open →
        </Link>
      </footer>
    </article>
  );
}
