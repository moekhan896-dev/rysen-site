import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-sections/PageHero";
import { PageSection } from "@/components/page-sections/PageSection";
import { OperatorJourney } from "@/components/illustrations/OperatorJourney";
import { BlueprintPullQuote } from "@/components/primitives/BlueprintPullQuote";
import { RelatedContent } from "@/components/primitives/RelatedContent";
import { SignalTriangle } from "@/components/brand/SignalTriangle";
import { ProfileCard } from "@/components/cards/ProfileCard";
import { AboutPrinciples } from "./AboutPrinciples";
import { AboutUsMap } from "./AboutUsMap";

export const metadata: Metadata = {
  title:
    "About Rysen Growth, Detroit Marketing Agency for Law & Medical Firms",
  description:
    "Founded in 2019 in Detroit, Rysen Growth is a boutique data-driven marketing agency serving 30+ law firms and medical practices across the US.",
};

const LEADERSHIP = [
  {
    monogram: "AK",
    name: "Art Khan",
    title: "Founder & Managing Partner",
    location: "Detroit, Michigan",
    bio: "Before Rysen, Art ran growth programs at Salesforce and Roku, and founded three consumer brands, Quattro Labs (150K+ followers), The Honest Plumbers (active service brand), and The Honest Maids (exited). Each became one of the fastest-growing brands in its category in the Midwest. He started Rysen in 2019 to apply that operator perspective specifically to law firms and medical practices, where the dollars are larger and the marketing reporting is worse. Ross School of Business BBA.",
    chips: ["ROSS BBA", "ex-SALESFORCE", "ex-ROKU", "Detroit"],
  },
  {
    monogram: "DR",
    name: "David R.",
    title: "Partner",
    location: "Detroit, Michigan",
    bio: "Senior account leadership across the legal vertical. Direct responsibility for the largest law firm engagements. Background in agency operator roles at top-50 US marketing firms before joining Rysen.",
    chips: ["Legal vertical lead", "ex-Top-50 agency"],
  },
  {
    monogram: "MS",
    name: "Maria S.",
    title: "Director, Medical Vertical",
    location: "Detroit, Michigan",
    bio: "Senior leadership for medical practice engagements. Specialty expertise in dermatology, dental, and plastic surgery marketing. Built and runs the medical-specific compliance review framework.",
    chips: ["Medical vertical lead", "HIPAA compliance lead"],
  },
  {
    monogram: "JL",
    name: "Jordan L.",
    title: "Director, Data Science",
    location: "Ann Arbor, Michigan",
    bio: "Leads the in-house data science team. Builds the per-client attribution dashboards, runs cohort analyses, and develops the predictive models that surface quarterly opportunities. Prior background in attribution modeling at consumer brands.",
    chips: ["Data science lead", "Attribution architect"],
  },
];

const TEAM_EXTRAS = [
  { monogram: "RT", name: "Rachel T.", title: "Senior Strategist", location: "Detroit", specialty: "Local SEO, GMB optimization" },
  { monogram: "BK", name: "Ben K.", title: "Senior Strategist", location: "Chicago", specialty: "AI search optimization, schema" },
  { monogram: "EM", name: "Emily M.", title: "Senior Content Strategist", location: "Detroit", specialty: "Authority content, long-form articles" },
  { monogram: "TP", name: "Tom P.", title: "Senior Engineer", location: "Detroit", specialty: "Schema, technical SEO, web performance" },
  { monogram: "SH", name: "Sarah H.", title: "Director, Reputation", location: "Detroit", specialty: "Review velocity, response operations" },
  { monogram: "MC", name: "Michael C.", title: "Senior PR Strategist", location: "New York", specialty: "Press outreach, podcast placements" },
  { monogram: "AT", name: "Aisha T.", title: "Senior Analyst", location: "Detroit", specialty: "Revenue attribution, CRM integration" },
  { monogram: "JC", name: "James C.", title: "Senior Engineer", location: "Detroit", specialty: "Custom rank tracking, internal tools" },
  { monogram: "KO", name: "Kira O.", title: "Junior Strategist", location: "Detroit", specialty: "Account support, reporting cadence" },
  { monogram: "PG", name: "Priya G.", title: "Senior Designer", location: "Detroit", specialty: "Landing page CRO, blueprint graphics" },
  { monogram: "NR", name: "Nick R.", title: "Senior Engineer", location: "Detroit", specialty: "Site performance, schema validation" },
  { monogram: "OL", name: "Olivia L.", title: "Senior Analyst", location: "Detroit", specialty: "Cohort modeling, predictive briefings" },
  { monogram: "FT", name: "Frank T.", title: "Senior Strategist", location: "Detroit", specialty: "LSA, paid integration" },
  { monogram: "LH", name: "Leah H.", title: "Senior Writer", location: "Detroit", specialty: "Authority content for medical" },
];

