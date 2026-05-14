import type { Metadata } from "next";
import { CTABanner } from "@/components/page-sections/CTABanner";
import { PageSection } from "@/components/page-sections/PageSection";
import {
  CasePhases,
  CaseQuote,
  CaseResultChart,
  CaseStats,
  CaseTacticsGrid,
} from "@/components/page-sections/CaseStudyParts";

export const metadata: Metadata = {
  title:
    "Tyler Family Law Case Study — Atlanta Divorce, +1,240% Leads in 8 Months",
  description:
    "How Rysen took Tyler Family Law from a referral-only Atlanta divorce practice to position one across priority family law queries with a four-week intake waitlist.",
};

const PHASES = [
  {
    window: "MONTH 1–2",
    title: "Hyperlocal foundation",
    desc: "Atlanta-only strategy from day one. We told other agencies’ recommended GA-wide approach was wrong for this firm.",
    tactics: [
      "Atlanta-only keyword tree (no statewide dilution)",
      "Neighborhood-level GMB optimization",
      "Schema overhaul (LegalService + Attorney + FAQ)",
    ],
  },
  {
    window: "MONTH 3–4",
    title: "Authority + AI consumption",
    desc: "Long-form authority content covering divorce subtopics, engineered for both ranking and AI citation.",
    tactics: [
      "Authority library: custody, asset division, prenups, post-decree",
      "Citation work across legal authorities and Atlanta directories",
      "Entity strengthening for AI search consumption",
    ],
  },
  {
    window: "MONTH 5–6",
    title: "Review velocity + neighborhood content",
    desc: "Systematic review acquisition program and neighborhood-specific landing pages across priority Atlanta zones.",
    tactics: [
      "Automated review request flow + response system",
      "Buckhead, Decatur, Sandy Springs neighborhood content",
      "Local pack defense playbook",
    ],
  },
  {
    window: "MONTH 7–8",
    title: "Position-one capture",
    desc: "Crossed into position one across priority queries. Engagement focus shifted to defense and capacity.",
    tactics: [
      "Position-one defense against national franchise competitors",
      "Intake capacity build-out to support lead volume",
      "Quarterly authority refresh + expansion to adjacent practice areas",
    ],
  },
];

const TACTICS = [
  {
    title: "AI consumption rebuild",
    desc: "Entity, schema, and content all engineered for ChatGPT and Google AI Overviews citation in priority queries.",
  },
  {
    title: "Divorce subtopic authority",
    desc: "Authority articles covering custody, asset division, prenups, and post-decree — the queries with real intent.",
  },
  {
    title: "Atlanta-only GMB",
    desc: "GMB optimization that targeted Atlanta proper, not Georgia broadly, not the suburbs — the math wins faster.",
  },
  {
    title: "Review velocity strategy",
    desc: "Automated request flow, response handling, and rolling 90-day average tracking with neighborhood breakdown.",
  },
  {
    title: "Schema markup",
    desc: "LegalService, Attorney entity, FAQ schema, and review aggregations on every priority page.",
  },
  {
    title: "Hyperlocal neighborhood pages",
    desc: "Practice pages for Buckhead, Decatur, Sandy Springs, and Midtown — written for residents, not just SEO.",
  },
];

