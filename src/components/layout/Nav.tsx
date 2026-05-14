"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

interface NavLinkItem {
  readonly label: string;
  readonly href: string;
  readonly children?: ReadonlyArray<{ readonly label: string; readonly href: string }>;
}

const NAV_LINKS: ReadonlyArray<NavLinkItem> = [
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Overview", href: "/services" },
      { label: "AI Search", href: "/services/ai-search" },
      { label: "Local SEO", href: "/services/local-seo" },
      { label: "Content & Reputation", href: "/services/content" },
    ],
  },
  { label: "Work", href: "/case-studies" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    let ticking = false;
    let lastY = 0;
    const onScroll = () => {
      lastY = window.scrollY;
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolled(lastY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  // Close dropdown on outside click
  useEffect(() => {
    if (!openDropdown) return;
    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest(".nav-dropdown") && !target.closest(".nav-link-with-dropdown")) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [openDropdown]);

  const handleDropdownEnter = (label: string) => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setOpenDropdown(label);
  };

  const handleDropdownLeave = () => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    dropdownTimeout.current = setTimeout(() => setOpenDropdown(null), 160);
  };

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <nav id="nav" className={scrolled ? "scrolled" : undefined}>
      <div className="nav-inner">
        <Link href="/" className="wordmark" aria-label="Rysen home">
          <div className="wordmark-icon" aria-hidden="true"></div>
          <span className="wordmark-stack">
            <span className="wordmark-text">Rysen</span>
            <span className="wordmark-subline">Est. 2019 · Detroit</span>
          </span>
        </Link>

        <div className="nav-links" role="menubar">
          {NAV_LINKS.map((item) =>
            item.children ? (
              <div
                key={item.label}
                className="nav-link-with-dropdown"
                onMouseEnter={() => handleDropdownEnter(item.label)}
                onMouseLeave={handleDropdownLeave}
              >
                <button
                  type="button"
                  className={`nav-link-button${
                    isActive(item.href) ? " is-active" : ""
                  }`}
                  aria-expanded={openDropdown === item.label}
                  aria-haspopup="true"
                  onClick={() =>
                    setOpenDropdown(openDropdown === item.label ? null : item.label)
                  }
                >
                  {item.label}
                  <span className="nav-link-chevron" aria-hidden="true">
                    ▾
                  </span>
                </button>
                {openDropdown === item.label && (
                  <div
                    className="nav-dropdown"
                    onMouseEnter={() => handleDropdownEnter(item.label)}
                    onMouseLeave={handleDropdownLeave}
                  >
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="nav-dropdown-link"
                        onClick={() => setOpenDropdown(null)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={isActive(item.href) ? "is-active" : undefined}
              >
                {item.label}
              </Link>
            )
          )}
        </div>

        <Link href="/audit" className="nav-cta">
          Book audit <span className="nav-cta-arrow">→</span>
        </Link>

        <button
          type="button"
          className="nav-mobile-toggle"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
        >
          <span className={`nav-mobile-icon${mobileOpen ? " is-open" : ""}`} aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
        </button>
      </div>

      {mobileOpen && (
        <div className="nav-mobile-panel" role="menu">
          {NAV_LINKS.map((item) => (
            <div key={item.label} className="nav-mobile-group">
              <Link
                href={item.href}
                className={`nav-mobile-link${isActive(item.href) ? " is-active" : ""}`}
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
              {item.children && (
                <div className="nav-mobile-sublinks">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="nav-mobile-sublink"
                      onClick={() => setMobileOpen(false)}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link
            href="/audit"
            className="nav-mobile-cta"
            onClick={() => setMobileOpen(false)}
          >
            Book audit →
          </Link>
        </div>
      )}
    </nav>
  );
}
