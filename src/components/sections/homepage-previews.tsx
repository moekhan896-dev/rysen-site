import Link from "next/link";
import { AmbientTriangle } from "@/components/brand/AmbientTriangle";
import { SignalTriangle } from "@/components/brand/SignalTriangle";
import { FeatureCard } from "@/components/cards/FeatureCard";
import { FactCard } from "@/components/cards/FactCard";
import { EngineArchitecture } from "@/components/illustrations/EngineArchitecture";
import { ScalesOfJusticeAnimated } from "@/components/illustrations/ScalesOfJusticeAnimated";
import { StethoscopeAnimated } from "@/components/illustrations/StethoscopeAnimated";
import { ContinueReading } from "@/components/primitives/ContinueReading";
import { InlineDetail } from "@/components/utilities/InlineDetail";
import { MaskRevealHeading } from "@/components/utilities/MaskRevealHeading";

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
    desc: "Senior team founded Quattro Labs, The Honest Plumbers, and grew Madison Clark, an AI persona, to 100M+ views in 60 days.",
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
        <MaskRevealHeading as="h2" className="preview-section-heading">
          Operators run this firm. Not consultants.
        </MaskRevealHeading>
        <p className="preview-section-intro">
          Most marketing agencies are run by people who have never built a
          brand. Rysen is different. Our senior team has founded and operated{" "}
          <InlineDetail detail="Quattro Labs (150K+ Instagram followers), The Honest Plumbers (active service brand), and the Madison Clark AI persona (100M views in 60 days) were all built by senior operators on the team.">
            brands of their own
          </InlineDetail>
          , and brings that operator perspective to every client engagement,
          backed by an{" "}
          <InlineDetail detail="The data science team builds custom attribution dashboards, runs cohort analysis, and develops predictive models per client. Not vendor tools, rebadged.">
            in-house data science team
          </InlineDetail>
          .
        </p>
        <div className="who-runs-feature-grid">
          {CREDENTIALS.map((c) => (
            <FeatureCard
              key={c.specId}
              kicker={c.category}
              title={c.title}
              lead={c.desc}
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
              Most agencies sell SEO, or content, or GMB management, as
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
            <FactCard
              key={c.name}
              title={c.name}
              description={c.desc}
              number={String(i + 1).padStart(2, "0")}
              unit="of ten"
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
        <MaskRevealHeading as="h2" className="preview-section-heading">
          Real revenue, attributed to source.
        </MaskRevealHeading>
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
        <div className="selected-features-grid">
          {FEATURED_CASES.map((c) => (
            <FeatureCard
              key={c.specId}
              kicker={c.badge}
              title={c.firm}
              lead={
                <>
                  {c.challenge}
                </>
              }
              sidebar={c.stats.map((s) => ({
                label: s.label,
                value: s.value,
              }))}
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

interface DataFact {
  title: string;
  qualifier: string;
  description: string;
  number: string;
  unit: string;
}

const DATA_FACTS: ReadonlyArray<DataFact> = [
  {
    title: "Custom attribution",
    qualifier: "built per client",
    description: "Every channel measured. Every dollar tied back to attributed revenue. Updated live, reviewed weekly.",
    number: "7",
    unit: "data systems",
  },
  {
    title: "Custom rank tracking",
    qualifier: "daily refresh",
    description: "Anomaly flagging, query-weighted by priority. Not a vendor tool. Tuned for legal and medical query structures.",
    number: "1k+",
    unit: "queries tracked",
  },
  {
    title: "Call tracking",
    qualifier: "source attribution",
    description: "Dynamic number insertion routes every inbound call to a source channel. Calls scored for qualification quality.",
    number: "100%",
    unit: "calls attributed",
  },
  {
    title: "Revenue attribution",
    qualifier: "CRM integration",
    description: "Direct integration with Clio, Salesforce Health, Practice Better. Closed cases tied back to acquisition channel.",
    number: "$",
    unit: "channel to revenue",
  },
  {
    title: "A/B testing",
    qualifier: "statistical rigor",
    description: "Landing pages, intake forms, content formats. Minimum sample sizes, confidence thresholds, segmentation.",
    number: "95%",
    unit: "confidence floor",
  },
  {
    title: "Cohort analysis",
    qualifier: "lifetime value",
    description: "Patient and case cohorts tracked over time. Acquisition channel to LTV to referral graph.",
    number: "LTV",
    unit: "by channel",
  },
  {
    title: "Predictive modeling",
    qualifier: "quarterly briefings",
    description: "Forward-looking opportunity identification trained on engagement-specific data plus market signals.",
    number: "Q+",
    unit: "next-quarter horizon",
  },
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
        <MaskRevealHeading as="h2" className="preview-section-heading">
          Where most agencies guess, we measure.
        </MaskRevealHeading>
        <p className="preview-section-intro">
          Most agencies have spreadsheets. Rysen has{" "}
          <InlineDetail detail="Each system is custom-built in-house for our specific legal and medical use case. They run on a shared data warehouse and feed each other plus the Friday client report.">
            systems
          </InlineDetail>
          . Seven data infrastructures run continuously for every client
          engagement. Every channel measured. Every dollar attributed. Every
          decision sourced from real numbers.
        </p>
        <div className="data-facts-list">
          {DATA_FACTS.map((f) => (
            <FactCard
              key={f.title}
              title={f.title}
              qualifier={f.qualifier}
              description={f.description}
              number={f.number}
              unit={f.unit}
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
    <section
      className="verticals-section preview-section preview-section--paper"
      aria-label="Verticals we serve"
      data-context="paper"
    >
      <div className="section-corner-mark">
        <AmbientTriangle size={16} />
      </div>
      <div className="preview-section-inner">
        <div className="section-eyebrow">
          <SignalTriangle size={10} decorative />
          <span className="eyebrow-rule" aria-hidden="true" />
          <span className="eyebrow-text">Vertical expertise</span>
        </div>
        <MaskRevealHeading as="h2" className="preview-section-heading">
          Two verticals. Distinct playbooks.
        </MaskRevealHeading>
        <p className="preview-section-intro">
          Other agencies serve restaurants, retail, e-commerce. Rysen does not.
          Every playbook tunes for the specific dynamics of legal or medical
          practice marketing, and the two playbooks tune differently.
        </p>
        <div className="verticals-comparison">
          <article className="vertical-block">
            <div className="vertical-block__illustration">
              <ScalesOfJusticeAnimated />
            </div>
            <div className="vertical-block__kicker">Legal vertical</div>
            <h3 className="vertical-block__title">Built for law firms.</h3>
            <ul className="vertical-block__points">
              <li>
                <SignalTriangle size={8} decorative />
                <span>Long decision cycles, trust-first conversion</span>
              </li>
              <li>
                <SignalTriangle size={8} decorative />
                <span>Bar advertising compliance, state by state</span>
              </li>
              <li>
                <SignalTriangle size={8} decorative />
                <span>Nine practice areas, from probate to personal injury</span>
              </li>
            </ul>
            <div className="vertical-block__detail">
              <p>
                Legal marketing is high stakes. Prospects research for weeks
                before hiring. Trust signals matter more than ad spend. Bar
                regulations vary by state. The legal playbook addresses all of
                this directly.
              </p>
            </div>
            <Link href="/legal" className="vertical-block__link">
              <span>Read the Legal Playbook</span>
              <SignalTriangle size={10} decorative />
            </Link>
          </article>

          <article className="vertical-block">
            <div className="vertical-block__illustration">
              <StethoscopeAnimated />
            </div>
            <div className="vertical-block__kicker">Medical vertical</div>
            <h3 className="vertical-block__title">Built for medical practices.</h3>
            <ul className="vertical-block__points">
              <li>
                <SignalTriangle size={8} decorative />
                <span>HIPAA compliant marketing, insurance aware funnels</span>
              </li>
              <li>
                <SignalTriangle size={8} decorative />
                <span>Patient privacy in content and reviews</span>
              </li>
              <li>
                <SignalTriangle size={8} decorative />
                <span>Nine specialties, from dermatology to mental health</span>
              </li>
            </ul>
            <div className="vertical-block__detail">
              <p>
                Medical marketing has different rules. Patient privacy is
                non-negotiable. Insurance acceptance affects discovery. Visual
                proof matters for aesthetic practices. The medical playbook is
                engineered for these constraints.
              </p>
            </div>
            <Link href="/medical" className="vertical-block__link">
              <span>Read the Medical Playbook</span>
              <SignalTriangle size={10} decorative />
            </Link>
          </article>
        </div>

        <div className="verticals-footnote">
          <p>
            We also accept select{" "}
            <Link href="/case-studies/madison-clark" className="text-link">
              special engagements
            </Link>{" "}
            for brand building work that does not fit traditional playbooks.
            The Madison Clark AI persona case is one such example.
          </p>
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
          imagine what we can do for your law firm or medical practice, which
          already has years of authority to amplify.
        </p>
        <div className="madison-preview-metrics">
          <div className="madison-preview-metric">
            <div className="madison-preview-value">100M+</div>
            <div className="madison-preview-label">views in 60 days</div>
          </div>
          <div className="madison-preview-metric">
            <div className="madison-preview-value">20K</div>
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

/* HowWeWorkPreview was moved to its own client component file
   (src/components/sections/HowWeWorkPreview.tsx) so it can run the
   SVG cadence roadmap with today calculation and the IntersectionObserver
   trigger for the yellow progress line. */
export { HowWeWorkPreview } from "./HowWeWorkPreview";

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
