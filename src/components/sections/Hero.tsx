"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { SignalTriangle } from "@/components/brand/SignalTriangle";
import { AmbientTriangle } from "@/components/brand/AmbientTriangle";
import { HeroSearchDemonstration } from "./HeroSearchDemonstration";

const MENU_ITEMS: ReadonlyArray<{ label: string; href: string }> = [
  { label: "Methodology", href: "/methodology" },
  { label: "Services", href: "/services" },
  { label: "Work", href: "/case-studies" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Blog", href: "/blog" },
];

export function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Lock body scroll while menu open
  useEffect(() => {
    if (!menuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  return (
    <section className="hero-confidential" aria-label="Hero">
      {/* Top-left mark */}
      <div className="hero-mark">
        <SignalTriangle size={18} decorative />
        <span className="hero-mark__wordmark">Rysen</span>
        <span className="hero-mark__location">Detroit, Michigan</span>
      </div>

      {/* Top-right navigation */}
      <div className="hero-topnav">
        <span className="hero-topnav__appt">By appointment</span>
        <Link href="/contact" className="hero-topnav__cta">
          Request audit
        </Link>
        <button
          type="button"
          className="hero-topnav__menu"
          aria-label="Open menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(true)}
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>
      </div>

      {/* Center composition */}
      <HeroSearchDemonstration />

      {/* Bottom-right ambient triangle */}
      <div className="hero-ambient-corner" aria-hidden="true">
        <AmbientTriangle size={32} />
      </div>

      {/* Full-screen menu overlay */}
      {menuOpen && (
        <div className="hero-menu" role="dialog" aria-label="Site menu">
          <button
            type="button"
            className="hero-menu__close"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <line x1="6" y1="6" x2="18" y2="18" />
              <line x1="18" y1="6" x2="6" y2="18" />
            </svg>
          </button>
          <nav className="hero-menu__nav" aria-label="Site">
            <ul>
              {MENU_ITEMS.map((item, i) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="hero-menu__link"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                  {i < MENU_ITEMS.length - 1 && (
                    <hr className="hero-menu__rule" aria-hidden="true" />
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </section>
  );
}
