"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { NavServicesMenu } from "./NavServicesMenu";
import { NavTopRibbon } from "./NavTopRibbon";

const NAV_LINKS: ReadonlyArray<{ label: string; href: string; hasDropdown?: boolean }> = [
  { label: "Services", href: "/services", hasDropdown: true },
  { label: "Work", href: "/case-studies" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const SERVICE_HREFS: ReadonlyArray<string> = [
  "/services",
  "/services/ai-search",
  "/services/local-seo",
  "/services/content",
];

export function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const hoverTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Scroll detection — rAF-throttled
  useEffect(() => {
    let ticking = false;
    let lastY = 0;
    const onScroll = () => {
      lastY = window.scrollY;
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolled(lastY > 80);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  // ESC closes services menu
  useEffect(() => {
    if (!servicesOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setServicesOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [servicesOpen]);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "";
      };
    }
  }, [mobileOpen]);

  const handleServicesEnter = () => {
    if (hoverTimer.current) clearTimeout(hoverTimer.current);
    hoverTimer.current = setTimeout(() => setServicesOpen(true), 100);
  };

  const handleServicesLeave = () => {
    if (hoverTimer.current) clearTimeout(hoverTimer.current);
    hoverTimer.current = setTimeout(() => setServicesOpen(false), 150);
  };

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    if (href === "/services") {
      return SERVICE_HREFS.some((h) => pathname === h);
    }
    return pathname.startsWith(href);
  };

  return (
    <header
      id="nav"
      className={`site-nav${scrolled ? " is-scrolled" : ""}${
        servicesOpen ? " is-mega-open" : ""
      }`}
    >
      <NavTopRibbon />

      <div className="nav-main">
        <div className="nav-noise" aria-hidden="true" />
        <div className="nav-inner">
          {/* LEFT — Logo block */}
          <Link href="/" className="nav-logo" aria-label="Rysen home">
            <span className="nav-logo-dot" aria-hidden="true" />
            <span className="nav-logo-stack">
              <span className="nav-logo-wordmark">Rysen</span>
              <span className="nav-logo-subline">Est. 2019 · Detroit</span>
            </span>
          </Link>

          {/* CENTER — Nav links */}
          <nav className="nav-links" aria-label="Primary">
            {NAV_LINKS.map((item) =>
              item.hasDropdown ? (
                <div
                  key={item.label}
                  className="nav-link-wrap"
                  onMouseEnter={handleServicesEnter}
                  onMouseLeave={handleServicesLeave}
                >
                  <button
                    type="button"
                    className={`nav-link nav-link-button${
                      isActive(item.href) ? " is-active" : ""
                    }${servicesOpen ? " is-open" : ""}`}
                    aria-expanded={servicesOpen}
                    aria-haspopup="true"
                    onClick={() => setServicesOpen((v) => !v)}
                  >
                    <span className="nav-link-text">{item.label}</span>
                    <span className="nav-link-chevron" aria-hidden="true">
                      ▾
                    </span>
                  </button>
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`nav-link${isActive(item.href) ? " is-active" : ""}`}
                >
                  <span className="nav-link-text">{item.label}</span>
                </Link>
              )
            )}
          </nav>

          {/* RIGHT — Status pill + CTA + mobile toggle */}
          <div className="nav-right">
            <div className="nav-status-pill" aria-hidden="true">
              <span className="nav-status-dot" />
              <span className="nav-status-text">47 touchpoints this week</span>
            </div>

            <Link href="/audit" className="nav-cta">
              <span className="nav-cta-text">Book audit</span>
              <span className="nav-cta-sheen" aria-hidden="true" />
            </Link>

            <button
              type="button"
              className="nav-mobile-toggle"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((v) => !v)}
            >
              <span
                className={`nav-mobile-icon${mobileOpen ? " is-open" : ""}`}
                aria-hidden="true"
              >
                <span />
                <span />
                <span />
              </span>
            </button>
          </div>
        </div>

        <div className="nav-hairline" aria-hidden="true">
          <span className="nav-hairline-pulse" />
        </div>
      </div>

      {/* Services mega-menu */}
      <div
        onMouseEnter={handleServicesEnter}
        onMouseLeave={handleServicesLeave}
      >
        <NavServicesMenu
          open={servicesOpen}
          onClose={() => setServicesOpen(false)}
        />
      </div>

      {/* Mobile slide-in panel */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="nav-mobile-panel"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            role="dialog"
            aria-label="Mobile navigation"
          >
            <div className="nav-mobile-panel-inner">
              <div className="nav-mobile-group">
                <div className="nav-mobile-group-head">Services</div>
                <Link
                  href="/services"
                  className="nav-mobile-sublink"
                  onClick={() => setMobileOpen(false)}
                >
                  Overview
                </Link>
                <Link
                  href="/services/ai-search"
                  className="nav-mobile-sublink"
                  onClick={() => setMobileOpen(false)}
                >
                  AI Search
                </Link>
                <Link
                  href="/services/local-seo"
                  className="nav-mobile-sublink"
                  onClick={() => setMobileOpen(false)}
                >
                  Local SEO
                </Link>
                <Link
                  href="/services/content"
                  className="nav-mobile-sublink"
                  onClick={() => setMobileOpen(false)}
                >
                  Content &amp; Reputation
                </Link>
              </div>

              <Link
                href="/case-studies"
                className="nav-mobile-link"
                onClick={() => setMobileOpen(false)}
              >
                Work
              </Link>
              <Link
                href="/about"
                className="nav-mobile-link"
                onClick={() => setMobileOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="nav-mobile-link"
                onClick={() => setMobileOpen(false)}
              >
                Contact
              </Link>

              <Link
                href="/audit"
                className="nav-mobile-cta"
                onClick={() => setMobileOpen(false)}
              >
                Book audit →
              </Link>

              <div className="nav-mobile-footer">
                <div className="nav-mobile-footer-line">Rysen Growth</div>
                <div className="nav-mobile-footer-line">
                  1 Campus Martius, Suite 200
                </div>
                <div className="nav-mobile-footer-line">Detroit, MI 48226</div>
                <a
                  href="tel:+12484066223"
                  className="nav-mobile-footer-line nav-mobile-footer-contact"
                >
                  (248) 406-6223
                </a>
                <a
                  href="mailto:marketing@rysengrowth.com"
                  className="nav-mobile-footer-line nav-mobile-footer-contact"
                >
                  marketing@rysengrowth.com
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
