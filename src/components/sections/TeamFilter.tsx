"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Group = "leadership" | "data" | "seo" | "content-account";
type Location = "DET" | "REMOTE";

type TeamMember = {
  readonly name: string;
  readonly role: string;
  readonly specialty: string;
  readonly bio: string;
  readonly group: Group;
  readonly location: Location;
};

const teamMembers: ReadonlyArray<TeamMember> = [
  {
    name: "Art Khan",
    role: "Founder & Managing Partner",
    specialty: "Strategy",
    bio: "Ross BBA. ex-Salesforce, ex-Roku. Founded three Instagram-native brands before Rysen.",
    group: "leadership",
    location: "DET",
  },
  {
    name: "David Reichert",
    role: "Partner & Head of Strategy",
    specialty: "Strategy",
    bio: "20+ years in digital marketing leadership across consumer and B2B. Former VP at Brafton.",
    group: "leadership",
    location: "DET",
  },
  {
    name: "Priya Mehta",
    role: "Lead Data Scientist",
    specialty: "Attribution",
    bio: "Stanford Statistics. Builds the attribution models that translate marketing activity into client revenue.",
    group: "data",
    location: "DET",
  },
  {
    name: "Marcus Chen",
    role: "Senior Data Scientist",
    specialty: "ML Models",
    bio: "Carnegie Mellon ML. Specializes in search ranking signal analysis and forecast modeling.",
    group: "data",
    location: "REMOTE",
  },
  {
    name: "Sofia Vasquez",
    role: "Data Scientist",
    specialty: "Dashboards",
    bio: "MIT MBA. Designs the dashboards every Rysen client sees in their weekly meetings.",
    group: "data",
    location: "DET",
  },
  {
    name: "Jordan Bell",
    role: "Data Engineer",
    specialty: "Infrastructure",
    bio: "Maintains Rysen's data infrastructure. ex-Stripe, ex-Notion.",
    group: "data",
    location: "DET",
  },
  {
    name: "Elena Markov",
    role: "Director of SEO",
    specialty: "Legal SEO",
    bio: "12 years optimizing for local-intent queries. Specializes in legal vertical.",
    group: "seo",
    location: "DET",
  },
  {
    name: "Hassan Reyes",
    role: "Senior SEO Strategist",
    specialty: "Medical SEO",
    bio: "Medical and dental SEO specialist. Former in-house at a major California dermatology group.",
    group: "seo",
    location: "REMOTE",
  },
  {
    name: "Ben Park",
    role: "Senior SEO Strategist",
    specialty: "GMB",
    bio: "GMB optimization expert. Has worked on 200+ Google Business Profiles.",
    group: "seo",
    location: "DET",
  },
  {
    name: "Lila Okonkwo",
    role: "SEO Strategist",
    specialty: "Schema",
    bio: "Technical SEO and schema markup specialist.",
    group: "seo",
    location: "DET",
  },
  {
    name: "Connor Fitzgerald",
    role: "SEO Strategist",
    specialty: "Citations",
    bio: "Citation-building and off-page authority specialist.",
    group: "seo",
    location: "DET",
  },
  {
    name: "Mia Tanaka",
    role: "SEO Strategist",
    specialty: "Content",
    bio: "Local-intent content writer.",
    group: "seo",
    location: "DET",
  },
  {
    name: "Theo Brennan",
    role: "SEO Strategist",
    specialty: "Keyword Research",
    bio: "Competitive analysis and keyword strategy.",
    group: "seo",
    location: "REMOTE",
  },
  {
    name: "Nora Bianchi",
    role: "SEO Strategist",
    specialty: "Analytics",
    bio: "Analytics implementation and reporting.",
    group: "seo",
    location: "DET",
  },
  {
    name: "Amara Singh",
    role: "Senior Content Strategist",
    specialty: "Authority Content",
    bio: "Long-form authority content specialist for legal and medical clients.",
    group: "content-account",
    location: "DET",
  },
  {
    name: "Felix Reyna",
    role: "Content Strategist",
    specialty: "Newsletters",
    bio: "Newsletter strategy and lifecycle content.",
    group: "content-account",
    location: "REMOTE",
  },
  {
    name: "Ruth Ayala",
    role: "Senior Account Manager / GMB Specialist",
    specialty: "GMB & Reviews",
    bio: "Runs weekly client meetings. Specializes in GMB optimization and reputation management.",
    group: "content-account",
    location: "DET",
  },
  {
    name: "Tomas Whitfield",
    role: "Account Manager / GMB Specialist",
    specialty: "Account Management",
    bio: "Client-facing GMB and reputation specialist.",
    group: "content-account",
    location: "DET",
  },
];

const filters: ReadonlyArray<{ id: Group | "all"; label: string }> = [
  { id: "all", label: "All" },
  { id: "leadership", label: "Leadership" },
  { id: "data", label: "Data Science" },
  { id: "seo", label: "SEO" },
  { id: "content-account", label: "Content & Account" },
];

function initials(name: string): string {
  return name
    .split(" ")
    .map((p) => p[0])
    .join("")
    .toUpperCase();
}

export function TeamFilter() {
  const [active, setActive] = useState<Group | "all">("all");

  const filtered = useMemo(
    () =>
      teamMembers
        .map((m, originalIdx) => ({ ...m, originalIdx }))
        .filter((m) => active === "all" || m.group === active),
    [active]
  );

  const detCount = teamMembers.filter((m) => m.location === "DET").length;
  const remoteCount = teamMembers.length - detCount;
  const specialtyCount = new Set(teamMembers.map((m) => m.specialty)).size;

  return (
    <section className="team-section" id="team">
      <div className="team-inner">
        <div className="section-2-eyebrow">The team</div>
        <h2 className="section-2-h2">
          Eighteen operators{" "}
          <span className="accent-text">behind every result.</span>
        </h2>
        <p className="team-subhead">
          A small team by design. Data scientists, SEO strategists, content
          specialists, and account leads — each hired for depth in one craft,
          not spread across many.
        </p>

        <div className="team-filters" role="tablist">
          {filters.map((f) => (
            <button
              key={f.id}
              type="button"
              role="tab"
              aria-selected={active === f.id}
              className={`team-filter-pill${active === f.id ? " is-active" : ""}`}
              onClick={() => setActive(f.id)}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="team-grid team-grid-filter">
          <AnimatePresence mode="popLayout">
            {filtered.map((member) => (
              <motion.article
                key={member.name}
                layout
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="team-card team-card-filter"
              >
                <span
                  className={`team-loc-badge${
                    member.location === "REMOTE"
                      ? " team-loc-remote"
                      : " team-loc-det"
                  }`}
                  aria-label={
                    member.location === "DET"
                      ? "Detroit"
                      : "Remote"
                  }
                >
                  {member.location}
                </span>
                <div
                  className={`team-avatar team-avatar-grad-${member.originalIdx % 6}`}
                  aria-hidden="true"
                >
                  {initials(member.name)}
                </div>
                <div className="team-name">{member.name}</div>
                <div className="team-role">{member.role}</div>
                <div className="team-specialty">{member.specialty}</div>
                <div className="team-rule" aria-hidden="true"></div>
                <div className="team-bio">{member.bio}</div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        <div className="team-stat-bar">
          {teamMembers.length} operators · {detCount} in Detroit ·{" "}
          {remoteCount} remote · {specialtyCount} specialties
        </div>
      </div>
    </section>
  );
}
