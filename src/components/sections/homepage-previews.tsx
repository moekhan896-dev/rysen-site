import Link from "next/link";
import { AmbientTriangle } from "@/components/brand/AmbientTriangle";
import { SignalTriangle } from "@/components/brand/SignalTriangle";
import { TechDocCard } from "@/components/cards/TechDocCard";
import { DataRow } from "@/components/cards/DataRow";
import { EngineArchitecture } from "@/components/illustrations/EngineArchitecture";
import { ScalesOfJustice } from "@/components/illustrations/ScalesOfJustice";
import { MedicalCaduceus } from "@/components/illustrations/MedicalCaduceus";
import { ContinueReading } from "@/components/primitives/ContinueReading";

/* ============================================================
   3. WHO RUNS RYSEN PREVIEW (ink)
   ============================================================ */

const CREDENTIALS: ReadonlyArray<{
  specId: string;
  category: string;
  title: string;
  desc: string;
}> = [
  {
    specId: "OPS-01",
    category: "Founders",
    title: "Brand operators",
    desc: "Senior team founded Quattro Labs, The Honest Plumbers, and grew Madison Clark — an AI persona — to 100M+ views in 60 days.",
  },
  {
    specId: "OPS-02",
    category: "Backgrounds",
    title: "Senior pedigrees",
    desc: "Strategists with Salesforce, Roku, big-agency operator backgrounds. Ross School of Business. NASA recognition.",
  },
  {
    specId: "OPS-03",
    category: "In-house",
    title: "Data science team",
    desc: "An in-house team builds custom attribution dashboards, runs cohort analysis, develops predictive models per client.",
  },
];

export function WhoRunsRysenPreview() {
  return (
    <section
      className="preview-section preview-section--ink"
      aria-label="Who runs Rysen"
      data-context="ink"
    >
      <div className="section-corner-mark">
        <AmbientTriangle size={16} />
      </div>
      <div className="preview-section-inner">
        <div className="section-eyebrow on-ink">
          <SignalTriangle size={10} decorative />
          <span className="eyebrow-rule" aria-hidden="true" />
          <span className="eyebrow-text">Who runs Rysen</span>
        </div>
        <h2 className="preview-section-heading">
          Operators run this firm. Not consultants.
        </h2>
        <p className="preview-section-intro">
          Most marketing agencies are run by people who have never built a
          brand. Rysen is different. Our senior team has founded and operated
          brands of their own — and brings that operator perspective to every
          client engagement, backed by an{" "}
          <Link href="/how-we-measure" className="text-link">
            in-house data science team
          </Link>
          .
        </p>
        <div className="who-runs-grid">
          {CREDENTIALS.map((c) => (
            <TechDocCard
              key={c.specId}
              specId={c.specId}
              category={c.category}
              title={c.title}
              description={c.desc}
              context="ink"
            />
          ))}
        </div>
        <ContinueReading href="/about" label="Read about the leadership" context="ink" />
      </div>
    </section>
  );
}

/* ============================================================
   5. ORGANIC GROWTH ENGINE PREVIEW (ink)
   ============================================================ */

