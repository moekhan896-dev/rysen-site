"use client";

// Session 51 — MobileDrawer.
//
// Slide-in drawer surfaced by the hamburger button in the site header
// at viewports ≤900px. Contains the full nav (Methodology, Services,
// Work, About, Careers, Transparency) plus a "Claim your city" CTA
// pinned to the bottom of the panel.
//
// Accessibility:
//   - Backdrop tap closes the drawer.
//   - Escape key closes it.
//   - Focus is moved into the panel when it opens; the previously
//     focused element is restored when it closes.
//   - Tab is trapped inside the panel.
//   - aria-modal + role="dialog" on the panel.
//   - prefers-reduced-motion suppresses the slide-in animation.
//
// The drawer is rendered into a portal-style fixed overlay so it can
// sit above the header at z-index: 200.

import Link from "next/link";
import { useEffect, useRef } from "react";

const NAV_ITEMS = [
  { label: "Methodology", href: "/methodology" },
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Careers", href: "/careers" },
  { label: "Transparency", href: "/privacy" },
] as const;

type Props = {
  onClose: () => void;
};

export function MobileDrawer({ onClose }: Props) {
  const panelRef = useRef<HTMLDivElement>(null);
  const previouslyFocused = useRef<HTMLElement | null>(null);

  useEffect(() => {
    previouslyFocused.current = (document.activeElement as HTMLElement) ?? null;
    const panel = panelRef.current;
    if (!panel) return;
    const focusables = panel.querySelectorAll<HTMLElement>(
      'a[href], button, [tabindex]:not([tabindex="-1"])'
    );
    focusables[0]?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
        return;
      }
      if (e.key === "Tab" && focusables.length > 0) {
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);

    // Lock body scroll while the drawer is open.
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
      previouslyFocused.current?.focus();
    };
  }, [onClose]);

  return (
    <div
      className="mobile-drawer"
      role="dialog"
      aria-modal="true"
      aria-label="Site navigation"
    >
      <button
        type="button"
        className="mobile-drawer__backdrop"
        aria-label="Close menu"
        onClick={onClose}
      />
      <div className="mobile-drawer__panel" ref={panelRef}>
        <div className="mobile-drawer__head">
          <span className="mobile-drawer__brand">Rysen</span>
          <button
            type="button"
            className="mobile-drawer__close"
            aria-label="Close menu"
            onClick={onClose}
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              aria-hidden="true"
            >
              <line
                x1="5"
                y1="5"
                x2="17"
                y2="17"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <line
                x1="17"
                y1="5"
                x2="5"
                y2="17"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        <nav className="mobile-drawer__nav" aria-label="Mobile navigation">
          <ul className="mobile-drawer__list">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="mobile-drawer__link"
                  onClick={onClose}
                >
                  {item.label}
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
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mobile-drawer__cta-wrap">
          <Link
            href="/contact"
            className="mobile-drawer__cta hero__cta-primary"
            onClick={onClose}
          >
            Claim your city
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
          </Link>
          <p className="mobile-drawer__meta">
            marketing@rysengrowth.com · Detroit, Michigan
          </p>
        </div>
      </div>
    </div>
  );
}
