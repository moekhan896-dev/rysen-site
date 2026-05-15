import Link from "next/link";
import { SignalTriangle } from "@/components/brand/SignalTriangle";

interface CaseStudyNavProps {
  previous?: { href: string; label: string };
  next?: { href: string; label: string };
}

export function CaseStudyNav({ previous, next }: CaseStudyNavProps) {
  return (
    <nav aria-label="Case study navigation" className="case-study-nav">
      <div className="case-study-nav-inner">
        <div className="case-study-nav-slot case-study-nav-slot--prev">
          {previous && (
            <Link href={previous.href} className="case-study-nav-link">
              <span className="case-study-nav-eyebrow">← Previous</span>
              <span className="case-study-nav-label">{previous.label}</span>
            </Link>
          )}
        </div>
        <Link href="/case-studies" className="case-study-nav-center">
          <SignalTriangle size={12} decorative />
          <span>All case studies</span>
        </Link>
        <div className="case-study-nav-slot case-study-nav-slot--next">
          {next && (
            <Link href={next.href} className="case-study-nav-link is-next">
              <span className="case-study-nav-eyebrow">Next →</span>
              <span className="case-study-nav-label">{next.label}</span>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
