import type { Metadata } from "next";
import Link from "next/link";
import { AmbientTriangle } from "@/components/brand/AmbientTriangle";
import { SignalTriangle } from "@/components/brand/SignalTriangle";
import { FirstPositionFramework } from "@/components/illustrations/FirstPositionFramework";
import { EngineArchitecture } from "@/components/illustrations/EngineArchitecture";
import { Breadcrumbs } from "@/components/primitives/Breadcrumbs";
import { BlueprintPullQuote } from "@/components/primitives/BlueprintPullQuote";
import { RelatedContent } from "@/components/primitives/RelatedContent";
import { InlineDetail } from "@/components/utilities/InlineDetail";
import { PillarReveal } from "./PillarReveal";

export const metadata: Metadata = {
  title: "Methodology, The First Position framework",
  description:
    "First Position is not SEO. It's an operating system for market dominance. Five pillars, ten coordinated components, one outcome: #1 in your market.",
};

const PILLARS = [
  {
    n: "01",
    title: "Hyperlocal dominance",
    desc: "Most SEO is built for national queries. First Position is built for the metro. We architect visibility neighborhood-by-neighborhood, suburb-by-suburb, building geographic moats that scale national competitors can't cross.",
    bullets: [
      "Neighborhood-level keyword trees, not national",
      "Per-suburb GMB optimization with services taxonomy",
      "Hyperlocal citation building across community sites",
      "Per-metro authority content libraries",
    ],
  },
  {
    n: "02",
    title: "Data-first reporting",
    desc: "Every marketing decision should answer to math. Every dollar should report to revenue. We build custom attribution dashboards for each client that connect organic visibility to closed cases and patient revenue, not impressions, not clicks.",
    bullets: [
      "Custom attribution dashboard per client",
      "CRM integration for revenue tracking by channel",
      "Call tracking with source attribution",
      "Weekly reports in dollars, not impressions",
    ],
  },
  {
    n: "03",
    title: "Compound visibility",
    desc: "SEO compounds when components reinforce each other. Authority content amplifies AI citations. Reviews reinforce local pack rankings. Schema markup multiplies everything. We engineer all ten components as one coordinated system, so each improvement amplifies every other.",
    bullets: [
      "All 10 components run as one coordinated engine",
      "Each component dashboard linked to the others",
      "Quarterly cross-component performance reviews",
      "Engineered for multiplicative, not additive, lift",
    ],
  },
  {
    n: "04",
    title: "Weekly accountability",
    desc: "Standing meetings. Documented decisions. Named owners. Real cadence. The 5-day operating rhythm that runs every client engagement, every week, since 2019.",
    bullets: [
      "Monday data sync · Tuesday strategy · Wednesday production",
      "Thursday QA · Friday client reports",
      "Documented decisions with named owners",
      "Weekly accountability against measurable goals",
    ],
  },
  {
    n: "05",
    title: "Honest selection",
    desc: "We turn down two of every three firms who ask. Not because we don't need clients, but because we only succeed with firms that fit our methodology, those with partner-level commitment, willingness to invest 6-12 months minimum, and a real local market dominance opportunity.",
    bullets: [
      "Audit-first screening for engagement fit",
      "Minimum 6-month engagement floor",
      "Partner-level commitment required",
      "Real opportunity assessment before signing",
    ],
  },
];

