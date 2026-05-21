"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { RysenLogo } from "@/components/brand/RysenLogo";
import { HeaderNav } from "./HeaderNav";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
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

        <Link href="/contact" className="site-header__cta">
          Request audit
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
      </div>
    </header>
  );
}
