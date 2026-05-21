import Link from "next/link";

// Target reticle background composition. Tight concentric rings with
// crosshair and a small center triangle motif. Sits BEHIND the content
// at z-index 0 with pointer-events: none. Section has overflow: hidden.

function TargetReticleBackground() {
  return (
    <svg
      className="the-close__bg"
      viewBox="0 0 1400 900"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="cl-center-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFE817" stopOpacity="0.06" />
          <stop offset="100%" stopColor="#FFE817" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Subtle ambient glow at exact center */}
      <rect width="1400" height="900" fill="url(#cl-center-glow)" />

      {/* 5 concentric rings: tight spacing near center, growing outward */}
      <circle cx="700" cy="450" r="50" stroke="rgba(255, 232, 23, 0.12)" strokeWidth="1.5" fill="none" />
      <circle cx="700" cy="450" r="130" stroke="rgba(255, 232, 23, 0.08)" strokeWidth="1" strokeDasharray="3 6" fill="none" />
      <circle cx="700" cy="450" r="240" stroke="rgba(255, 232, 23, 0.06)" strokeWidth="1" fill="none" />
      <circle cx="700" cy="450" r="380" stroke="rgba(255, 232, 23, 0.04)" strokeWidth="1" strokeDasharray="3 6" fill="none" />
      <circle cx="700" cy="450" r="540" stroke="rgba(255, 232, 23, 0.03)" strokeWidth="1" fill="none" />

      {/* Crosshair at exact center, short arms */}
      <line x1="688" y1="450" x2="712" y2="450" stroke="#FFE817" strokeWidth="1.5" opacity="0.3" strokeLinecap="round" />
      <line x1="700" y1="438" x2="700" y2="462" stroke="#FFE817" strokeWidth="1.5" opacity="0.3" strokeLinecap="round" />

      {/* Cardinal tick marks on the radius-240 ring (N, E, S, W) */}
      <line x1="700" y1="202" x2="700" y2="210" stroke="#FFE817" strokeWidth="1.2" opacity="0.3" strokeLinecap="round" />
      <line x1="700" y1="690" x2="700" y2="698" stroke="#FFE817" strokeWidth="1.2" opacity="0.3" strokeLinecap="round" />
      <line x1="452" y1="450" x2="460" y2="450" stroke="#FFE817" strokeWidth="1.2" opacity="0.3" strokeLinecap="round" />
      <line x1="940" y1="450" x2="948" y2="450" stroke="#FFE817" strokeWidth="1.2" opacity="0.3" strokeLinecap="round" />

      {/* Center triangle motif (the "target") */}
      <g opacity="0.2" transform="translate(692, 442)">
        <polygon points="0,0 16,0 0,16" fill="#FFE817" />
      </g>

      {/* Far-outer corner reticle hints (subtle) */}
      <path d="M 60 60 L 60 40 L 80 40" stroke="#FFE817" strokeWidth="1" fill="none" opacity="0.18" strokeLinecap="round" />
      <path d="M 1340 60 L 1340 40 L 1320 40" stroke="#FFE817" strokeWidth="1" fill="none" opacity="0.18" strokeLinecap="round" />
      <path d="M 60 840 L 60 860 L 80 860" stroke="#FFE817" strokeWidth="1" fill="none" opacity="0.18" strokeLinecap="round" />
      <path d="M 1340 840 L 1340 860 L 1320 860" stroke="#FFE817" strokeWidth="1" fill="none" opacity="0.18" strokeLinecap="round" />
    </svg>
  );
}

export function TheClose() {
  return (
    <section className="the-close" aria-label="Find out if your metro is open">
      <TargetReticleBackground />

      <div className="the-close__inner">
        <div className="the-work__heading-row">
          <span className="how__bar" aria-hidden="true" />
          <p className="how__label">Find out if your metro is open</p>
        </div>

        <h2 className="the-close__headline">
          Your competitors are #1.
          <br />
          Until they&apos;re not.
        </h2>

        <p className="the-close__sub">
          We engineer competitive market position for one firm per metro. Apply for an audit to see if your metro is open.
        </p>

        <Link href="/contact" className="the-close__cta">
          Request audit
        </Link>

        <div className="the-close__contact">
          <a href="mailto:marketing@rysengrowth.com">marketing@rysengrowth.com</a>
          <span aria-hidden="true">·</span>
          <a href="tel:+12484066223">(248) 406-6223</a>
          <span aria-hidden="true">·</span>
          <span>Detroit + Phoenix</span>
        </div>
      </div>
    </section>
  );
}
