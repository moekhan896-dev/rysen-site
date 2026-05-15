"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { AmbientTriangle } from "@/components/brand/AmbientTriangle";
import { SignalTriangle } from "@/components/brand/SignalTriangle";
import { FirmAtAGlance } from "@/components/sections/FirmAtAGlance";
import { HeroSearchAnimation } from "@/components/sections/HeroSearchAnimation";
import { WhatThisMeans } from "@/components/sections/WhatThisMeans";
import {
  WhoRunsRysenPreview,
  OrganicEnginePreview,
  TenComponentsPreview,
  SelectedEngagementsPreview,
  DataScienceEdgePreview,
  VerticalsWeServe,
  MadisonClarkPreview,
  HowWeWorkPreview,
  FinalCTAPreview,
} from "@/components/sections/homepage-previews";

const HERO_HEADLINE =
  "A boutique agency for law firms and medical practices that intend to organically dominate their market.";

const HERO_CLARITY: ReadonlyArray<{ label: string; value: string }> = [
  { label: "What we build", value: "Organic Growth Engines" },
  { label: "For", value: "Law firms & medical practices" },
  { label: "How", value: "10 coordinated components, data-driven" },
  { label: "Where", value: "Detroit, MI · 100% US team" },
];

export default function HomePage() {
  const shouldReduceMotion = useReducedMotion();

  const heroBlockVariants: Variants = {
    hidden: { opacity: 0, y: 16 },
    visible: shouldReduceMotion
      ? { opacity: 1, y: 0, transition: { duration: 0 } }
      : {
          opacity: 1,
          y: 0,
          transition: { duration: 1.4, delay: 0.2, ease: [0.19, 1, 0.22, 1] },
        },
  };

  const subheadVariants: Variants = {
    hidden: { opacity: 0, y: 12 },
    visible: shouldReduceMotion
      ? { opacity: 1, y: 0, transition: { duration: 0 } }
      : {
          opacity: 1,
          y: 0,
          transition: { duration: 1.4, delay: 0.6, ease: [0.19, 1, 0.22, 1] },
        },
  };

  const proofVariants: Variants = {
    hidden: { opacity: 0, y: 8 },
    visible: shouldReduceMotion
      ? { opacity: 1, y: 0, transition: { duration: 0 } }
      : {
          opacity: 1,
          y: 0,
          transition: {
            duration: 1,
            delay: 1,
            ease: [0.16, 1, 0.3, 1],
            staggerChildren: 0.2,
          },
        },
  };

  const proofItemVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <>
      {/* === 1. HERO === */}
      <section className="hero-rebrand" aria-label="Hero">
        <div className="hero-rebrand-corner-mark">
          <AmbientTriangle size={16} />
        </div>

        <div className="hero-rebrand-grid">
          <div className="hero-rebrand-content">
            <div className="hero-rebrand-masthead">
              <hr className="hero-rebrand-masthead-rule" aria-hidden="true" />
              <div className="hero-rebrand-masthead-row">
                <span className="hero-rebrand-masthead-item">
                  Detroit, Michigan · Founded 2019
                </span>
                <span className="hero-rebrand-masthead-item">
                  An independent firm
                </span>
              </div>
            </div>

            <motion.h1
              className="hero-rebrand-headline"
              variants={heroBlockVariants}
              initial="hidden"
              animate="visible"
            >
              {HERO_HEADLINE}
            </motion.h1>

            <motion.p
              className="hero-rebrand-subhead"
              variants={subheadVariants}
              initial="hidden"
              animate="visible"
            >
              Run by people who have actually built brands of their own,
              supported by a data science team that measures every dollar in
              revenue, not impressions. A US-based firm that puts its
              methodology where its money is.
            </motion.p>

            <motion.div
              className="hero-clarity-block"
              variants={proofVariants}
              initial="hidden"
              animate="visible"
            >
              <hr className="hero-clarity-rule" aria-hidden="true" />
              <div className="hero-clarity-grid">
                {HERO_CLARITY.map((item) => (
                  <motion.div
                    key={item.label}
                    className="clarity-item"
                    variants={proofItemVariants}
                  >
                    <span className="clarity-label">{item.label}</span>
                    <span className="clarity-value">{item.value}</span>
                  </motion.div>
                ))}
              </div>
              <hr className="hero-clarity-rule" aria-hidden="true" />
            </motion.div>

            <div className="hero-rebrand-cta-row">
              <a href="/audit" className="hero-rebrand-cta-primary">
                Request audit
              </a>
              <a href="/case-studies" className="hero-rebrand-cta-secondary">
                View case studies
                <SignalTriangle size={10} decorative />
              </a>
            </div>
          </div>

          <div className="hero-rebrand-visual">
            <HeroSearchAnimation />
          </div>
        </div>
      </section>

      {/* === 2. FIRM AT A GLANCE === */}
      <FirmAtAGlance />

      {/* === 3. WHO RUNS RYSEN (preview → /about) === */}
      <WhoRunsRysenPreview />

      {/* === 4. WHAT THIS MEANS FOR YOUR FIRM === */}
      <WhatThisMeans />

      {/* === 5. ORGANIC GROWTH ENGINE PREVIEW (→ /methodology) === */}
      <OrganicEnginePreview />

      {/* === 6. THE TEN COMPONENTS PREVIEW (→ /services) === */}
      <TenComponentsPreview />

      {/* === 7. SELECTED ENGAGEMENTS (→ /case-studies) === */}
      <SelectedEngagementsPreview />

      {/* === 8. THE DATA SCIENCE EDGE (→ /how-we-measure) === */}
      <DataScienceEdgePreview />

      {/* === 9. VERTICALS WE SERVE (→ /legal /medical) === */}
      <VerticalsWeServe />

      {/* === 10. MADISON CLARK CASE STUDY PREVIEW === */}
      <MadisonClarkPreview />

      {/* === 11. HOW WE WORK PREVIEW (→ /how-we-work) === */}
      <HowWeWorkPreview />

      {/* === 12. FINAL CTA === */}
      <FinalCTAPreview />
    </>
  );
}
