// Session 53 — unify on the Session 52 Breadcrumbs component.
//
// This primitives wrapper is the original visible-only breadcrumbs.
// As of Session 53 it delegates to @/components/ui/Breadcrumbs (which
// emits BOTH the visible UI AND BreadcrumbList JSON-LD), mapping the
// older { label, href } shape to the new { name, href } shape. Every
// page that uses PageHero with a breadcrumbs prop now gets JSON-LD
// coverage automatically.

import { Breadcrumbs as UnifiedBreadcrumbs } from "@/components/ui/Breadcrumbs";

interface Crumb {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  trail: ReadonlyArray<Crumb>;
}

export function Breadcrumbs({ trail }: BreadcrumbsProps) {
  const mapped = trail.map((c) => ({ name: c.label, href: c.href }));
  return <UnifiedBreadcrumbs trail={mapped} />;
}
