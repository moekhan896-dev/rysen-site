"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const SELL: ReadonlyArray<{ readonly label: string; readonly desc: string }> = [
  { label: "Outcomes", desc: "Cases, patients, revenue, measured." },
  { label: "Revenue attribution", desc: "Every channel tied to dollars." },
  { label: "#1 rankings", desc: "Position one, or it doesn’t count." },
  { label: "Weekly accountability", desc: "Every account, every Monday." },
  { label: "Honest pacing", desc: "Months 1-6 are foundation. We tell you that." },
];

const DONT: ReadonlyArray<{ readonly label: string; readonly desc: string }> = [
  { label: "Impressions", desc: "Eyeball counts that pay no one." },
  { label: "Vanity metrics", desc: "Likes, followers, sessions in isolation." },
  { label: "Templated tactics", desc: "Plug-and-play doesn’t win competitive metros." },
  { label: "Quarterly reviews", desc: "By month three, the strategy is stale." },
  { label: "Aggressive selling", desc: "If we can’t win for you, we’ll say so." },
];

export function AboutPrinciples() {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });

  return (
    <section className="about-principles">
      <div className="about-principles-inner">
        <div className="about-principles-header">
          <div className="page-section-eyebrow">Our principles</div>
          <h2 className="page-section-title">
            What we sell. <span className="accent-italic">What we don’t.</span>
          </h2>
        </div>

        <div className="about-principles-grid" ref={ref}>
          <div className="about-principles-col about-principles-sell">
            <div className="about-principles-col-head">What we sell</div>
            <ul>
              {SELL.map((item, i) => (
                <motion.li
                  key={item.label}
                  initial={{ opacity: 0, x: -12 }}
                  animate={inView ? { opacity: 1, x: 0 } : undefined}
                  transition={{ duration: 0.4, delay: 0.08 * i, ease: "easeOut" }}
                >
                  <span className="about-principles-bullet" aria-hidden="true">
                    +
                  </span>
                  <div>
                    <div className="about-principles-label">{item.label}</div>
                    <div className="about-principles-desc">{item.desc}</div>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="about-principles-divider" aria-hidden="true" />

          <div className="about-principles-col about-principles-dont">
            <div className="about-principles-col-head">What we don’t</div>
            <ul>
              {DONT.map((item, i) => (
                <motion.li
                  key={item.label}
                  initial={{ opacity: 0, x: 12 }}
                  animate={inView ? { opacity: 1, x: 0 } : undefined}
                  transition={{ duration: 0.4, delay: 0.08 * i, ease: "easeOut" }}
                >
                  <span className="about-principles-bullet about-principles-bullet-x" aria-hidden="true">
                    ×
                  </span>
                  <div>
                    <div
                      className={`about-principles-label about-principles-label-strike${
                        inView ? " is-struck" : ""
                      }`}
                    >
                      {item.label}
                    </div>
                    <div className="about-principles-desc">{item.desc}</div>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
