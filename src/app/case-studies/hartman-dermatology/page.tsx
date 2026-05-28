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
import { MoreWork } from "@/components/sections/MoreWork";
import { TrackPageView } from "@/components/analytics/TrackPageView";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

export const metadata: Metadata = {
  title: "Hartman Dermatology Case Study, Miami Cosmetic Dermatology",
  description:
    "How Rysen took Hartman Dermatology from page two of Google to #1 across Miami cosmetic dermatology queries, with 38% AI citation rate.",
};

const PHASES = [
  {
    window: "Month 1",
    title: "Schema and entity rebuild",
    desc: "Medical practice entity work first, schema, structured data, and physician disambiguation across both Miami locations.",
    tactics: [
      "MedicalBusiness + Physician schema across both locations",
      "Entity disambiguation for the practice + each provider",
      "Practice area URL restructure for cosmetic dermatology",
    ],
  },
  {
    window: "Month 2-3",
    title: "Treatment-specific authority content",
    desc: "Eighteen long-form authority articles in 90 days, every priority cosmetic treatment got a real publication.",
    tactics: [
      "Botox, fillers, laser, melanoma screening, full coverage",
      "HIPAA-compliant before/after content strategy",
      "Internal linking system across treatment subtopics",
    ],
  },
  {
    window: "Month 4",
    title: "GMB + review velocity",
    desc: "Coordinated GMB optimization across both locations plus a systematic review acquisition program.",
    tactics: [
      "GMB rebuild on both locations with services taxonomy",
      "Patient review request automation (HIPAA-aware)",
      "Before/after gallery integration on key pages",
    ],
  },
  {
    window: "Month 5-6",
    title: "AI search positioning",
    desc: "Entity signals tuned for AI search consumption, the firm started showing up as a cited source in cosmetic dermatology queries.",
    tactics: [
      "Knowledge graph signal strengthening",
      "Authority placements on Healthgrades, Vitals, RealSelf",
      "AI surface monitoring across four engines",
    ],
  },
];

const TACTICS = [
  {
    title: "Medical schema markup",
    desc: "Full MedicalBusiness, Physician, and MedicalProcedure schema across both locations with provider entity references.",
  },
  {
    title: "Treatment authority content",
    desc: "Eighteen long-form articles in 90 days covering Botox, fillers, laser treatments, melanoma screening, and adjacent topics.",
  },
  {
    title: "HIPAA-compliant before/after",
    desc: "Before/after content strategy that drives conversion without exposing PHI, a hard balance most agencies skip entirely.",
  },
  {
    title: "Review velocity campaign",
    desc: "Automated, two-location review request flow with response handling, monthly velocity rose from 12-15 to 30+.",
  },
  {
    title: "Medical authority citations",
    desc: "Authoritative placements on Healthgrades, Vitals, RealSelf, and Zocdoc, the directories AI surfaces actually trust.",
  },
  {
    title: "AI citation building",
    desc: "Entity work and content engineering specifically aimed at ChatGPT and Perplexity citation in Miami dermatology queries.",
  },
];

