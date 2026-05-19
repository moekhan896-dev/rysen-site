import Link from "next/link";
import { RysenLogo } from "@/components/brand/RysenLogo";

export function TheClose() {
  return (
    <section className="the-close" aria-label="Find out if your metro is open">
      {/* Background target reticle */}
      <svg className="the-close__bg" viewBox="0 0 1400 900" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <defs>
          <radialGradient id="cl-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFE817" stopOpacity="0.06" />
            <stop offset="100%" stopColor="#FFE817" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="1400" height="900" fill="url(#cl-glow)" />
        {/* Concentric rings */}
        {[420, 320, 220, 140, 80].map((r) => (
          <circle key={r} cx="700" cy="450" r={r} stroke="rgba(255, 232, 23, 0.08)" strokeWidth="1" strokeDasharray="3 8" fill="none" />
        ))}
        {/* Cross-hair lines */}
        <line x1="700" y1="0" x2="700" y2="900" stroke="rgba(255, 232, 23, 0.05)" strokeWidth="1" strokeDasharray="2 10" />
        <line x1="0" y1="450" x2="1400" y2="450" stroke="rgba(255, 232, 23, 0.05)" strokeWidth="1" strokeDasharray="2 10" />
        {/* Center triangle motif */}
        <g opacity="0.12" transform="translate(682, 432)">
          <polygon points="0,0 36,0 0,36" fill="#FFE817" />
        </g>
      </svg>

      <div className="the-close__inner">
        <div className="the-work__heading-row">
          <span className="how__bar" aria-hidden="true" />
          <p className="how__label">Find out if your metro is open</p>
        </div>

        <h2 className="the-close__headline">
          Your competitors are #1.<br />Until they&apos;re not.
        </h2>

        <p className="the-close__sub">
          Request your audit. If we can take you to #1, we tell you. If we can&apos;t, we tell you that too.
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

        <div className="the-close__mark">
          <RysenLogo size="xl" />
        </div>
      </div>
    </section>
  );
}
