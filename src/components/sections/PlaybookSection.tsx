"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export interface Challenge {
  readonly title: string;
  readonly desc: string;
  readonly tactics?: ReadonlyArray<string>;
}

export interface PracticeArea {
  readonly name: string;
  readonly metric: string;
  readonly Icon: LucideIcon;
}

export interface WeightedComponent {
  readonly name: string;
  readonly weight: number; // 1-5
  readonly comparison: string; // e.g. "1.4x medical weight"
}

export interface PlaybookProps {
  readonly variant: "legal" | "medical";
  readonly eyebrow: string;
  readonly title: React.ReactNode;
  readonly subtitle: string;
  readonly challenges: ReadonlyArray<Challenge>;
  readonly practiceAreas: ReadonlyArray<PracticeArea>;
  readonly practiceFooter: string;
  readonly weights: ReadonlyArray<WeightedComponent>;
  readonly weightedFooter: string;
  readonly ctaText: string;
}

export function PlaybookSection({
  variant,
  eyebrow,
  title,
  subtitle,
  challenges,
  practiceAreas,
  practiceFooter,
  weights,
  weightedFooter,
  ctaText,
}: PlaybookProps) {
  const reducedMotion = useReducedMotion();
  const [activePulse, setActivePulse] = useState<number>(-1);

  useEffect(() => {
    if (reducedMotion) return;
    const timeouts: ReturnType<typeof setTimeout>[] = [];
    const id = setInterval(() => {
      const next = Math.floor(Math.random() * practiceAreas.length);
      setActivePulse(next);
      const t = setTimeout(() => setActivePulse(-1), 600);
      timeouts.push(t);
    }, 2000);
    return () => {
      clearInterval(id);
      timeouts.forEach(clearTimeout);
    };
  }, [reducedMotion, practiceAreas.length]);

  return (
    <section
      className={`playbook playbook-${variant}`}
      id={`playbook-${variant}`}
    >
      <div className="playbook-inner">
        <div className="playbook-header">
          <div className="page-section-eyebrow">{eyebrow}</div>
          <h2 className="playbook-h2">{title}</h2>
          <p className="playbook-sub">{subtitle}</p>
        </div>

        <div className="playbook-grid">
          {/* LEFT, Challenges */}
          <div className="playbook-col playbook-col-left">
            <div className="playbook-col-head">
              What makes {variant} different
            </div>
            <ul className="playbook-challenges">
              {challenges.map((c, i) => (
                <motion.li
                  key={c.title}
                  className="playbook-challenge"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.4, delay: i * 0.15 }}
                >
                  <span className="playbook-challenge-num">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <div className="playbook-challenge-title">{c.title}</div>
                    <p className="playbook-challenge-desc">{c.desc}</p>
                    {c.tactics && c.tactics.length > 0 && (
                      <ul className="playbook-challenge-tactics">
                        {c.tactics.map((t) => (
                          <li key={t}>{t}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* RIGHT, Practice Areas */}
          <div className="playbook-col playbook-col-right">
            <div className="playbook-col-head">
              {variant === "legal" ? "Practice areas we win in" : "Specialties we win in"}
            </div>
            <div className="playbook-practice-grid">
              {practiceAreas.map((p, i) => {
                const I = p.Icon;
                const isPulsing = activePulse === i;
                return (
                  <motion.div
                    key={p.name}
                    className={`playbook-practice-badge${
                      isPulsing ? " is-pulsing" : ""
                    }`}
                    initial={{ opacity: 0, scale: 0.94 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{ duration: 0.35, delay: i * 0.04 }}
                  >
                    <div className="playbook-practice-icon">
                      <I size={16} strokeWidth={1.6} aria-hidden="true" />
                    </div>
                    <div className="playbook-practice-name">{p.name}</div>
                    <div className="playbook-practice-metric">{p.metric}</div>
                  </motion.div>
                );
              })}
            </div>
            <div className="playbook-practice-footer">{practiceFooter}</div>
          </div>
        </div>

        {/* Engine Configuration */}
        <div className="playbook-config">
          <div className="playbook-config-head">
            <div className="page-section-eyebrow">Engine configuration</div>
            <h3 className="playbook-config-title">
              Same engine.{" "}
              <span className="accent-italic">
                Tuned for {variant}.
              </span>
            </h3>
          </div>

          <div className="playbook-weights">
            {weights.map((w, i) => {
              const sizePct = 40 + w.weight * 12; // 52 → 100
              return (
                <motion.div
                  key={w.name}
                  className="playbook-weight"
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.3, delay: i * 0.04 }}
                >
                  <div
                    className="playbook-weight-node"
                    style={{ width: `${sizePct}px`, height: `${sizePct}px` }}
                  />
                  <div className="playbook-weight-name">{w.name}</div>
                  <div className="playbook-weight-comp">{w.comparison}</div>
                </motion.div>
              );
            })}
          </div>

          <div className="playbook-config-footer">{weightedFooter}</div>
        </div>

        <div className="playbook-cta-row">
          <Link href="/audit" className="playbook-cta">
            {ctaText} <span className="arrow">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
