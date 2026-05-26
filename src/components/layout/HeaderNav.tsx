"use client";

// Session 40 — Primary header navigation with hover-revealed dropdown
// panels for each top-level item. Four items: Methodology, Services,
// Work, About. Each opens a panel of grouped sub-items below the bar.
//
// Behavior:
//   - Hovering a top-level item opens its panel after a small grace
//     period (handled implicitly via React state — open immediately on
//     mouseenter, close after 160ms timeout on mouseleave so the user
//     can move from the trigger to the panel without it closing).
//   - Escape closes whichever panel is open.
//   - Mobile (≤900px): the entire nav is hidden via CSS. A separate
//     hamburger drawer is a future session.
//   - The panel is positioned absolutely below the trigger and is
//     visually anchored to it via translateX(-50%) centering.
//
// Accessibility:
//   - aria-haspopup on the trigger link.
//   - aria-expanded reflects open state.
//   - role="menu" on the panel, role="menuitem" on each sublink.
//   - keydown Escape closes (window-level listener).

import { useState, useRef, useEffect } from "react";
import Link from "next/link";

// ---------- Types ----------

type SubItem = {
  label: string;
  href: string;
  description: string;
};

type SubmenuSection = {
  heading: string;
  items: SubItem[];
};

type NavItem = {
  label: string;
  href: string;
  description: string;
  submenu: SubmenuSection[];
};

// ---------- Nav data ----------
//
// The structure intentionally splits items into "sections" inside a
// submenu so future panels can host multiple labeled groups (e.g. a
// "By vertical" group + a "By engagement" group). Today each panel has
// a single section but the shape supports growth without refactoring.

const NAV: NavItem[] = [
  {
    label: "Methodology",
    href: "/methodology",
    description: "How we engineer first-position rankings",
    submenu: [
      {
        heading: "The First Position Method",
        items: [
          {
            label: "Overview",
            href: "/methodology",
            description: "Our proprietary 5-pillar approach",
          },
          {
            label: "Data foundation",
            href: "/methodology#data",
            description: "Query, intent, and competitor mapping",
          },
          {
            label: "AI search optimization",
            href: "/methodology#ai-search",
            description:
              "Citation engineering for ChatGPT, Perplexity, Gemini",
          },
          {
            label: "Authority architecture",
            href: "/methodology#authority",
            description: "Long-form content and schema systems",
          },
          {
            label: "Attribution engineering",
            href: "/methodology#attribution",
            description: "Dollar-level revenue tracking",
          },
        ],
      },
    ],
  },
  {
    label: "Services",
    href: "/services",
    description: "Engineered systems we deploy",
    submenu: [
      {
        heading: "Engineered systems",
        items: [
          {
            label: "Local search visibility",
            href: "/services#local-visibility",
            description: "Maps and local query dominance",
          },
          {
            label: "Google Business Profile",
            href: "/services#gbp",
            description: "Optimized weekly, monitored daily",
          },
          {
            label: "Authority content",
            href: "/services#authority-content",
            description: "Long-form articles that rank and get cited",
          },
          {
            label: "AI search optimization",
            href: "/services#ai-search",
            description: "Citation engineering for AI surfaces",
          },
          {
            label: "Reputation engineering",
            href: "/services#reputation",
            description: "Review velocity and response discipline",
          },
          {
            label: "Conversion systems",
            href: "/services#conversion",
            description: "Pages that turn searchers into qualified calls",
          },
          {
            label: "Press and authority",
            href: "/services#press",
            description: "Publication mentions that compound trust",
          },
          {
            label: "Schema and technical",
            href: "/services#schema",
            description: "The invisible infrastructure",
          },
          {
            label: "Email and newsletter",
            href: "/services#email",
            description: "Nurturing legal and medical decision cycles",
          },
          {
            label: "Selected social media",
            href: "/services#social",
            description: "Brand presence where attention lives",
          },
        ],
      },
    ],
  },
  {
    label: "Work",
    href: "/case-studies",
    description: "Selected case studies",
    submenu: [
      {
        heading: "Selected case studies",
        items: [
          {
            label: "AWS Law Firm",
            href: "/case-studies/aws-law-firm",
            description: "Tampa probate · 348 calls in Q1 2026",
          },
          {
            label: "Tyler Family Law",
            href: "/case-studies/tyler-family-law",
            description: "Atlanta divorce · 169 calls in 6 months",
          },
          {
            label: "Slim Dental",
            href: "/case-studies/slim-dental",
            description: "Chicago implant dentistry · +186% growth",
          },
          {
            label: "Hartman Dermatology",
            href: "/case-studies/hartman-dermatology",
            description: "Miami cosmetic · 38% AI citation rate",
          },
          {
            label: "Quattro Labs",
            href: "/case-studies/quattro-labs",
            description: "Internal automotive media · 150K+ followers",
          },
          {
            label: "Madison Clark",
            href: "/case-studies/madison-clark",
            description: "AI persona · 100M views in 60 days",
          },
        ],
      },
    ],
  },
  {
    label: "About",
    href: "/about",
    description: "The studio",
    submenu: [
      {
        heading: "The studio",
        items: [
          {
            label: "Founder",
            href: "/about#founder",
            description: "Art Khan, Managing Partner",
          },
          {
            label: "The team",
            href: "/about#team",
            description: "Small team of creatives + engineers",
          },
          {
            label: "Detroit + Phoenix",
            href: "/about#locations",
            description: "Two offices, one engagement model",
          },
          {
            label: "Values",
            href: "/about#values",
            description: "How we operate",
          },
          {
            label: "Press",
            href: "/about#press",
            description: "Recent placements",
          },
          {
            label: "Careers",
            href: "/careers",
            description: "Open roles in Detroit, Phoenix, and remote",
          },
          {
            label: "Transparency",
            href: "/privacy",
            description: "How we handle your data",
          },
        ],
      },
    ],
  },
];

