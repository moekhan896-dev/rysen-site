import type { Metadata } from "next";
import Link from "next/link";
import { Reveal, RevealGroup } from "@/components/ui/Reveal";
import { TriangleMark } from "@/components/ui/TriangleMark";
import { MarkerUnderline } from "@/components/ui/MarkerUnderline";

export const metadata: Metadata = {
  title: "Careers — Rysen Growth",
  description:
    "Join a boutique studio of engineers and creatives building the firm that engineers #1 rankings. Open roles in Detroit, Phoenix, and remote.",
  robots: { index: true, follow: true },
};

// Session 48 — Careers page.
//
// Hero -> Why Rysen (4 value cards) -> Culture (split) -> Open Roles
// (5 placeholder roles) -> How to apply.
//
// Roles are placeholders — easy to edit. Apply link is mailto for now
// so we don't need an application backend yet.

const WHY = [
  {
    title: "Work on real outcomes",
    desc: "We don't sell impressions. Every engagement is engineered to produce qualified calls, bookings, and revenue. You'll see the cause and effect.",
    Icon: WhyTargetIcon,
  },
  {
    title: "Small team, big ownership",
    desc: "A boutique roster of clients means a boutique team. Real ownership of your work, no layered approvals, and a direct line to the founders.",
    Icon: WhyTeamIcon,
  },
  {
    title: "Data and AI at the core",
    desc: "Our edge is engineering, not guesswork. You'll work on attribution, AI search, schema, and content systems that compound — not posts that disappear.",
    Icon: WhyDataIcon,
  },
  {
    title: "Build brands that go viral",
    desc: "We test on our own brands first. You'll have license to build, test, and shape the next thing that scales from zero to millions.",
    Icon: WhyViralIcon,
  },
];

type Role = {
  title: string;
  type: string;
  location: string;
  desc: string;
};

const ROLES: ReadonlyArray<Role> = [
  {
    title: "SEO Strategist",
    type: "Full-time",
    location: "Detroit / Remote",
    desc: "Own search engineering strategy for a roster of legal and medical clients. Turn audits into measurable case intake.",
  },
  {
    title: "Content Engineer",
    type: "Full-time",
    location: "Detroit / Remote",
    desc: "Build authority content systems that rank, get cited by AI, and convert. Topic modeling, schema, internal linking.",
  },
  {
    title: "Paid Social Manager",
    type: "Full-time",
    location: "Phoenix / Remote",
    desc: "Engineer viral social campaigns across our brands and clients. Direct response and brand at once.",
  },
  {
    title: "AI Search Specialist",
    type: "Full-time",
    location: "Remote",
    desc: "Optimize for citation in ChatGPT, Perplexity, and Gemini. Sit at the bleeding edge of how AI ranks sources.",
  },
  {
    title: "Client Account Lead",
    type: "Full-time",
    location: "Detroit",
    desc: "Own client relationships and translate engagement data into clear, confident decisions and outcomes.",
  },
];

