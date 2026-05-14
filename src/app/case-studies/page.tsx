import type { Metadata } from "next";
import Link from "next/link";
import { CTABanner } from "@/components/page-sections/CTABanner";
import { PageHero } from "@/components/page-sections/PageHero";
import { PageSection } from "@/components/page-sections/PageSection";

export const metadata: Metadata = {
  title: "Case Studies — Real Firms, Real Numbers",
  description:
    "Real engagement results from Rysen Growth. AWS Law Firm (Tampa probate), Tyler Family Law (Atlanta divorce), and more.",
};

interface CaseCard {
  readonly badge: string;
  readonly headline: string;
  readonly stats: ReadonlyArray<string>;
  readonly preview: string;
  readonly href: string;
}

const PUBLISHED: ReadonlyArray<CaseCard> = [
  {
    badge: "LEGAL · PROBATE · TAMPA, FL",
    headline: "AWS Law Firm: Tampa&rsquo;s leading probate practice.",
    stats: ["+240% consultations", "52% AI citations", "#1 ranked"],
    preview:
      "From page two of Google with zero AI citations to position one for every priority probate query in Tampa — and the dominant cited source on ChatGPT and Perplexity.",
    href: "/case-studies/aws-law-firm",
  },
  {
    badge: "LEGAL · FAMILY · ATLANTA, GA",
    headline: "Tyler Family Law: Atlanta&rsquo;s #1 divorce attorney.",
    stats: ["+1,240% leads", "8 months", "#1 ranked"],
    preview:
      "Three other agencies called Atlanta unwinnable against the national lawyer mills. Eight months later, Tyler ranked #1 and now operates a four-week intake waitlist.",
    href: "/case-studies/tyler-family-law",
  },
];

const COMING_SOON: ReadonlyArray<{ name: string; badge: string }> = [
  { name: "Hartman Dermatology", badge: "MEDICAL · DERMATOLOGY · MIAMI" },
  { name: "Coleman & Co.", badge: "LEGAL · ESTATE · LOS ANGELES" },
  { name: "Ridge Dental", badge: "MEDICAL · DENTAL · CHICAGO" },
];

export default function CaseStudiesPage() {
  return (
    <main className="case-studies-hub">
      <PageHero
        eyebrow="OUR WORK"
        title={
          <>
            Real firms.{" "}
            <span className="accent-italic">Real numbers.</span>
          </>
        }
        subtitle="A selection of recent engagements. Stats verified, names used with permission."
      />

      <PageSection eyebrow="CASE STUDIES" title="Published case studies.">
        <div className="case-cards">
          {PUBLISHED.map((c) => (
            <Link key={c.href} href={c.href} className="case-card">
              <div className="case-card-badge">{c.badge}</div>
              <h3
                className="case-card-headline"
                dangerouslySetInnerHTML={{ __html: c.headline }}
              />
              <div className="case-card-stats">
                {c.stats.map((s) => (
                  <span key={s} className="case-card-stat">
                    {s}
                  </span>
                ))}
              </div>
              <p className="case-card-preview">{c.preview}</p>
              <span className="case-card-link">
                Read the full case study <span className="arrow">→</span>
              </span>
            </Link>
          ))}

          {COMING_SOON.map((c) => (
            <div key={c.name} className="case-card case-card-coming">
              <div className="case-card-badge">{c.badge}</div>
              <h3 className="case-card-headline">{c.name}</h3>
              <div className="case-card-coming-tag">Coming soon</div>
              <p className="case-card-preview">
                Engagement currently in progress. Case study publishing once
                final results are verified and client approval is in.
              </p>
            </div>
          ))}
        </div>
      </PageSection>

      <CTABanner
        title="Want to be the next one on this page?"
        subtitle="Start with a free audit. We&rsquo;ll show you what&rsquo;s possible for your firm before any commitment."
        primaryText="Get a free audit"
        primaryHref="/audit"
      />
    </main>
  );
}
