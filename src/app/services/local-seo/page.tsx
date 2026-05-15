import type { Metadata } from "next";
import {
  Activity,
  FileText,
  MapPin,
  Star,
  Tag,
  TrendingUp,
} from "lucide-react";
import { CTABanner } from "@/components/page-sections/CTABanner";
import { FAQAccordion } from "@/components/page-sections/FAQAccordion";
import { PageHero } from "@/components/page-sections/PageHero";
import { PageSection } from "@/components/page-sections/PageSection";
import {
  ServiceCapabilitiesGrid,
  ServiceDeliverables,
  ServiceProcessSteps,
  ServiceProofReference,
} from "@/components/page-sections/ServiceLayout";

export const metadata: Metadata = {
  title: "Local SEO & Google Business Profile for Law & Medical Firms",
  description:
    "Hyperlocal SEO and GMB optimization for legal and medical practices. We get firms into the Google 3-pack in their priority metros and neighborhoods.",
};

const ICON_PROPS = { size: 18, strokeWidth: 1.8, "aria-hidden": true } as const;
const CAPABILITIES = [
  {
    icon: <MapPin {...ICON_PROPS} />,
    title: "GMB optimization",
    desc: "Category targeting, services taxonomy, attributes, posts, and profile completeness at scale.",
  },
  {
    icon: <FileText {...ICON_PROPS} />,
    title: "Citation building & cleanup",
    desc: "NAP consistency across legal/medical directories and authoritative local sources.",
  },
  {
    icon: <Star {...ICON_PROPS} />,
    title: "Review velocity",
    desc: "Systematic review acquisition that compounds your local pack ranking signal monthly.",
  },
  {
    icon: <TrendingUp {...ICON_PROPS} />,
    title: "Hyperlocal content",
    desc: "Neighborhood-level practice pages that win long-tail local intent queries.",
  },
  {
    icon: <Tag {...ICON_PROPS} />,
    title: "Schema markup",
    desc: "LocalBusiness, LegalService, MedicalBusiness schema tuned for your specific practice.",
  },
  {
    icon: <Activity {...ICON_PROPS} />,
    title: "Local pack tracking",
    desc: "Neighborhood-grid rank tracking so we see where you win and where we need more work.",
  },
];

const PROCESS = [
  {
    title: "Audit",
    desc: "Where you rank by metro and neighborhood today, and the specific gaps holding back the 3-pack.",
  },
  {
    title: "Strategy",
    desc: "Priority neighborhoods, target query clusters, and the GMB + citation + content plan for each.",
  },
  {
    title: "Execution",
    desc: "GMB optimization, citation work, review systems, and content shipped weekly with reporting.",
  },
  {
    title: "Monitoring",
    desc: "Neighborhood grid tracking + competitor watch + weekly review with your account team.",
  },
];

const FAQ = [
  {
    question: "What’s the difference between local SEO and regular SEO?",
    answer:
      "Local SEO targets intent that includes location — “probate lawyer tampa,” “dermatologist near me.” The signals are different: GMB completeness, review velocity, citation consistency, proximity, and category targeting matter more than backlinks alone.",
  },
  {
    question: "How long until I’m in the 3-pack?",
    answer:
      "First movement: 30–60 days. Consistent top-3 in priority neighborhoods: 90–120 days. Defensible position-one against active competitors: 6+ months. Pace depends on your starting position and the competitive landscape in your metro.",
  },
  {
    question: "Do you handle reviews for us?",
    answer:
      "We build the system: automated requests, response templates, escalation playbook, and reporting. We don’t write fake reviews, ever. We have audit trails to prove it.",
  },
  {
    question: "What about competitors gaming the 3-pack?",
    answer:
      "We document and report it. If a competitor is using prohibited tactics (keyword-stuffed business names, fake reviews, virtual offices), we file with Google on your behalf. We win clean, but we don’t lose to dirty.",
  },
  {
    question: "Will this work in a saturated metro?",
    answer:
      "Usually yes — but we’ll tell you upfront if the math doesn’t look winnable. We’ve turned down engagements in markets where the incumbent moat was too deep to justify the spend. We’d rather lose a deal than lose your retainer to a bad fit.",
  },
];