export function OrganicEnginePreview() {
  return (
    <section className="preview-section preview-section--ink" aria-label="The Organic Growth Engine">
      <div className="section-corner-mark">
        <AmbientTriangle size={16} />
      </div>
      <div className="preview-section-inner">
        <div className="section-eyebrow on-ink">
          <SignalTriangle size={10} decorative />
          <span className="eyebrow-rule" aria-hidden="true" />
          <span className="eyebrow-text">The methodology</span>
        </div>
        <div className="oge-preview-grid">
          <div>
            <h2 className="preview-section-heading">
              We don&apos;t sell components. We build engines.
            </h2>
            <p className="preview-section-intro">
              Most agencies sell SEO, or content, or GMB management — as
              separate services with separate reports. Rysen treats all ten
              components as one coordinated system, engineered to compound.
              When one component improves, all others amplify.
            </p>
            <ContinueReading href="/methodology" label="Read the full methodology" context="ink" />
          </div>
          <div>
            <EngineArchitecture />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   6. TEN COMPONENTS PREVIEW (paper)
   ============================================================ */

const TEN_COMPONENTS: ReadonlyArray<{ name: string; desc: string }> = [
  { name: "Google Local Service Ads", desc: "Pre-vetted lead generation through Google Screened." },
  { name: "Google Business Profile", desc: "GMB rebuilt as a network-level asset, not a one-off listing." },
  { name: "Website & CRO", desc: "Conversion-engineered pages tuned to legal & medical intake patterns." },
  { name: "AI search optimization", desc: "Entity, schema, and content engineered for ChatGPT / Perplexity / AI Overviews." },
  { name: "Authority content", desc: "Long-form articles that earn featured snippets and AI citations." },
  { name: "Reputation management", desc: "Review velocity systems plus response operations." },
  { name: "Press & PR outreach", desc: "Publication placements and authority signals secured." },
  { name: "Schema & technical SEO", desc: "LegalService, Physician, Attorney entity work." },
  { name: "Email & newsletter", desc: "List-aware nurturing tied to long legal & medical decision cycles." },
  { name: "Social media growth", desc: "Platform-tuned brand presence, not generic posting." },
];

export function TenComponentsPreview() {
  return (
    <section
      className="preview-section preview-section--paper"
      aria-label="The ten components"
      data-context="paper"
    >
      <div className="section-corner-mark">
        <AmbientTriangle size={16} />
      </div>
      <div className="preview-section-inner">
        <div className="section-eyebrow">
          <SignalTriangle size={10} decorative />
          <span className="eyebrow-rule" aria-hidden="true" />
          <span className="eyebrow-text">The ten components</span>
        </div>
        <h2 className="preview-section-heading">
          Ten coordinated services. One unified engine.
        </h2>
        <p className="preview-section-intro">
          Each component has its own playbook, its own team, and its own data
          dashboard. They run together as a system. Here&apos;s the index.
        </p>
        <div className="ten-components-rows">
          {TEN_COMPONENTS.map((c, i) => (
            <DataRow
              key={c.name}
              number={String(i + 1).padStart(2, "0")}
              title={c.name}
              description={c.desc}
            />
          ))}
        </div>
        <ContinueReading href="/services" label="Explore all ten components" context="paper" />
      </div>
    </section>
  );
}

/* ============================================================
   7. SELECTED ENGAGEMENTS (paper)
   ============================================================ */

const FEATURED_CASES: ReadonlyArray<{
  specId: string;
  href: string;
  badge: string;
  firm: string;
  challenge: string;
  stats: ReadonlyArray<{ value: string; label: string }>;
}> = [
  {
    specId: "CS-001",
    href: "/case-studies/aws-law-firm",
    badge: "Legal · Probate · Tampa, FL",
    firm: "AWS Law Firm",
    challenge:
      "Tampa probate firm with two decades of experience but no online presence. From page two to position one.",
    stats: [
      { value: "+240%", label: "consultations" },
      { value: "#1", label: "priority queries" },
      { value: "52%", label: "AI citation rate" },
    ],
  },
  {
    specId: "CS-002",
    href: "/case-studies/tyler-family-law",
    badge: "Legal · Divorce · Atlanta, GA",
    firm: "Tyler Family Law",
    challenge:
      "Three other agencies said ranking against national divorce-firm chains was impossible. Eight months later, #1 with a 4-week waitlist.",
    stats: [
      { value: "+1,240%", label: "lead growth" },
      { value: "#1", label: "priority queries" },
      { value: "4-wk", label: "intake waitlist" },
    ],
  },
  {
    specId: "CS-003",
    href: "/case-studies/hartman-dermatology",
    badge: "Medical · Dermatology · Miami, FL",
    firm: "Hartman Dermatology",
    challenge:
      "Miami cosmetic dermatology practice with strong clinical reputation but page-two visibility. Now Miami's go-to.",
    stats: [
      { value: "+78%", label: "consultations" },
      { value: "#1", label: "Miami queries" },
      { value: "38%", label: "AI citation rate" },
    ],
  },
];

const ENGAGEMENT_STATS = "30+ active engagements · Average tenure: 18 months · Median revenue lift: 240%";

export function SelectedEngagementsPreview() {
  return (
    <section
      className="preview-section preview-section--paper"
      aria-label="Selected engagements"
      data-context="paper"
    >
      <div className="section-corner-mark">
        <AmbientTriangle size={16} />
      </div>
      <div className="preview-section-inner">
        <div className="section-eyebrow">
          <SignalTriangle size={10} decorative />
          <span className="eyebrow-rule" aria-hidden="true" />
          <span className="eyebrow-text">Selected engagements</span>
        </div>
        <h2 className="preview-section-heading">
          Real revenue, attributed to source.
        </h2>
        <p className="preview-section-intro">
          Selected engagements from{" "}
          <Link href="/case-studies" className="text-link">
            active client work
          </Link>
          . Each represents a specific challenge, a{" "}
          <Link href="/methodology" className="text-link">
            specific approach
          </Link>
          , and a specific measurable result reported in dollars rather than
          impressions.
        </p>
        <div className="engagement-stats-strip">{ENGAGEMENT_STATS}</div>
        <div className="selected-cases-grid">
          {FEATURED_CASES.map((c) => (
            <TechDocCard
              key={c.specId}
              specId={c.specId}
              category={c.badge}
              title={c.firm}
              description={c.challenge}
              metrics={c.stats}
              href={c.href}
              linkLabel="Read full case study"
            />
          ))}
        </div>
        <ContinueReading href="/case-studies" label="View all case studies" context="paper" />
      </div>
    </section>
  );
}

/* ============================================================
   8. DATA SCIENCE EDGE PREVIEW (ink)
   ============================================================ */

const DATA_TILES: ReadonlyArray<{
  specId: string;
  category: string;
  title: string;
  desc: string;
}> = [
  { specId: "DS-01", category: "System 01", title: "Custom attribution", desc: "Per-client dashboards mapping organic to revenue." },
  { specId: "DS-02", category: "System 02", title: "Custom rank tracking", desc: "Daily refresh, anomaly flagging, query-weighted." },
  { specId: "DS-03", category: "System 03", title: "Call tracking", desc: "Dynamic number insertion, source attribution, quality scoring." },
  { specId: "DS-04", category: "System 04", title: "Revenue attribution", desc: "Direct CRM integration. Channel-to-revenue." },
  { specId: "DS-05", category: "System 05", title: "A/B testing", desc: "Statistical rigor on landing pages, intake, content." },
  { specId: "DS-06", category: "System 06", title: "Cohort analysis", desc: "Acquisition channel → LTV, segment by segment." },
  { specId: "DS-07", category: "System 07", title: "Predictive modeling", desc: "Forward-looking opportunity briefings." },
];

export function DataScienceEdgePreview() {
  return (
    <section
      className="preview-section preview-section--ink"
      aria-label="The data science edge"
      data-context="ink"
    >
      <div className="section-corner-mark">
        <AmbientTriangle size={16} />
      </div>
      <div className="preview-section-inner">
        <div className="section-eyebrow on-ink">
          <SignalTriangle size={10} decorative />
          <span className="eyebrow-rule" aria-hidden="true" />
          <span className="eyebrow-text">The data science edge</span>
        </div>
        <h2 className="preview-section-heading">
          Where most agencies guess, we measure.
        </h2>
        <p className="preview-section-intro">
          Most agencies have spreadsheets. Rysen has systems. Seven data
          infrastructures run continuously for every client engagement. Every
          channel measured. Every dollar attributed. Every decision sourced
          from real numbers.
        </p>
        <div className="data-tiles-grid-cards">
          {DATA_TILES.map((t) => (
            <TechDocCard
              key={t.specId}
              specId={t.specId}
              category={t.category}
              title={t.title}
              description={t.desc}
              context="ink"
            />
          ))}
        </div>
        <ContinueReading href="/how-we-measure" label="Read how we measure" context="ink" />
      </div>
    </section>
  );
}

/* ============================================================
   9. VERTICALS WE SERVE (paper)
   ============================================================ */

export function VerticalsWeServe() {
  return (
    <section className="preview-section preview-section--paper" aria-label="Verticals we serve">
      <div className="section-corner-mark">
        <AmbientTriangle size={16} />
      </div>
      <div className="preview-section-inner">
        <div className="section-eyebrow">
          <SignalTriangle size={10} decorative />
          <span className="eyebrow-rule" aria-hidden="true" />
          <span className="eyebrow-text">Vertical expertise</span>
        </div>
        <h2 className="preview-section-heading">
          Two verticals. Distinct playbooks.
        </h2>
        <p className="preview-section-intro">
          Other agencies serve restaurants, retail, e-commerce, and home
          services. We don&apos;t. Every playbook is tuned for the specific
          challenges of legal or medical practice marketing — and they&apos;re
          tuned differently.
        </p>
        <div className="verticals-grid verticals-grid--3up">
          <article className="vertical-card">
            <div className="vertical-card-art">
              <ScalesOfJustice />
            </div>
            <div className="section-eyebrow" style={{ marginBottom: 8 }}>
              <SignalTriangle size={8} decorative />
              <span className="eyebrow-text">Vertical: Legal</span>
            </div>
            <h3 className="vertical-card-heading">Built for law firms.</h3>
            <ul className="signal-list vertical-card-bullets">
              <li>Long decision cycles, trust-first conversion</li>
              <li>Bar advertising compliance, state-by-state</li>
              <li>9 practice areas served</li>
            </ul>
            <Link href="/legal" className="vertical-card-cta">
              Read the Legal Playbook
              <SignalTriangle size={9} decorative />
            </Link>
          </article>
          <article className="vertical-card">
            <div className="vertical-card-art">
              <MedicalCaduceus />
            </div>
            <div className="section-eyebrow" style={{ marginBottom: 8 }}>
              <SignalTriangle size={8} decorative />
              <span className="eyebrow-text">Vertical: Medical</span>
            </div>
            <h3 className="vertical-card-heading">Built for medical practices.</h3>
            <ul className="signal-list vertical-card-bullets">
              <li>HIPAA-compliant marketing, insurance-aware funnels</li>
              <li>Patient privacy in content and reviews</li>
              <li>9 specialties served</li>
            </ul>
            <Link href="/medical" className="vertical-card-cta">
              Read the Medical Playbook
              <SignalTriangle size={9} decorative />
            </Link>
          </article>
          <article className="vertical-card vertical-card--special">
            <div className="vertical-card-art vertical-card-art--placeholder">
              <span aria-hidden="true" className="vertical-card-art-mark">+</span>
            </div>
            <div className="section-eyebrow" style={{ marginBottom: 8 }}>
              <SignalTriangle size={8} decorative />
              <span className="eyebrow-text">Special engagements</span>
            </div>
            <h3 className="vertical-card-heading">Beyond legal &amp; medical.</h3>
            <ul className="signal-list vertical-card-bullets">
              <li>Brand-building outside the two core verticals</li>
              <li>Operator-led growth demonstrations</li>
              <li>Madison Clark — the AI persona — is one such engagement</li>
            </ul>
            <Link
              href="/case-studies/madison-clark"
              className="vertical-card-cta"
            >
              Read the Madison Clark case
              <SignalTriangle size={9} decorative />
            </Link>
          </article>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   10. MADISON CLARK PREVIEW (ink)
   ============================================================ */

export function MadisonClarkPreview() {
  return (
    <section className="preview-section preview-section--ink" aria-label="Madison Clark case study">
      <div className="section-corner-mark">
        <AmbientTriangle size={16} />
      </div>
      <div className="preview-section-inner">
        <div className="section-eyebrow on-ink">
          <SignalTriangle size={10} decorative />
          <span className="eyebrow-rule" aria-hidden="true" />
          <span className="eyebrow-text">Growth capability, proven</span>
        </div>
        <h2 className="preview-section-heading">
          We grew an AI persona to 100M views in 60 days.
        </h2>
        <p className="preview-section-intro">
          Same team. Same data discipline. Applied to a completely different
          surface. If we can do this for an AI persona starting from zero,
          imagine what we can do for your law firm or medical practice — which
          already has years of authority to amplify.
        </p>
        <div className="madison-preview-metrics">
          <div className="madison-preview-metric">
            <div className="madison-preview-value">100M+</div>
            <div className="madison-preview-label">views in 60 days</div>
          </div>
          <div className="madison-preview-metric">
            <div className="madison-preview-value">850K</div>
            <div className="madison-preview-label">followers from zero</div>
          </div>
          <div className="madison-preview-metric">
            <div className="madison-preview-value">$0</div>
            <div className="madison-preview-label">ad spend · 100% organic</div>
          </div>
        </div>
        <ContinueReading
          href="/case-studies/madison-clark"
          label="Read the Madison Clark case study"
          context="ink"
        />
      </div>
    </section>
  );
}

/* ============================================================
   11. HOW WE WORK PREVIEW (paper)
   ============================================================ */

const COMPACT_DAYS: ReadonlyArray<{ eyebrow: string; title: string; desc: string; dow: number }> = [
  { dow: 1, eyebrow: "Monday", title: "Data sync", desc: "Dashboards refresh. Anomalies flagged." },
  { dow: 2, eyebrow: "Tuesday", title: "Strategy review", desc: "Every account reviewed. Decisions documented." },
  { dow: 3, eyebrow: "Wednesday", title: "Production", desc: "Content, links, GMB posts, schema deployed." },
  { dow: 4, eyebrow: "Thursday", title: "QA + ship", desc: "Senior strategist signs off on every output." },
  { dow: 5, eyebrow: "Friday", title: "Reports + retro", desc: "Reports sent. Retro on what worked." },
];

export function HowWeWorkPreview() {
  return (
    <section className="preview-section preview-section--paper" aria-label="How we work">
      <div className="section-corner-mark">
        <AmbientTriangle size={16} />
      </div>
      <div className="preview-section-inner">
        <div className="section-eyebrow">
          <SignalTriangle size={10} decorative />
          <span className="eyebrow-rule" aria-hidden="true" />
          <span className="eyebrow-text">How we work</span>
        </div>
        <h2 className="preview-section-heading">
          Weekly cadence. Standing since 2019.
        </h2>
        <p className="preview-section-intro">
          Real operations require real cadence. Rysen runs a standing 5-day
          weekly rhythm: data sync Monday, strategy Tuesday, production
          Wednesday, QA Thursday, client reports Friday. The kind of operating
          discipline most agencies say they have but few actually maintain.
        </p>
        <div className="how-we-work-preview-grid">
          {COMPACT_DAYS.map((d) => (
            <div key={d.eyebrow} className="how-we-work-preview-card">
              <div className="how-we-work-preview-eyebrow">{d.eyebrow}</div>
              <div className="how-we-work-preview-title">{d.title}</div>
              <div className="how-we-work-preview-desc">{d.desc}</div>
            </div>
          ))}
        </div>
        <ContinueReading href="/how-we-work" label="Read about our operations" context="paper" />
      </div>
    </section>
  );
}

/* ============================================================
   12. FINAL CTA (paper)
   ============================================================ */

export function FinalCTAPreview() {
  return (
    <section className="preview-section preview-section--paper preview-section--final-cta" aria-label="Final CTA">
      <div className="preview-section-inner" style={{ textAlign: "center", maxWidth: 720 }}>
        <div className="section-eyebrow" style={{ justifyContent: "center" }}>
          <SignalTriangle size={10} decorative />
          <span className="eyebrow-rule" aria-hidden="true" />
          <span className="eyebrow-text">Ready to begin?</span>
        </div>
        <h2
          className="preview-section-heading"
          style={{ textAlign: "center", marginLeft: "auto", marginRight: "auto" }}
        >
          Request an audit. Decide if we&apos;re a fit.
        </h2>
        <p className="preview-section-intro" style={{ textAlign: "center", margin: "0 auto 32px" }}>
          Every engagement starts with an audit call. We review your current
          marketing position, your competitive landscape, and your growth
          opportunity. If we&apos;re a fit, we&apos;ll propose an engagement. If
          we&apos;re not, we&apos;ll tell you that on the call.
        </p>
        <Link href="/audit" className="deep-page-cta-button">
          Request an audit
        </Link>
        <p className="deep-page-cta-note">Average response time: 1 business day.</p>
      </div>
    </section>
  );
}
