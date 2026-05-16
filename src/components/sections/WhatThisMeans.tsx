"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { AmbientTriangle } from "@/components/brand/AmbientTriangle";
import { SignalTriangle } from "@/components/brand/SignalTriangle";
import { ContinueReading } from "@/components/primitives/ContinueReading";
import { ScrollReveal } from "@/components/utilities/ScrollReveal";

interface Station {
  time: string;
  title: string;
  brief: string;
  /** Use <em> for the percentage range with tabular-nums. */
  signal: React.ReactNode;
}

const STATIONS: ReadonlyArray<Station> = [
  {
    time: "Day 90",
    title: "Foundation complete.",
    brief:
      "Technical SEO audit shipped. GMB profile fully optimized. Initial content pipeline live. Custom attribution dashboard active and reviewed weekly.",
    signal: (
      <>
        Typical visibility gain: <em>15 to 25 percent</em>.
      </>
    ),
  },
  {
    time: "Month 6",
    title: "Compound visibility begins.",
    brief:
      "Core practice area queries ranking in top five. Review velocity three to five times baseline. AI search citations starting to appear.",
    signal: (
      <>
        Typical revenue lift: <em>40 to 80 percent</em> from organic.
      </>
    ),
  },
  {
    time: "Year 1",
    title: "Market position established.",
    brief:
      "Number one ranking achieved in primary metro. AI Overview citations across thirty percent or more of relevant queries. Press placements secured.",
    signal: (
      <>
        Typical revenue lift: <em>150 to 300 percent</em> from organic.
      </>
    ),
  },
  {
    time: "Year 2",
    title: "Sustained dominance.",
    brief:
      "Top three rankings across all priority queries. Review moat insurmountable. Authority library compounding citations. Engagement shifts to operational mode.",
    signal: (
      <>
        Typical revenue lift: <em>300 to 500 percent</em>, sustained.
      </>
    ),
  },
];

export function WhatThisMeans() {
  const railRef = useRef<SVGSVGElement>(null);
  const [drawn, setDrawn] = useState(false);

  useEffect(() => {
    const node = railRef.current;
    if (!node) return;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) {
      setDrawn(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setDrawn(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -60px 0px" }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="trajectory-section"
      aria-label="What this means for your firm"
      data-context="paper"
    >
      <div className="section-corner-mark">
        <AmbientTriangle size={16} />
      </div>

      <div className="trajectory-section-inner">
        <ScrollReveal>
          <div className="section-eyebrow">
            <SignalTriangle size={10} decorative />
            <span className="eyebrow-rule" aria-hidden="true" />
            <span className="eyebrow-text">What this means for your firm</span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={150}>
          <h2 className="trajectory-heading">
            Concrete outcomes, on a real timeline.
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={300}>
          <p className="trajectory-intro">
            Marketing claims are easy. Real outcomes are not. Here is what
            happens when a law firm or medical practice engages Rysen, traced
            across the operating timeline.
          </p>
        </ScrollReveal>

        <div className="trajectory-rail">
          <svg
            ref={railRef}
            className="trajectory-rail__svg"
            viewBox="0 0 1200 14"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            {/* Base hairline */}
            <line
              x1="0"
              y1="7"
              x2="1200"
              y2="7"
              stroke="var(--ink)"
              strokeOpacity="0.18"
              strokeWidth="1"
            />
            {/* Yellow progress (draws on scroll) */}
            <line
              x1="0"
              y1="7"
              x2="1200"
              y2="7"
              stroke="var(--signal)"
              strokeWidth="2"
              strokeDasharray="1200"
              strokeDashoffset={drawn ? 0 : 1200}
              style={{
                transition:
                  "stroke-dashoffset 1200ms cubic-bezier(0.22, 1, 0.36, 1)",
              }}
            />
          </svg>

          <div className="trajectory-stations">
            {STATIONS.map((s, i) => (
              <ScrollReveal key={s.time} delay={i * 150}>
                <article className="trajectory-station">
                  <span
                    className="trajectory-station__marker"
                    aria-hidden="true"
                  >
                    <SignalTriangle size={12} decorative />
                  </span>
                  <span className="trajectory-station__time">{s.time}</span>
                  <h3 className="trajectory-station__title">{s.title}</h3>
                  <p className="trajectory-station__brief">{s.brief}</p>
                  <p className="trajectory-station__signal">{s.signal}</p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>

        <ScrollReveal delay={600}>
          <p className="trajectory-footnote">
            Drawn from average outcomes across{" "}
            <Link href="/case-studies" className="text-link">
              thirty-plus active engagements
            </Link>
            . Individual results vary by metro saturation and practice area
            competitiveness.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={750}>
          <ContinueReading
            href="/case-studies"
            label="See selected case studies"
            context="paper"
          />
        </ScrollReveal>
      </div>
    </section>
  );
}
