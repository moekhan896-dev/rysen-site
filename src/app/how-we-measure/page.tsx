import type { Metadata } from "next";
import Link from "next/link";
import { AmbientTriangle } from "@/components/brand/AmbientTriangle";
import { SignalTriangle } from "@/components/brand/SignalTriangle";
import { DataInfrastructure } from "@/components/illustrations/DataInfrastructure";
import { Breadcrumbs } from "@/components/primitives/Breadcrumbs";
import { RelatedContent } from "@/components/primitives/RelatedContent";

export const metadata: Metadata = {
  title: "How we measure, The data science edge",
  description:
    "Seven data infrastructures, custom-built for legal and medical client work, running continuously. Operated by an in-house data science team.",
};

const SYSTEMS = [
  {
    n: "01",
    title: "Custom attribution dashboards",
    body: "A per-client dashboard that maps organic visibility to closed cases and patient revenue. Each engagement gets its own dashboard, instantiated from a template and tuned to the firm's CRM, calendar, and case-management software. Clients access in real time.",
    callout: "Clients receive: live dashboard, weekly snapshot, monthly board-ready report.",
  },
  {
    n: "02",
    title: "Custom rank tracking",
    body: "Built-in-house rank tracking against priority queries, run daily, with anomaly flagging. Not a vendor tool, a system tuned for legal and medical query structures, with weighted importance per practice area.",
    callout: "Clients receive: daily rank refresh, weekly delta report, anomaly alerts.",
  },
  {
    n: "03",
    title: "Call tracking & source attribution",
    body: "Every inbound call routed through a dynamic number insertion system. Source channel (organic, GMB, LSA, paid, direct) attributed to each call. Calls scored for qualification quality by a trained system.",
    callout: "Clients receive: call recordings, channel attribution, lead-quality scoring.",
  },
  {
    n: "04",
    title: "Revenue attribution (CRM integration)",
    body: "Direct integration with the firm's CRM (Clio, Salesforce Health, Practice Better, etc.) so that closed cases and patient revenue are attributed back to source channel. The dollar number, not the impression number, is what gets reported.",
    callout: "Clients receive: revenue-by-channel breakdown, ROI per dollar spent, attribution windows.",
  },
  {
    n: "05",
    title: "A/B testing infrastructure",
    body: "Ongoing tests across landing pages, CTAs, intake forms, and content formats. Run with proper statistical rigor, minimum sample sizes, confidence thresholds, segmentation. We move on data, not opinion.",
    callout: "Clients receive: test results documentation, decisions taken, winners deployed.",
  },
  {
    n: "06",
    title: "Cohort analysis",
    body: "Patient and case cohorts tracked over time. Acquisition channel, conversion path, lifetime value. Used to identify which acquisition strategies produce which kind of client, and which client segments compound through referrals.",
    callout: "Clients receive: cohort dashboards, LTV by channel, referral graph analysis.",
  },
  {
    n: "07",
    title: "Predictive modeling",
    body: "Forward-looking models for next-quarter opportunity identification. Built per-client, trained on engagement-specific data plus market signals. Used to allocate next-quarter effort toward highest-ROI opportunities.",
    callout: "Clients receive: quarterly predictive briefings, opportunity heatmaps, capacity planning.",
  },
];

export default function HowWeMeasurePage() {
  return (
    <article className="deep-page deep-page--ink">
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
                { label: "How we measure" },
              ]}
            />
            <div className="deep-page-masthead">
              Data infrastructure · Built in-house
            </div>
            <h1 className="deep-page-h1">Where most agencies guess, we measure.</h1>
            <p className="deep-page-subhead">
              Seven data infrastructures, custom-built for legal and medical
              client work, running continuously. Operated by an in-house data
              science team. This is what &ldquo;data-driven&rdquo; actually
              means.
            </p>
          </div>
          <div className="deep-page-hero-art">
            <DataInfrastructure />
          </div>
        </div>
      </section>

      {/* THE 7 SYSTEMS */}
      <section className="deep-page-section" style={{ maxWidth: "none", padding: "80px 64px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="deep-page-section-eyebrow">
            <SignalTriangle size={10} decorative />
            <span>The seven systems</span>
          </div>
          <h2 className="deep-page-section-h2" style={{ color: "var(--paper-text)" }}>
            Seven systems. Built in-house. Running continuously.
          </h2>
          <p className="deep-page-section-body" style={{ color: "var(--paper-muted)" }}>
            Each system is custom-built for our specific use case in legal and
            medical client work. Not vendor tools rebadged. Each system feeds
            data into the others, and into the weekly client report.
          </p>

          <div style={{ marginTop: 48 }}>
            {SYSTEMS.map((s) => (
              <article key={s.n} className="data-system">
                <div className="data-system-number">{s.n}</div>
                <div>
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                </div>
                <div className="data-system-callout">{s.callout}</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* DATA SCIENCE TEAM */}
      <section className="deep-page-section" style={{ background: "var(--paper)", color: "var(--ink-text)", maxWidth: "none", padding: "80px 64px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="deep-page-section-eyebrow">
            <SignalTriangle size={10} decorative />
            <span>The data science team</span>
          </div>
          <h2 className="deep-page-section-h2">In-house. Dedicated. Pedigreed.</h2>
          <p className="deep-page-section-body">
            The seven systems are built and maintained by a dedicated data
            science team operating in-house at Rysen. Pedigrees from Salesforce
            data science, attribution modeling at consumer brands, and
            statistical work in academia. Not a vendor relationship, a team
            that sits in standing meetings with the senior strategists every
            week.
          </p>
          <p className="deep-page-section-body" style={{ marginTop: 24 }}>
            Clients can request custom analyses any time. The team writes
            quarterly predictive briefings, runs cohort deep-dives on request,
            and surfaces signal that account strategists may miss.
          </p>
        </div>
      </section>

      {/* RELATED */}
      <RelatedContent
        context="paper"
        items={[
          {
            href: "/methodology",
            eyebrow: "Framework",
            title: "The First Position methodology",
            description: "Why data-first reporting is one of five pillars, and how it connects to the other four.",
          },
          {
            href: "/how-we-work",
            eyebrow: "Operations",
            title: "How operations run, weekly",
            description: "The 5-day cadence and what the team actually delivers to clients each week.",
          },
          {
            href: "/case-studies",
            eyebrow: "Engagements",
            title: "Selected case studies",
            description: "Real revenue attributed to source. The numbers are real because the data systems behind them are real.",
          },
        ]}
      />

      {/* CTA */}
      <section className="deep-page-cta">
        <div className="deep-page-cta-eyebrow">Ready to see the math?</div>
        <h2 className="deep-page-cta-heading">Request an audit. See what we measure.</h2>
        <p className="deep-page-cta-sub">
          Audit calls include a walkthrough of the dashboards a Rysen client
          actually receives. See the systems in action before you sign anything.
        </p>
        <Link href="/audit" className="deep-page-cta-button">
          Request an audit
        </Link>
        <p className="deep-page-cta-note">Average response time: 1 business day.</p>
      </section>
    </article>
  );
}
