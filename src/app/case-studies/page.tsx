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
    badge: "Legal · Probate · Tampa, FL",
    headline: "AWS Law Firm: Tampa’s leading probate practice.",
    stats: ["+240% consultations", "52% AI citations", "#1 ranked"],
    preview:
      "From page two of Google with zero AI citations to position one for every priority probate query in Tampa — and the dominant cited source on ChatGPT and Perplexity.",
    href: "/case-studies/aws-law-firm",
  },
  {
    badge: "Legal · Family · Atlanta, GA",
    headline: "Tyler Family Law: Atlanta’s #1 divorce attorney.",
    stats: ["+1,240% leads", "8 months", "#1 ranked"],
    preview:
      "Three other agencies called Atlanta unwinnable against the national lawyer mills. Eight months later, Tyler ranked #1 and now operates a four-week intake waitlist.",
    href: "/case-studies/tyler-family-law",
  },
  {
    badge: "Medical · Dermatology · Miami, FL",
    headline: "Hartman Dermatology: Miami’s go-to for cosmetic consultations.",
    stats: ["+78% consultations", "#1 ranked", "142% review velocity"],
    preview:
      "From clinically excellent but online invisible to #1 across Miami cosmetic dermatology queries — and cited by AI surfaces in 38% of relevant local queries.",
    href: "/case-studies/hartman-dermatology",
  },
  {
    badge: "Legal · Estate · Los Angeles, CA",
    headline: "Coleman & Co.: Now Los Angeles’s #1 estate attorney.",
    stats: ["+320% qualified leads", "#1 ranked", "9 months"],
    preview:
      "An HNW estate boutique that was almost entirely referral-driven. Nine months later, organic accounts for 67% of new business — and the firm ranks #1 across the priority LA estate queries.",
    href: "/case-studies/coleman-co",
  },
  {
    badge: "Medical · Dental · Chicago, IL",
    headline: "Ridge Dental: Dominating Chicago’s 3-pack across 5 neighborhoods.",
    stats: ["+186% new patient calls", "#1 in 5 neighborhoods", "4 months"],
    preview:
      "Multi-location dental network treated all 5 GBPs as a coordinated system, not parallel competitors. Four months later, #1 in Maps Pack across every Chicago neighborhood it serves.",
    href: "/case-studies/ridge-dental",
  },
];

export default function CaseStudiesPage() {
  return (
    <main className="case-studies-hub">
      <PageHero
        eyebrow="Our work"
        title={
          <>
            Real firms.{" "}
            <span className="accent-italic">Real numbers.</span>
          </>
        }
        subtitle="Five case studies. Stats verified, names used with permission."
      />

      <PageSection eyebrow="Case studies" title="Published case studies.">
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

        </div>
      </PageSection>

      <CTABanner
        title="Want to be the next one on this page?"
        subtitle="Start with a free audit. We’ll show you what’s possible for your firm before any commitment."
        primaryText="Get a free audit"
        primaryHref="/audit"
      />
    </main>
  );
}
