import Link from "next/link";
import { ContourPattern } from "./ContourPattern";
import { MarkerUnderline } from "@/components/ui/MarkerUnderline";
import { HeroPlatformProvider, CyclingPlatform } from "./CyclingPlatform";
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

export function Hero() {
  return (
    <section className="hero hero--s45" aria-label="Hero">
      <HeroPlatformProvider>
        <div className="hero__box">
          <div className="hero__box-bg" aria-hidden="true">
            <ContourPattern />
          </div>
          <div className="hero__box-pulse" aria-hidden="true" />

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
                to dominate <CyclingPlatform />
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
          </div>
        </div>
      </HeroPlatformProvider>
    </section>
  );
}
