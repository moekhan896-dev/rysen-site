import { AmbientTriangle } from "@/components/brand/AmbientTriangle";
import { SignalTriangle } from "@/components/brand/SignalTriangle";

interface Member {
  monogram: string;
  name: string;
  title: string;
  location: string;
  specialty: string;
}

// NOTE: These names and details are PLACEHOLDERS per Session 25 spec.
// Replace with actual team members or remove entries before launch.
const TEAM: ReadonlyArray<Member> = [
  {
    monogram: "AK",
    name: "Art K.",
    title: "Founder & Managing Partner",
    location: "Detroit",
    specialty: "Brand strategy, operator perspective",
  },
  {
    monogram: "DR",
    name: "David R.",
    title: "Partner",
    location: "Detroit",
    specialty: "Account leadership, legal vertical",
  },
  {
    monogram: "MS",
    name: "Maria S.",
    title: "Director, Medical Vertical",
    location: "Detroit",
    specialty: "Dermatology, dental, plastic surgery",
  },
  {
    monogram: "JL",
    name: "Jordan L.",
    title: "Director, Data Science",
    location: "Ann Arbor",
    specialty: "Attribution modeling, cohort analysis",
  },
  {
    monogram: "RT",
    name: "Rachel T.",
    title: "Senior Strategist",
    location: "Detroit",
    specialty: "Local SEO, GMB optimization",
  },
  {
    monogram: "BK",
    name: "Ben K.",
    title: "Senior Strategist",
    location: "Chicago",
    specialty: "AI search optimization, schema",
  },
  {
    monogram: "EM",
    name: "Emily M.",
    title: "Senior Content Strategist",
    location: "Detroit",
    specialty: "Authority content, long-form articles",
  },
  {
    monogram: "TP",
    name: "Tom P.",
    title: "Senior Engineer",
    location: "Detroit",
    specialty: "Schema, technical SEO, web performance",
  },
  {
    monogram: "SH",
    name: "Sarah H.",
    title: "Director, Reputation",
    location: "Detroit",
    specialty: "Review velocity, response operations",
  },
  {
    monogram: "MC",
    name: "Michael C.",
    title: "Senior PR Strategist",
    location: "New York",
    specialty: "Press outreach, podcast placements",
  },
  {
    monogram: "AT",
    name: "Aisha T.",
    title: "Senior Analyst",
    location: "Detroit",
    specialty: "Revenue attribution, CRM integration",
  },
  {
    monogram: "JC",
    name: "James C.",
    title: "Senior Engineer",
    location: "Detroit",
    specialty: "Custom rank tracking, internal tools",
  },
];

export function TeamFilter() {
  return (
    <section className="team-rebrand" aria-label="The team">
      <div className="section-corner-mark">
        <AmbientTriangle size={16} />
      </div>

      <div className="team-rebrand-inner">
        <div className="section-eyebrow">
          <SignalTriangle size={10} decorative />
          <span className="eyebrow-rule" aria-hidden="true" />
          <span className="eyebrow-text">The team</span>
        </div>

        <h2 className="team-rebrand-heading">
          Senior operators. Mostly in Detroit.
        </h2>

        <p className="team-rebrand-intro">
          Eighteen senior team members, all US-based, most in Detroit. No
          outsourced content. No overseas contractors. No junior staff running
          senior accounts. The team that runs your engagement is the team you
          meet on the audit call.
        </p>

        <div className="team-rebrand-grid">
          {TEAM.map((m) => (
            <article key={m.name} className="team-card">
              <div className="team-card-monogram" aria-hidden="true">
                {m.monogram}
              </div>
              <p className="team-card-name">{m.name}</p>
              <p className="team-card-title">{m.title}</p>
              <p className="team-card-location">{m.location}</p>
              <p className="team-card-specialty">{m.specialty}</p>
            </article>
          ))}
        </div>

        <div className="team-rebrand-statsbar">
          18 total team members · 100% US-based · 14 in Detroit · 6+ years
          average tenure
        </div>
      </div>
    </section>
  );
}
