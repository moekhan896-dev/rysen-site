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
import { CaseStudyNav } from "@/components/primitives/CaseStudyNav";

export const metadata: Metadata = {
  title: "Coleman & Co. Case Study — LA Estate Attorney, +320% Qualified Leads",
  description:
    "How Rysen took Coleman & Co. from referral-dependent boutique to Los Angeles’s #1 ranked estate attorney across HNW estate planning queries.",
};

const PHASES = [
  {
    window: "Month 1–2",
    title: "Hyperlocal LA neighborhood targeting",
    desc: "Forget “Los Angeles” in general — we built the strategy around Beverly Hills, Pacific Palisades, Brentwood, and Bel Air specifically.",
    tactics: [
      "Neighborhood-level location pages with intent-aligned content",
      "GMB optimization tuned for HNW estate intent",
      "Schema rebuild (LegalService + Attorney + FAQ)",
    ],
  },
  {
    window: "Month 3–5",
    title: "Trust-specific and HNW authority content",
    desc: "Authority library covering trust types, estate tax strategies, and succession planning — written for HNW intent, not generic estate planning.",
    tactics: [
      "Trust type authority series (revocable, irrevocable, dynasty, etc.)",
      "Estate tax strategy long-form content",
      "Anonymized case study format for HNW prospects",
    ],
  },
  {
    window: "Month 6–7",
    title: "Strategic referral partner content",
    desc: "Reciprocal authority content with CPAs and wealth managers — turns the firm’s referral network into an indirect SEO signal.",
    tactics: [
      "Co-authored content with allied CPAs and RIAs",
      "Reciprocal citation and link strategy",
      "Legal directory optimization (Martindale, Avvo, Super Lawyers)",
    ],
  },
  {
    window: "Month 8–9",
    title: "AI search positioning",
    desc: "Entity strengthening tuned for Perplexity and Claude — the AI surfaces HNW prospects use most for legal research.",
    tactics: [
      "Knowledge graph signal work for the firm and partners",
      "Content engineered for Perplexity citation in trust queries",
      "Google AI Overview optimization for 11 priority queries",
    ],
  },
];

const TACTICS = [
  {
    title: "Neighborhood location pages",
    desc: "Beverly Hills, Pacific Palisades, Brentwood, Bel Air — purpose-built pages, not duplicate templates with town names swapped.",
  },
  {
    title: "Trust-specific authority library",
    desc: "Deep authority articles on revocable, irrevocable, dynasty, and charitable trust structures — earning featured snippets.",
  },
  {
    title: "HNW case study format",
    desc: "Anonymized HNW case studies that proved the firm’s depth without disclosing client identity or assets.",
  },
  {
    title: "CPA + wealth-manager content",
    desc: "Co-authored pieces with allied CPAs and RIAs — turning the existing referral network into a compounding SEO signal.",
  },
  {
    title: "Legal directory optimization",
    desc: "Authority placements across Martindale, Avvo, and Super Lawyers — the directories estate prospects research before calling.",
  },
  {
    title: "AI citation strategy",
    desc: "Targeted Perplexity and Claude for complex estate queries; Google AI Overviews captured 11 priority queries.",
  },
];

export default function ColemanCaseStudyPage() {
  const caseJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Coleman & Co. — Los Angeles estate attorney, +320% qualified leads, #1 ranked in 9 months",
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
            Legal · Estate · Los Angeles, CA
          </div>
          <div className="page-hero-eyebrow">Case study</div>
          <h1 className="case-page-hero-title">
            Coleman & Co.: Now Los Angeles’s{" "}
            <span className="accent-italic">#1 estate attorney.</span>
          </h1>
          <CaseStats
            stats={[
              { value: "+320%", label: "Qualified HNW leads" },
              { value: "#1", label: "Ranked LA estate queries" },
              { value: "9 mo", label: "From referral-only to inbound" },
            ]}
          />
        </div>
      </section>

      <PageSection
        eyebrow="Who they are"
        title="A boutique LA estate firm, quietly excellent."
        titleAlignment="left"
        maxWidth="780px"
      >
        <p className="case-prose">
          Coleman & Co. is a boutique estate planning and trust
          administration firm in West Los Angeles, founded by attorney Marcus
          Coleman in 2011. They specialize in high-net-worth estate planning,
          generational wealth structuring, and complex trust administration.
          Fourteen attorneys, a strong CPA and wealth-manager referral network,
          and a deep client roster. They engaged Rysen in late 2023 because
          their referral network was aging, and the partners knew organic
          visibility had to be built before retirements eroded their pipeline.
        </p>
      </PageSection>

      <PageSection
        eyebrow="Where they were"
        title="Quietly the best — and quietly invisible online."
        titleAlignment="left"
        maxWidth="780px"
        background="tint"
      >
        <div className="case-prose">
          <p>
            Despite serving HNW clients with $5M+ estates, Coleman & Co.
            was invisible compared to mega-firms. They ranked #6–8 for
            “estate attorney Los Angeles” and were buried for
            “trust attorney LA” and “estate planning Beverly
            Hills.”
          </p>
          <p>
            Practice was almost entirely referral-driven from CPAs and wealth
            managers — a network that had served them well for over a decade
            but was now plateauing. The partners knew if they didn’t
            build inbound visibility before the network turned over, the firm
            would face a slow capacity decline.
          </p>
        </div>
      </PageSection>

      <PageSection
        eyebrow="What we did"
        title="Four phases. Nine months. Built for HNW intent."
      >
        <CasePhases phases={PHASES} />
      </PageSection>

      <PageSection
        eyebrow="How we executed"
        title="The six tactics, applied to HNW estate."
        background="tint"
      >
        <CaseTacticsGrid tactics={TACTICS} />
      </PageSection>

      <PageSection
        eyebrow="What happened"
        title="The numbers, over nine months."
      >
        <div className="case-results-charts">
          <CaseResultChart
            label="Qualified HNW leads per month"
            values={[6, 9, 14, 19, 23, 26]}
            tickFormat="number"
            accentValue="+320% vs. baseline"
          />
          <CaseResultChart
            label="Estate attorney LA ranking"
            values={[8, 6, 4, 3, 2, 1]}
            tickFormat="rank"
            accentValue="#8 → #1"
          />
          <CaseResultChart
            label="% of new business from organic"
            values={[12, 22, 34, 47, 58, 67]}
            tickFormat="percent"
            accentValue="12% → 67%"
          />
        </div>
      </PageSection>

      <PageSection
        eyebrow="In their words"
        title="What the client said."
        titleAlignment="left"
        maxWidth="780px"
        background="tint"
      >
        <CaseQuote
          quote="We were quietly the best estate firm in LA. Rysen made the rest of LA know it."
          attribution="Marcus Coleman, Founding Partner"
        />
      </PageSection>

      <CaseStudyNav
        previous={{ href: "/case-studies/tyler-family-law", label: "Tyler Family Law" }}
        next={{ href: "/case-studies/hartman-dermatology", label: "Hartman Dermatology" }}
      />

      <CTABanner
        title="Want results like these?"
        subtitle="Get a free audit of your firm’s visibility — same methodology, your numbers."
        primaryText="Get a free audit"
        primaryHref="/audit"
        secondaryText="See another case study"
        secondaryHref="/case-studies/ridge-dental"
      />
    </main>
  );
}
