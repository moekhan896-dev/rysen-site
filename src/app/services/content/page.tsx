import type { Metadata } from "next";
import {
  BookOpen,
  Globe,
  Layout,
  Mail,
  MessageSquare,
  Star,
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
  title: "Content, Reputation & Web Design for Law & Medical Practices",
  description:
    "Full-stack growth services: long-form authority content, newsletter strategy, review management, web design, and off-page SEO, run from one Detroit team.",
};

const ICON_PROPS = { size: 18, strokeWidth: 1.8, "aria-hidden": true } as const;
const CAPABILITIES = [
  {
    icon: <BookOpen {...ICON_PROPS} />,
    title: "Long-form authority content",
    desc: "In-depth practice area content engineered to rank, get cited by AI, and convert.",
  },
  {
    icon: <Mail {...ICON_PROPS} />,
    title: "Newsletter strategy",
    desc: "Owned-audience programs that nurture prospects and re-engage past clients monthly.",
  },
  {
    icon: <Star {...ICON_PROPS} />,
    title: "Review management",
    desc: "Systematic review acquisition, response, and reputation defense across every relevant surface.",
  },
  {
    icon: <Layout {...ICON_PROPS} />,
    title: "Web design & conversion",
    desc: "Conversion-optimized practice area pages, lead forms, and consultation flows.",
  },
  {
    icon: <MessageSquare {...ICON_PROPS} />,
    title: "Email automation",
    desc: "Lifecycle email, intake, nurture, win-back, tied to your CRM and reporting layer.",
  },
  {
    icon: <Globe {...ICON_PROPS} />,
    title: "Off-page SEO",
    desc: "Authority placements, digital PR, and link earning at the sites AI and Google actually trust.",
  },
];

const PROCESS = [
  {
    title: "Audit",
    desc: "What content exists today, what’s missing, what reputation gaps need closing, what conversion paths leak.",
  },
  {
    title: "Strategy",
    desc: "Editorial calendar, review acquisition plan, web priorities, and email cadence, all sequenced.",
  },
  {
    title: "Execution",
    desc: "Content ships weekly, review systems run continuously, web work and email campaigns roll out monthly.",
  },
  {
    title: "Monitoring",
    desc: "Authority signal tracking, review velocity dashboards, conversion analytics, and weekly review with you.",
  },
];

const FAQ = [
  {
    question: "Do you write the content yourselves or use freelancers?",
    answer:
      "Our senior content strategist runs the editorial direction; we use a small bench of vetted writers (most former agency or in-house) for production, all overseen and edited in-house. We don’t use generic content mills.",
  },
  {
    question: "How long are your articles?",
    answer:
      "Usually 1,500-3,500 words for authority content. Length follows the topic. We don’t inflate articles to hit word counts, long-form has to earn the length.",
  },
  {
    question: "Will you write under our attorneys’ bylines?",
    answer:
      "Yes, with their review and approval. Your attorneys or physicians remain the authoritative voice; we handle the production. Most clients give us a standing review window each week.",
  },
  {
    question: "Do you do web design from scratch?",
    answer:
      "We do conversion-focused redesigns and high-priority page rebuilds. For full website overhauls we partner with a small set of design studios we trust. Either way, the conversion strategy stays with us.",
  },
  {
    question: "What does this look like as part of a bigger engagement?",
    answer:
      "Most clients combine this service with Local SEO or AI Search. The content fuels both. The web work fuels conversion. The reviews fuel local pack ranking. The newsletter compounds owned audience. It’s one integrated program with one team.",
  },
];

export default function ContentPage() {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Content, Reputation & Web Design",
    serviceType: "Content Marketing",
    provider: { "@type": "Organization", name: "Rysen Growth" },
    areaServed: "United States",
    description:
      "Long-form authority content, newsletter strategy, review management, conversion-focused web design, and off-page SEO for law firms and medical practices.",
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
          { label: "Content & reputation" },
        ]}
        eyebrow="Service, content & reputation"
        title={
          <>
            Full-stack growth, not{" "}
            <span className="accent-italic">piecemeal</span> services.
          </>
        }
        subtitle="Most agencies sell one tactic at a time. Firms need an integrated approach: authority content, reputation, newsletters, web, email, all run from one team."
      />

      <PageSection
        eyebrow="The problem"
        title={
          <>
            Single-tactic engagements{" "}
            <span className="accent-italic">don’t compound.</span>
          </>
        }
        titleAlignment="left"
        maxWidth="780px"
      >
        <div className="service-problem">
          <p>
            Most agencies want to sell you one service. Just content. Or just
            reviews. Or just web. It’s easier to sell, easier to staff,
            easier to bill. But it doesn’t work, because the levers
            you’re trying to move all depend on each other.
          </p>
          <p>
            Content alone doesn’t rank without authority. Authority
            doesn’t build without content. Reviews don’t convert
            without a website that captures the lead. The website doesn’t
            convert without trust signals. Email doesn’t nurture if the
            audience isn’t being built.
          </p>
          <p>
            We run all of it. From one Detroit team. Because that’s the
            only way it actually works.
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
        title="Across the portfolio."
        titleAlignment="left"
        maxWidth="900px"
        background="tint"
      >
        <ServiceProofReference
          eyebrow="Across 30+ engagements"
          headline="The content + reputation + conversion stack runs under every engagement we sell."
          body="From AWS Law Firm’s probate authority library to Tyler Family Law’s Atlanta-neighborhood content system, the integrated approach is what makes every Rysen engagement compound. See it in action across our case studies."
          href="/case-studies"
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
            "Quarterly editorial calendar with publication cadence",
            "Long-form authority articles shipped to your byline",
            "Review velocity dashboard + response handling",
            "Monthly newsletter strategy + production support",
            "Web design priorities + conversion page rebuilds",
            "Quarterly authority report covering off-page signal growth",
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
        title="Want the full stack reviewed?"
        subtitle="A free audit covers content gaps, reputation status, conversion leaks, and authority signal, all in one PDF."
        primaryText="Get a free audit"
        primaryHref="/audit"
        secondaryText="See all services"
        secondaryHref="/services"
      />
    </main>
  );
}
