import Link from "next/link";
import { ContourPattern } from "./ContourPattern";
import { MarkerUnderline } from "@/components/ui/MarkerUnderline";
import { TriangleMark } from "@/components/ui/TriangleMark";
import { HeroPlatformProvider } from "./CyclingPlatform";
import { HeroSearchTease } from "./HeroSearchTease";

// Session 45 hero — synced cycling platform + search bar.
//
// HeroPlatformProvider holds the current platform in shared state.
// CyclingPlatform reads it to render the headline word; HeroSearchTease
// reads it to restyle the synced search bar. Both are wrapped inside
// the provider so they tick together.
//
// 3-line headline with varied Geist weights:
//   Line 1: small setup, 500
//   Line 2: bold emphasis with marker underlines on "law firms" and
//           "medical practices"
//   Line 3: bold + cycling platform word
//
// Above-fold budget at 1440x900 (header ~96px, ~700px usable inside):
//   headline ~150 + sub ~44 + search ~50 + CTAs ~50 + gaps ~150
//   ≈ 444px — comfortable.
//
// Box widened to 1360px (from Session 44's 1280px).

function ArrowIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M3 7H11M11 7L7 3M11 7L7 11"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Session 49 — four static platform logos shown inline in the
// headline so no visitor feels excluded by a single-platform cycle.
// Each sized to ~1em via the parent .hero__plogo wrapper.

function GoogleLogoMini() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M22.5 12.27c0-.85-.08-1.66-.22-2.45H12v4.63h5.92a5.06 5.06 0 0 1-2.2 3.32v2.76h3.56c2.08-1.92 3.28-4.74 3.28-8.26z" fill="#4285F4" />
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.56-2.76c-.98.66-2.24 1.05-3.72 1.05-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84A11 11 0 0 0 12 23z" fill="#34A853" />
      <path d="M5.84 14.1A6.58 6.58 0 0 1 5.5 12c0-.73.13-1.44.34-2.1V7.06H2.18A11 11 0 0 0 1 12c0 1.77.42 3.45 1.18 4.94l3.66-2.84z" fill="#FBBC05" />
      <path d="M12 5.38c1.62 0 3.07.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1A11 11 0 0 0 2.18 7.06l3.66 2.84C6.71 7.31 9.14 5.38 12 5.38z" fill="#EA4335" />
    </svg>
  );
}

function ChatGPTLogoMini() {
  return (
    <svg viewBox="0 0 24 24" fill="#10A37F" aria-hidden="true">
      <path d="M22 9.4c0-1.3-.5-2.6-1.5-3.5-.9-.9-2.2-1.5-3.5-1.5-.4 0-.7 0-1.1.1-.7-1.5-2.3-2.5-4-2.5-1.3 0-2.6.5-3.5 1.5-.4.4-.7.8-.9 1.3-1.3-.1-2.6.3-3.6 1.2-.9.9-1.5 2.2-1.5 3.5 0 .4 0 .8.1 1.1-1.5.7-2.5 2.3-2.5 4 0 1.3.5 2.6 1.5 3.5 1.1 1.1 2.6 1.6 4 1.5.7 1.4 2.2 2.4 4 2.4 1.3 0 2.6-.5 3.5-1.5.4-.4.7-.8.9-1.3 1.3.1 2.6-.3 3.6-1.2 1-.9 1.5-2.2 1.5-3.5 0-.4 0-.8-.1-1.1 1.5-.7 2.5-2.3 2.5-4z" />
    </svg>
  );
}

function PerplexityLogoMini() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect width="24" height="24" rx="5" fill="#20B8A6" />
      <path d="M12 6v12M6 9v6M18 9v6M9 7v10M15 7v10" stroke="white" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function GeminiLogoMini() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <defs>
        <linearGradient id="hero-mini-gem" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4285F4" />
          <stop offset="50%" stopColor="#9747FF" />
          <stop offset="100%" stopColor="#EA4335" />
        </linearGradient>
      </defs>
      <path d="M12 2 L14 10 L22 12 L14 14 L12 22 L10 14 L2 12 L10 10 Z" fill="url(#hero-mini-gem)" />
    </svg>
  );
}

export function Hero() {
  return (
    <section className="hero hero--s45" aria-label="Hero">
      <HeroPlatformProvider>
        <div className="hero__box">
          <div className="hero__box-bg" aria-hidden="true">
            <ContourPattern />
          </div>
          <div className="hero__box-pulse" aria-hidden="true" />
          {/* Session 49 — traveling green data points along the contour
              field. Three points, each on a long offset loop, giving the
              hero card a live data-monitoring feel without distracting
              the headline. GPU-friendly (transform/opacity only). */}
          <svg
            className="hero__box-datapoints"
            viewBox="0 0 800 400"
            preserveAspectRatio="xMidYMid slice"
            aria-hidden="true"
          >
            <circle
              className="hero__box-datapoint hero__box-datapoint--a"
              cx="120"
              cy="80"
              r="3.4"
            />
            <circle
              className="hero__box-datapoint hero__box-datapoint--b"
              cx="640"
              cy="160"
              r="3.4"
            />
            <circle
              className="hero__box-datapoint hero__box-datapoint--c"
              cx="320"
              cy="280"
              r="3.4"
            />
          </svg>

          <div className="hero__box-content">
            <h1 className="hero__headline">
              <span className="hero__line hero__line--1">
                A search engineering agency
              </span>
              <span className="hero__line hero__line--2">
                for{" "}
                <span className="hero__emph">
                  law firms
                  <MarkerUnderline className="hero__emph-underline" />
                </span>{" "}
                and{" "}
                <span className="hero__emph">
                  medical practices
                  <MarkerUnderline className="hero__emph-underline" />
                </span>
              </span>
              <span className="hero__line hero__line--3">
                to dominate
                <span className="hero__platforms-inline" aria-label="Google, ChatGPT, Perplexity, Gemini">
                  <span className="hero__plogo" title="Google">
                    <GoogleLogoMini />
                  </span>
                  <span className="hero__plogo" title="ChatGPT">
                    <ChatGPTLogoMini />
                  </span>
                  <span className="hero__plogo" title="Perplexity">
                    <PerplexityLogoMini />
                  </span>
                  <span className="hero__plogo" title="Gemini">
                    <GeminiLogoMini />
                  </span>
                </span>
              </span>
            </h1>

            <p className="hero__sub">
              We get your practice ranked #1 where clients and patients are
              searching, on Google and across every AI search tool.
            </p>

            <HeroSearchTease />

            <div className="hero__ctas">
              <Link href="/contact" className="hero__cta-primary">
                Claim your city <ArrowIcon />
              </Link>
              <Link href="#selected-work" className="hero__cta-secondary">
                See the work
              </Link>
            </div>

            {/* Session 48 — fill the white space below the search demo
                with a tight capability list + a scarcity / status line. */}
            <div className="hero__capabilities">
              <ul className="hero__cap-list">
                <li>
                  <TriangleMark size={10} />
                  #1 rankings on Google and AI search
                </li>
                <li>
                  <TriangleMark size={10} />
                  One firm per metro, exclusive territory
                </li>
                <li>
                  <TriangleMark size={10} />
                  Data and AI engineering, not guesswork
                </li>
                <li>
                  <TriangleMark size={10} />
                  Built and proven on our own viral brands
                </li>
              </ul>
            </div>

            <div className="hero__status-line">
              <span className="hero__status-dot--inline" aria-hidden="true" />
              Currently accepting clients for Q2 2026 · A boutique studio working with a limited roster
            </div>
          </div>
        </div>
      </HeroPlatformProvider>
    </section>
  );
}
