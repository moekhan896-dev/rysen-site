import type { Metadata } from "next";
import Link from "next/link";
import { FileText, MapPin, Sparkles } from "lucide-react";
import { CTABanner } from "@/components/page-sections/CTABanner";
import { PageHero } from "@/components/page-sections/PageHero";
import { PageSection } from "@/components/page-sections/PageSection";

export const metadata: Metadata = {
  title:
    "Services — AI Search, Local SEO & Content for Law & Medical Firms",
  description:
    "Three integrated services for law firms and medical practices: AI Search Optimization, Local SEO & GMB Dominance, and Content + Reputation.",
};

const SERVICES = [
  {
    icon: Sparkles,
    eyebrow: "01 · AI SEARCH",
    title: "AI Search Optimization",
    subtitle: "Be the answer when AI suggests.",
    description:
      "When future clients ask ChatGPT, Perplexity, or Google AI Overviews who to call, your firm is the answer. We optimize content, authority signals, and entity data so AI surfaces cite you by name.",
    capabilities: [
      "Entity SEO & structured data",
      "Citation acquisition across authority sites",
      "Content engineered for LLM consumption",
      "Topical authority building",
      "Real-time AI citation monitoring",
    ],
    href: "/services/ai-search",
  },
  {
    icon: MapPin,
    eyebrow: "02 · LOCAL SEO",
    title: "Local SEO & GMB Dominance",
    subtitle: "Own your metro. Period.",
    description:
      "Eighty percent of legal and medical clients search locally. If you're not in the 3-pack for your priority queries, you don't exist. We build hyperlocal dominance neighborhood by neighborhood.",
    capabilities: [
      "GMB optimization & schema",
      "Citation building & cleanup",
      "Review velocity strategy",
      "Hyperlocal content systems",
      "Neighborhood-level rank tracking",
    ],
    href: "/services/local-seo",
  },
  {
    icon: FileText,
    eyebrow: "03 · CONTENT & REPUTATION",
    title: "Content, Reputation & Beyond",
    subtitle: "Full-stack growth, not piecemeal services.",
    description:
      "Most agencies sell one tactic. Firms need an integrated approach: long-form authority content, newsletter strategy, reputation management, web design, off-page SEO. We run all of it from one team.",
    capabilities: [
      "Long-form authority content",
      "Newsletter strategy & sends",
      "Review management at scale",
      "Web design & conversion",
      "Off-page SEO & link earning",
    ],
    href: "/services/content",
  },
] as const;

export default function ServicesPage() {
  return (
    <main className="services-hub">
      <PageHero
        eyebrow="What we do"
        title={
          <>
            Three services. One outcome: your firm is the{" "}
            <span className="accent-italic">first answer.</span>
          </>
        }
        subtitle="We optimize your firm's visibility across every surface that matters — Google, AI search, Maps, content, reputation. Specialized for legal and medical practices."
      />

      <PageSection
        eyebrow="The three services"
        title="Specialized, but integrated."
        subtitle="Each lever amplifies the others. We run all three from one Detroit team."
      >
        <div className="services-list">
          {SERVICES.map((s, i) => {
            const Icon = s.icon;
            return (
              <article key={s.title} className="service-card">
                <div className="service-card-eyebrow">{s.eyebrow}</div>
                <div className="service-card-grid">
                  <div className="service-card-left">
                    <div className="service-card-icon">
                      <Icon size={22} strokeWidth={1.6} aria-hidden="true" />
                    </div>
                    <h3 className="service-card-title">{s.title}</h3>
                    <p className="service-card-subtitle">
                      <span className="accent-italic">{s.subtitle}</span>
                    </p>
                    <p className="service-card-desc">{s.description}</p>
                    <Link href={s.href} className="service-card-link">
                      Learn more <span className="arrow">→</span>
                    </Link>
                  </div>
                  <div className="service-card-right">
                    <div className="service-capabilities-label">
                      What’s included
                    </div>
                    <ul className="service-capabilities">
                      {s.capabilities.map((c) => (
                        <li key={c}>
                          <span className="service-cap-bullet" aria-hidden="true">
                            +
                          </span>
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <span
                  className="service-card-number"
                  aria-hidden="true"
                >
                  0{i + 1}
                </span>
              </article>
            );
          })}
        </div>
      </PageSection>

      <PageSection
        eyebrow="The philosophy"
        title={
          <>
            We don’t sell tactics — we sell{" "}
            <span className="accent-italic">compound visibility.</span>
          </>
        }
        titleAlignment="left"
        maxWidth="780px"
        background="tint"
      >
        <div className="services-philosophy">
          <p>
            Rankings drive trust. Trust drives reviews. Reviews drive AI citations.
            AI citations drive more rankings. Each lever amplifies the others, but
            only if they’re run together by a team that understands how the
            entire system compounds.
          </p>
          <p>
            That’s why we don’t do single-tactic engagements. Local SEO
            without authority content stalls. AI search optimization without strong
            entity signals fails. Reputation work without ranking work goes nowhere.
            We sell the whole loop because that’s the only thing that actually
            moves revenue.
          </p>
        </div>
      </PageSection>

      <CTABanner
        title="Want a free audit of all three?"
        subtitle="We’ll show you exactly where you stand on Google, AI search, and Maps — and what it would take to win."
        primaryText="Get my audit"
        primaryHref="/audit"
        secondaryText="See our work"
        secondaryHref="/case-studies"
      />
    </main>
  );
}
