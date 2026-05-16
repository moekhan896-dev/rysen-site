"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Camera,
  Code,
  FileText,
  Layout,
  Mail,
  MapPin,
  Newspaper,
  ShieldCheck,
  Sparkles,
  Star,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface ComponentCard {
  readonly id: string;
  readonly Icon: LucideIcon;
  readonly title: string;
  readonly subtitle: string;
  readonly description: string;
  readonly capabilities: ReadonlyArray<string>;
  readonly affects: ReadonlyArray<string>;
}

const CARDS: ReadonlyArray<ComponentCard> = [
  {
    id: "lsa",
    Icon: ShieldCheck,
    title: "Google Local Service Ads",
    subtitle: "Pre-vetted lead generation",
    description:
      "We architect and manage your Google Screened/LSA profile so qualified prospects who search “lawyer near me” or “doctor near me” see your firm first, with verified credentials and prepaid lead pricing.",
    capabilities: [
      "Google Screened verification & badge management",
      "Bid optimization across practice areas & metros",
      "Lead dispute & quality scoring",
    ],
    affects: ["gmb", "reputation", "website"],
  },
  {
    id: "gmb",
    Icon: MapPin,
    title: "Google Business Profile",
    subtitle: "Own the 3-pack",
    description:
      "Your Google Business Profile is the most valuable real estate in local search. We optimize categories, services, attributes, posts, and Q&A to dominate the Map Pack across every neighborhood you serve.",
    capabilities: [
      "Category & attribute optimization",
      "GMB posts cadence (3-5/week per location)",
      "Multi-location coordination",
    ],
    affects: ["lsa", "reputation", "schema"],
  },
  {
    id: "website",
    Icon: Layout,
    title: "Website Optimization & CRO",
    subtitle: "Convert visitors to clients",
    description:
      "Your website is the conversion layer. We optimize site speed, structure, content hierarchy, and call-to-action paths so the visitors we send convert at 3-5x industry average rates.",
    capabilities: [
      "Technical performance (Core Web Vitals)",
      "A/B testing on landing pages",
      "Conversion path optimization",
    ],
    affects: ["email", "ai-search", "content"],
  },
  {
    id: "ai-search",
    Icon: Sparkles,
    title: "AI Search Optimization",
    subtitle: "Be cited by ChatGPT, Perplexity, AI Overviews",
    description:
      "When prospects ask AI “who's the best [practice area] in [city]?”, your firm needs to be the answer. We optimize content, entity signals, and citation authority for the AI search era.",
    capabilities: [
      "Entity disambiguation & schema",
      "LLM-citation-friendly content structure",
      "AI surface monitoring (ChatGPT, Perplexity, Claude, AIO)",
    ],
    affects: ["content", "schema", "press"],
  },
  {
    id: "content",
    Icon: FileText,
    title: "Authority Content",
    subtitle: "Long-form content that ranks and gets cited",
    description:
      "Thin “practice area” pages don't rank in 2026. We produce 2,000+ word authority articles on practice-specific topics, the kind of content that ranks, gets cited by AI, and converts skeptical prospects into qualified leads.",
    capabilities: [
      "4-8 articles/month per engagement",
      "Topical authority cluster strategy",
      "Quarterly content refresh discipline",
    ],
    affects: ["ai-search", "press", "email"],
  },
  {
    id: "reputation",
    Icon: Star,
    title: "Reputation Management",
    subtitle: "Review velocity + response discipline",
    description:
      "Google weighs review count, velocity, and recency more than star rating alone. We engineer your review pipeline to generate 8-20 new reviews/month with 24-hour response discipline (positive or negative).",
    capabilities: [
      "Review request automation (post-engagement)",
      "Response template library + custom responses",
      "Cross-platform monitoring (Google, Avvo, Healthgrades, RealSelf)",
    ],
    affects: ["gmb", "lsa", "website"],
  },
  {
    id: "press",
    Icon: Newspaper,
    title: "Press & PR Outreach",
    subtitle: "Authority signals from real publications",
    description:
      "Press mentions, podcast appearances, expert commentary in industry publications, the authority signals Google and AI search engines weight heaviest. We do real outreach, not press release blasts.",
    capabilities: [
      "Targeted journalist outreach",
      "Podcast guest placements",
      "Industry publication contributor relationships",
    ],
    affects: ["ai-search", "content", "schema"],
  },
  {
    id: "schema",
    Icon: Code,
    title: "Schema & Technical SEO",
    subtitle: "The invisible foundation",
    description:
      "Schema markup, technical SEO, and entity signals are the invisible infrastructure that makes everything else work. Most agencies skip this. We obsess over it.",
    capabilities: [
      "LegalService / MedicalBusiness / Attorney / Physician schemas",
      "Entity disambiguation across surfaces",
      "Core Web Vitals & technical health",
    ],
    affects: ["ai-search", "gmb", "content"],
  },
  {
    id: "email",
    Icon: Mail,
    title: "Email & Newsletter",
    subtitle: "Nurture leads that don't convert immediately",
    description:
      "Most legal/medical decisions take 3-9 touchpoints over weeks or months. We build email sequences and newsletters that nurture prospects through long decision cycles, turning research-stage visitors into eventual clients.",
    capabilities: [
      "Drip sequence engineering",
      "Monthly newsletter strategy & execution",
      "List segmentation & behavioral triggers",
    ],
    affects: ["website", "content", "reputation"],
  },
  {
    id: "social",
    Icon: Camera,
    title: "Social Media Growth",
    subtitle: "Authority, presence, and proof at every surface",
    description:
      "Most law firms and medical practices ignore social media, or run it badly. We engineer presence on Instagram, TikTok, and YouTube Shorts that builds authority, captures attention from younger prospects, and turns short-form video into a real lead source. Backed by the same team that grew an AI influencer to 100M views in 60 days.",
    capabilities: [
      "Short-form video strategy & production direction",
      "Platform-specific content calendars",
      "Trend monitoring & rapid response content",
      "Authority-building reels for legal/medical professionals",
    ],
    affects: ["content", "reputation", "email"],
  },
];

