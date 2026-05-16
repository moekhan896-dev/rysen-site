import type { Metadata } from "next";
import Link from "next/link";
import { AmbientTriangle } from "@/components/brand/AmbientTriangle";
import { SignalTriangle } from "@/components/brand/SignalTriangle";
import { ScalesOfJustice } from "@/components/illustrations/ScalesOfJustice";
import { Breadcrumbs } from "@/components/primitives/Breadcrumbs";
import { RelatedContent } from "@/components/primitives/RelatedContent";
import { InlineDetail } from "@/components/utilities/InlineDetail";

export const metadata: Metadata = {
  title: "Legal, The Legal Playbook",
  description:
    "A specialized playbook for boutique law firms in mid-sized metros. Long decision cycles, bar advertising compliance, trust-first conversion.",
};

const CHALLENGES = [
  {
    n: "01",
    title: "Long decision cycles",
    body: "Legal prospects don't convert in a week. Probate prospects research for months. Divorce prospects evaluate for weeks. The funnel must work over time, not in a single visit.",
    rysen: "Long-cycle nurturing via authority content and retargeting. Cohort tracking on first-touch to first-call windows. Sustained content that compounds visibility across the full decision window.",
  },
  {
    n: "02",
    title: "Trust-first conversion",
    body: "Legal services are bought on trust, not on price. The website, the reviews, the press, the partner credentials, all of it has to signal reliability before a phone call.",
    rysen: "Reputation moats, third-party review velocity, press placements, bar association recognition, and authority content all coordinated as one trust signal.",
  },
  {
    n: "03",
    title: "Geo-specific intent",
    body: "&ldquo;Probate lawyer Tampa&rdquo; is a different query than &ldquo;probate lawyer Florida.&rdquo; Statewide content dilutes local pack signal and rarely converts.",
    rysen: "Hyperlocal architecture per metro. Neighborhood-level GMB optimization. Per-suburb content libraries when relevant.",
  },
  {
    n: "04",
    title: "Bar compliance & advertising regulation",
    body: "Bar associations regulate attorney advertising state-by-state. Claims about outcomes, disclaimers, comparative language, all governed.",
    rysen: "Every state's bar advertising rules tracked. Content reviewed against jurisdiction-specific rules before deployment. Compliance documented per piece.",
  },
  {
    n: "05",
    title: "Practice-area specificity",
    body: "Marketing for probate is different than personal injury, which is different than family law. A generic legal-marketing playbook fails all three.",
    rysen: "Practice-area-specific playbooks, taxonomies, and content libraries. Specialist strategists for each major practice area we serve.",
  },
];

const PRACTICE_AREAS = [
  { name: "Personal Injury", desc: "High-intent, high-competition. Local pack dominance + reputation moat." },
  { name: "Family Law & Divorce", desc: "Long decision cycle, emotional sensitivity. Authority content + trust signals." },
  { name: "Estate Planning & Probate", desc: "Trust-first, generational audience. Authority + reputation + age-appropriate UX." },
  { name: "Criminal Defense", desc: "Urgent intent, geo-specific. GMB + response speed + crisis-appropriate copy." },
  { name: "Business & Corporate", desc: "Referral-heavy, LinkedIn-amplified. Press + thought leadership + relationship signals." },
  { name: "Immigration", desc: "Vulnerable audience, language-specific. Hyperlocal + multilingual + trust documentation." },
  { name: "Employment Law", desc: "Worker advocacy, plaintiff side. Authority content + worker-rights signaling + reviews." },
  { name: "Real Estate", desc: "Transaction-driven, agent-referral-heavy. Local SEO + agent partnerships + speed." },
  { name: "Bankruptcy", desc: "Sensitive audience, debt-stress decisioning. Empathetic copy + clarity + trust signals." },
];

const ENGINE_CONFIG = [
  { name: "Authority Content", weight: 95 },
  { name: "Google Business Profile (GMB)", weight: 90 },
  { name: "Reviews & Reputation", weight: 88 },
  { name: "Local SEO + Schema", weight: 85 },
  { name: "Google Local Service Ads", weight: 75 },
  { name: "AI Search Optimization", weight: 72 },
  { name: "Press & PR", weight: 70 },
  { name: "Website + CRO", weight: 65 },
  { name: "Email & Newsletter", weight: 40 },
  { name: "Social Media", weight: 30 },
];