export default function HartmanCaseStudyPage() {
  const caseJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Hartman Dermatology, Miami cosmetic dermatology, +78% consultations, 38% AI citation rate",
    author: { "@type": "Organization", name: "Rysen Growth" },
    publisher: { "@type": "Organization", name: "Rysen Growth" },
  };

  return (
    <main className="case-page">
      <TrackPageView event="case_study_view" props={{ slug: "hartman-dermatology" }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(caseJsonLd) }}
      />

      <div className="case-page__breadcrumbs">
        <Breadcrumbs
          trail={[
            { name: "Home", href: "/" },
            { name: "Work", href: "/work" },
            { name: "Hartman Dermatology" },
          ]}
        />
      </div>

      <section className="case-page-hero">
        <div className="page-hero-ambient" aria-hidden="true">
          <span className="page-hero-blob page-hero-blob-1" />
          <span className="page-hero-blob page-hero-blob-2" />
        </div>
        <div className="case-page-hero-inner">
          <div className="case-page-hero-badge">
            Medical · Dermatology · Miami, FL
          </div>
          <div className="page-hero-eyebrow">Case study</div>
          <h1 className="case-page-hero-title">
            Hartman Dermatology: Miami’s go-to for{" "}
            <span className="accent-italic">cosmetic consultations.</span>
          </h1>
          <CaseStats
            stats={[
              { value: "+78%", label: "Cosmetic consultations" },
              { value: "#1", label: "Ranked Miami cosmetic queries" },
              { value: "142%", label: "Review velocity increase" },
            ]}
          />
        </div>
      </section>

      <PageSection
        eyebrow="Who they are"
        title="A clinically excellent Miami dermatology practice."
        titleAlignment="left"
        maxWidth="780px"
      >
        <p className="case-prose">
          Hartman Dermatology is a Miami practice founded in 2014 by Dr. Elena
          Hartman, with a strong clinical reputation across cosmetic dermatology
          and skin cancer screening. Eight providers, two locations across
          Miami-Dade. They came to Rysen in early 2024 wanting to dominate
          cosmetic consultation rankings in their market and stop losing
          patients to national chains that were winning on visibility despite
          weaker clinical credentials.
        </p>
      </PageSection>

      <PageSection
        eyebrow="Where they were"
        title="Clinically excellent, online invisible."
        titleAlignment="left"
        maxWidth="780px"
        background="tint"
      >
        <div className="case-prose">
          <p>
            Despite the credentials and patient outcomes, Hartman ranked on
            page two for “Botox Miami,” “cosmetic
            dermatologist Miami,” and “laser treatments Miami.”
            Zero meaningful AI search visibility, ChatGPT and Perplexity
            defaulted to national chains.
          </p>
          <p>
            Review velocity was slow at 12-15 per month. The practice was still
            referral-heavy, but referral volume had plateaued and competitors
            with weaker clinical credentials were eating market share through
            paid acquisition. We told them what we’d do, what it would
            take, and what month-by-month progress would look like. They
            signed.
          </p>
        </div>
      </PageSection>

      <PageSection
        eyebrow="What we did"
        title="Four phases. Six months. Medical-grade execution."
      >
        <CasePhases phases={PHASES} />
      </PageSection>

      <PageSection
        eyebrow="How we executed"
        title="The six tactics, in detail."
        background="tint"
      >
        <CaseTacticsGrid tactics={TACTICS} />
      </PageSection>

      <PageSection
        eyebrow="What happened"
        title="The numbers, month by month."
      >
        <div className="case-results-charts">
          <CaseResultChart
            label="Cosmetic consultations per month"
            values={[34, 38, 44, 51, 58, 60]}
            tickFormat="number"
            accentValue="+78% over 6 months"
          />
          <CaseResultChart
            label="Cosmetic dermatologist Miami ranking"
            values={[14, 11, 8, 5, 3, 1]}
            tickFormat="rank"
            accentValue="from #14 → #1"
          />
          <CaseResultChart
            label="AI citation rate in Miami dermatology queries"
            values={[3, 8, 15, 24, 32, 38]}
            tickFormat="percent"
            accentValue="38% citation rate"
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
          quote="Rysen rebuilt our online presence with the precision we use in the operating room. Every tactic was specific, every result was measured."
          attribution="Dr. Elena Hartman, Founder"
        />
      </PageSection>

      <CaseStudyNav
        previous={{ href: "/case-studies/coleman-co", label: "Coleman & Co." }}
        next={{ href: "/case-studies/ridge-dental", label: "Ridge Dental" }}
      />

      <MoreWork currentSlug="hartman-dermatology" />

      <CTABanner
        title="Want results like these?"
        subtitle="Get a free audit of your practice’s visibility, same methodology, your numbers."
        primaryText="Get a free audit"
        primaryHref="/audit"
        secondaryText="See another case study"
        secondaryHref="/case-studies/coleman-co"
      />
    </main>
  );
}
