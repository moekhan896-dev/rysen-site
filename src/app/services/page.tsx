import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-sections/PageHero";
import { PageSection } from "@/components/page-sections/PageSection";
import { EngineArchitecture } from "@/components/illustrations/EngineArchitecture";
import { SignalTriangle } from "@/components/brand/SignalTriangle";
import { RelatedContent } from "@/components/primitives/RelatedContent";

export const metadata: Metadata = {
  title: "Services — Ten coordinated components. One engine.",
  description:
    "The Organic Growth Engine is ten coordinated services for law firms and medical practices. Each has its own playbook, team, and data dashboard. They run together.",
};

interface Component {
  n: string;
  name: string;
  oneliner: string;
  body: ReadonlyArray<string>;
  deliverables: ReadonlyArray<string>;
  caseRef?: { href: string; label: string };
  subPage?: string;
}

const COMPONENTS: ReadonlyArray<Component> = [
  {
    n: "01",
    name: "Google Local Service Ads (LSA)",
    oneliner: "Pre-vetted lead generation through Google Screened.",
    body: [
      "LSA places your firm at the top of Google search results — above paid ads, above the local pack, above organic. For local-intent queries in legal and medical, LSA placement is the single highest-converting surface available.",
      "We architect your LSA profile, run the verification through Google&apos;s background screening process, and operate the campaign as part of the coordinated engine. Not as a vendor relationship — as a component of the system.",
      "Where LSA fits: high-intent local queries (probate lawyer Tampa, dental implants Chicago). Lower fit: long-tail authority queries where LSA doesn&apos;t serve.",
    ],
    deliverables: [
      "Google Screened verification through to active LSA status",
      "Service-area + practice-area taxonomy configured for highest-intent capture",
      "Weekly LSA performance review against attribution dashboard",
      "Coordinated with GMB so the same firm wins LSA + map pack simultaneously",
    ],
    caseRef: { href: "/case-studies/aws-law-firm", label: "AWS Law Firm engagement" },
  },
  {
    n: "02",
    name: "Google Business Profile (GMB)",
    oneliner: "GMB rebuilt as a network-level asset, not a one-off listing.",
    body: [
      "Most agencies treat GMB as a checkbox. We treat it as the central conversion asset for every local-intent practice. Profile configuration, service taxonomy, photo strategy, post cadence, Q&A operations, and review velocity — all run as one coordinated system.",
      "For multi-location practices: each location optimized at the network level, not individually. Coordinated category strategy, coordinated service taxonomy, coordinated review velocity.",
      "GMB is the highest-leverage local surface. A well-operated GMB profile compounds every other component of the engine.",
    ],
    deliverables: [
      "Full GMB rebuild including categories, services, attributes, photos",
      "Weekly post cadence with location-specific content",
      "Review velocity automation (HIPAA-aware for medical)",
      "Q&A operations — pre-loaded with high-intent questions",
      "Multi-location coordination where applicable",
    ],
    caseRef: { href: "/case-studies/ridge-dental", label: "Ridge Dental engagement" },
  },
  {
    n: "03",
    name: "Website Optimization & CRO",
    oneliner: "Conversion-engineered pages tuned to legal & medical intake.",
    body: [
      "Most law firm and medical practice websites are brochures. We turn them into conversion engines. Practice-area pages restructured around buyer-intent patterns. Intake flows redesigned to surface insurance acceptance / case fit / urgency triage.",
      "Continuous A/B testing across landing pages, headlines, intake forms, and CTAs. Statistical rigor on the test design — minimum sample sizes, confidence thresholds, segmentation.",
      "The result: same traffic, more cases. Same cases, higher quality. Same engagement, higher revenue.",
    ],
    deliverables: [
      "Practice-area page rebuild against intent-aligned templates",
      "Intake form redesign with insurance / case-fit qualification",
      "Continuous A/B testing program with documented winners",
      "Page-speed optimization to maintain Google ranking factors",
      "Mobile-first conversion engineering",
    ],
  },
  {
    n: "04",
    name: "AI Search Optimization",
    oneliner: "Entity, schema, and content engineered for ChatGPT / Perplexity / AI Overviews.",
    body: [
      "AI search is the fastest-growing query surface in legal and medical. Patients ask ChatGPT for &ldquo;best dermatologist in Miami.&rdquo; Heirs ask Perplexity for &ldquo;probate attorney recommendations in Tampa.&rdquo; The firms cited in those AI answers win the next decade of clients.",
      "We engineer your firm&apos;s entity for AI search consumption. Knowledge graph signals, schema markup, authority content, and directory placements — all tuned to be the source AI surfaces cite.",
      "Coverage: ChatGPT, Perplexity, Claude, Google AI Overviews, Bing AI. We monitor citation rates across all four major surfaces weekly.",
    ],
    deliverables: [
      "Entity disambiguation and knowledge graph signal work",
      "AI-citation-aware schema markup deployment",
      "Authority content engineered for LLM consumption",
      "Citation rate monitoring across 4 AI surfaces, weekly",
      "Quarterly AI-citation rate report against priority queries",
    ],
    caseRef: { href: "/case-studies/hartman-dermatology", label: "Hartman Dermatology engagement" },
    subPage: "/services/ai-search",
  },
  {
    n: "05",
    name: "Authority Content",
    oneliner: "Long-form articles that earn featured snippets and AI citations.",
    body: [
      "Most agency content is generic, scraped, or LLM-spun. Ours isn&apos;t. We produce long-form authority content tied to your practice areas — written for the actual decision a prospect is making, not for SEO checkbox completion.",
      "Topics chosen against real query data from our rank tracker. Length determined by what the query rewards (some need 800 words, some need 4,000). Schema and internal linking integrated from production, not bolted on after.",
      "Authority content compounds: every piece amplifies AI citation, builds topical authority, and reinforces the GMB / website / press signal stack.",
    ],
    deliverables: [
      "Practice-area authority library (10-20 articles per engagement year)",
      "Topic selection from rank-tracker and SERP analysis",
      "Editorial review by senior strategist before publication",
      "Internal linking architecture for topical authority",
      "Quarterly authority refresh on top-performing articles",
    ],
    subPage: "/services/content",
  },
  {
    n: "06",
    name: "Reputation Management",
    oneliner: "Review velocity systems plus response operations.",
    body: [
      "Reviews are the conversion moat. Three competitors with 50 reviews each lose to the one with 400 — assuming the 400 are recent and well-managed.",
      "We architect review velocity systems specific to your practice: HIPAA-aware request flows for medical, ethical bar-compliant requests for legal. Response operations cover every review within 48 hours.",
      "Reputation is one of the highest-leverage components: it amplifies local pack, AI citation, and conversion simultaneously.",
    ],
    deliverables: [
      "Review request automation (HIPAA / bar-compliant)",
      "Response operations within 48 hours, every review",
      "Cross-platform velocity coordination (Google, Yelp, Healthgrades, Avvo, etc.)",
      "Negative review crisis protocol",
      "Quarterly review-velocity health report",
    ],
    caseRef: { href: "/case-studies/coleman-co", label: "Coleman & Co. engagement" },
  },
  {
    n: "07",
    name: "Press & PR Outreach",
    oneliner: "Publication placements and authority signals secured.",
    body: [
      "Press placements signal authority to AI search, to Google&apos;s knowledge graph, to prospects who Google your firm before calling. We operate a press strategy specific to legal and medical: legal publications, regional press, podcast placements, and authority directories.",
      "Not press release distribution. Real outreach to real journalists with real story angles tied to your firm&apos;s engagement.",
    ],
    deliverables: [
      "Quarterly press strategy aligned to firm story arc",
      "Direct journalist relationships in legal / medical / regional press",
      "Podcast placement program",
      "Authority directory submissions (Super Lawyers, Castle Connolly, etc.)",
      "Press archive page kept current",
    ],
  },
  {
    n: "08",
    name: "Schema & Technical SEO",
    oneliner: "LegalService, Physician, Attorney entity work.",
    body: [
      "Schema markup tells Google and AI surfaces what your firm actually is — practice areas, jurisdictions, providers, services, reviews. Most websites have none. Some have a generic Organization schema. We deploy the full LegalService / Physician / Attorney / Medical-specialty schema stack with entity references between assets.",
      "Plus the rest of technical SEO: Core Web Vitals, crawlability, internal linking, sitemaps, robots config, and page-speed engineering.",
    ],
    deliverables: [
      "Full schema markup deployment (LegalService, Attorney, Physician, etc.)",
      "Core Web Vitals optimization to Google&apos;s passing thresholds",
      "Crawl budget audit and internal linking architecture",
      "Quarterly technical SEO health check",
    ],
  },
  {
    n: "09",
    name: "Email & Newsletter",
    oneliner: "List-aware nurturing tied to long legal & medical decision cycles.",
    body: [
      "Legal prospects don&apos;t convert in a week. Medical patients evaluate for months. Email keeps your firm present across the decision window without paying for every touch.",
      "We architect newsletter and nurturing programs tied to practice-area decision cycles. Educational content for legal prospects researching options. Insurance + procedure content for medical patients evaluating providers.",
    ],
    deliverables: [
      "Per-practice newsletter program with editorial cadence",
      "Nurturing flows tied to intake forms (insurance-aware for medical)",
      "List segmentation by intent stage and practice area",
      "Quarterly email-channel revenue attribution",
    ],
  },
  {
    n: "10",
    name: "Social Media Growth",
    oneliner: "Platform-tuned brand presence, not generic posting.",
    body: [
      "Social media for legal and medical is misunderstood. The audience isn&apos;t on every platform — and the content doesn&apos;t convert from generic posting. We architect social presence on the platforms specific to your firm&apos;s vertical: LinkedIn for B2B legal, Instagram and TikTok for cosmetic medical, Facebook for family law.",
      "Same operator playbook that grew Madison Clark to 100M views, adapted to legal / medical content requirements.",
    ],
    deliverables: [
      "Platform-specific strategy per vertical and practice area",
      "Production cadence aligned to platform algorithm signals",
      "Performance-based content iteration (retention, completion, save rates)",
      "Quarterly social-channel revenue attribution",
    ],
    caseRef: { href: "/case-studies/madison-clark", label: "Madison Clark engagement" },
  },
];