export default function LegalPage() {
  return (
    <article className="deep-page">
      <section className="deep-page-hero">
        <div style={{ position: "absolute", top: 32, left: 32, opacity: 0.6 }}>
          <AmbientTriangle size={16} />
        </div>
        <div className="deep-page-hero-inner">
          <div className="deep-page-hero-text">
            <Breadcrumbs trail={[{ label: "Home", href: "/" }, { label: "Legal" }]} />
            <div className="deep-page-masthead">Vertical: Legal · The Legal Playbook</div>
            <h1 className="deep-page-h1">Built for law firms.</h1>
            <p className="deep-page-subhead">
              A specialized playbook for boutique law firms in mid-sized metros.
              Tuned for long decision cycles, bar advertising compliance, and
              the trust-first conversion dynamics specific to legal services.
            </p>
          </div>
          <div className="deep-page-hero-art">
            <ScalesOfJustice />
          </div>
        </div>
      </section>

      <section className="deep-page-section">
        <div className="deep-page-section-eyebrow">
          <SignalTriangle size={10} decorative />
          <span>Five challenges specific to legal</span>
        </div>
        <h2 className="deep-page-section-h2">Legal marketing isn&apos;t generic SEO.</h2>
        <div style={{ marginTop: 48 }}>
          {CHALLENGES.map((c) => (
            <div key={c.n} className="pillar-block">
              <div className="pillar-number">{c.n}</div>
              <div className="pillar-content">
                <h3>{c.title}</h3>
                <p>{c.body}</p>
                <div className="data-system-callout" style={{ background: "var(--paper-elevated)", color: "var(--ink-text)", borderLeft: "2px solid var(--signal)" }}>
                  <strong>The Rysen approach:</strong> {c.rysen}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="deep-page-section" style={{ background: "var(--paper-elevated)", maxWidth: "none", padding: "80px 64px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="deep-page-section-eyebrow">
            <SignalTriangle size={10} decorative />
            <span>The nine practice areas</span>
          </div>
          <h2 className="deep-page-section-h2">Specialized playbooks per practice area.</h2>
          <div className="practice-grid">
            {PRACTICE_AREAS.map((p, i) => (
              <div key={p.name} className="practice-card">
                <div className="practice-card-number">{String(i + 1).padStart(2, "0")}</div>
                <h3 className="practice-card-name">{p.name}</h3>
                <p className="practice-card-desc">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="deep-page-section">
        <div className="deep-page-section-eyebrow">
          <SignalTriangle size={10} decorative />
          <span>Engine configuration · Legal</span>
        </div>
        <h2 className="deep-page-section-h2">The legal-weighted engine.</h2>
        <p className="deep-page-section-body">
          The same ten components, weighted differently for legal clients vs.
          medical. Higher emphasis on{" "}
          <InlineDetail detail="Legal prospects spend weeks researching before hiring. Authority content (state law explainers, process guides, case-type FAQs) compounds visibility across that decision window where ad spend cannot.">
            authority content
          </InlineDetail>
          , reviews, and{" "}
          <InlineDetail detail="Bar advertising rules vary state by state. Our compliance review tracks the rules in every state our clients practice in, so attorney-marketing claims, disclaimers, and comparative language stay defensible.">
            bar-aware GMB
          </InlineDetail>
          , lower on social and email, than the medical configuration.
        </p>
        <div className="engine-config" style={{ marginTop: 40 }}>
          {ENGINE_CONFIG.map((c) => (
            <div key={c.name} className="engine-config-row">
              <span className="engine-config-name">{c.name}</span>
              <div className="engine-config-bar">
                <div
                  className="engine-config-bar-fill"
                  style={{ width: `${c.weight}%` }}
                />
              </div>
              <span className="engine-config-weight">{c.weight}%</span>
            </div>
          ))}
        </div>
      </section>

      <section className="deep-page-section" style={{ background: "var(--paper-elevated)", maxWidth: "none", padding: "80px 64px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="deep-page-section-eyebrow">
            <SignalTriangle size={10} decorative />
            <span>Selected legal case studies</span>
          </div>
          <h2 className="deep-page-section-h2">Real legal engagements.</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24, marginTop: 40 }}>
            {[
              { href: "/case-studies/aws-law-firm", eyebrow: "Probate · Tampa, FL", title: "AWS Law Firm", desc: "From page two to #1 in 8 months. 52% AI citation rate." },
              { href: "/case-studies/tyler-family-law", eyebrow: "Divorce · Atlanta, GA", title: "Tyler Family Law", desc: "+1,240% lead growth, #1 ranking, 4-week intake waitlist." },
              { href: "/case-studies/coleman-co", eyebrow: "Estate · Los Angeles, CA", title: "Coleman & Co.", desc: "+320% qualified HNW leads, #1 across LA estate queries." },
            ].map((cs) => (
              <Link key={cs.href} href={cs.href} className="practice-card" style={{ display: "block", textDecoration: "none", color: "inherit" }}>
                <div className="practice-card-number">{cs.eyebrow}</div>
                <h3 className="practice-card-name">{cs.title}</h3>
                <p className="practice-card-desc">{cs.desc}</p>
                <div style={{ marginTop: 16, color: "var(--signal)", fontSize: 13, fontWeight: 500 }}>Read case study →</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <RelatedContent
        items={[
          { href: "/medical", eyebrow: "Vertical", title: "The Medical Playbook", description: "How the engine reconfigures for medical practices." },
          { href: "/methodology", eyebrow: "Framework", title: "First Position", description: "The five pillars that underpin every playbook." },
          { href: "/case-studies", eyebrow: "Engagements", title: "All case studies", description: "Browse legal and medical engagements." },
        ]}
      />

      <section className="deep-page-cta">
        <div className="deep-page-cta-eyebrow">Run a law firm?</div>
        <h2 className="deep-page-cta-heading">Request an audit.</h2>
        <p className="deep-page-cta-sub">
          We audit law firms against the Legal Playbook and the First Position
          framework. The call surfaces your firm&apos;s biggest organic
          opportunity, with or without an engagement.
        </p>
        <Link href="/audit" className="deep-page-cta-button">Request an audit</Link>
        <p className="deep-page-cta-note">Average response time: 1 business day.</p>
      </section>
    </article>
  );
}
