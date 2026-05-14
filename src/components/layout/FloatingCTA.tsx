"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function FloatingCTA() {
  const pathname = usePathname();
  // Hide on the audit page itself (the whole page IS the conversion target)
  if (pathname === "/audit") return null;

  return (
    <Link
      href="/audit"
      className="floating-cta"
      aria-label="Book audit"
    >
      Book audit
      <span className="floating-cta-arrow">→</span>
    </Link>
  );
}