export default function LocalSeoPage() {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Local SEO & GMB Dominance",
    serviceType: "Local Search Engine Optimization",
    provider: { "@type": "Organization", name: "Rysen Growth" },
    areaServed: "United States",
    description:
      "Hyperlocal SEO, Google Business Profile optimization, citation building, review velocity, and local pack rank tracking for law firms and medical practices.",
  };

  return (
    <main className="service-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <PageHero
        eyebrow="Service — local SEO"
        title={
          <>
            Own your metro.{" "}
            <span className="accent-italic">Period.</span>
          </>
        }
        subtitle="Eighty percent of legal and medical clients search locally. If you're not in the 3-pack, you don't exist. We make sure you do."
      />

      <PageSection
        eyebrow="The problem"
        title={
          <>
            Local pack invisibility isn’t a{" "}
            <span className="accent-italic">ranking problem</span> — it’s a
            revenue problem.
          </>
        }
        titleAlignment="left"
        maxWidth="780px"
      >
        <div className="service-problem">
          <p>
            For most legal and medical queries, eighty percent of intent is local.
            Probate lawyer Tampa. Dermatologist Miami. Family law attorney
            Atlanta. The user wants a provider near them and they’re going
            to call one of the top three results — usually the first.
          </p>
          <p>
            If you’re on the second page of the local pack, you’re
            invisible. If you’re on the second page of organic, you’re
            even more invisible. Most firms compete here on instinct: their
            paralegal updated GMB once in 2021, they have eighteen four-star
            reviews, and they hope.
          </p>
          <p>
            We don’t hope. We engineer position-one across priority
            neighborhoods with systematic GMB optimization, citation work, review
            velocity, and hyperlocal content — and we track it every week.
          </p>
        </div>
      </PageSection>

      <PageSection
        eyebrow="What we do"
        title="Six capabilities, one outcome."
        background="tint"
      >
        <ServiceCapabilitiesGrid capabilities={CAPABILITIES} />
      </PageSection>

      <PageSection eyebrow="How we do it" title="Four phases. Weekly cadence.">
        <ServiceProcessSteps steps={PROCESS} />
      </PageSection>

      <PageSection
        eyebrow="Proof"
        title="Real numbers from a real firm."
        titleAlignment="left"
        maxWidth="900px"
        background="tint"
      >
        <ServiceProofReference
          eyebrow="Tyler Family Law · Atlanta"
          headline="+1,240% lead growth in eight months."
          body="Tyler Family Law was told ranking in Atlanta was impossible against the national lawyer mills. Eight months later, they’re ranked #1 for the priority divorce queries in Atlanta and operating a four-week intake waitlist."
          href="/case-studies/tyler-family-law"
        />
      </PageSection>

      <PageSection
        eyebrow="Deliverables"
        title="What you get every month."
        titleAlignment="left"
        maxWidth="780px"
      >
        <ServiceDeliverables
          items={[
            "Monthly GMB audit & optimization report",
            "Citation tracker across all relevant directories",
            "Review monitoring dashboard with response support",
            "Neighborhood-grid rank tracking (priority neighborhoods)",
            "Weekly competitor watch + monthly strategy review",
          ]}
        />
      </PageSection>

      <PageSection
        eyebrow="Frequently asked"
        title="Common questions."
        maxWidth="780px"
        background="tint"
      >
        <FAQAccordion items={FAQ} />
      </PageSection>

      <CTABanner
        title="Where do you actually rank?"
        subtitle="A free audit gives you neighborhood-level visibility across every priority metro you serve."
        primaryText="Get a free audit"
        primaryHref="/audit"
        secondaryText="See all services"
        secondaryHref="/services"
      />
    </main>
  );
}
