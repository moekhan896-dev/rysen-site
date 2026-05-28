"use client";

// Session 53 — TrackedCard.
//
// A Link wrapper that fires `work_grid_click` via the consent-gated
// track() helper before navigating. Used by /work index page cards
// so we can keep the page server-rendered while still recording
// clicks on individual case-study tiles.

import Link from "next/link";
import { track } from "@/lib/analytics";
import type { ReactNode } from "react";

type Props = {
  href: string;
  slug: string;
  className?: string;
  children: ReactNode;
  ariaLabel?: string;
};

export function TrackedCard({
  href,
  slug,
  className,
  children,
  ariaLabel,
}: Props) {
  return (
    <Link
      href={href}
      className={className}
      aria-label={ariaLabel}
      onClick={() => track("work_grid_click", { slug })}
    >
      {children}
    </Link>
  );
}
