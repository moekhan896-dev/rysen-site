"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export function FloatingCTA() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const pathname = usePathname();

  // Don't render on /contact, /audit, or other CTA-destination pages
  const isCTADestination =
    pathname === "/contact" ||
    pathname?.startsWith("/contact") ||
    pathname === "/audit";

  useEffect(() => {
    if (dismissed || isCTADestination) return;
    // Session 45: only show after scrolling well past the hero
    // (~1.2x viewport height) so the bar never shows on initial load.
    const onScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 1.2);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [dismissed, isCTADestination]);

  if (dismissed || isCTADestination) return null;

  return (
    <div
      className={`floating-cta${visible ? " is-visible" : ""}`}
      role="complementary"
      aria-label="Claim your city"
    >
      <button
        type="button"
        className="floating-cta__dismiss"
        aria-label="Dismiss"
        onClick={() => setDismissed(true)}
      >
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
          <path d="M1 1L9 9M9 1L1 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </button>
      <Link href="/contact" className="floating-cta__link">
        <span className="floating-cta__indicator">
          <span className="floating-cta__indicator-dot" aria-hidden="true" />
          <span className="floating-cta__indicator-label">Currently accepting</span>
        </span>
        <span className="floating-cta__cta">
          Claim your city
          <svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M3 7H11M11 7L7 3M11 7L7 11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </Link>
    </div>
  );
}
