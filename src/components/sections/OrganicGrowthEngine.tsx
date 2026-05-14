"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Code,
  FileText,
  Layout,
  Mail,
  MapPin,
  Newspaper,
  ShieldCheck,
  Sparkles,
  Star,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

type ViewMode = "diagram" | "components" | "compound";

interface Component {
  readonly id: string;
  readonly name: string;
  readonly short: string;
  readonly description: string;
  readonly examples: ReadonlyArray<string>;
  readonly amplifies: ReadonlyArray<string>;
  readonly Icon: LucideIcon;
}

const COMPONENTS: ReadonlyArray<Component> = [
  {
    id: "lsa",
    name: "Google LSA",
    short: "Pre-vetted lead generation",
    description:
      "Google Local Service Ads. Pre-vetted, prepaid lead pricing for legal and medical search intent.",
    examples: [
      "Google Screened verification & badge management",
      "Bid optimization across practice areas & metros",
      "Lead dispute & quality scoring",
    ],
    amplifies: ["gmb", "reputation", "website"],
    Icon: ShieldCheck,
  },
  {
    id: "gmb",
    name: "Google Business Profile",
    short: "Own the 3-pack",
    description:
      "GMB is the most valuable real estate in local search. Engineered to dominate the Map Pack.",
    examples: [
      "Category & attribute optimization",
      "GMB posts cadence (3-5/week per location)",
      "Multi-location coordination",
    ],
    amplifies: ["lsa", "reputation", "schema"],
    Icon: MapPin,
  },
  {
    id: "website",
    name: "Website & CRO",
    short: "Convert visitors to clients",
    description:
      "Site speed, structure, content hierarchy, and CTA paths tuned for legal/medical conversion intent.",
    examples: [
      "Core Web Vitals tuning",
      "A/B testing on landing pages",
      "Conversion path optimization",
    ],
    amplifies: ["email", "ai-search", "content"],
    Icon: Layout,
  },
  {
    id: "ai-search",
    name: "AI Search",
    short: "Cited by ChatGPT, Perplexity, AIO",
    description:
      "Entity signals, schema, and content engineered for citation across major AI surfaces.",
    examples: [
      "Entity disambiguation & schema",
      "LLM-citation-friendly content structure",
      "AI surface monitoring across four engines",
    ],
    amplifies: ["content", "schema", "press"],
    Icon: Sparkles,
  },
  {
    id: "content",
    name: "Authority Content",
    short: "Long-form that ranks & gets cited",
    description:
      "2,000+ word authority articles per topic. Practice-area depth, not thin service pages.",
    examples: [
      "4–8 long-form articles per month",
      "Topical authority cluster strategy",
      "Quarterly refresh discipline",
    ],
    amplifies: ["ai-search", "press", "email"],
    Icon: FileText,
  },
  {
    id: "reputation",
    name: "Reputation",
    short: "Review velocity + response",
    description:
      "Review pipeline engineered for 8–20 new reviews/month with 24-hour response discipline.",
    examples: [
      "Review request automation",
      "Response template library + custom replies",
      "Cross-platform monitoring (Google/Avvo/Healthgrades)",
    ],
    amplifies: ["gmb", "lsa", "website"],
    Icon: Star,
  },
  {
    id: "press",
    name: "Press & PR",
    short: "Authority signals that rank",
    description:
      "Real journalist outreach, podcast placements, industry publication relationships.",
    examples: [
      "Targeted journalist outreach",
      "Podcast guest placements",
      "Industry publication contributor relationships",
    ],
    amplifies: ["ai-search", "content", "schema"],
    Icon: Newspaper,
  },
  {
    id: "schema",
    name: "Schema & Tech SEO",
    short: "The invisible foundation",
    description:
      "Schema markup, technical SEO, entity infrastructure. Most agencies skip this. We obsess over it.",
    examples: [
      "LegalService / MedicalBusiness / Attorney / Physician schemas",
      "Entity disambiguation across surfaces",
      "Core Web Vitals & technical health",
    ],
    amplifies: ["ai-search", "gmb", "content"],
    Icon: Code,
  },
  {
    id: "email",
    name: "Email & Newsletter",
    short: "Nurture across long cycles",
    description:
      "Drip sequences and newsletters that nurture 3–9 touchpoint legal/medical decision cycles.",
    examples: [
      "Drip sequence engineering",
      "Monthly newsletter strategy & execution",
      "Behavioral triggers & segmentation",
    ],
    amplifies: ["website", "content", "reputation"],
    Icon: Mail,
  },
];

// Layout: 9 nodes evenly spaced on a circle, hub at center
const CENTER = { x: 360, y: 360 };
const RADIUS = 240;

interface NodePosition {
  readonly id: string;
  readonly x: number;
  readonly y: number;
}

