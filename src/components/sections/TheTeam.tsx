import Image from "next/image";

function CornerBracket({ x, y, flipX = false, flipY = false }: { x: number; y: number; flipX?: boolean; flipY?: boolean }) {
  const sx = flipX ? -1 : 1;
  const sy = flipY ? -1 : 1;
  return (
    <g transform={`translate(${x},${y}) scale(${sx},${sy})`}>
      <path d="M 0 14 L 0 0 L 14 0" stroke="#FFE817" strokeWidth="1.5" fill="none" opacity="0.6" strokeLinecap="round" />
    </g>
  );
}

function CarIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M 3 14 L 5 9 L 19 9 L 21 14 L 21 18 L 18 18 L 18 16 L 6 16 L 6 18 L 3 18 Z" stroke="#FFE817" strokeWidth="1.5" fill="none" strokeLinejoin="round" />
      <circle cx="7" cy="17" r="1.5" fill="#FFE817" />
      <circle cx="17" cy="17" r="1.5" fill="#FFE817" />
    </svg>
  );
}

function WrenchIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M 14 4 L 17 4 L 19 6 L 19 9 L 17 11 L 14 11 L 13 12 L 6 19 L 4 17 L 11 10 L 12 9 L 12 6 Z" stroke="#FFE817" strokeWidth="1.5" fill="none" strokeLinejoin="round" />
    </svg>
  );
}

function BroomIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <line x1="14" y1="4" x2="6" y2="14" stroke="#FFE817" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M 6 14 L 4 18 L 10 20 L 14 16 Z" stroke="#FFE817" strokeWidth="1.5" fill="rgba(255, 232, 23, 0.15)" strokeLinejoin="round" />
      <line x1="6" y1="16" x2="8" y2="18" stroke="#FFE817" strokeWidth="1" />
      <line x1="8" y1="15" x2="10" y2="17" stroke="#FFE817" strokeWidth="1" />
    </svg>
  );
}

function WaveIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M 2 14 Q 6 8 10 12 T 18 12 T 22 8" stroke="#FFE817" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <circle cx="20" cy="6" r="2" fill="#FFE817" />
      <path d="M 2 18 Q 6 14 10 16 T 18 16" stroke="#FFE817" strokeWidth="1" opacity="0.5" fill="none" strokeLinecap="round" />
    </svg>
  );
}

const VENTURES = [
  {
    num: "0.1",
    icon: <CarIcon />,
    name: "Quattro Labs",
    desc: "Automotive media brand · since 2021",
    metric: "150K+",
    metricLabel: "FOLLOWERS · ACTIVE",
  },
  {
    num: "0.2",
    icon: <WrenchIcon />,
    name: "The Honest Plumbers",
    desc: "Michigan's most-followed plumbing brand · since 2022",
    metric: "#1",
    metricLabel: "ON IG · MI · STILL RUNNING",
  },
  {
    num: "0.3",
    icon: <BroomIcon />,
    name: "The Honest Maids",
    desc: "Michigan's most-followed cleaning brand · since 2022",
    metric: "#1",
    metricLabel: "ON IG · MI",
  },
  {
    num: "0.4",
    icon: <WaveIcon />,
    name: "Madison Clark",
    desc: "AI persona built and scaled · zero ad spend",
    metric: "100M",
    metricLabel: "VIEWS · 60 DAYS",
  },
] as const;

export function TheTeam() {
  return (
    <section className="the-team" aria-label="The team">
      <div className="the-team__inner">
        <div className="the-team__copy-head">
          <div className="the-work__heading-row">
            <span className="how__bar" aria-hidden="true" />
            <p className="how__label">The Team</p>
          </div>
          <h2 className="how__heading">Operators before agency.</h2>
          <p className="how__sub">
            We didn&apos;t learn this in a course. We built the brands we now grow.
          </p>
        </div>

        <div className="the-team__grid">
          <div className="the-team__portrait-wrap">
            <div className="the-team__portrait-offset" aria-hidden="true" />
            <div className="the-team__portrait-frame">
              <Image
                src="/assets/founder/art-khan-portrait.png"
                alt="Art Khan, Founder of Rysen Growth"
                width={420}
                height={520}
                priority
              />
              <div className="the-team__portrait-card the-team__portrait-card--tl">
                <span className="the-team__portrait-card-label">FOUNDER · CEO</span>
                <span className="the-team__portrait-card-name">Art Khan</span>
              </div>
              <div className="the-team__portrait-card the-team__portrait-card--br">
                <span className="the-team__portrait-card-stat">5 brands built · 30+ clients</span>
              </div>
              {/* SVG corner reticles around frame */}
              <svg className="the-team__portrait-reticles" viewBox="0 0 420 520" aria-hidden="true">
                <CornerBracket x={6} y={6} />
                <CornerBracket x={414} y={6} flipX />
                <CornerBracket x={6} y={514} flipY />
                <CornerBracket x={414} y={514} flipX flipY />
              </svg>
            </div>
          </div>

          <div className="the-team__credentials">
            {VENTURES.map((v) => (
              <div key={v.num} className="venture-card">
                <span className="venture-card__accent" aria-hidden="true" />
                <div className="venture-card__head">
                  <div className="venture-card__icon">{v.icon}</div>
                  <div className="venture-card__head-body">
                    <span className="venture-card__num">{v.num}</span>
                    <span className="venture-card__name">{v.name}</span>
                  </div>
                </div>
                <p className="venture-card__desc">{v.desc}</p>
                <div className="venture-card__metric">
                  <span className="venture-card__metric-value">{v.metric}</span>
                  <span className="venture-card__metric-label">{v.metricLabel}</span>
                </div>
              </div>
            ))}

            <p className="the-team__previously">
              <span>Previously</span>
              <span className="the-team__previously-sep" aria-hidden="true">|</span>
              <span>Salesforce</span>
              <span className="the-team__previously-sep" aria-hidden="true">·</span>
              <span>Roku</span>
              <span className="the-team__previously-sep" aria-hidden="true">·</span>
              <span>Ross School of Business</span>
            </p>
          </div>
        </div>

        <div className="the-team__office-strip">
          <figure className="the-team__office-item">
            <Image src="/assets/team/team-photo.png" alt="The team" width={280} height={200} />
            <figcaption><span>The team</span></figcaption>
          </figure>
          <figure className="the-team__office-item">
            <Image src="/assets/office/interior-reception.png" alt="Phoenix lobby" width={280} height={200} />
            <figcaption><span>Phoenix lobby</span></figcaption>
          </figure>
          <figure className="the-team__office-item">
            <Image src="/assets/office/exterior-front.png" alt="Phoenix HQ" width={280} height={200} />
            <figcaption><span>Phoenix HQ</span></figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
