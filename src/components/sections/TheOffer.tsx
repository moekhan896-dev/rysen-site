import Link from "next/link";

type Metro = {
  x: number; // grid col (0-13)
  y: number; // grid row (0-9)
  name?: string;
  vertical?: "Legal" | "Medical" | "HQ";
  featured?: boolean;
  active?: boolean;
};

// 14×10 dot grid roughly mapped to US shape
const GRID_W = 14;
const GRID_H = 10;

const FEATURED: ReadonlyArray<Metro> = [
  { x: 5, y: 5, name: "Detroit", vertical: "HQ", featured: true },
  { x: 4, y: 4, name: "Chicago", vertical: "Medical", featured: true },
  { x: 6, y: 7, name: "Atlanta", vertical: "Legal", featured: true },
  { x: 8, y: 8, name: "Tampa", vertical: "Legal", featured: true },
  { x: 9, y: 8, name: "Miami", vertical: "Medical", featured: true },
  { x: 2, y: 7, name: "Phoenix", vertical: "HQ", featured: true },
];

// Roughly 30 "active" dots scattered in continental-US-looking positions
const ACTIVE_DOTS: ReadonlyArray<[number, number]> = [
  [1, 4], [2, 4], [3, 3], [3, 5], [4, 3], [4, 6],
  [5, 3], [5, 6], [6, 4], [6, 5], [7, 4], [7, 5],
  [7, 6], [8, 5], [8, 6], [8, 7], [9, 5], [9, 6],
  [9, 7], [10, 6], [10, 7], [1, 5], [2, 6], [3, 6],
  [11, 7], [11, 8], [10, 8], [2, 5], [12, 7], [12, 8],
];

function CornerBracket({ x, y, flipX = false, flipY = false }: { x: number; y: number; flipX?: boolean; flipY?: boolean }) {
  const sx = flipX ? -1 : 1;
  const sy = flipY ? -1 : 1;
  return (
    <g transform={`translate(${x},${y}) scale(${sx},${sy})`}>
      <path d="M 0 12 L 0 0 L 12 0" stroke="#FFE817" strokeWidth="1.5" fill="none" opacity="0.45" strokeLinecap="round" />
    </g>
  );
}

// SVG viewBox 600x500, grid dots at (col*40 + 30, row*40 + 50)
function dotPos(col: number, row: number) {
  return { x: col * 40 + 30, y: row * 40 + 50 };
}

const DETROIT = dotPos(5, 5);