function getNodePositions(): ReadonlyArray<NodePosition> {
  return COMPONENTS.map((c, i) => {
    const angle = (i / COMPONENTS.length) * Math.PI * 2 - Math.PI / 2;
    return {
      id: c.id,
      x: CENTER.x + Math.cos(angle) * RADIUS,
      y: CENTER.y + Math.sin(angle) * RADIUS,
    };
  });
}

function useRevenueTicker(active: boolean): string {
  const [v, setV] = useState<number>(47_000_000);
  useEffect(() => {
    if (!active) return;
    const id = setInterval(() => {
      setV((prev) => prev + Math.round(40 + Math.random() * 160));
    }, 4000);
    return () => clearInterval(id);
  }, [active]);
  return `$${(v / 1_000_000).toFixed(2)}M+`;
}

export function OrganicGrowthEngine() {
  const reducedMotion = useReducedMotion();
  const [view, setView] = useState<ViewMode>("diagram");
  const [hovered, setHovered] = useState<string | null>(null);
  const [pulseIdx, setPulseIdx] = useState<number>(0);
  const sectionRef = useRef<HTMLElement | null>(null);
  const [active, setActive] = useState<boolean>(false);
  const revenue = useRevenueTicker(active && !reducedMotion);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el || !("IntersectionObserver" in window)) {
      setActive(true);
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => setActive(e.isIntersecting)),
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // Pulse traveler around the ring
  useEffect(() => {
    if (!active || reducedMotion || view !== "diagram") return;
    const id = setInterval(() => {
      setPulseIdx((i) => (i + 1) % COMPONENTS.length);
    }, 1500);
    return () => clearInterval(id);
  }, [active, reducedMotion, view]);

  const positions = useMemo(getNodePositions, []);
  const hoveredComponent = hovered
    ? COMPONENTS.find((c) => c.id === hovered)
    : null;
  const pulsePos = positions[pulseIdx];

  return (
    <section className="oge-section" ref={sectionRef} id="organic-growth-engine">
      <div className="oge-inner">
        <div className="oge-header">
          <div className="page-section-eyebrow">WHAT WE BUILD</div>
          <h2 className="oge-h2">
            We build{" "}
            <span className="accent-italic">Organic Growth Engines.</span>
          </h2>
          <p className="oge-sub">
            Not a stack of services. A single coordinated system — nine
            components, engineered to compound. Every component reinforces the
            others. Every dollar of work feeds the engine.
          </p>
        </div>

        {/* View toggle */}
        <div className="oge-toggle" role="tablist" aria-label="View mode">
          {(["diagram", "components", "compound"] as const).map((v) => (
            <button
              key={v}
              type="button"
              role="tab"
              aria-selected={view === v}
              className={`oge-toggle-btn${view === v ? " is-active" : ""}`}
              onClick={() => setView(v)}
            >
              {v === "diagram"
                ? "Diagram"
                : v === "components"
                  ? "Components"
                  : "Compound View"}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {view === "components" ? (
            <motion.div
              key="components-view"
              className="oge-components-list"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {COMPONENTS.map((c, i) => {
                const I = c.Icon;
                return (
                  <details key={c.id} className="oge-comp-item">
                    <summary>
                      <span className="oge-comp-num">{String(i + 1).padStart(2, "0")}</span>
                      <span className="oge-comp-icon">
                        <I size={16} strokeWidth={1.8} aria-hidden="true" />
                      </span>
                      <span className="oge-comp-name">{c.name}</span>
                      <span className="oge-comp-short">{c.short}</span>
                    </summary>
                    <div className="oge-comp-body">
                      <p>{c.description}</p>
                      <ul>
                        {c.examples.map((e) => (
                          <li key={e}>{e}</li>
                        ))}
                      </ul>
                      <div className="oge-comp-amplifies">
                        Amplifies:{" "}
                        {c.amplifies
                          .map(
                            (id) =>
                              COMPONENTS.find((cc) => cc.id === id)?.name ?? id
                          )
                          .join(" · ")}
                      </div>
                    </div>
                  </details>
                );
              })}
            </motion.div>
          ) : (
            <motion.div
              key="diagram-view"
              className="oge-diagram-wrap"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <svg
                className="oge-svg"
                viewBox="0 0 720 720"
                aria-hidden="true"
              >
                {/* Compound view: draw every-to-every connection */}
                {view === "compound" &&
                  positions.map((p, i) =>
                    positions
                      .slice(i + 1)
                      .map((p2) => (
                        <line
                          key={`${p.id}-${p2.id}`}
                          x1={p.x}
                          y1={p.y}
                          x2={p2.x}
                          y2={p2.y}
                          className="oge-line oge-line-compound"
                        />
                      ))
                  )}

                {/* Hub spokes (always) */}
                {positions.map((p) => (
                  <line
                    key={`spoke-${p.id}`}
                    x1={CENTER.x}
                    y1={CENTER.y}
                    x2={p.x}
                    y2={p.y}
                    className={`oge-line oge-line-spoke${
                      hovered === p.id ? " is-bright" : ""
                    }`}
                  />
                ))}

                {/* Hovered node's amplifies: draw lines to amplified nodes */}
                {hovered &&
                  hoveredComponent &&
                  hoveredComponent.amplifies.map((targetId) => {
                    const a = positions.find((p) => p.id === hovered);
                    const b = positions.find((p) => p.id === targetId);
                    if (!a || !b) return null;
                    return (
                      <line
                        key={`amp-${targetId}`}
                        x1={a.x}
                        y1={a.y}
                        x2={b.x}
                        y2={b.y}
                        className="oge-line oge-line-amplify"
                      />
                    );
                  })}

                {/* Pulse traveler */}
                {!reducedMotion && view === "diagram" && pulsePos && (
                  <circle
                    cx={pulsePos.x}
                    cy={pulsePos.y}
                    r="7"
                    className="oge-pulse-traveler"
                  />
                )}

                {/* Hub */}
                <g>
                  <circle
                    cx={CENTER.x}
                    cy={CENTER.y}
                    r="98"
                    className="oge-hub-ring"
                  />
                  <circle
                    cx={CENTER.x}
                    cy={CENTER.y}
                    r="86"
                    className="oge-hub"
                  />
                  <text
                    x={CENTER.x}
                    y={CENTER.y - 14}
                    textAnchor="middle"
                    className="oge-hub-eyebrow"
                  >
                    THE ENGINE
                  </text>
                  <text
                    x={CENTER.x}
                    y={CENTER.y + 8}
                    textAnchor="middle"
                    className="oge-hub-title"
                  >
                    Organic Growth
                  </text>
                  <text
                    x={CENTER.x}
                    y={CENTER.y + 32}
                    textAnchor="middle"
                    className="oge-hub-num"
                  >
                    {revenue}
                  </text>
                </g>

                {/* Nodes */}
                {positions.map((p, i) => {
                  const c = COMPONENTS[i];
                  const I = c.Icon;
                  return (
                    <g
                      key={c.id}
                      className={`oge-node${
                        hovered === c.id ? " is-hovered" : ""
                      }${pulseIdx === i && !reducedMotion ? " is-pulsing" : ""}`}
                      onMouseEnter={() => setHovered(c.id)}
                      onMouseLeave={() => setHovered(null)}
                      style={{ cursor: "pointer" }}
                    >
                      <circle cx={p.x} cy={p.y} r="34" className="oge-node-bg" />
                      <foreignObject
                        x={p.x - 12}
                        y={p.y - 12}
                        width="24"
                        height="24"
                      >
                        <div className="oge-node-icon">
                          <I size={20} strokeWidth={1.6} aria-hidden="true" />
                        </div>
                      </foreignObject>
                      <text
                        x={p.x}
                        y={p.y + 56}
                        textAnchor="middle"
                        className="oge-node-label"
                      >
                        {c.name.toUpperCase()}
                      </text>
                    </g>
                  );
                })}
              </svg>

              {/* Hover detail card */}
              <AnimatePresence>
                {hoveredComponent && (
                  <motion.div
                    key={hoveredComponent.id}
                    className="oge-detail-card"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="oge-detail-name">
                      {hoveredComponent.name}
                    </div>
                    <p className="oge-detail-desc">
                      {hoveredComponent.description}
                    </p>
                    <div className="oge-detail-section">
                      <span className="oge-detail-label">SPECIFICALLY</span>
                      <ul>
                        {hoveredComponent.examples.map((e) => (
                          <li key={e}>{e}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="oge-detail-affects">
                      <span className="oge-detail-label">AFFECTS</span>{" "}
                      {hoveredComponent.amplifies
                        .map(
                          (id) =>
                            COMPONENTS.find((c) => c.id === id)?.name ?? id
                        )
                        .join(" · ")}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Editorial */}
        <div className="oge-editorial">
          <p>
            Most agencies sell components. They&rsquo;ll sell you SEO. Or LSA
            management. Or content. Each as a separate service, with separate
            reports, separate teams, separate tactics. The components don&rsquo;t
            talk to each other. The result is a Frankenstein marketing program
            that costs a fortune and underperforms a coordinated system.
          </p>
          <p>
            An Organic Growth Engine treats all nine components as one system.
            Your GMB ranking affects your LSA performance. Your content
            authority feeds your AI citations. Your review velocity reinforces
            your local pack. Your schema markup amplifies everything. When you
            optimize one component, every other component compounds. When you
            neglect one, the whole system softens.
          </p>
          <p>
            Rysen builds the engine. We architect, deploy, and operate all nine
            components as a coordinated system — with weekly accountability,
            data-attributed reporting, and the operational discipline to
            maintain it for years. The result isn&rsquo;t &ldquo;good SEO.&rdquo;
            It&rsquo;s a market-dominance machine purpose-built for your firm.
          </p>
        </div>

        <div className="oge-footer-mark">
          9 COMPONENTS · 1 SYSTEM · ENGINEERED FOR COMPOUND GROWTH
        </div>
      </div>
    </section>
  );
}
