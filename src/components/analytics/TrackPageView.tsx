"use client";

// Session 53 — TrackPageView.
//
// A one-shot client component that fires a Vercel Analytics event on
// mount. Used by static / server-rendered pages to record page-view
// style conversions without converting the whole page to a client
// component.
//
// SSR-safe (useEffect doesn't run on the server). Consent-gated via
// the existing track() wrapper from src/lib/analytics.ts — if the
// user has not granted full cookie consent, this is a no-op.

import { useEffect } from "react";
import { track, type ConversionEvent } from "@/lib/analytics";

type Props = {
  event: ConversionEvent;
  props?: Record<string, string | number | boolean | null>;
};

export function TrackPageView({ event, props }: Props) {
  useEffect(() => {
    track(event, props);
    // We intentionally fire once on mount; if props change we DO want
    // to fire again so a parent that swaps slugs gets a new event.
  }, [event, JSON.stringify(props)]);
  return null;
}
