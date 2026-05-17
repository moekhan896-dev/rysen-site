import type { Metadata } from "next";
import Link from "next/link";
import { AmbientTriangle } from "@/components/brand/AmbientTriangle";
import { SignalTriangle } from "@/components/brand/SignalTriangle";
import { WeeklyCadenceGrid } from "@/components/illustrations/WeeklyCadenceGrid";
import { Breadcrumbs } from "@/components/primitives/Breadcrumbs";
import { RelatedContent } from "@/components/primitives/RelatedContent";
import { InlineDetail } from "@/components/utilities/InlineDetail";
import { ScrollReveal } from "@/components/utilities/ScrollReveal";

export const metadata: Metadata = {
  title: "How we work, Weekly operating cadence",
  description:
    "A standing 5-day operating rhythm. Data sync Monday, strategy Tuesday, production Wednesday, QA Thursday, client reports Friday. Standing since 2019.",
};

const DAYS = [
  {
    day: "Monday",
    time: "08:00 EST",
    title: "Data sync",
    body: "All client dashboards refresh against the prior week's data. Anomalies flagged for the data team. Each account strategist reviews their accounts' overnight metrics. Set-up for the week's standing meetings.",
    delivers: "Weekly report queued · Anomaly tickets filed · Standing meeting agendas finalized.",
  },
  {
    day: "Tuesday",
    time: "10:00 EST",
    title: "Strategy review",
    body: "Every active client account is reviewed by their lead strategist with the senior partner. Decisions documented in the engagement log. New initiatives queued for Wednesday production. Bottlenecks surfaced and resolved.",
    delivers: "Decisions documented · Production queue confirmed · Senior approval on direction.",
  },
  {
    day: "Wednesday",
    time: "All day",
    title: "Production",
    body: "Content, links, GMB posts, schema deployments, technical work, review responses. The day the firm actually ships. Everyone on a production track, with named owners against named deliverables.",
    delivers: "Weekly production complete · All work tagged for Thursday QA.",
  },
  {
    day: "Thursday",
    time: "16:00 EST",
    title: "QA + ship",
    body: "Everything produced Wednesday gets reviewed by a senior strategist before going live. Schema validated. Content cross-checked. Links audited. Then deployed. Nothing ships without senior sign-off.",
    delivers: "Friday-ready · Senior strategist signature on every output.",
  },
  {
    day: "Friday",
    time: "12:00 EST",
    title: "Client reports + retro",
    body: "Reports compiled and sent to clients before noon. Internal retro at 2pm: what worked, what didn't, what's next. Process improvements get added to the playbook. Engagement learnings get added to the firm-wide knowledge base.",
    delivers: "Weekly report shipped to client · Retro decisions documented · Playbook updated.",
  },
];

