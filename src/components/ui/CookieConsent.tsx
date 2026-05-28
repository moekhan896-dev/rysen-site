"use client";

// Session 52 — CookieConsent.
//
// A narrow, tasteful consent banner pinned to the bottom of the page
// on first visit. Two-tier choice:
//
//   "Essential only" — required cookies only; analytics events from
//                      src/lib/analytics.ts will not fire.
//   "Accept all"     — analytics events enabled.
//
// The choice is persisted to localStorage under CONSENT_STORAGE_KEY.
// On selection a `rysen-consent-changed` window event is dispatched
// so any open code paths can react (we use this nowhere right now,
// but it's there for future plumbing).
//
// The banner is hidden on subsequent visits. To reset, clear the key
// from localStorage and reload.

import { useEffect, useState } from "react";
import { CONSENT_STORAGE_KEY } from "@/lib/analytics";

type Level = "all" | "essential";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    let stored: string | null = null;
    try {
      stored = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    } catch {
      // localStorage blocked — show the banner conservatively.
    }
    if (!stored) setVisible(true);
  }, []);

  const accept = (level: Level) => {
    try {
      window.localStorage.setItem(CONSENT_STORAGE_KEY, level);
      window.localStorage.setItem(
        `${CONSENT_STORAGE_KEY}-at`,
        new Date().toISOString()
      );
    } catch {
      // Swallow — banner still dismisses for the session.
    }
    window.dispatchEvent(
      new CustomEvent("rysen-consent-changed", { detail: { level } })
    );
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      className="cookie-consent"
      role="region"
      aria-label="Cookie preferences"
    >
      <div className="cookie-consent__inner">
        <p className="cookie-consent__text">
          We use cookies to keep the site working and to understand how it's
          used. You can accept all or stick to essentials.{" "}
          <a href="/cookies">Cookie policy</a>.
        </p>
        <div className="cookie-consent__actions">
          <button
            type="button"
            className="cookie-consent__btn cookie-consent__btn--secondary"
            onClick={() => accept("essential")}
          >
            Essential only
          </button>
          <button
            type="button"
            className="cookie-consent__btn cookie-consent__btn--primary"
            onClick={() => accept("all")}
          >
            Accept all
          </button>
        </div>
      </div>
    </div>
  );
}