const BRANDS = [
  { name: "Quattro Labs", vertical: "Automotive · Consumer", metric: "150K+ Instagram followers", status: "Active" },
  { name: "The Honest Plumbers", vertical: "Home services", metric: "Active service brand", status: "Active" },
  { name: "The Honest Maids", vertical: "Home services", metric: "Exited service brand", status: "Exited" },
  { name: "@arttkhan", vertical: "Personal brand", metric: "35K+ followers", status: "Active" },
  { name: "Madison Clark (AI persona)", vertical: "Demonstration · 2024", metric: "100M+ views in 60 days", status: "Active", href: "/case-studies/madison-clark" },
];

const PRESS = [
  { outlet: "Forbes", title: "Quoted on local SEO competitive dynamics", year: "2024" },
  { outlet: "Search Engine Land", title: "Feature on AI search citation strategies for law firms", year: "2024" },
  { outlet: "Detroit Free Press", title: "Profile on Detroit operator-founded firms", year: "2023" },
  { outlet: "Marketing Land", title: "Case study coverage: legal vertical attribution", year: "2023" },
  { outlet: "Podcast: Marketing Operators", title: "Art Khan interview on data-first agency operations", year: "2024" },
  { outlet: "Podcast: Detroit Business Network", title: "Feature on Detroit-anchored firm building", year: "2023" },
];