export default function HowWeWorkPage() {
  return (
    <article className="deep-page">
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
                { label: "How we work" },
              ]}
            />
            <div className="deep-page-masthead">
              Operations · The weekly cadence
            </div>
            <h1 className="deep-page-h1">Operations, weekly. Since 2019.</h1>
            <p className="deep-page-subhead">
              Real operations require real cadence. This is the standing 5-day
              rhythm that runs every Rysen engagement, every week, every year
              since the firm was founded.
            </p>
          </div>
          <div className="deep-page-hero-art">
            <WeeklyCadenceGrid />
          </div>
        </div>
      </section>

      {/* FULL 5-DAY CADENCE */}
      <section className="deep-page-section">
        <ScrollReveal>
          <div className="deep-page-section-eyebrow">
            <SignalTriangle size={10} decorative />
            <span>The full cadence</span>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={150}>
          <h2 className="deep-page-section-h2">
            Five standing days. Named owners. Documented decisions.
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={300}>
          <p className="deep-page-section-body">
            Most agencies say they&apos;re &ldquo;data-driven&rdquo; or
            &ldquo;weekly-accountable.&rdquo; Few publish what that actually
            means in their{" "}
            <InlineDetail detail="Every Monday at 08:00 EST, every Tuesday at 10:00 EST, every Thursday at 16:00 EST, every Friday at 12:00 EST. Times documented, owners named, decisions logged. Same cadence since the firm was founded.">
              operating week
            </InlineDetail>
            . Here&apos;s ours, every week, since 2019.
          </p>
        </ScrollReveal>

        <div style={{ marginTop: 48 }}>
          {DAYS.map((d, i) => (
            <ScrollReveal key={d.day} delay={450 + i * 100}>
              <article className="pillar-block">
                <div className="pillar-number" style={{ fontSize: 48 }}>{d.day}</div>
                <div className="pillar-content">
                  <div style={{ fontFamily: "var(--font-inter), system-ui, sans-serif", fontStyle: "italic", fontSize: 12, color: "var(--signal-text)", marginBottom: 8 }}>
                    {d.time}
                  </div>
                  <h3>{d.title}</h3>
                  <p>{d.body}</p>
                  <div className="data-system-callout" style={{ background: "var(--paper-elevated)", color: "var(--ink-text)", borderLeft: "2px solid var(--signal)" }}>
                    {d.delivers}
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* DELIVERABLES */}
      <section className="deep-page-section" style={{ background: "var(--paper-elevated)", maxWidth: "none", padding: "80px 64px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="deep-page-section-eyebrow">
            <SignalTriangle size={10} decorative />
            <span>What clients actually receive</span>
          </div>
          <h2 className="deep-page-section-h2">Real deliverables, against the cadence.</h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 32, marginTop: 40 }}>
            <div>
              <h3 style={{ fontFamily: "var(--font-fraunces), serif", fontWeight: 500, fontSize: 22 }}>Weekly</h3>
              <ul className="signal-list" style={{ marginTop: 16 }}>
                <li>Friday written report (revenue, rankings, content shipped, decisions)</li>
                <li>Anomaly alerts within 24 hours of detection</li>
                <li>Updated dashboards (live)</li>
                <li>Slack channel access to your strategist</li>
              </ul>
            </div>
            <div>
              <h3 style={{ fontFamily: "var(--font-fraunces), serif", fontWeight: 500, fontSize: 22 }}>Monthly</h3>
              <ul className="signal-list" style={{ marginTop: 16 }}>
                <li>30-minute strategist call with senior partner</li>
                <li>Month-over-month revenue attribution breakdown</li>
                <li>Competitive movement summary</li>
                <li>Roadmap recalibration for the next month</li>
              </ul>
            </div>
            <div>
              <h3 style={{ fontFamily: "var(--font-fraunces), serif", fontWeight: 500, fontSize: 22 }}>Quarterly</h3>
              <ul className="signal-list" style={{ marginTop: 16 }}>
                <li>Board-ready PDF report for partners</li>
                <li>Predictive briefing on next-quarter opportunity</li>
                <li>Cohort deep-dive on case/patient acquisition</li>
                <li>Engagement renewal / scope review</li>
              </ul>
            </div>
            <div>
              <h3 style={{ fontFamily: "var(--font-fraunces), serif", fontWeight: 500, fontSize: 22 }}>Annually</h3>
              <ul className="signal-list" style={{ marginTop: 16 }}>
                <li>Year-over-year attribution analysis</li>
                <li>Refreshed audit against First Position pillars</li>
                <li>Forecasted multi-year plan</li>
                <li>Strategy offsite invitation (optional, in Detroit)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* RELATED */}
      <RelatedContent
        items={[
          {
            href: "/methodology",
            eyebrow: "Framework",
            title: "The First Position methodology",
            description: "Why weekly accountability is one of five pillars and how it links to the other four.",
          },
          {
            href: "/how-we-measure",
            eyebrow: "Data infrastructure",
            title: "How we measure",
            description: "The seven data systems that feed the Friday report.",
          },
          {
            href: "/about",
            eyebrow: "The firm",
            title: "About Rysen",
            description: "Who runs the firm, where the office is, and why we work the way we do.",
          },
        ]}
      />

      {/* CTA */}
      <section className="deep-page-cta">
        <div className="deep-page-cta-eyebrow">Ready to see the cadence in action?</div>
        <h2 className="deep-page-cta-heading">Request an audit.</h2>
        <p className="deep-page-cta-sub">
          Audit calls take you through what a Friday report looks like for an
          active client and what the first 90 days of cadence delivers.
        </p>
        <Link href="/audit" className="deep-page-cta-button">
          Request an audit
        </Link>
        <p className="deep-page-cta-note">Average response time: 1 business day.</p>
      </section>
    </article>
  );
}
