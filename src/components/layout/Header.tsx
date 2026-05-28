"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { RysenLogo } from "@/components/brand/RysenLogo";
import { HeaderNav } from "./HeaderNav";
import { MobileDrawer } from "./MobileDrawer";
import { track } from "@/lib/analytics";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  // Session 51 — mobile drawer state. The hamburger button is only
  // rendered ≤900px (via CSS); the drawer itself can be opened from
  // any viewport but practically only fires from mobile.
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
        <div className="site-header__inner">
          <Link
            href="/"
            className="site-header__logo"
            aria-label="Rysen Growth home"
          >
            <RysenLogo size="md" variant="inverse" />
          </Link>

          <HeaderNav />

          <Link
            href="/contact"
            className="site-header__cta"
            onClick={() => track("cta_click", { location: "header" })}
          >
            Claim your city
            <svg
              width="12"
              height="12"
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
          </Link>

          <button
            type="button"
            className="site-header__hamburger"
            aria-label="Open menu"
            aria-expanded={drawerOpen}
            aria-controls="mobile-drawer"
            onClick={() => setDrawerOpen(true)}
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              aria-hidden="true"
            >
              <line x1="3" y1="6" x2="19" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <line x1="3" y1="11" x2="19" y2="11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <line x1="3" y1="16" x2="19" y2="16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </header>

      {drawerOpen && <MobileDrawer onClose={() => setDrawerOpen(false)} />}
    </>
  );
}
