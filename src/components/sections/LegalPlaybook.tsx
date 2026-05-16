"use client";

import {
  Building2,
  Clock,
  FileText,
  Gavel,
  Globe,
  Heart,
  Home,
  ShieldCheck,
  Users,
} from "lucide-react";
import { PlaybookSection } from "./PlaybookSection";

const CHALLENGES = [
  {
    title: "Long decision cycles",
    desc: "Prospects often research for weeks before hiring. Our content and email sequences nurture cold leads across long decision timelines.",
  },
  {
    title: "Trust-first conversion",
    desc: "Legal decisions are high-stakes. Authority signals, publications, schema, citations, reviews, matter more than ad spend. We engineer trust before we ask for the call.",
  },
  {
    title: "Geo-specific intent",
    desc: "Almost every legal search has geographic intent. We architect hyperlocal strategies, neighborhood, metro, region, not generic statewide visibility.",
  },
  {
    title: "Bar compliance & advertising regulation",
    desc: "Legal advertising is regulated state-by-state. We understand bar advertising rules in every state where we operate and ensure compliance in every ad, page, and review request.",
  },
  {
    title: "Practice-area specificity",
    desc: "A probate attorney needs different content than a personal injury attorney. We don't run generic “lawyer marketing”, we run practice-area-specific playbooks.",
  },
];

const PRACTICE_AREAS = [
  { name: "Personal Injury", metric: "3 firms · 5 metros", Icon: ShieldCheck },
  { name: "Family Law & Divorce", metric: "4 firms · 6 metros", Icon: Heart },
  { name: "Estate Planning & Probate", metric: "5 firms · 7 metros", Icon: FileText },
  { name: "Criminal Defense", metric: "2 firms · 3 metros", Icon: Gavel },
  { name: "Business & Corporate", metric: "2 firms · 4 metros", Icon: Building2 },
  { name: "Immigration", metric: "1 firm · 2 metros", Icon: Globe },
  { name: "Employment", metric: "1 firm · 2 metros", Icon: Users },
  { name: "Real Estate", metric: "1 firm · 2 metros", Icon: Home },
  { name: "Bankruptcy", metric: "1 firm · 1 metro", Icon: Clock },
] as const;

const WEIGHTS = [
  { name: "GMB", weight: 5, comparison: "1.2× medical" },
  { name: "LSA", weight: 5, comparison: "1.6× medical" },
  { name: "Authority Content", weight: 5, comparison: "1.3× medical" },
  { name: "Reputation", weight: 4, comparison: "0.9× medical" },
  { name: "Website CRO", weight: 3, comparison: "0.8× medical" },
  { name: "AI Search", weight: 3, comparison: "1.1× medical" },
  { name: "Schema & Tech", weight: 3, comparison: "0.9× medical" },
  { name: "Press & PR", weight: 2, comparison: "0.9× medical" },
  { name: "Email & Newsletter", weight: 2, comparison: "0.7× medical" },
];

export function LegalPlaybook() {
  return (
    <PlaybookSection
      variant="legal"
      eyebrow="Vertical, legal"
      title={
        <>
          The <span className="accent-italic">Legal</span> Playbook.
        </>
      }
      subtitle="Built specifically for law firms. Different from medical. Different from generic SEO agency tactics. Tailored to the way prospects research, evaluate, and hire attorneys."
      challenges={CHALLENGES}
      practiceAreas={PRACTICE_AREAS}
      practiceFooter="9 practice areas · 18 law firms served · 4 states"
      weights={WEIGHTS}
      weightedFooter="Same engine. Tuned for legal."
      ctaText="See a legal-specific audit"
    />
  );
}