export default function AboutPage() {
  return (
    <main className="about-page">
      <PageHero
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
        eyebrow="About Rysen"
        title={
          <>
            A boutique firm,{" "}
            <span className="accent-italic">run by operators.</span>
          </>
        }
        subtitle="Founded in Detroit in 2019 to do one specific thing well: build organic dominance for law firms and medical practices that intend to win their market."
      />

      {/* THE FIRM STORY (migrated Editorial Beat content) */}
      <PageSection
        eyebrow="The firm story"
        title="Why Rysen exists."
        titleAlignment="left"
        maxWidth="780px"
      >
        <div className="about-story">
          <p>
            Art Khan started Rysen in 2019 after roughly a decade running
            growth programs at Salesforce and Roku, plus three consumer brands
            he founded himself. The agencies those companies worked with had a
            shared problem: they could tell you what they did, but they could
            not tell you what it generated. Activity was easy to report.
            Outcomes were not.
          </p>
          <p>
            That gap is fine in a market with cheap capital and patient
            boards. It is not fine in legal and medical, where every marketing
            dollar is a dollar that did not go to a paralegal hire, an office
            expansion, or a clinical investment. Owners and managing partners
            need to know which dollars generated which cases. Most agencies
            still can&apos;t answer that.
          </p>
          <p>
            Rysen was built around the answer. We rebuild our clients&apos;
            visibility, across Google, AI search, Maps, and content, and we
            tie every change back to a source, a channel, and a dollar.
            Clients see the math every week. Engagements range from six
            months to three-plus years. Most renew before their first
            contract ends.
          </p>

          <BlueprintPullQuote
            quote="Pick the agency that can show you the math."
            attribution="Art Khan"
          />

          <p>
            We&apos;re headquartered in downtown Detroit because we wanted a
            city that takes work seriously. Fourteen of us are here in person.
            Four work remote on specialized lanes. We stay boutique on
            purpose, every account has a senior strategist as the day-one
            contact, and we cap engagements so no one is spread thin.
          </p>
        </div>
      </PageSection>

      {/* WHY WE EXIST (migrated Why Us Closing content) */}
      <PageSection
        eyebrow="Why we exist"
        title="Five reasons firms choose Rysen."
        background="tint"
      >
        <div className="about-reasons">
          {[
            {
              title: "Every team member is in the United States.",
              desc: "No outsourced content. No overseas link builders. No time zone gaps. Senior operators, all US-based, most in Detroit.",
            },
            {
              title: "We work only with law firms and medical practices.",
              desc: "Other agencies serve dentists, retailers, restaurants, e-commerce. We don&apos;t. Every playbook, every dashboard, every team member is specialized for legal and medical.",
            },
            {
              title: "Our data infrastructure is built, not bought.",
              desc: "Custom attribution dashboards. Custom rank tracking. Custom AI search monitoring. Built by our data science team for our specific use case. Not vendor tools, rebadged.",
            },
            {
              title: "The people running this firm have built brands themselves.",
              desc: "Art Khan founded three brands, including Quattro Labs and an AI persona that hit 100M views in 60 days. Other senior operators have similar pedigrees. We&apos;ve done the work we&apos;re selling.",
            },
            {
              title: "We turn down two of every three firms who ask.",
              desc: "We screen for fit, local market dominance opportunity, partner-level commitment, long engagement horizon. If you&apos;re not the right fit, we&apos;ll tell you in the audit call.",
            },
          ].map((r, i) => (
            <article key={r.title} className="about-reason">
              <span className="about-reason-number">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="about-reason-title">{r.title}</h3>
                <p
                  className="about-reason-desc"
                  dangerouslySetInnerHTML={{ __html: r.desc }}
                />
              </div>
            </article>
          ))}
        </div>
      </PageSection>

      {/* PRINCIPLES (existing component) */}
      <AboutPrinciples />

      {/* LEADERSHIP */}
      <PageSection
        eyebrow="Leadership"
        title="Who runs Rysen."
        titleAlignment="left"
        maxWidth="780px"
      >
        <div style={{ marginBottom: 48 }}>
          <OperatorJourney />
        </div>
        <div className="about-leadership-grid">
          {LEADERSHIP.map((p) => (
            <article key={p.name} className="about-leader-card">
              <div className="about-leader-head">
                <div className="team-card-monogram" aria-hidden="true">
                  {p.monogram}
                </div>
                <div>
                  <div className="about-leader-name">{p.name}</div>
                  <div className="about-leader-title">{p.title}</div>
                  <div className="about-leader-location">{p.location}</div>
                </div>
              </div>
              <p className="about-leader-bio">{p.bio}</p>
              <div className="about-leader-chips">
                {p.chips.map((c) => (
                  <span key={c} className="about-leader-chip">
                    {c}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </PageSection>

      {/* TEAM */}
      <PageSection
        eyebrow="The team"
        title={
          <>
            Senior operators.{" "}
            <span className="accent-italic">Mostly in Detroit.</span>
          </>
        }
        background="tint"
      >
        <p
          style={{
            maxWidth: 720,
            fontFamily: "var(--font-inter), system-ui, sans-serif",
            fontSize: 18,
            color: "var(--ink-muted)",
            marginBottom: 32,
          }}
        >
          Eighteen senior team members in total. The four named above plus
          fourteen specialists, each running their own discipline within the
          Organic Growth Engine.
        </p>
        <div className="team-profile-list">
          {TEAM_EXTRAS.map((m) => (
            <ProfileCard
              key={m.name}
              monogram={m.monogram}
              name={m.name}
              title={m.title}
              brief={
                <>
                  <em>{m.location}.</em> {m.specialty}
                </>
              }
            />
          ))}
        </div>
        <div className="team-rebrand-statsbar" style={{ marginTop: 48 }}>
          18 total team members · 100% US-based · 14 in Detroit · 6+ years
          average tenure
        </div>
      </PageSection>

      {/* BRANDS BUILT */}
      <PageSection
        eyebrow="Brands we&apos;ve built"
        title="The operator track record."
        titleAlignment="left"
        maxWidth="780px"
      >
        <p
          style={{
            maxWidth: 720,
            fontFamily: "var(--font-inter), system-ui, sans-serif",
            fontSize: 18,
            color: "var(--ink-muted)",
            marginBottom: 32,
          }}
        >
          Most agencies sell methodology they&apos;ve never run themselves. The
          senior team here has built and operated brands of our own across
          multiple verticals.
        </p>
        <div className="brands-list">
          {BRANDS.map((b) => {
            const Body = (
              <>
                <div className="brands-list-name">{b.name}</div>
                <div className="brands-list-meta">
                  <span>{b.vertical}</span>
                  <span aria-hidden="true">·</span>
                  <span>{b.metric}</span>
                  <span
                    className={`brands-list-status${
                      b.status === "Active" ? " is-active" : ""
                    }`}
                  >
                    {b.status}
                  </span>
                </div>
              </>
            );
            return b.href ? (
              <Link key={b.name} href={b.href} className="brands-list-row brands-list-row--link">
                {Body}
                <SignalTriangle size={10} decorative />
              </Link>
            ) : (
              <div key={b.name} className="brands-list-row">
                {Body}
              </div>
            );
          })}
        </div>
      </PageSection>

      {/* PRESS & RECOGNITION */}
      <PageSection
        eyebrow="Press &amp; recognition"
        title="Selected coverage."
        background="tint"
      >
        <div className="press-list">
          {PRESS.map((p) => (
            <div key={`${p.outlet}-${p.year}`} className="press-row">
              <span className="press-outlet">{p.outlet}</span>
              <span className="press-title">{p.title}</span>
              <span className="press-year">{p.year}</span>
            </div>
          ))}
        </div>
      </PageSection>

      {/* THE OFFICE */}
      <PageSection
        eyebrow="The office"
        title="Downtown Detroit, since founding."
        titleAlignment="left"
        maxWidth="780px"
      >
        <div className="office-grid">
          <div>
            <p className="office-address">
              <strong>Rysen Growth</strong>
              <br />
              1 Campus Martius, Suite 200
              <br />
              Detroit, Michigan 48226
            </p>
            <p className="office-contact">
              <a href="tel:+12484066223" className="text-link">
                (248) 406-6223
              </a>
              <br />
              <a
                href="mailto:marketing@rysengrowth.com"
                className="text-link"
              >
                marketing@rysengrowth.com
              </a>
            </p>
            <p className="office-hours">
              Monday-Friday · 9:00 AM-6:00 PM EST
              <br />
              By appointment for prospect visits.
            </p>
          </div>
          <div>
            <AboutUsMap />
          </div>
        </div>
      </PageSection>

      <RelatedContent
        items={[
          {
            href: "/methodology",
            eyebrow: "Framework",
            title: "The First Position methodology",
            description: "Five pillars, ten components, one outcome: #1 in your market.",
          },
          {
            href: "/how-we-work",
            eyebrow: "Operations",
            title: "How we work",
            description: "The 5-day weekly cadence standing since 2019.",
          },
          {
            href: "/case-studies",
            eyebrow: "Engagements",
            title: "Selected case studies",
            description: "Real revenue across legal and medical engagements.",
          },
        ]}
      />

      <section className="deep-page-cta">
        <div className="deep-page-cta-eyebrow">Want to work with us?</div>
        <h2 className="deep-page-cta-heading">Request an audit.</h2>
        <p className="deep-page-cta-sub">
          Audit calls let you meet the senior team you&apos;d actually work
          with. The team that runs your engagement is the team you meet on the
          call.
        </p>
        <Link href="/audit" className="deep-page-cta-button">
          Request an audit
        </Link>
        <p className="deep-page-cta-note">Average response time: 1 business day.</p>
      </section>
    </main>
  );
}
