"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { RysenLogo } from "@/components/brand/RysenLogo";

const NAV_LINKS: ReadonlyArray<{ label: string; href: string }> = [
  { label: "Methodology", href: "/methodology" },
  { label: "Services", href: "/services" },
  { label: "Work", href: "/case-studies" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isHomepage = pathname === "/";
  const transparent = isHomepage && !scrolled;

  return (
    <header
      className={`site-header${scrolled ? " is-scrolled" : ""}${
        isHomepage ? " is-homepage" : ""
      }`}
    >
      <div className="site-header__inner">
        <Link href="/" className="site-header__brand" aria-label="Rysen home">
          <RysenLogo size="md" variant={transparent ? "inverse" : "default"} />
        </Link>

        <nav className="site-header__nav" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>

        <Link href="/contact" className="site-header__cta">
          Request audit
        </Link>
      </div>
    </header>
  );
}
