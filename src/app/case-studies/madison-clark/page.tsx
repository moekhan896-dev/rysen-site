import type { Metadata } from "next";
import Link from "next/link";
import { AmbientTriangle } from "@/components/brand/AmbientTriangle";
import { SignalTriangle } from "@/components/brand/SignalTriangle";
import { BlueprintChart, ChartContainer } from "@/components/charts/BlueprintChart";
import { Breadcrumbs } from "@/components/primitives/Breadcrumbs";
import { BlueprintPullQuote } from "@/components/primitives/BlueprintPullQuote";
import { CaseStudyNav } from "@/components/primitives/CaseStudyNav";
import { RelatedContent } from "@/components/primitives/RelatedContent";
import { MoreWork } from "@/components/sections/MoreWork";
import { TrackPageView } from "@/components/analytics/TrackPageView";

export const metadata: Metadata = {
  title: "Madison Clark, AI persona, 100M views in 60 days",
  description:
    "Same team. Same data discipline. Applied to an AI persona built from scratch. 100M+ views, 20K followers, $0 ad spend.",
};

const WEEKLY_VIEWS = [
  120, 380, 920, 2400, 5800, 12000, 22000,
  41000, 72000, 99000, 100000, 100000,
];

const WEEK_LABELS = [
  "W1", "W2", "W3", "W4", "W5", "W6", "W7", "W8", "W9", "W10", "W11", "W12",
];