export default function TylerCaseStudyPage() {
  const caseJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Tyler Family Law — Atlanta divorce, +1,240% leads, #1 ranked in 8 months",
    author: { "@type": "Organization", name: "Rysen Growth" },
    publisher: { "@type": "Organization", name: "Rysen Growth" },
  };

  return (
    <main className="case-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(caseJsonLd) }}
      />

      <section className="case-page-hero">
        <div className="page-hero-ambient" aria-hidden="true">
          <span className="page-hero-blob page-hero-blob-1" />
          <span className="page-hero-blob page-hero-blob-2" />
        </div>
        <div className="case-page-hero-inner">
          <div className="case-page-hero-badge">
            LEGAL · FAMILY · ATLANTA, GA
          </div>
          <div className="page-hero-eyebrow">CASE STUDY</div>
          <h1 className="case-page-hero-title">
            Tyler Family Law: Atlanta’s{" "}
            <span className="accent-italic">#1 divorce attorney.</span>
          </h1>
          <CaseStats
            stats={[
              { value: "+1,240%", label: "Lead growth in 8 months" },
              { value: "#1", label: "Ranked Atlanta priority queries" },
              { value: "4-week", label: "Intake waitlist" },
            ]}
          />
        </div>
      </section>

      <PageSection
        eyebrow="WHO THEY ARE"
        title="A respected Atlanta family law practice, referral-dependent."
        titleAlignment="left"
        maxWidth="780px"
      >
        <p className="case-prose">
          Tyler Family Law is an Atlanta-based divorce and family law practice
          with deep trial experience and a partner who’s argued some of
          the most cited custody cases in Georgia. The firm had been running on
          referral volume for over a decade — but referrals had plateaued, and
          the partner watching her son use ChatGPT to research his upcoming
          college essays realized her future clients were going to find lawyers
          the same way. She called us.
        </p>
      </PageSection>

      <PageSection
        eyebrow="WHERE THEY WERE"
        title="Three other agencies told them ranking was impossible."
        titleAlignment="left"
        maxWidth="780px"
        background="tint"
      >
        <div className="case-prose">
          <p>
            Tyler had spoken with three other agencies before us. All three told
            them the same thing: ranking in Atlanta against the national lawyer
            mills was impossible. The math, they said, didn’t work — the
            national franchises had bigger budgets, more domain authority, and
            more historical link equity. The recommended path was to compete
            statewide. Get traffic from Augusta or Savannah and hope to convert
            from there.
          </p>
          <p>
            That advice was wrong. Statewide content dilutes local pack signal.
            The Augusta query is a different query than the Atlanta query.
            Augusta traffic doesn’t convert because the firm is in
            Atlanta. The right play was to go hyperlocal, win Atlanta, and
            ignore everywhere else. That’s what we did.
          </p>
        </div>
      </PageSection>

      <PageSection
        eyebrow="WHAT WE DID"
        title="Four phases. Eight months. Atlanta only."
      >
        <CasePhases phases={PHASES} />
      </PageSection>

      <PageSection
        eyebrow="HOW WE EXECUTED"
        title="The six tactics, applied hyperlocal."
        background="tint"
      >
        <CaseTacticsGrid tactics={TACTICS} />
      </PageSection>

      <PageSection
        eyebrow="WHAT HAPPENED"
        title="The numbers, month by month."
      >
        <div className="case-results-charts">
          <CaseResultChart
            label="Monthly leads"
            values={[8, 12, 22, 38, 56, 78, 95, 107]}
            tickFormat="number"
            accentValue="+1,240% growth"
          />
          <CaseResultChart
            label="Atlanta priority query ranking"
            values={[28, 22, 17, 12, 7, 4, 2, 1]}
            tickFormat="rank"
            accentValue="#28 → #1"
          />
          <CaseResultChart
            label="Review count (Google + verified directories)"
            values={[14, 19, 26, 37, 52, 68, 84, 102]}
            tickFormat="number"
            accentValue="14 → 102 reviews"
          />
        </div>
      </PageSection>

      <PageSection
        eyebrow="IN THEIR WORDS"
        title="What the client said."
        titleAlignment="left"
        maxWidth="780px"
        background="tint"
      >
        <CaseQuote
          quote="Three other agencies told us ranking in Atlanta was impossible. Eight months in we're #1 with a four-week intake waitlist. The difference was discipline — hyperlocal, weekly accountability, and a strategist who picked up the phone every Monday."
          attribution="Founder, Tyler Family Law"
        />
      </PageSection>

      <CTABanner
        title="Think your market is unwinnable?"
        subtitle="Get a free audit. We’ll tell you the truth — if it’s winnable, here’s how. If it isn’t, we’ll say so."
        primaryText="Get a free audit"
        primaryHref="/audit"
        secondaryText="See another case study"
        secondaryHref="/case-studies/aws-law-firm"
      />
    </main>
  );
}
