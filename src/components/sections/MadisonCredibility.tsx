"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface Metric {
  readonly target: number;
  readonly suffix: string;
  readonly label: string;
}

const METRICS: ReadonlyArray<Metric> = [
  { target: 100, suffix: "M+", label: "Total views, 60 days" },
  { target: 850, suffix: "K", label: "Followers, 60 days" },
  { target: 0, suffix: "", label: "Ad spend, organic only" },
  { target: 100, suffix: "%", label: "AI-generated, no human" },
];

function CountUp({ target, suffix, active }: { target: number; suffix: string; active: boolean }) {
  const [value, setValue] = useState<number>(0);
  const reducedMotion = useReducedMotion();
  const startedRef = useRef(false);

  useEffect(() => {
    if (!active || startedRef.current) return;
    startedRef.current = true;
    if (reducedMotion || target === 0) {
      setValue(target);
      return;
    }
    const duration = 1500;
    const start = performance.now();
    const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      setValue(Math.round(easeOut(t) * target));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, target, reducedMotion]);

  // Special case: $0 metric shows "$0"
  if (target === 0) {
    return <>$0</>;
  }
  return (
    <>
      {value}
      {suffix}
    </>
  );
}

export function MadisonCredibility() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const reducedMotion = useReducedMotion();
  const inView = useInView(sectionRef, { once: true, margin: "-15%" });

  return (
    <section className="madison-credibility" ref={sectionRef} id="madison-credibility">
      <div className="madison-inner">
        <div className="madison-header">
          <div className="page-section-eyebrow">Growth capability</div>
          <h2 className="madison-h2">
            We grew an AI persona to{" "}
            <span className="accent-italic">100 million views</span> in 60 days.
          </h2>
          <p className="madison-sub">
            Most agencies talk about social media. We engineered a complete AI
            influencer from scratch, Madison Clark, @itsmadisonclarkk, and grew
            her to 100M+ views in under two months. The same team. The same data
            discipline. The same operational rigor we bring to your law firm or
            medical practice.
          </p>
        </div>

        <div className="madison-grid">
          <div className="madison-metrics">
            {METRICS.map((m, i) => (
              <motion.div
                key={m.label}
                className="madison-metric"
                initial={{ opacity: 0, y: 12 }}
                animate={inView ? { opacity: 1, y: 0 } : undefined}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <div className="madison-metric-num">
                  <CountUp target={m.target} suffix={m.suffix} active={inView} />
                </div>
                <div className="madison-metric-rule" aria-hidden="true" />
                <div className="madison-metric-label">{m.label}</div>
              </motion.div>
            ))}
            <div className="madison-metric-foot">
              Real growth. Real data. Real operational playbook, applied to an
              entirely new medium.
            </div>
          </div>

          <div className="madison-visual">
            <MadisonGrowthChart inView={inView} reducedMotion={reducedMotion} />
          </div>
        </div>

        <div className="madison-editorial">
          <p>
            This isn&apos;t a marketing case study. It&apos;s an engineering one.
            We architected Madison Clark from scratch, the content strategy,
            the visual identity, the posting cadence, the algorithm signals,
            the retention hooks. Then we ran it like an operational system:
            daily monitoring, weekly iteration, monthly strategic review. The
            same playbook we run for our law firm and medical practice clients,
            just applied to a different surface.
          </p>
          <p>
            If a team can grow a brand-new AI persona from zero to 100 million
            views in 60 days using only data and operational discipline,
            imagine what they can do with your existing law firm or medical
            practice, which already has years of authority, real reviews, and
            real client outcomes to work with.
          </p>
        </div>

        <div className="madison-footer-mark">
          Same team. Same data discipline. Applied to your firm.
        </div>
      </div>
    </section>
  );
}

function MadisonGrowthChart({
  inView,
  reducedMotion,
}: {
  inView: boolean;
  reducedMotion: boolean;
}) {
  // Three growth curves: main accent + 2 secondary tints
  const W = 400;
  const H = 460;
  const mainPath =
    "M 30,420 L 60,395 L 90,380 L 120,365 L 150,340 L 180,310 L 210,265 L 240,210 L 270,150 L 300,90 L 330,55 L 370,30";
  const secPath1 =
    "M 30,430 L 70,420 L 110,408 L 150,395 L 190,378 L 230,355 L 270,310 L 310,255 L 350,200 L 380,170";
  const secPath2 =
    "M 30,440 L 70,432 L 110,425 L 150,418 L 190,405 L 230,390 L 270,365 L 310,330 L 350,285 L 380,255";

  return (
    <div className="madison-chart-wrap">
      {/* Floating reel card */}
      <motion.div
        className="madison-reel-card"
        initial={{ opacity: 0, y: 8 }}
        animate={inView ? { opacity: 1, y: 0 } : undefined}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <div className="madison-reel-livedot" aria-hidden="true" />
        <div className="madison-reel-meta">Latest reel</div>
        <div className="madison-reel-views">4.2M views</div>
        <div className="madison-reel-row">
          <span className="madison-reel-stat-label">Engagement</span>
          <span className="madison-reel-stat-val">12.4%</span>
        </div>
        <div className="madison-reel-tags">Trending in: Beauty · Lifestyle</div>
      </motion.div>

      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="madison-chart-svg"
        aria-hidden="true"
      >
        {/* Subtle grid */}
        <g opacity="0.25">
          <line x1="0" y1={H - 0.5} x2={W} y2={H - 0.5} stroke="var(--line-strong)" strokeWidth="0.5" />
          <line x1="0" y1={H * 0.5} x2={W} y2={H * 0.5} stroke="var(--line)" strokeWidth="0.5" />
          <line x1="0" y1={H * 0.75} x2={W} y2={H * 0.75} stroke="var(--line)" strokeWidth="0.5" />
          <line x1="0" y1={H * 0.25} x2={W} y2={H * 0.25} stroke="var(--line)" strokeWidth="0.5" />
        </g>

        {/* Secondary curves */}
        <motion.path
          d={secPath2}
          fill="none"
          stroke="rgba(245, 197, 24, 0.18)"
          strokeWidth="1.5"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={inView ? { pathLength: 1 } : undefined}
          transition={{ duration: 2, delay: 0.2 }}
        />
        <motion.path
          d={secPath1}
          fill="none"
          stroke="rgba(245, 197, 24, 0.35)"
          strokeWidth="1.5"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={inView ? { pathLength: 1 } : undefined}
          transition={{ duration: 2, delay: 0.4 }}
        />

        {/* Main accent curve */}
        <motion.path
          d={mainPath}
          fill="none"
          stroke="var(--accent)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={inView ? { pathLength: 1 } : undefined}
          transition={{ duration: 2.2, delay: 0.6 }}
        />

        {/* Leading-edge pulsing dot on main curve */}
        {!reducedMotion && (
          <circle
            className="madison-chart-leaddot"
            cx="370"
            cy="30"
            r="5"
            fill="var(--accent)"
          />
        )}
      </svg>

      <div className="madison-chart-caption">
        Growth curve · @itsmadisonclarkk · Mar-May 2026
      </div>
    </div>
  );
}
