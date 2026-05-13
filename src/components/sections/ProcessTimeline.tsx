"use client";

import { useEffect, useRef, useState } from "react";

type Step = {
  readonly num: string;
  readonly title: string;
  readonly pill: string;
  readonly desc: string;
};

const steps: ReadonlyArray<Step> = [
  {
    num: "01",
    title: "Discovery & Audit",
    pill: "Week 1",
    desc: "We map your current visibility across Google, ChatGPT, Perplexity, and AI Overviews. We benchmark you against the top three competitors in each of your priority markets. We surface every opportunity gap before recommending a strategy.",
  },
  {
    num: "02",
    title: "Strategy & Roadmap",
    pill: "Week 2",
    desc: "We design a 6-month engagement tailored to your firm's specialties, target markets, and competitive position. You get a presentation, a written strategy document, and a calendar of deliverables before any production starts.",
  },
  {
    num: "03",
    title: "Execution & Optimization",
    pill: "Months 1–6",
    desc: "Content production, technical SEO, AI search optimization, citation building, and continuous refinement. We meet biweekly. You see what's shipping, what's working, and what's being adjusted based on real data.",
  },
  {
    num: "04",
    title: "Reporting & Iteration",
    pill: "Ongoing",
    desc: "Monthly reports showing ranking movements, AI citation counts, and revenue attribution. Strategy adjusts as the AI search landscape evolves — which it does, constantly.",
  },
];

export function ProcessTimeline() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const lineRef = useRef<HTMLSpanElement | null>(null);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    const line = lineRef.current;
    if (!section || !line) return;

    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduce) {
      line.style.transform = "scaleY(1)";
      setActiveStep(steps.length - 1);
      return;
    }

    let rafId: number | null = null;
    let inView = false;

    const update = () => {
      const rect = section.getBoundingClientRect();
      const vh = window.innerHeight;
      const startCross = vh * 0.7;
      const endCross = vh * 0.3;
      const denom = rect.height - (vh - startCross - endCross);
      let progress = 0;
      if (denom > 0) progress = (startCross - rect.top) / denom;
      progress = Math.max(0, Math.min(1, progress));
      line.style.transform = `scaleY(${progress})`;
      // Determine active step from progress
      const idx = Math.min(
        steps.length - 1,
        Math.floor(progress * steps.length + 0.15)
      );
      setActiveStep(idx);
      rafId = null;
    };

    const onScroll = () => {
      if (rafId !== null) return;
      rafId = requestAnimationFrame(update);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          inView = e.isIntersecting;
          if (inView) {
            update();
            window.addEventListener("scroll", onScroll, { passive: true });
          } else {
            window.removeEventListener("scroll", onScroll);
          }
        });
      },
      { threshold: 0, rootMargin: "200px 0px 200px 0px" }
    );
    observer.observe(section);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section
      className="process-section"
      id="process"
      ref={sectionRef}
    >
      <div className="process-blob" aria-hidden="true"></div>
      <div className="process-inner">
        <div className="section-2-eyebrow process-eyebrow">Our approach</div>
        <h2 className="process-h2">
          A considered process.{" "}
          <span className="accent-text">Real timeline.</span>
        </h2>
        <p className="process-subhead">
          Engagements are structured to respect your time and produce
          measurable results within a defined window.
        </p>

        <div className="process-chapter" aria-hidden="true">
          <span className="process-chapter-dot"></span>
          <span className="process-chapter-text">
            Step {String(activeStep + 1).padStart(2, "0")} /{" "}
            {String(steps.length).padStart(2, "0")}
          </span>
        </div>

        <ol className="process-steps process-steps-timeline">
          <span className="process-line-bg" aria-hidden="true"></span>
          <span className="process-line-fill" ref={lineRef} aria-hidden="true"></span>
          {steps.map((s, i) => (
            <li
              key={s.num}
              className={`process-step process-step-timeline${
                i <= activeStep ? " is-active" : ""
              }`}
            >
              <div className="process-num process-num-timeline">{s.num}</div>
              <div className="process-body">
                <div className="process-title-row">
                  <h3 className="process-title">{s.title}</h3>
                  <span className="process-pill">{s.pill}</span>
                </div>
                <p className="process-desc">{s.desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
