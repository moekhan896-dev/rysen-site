"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const STEPS = [
  {
    n: "01",
    title: "You submit your website",
    duration: "~30 seconds",
    desc: "Drop your URL, name, email, and practice area in the form above.",
  },
  {
    n: "02",
    title: "We audit your visibility",
    duration: "~48 hours",
    desc: "Our analysts do the real work, no automated reports, no scraped boilerplate.",
  },
  {
    n: "03",
    title: "We send you the PDF",
    duration: "No sales call, no pressure",
    desc: "You read it on your own time. If you want a quote, you'll ask us.",
  },
] as const;

export function AuditHowItWorks() {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <div className="audit-timeline" ref={ref}>
      <div
        className={`audit-timeline-line${inView ? " is-drawn" : ""}`}
        aria-hidden="true"
      />
      <div className="audit-timeline-steps">
        {STEPS.map((s, i) => (
          <motion.div
            key={s.n}
            className="audit-step"
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
          >
            <div className="audit-step-num">{s.n}</div>
            <div className="audit-step-title">{s.title}</div>
            <div className="audit-step-duration">{s.duration}</div>
            <p className="audit-step-desc">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
