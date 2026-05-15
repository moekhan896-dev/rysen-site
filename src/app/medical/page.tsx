import type { Metadata } from "next";
import Link from "next/link";
import { AmbientTriangle } from "@/components/brand/AmbientTriangle";
import { SignalTriangle } from "@/components/brand/SignalTriangle";
import { MedicalCaduceus } from "@/components/illustrations/MedicalCaduceus";
import { Breadcrumbs } from "@/components/primitives/Breadcrumbs";
import { RelatedContent } from "@/components/primitives/RelatedContent";

export const metadata: Metadata = {
  title: "Medical — The Medical Playbook",
  description:
    "A specialized playbook for medical practices. HIPAA-compliant marketing, insurance-aware funnels, patient privacy. Nine specialties served.",
};

const CHALLENGES = [
  {
    n: "01",
    title: "HIPAA-compliant marketing",
    body: "Patient data is regulated. Before-and-after content, testimonials, reviews — all bounded by privacy rules that most agencies don't think through.",
    rysen: "Per-engagement HIPAA review of every public asset. Compliant before/after frameworks. Review request flows that don't expose PHI.",
  },
  {
    n: "02",
    title: "Insurance-aware funnels",
    body: "Most medical conversions hinge on insurance acceptance. A funnel that ignores insurance compatibility wastes leads and frustrates intake.",
    rysen: "Insurance acceptance surfaced in intake flow. Provider eligibility tools. Filtered lead routing so only qualified prospects reach the front desk.",
  },
  {
    n: "03",
    title: "Patient privacy in content",
    body: "Practices share case stories. Some do it wrong. Patient identifiers, unconsented imagery, or even contextual giveaways violate trust and regulation.",
    rysen: "Documented consent workflows. Anonymized case formatting. Review response templates that never reference PHI.",
  },
  {
    n: "04",
    title: "Specialty-specific dynamics",
    body: "Dermatology marketing isn&apos;t orthopedics marketing. Cosmetic procedures convert differently than chronic care. A generic medical playbook fails both.",
    rysen: "Per-specialty playbooks, taxonomies, and intake patterns. Specialist strategists for each specialty we serve.",
  },
  {
    n: "05",
    title: "Multi-location complexity",
    body: "Medical practices often have multiple locations. Each location needs its own GMB, its own neighborhood content, and its own review flow — coordinated, not duplicated.",
    rysen: "Network-level GMB optimization. Per-location content. Coordinated review velocity. Same playbook deployed locally, not just nationally.",
  },
];

const SPECIALTIES = [
  { name: "Dermatology", desc: "Cosmetic + medical. Reviews + before/after compliance + GMB per location." },
  { name: "Dental", desc: "Multi-location, neighborhood-specific. Implants, cosmetic, family — different funnels." },
  { name: "Chiropractic", desc: "Pain-driven intent, local-pack heavy. Schema + reviews + neighborhood content." },
  { name: "Plastic Surgery", desc: "HNW audience, high-trust threshold. Authority + reviews + portfolio compliance." },
  { name: "Cardiology", desc: "Referral-driven, age-skewed. Authority + insurance + senior-appropriate UX." },
  { name: "Orthopedics", desc: "Sport + injury + chronic. Multi-funnel design, specialist sub-pages." },
  { name: "Family Medicine", desc: "Insurance-aware, neighborhood-loyal. GMB + reviews + community signal." },
  { name: "Pediatrics", desc: "Parent decision-maker, trust-first. Reviews + content + GMB family signals." },
  { name: "Mental Health", desc: "Sensitivity-first, search-intent-niche. Compliant copy + insurance + privacy." },
];

const ENGINE_CONFIG = [
  { name: "Google Business Profile (GMB)", weight: 92 },
  { name: "Reviews & Reputation", weight: 92 },
  { name: "Local SEO + Schema", weight: 88 },
  { name: "Website + CRO", weight: 82 },
  { name: "Authority Content", weight: 78 },
  { name: "AI Search Optimization", weight: 70 },
  { name: "Google Local Service Ads", weight: 60 },
  { name: "Email & Newsletter", weight: 55 },
  { name: "Press & PR", weight: 48 },
  { name: "Social Media", weight: 45 },
];