const ID_TO_TITLE: Record<string, string> = CARDS.reduce(
  (acc, c) => ({ ...acc, [c.id]: c.title }),
  {} as Record<string, string>
);

export function TenComponents() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section className="nine-components ten-components" id="ten-components">
      <div className="nine-inner">
        <div className="nine-header">
          <div className="page-section-eyebrow">The components</div>
          <h2 className="nine-h2">
            Every part of the engine,{" "}
            <span className="accent-italic">engineered.</span>
          </h2>
          <p className="nine-sub">
            Ten specialized services. One unified system. Each component has
            its own team, its own playbook, and its own data dashboard, all
            coordinated through First Position methodology.
          </p>
        </div>

        <div className="nine-grid ten-grid">
          {CARDS.map((c, i) => {
            const I = c.Icon;
            const isHovered = hovered === c.id;
            const isAffected =
              hovered && CARDS.find((cc) => cc.id === hovered)?.affects.includes(c.id);
            return (
              <motion.article
                key={c.id}
                className={`nine-card${isHovered ? " is-hovered" : ""}${
                  isAffected ? " is-affected" : ""
                }`}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                onMouseEnter={() => setHovered(c.id)}
                onMouseLeave={() => setHovered(null)}
              >
                <div className="nine-card-num">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="nine-card-icon">
                  <I size={22} strokeWidth={1.6} aria-hidden="true" />
                </div>
                <h3 className="nine-card-title">{c.title}</h3>
                <p className="nine-card-subtitle">{c.subtitle}</p>
                <p className="nine-card-desc">{c.description}</p>
                <ul className="nine-card-caps">
                  {c.capabilities.map((cap) => (
                    <li key={cap}>
                      <span className="nine-card-cap-mark" aria-hidden="true">
                        +
                      </span>
                      {cap}
                    </li>
                  ))}
                </ul>
                <div className="nine-card-affects">
                  <span className="nine-card-affects-label">Affects</span>{" "}
                  {c.affects.map((id) => ID_TO_TITLE[id]).join(" · ")}
                </div>
              </motion.article>
            );
          })}
        </div>

        <div className="nine-footer">
          <p className="nine-footer-line">
            Most agencies sell three of these.{" "}
            <span className="accent-italic">We run all ten, as one engine.</span>
          </p>
          <Link href="/audit" className="nine-cta">
            See how your engine could be built <span className="arrow">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
