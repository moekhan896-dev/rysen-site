export interface FactCardProps {
  title: string;
  qualifier?: string;
  description: string;
  number: string;
  unit: string;
}

/**
 * Fact card. Transparent background, hairline rules only.
 * Left: title with optional italic qualifier. Middle: short
 * description. Right: large signal number with italic unit.
 * Replaces the "monospace label + serif title + body + metric" AI
 * template anatomy.
 */
export function FactCard({
  title,
  qualifier,
  description,
  number,
  unit,
}: FactCardProps) {
  return (
    <article className="fact-card">
      <div>
        <h4 className="fact-card__title">
          {title}
          {qualifier && (
            <span className="fact-card__qualifier">{` ${qualifier}`}</span>
          )}
        </h4>
        <p className="fact-card__description">{description}</p>
      </div>
      <div className="fact-card__signal">
        <span className="fact-card__number">{number}</span>
        <span className="fact-card__unit">{unit}</span>
      </div>
    </article>
  );
}
