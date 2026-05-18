"use client";

import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { AmbientTriangle } from "@/components/brand/AmbientTriangle";
import { SignalTriangle } from "@/components/brand/SignalTriangle";

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const fadeUp = (delay = 0): Variants => ({
    hidden: { opacity: 0, y: 14 },
    visible: shouldReduceMotion
      ? { opacity: 1, y: 0, transition: { duration: 0 } }
      : {
          opacity: 1,
          y: 0,
          transition: { duration: 0.9, delay, ease: [0.19, 1, 0.22, 1] },
        },
  });

  return (
    <section className="hero31" aria-label="Hero">
      <div className="hero31__corner-mark">
        <AmbientTriangle size={16} />
      </div>

      <div className="hero31__masthead">
        <hr className="hero31__masthead-rule" aria-hidden="true" />
        <div className="hero31__masthead-row">
          <span className="hero31__masthead-item">
            Detroit, Michigan · Founded 2019
          </span>
          <span className="hero31__masthead-item">
            30+ engagements · 4 states
          </span>
        </div>
      </div>

      <div className="hero31__grid">
        <div className="hero31__content">
          <motion.p
            className="hero31__caption"
            variants={fadeUp(0)}
            initial="hidden"
            animate="visible"
          >
            What if you stopped competing for visibility?
          </motion.p>

          <motion.h1
            className="hero31__headline"
            variants={fadeUp(0.15)}
            initial="hidden"
            animate="visible"
          >
            Imagine your{" "}
            <span className="hero-headline__highlight hero-headline__highlight--a">
              law firm
            </span>{" "}
            or{" "}
            <span className="hero-headline__highlight hero-headline__highlight--b">
              medical practice
            </span>{" "}
            appeared at the top of every search in your city.
          </motion.h1>

          <motion.div
            className="hero31__cta-row"
            variants={fadeUp(0.55)}
            initial="hidden"
            animate="visible"
          >
            <Link href="/audit" className="hero31__cta-primary">
              Request audit
            </Link>
            <Link href="/case-studies" className="hero31__cta-secondary">
              View case studies
              <SignalTriangle size={10} decorative />
            </Link>
          </motion.div>
        </div>

        <motion.div
          className="hero31__visual"
          variants={fadeUp(0.35)}
          initial="hidden"
          animate="visible"
        >
          <div
            className="hero-search-demo"
            role="img"
            aria-label="A representative client appearing at the #1 position for a category search."
          >
            <div className="hero-search-demo__bar">
              <span className="hero-search-demo__bar-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <circle cx="10.5" cy="10.5" r="6.5" />
                  <line x1="15.5" y1="15.5" x2="20" y2="20" />
                </svg>
              </span>
              <span className="hero-search-demo__bar-text">
                best personal injury attorney near me
              </span>
            </div>

            <div className="hero-search-demo__result">
              <span className="hero-search-demo__rank-tag">#1</span>
              <div className="hero-search-demo__rank-badge" aria-hidden="true">
                1
              </div>
              <div className="hero-search-demo__result-body">
                <span className="hero-search-demo__result-url">
                  yourfirm.com › practice-areas › personal-injury
                </span>
                <span className="hero-search-demo__result-title">
                  Personal Injury Attorneys — Free Case Review
                </span>
                <span className="hero-search-demo__result-desc">
                  Boutique firm representing injured clients across the state.
                  Decades of trial experience. No fee unless we win your case.
                </span>
              </div>
            </div>

            <div className="hero-search-demo__platforms">
              <span className="hero-search-demo__platforms-label">
                Tracked across
              </span>
              <span className="hero-search-demo__platforms-list">
                <span>Google</span>
                <span className="hero-search-demo__platforms-dot" aria-hidden="true">·</span>
                <span>ChatGPT</span>
                <span className="hero-search-demo__platforms-dot" aria-hidden="true">·</span>
                <span>Perplexity</span>
                <span className="hero-search-demo__platforms-dot" aria-hidden="true">·</span>
                <span>Gemini</span>
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="hero31__credibility"
        variants={fadeUp(0.75)}
        initial="hidden"
        animate="visible"
      >
        <hr className="hero31__credibility-rule" aria-hidden="true" />
        <p className="hero31__credibility-text">
          Selected client rankings. Real engagements. Updated daily.
        </p>
      </motion.div>
    </section>
  );
}
