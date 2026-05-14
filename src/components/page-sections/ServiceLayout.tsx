"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

export interface Capability {
  readonly icon: ReactNode;
  readonly title: string;
  readonly desc: string;
}

export interface ProcessStep {
  readonly title: string;
  readonly desc: string;
}

interface ServiceLayoutProps {
  readonly problemTitle: string;
  readonly problemBody: ReadonlyArray<string>;
  readonly capabilities: ReadonlyArray<Capability>;
  readonly process: ReadonlyArray<ProcessStep>;
  readonly proofEyebrow: string;
  readonly proofHeadline: string;
  readonly proofBody: string;
  readonly proofHref: string;
  readonly deliverables: ReadonlyArray<string>;
}

export function ServiceCapabilitiesGrid({
  capabilities,
}: {
  capabilities: ReadonlyArray<Capability>;
}) {
  return (
    <div className="service-capabilities-grid">
      {capabilities.map((c, i) => {
        return (
          <motion.div
            key={c.title}
            className="service-capability"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
          >
            <div className="service-capability-icon">{c.icon}</div>
            <h3 className="service-capability-title">{c.title}</h3>
            <p className="service-capability-desc">{c.desc}</p>
          </motion.div>
        );
      })}
    </div>
  );
}

export function ServiceProcessSteps({
  steps,
}: {
  steps: ReadonlyArray<ProcessStep>;
}) {
  return (
    <ol className="service-process">
      {steps.map((step, i) => (
        <motion.li
          key={step.title}
          className="service-process-step"
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.4, delay: i * 0.1 }}
        >
          <div className="service-process-num">{`0${i + 1}`}</div>
          <div className="service-process-body">
            <div className="service-process-title">{step.title}</div>
            <p className="service-process-desc">{step.desc}</p>
          </div>
        </motion.li>
      ))}
    </ol>
  );
}

export function ServiceProofReference({
  eyebrow,
  headline,
  body,
  href,
}: {
  eyebrow: string;
  headline: string;
  body: string;
  href: string;
}) {
  return (
    <div className="service-proof">
      <div className="service-proof-eyebrow">{eyebrow}</div>
      <h3 className="service-proof-headline">{headline}</h3>
      <p className="service-proof-body">{body}</p>
      <Link href={href} className="service-proof-link">
        Read the full case study <span className="arrow">→</span>
      </Link>
    </div>
  );
}

export function ServiceDeliverables({
  items,
}: {
  items: ReadonlyArray<string>;
}) {
  return (
    <ul className="service-deliverables">
      {items.map((item, i) => (
        <motion.li
          key={item}
          initial={{ opacity: 0, x: -8 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.3, delay: i * 0.06 }}
        >
          <span className="service-deliverable-mark" aria-hidden="true">
            ✓
          </span>
          {item}
        </motion.li>
      ))}
    </ul>
  );
}

export type { ServiceLayoutProps };