export default function ServicesPage() {
  return (
    <main className="services-hub">
      <PageHero
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
        eyebrow="Services — The Ten Components"
        title={
          <>
            Ten coordinated services.{" "}
            <span className="accent-italic">One engine.</span>
          </>
        }
        subtitle="Each component has its own playbook, its own team, and its own data dashboard. They run together as one engine — engineered to compound."
      />

      {/* THE ENGINE OVERVIEW */}
      <PageSection
        eyebrow="The engine"
        title="One coordinated system."
        titleAlignment="left"
        maxWidth="900px"
      >
        <div className="services-engine-overview">
          <EngineArchitecture />
          <div className="services-engine-text">
            <p>
              The Organic Growth Engine is the architectural manifestation of
              the Rysen methodology. Ten components — each with its own
              playbook, dashboard, and team — running together as one
              coordinated system.
            </p>
            <p>
              Each component improves the others. Authority content amplifies
              AI citation. Reviews reinforce local pack rankings. Schema markup
              multiplies everything. Run together, the engine compounds.
            </p>
            <Link href="/methodology" className="text-link">
              Read about the framework
            </Link>
          </div>
        </div>
      </PageSection>

      {/* THE 10 COMPONENTS IN DETAIL */}
      <PageSection
        eyebrow="The ten components"
        title="Every component, in detail."
        background="tint"
      >
        <div className="services-detail-list">
          {COMPONENTS.map((c) => (
            <article key={c.n} className="services-detail-block">
              <div className="services-detail-num">{c.n}</div>
              <div className="services-detail-body">
                <h3 className="services-detail-name">{c.name}</h3>
                <p className="services-detail-oneliner">{c.oneliner}</p>
                <div className="services-detail-paragraphs">
                  {c.body.map((p, i) => (
                    <p
                      key={i}
                      dangerouslySetInnerHTML={{ __html: p }}
                    />
                  ))}
                </div>
                <div className="services-detail-deliverables">
                  <div className="services-detail-deliverables-head">
                    <SignalTriangle size={9} decorative />
                    <span>What clients receive</span>
                  </div>
                  <ul className="signal-list">
                    {c.deliverables.map((d) => (
                      <li key={d}>{d}</li>
                    ))}
                  </ul>
                </div>
                <div className="services-detail-footer">
                  {c.caseRef && (
                    <Link
                      href={c.caseRef.href}
                      className="services-detail-case-ref"
                    >
                      See it in practice → {c.caseRef.label}
                    </Link>
                  )}
                  {c.subPage && (
                    <Link
                      href={c.subPage}
                      className="services-detail-sub-link"
                    >
                      Read the dedicated page
                      <SignalTriangle size={9} decorative />
                    </Link>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </PageSection>

      {/* COMPOUND */}
      <PageSection
        eyebrow="How components compound"
        title="Each lever amplifies the others."
        titleAlignment="left"
        maxWidth="780px"
      >
        <div className="services-compound-text">
          <p>
            The reason the engine works is that the components reinforce each
            other. A schema rebuild (component 8) amplifies AI citation
            (component 4). Authority content (component 5) feeds press
            placements (component 7). GMB optimization (component 2) wins the
            local pack which feeds LSA performance (component 1).
          </p>
          <p>
            Run separately — as most agencies do — each component is a
            single-digit-percent lift. Run together, the same components
            produce a 150–500% revenue lift over 12–24 months. The
            arithmetic is multiplicative.
          </p>
          <p>
            This is also why we don&apos;t sell components à la carte. The
            engine doesn&apos;t work in pieces. You don&apos;t buy four
            cylinders of a car.
          </p>
        </div>
      </PageSection>

      <RelatedContent
        items={[
          {
            href: "/methodology",
            eyebrow: "Framework",
            title: "The First Position methodology",
            description: "Five pillars underpinning all ten components.",
          },
          {
            href: "/how-we-measure",
            eyebrow: "Data infrastructure",
            title: "How we measure",
            description: "The seven data systems tracking every component.",
          },
          {
            href: "/case-studies",
            eyebrow: "Engagements",
            title: "Selected case studies",
            description: "Components in action across legal and medical.",
          },
        ]}
      />

      <section className="deep-page-cta">
        <div className="deep-page-cta-eyebrow">Want the full engine running for your firm?</div>
        <h2 className="deep-page-cta-heading">Request an audit.</h2>
        <p className="deep-page-cta-sub">
          Audit calls include a walkthrough of which components are highest-
          leverage for your specific firm, market, and competitive landscape.
        </p>
        <Link href="/audit" className="deep-page-cta-button">
          Request an audit
        </Link>
        <p className="deep-page-cta-note">Average response time: 1 business day.</p>
      </section>
    </main>
  );
}