export default function MadisonClarkCaseStudy() {
  return (
    <article className="deep-page deep-page--ink">
      <TrackPageView
        event="case_study_view"
        props={{ slug: "madison-clark", kind: "owned-brand" }}
      />
      {/* HERO */}
      <section className="deep-page-hero">
        <div style={{ position: "absolute", top: 32, left: 32, opacity: 0.6 }}>
          <AmbientTriangle size={16} />
        </div>
        <div className="deep-page-hero-inner">
          <div className="deep-page-hero-text">
            <Breadcrumbs
              trail={[
                { label: "Home", href: "/" },
                { label: "Case studies", href: "/case-studies" },
                { label: "Madison Clark" },
              ]}
            />
            <div className="deep-page-masthead">Case study · Growth capability</div>
            <h1 className="deep-page-h1">@itsmadisonclarkk</h1>
            <p className="deep-page-subhead">
              An AI persona, built from scratch. 100M views in 60 days. Same
              team, same data discipline, applied to a completely different
              surface.
            </p>
            <div className="madison-hero-metrics">
              <div className="madison-metric">
                <div className="madison-metric-value">100M+</div>
                <div className="madison-metric-label">Views in 60 days</div>
              </div>
              <div className="madison-metric">
                <div className="madison-metric-value">20K</div>
                <div className="madison-metric-label">Followers, from zero. Views compounded faster than audience conversion.</div>
              </div>
              <div className="madison-metric">
                <div className="madison-metric-value">$0</div>
                <div className="madison-metric-label">Ad spend · 100% organic</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CHALLENGE */}
      <section className="deep-page-section" style={{ background: "var(--paper)", color: "var(--ink-text)", maxWidth: "none", padding: "80px 64px" }}>
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <div className="deep-page-section-eyebrow">
            <SignalTriangle size={10} decorative />
            <span>The challenge</span>
          </div>
          <h2 className="deep-page-section-h2">Build a brand from zero. AI-generated. 60 days.</h2>
          <div className="deep-page-section-body">
            <p>
              Most agencies sell growth methodology they&apos;ve never run
              themselves. We wanted to prove ours by running it on a brand we
              built from nothing, and one that lived in a completely different
              audience than our law-firm and medical-practice clients.
            </p>
            <p>
              The constraint: a controversial format (AI-generated persona), no
              existing audience, no warm traffic, no SEO authority. 60-day
              window. The deliverable: a public demonstration of growth
              capability that any prospect could verify with their own eyes.
            </p>
          </div>
        </div>
      </section>

      {/* METHODOLOGY */}
      <section className="deep-page-section" style={{ background: "var(--paper-elevated)", color: "var(--ink-text)", maxWidth: "none", padding: "80px 64px" }}>
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <div className="deep-page-section-eyebrow">
            <SignalTriangle size={10} decorative />
            <span>The methodology</span>
          </div>
          <h2 className="deep-page-section-h2">Same playbook. Different surface.</h2>
          <div className="deep-page-section-body">
            <p>
              <strong>Content strategy:</strong> beauty + lifestyle + light
              storytelling. Daily posting cadence. Short-form video as the
              primary format. Hyper-tested hooks in the first 1.5 seconds.
            </p>
            <p>
              <strong>Visual identity:</strong> persona designed for a single
              consistent look. Same lighting, same framing, same wardrobe
              palette. Recognition before recall.
            </p>
            <p>
              <strong>Algorithm signals:</strong> high completion rate (90%+
              average), high replay rate, strong save and share metrics, low
              skip rate. Every metric tracked and fed back into the next
              upload.
            </p>
            <p>
              <strong>Retention hooks:</strong> overt hooks within first 1.5s,
              implied second hook around 3s, payoff promise at 5s. Tested,
              iterated, optimized.
            </p>
            <p>
              <strong>Posting cadence:</strong> 3-5 posts per day across two
              platforms, timed to audience awake windows by geography. Friday
              and Sunday evenings disproportionately strong.
            </p>
          </div>
        </div>
      </section>

      {/* GROWTH CURVE */}
      <section className="deep-page-section" style={{ background: "var(--paper)", color: "var(--ink-text)", maxWidth: "none", padding: "80px 64px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="deep-page-section-eyebrow">
            <SignalTriangle size={10} decorative />
            <span>The growth curve</span>
          </div>
          <h2 className="deep-page-section-h2">Twelve weeks. Compound growth.</h2>
          <p className="deep-page-section-body">
            Weekly views grew from 120 in week 1 to 100M+ by week 11. Classic
            algorithmic compound, the system rewards consistency, retention,
            and shareability simultaneously.
          </p>

          <div style={{ marginTop: 48 }}>
            <ChartContainer>
              <BlueprintChart
                variant="area"
                ariaLabel="Weekly view growth for @itsmadisonclarkk over 12 weeks"
                xLabels={WEEK_LABELS}
                yLabel="VIEWS (000s)"
                caption="Source: cross-platform internal analytics. Cumulative weekly views in thousands."
                series={[
                  {
                    label: "Weekly views",
                    values: WEEKLY_VIEWS.map((v) => v / 1000),
                    highlight: true,
                  },
                ]}
              />
            </ChartContainer>
          </div>

          <BlueprintPullQuote
            context="paper"
            quote="Same team. Same data discipline. Applied to a completely different surface. If we can do this for an AI persona from zero, imagine what we can do for a law firm or medical practice that already has years of authority to amplify."
            attribution="Rysen leadership"
          />
        </div>
      </section>

      {/* LESSONS FOR LEGAL/MEDICAL */}
      <section className="deep-page-section" style={{ background: "var(--paper-elevated)", color: "var(--ink-text)", maxWidth: "none", padding: "80px 64px" }}>
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <div className="deep-page-section-eyebrow">
            <SignalTriangle size={10} decorative />
            <span>The lessons for legal & medical</span>
          </div>
          <h2 className="deep-page-section-h2">Different surface. Same operating principles.</h2>
          <ul className="signal-list" style={{ marginTop: 32 }}>
            <li><strong>Consistency beats virality.</strong> Daily cadence trained the algorithm. Same principle: weekly Rysen production cadence for law firms compounds visibility over months.</li>
            <li><strong>Retention is the signal.</strong> 90%+ completion told the algorithm to keep promoting. Same principle: long-dwell authority content tells Google to keep ranking your firm.</li>
            <li><strong>Hooks and entry points matter more than length.</strong> The first 1.5s decides everything. Same principle: a law firm&apos;s above-the-fold messaging decides whether the next 30 seconds happens.</li>
            <li><strong>Data discipline turns intuition into a system.</strong> Every metric tracked, every change measured. Same principle: every Rysen client&apos;s Friday report turns intuition into accountability.</li>
            <li><strong>Compound systems beat one-off campaigns.</strong> 12 weeks of consistent execution beat any single viral moment. Same principle: organic dominance is a 6-24 month system, not a campaign.</li>
          </ul>
        </div>
      </section>

      {/* CASE STUDY NAV */}
      <CaseStudyNav
        previous={{ href: "/case-studies/ridge-dental", label: "Ridge Dental" }}
        next={{ href: "/case-studies/aws-law-firm", label: "AWS Law Firm" }}
      />

      {/* Madison is an owned brand. MoreWork points back at the
          search cases so owned-brand traffic still feeds the funnel. */}
      <MoreWork currentSlug="madison-clark" />

      <RelatedContent
        items={[
          { href: "/methodology", eyebrow: "Framework", title: "First Position", description: "The methodology that produced the Madison Clark result and every legal/medical engagement." },
          { href: "/how-we-measure", eyebrow: "Data infrastructure", title: "How we measure", description: "The systems that track what made Madison Clark work." },
          { href: "/case-studies", eyebrow: "Engagements", title: "All case studies", description: "Legal + medical engagements with real revenue attributed to source." },
        ]}
      />

      <section className="deep-page-cta">
        <div className="deep-page-cta-eyebrow">Imagine what we can do for your firm.</div>
        <h2 className="deep-page-cta-heading">Request an audit.</h2>
        <p className="deep-page-cta-sub">
          Same team. Same discipline. Applied to your firm, with the authority
          you already have, scaled with the methodology that built Madison
          Clark from zero.
        </p>
        <Link href="/audit" className="deep-page-cta-button">Request an audit</Link>
        <p className="deep-page-cta-note">Average response time: 1 business day.</p>
      </section>
    </article>
  );
}
