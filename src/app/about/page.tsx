import type { Metadata } from "next";
import Link from "next/link";
import { CTABanner } from "@/components/page-sections/CTABanner";
import { PageHero } from "@/components/page-sections/PageHero";
import { PageSection } from "@/components/page-sections/PageSection";
import { AboutPrinciples } from "./AboutPrinciples";
import { AboutTeamDonut } from "./AboutTeamDonut";
import { AboutUsMap } from "./AboutUsMap";

export const metadata: Metadata = {
  title:
    "About Rysen Growth — Detroit Marketing Agency for Law & Medical Firms",
  description:
    "Founded in 2019 in Detroit, Rysen Growth is a boutique data-driven marketing agency serving 30+ law firms and medical practices across the US.",
};

export default function AboutPage() {
  return (
    <main className="about-page">
      <PageHero
        eyebrow="About Rysen"
        title={
          <>
            A Detroit firm built on one principle: marketing should report in{" "}
            <span className="accent-italic">revenue, not impressions.</span>
          </>
        }
        subtitle="Founded in 2019. Founder-led. Independent. 18 operators across 4 disciplines, serving 30+ firms in legal and medical."
      />

      {/* THE STORY */}
      <PageSection
        eyebrow="The story"
        title="Why Rysen exists."
        titleAlignment="left"
        maxWidth="780px"
      >
        <div className="about-story">
          <p>
            Art Khan started Rysen in 2019 after roughly a decade running marketing
            programs at Salesforce and Roku and a handful of consumer brands he
            founded himself. The agencies those companies worked with had a shared
            problem: they could tell you what they did, but they could not tell you
            what it generated. Activity was easy to report. Outcomes were not.
          </p>
          <p>
            That gap is fine in a market with cheap capital and patient boards. It is
            not fine in legal and medical, where every marketing dollar is a dollar
            that did not go to a paralegal hire, an office expansion, or a clinical
            investment. Owners and managing partners need to know which dollars
            generated which cases. Most agencies still can’t answer that.
          </p>
          <p>
            Rysen was built around the answer. We rebuild our clients’
            visibility — across Google, AI search, Maps, and content — and we tie
            every change back to a source, a channel, and a dollar. Clients see the
            math every week. Engagements range from six months to three-plus years.
            Most renew before their first contract ends.
          </p>

          <aside className="about-pullquote">
            <span className="about-pullquote-mark">“</span>
            <span className="about-pullquote-text">
              Pick the agency that can show you the math.
            </span>
            <span className="about-pullquote-mark">”</span>
          </aside>

          <p>
            We’re headquartered in downtown Detroit because we wanted a city
            that takes work seriously. Fourteen of us are here in person. Four work
            remote on specialized lanes. We stay boutique on purpose — every account
            has a senior strategist as the day-one contact, and we cap engagements so
            no one is spread thin.
          </p>
        </div>
      </PageSection>

      {/* PRINCIPLES */}
      <AboutPrinciples />

      {/* TEAM BREAKDOWN */}
      <PageSection
        eyebrow="Our team"
        title={
          <>
            18 operators, 4 disciplines,{" "}
            <span className="accent-italic">one playbook.</span>
          </>
        }
        background="tint"
      >
        <AboutTeamDonut />
      </PageSection>

      {/* WHERE WE WORK */}
      <PageSection
        eyebrow="Where we work"
        title={
          <>
            Detroit HQ.{" "}
            <span className="accent-italic">National practice.</span>
          </>
        }
      >
        <AboutUsMap />
        <div className="about-map-stats">
          30+ firms · 4 states · 10 metros
        </div>
      </PageSection>

      {/* FOUNDER REFERENCE */}
      <PageSection
        eyebrow="Founder"
        title="A note from the founder."
        titleAlignment="left"
        maxWidth="900px"
      >
        <div className="about-founder-card">
          <div className="about-founder-mono">AK</div>
          <div className="about-founder-body">
            <div className="about-founder-name">Art Khan</div>
            <div className="about-founder-role">
              Founder & Managing Partner
            </div>
            <div className="about-founder-chips">
              <span className="founder-chip">ROSS BBA</span>
              <span className="founder-chip">ex-SALESFORCE</span>
              <span className="founder-chip">ex-ROKU</span>
              <span className="founder-chip">Detroit, MI</span>
            </div>
            <p>
              Before Rysen, Art ran growth programs at Salesforce and Roku and
              founded three consumer brands across automotive, plumbing, and home
              cleaning — each one became the fastest-growing brand in its category
              in the Midwest. He started Rysen to apply that same playbook to legal
              and medical, where the dollars are bigger and the reporting is worse.
            </p>
            <p>
              Art is the day-one strategist on every Rysen engagement, and he writes
              every quarterly review personally.
            </p>
            <Link href="/#founder" className="about-founder-link">
              Read the full founder note <span className="arrow">→</span>
            </Link>
          </div>
        </div>
      </PageSection>

      <CTABanner
        title="Ready to see the math?"
        subtitle="Get a free audit of your firm’s visibility — 48-hour turnaround, no sales call."
        primaryText="Book a free audit"
        primaryHref="/audit"
        secondaryText="See our work"
        secondaryHref="/case-studies"
      />
    </main>
  );
}