export default function MethodologyPage() {
  return (
    <article className="deep-page">
      {/* HERO */}
      <section className="deep-page-hero">
        <div className="section-corner-mark" style={{ position: "absolute", top: 32, left: 32, opacity: 0.6 }}>
          <AmbientTriangle size={16} />
        </div>
        <div className="deep-page-hero-inner">
          <div className="deep-page-hero-text">
            <Breadcrumbs
              trail={[
                { label: "Home", href: "/" },
                { label: "Methodology" },
              ]}
            />
            <div className="deep-page-masthead">
              Methodology · The First Position framework
            </div>
            <h1 className="deep-page-h1">
              First Position is not SEO. It&apos;s an operating system for market
              dominance.
            </h1>
            <p className="deep-page-subhead">
              A coordinated methodology built specifically for boutique law firms
              and medical practices. Five pillars, ten components, one outcome:
              #1 in your market.
            </p>
          </div>
          <div className="deep-page-hero-art">
            <FirstPositionFramework />
          </div>
        </div>
      </section>

      {/* THE FIVE PILLARS */}
      <section className="deep-page-section">
        <div className="deep-page-section-eyebrow">
          <SignalTriangle size={10} decorative />
          <span>The framework</span>
        </div>
        <h2 className="deep-page-section-h2">Five pillars. One coordinated system.</h2>
        <p className="deep-page-section-body">
          Most agencies sell a stack of tactics. First Position is a{" "}
          <InlineDetail detail="Authority content amplifies AI citations. Reviews reinforce local pack rankings. Each lever adds 5 to 15 percent to the next when run together. The compound effect is what generic SEO stacks miss.">
            coordinated system
          </InlineDetail>
          : five pillars working in concert, with each pillar reinforcing the
          others. Remove any one and the system degrades. Run them together and
          the results compound.
        </p>

        <div style={{ marginTop: 48 }}>
          <PillarReveal pillars={PILLARS} />
        </div>
      </section>

      {/* THE ENGINE */}
      <section className="deep-page-section" style={{ background: "var(--ink)", color: "var(--paper-text)", maxWidth: "none", padding: "80px 64px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="deep-page-section-eyebrow">
            <SignalTriangle size={10} decorative />
            <span>The engine</span>
          </div>
          <h2 className="deep-page-section-h2" style={{ color: "var(--paper-text)" }}>
            Ten coordinated components. One unified engine.
          </h2>
          <p className="deep-page-section-body" style={{ color: "var(--paper-muted)" }}>
            The Organic Growth Engine is the architectural manifestation of First
            Position. Ten components, LSA, GMB, web optimization, AI search,
            authority content, reputation, PR, schema, email, and social,
            engineered to run together, not separately. Each component{" "}
            <InlineDetail detail="Schema markup multiplies AI search citation rates. Authority content boosts review signal. GMB optimization amplifies local pack rankings. Every component has measurable compounding effects on at least 3 others.">
              improves the others
            </InlineDetail>
            .
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, marginTop: 56, alignItems: "center" }}>
            <EngineArchitecture />
            <div>
              <BlueprintPullQuote
                context="ink"
                quote="Most agencies sell components as separate services with separate reports. We treat all ten as one coordinated system, engineered to compound. When one component improves, all others amplify."
                attribution="Rysen leadership"
              />
            </div>
          </div>

          <div style={{ marginTop: 56 }}>
            <Link href="/services" className="continue-reading continue-reading--ink">
              <span>Explore all ten components</span>
              <SignalTriangle size={10} decorative />
            </Link>
          </div>
        </div>
      </section>

      {/* METHODOLOGY IN PRACTICE */}
      <section className="deep-page-section">
        <div className="deep-page-section-eyebrow">
          <SignalTriangle size={10} decorative />
          <span>Methodology in practice</span>
        </div>
        <h2 className="deep-page-section-h2">First Position applied: AWS Law Firm, Tampa.</h2>
        <p className="deep-page-section-body">
          Tampa probate. Eight-month engagement. From page-two rankings to #1
          across priority queries with 52% AI citation rate. Each pillar applied:
        </p>
        <ul className="signal-list" style={{ marginTop: 32 }}>
          <li><strong>Hyperlocal dominance:</strong> Tampa neighborhoods targeted specifically, not statewide.</li>
          <li><strong>Data-first:</strong> custom probate-attribution dashboard built before content shipped.</li>
          <li><strong>Compound:</strong> schema overhaul amplified GMB rebuild amplified content authority.</li>
          <li><strong>Weekly accountability:</strong> 8-month engagement, zero missed weekly reports.</li>
          <li><strong>Honest selection:</strong> AWS Law Firm fit the criteria, partner commitment, real market opportunity, sufficient runway.</li>
        </ul>
        <div style={{ marginTop: 32 }}>
          <Link href="/case-studies/aws-law-firm" className="text-link">
            Read the full AWS Law Firm case study
          </Link>
        </div>
      </section>

      {/* RELATED */}
      <RelatedContent
        items={[
          {
            href: "/services",
            eyebrow: "Components",
            title: "The ten components",
            description: "Each component of the Organic Growth Engine in detail, what we do, why, and how clients access the data.",
          },
          {
            href: "/how-we-measure",
            eyebrow: "Data infrastructure",
            title: "How we measure",
            description: "The seven data systems that run continuously for every Rysen client engagement.",
          },
          {
            href: "/case-studies",
            eyebrow: "Engagements",
            title: "Selected case studies",
            description: "Real revenue attributed to source. Across legal and medical verticals.",
          },
        ]}
      />

      {/* CTA */}
      <section className="deep-page-cta">
        <div className="deep-page-cta-eyebrow">Ready to begin?</div>
        <h2 className="deep-page-cta-heading">Audit your firm against First Position.</h2>
        <p className="deep-page-cta-sub">
          Every engagement starts with an audit call. We review your current
          marketing position against the five pillars and propose an engagement
          only if you fit.
        </p>
        <Link href="/audit" className="deep-page-cta-button">
          Request an audit
        </Link>
        <p className="deep-page-cta-note">Average response time: 1 business day.</p>
      </section>
    </article>
  );
}