export default function CareersPage() {
  return (
    <main className="careers-page">
      {/* ---------- Hero ---------- */}
      <section className="careers-hero">
        <Reveal>
          <div className="careers-hero__label">
            <TriangleMark size={10} />
            <span>CAREERS</span>
          </div>
          <h1 className="careers-hero__headline">
            Build the firm that engineers{" "}
            <span className="careers-hero__emph">
              #1 rankings.
              <MarkerUnderline className="careers-hero__emph-underline" />
            </span>
          </h1>
          <p className="careers-hero__sub">
            Join a boutique studio of engineers and creatives building outcomes
            you can measure in case intake, patient bookings, and revenue. We
            keep our client roster small so your work has visible impact.
          </p>
          <a href="#open-roles" className="careers-hero__cta">
            See open roles <ArrowIcon />
          </a>
        </Reveal>
      </section>

      {/* ---------- Why Rysen ---------- */}
      <section className="careers-why">
        <Reveal>
          <div className="careers-why__label">
            <TriangleMark size={10} />
            <span>WHY RYSEN</span>
          </div>
          <h2 className="careers-why__headline">
            A small team that ships, in a category where most do not.
          </h2>
        </Reveal>
        <RevealGroup className="careers-why__grid" stagger={90}>
          {WHY.map((w) => {
            const Icon = w.Icon;
            return (
              <article key={w.title} className="careers-why__card">
                <div className="careers-why__card-icon">
                  <Icon />
                </div>
                <h3 className="careers-why__card-title">{w.title}</h3>
                <p className="careers-why__card-desc">{w.desc}</p>
              </article>
            );
          })}
        </RevealGroup>
      </section>

      {/* ---------- Culture ---------- */}
      <section className="careers-culture">
        <Reveal className="careers-culture__body">
          <div className="careers-culture__label">
            <TriangleMark size={10} />
            <span>HOW WE WORK</span>
          </div>
          <h2 className="careers-culture__headline">
            Operators before agency.
          </h2>
          <p>
            We started by building our own brands. Quattro Labs, The Honest
            Maids, The Honest Plumbers, Madison Clark. Real audiences, real
            revenue, no client paying us to learn. That's why we run the way
            we do — small, focused, accountable.
          </p>
          <p>
            We work in Detroit and Phoenix studios, with senior team members
            remote. We meet quarterly. We protect deep-work blocks. And we
            keep meetings tight, because the work is the work.
          </p>
        </Reveal>
        <Reveal delay={120}>
          <div className="careers-culture__photo" aria-label="Studio photo placeholder">
            STUDIO PHOTO — DETROIT TEAM AT WORK
          </div>
        </Reveal>
      </section>

      {/* ---------- Open roles ---------- */}
      <section className="careers-roles" id="open-roles">
        <Reveal>
          <div className="careers-roles__label">
            <TriangleMark size={10} />
            <span>OPEN ROLES</span>
          </div>
          <h2 className="careers-roles__headline">
            Five roles open right now.
          </h2>
        </Reveal>
        <RevealGroup className="careers-roles__list" stagger={70}>
          {ROLES.map((role) => (
            <article key={role.title} className="careers-role">
              <div>
                <h3 className="careers-role__title">{role.title}</h3>
                <p className="careers-role__desc">{role.desc}</p>
              </div>
              <div className="careers-role__meta">
                <span className="careers-role__meta-type">{role.type}</span>
                <span>{role.location}</span>
              </div>
              <a
                className="careers-role__apply"
                href={`mailto:careers@rysengrowth.com?subject=Application: ${encodeURIComponent(
                  role.title
                )}`}
              >
                Apply <ArrowIcon />
              </a>
            </article>
          ))}
        </RevealGroup>
      </section>

      {/* ---------- Apply ---------- */}
      <section className="careers-apply">
        <Reveal>
          <div className="careers-apply__label">
            <TriangleMark size={10} />
            <span>APPLY</span>
          </div>
          <h2 className="careers-apply__headline">Don't see your role?</h2>
          <p className="careers-apply__body">
            If you build the kind of work we'd love to see — content systems,
            attribution, AI search, brand engineering — write us. Include a
            note about what you've shipped and a link or two.
          </p>
          <a
            className="careers-apply__email"
            href="mailto:careers@rysengrowth.com"
          >
            careers@rysengrowth.com <ArrowIcon />
          </a>
        </Reveal>
        <p
          style={{
            fontSize: 12,
            color: "var(--text-tertiary)",
            marginTop: 28,
          }}
        >
          Roles listed are illustrative. Contact{" "}
          <Link href="/contact">our team</Link> for current openings.
        </p>
      </section>
    </main>
  );
}

// ---------- Inline icons ----------

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path
        d="M3 7H11M11 7L7 3M11 7L7 11"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function WhyTargetIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle cx="10" cy="10" r="7.5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="10" cy="10" r="3.5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="10" cy="10" r="1.2" fill="currentColor" />
    </svg>
  );
}

function WhyTeamIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle cx="6.5" cy="7.5" r="2.4" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="13.5" cy="7.5" r="2.4" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M2 16 Q 6.5 12 10 13.4 Q 13.5 12 18 16"
        stroke="currentColor"
        strokeWidth="1.6"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}

function WhyDataIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path
        d="M3 16 L8 11 L11 13 L17 5"
        stroke="currentColor"
        strokeWidth="1.6"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="17" cy="5" r="1.6" fill="currentColor" />
    </svg>
  );
}

function WhyViralIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path
        d="M10 3 V 17 M3 10 H 17"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <circle cx="10" cy="10" r="2.4" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="10" cy="10" r="6" stroke="currentColor" strokeWidth="0.8" opacity="0.4" />
    </svg>
  );
}
