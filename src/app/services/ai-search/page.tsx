import type { Metadata } from "next";
import {
  Activity,
  BookOpen,
  Database,
  FileSearch,
  Globe,
  Sparkles,
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
  title: "AI Search Optimization for Law Firms & Medical Practices",
  description:
    "Get cited by ChatGPT, Perplexity, Claude, and Google AI Overviews. Rysen optimizes content, authority, and entity signals so AI surfaces recommend your firm by name.",
};

const ICON_PROPS = { size: 18, strokeWidth: 1.8, "aria-hidden": true } as const;
const CAPABILITIES = [
  {
    icon: <Database {...ICON_PROPS} />,
    title: "Entity SEO & schema",
    desc: "Structured data and entity definitions so AI models understand who you are and what you do.",
  },
  {
    icon: <BookOpen {...ICON_PROPS} />,
    title: "LLM-ready content",
    desc: "Long-form content engineered for consumption by language models, not just human readers.",
  },
  {
    icon: <Globe {...ICON_PROPS} />,
    title: "Citation acquisition",
    desc: "Authority placements on the sites and directories AI search engines actually trust.",
  },
  {
    icon: <FileSearch {...ICON_PROPS} />,
    title: "Topical authority",
    desc: "Comprehensive coverage of your practice area so AI surfaces see you as the definitive source.",
  },
  {
    icon: <Sparkles {...ICON_PROPS} />,
    title: "Structured data optimization",
    desc: "Schema.org markup, knowledge graph signals, and entity-level optimization across your site.",
  },
  {
    icon: <Activity {...ICON_PROPS} />,
    title: "Live citation monitoring",
    desc: "Weekly tracking of where you are (and aren't) being cited across major AI surfaces.",
  },
];

const PROCESS = [
  {
    title: "Audit",
    desc: "Where are you cited today? Where aren’t you? What signals are missing?",
  },
  {
    title: "Strategy",
    desc: "Which AI surfaces matter most for your practice area and which queries we’ll prioritize.",
  },
  {
    title: "Execution",
    desc: "Content, authority placements, and technical work shipped weekly.",
  },
  {
    title: "Monitoring",
    desc: "Weekly citation tracking, monthly review, quarterly strategy refresh.",
  },
];

const FAQ = [
  {
    question: "How is AI search different from regular SEO?",
    answer:
      "Traditional SEO optimizes for ranked search results, blue links. AI search optimizes for being the entity an AI model cites or recommends inside a generated answer. The signals overlap but the work is different. Entity data, structured content, and authority placements matter more than backlink count.",
  },
  {
    question:
      "Which AI surfaces matter most for law firms and medical practices?",
    answer:
      "Today: ChatGPT, Perplexity, Google AI Overviews, and Claude when users ask consumer questions. We monitor all four, with Google AI Overviews being the highest-volume surface for most legal/medical queries.",
  },
  {
    question: "How long until I see citations?",
    answer:
      "Initial entity recognition: 30-60 days. Consistent citations in priority queries: 90-120 days. Compound authority that holds against competitor moves: 6+ months.",
  },
  {
    question: "Can you guarantee I’ll be cited?",
    answer:
      "No. Anyone who guarantees an AI citation is lying about how these systems work. We can show you, with data, why we believe we can move you into citation range, and we report progress weekly.",
  },
  {
    question: "Do you optimize for Bing Chat and other AI engines?",
    answer:
      "Yes. We monitor Bing Chat, You.com, Brave Summarizer, and any AI search engine relevant to your practice area. The fundamentals overlap, so the same work generally lifts visibility across multiple surfaces.",
  },
];

export default function AiSearchPage() {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "AI Search Optimization",
    serviceType: "Search Engine Optimization",
    provider: { "@type": "Organization", name: "Rysen Growth" },
    areaServed: "United States",
    description:
      "Optimization of content, authority, and entity signals so ChatGPT, Perplexity, Claude, and Google AI Overviews cite a firm by name in relevant queries.",
  };

  return (
    <main className="service-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <PageHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "AI search" },
        ]}
        eyebrow="Service, AI search"
        title={
          <>
            When AI answers a question, your firm is{" "}
            <span className="accent-italic">the answer.</span>
          </>
        }
        subtitle="We optimize your firm's content, authority, and entity signals so ChatGPT, Perplexity, Claude, and Google AI Overviews cite your firm by name."
      />

      <PageSection
        eyebrow="The problem"
        title={
          <>
            Your future clients{" "}
            <span className="accent-italic">aren’t just Googling</span>{" "}
            anymore.
          </>
        }
        titleAlignment="left"
        maxWidth="780px"
      >
        <div className="service-problem">
          <p>
            Roughly a third of consumer queries that used to start at Google now
            start at ChatGPT, Perplexity, or an AI overview. For legal and medical
            queries that share is climbing fast, users want a synthesized answer,
            not ten blue links. They’re asking AI which firm to call.
          </p>
          <p>
            Most firms aren’t in the answer. Not because they’re bad,
            but because the entity signals AI models use to recommend providers
            don’t exist for them yet. They have a website. They don’t
            have a defensible AI footprint.
          </p>
          <p>
            <strong>
              If you’re not in the AI answer, you don’t exist.
            </strong>{" "}
            That’s the gap we close.
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
          eyebrow="AWS Law Firm · Tampa"
          headline="52% AI citation rate across priority probate queries."
          body="Eight months into our engagement, AWS Law Firm is cited by ChatGPT in over half of priority probate queries in their Tampa market, and ranks #1 organically for the same terms."
          href="/case-studies/aws-law-firm"
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
            "Weekly citation report, every priority surface, tracked",
            "Monthly strategy review with the team running your account",
            "Quarterly authority roadmap with publication targets",
            "Real-time monitoring dashboard you can check anytime",
            "Direct Slack or email line to your senior strategist",
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
        title="Want to know where you stand?"
        subtitle="A free audit shows you exactly which AI surfaces cite you, which don’t, and what it would take to move the needle."
        primaryText="Get a free audit"
        primaryHref="/audit"
        secondaryText="See all services"
        secondaryHref="/services"
      />
    </main>
  );
}
