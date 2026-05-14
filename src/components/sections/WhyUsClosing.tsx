"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface Row {
  readonly title: string;
  readonly body: string;
  readonly proof: string;
}

const ROWS: ReadonlyArray<Row> = [
  {
    title: "US-BASED. ALL OF US.",
    body: "Every team member is based in the United States. Most are in Detroit. No outsourced content, no overseas link builders, no time zone gaps in operations.",
    proof: "100% US team · 0 outsourced roles",
  },
  {
    title: "WE ONLY DO LEGAL AND MEDICAL.",
    body: "Other agencies serve dentists, real estate, e-commerce, restaurants. We don't. Every playbook, every dashboard, every team member is specialized for law firms and medical practices.",
    proof: "30+ legal/medical clients · 0 outside the verticals",
  },
  {
    title: "WE'RE DATA-OBSESSED, NOT JUST DATA-CLAIMING.",
    body: "Most agencies say 'data-driven' and send PDF reports. We build live attribution dashboards, run weekly internal data reviews, and tie every dollar of marketing to closed cases/patients via CRM integration.",
    proof: "7 internal data systems · Weekly review cadence",
  },
  {
    title: "WE BUILT THE INFRASTRUCTURE OURSELVES.",
    body: "Custom rank tracking software. Custom attribution dashboards. Custom AI search monitoring tools. We didn't buy a SaaS stack and rebadge it — we built the operational layer ourselves so it actually fits what we do.",
    proof: "5+ proprietary tools · Built in-house",
  },
  {
    title: "WE TURN DOWN MORE WORK THAN WE TAKE.",
    body: "We don't onboard every firm that asks. We screen for fit — local market dominance opportunity, partner-level commitment, willingness to invest 6-12 months minimum. If you're not the right fit, we'll tell you in the audit call.",
    proof: "~32% acceptance rate · Audit-first onboarding",
  },
];

export function WhyUsClosing() {
  const reducedMotion = useReducedMotion();
  const [pulseIdx, setPulseIdx] = useState<number>(0);

  useEffect(() => {
    if (reducedMotion) return;
    const id = setInterval(() => {
      setPulseIdx((i) => (i + 1) % ROWS.length);
    }, 2500);
    return () => clearInterval(id);
  }, [reducedMotion]);

  return (
    <section className="why-us-closing" id="why-us">
      <div className="why-us-inner">
        <div className="why-us-header">
          <div className="page-section-eyebrow">THE CASE FOR RYSEN</div>
          <h2 className="why-us-h2">
            Here&apos;s why firms pick us over the{" "}
            <span className="accent-italic">other 47 agencies</span> pitching
            them.
          </h2>
          <p className="why-us-sub">
            We didn&apos;t pick a wedge for marketing reasons. We picked it
            because it&apos;s true. Here&apos;s the case in five lines.
          </p>
        </div>

        <ol className="why-us-rows">
          {ROWS.map((r, i) => (
            <motion.li
              key={r.title}
              className="why-us-row"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <span
                className={`why-us-num${pulseIdx === i ? " is-pulsing" : ""}`}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="why-us-body">
                <h3 className="why-us-row-title">{r.title}</h3>
                <p className="why-us-row-desc">{r.body}</p>
              </div>
              <div
                className={`why-us-proof${pulseIdx === i ? " is-pulsing" : ""}`}
              >
                {r.proof}
              </div>
            </motion.li>
          ))}
        </ol>

        <div className="why-us-closing-text">
          <p>
            If those five lines describe what you want in an agency,
            <br />
            we should talk.
          </p>
        </div>

        <div className="why-us-cta-row">
          <Link href="/audit" className="why-us-cta">
            Book the audit call <span className="arrow">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