export function TheOffer() {
  return (
    <section className="the-offer" aria-label="The offer">
      <div className="the-offer__inner">
        <div className="the-offer__copy">
          <div className="the-work__heading-row">
            <span className="how__bar" aria-hidden="true" />
            <p className="how__label">The Offer</p>
          </div>

          <h2 className="how__heading">Selective by design. Accessible by appointment.</h2>
          <p className="how__sub">
            We work with one law firm and one medical practice per metro. Once you&apos;re our client, your competitors can&apos;t be.
          </p>

          <div className="the-offer__points">
            <div className="the-offer__point">
              <span className="the-offer__point-num">0.1</span>
              <div>
                <h3 className="the-offer__point-title">Exclusive territory</h3>
                <p className="the-offer__point-body">
                  One firm per metro per vertical. Lockup is contractual, not just polite.
                </p>
              </div>
            </div>
            <div className="the-offer__point">
              <span className="the-offer__point-num">0.2</span>
              <div>
                <h3 className="the-offer__point-title">Audit-first</h3>
                <p className="the-offer__point-body">
                  Every engagement begins with a 30-day audit. If we can&apos;t see a clear path to #1, we tell you. No retainer obligation.
                </p>
              </div>
            </div>
            <div className="the-offer__point">
              <span className="the-offer__point-num">0.3</span>
              <div>
                <h3 className="the-offer__point-title">Revenue attribution</h3>
                <p className="the-offer__point-body">
                  We report in dollars, not impressions. Every call and form fill traced back to source.
                </p>
              </div>
            </div>
          </div>

          <Link href="/contact" className="the-offer__cta">
            Request your audit
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="the-offer__visual">
          <div className="the-offer__visual-glow" aria-hidden="true" />
          <svg viewBox="0 0 600 540" className="the-offer__map" aria-hidden="true">
            <defs>
              <radialGradient id="of-detroit-glow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#FFE817" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#FFE817" stopOpacity="0" />
              </radialGradient>

              {FEATURED.filter((f) => f.vertical !== "HQ").map((f, i) => {
                const p = dotPos(f.x, f.y);
                return (
                  <linearGradient
                    key={`og-${i}`}
                    id={`og-line-${i}`}
                    x1={DETROIT.x}
                    y1={DETROIT.y}
                    x2={p.x}
                    y2={p.y}
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0%" stopColor="#FFE817" stopOpacity="0.55" />
                    <stop offset="100%" stopColor="#4D7FFF" stopOpacity="0.15" />
                  </linearGradient>
                );
              })}
            </defs>

            {/* Subtle grid lines */}
            {Array.from({ length: GRID_W + 1 }).map((_, i) => (
              <line key={`vg-${i}`} x1={i * 40 + 10} y1={30} x2={i * 40 + 10} y2={GRID_H * 40 + 30} stroke="rgba(255, 255, 255, 0.02)" strokeWidth="0.5" />
            ))}
            {Array.from({ length: GRID_H + 1 }).map((_, i) => (
              <line key={`hg-${i}`} x1={10} y1={i * 40 + 30} x2={GRID_W * 40 + 10} y2={i * 40 + 30} stroke="rgba(255, 255, 255, 0.02)" strokeWidth="0.5" />
            ))}

            {/* All grid dots (background, faint white) */}
            {Array.from({ length: GRID_W }).map((_, c) =>
              Array.from({ length: GRID_H }).map((_, r) => {
                const p = dotPos(c, r);
                return <circle key={`bg-${c}-${r}`} cx={p.x} cy={p.y} r="1.5" fill="rgba(255, 255, 255, 0.1)" />;
              })
            )}

            {/* Active dots (yellow, slightly larger) */}
            {ACTIVE_DOTS.map(([c, r], i) => {
              const p = dotPos(c, r);
              return <circle key={`active-${i}`} cx={p.x} cy={p.y} r="2.5" fill="#FFE817" opacity="0.55" />;
            })}

            {/* Connection lines from Detroit to each featured non-HQ metro */}
            {FEATURED.filter((f) => f.vertical !== "HQ").map((f, i) => {
              const p = dotPos(f.x, f.y);
              return (
                <line
                  key={`line-${i}`}
                  x1={DETROIT.x}
                  y1={DETROIT.y}
                  x2={p.x}
                  y2={p.y}
                  stroke={`url(#og-line-${i})`}
                  strokeWidth="1"
                  strokeDasharray="3 4"
                />
              );
            })}

            {/* Featured dots with glow + labels */}
            {FEATURED.map((f, i) => {
              const p = dotPos(f.x, f.y);
              const labelOffsetY = f.y < 5 ? -16 : 22;
              return (
                <g key={`featured-${i}`}>
                  <circle cx={p.x} cy={p.y} r="14" fill="url(#of-detroit-glow)" />
                  <circle cx={p.x} cy={p.y} r="4.5" fill="#FFE817" stroke="#0A0A0F" strokeWidth="1.5" />
                  {/* Floating tag */}
                  <rect
                    x={p.x + 10}
                    y={p.y + labelOffsetY - 8}
                    width={f.name!.length * 6 + 50}
                    height="20"
                    rx="10"
                    fill="#14141C"
                    stroke="rgba(255, 232, 23, 0.3)"
                    strokeWidth="1"
                  />
                  <text
                    x={p.x + 18}
                    y={p.y + labelOffsetY + 5}
                    fill="#FAFAF7"
                    fontSize="10"
                    fontWeight="600"
                    fontFamily="Inter, sans-serif"
                  >
                    {f.name}
                  </text>
                  <text
                    x={p.x + 18 + f.name!.length * 6.4}
                    y={p.y + labelOffsetY + 5}
                    fill={f.vertical === "HQ" ? "#FFE817" : "#8B8B95"}
                    fontSize="9"
                    fontWeight="500"
                    fontFamily="Inter, sans-serif"
                  >
                    · {f.vertical}
                  </text>
                </g>
              );
            })}

            {/* Bottom stat strip */}
            <line x1="30" y1="480" x2="570" y2="480" stroke="rgba(255, 255, 255, 0.08)" strokeWidth="1" />
            <text x="30" y="504" fill="#FAFAF7" fontSize="11" fontWeight="600" fontFamily="Inter, sans-serif">32</text>
            <text x="50" y="504" fill="#8B8B95" fontSize="10" fontWeight="500" fontFamily="Inter, sans-serif" letterSpacing="0.06em">metros</text>
            <text x="180" y="504" fill="#FFE817" fontSize="11" fontWeight="600" fontFamily="Inter, sans-serif">4</text>
            <text x="194" y="504" fill="#8B8B95" fontSize="10" fontWeight="500" fontFamily="Inter, sans-serif" letterSpacing="0.06em">currently open</text>
            <text x="380" y="504" fill="#FAFAF7" fontSize="11" fontWeight="600" fontFamily="Inter, sans-serif">2</text>
            <text x="394" y="504" fill="#8B8B95" fontSize="10" fontWeight="500" fontFamily="Inter, sans-serif" letterSpacing="0.06em">reserved · Q2 2026</text>

            {/* Corner brackets */}
            <CornerBracket x={20} y={20} />
            <CornerBracket x={580} y={20} flipX />
            <CornerBracket x={20} y={520} flipY />
            <CornerBracket x={580} y={520} flipX flipY />
          </svg>
        </div>
      </div>
    </section>
  );
}
