import Link from "next/link";
import { SignalTriangle } from "@/components/brand/SignalTriangle";

export interface DataRowProps {
  number: string;
  title: string;
  description: string;
  href?: string;
  context?: "paper" | "ink";
}

/**
 * Data row, editorial table-of-contents pattern. NO background, NO
 * border. Just a hairline rule below, large Fraunces number on the
 * left, content in the middle, rotating SignalTriangle on the right.
 * Replaces the generic feature-card-grid pattern.
 */
export function DataRow({
  number,
  title,
  description,
  href,
  context = "paper",
}: DataRowProps) {
  const inner = (
    <>
      <div className="data-row__number">{number}</div>
      <div className="data-row__content">
        <h3 className="data-row__title">{title}</h3>
        <p className="data-row__description">{description}</p>
      </div>
      <SignalTriangle size={14} decorative className="data-row__mark" />
    </>
  );

  const className = `data-row data-row--${context}`;

  return href ? (
    <Link href={href} className={`${className} data-row--linked`}>
      {inner}
    </Link>
  ) : (
    <article className={className}>{inner}</article>
  );
}
