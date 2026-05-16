import Link from "next/link";
import { SignalTriangle } from "@/components/brand/SignalTriangle";

export interface IndexCardProps {
  category: string;
  monogram?: string;
  name: string;
  title: string;
  location?: string;
  specialty?: string;
  href?: string;
  context?: "paper" | "ink";
}

/**
 * Index card, narrow vertical format inspired by library catalog
 * cards. Top 2px yellow rule, monospace category eyebrow, monogram
 * square (optional), Fraunces name + Inter title, bottom rule with
 * location + triangle mark. Used for team members, brands built,
 * brief contributor cards.
 */
export function IndexCard({
  category,
  monogram,
  name,
  title,
  location,
  specialty,
  href,
  context = "paper",
}: IndexCardProps) {
  const inner = (
    <>
      <div className="index-card__top-rule" aria-hidden="true" />
      <div className="index-card__category">{category}</div>
      {monogram && (
        <div className="index-card__monogram" aria-hidden="true">
          {monogram}
        </div>
      )}
      <h3 className="index-card__name">{name}</h3>
      <p className="index-card__title">{title}</p>
      {specialty && <p className="index-card__specialty">{specialty}</p>}
      <hr className="index-card__rule" aria-hidden="true" />
      <div className="index-card__footer">
        {location && <span className="index-card__location">{location}</span>}
        <SignalTriangle size={10} decorative className="index-card__mark" />
      </div>
    </>
  );

  const className = `index-card index-card--${context}`;

  return href ? (
    <Link href={href} className={`${className} index-card--linked`}>
      {inner}
    </Link>
  ) : (
    <article className={className}>{inner}</article>
  );
}
