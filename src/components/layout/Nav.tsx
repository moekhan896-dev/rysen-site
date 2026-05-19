"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { RysenLogo } from "@/components/brand/RysenLogo";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
      <div className="site-header__row">
        <Link href="/" className="site-header__brand" aria-label="Rysen home">
          <RysenLogo size="md" />
        </Link>

        <nav className="site-header__nav" aria-label="Primary">
          <Link href="/methodology">Methodology</Link>
          <Link href="/services">Services</Link>
          <Link href="/case-studies">Work</Link>
          <Link href="/about">About</Link>
        </nav>

        <Link href="/contact" className="site-header__cta">
          Request audit
        </Link>
      </div>
    </header>
  );
}
