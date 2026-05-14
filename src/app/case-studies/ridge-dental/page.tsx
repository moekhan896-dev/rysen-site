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
  title: "Ridge Dental Case Study — Chicago Multi-Location, +186% Calls",
  description:
    "How Rysen won the Chicago Maps Pack across 5 neighborhoods for Ridge Dental — coordinated multi-location strategy, +186% new patient calls in 4 months.",
};

const PHASES = [
  {
    window: "MONTH 1",
    title: "Network-level GMB strategy",
    desc: "We treated all 5 locations as a coordinated system, not 5 independent profiles competing in parallel.",
    tactics: [
      "Master GMB rebuild with consistent category/service taxonomy",
      "Per-location service descriptions tuned to neighborhood intent",
      "Multi-location schema markup with location entity references",
    ],
  },
  {
    window: "MONTH 2",
    title: "Neighborhood-specific content",
    desc: "Every location got real, distinct content — not duplicate pages with neighborhood names swapped.",
    tactics: [
      "Lincoln Park, Wicker Park, Lakeview, West Loop, Logan Square pages",
      "Local hooks per neighborhood (neighborhood-specific FAQ + content)",
      "Internal linking system across the location network",
    ],
  },
  {
    window: "MONTH 3",
    title: "Review velocity coordination",
    desc: "Patient review request flow timed across all 5 locations — built the network into the local pack as a coordinated push.",
    tactics: [
      "Automated review request system, location-aware",
      "Response handling protocol across the network",
      "Reputation defense playbook for negative review windows",
    ],
  },
  {
    window: "MONTH 4",
    title: "Hyperlocal citation building",
    desc: "Neighborhood-level citation work — local chambers, community sites, and verified directory placements per location.",
    tactics: [
      "Per-neighborhood chamber and community placements",
      "Verified medical directory submissions per location",
      "Local link earning per neighborhood",
    ],
  },
];

const TACTICS = [
  {
    title: "Coordinated GMB optimization",
    desc: "All 5 GBPs rebuilt as a network with shared taxonomy, distinct positioning, and synchronized posting cadence.",
  },
  {
    title: "Neighborhood-specific content",
    desc: "Lincoln Park, Wicker Park, Lakeview, West Loop, Logan Square — each location page written for residents of that neighborhood.",
  },
  {
    title: "Review velocity campaign",
    desc: "Two-stage automated review request flow tied to appointment completion, with neighborhood-aware response templates.",
  },
  {
    title: "Hyperlocal directory submissions",
    desc: "Per-neighborhood chamber, community directory, and verified medical directory placements.",
  },
  {
    title: "Multi-location schema",
    desc: "Schema markup that defined the dental network and each location entity with proper reference relationships.",
  },
  {
    title: "Local link building per neighborhood",
    desc: "Local link earning tied to each neighborhood — community sites, chamber profiles, and neighborhood-specific authority placements.",
  },
];

export default function RidgeCaseStudyPage() {
  const caseJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Ridge Dental — Chicago multi-location, +186% new patient calls, #1 in Maps Pack across 5 neighborhoods",
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
            MEDICAL · DENTAL · CHICAGO, IL
          </div>
          <div className="page-hero-eyebrow">CASE STUDY</div>
          <h1 className="case-page-hero-title">
            Ridge Dental: Dominating Chicago&rsquo;s 3-pack across{" "}
            <span className="accent-italic">5 neighborhoods.</span>
          </h1>
          <CaseStats
            stats={[
              { value: "+186%", label: "New patient phone calls" },
              { value: "#1", label: "In 5 Chicago neighborhoods" },
              { value: "4 mo", label: "From parallel competition to dominance" },
            ]}
          />
        </div>
      </section>

      <PageSection
        eyebrow="WHO THEY ARE"
        title="A multi-location Chicago dental practice."
        titleAlignment="left"
        maxWidth="780px"
      >
        <p className="case-prose">
          Ridge Dental is a 5-location dental practice across Chicago
          neighborhoods — Lincoln Park, Wicker Park, Lakeview, West Loop, and
          Logan Square — founded in 2016 by Dr. Sarah Ridge. Family dental and
          cosmetic dental focus with twelve dentists across the network. They
          engaged Rysen in mid-2024 because they wanted Maps Pack dominance per
          neighborhood, not generic Chicago rankings.
        </p>
      </PageSection>

      <PageSection
        eyebrow="WHERE THEY WERE"
        title="Five locations, five separate fights, five plateaus."
        titleAlignment="left"
        maxWidth="780px"
        background="tint"
      >
        <div className="case-prose">
          <p>
            Ridge ranked decently for &ldquo;Chicago dentist&rdquo; generically
            but was losing the neighborhood-level fights. When someone in
            Wicker Park searched &ldquo;dentist near me,&rdquo; they saw
            competitors in the 3-pack. Same problem in Lincoln Park, Lakeview,
            West Loop, and Logan Square.
          </p>
          <p>
            Each location was a separate GBP but they weren&rsquo;t optimized
            as a network — they competed independently against well-established
            neighborhood incumbents and against each other. The fix wasn&rsquo;t
            harder generic ranking work; it was treating the 5 locations as a
            coordinated system.
          </p>
        </div>
      </PageSection>

      <PageSection
        eyebrow="WHAT WE DID"
        title="Four phases. Four months. Five wins."
      >
        <CasePhases phases={PHASES} />
      </PageSection>

      <PageSection
        eyebrow="HOW WE EXECUTED"
        title="The six tactics, run as a network."
        background="tint"
      >
        <CaseTacticsGrid tactics={TACTICS} />
      </PageSection>

      <PageSection
        eyebrow="WHAT HAPPENED"
        title="The numbers, location by location."
      >
        <div className="case-results-charts">
          <CaseResultChart
            label="New patient phone calls per month (network total)"
            values={[88, 112, 148, 196, 252]}
            tickFormat="number"
            accentValue="+186% over 4 months"
          />
          <CaseResultChart
            label="Locations ranked #1 in Maps Pack"
            values={[0, 1, 3, 4, 5]}
            tickFormat="number"
            accentValue="0 → 5 of 5"
          />
          <CaseResultChart
            label="Network-wide average review (★)"
            values={[46, 47, 48, 49, 49]}
            tickFormat="number"
            accentValue="4.6 → 4.9"
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
          quote="We thought 'Chicago dentist' was the prize. Rysen showed us 5 prizes — one per neighborhood — and won them all."
          attribution="Dr. Sarah Ridge, Founder"
        />
      </PageSection>

      <CTABanner
        title="Want results like these?"
        subtitle="Get a free audit of your practice&rsquo;s visibility — same methodology, your numbers."
        primaryText="Get a free audit"
        primaryHref="/audit"
        secondaryText="See another case study"
        secondaryHref="/case-studies/hartman-dermatology"
      />
    </main>
  );
}