export default function MedicalPage() {
  return (
    <article className="deep-page">
      <section className="deep-page-hero">
        <div style={{ position: "absolute", top: 32, left: 32, opacity: 0.6 }}>
          <AmbientTriangle size={16} />
        </div>
        <div className="deep-page-hero-inner">
          <div className="deep-page-hero-text">
            <Breadcrumbs trail={[{ label: "Home", href: "/" }, { label: "Medical" }]} />
            <div className="deep-page-masthead">Vertical: Medical · The Medical Playbook</div>
            <h1 className="deep-page-h1">Built for medical practices.</h1>
            <p className="deep-page-subhead">
              A specialized playbook for medical practices. HIPAA-aware
              marketing, insurance-compatible funnels, and the patient-privacy
              dynamics specific to healthcare services.
            </p>
          </div>
          <div className="deep-page-hero-art">
            <MedicalCaduceus />
          </div>
        </div>
      </section>

      <section className="deep-page-section">
        <div className="deep-page-section-eyebrow">
          <SignalTriangle size={10} decorative />
          <span>Five challenges specific to medical</span>
        </div>
        <h2 className="deep-page-section-h2">Medical marketing isn&apos;t generic SEO.</h2>
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
            <span>The nine specialties</span>
          </div>
          <h2 className="deep-page-section-h2">Specialized playbooks per specialty.</h2>
          <div className="practice-grid">
            {SPECIALTIES.map((s, i) => (
              <div key={s.name} className="practice-card">
                <div className="practice-card-number">{String(i + 1).padStart(2, "0")}</div>
                <h3 className="practice-card-name">{s.name}</h3>
                <p className="practice-card-desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="deep-page-section">
        <div className="deep-page-section-eyebrow">
          <SignalTriangle size={10} decorative />
          <span>Engine configuration · Medical</span>
        </div>
        <h2 className="deep-page-section-h2">The medical-weighted engine.</h2>
        <p className="deep-page-section-body">
          Higher GMB and reviews weighting than legal — medical practices live
          and die by local pack dominance and review velocity. Content
          weighting still strong, but slightly behind legal&apos;s authority
          emphasis.
        </p>
        <div className="engine-config" style={{ marginTop: 40 }}>
          {ENGINE_CONFIG.map((c) => (
            <div key={c.name} className="engine-config-row">
              <span className="engine-config-name">{c.name}</span>
              <div className="engine-config-bar">
                <div className="engine-config-bar-fill" style={{ width: `${c.weight}%` }} />
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
            <span>Selected medical case studies</span>
          </div>
          <h2 className="deep-page-section-h2">Real medical engagements.</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 24, marginTop: 40 }}>
            {[
              { href: "/case-studies/hartman-dermatology", eyebrow: "Dermatology · Miami, FL", title: "Hartman Dermatology", desc: "+78% cosmetic consultations, #1 Miami queries, 38% AI citation rate." },
              { href: "/case-studies/ridge-dental", eyebrow: "Dental · Chicago, IL", title: "Ridge Dental", desc: "+186% new patient calls, #1 across 5 Chicago neighborhoods." },
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
          { href: "/legal", eyebrow: "Vertical", title: "The Legal Playbook", description: "How the engine reconfigures for law firms." },
          { href: "/methodology", eyebrow: "Framework", title: "First Position", description: "The five pillars that underpin every playbook." },
          { href: "/case-studies", eyebrow: "Engagements", title: "All case studies", description: "Browse legal and medical engagements." },
        ]}
      />

      <section className="deep-page-cta">
        <div className="deep-page-cta-eyebrow">Run a medical practice?</div>
        <h2 className="deep-page-cta-heading">Request an audit.</h2>
        <p className="deep-page-cta-sub">
          We audit medical practices against the Medical Playbook and the First
          Position framework. The call surfaces your practice&apos;s biggest
          organic opportunity, with or without an engagement.
        </p>
        <Link href="/audit" className="deep-page-cta-button">Request an audit</Link>
        <p className="deep-page-cta-note">Average response time: 1 business day.</p>
      </section>
    </article>
  );
}
