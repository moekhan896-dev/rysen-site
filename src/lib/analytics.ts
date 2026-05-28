// Session 52 — analytics wrapper.
//
// Thin layer over @vercel/analytics' track() that:
//   (1) is safe to call during SSR (no-ops on the server)
//   (2) gates explicit events on cookie consent. Vercel Analytics'
//       page-view tracking is privacy-friendly (no cookies, no PII)
//       and stays on regardless; this gate is for the four explicit
//       conversion events the audit committed to.
//
// The cookie banner (CookieConsent.tsx) writes one of two values:
//   - "all"        — full consent; events fire normally
//   - "essential"  — analytics-off; events are dropped silently
//
// Reading localStorage is wrapped in a try/catch because some
// browsers and embedded webviews throw on access.

import { track as vercelTrack } from "@vercel/analytics";

export type ConversionEvent =
  | "cta_click"
  | "case_study_view"
  | "work_grid_click"
  | "contact_form_submit";

type EventProps = Record<string, string | number | boolean | null>;

export const CONSENT_STORAGE_KEY = "rysen-cookie-consent";

export function hasFullConsent(): boolean {
  if (typeof window === "undefined") return false;
  try {
    return window.localStorage.getItem(CONSENT_STORAGE_KEY) === "all";
  } catch {
    return false;
  }
}

export function track(event: ConversionEvent, props?: EventProps): void {
  if (typeof window === "undefined") return;
  if (!hasFullConsent()) return;
  try {
    vercelTrack(event, props);
  } catch {
    // Never let analytics throw into product code.
  }
}