// ---------- Component ----------

export function HeaderNav() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleEnter = (i: number) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenIndex(i);
  };

  const handleLeave = () => {
    closeTimer.current = setTimeout(() => setOpenIndex(null), 160);
  };

  // Escape closes any open panel. Listener bound to window so it works
  // regardless of which element currently has focus.
  useEffect(() => {
    const onEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenIndex(null);
    };
    window.addEventListener("keydown", onEsc);
    return () => window.removeEventListener("keydown", onEsc);
  }, []);

  // Clean up the close timer on unmount to avoid setState after unmount.
  useEffect(() => {
    return () => {
      if (closeTimer.current) clearTimeout(closeTimer.current);
    };
  }, []);

  return (
    <nav
      className="header-nav"
      onMouseLeave={handleLeave}
      aria-label="Primary navigation"
    >
      {NAV.map((item, i) => (
        <div
          key={item.label}
          className={`header-nav__item ${openIndex === i ? "is-open" : ""}`}
          onMouseEnter={() => handleEnter(i)}
        >
          <Link
            href={item.href}
            className="header-nav__link"
            aria-expanded={openIndex === i}
            aria-haspopup="true"
          >
            {item.label}
            <ChevronIcon />
          </Link>

          {openIndex === i && (
            <div className="header-nav__panel" role="menu">
              <div className="header-nav__panel-inner">
                {item.submenu.map((section) => (
                  <div key={section.heading} className="header-nav__section">
                    <div className="header-nav__section-heading">
                      {section.heading}
                    </div>
                    <ul className="header-nav__sublist">
                      {section.items.map((sub) => (
                        <li key={sub.label}>
                          <Link
                            href={sub.href}
                            className="header-nav__sublink"
                            role="menuitem"
                          >
                            <span className="header-nav__sublink-label">
                              {sub.label}
                            </span>
                            <span className="header-nav__sublink-desc">
                              {sub.description}
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </nav>
  );
}

function ChevronIcon() {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
      aria-hidden="true"
      className="header-nav__chevron"
    >
      <path
        d="M2 3.5L5 6.5L8 3.5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
