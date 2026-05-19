import Link from "next/link";
import { ScrollReveal } from "@/components/utilities/ScrollReveal";

type Node = {
  num: string;
  slug: string;
  vertical: string;
  metro: string;
  client: string;
  metric: string;
  tone: "cream" | "ink";
  // Position on the 900x900 board, in % of width
  x: number;
  y: number;
};

const NODES: ReadonlyArray<Node> = [
  // 12 o'clock
  { num: "01", slug: "aws-law-firm", vertical: "LEGAL", metro: "TAMPA", client: "AWS Law Firm", metric: "348 calls · 4 mo", tone: "cream", x: 50, y: 11 },
  // 2 o'clock
  { num: "02", slug: "slim-dental", vertical: "MEDICAL", metro: "CHICAGO", client: "Slim Dental", metric: "+186% calls", tone: "cream", x: 83.7, y: 30.5 },
  // 4 o'clock
  { num: "03", slug: "hartman-dermatology", vertical: "MEDICAL", metro: "MIAMI", client: "Hartman Dermatology", metric: "38% AI citation", tone: "ink", x: 83.7, y: 69.5 },
  // 6 o'clock
  { num: "04", slug: "madison-clark", vertical: "BUILT BY US", metro: "SOCIAL", client: "Madison Clark", metric: "100M views · 60 days", tone: "cream", x: 50, y: 89 },
  // 8 o'clock
  { num: "05", slug: "tyler-family-law", vertical: "LEGAL", metro: "ATLANTA", client: "Tyler Family Law", metric: "169 calls · 6 mo", tone: "cream", x: 16.3, y: 69.5 },
  // 10 o'clock
  { num: "06", slug: "quattro-labs", vertical: "BUILT BY US", metro: "AUTO", client: "Quattro Labs", metric: "150K followers", tone: "ink", x: 16.3, y: 30.5 },
];

// Same nodes serialized for the dot positions in SVG (450 center, 350 radius)
const ORBIT_DOTS = [
  [450, 100],
  [753, 275],
  [753, 625],
  [450, 800],
  [147, 625],
  [147, 275],
];

// Spoke endpoints: hub edge (r=130) to node (r=350)
const SPOKES = ORBIT_DOTS.map(([nx, ny]) => {
  const cx = 450, cy = 450;
  const dx = nx - cx;
  const dy = ny - cy;
  const len = Math.sqrt(dx * dx + dy * dy);
  const ux = dx / len;
  const uy = dy / len;
  return {
    x1: cx + ux * 130,
    y1: cy + uy * 130,
    x2: cx + ux * 280,
    y2: cy + uy * 280,
  };
});

export function TheWork() {
  return (
    <section className="the-work" id="work" aria-label="The work">
      <div className="the-work__inner">
        <ScrollReveal>
          <p className="the-work__label">
            <span aria-hidden="true">03 — </span>
            The Work
          </p>
        </ScrollReveal>
        <ScrollReveal delay={80}>
          <h2 className="the-work__heading">
            Six firms. Two verticals. One compound system.
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={140}>
          <p className="the-work__sub">
            Every engagement runs through the same flywheel. The clients change. The mechanics don&apos;t.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="flywheel" aria-hidden="false">
            <svg className="flywheel__rings" viewBox="0 0 900 900" fill="none" aria-hidden="true">
              <defs>
                <radialGradient id="flywheel-glow" cx="0.5" cy="0.5" r="0.5">
                  <stop offset="0.74" stopColor="rgba(255, 232, 23, 0)" />
                  <stop offset="0.78" stopColor="rgba(255, 232, 23, 0.08)" />
                  <stop offset="0.82" stopColor="rgba(255, 232, 23, 0)" />
                </radialGradient>
              </defs>
              {/* Subtle yellow ring at orbit radius */}
              <circle cx="450" cy="450" r="450" fill="url(#flywheel-glow)" />
              {/* Dashed orbit */}
              <circle cx="450" cy="450" r="350" stroke="rgba(42, 40, 35, 0.16)" strokeWidth="1" strokeDasharray="3 6" fill="none" />
              {/* Six yellow dots at the orbit */}
              {ORBIT_DOTS.map(([cx, cy], i) => (
                <circle key={i} cx={cx} cy={cy} r="5" fill="#FFE817" />
              ))}
              {/* Six hairline spokes from hub edge outward */}
              {SPOKES.map((s, i) => (
                <line
                  key={i}
                  x1={s.x1}
                  y1={s.y1}
                  x2={s.x2}
                  y2={s.y2}
                  stroke="rgba(42, 40, 35, 0.16)"
                  strokeWidth="1"
                />
              ))}
              {/* Hub circle */}
              <circle cx="450" cy="450" r="130" fill="#2A2823" />
            </svg>

            {/* Hub content (HTML over SVG for crisp typography) */}
            <div className="flywheel__hub">
              <span className="flywheel__hub-label">00 · THE SYSTEM</span>
              <span className="flywheel__hub-title">Compound visibility</span>
              <span className="flywheel__hub-tagline">compounded across every query that matters</span>
            </div>

            {/* Six client nodes */}
            {NODES.map((node) => (
              <Link
                key={node.slug}
                href={`/case-studies/${node.slug}`}
                className={`flywheel__node flywheel__node--${node.tone}`}
                style={{ left: `${node.x}%`, top: `${node.y}%` }}
              >
                <span className="flywheel__node-divider" aria-hidden="true" />
                <span className="flywheel__node-label">
                  {node.vertical} · {node.metro}
                </span>
                <span className="flywheel__node-name">{node.client}</span>
                <span className="flywheel__node-metric">{node.metric}</span>
                <span className="flywheel__node-num" aria-hidden="true">{node.num}</span>
              </Link>
            ))}
          </div>

          {/* Mobile vertical list (visible <768px) */}
          <ol className="the-work__list" aria-label="Case studies">
            {NODES.map((node) => (
              <li key={node.slug} className="the-work__list-item">
                <Link href={`/case-studies/${node.slug}`}>
                  <span className="the-work__list-num">{node.num}</span>
                  <span className="the-work__list-body">
                    <span className="the-work__list-label">
                      {node.vertical} · {node.metro}
                    </span>
                    <span className="the-work__list-client">{node.client}</span>
                    <span className="the-work__list-metric">{node.metric}</span>
                  </span>
                  <span className="the-work__list-arrow" aria-hidden="true">→</span>
                </Link>
              </li>
            ))}
          </ol>
        </ScrollReveal>

        <ScrollReveal delay={300}>
          <p className="the-work__quote">
            Each firm receives exclusive territory rights for their metro and vertical. Once they&apos;re hired, their competitors can&apos;t be.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
