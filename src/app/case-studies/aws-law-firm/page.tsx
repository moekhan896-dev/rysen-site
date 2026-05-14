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
  title: "AWS Law Firm Case Study — Tampa Probate, +240% Consultations",
  description:
    "How Rysen took AWS Law Firm from page two of Google to position one across every priority Tampa probate query — with 52% AI citation rate.",
};

const PHASES = [
  {
    window: "MONTH 1–2",
    title: "Foundation rebuild",
    desc: "Audit, schema, technical SEO, and practice-area page architecture before any content shipped.",
    tactics: [
      "Schema markup overhaul (LegalService, Attorney, FAQPage)",
      "Practice area URL restructure",
      "Site speed and Core Web Vitals remediation",
    ],
  },
  {
    window: "MONTH 3–4",
    title: "Authority construction",
    desc: "Long-form probate authority content, citation acquisition, GMB rebuild, and review velocity systems.",
    tactics: [
      "12 long-form probate authority articles published",
      "Citation cleanup across legal directories",
      "GMB category and services taxonomy rebuild",
      "Automated review request system",
    ],
  },
  {
    window: "MONTH 5–6",
    title: "AI search optimization",
    desc: "Entity strengthening and LLM-ready content engineered for AI citation across ChatGPT, Perplexity, and Google AIO.",
    tactics: [
      "Entity disambiguation and knowledge graph signals",
      "Topical authority on Tampa probate subtopics",
      "AI surface monitoring set up across four engines",
    ],
  },
  {
    window: "MONTH 7+",
    title: "Compound growth",
    desc: "Rankings, reviews, and citations now compounding. Engagement focus shifts to defense and adjacent practice areas.",
    tactics: [
      "Position-one defense against competitor moves",
      "Expansion into estate planning + trust queries",
      "Quarterly authority refresh on top-performing articles",
    ],
  },
];

const TACTICS = [
  {
    title: "Schema markup overhaul",
    desc: "Full LegalService schema with attorneys, practice areas, jurisdictions, and review aggregations.",
  },
  {
    title: "Practice area page rebuild",
    desc: "Every probate sub-area got its own intent-aligned page with consistent conversion patterns.",
  },
  {
    title: "Citation strategy",
    desc: "Authoritative placements across legal directories and Florida-specific bar association resources.",
  },
  {
    title: "Long-form authority content",
    desc: "12 deep articles covering Florida probate law, timelines, and process — earning featured snippets.",
  },
  {
    title: "GMB optimization & review velocity",
    desc: "Profile rebuild, services taxonomy, and a systematic review acquisition program.",
  },
  {
    title: "AI search positioning",
    desc: "Entity signals, knowledge graph work, and content engineered for LLM consumption.",
  },
];

export default function AwsCaseStudyPage() {
  const caseJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "AWS Law Firm — Tampa probate, +240% consultations, 52% AI citation rate",
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
            LEGAL · PROBATE · TAMPA, FL
          </div>
          <div className="page-hero-eyebrow">CASE STUDY</div>
          <h1 className="case-page-hero-title">
            AWS Law Firm: Tampa&rsquo;s leading{" "}
            <span className="accent-italic">probate practice.</span>
          </h1>
          <CaseStats
            stats={[
              { value: "#1", label: "Ranked across priority queries" },
              { value: "+240%", label: "Consultations vs. baseline" },
              { value: "52%", label: "AI citation rate" },
            ]}
          />
        </div>
      </section>

      <PageSection
        eyebrow="WHO THEY ARE"
        title="A respected Tampa probate firm, invisible online."
        titleAlignment="left"
        maxWidth="780px"
      >
        <p className="case-prose">
          AWS Law Firm is a Tampa-based probate practice with two decades of
          trial experience and a strong referral base in the local bar. They had
          built their reputation case by case, and they had the results to back
          it. What they didn&rsquo;t have was a meaningful online presence.
          Their website was a brochure. Their practice area pages were thin.
          Their GMB hadn&rsquo;t been touched since 2021. And in a market where
          eighty percent of probate intent is local search, that was bleeding
          cases every week.
        </p>
      </PageSection>

      <PageSection
        eyebrow="WHERE THEY WERE"
        title="The starting position."
        titleAlignment="left"
        maxWidth="780px"
        background="tint"
      >
        <div className="case-prose">
          <p>
            Baseline audit showed they ranked on page two of Google for almost
            every priority Tampa probate query. They had zero meaningful AI
            citations across ChatGPT or Perplexity. Their GMB profile was sparse,
            missing services taxonomy, and their review count put them sixth in
            their immediate map area.
          </p>
          <p>
            Their schema markup was incomplete — no LegalService tagging, no
            attorney entity definitions, no FAQ structured data. Their practice
            area pages averaged 400 words apiece. The competitive set, mostly
            national lawyer-mill franchises and a few local incumbents, had
            structurally better foundations.
          </p>
          <p>
            We told them what we&rsquo;d do, what it would take, and what
            month-by-month progress would actually look like. They signed.
          </p>
        </div>
      </PageSection>

      <PageSection
        eyebrow="WHAT WE DID"
        title="Four phases. Eight months. One playbook."
      >
        <CasePhases phases={PHASES} />
      </PageSection>

      <PageSection
        eyebrow="HOW WE EXECUTED"
        title="The six tactics, in detail."
        background="tint"
      >
        <CaseTacticsGrid tactics={TACTICS} />
      </PageSection>

      <PageSection eyebrow="WHAT HAPPENED" title="The numbers, month by month.">
        <div className="case-results-charts">
          <CaseResultChart
            label="Rankings (position for priority probate query)"
            values={[19, 16, 12, 9, 6, 4, 2, 1]}
            tickFormat="rank"
            accentValue="from #19 → #1"
          />
          <CaseResultChart
            label="Consultations per month"
            values={[12, 14, 18, 22, 28, 34, 39, 41]}
            tickFormat="number"
            accentValue="+240% vs. baseline"
          />
          <CaseResultChart
            label="AI citation rate across priority queries"
            values={[2, 5, 11, 18, 27, 36, 44, 52]}
            tickFormat="percent"
            accentValue="52% citation rate"
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
          quote="We went from invisible to inevitable. Rysen doesn't just rank you — they make you the answer. Eight months of weekly reporting, no surprises, and we're now the firm people get told to call."
          attribution="Managing Partner, AWS Law Firm"
        />
      </PageSection>

      <CTABanner
        title="Want results like these?"
        subtitle="Get a free audit of your firm&rsquo;s visibility — same methodology, your numbers."
        primaryText="Get a free audit"
        primaryHref="/audit"
        secondaryText="See another case study"
        secondaryHref="/case-studies/tyler-family-law"
      />
    </main>
  );
}
