"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { RysenLogo } from "@/components/brand/RysenLogo";

const NAV_LINKS: ReadonlyArray<{ num: string; label: string; href: string }> = [
  { num: "01", label: "Methodology", href: "/methodology" },
  { num: "02", label: "Services", href: "/services" },
  { num: "03", label: "Work", href: "/case-studies" },
  { num: "04", label: "About", href: "/about" },
];

export function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Header is present on all pages, including homepage
  return (
    <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
      <div className="site-header__row">
        <Link href="/" className="site-header__brand" aria-label="Rysen home">
          <RysenLogo size="md" variant="default" />
        </Link>

        <nav className="site-header__nav" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href}>
              <span className="nav-num">{link.num}</span>
              {link.label}
            </Link>
          ))}
        </nav>

        <Link href="/contact" className="site-header__cta">
          Contact <span aria-hidden="true">→</span>
        </Link>
      </div>
    </header>
  );
}
