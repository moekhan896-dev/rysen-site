import Link from "next/link";
import { SignalTriangle } from "@/components/brand/SignalTriangle";

interface Metric {
  value: string;
  label: string;
}

export interface TechDocCardProps {
  specId: string;
  category: string;
  title: string;
  description: string;
  metrics?: ReadonlyArray<Metric>;
  href?: string;
  linkLabel?: string;
  context?: "paper" | "ink";
}

/**
 * Technical document card — engineering-document aesthetic.
 * Top yellow accent bar, spec-id eyebrow, hairline rules, optional
 * 3-up metrics, "Read full document" footer link styled like an
 * engineering reference. Replaces the generic AI-template card
 * pattern.
 */
export function TechDocCard({
  specId,
  category,
  title,
  description,
  metrics,
  href,
  linkLabel,
  context = "paper",
}: TechDocCardProps) {
  const inner = (
    <>
      <div className="tech-doc-card__top-bar" />
      <div className="tech-doc-card__header">
        <span className="tech-doc-card__spec-id">{specId}</span>
        <SignalTriangle size={14} decorative className="tech-doc-card__mark" />
      </div>
      <hr className="tech-doc-card__rule" aria-hidden="true" />
      <div className="tech-doc-card__category">{category}</div>
      <h3 className="tech-doc-card__title">{title}</h3>
      <p className="tech-doc-card__description">{description}</p>
      {metrics && metrics.length > 0 && (
        <>
          <hr
            className="tech-doc-card__rule tech-doc-card__rule--lower"
            aria-hidden="true"
          />
          <div className="tech-doc-card__metrics">
            {metrics.map((m) => (
              <div key={m.label} className="tech-doc-card__metric">
                <span className="tech-doc-card__metric-value">{m.value}</span>
                <span className="tech-doc-card__metric-label">{m.label}</span>
              </div>
            ))}
          </div>
        </>
      )}
      {href && linkLabel && (
        <span className="tech-doc-card__link">
          <span>{linkLabel}</span>
          <SignalTriangle size={10} decorative />
        </span>
      )}
    </>
  );

  const className = `tech-doc-card tech-doc-card--${context}`;

  return href ? (
    <Link href={href} className={`${className} tech-doc-card--linked`}>
      {inner}
    </Link>
  ) : (
    <article className={className}>{inner}</article>
  );
}
