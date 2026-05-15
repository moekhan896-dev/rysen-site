import Link from "next/link";
import { SignalTriangle } from "@/components/brand/SignalTriangle";

export interface RelatedLink {
  href: string;
  eyebrow: string;
  title: string;
  description: string;
}

interface RelatedContentProps {
  heading?: string;
  items: ReadonlyArray<RelatedLink>;
  context?: "paper" | "ink";
}

export function RelatedContent({
  heading = "Continue reading",
  items,
  context = "paper",
}: RelatedContentProps) {
  return (
    <aside className={`related-content related-content--${context}`}>
      <div className="related-content-inner">
        <div className="related-content-head">
          <SignalTriangle size={12} decorative />
          <span className="related-content-rule" aria-hidden="true" />
          <span className="related-content-heading">{heading}</span>
        </div>
        <div className="related-content-grid">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="related-content-card"
            >
              <span className="related-content-eyebrow">{item.eyebrow}</span>
              <h3 className="related-content-title">{item.title}</h3>
              <p className="related-content-desc">{item.description}</p>
              <span className="related-content-cta">
                Read more
                <SignalTriangle size={9} decorative />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </aside>
  );
}
