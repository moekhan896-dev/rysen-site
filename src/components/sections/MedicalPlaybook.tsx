"use client";

import {
  Activity,
  Baby,
  Brain,
  Heart,
  Smile,
  Sparkles,
  Stethoscope,
  Zap,
} from "lucide-react";
import { PlaybookSection } from "./PlaybookSection";

const CHALLENGES = [
  {
    title: "HIPAA-compliant marketing",
    desc: "Patient privacy is non-negotiable. Every review request, every testimonial, every content piece is engineered for HIPAA compliance from day one.",
  },
  {
    title: "Insurance-aware funnels",
    desc: "Patients filter by insurance acceptance before they filter by location. We structure your visibility around the insurance networks you accept — not just your specialty.",
  },
  {
    title: "Before/after content strategy",
    desc: "For aesthetic-driven practices (derma, plastic surgery, dental), visual proof matters. We engineer a content pipeline that showcases results while protecting patient privacy.",
  },
  {
    title: "Provider-level authority",
    desc: "Patients don't hire “a practice” — they hire a specific doctor. We build authority at the provider level, not just the practice level, so prospective patients trust the specific physician they'll see.",
  },
  {
    title: "Insurance-specific GMB optimization",
    desc: "Google's medical category attributes (insurance accepted, languages spoken, conditions treated) significantly affect local pack rankings. We optimize for the attributes patients actually filter by.",
  },
];

const PRACTICE_AREAS = [
  { name: "Dermatology", metric: "3 practices · 4 metros", Icon: Sparkles },
  { name: "Dental", metric: "2 practices · 5 metros", Icon: Smile },
  { name: "Chiropractic", metric: "1 practice · 2 metros", Icon: Activity },
  { name: "Plastic Surgery", metric: "1 practice · 2 metros", Icon: Heart },
  { name: "Cardiology", metric: "1 practice · 1 metro", Icon: Heart },
  { name: "Orthopedics", metric: "1 practice · 2 metros", Icon: Zap },
  { name: "Family Medicine", metric: "1 practice · 1 metro", Icon: Stethoscope },
  { name: "Pediatrics", metric: "1 practice · 1 metro", Icon: Baby },
  { name: "Mental Health", metric: "1 practice · 1 metro", Icon: Brain },
];

const WEIGHTS = [
  { name: "Reputation", weight: 5, comparison: "1.4× legal" },
  { name: "Authority Content", weight: 5, comparison: "1.1× legal" },
  { name: "GMB", weight: 5, comparison: "0.95× legal" },
  { name: "Website CRO", weight: 4, comparison: "1.4× legal" },
  { name: "Schema & Tech", weight: 4, comparison: "1.3× legal" },
  { name: "AI Search", weight: 3, comparison: "1.0× legal" },
  { name: "Press & PR", weight: 3, comparison: "1.3× legal" },
  { name: "Email & Newsletter", weight: 3, comparison: "1.5× legal" },
  { name: "LSA", weight: 2, comparison: "0.5× legal" },
];

export function MedicalPlaybook() {
  return (
    <PlaybookSection
      variant="medical"
      eyebrow="Vertical — medical"
      title={
        <>
          The <span className="accent-italic">Medical</span> Playbook.
        </>
      }
      subtitle="Built specifically for medical practices. Different from legal. Different from generic local SEO. Tailored to how patients research, evaluate, and choose providers."
      challenges={CHALLENGES}
      practiceAreas={PRACTICE_AREAS}
      practiceFooter="9 specialties · 12 practices served · 4 states"
      weights={WEIGHTS}
      weightedFooter="Same engine. Tuned for medical."
      ctaText="See a medical-specific audit"
    />
  );
}

