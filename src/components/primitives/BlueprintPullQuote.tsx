interface BlueprintPullQuoteProps {
  quote: string;
  attribution: string;
  context?: "paper" | "ink";
}

export function BlueprintPullQuote({
  quote,
  attribution,
  context = "paper",
}: BlueprintPullQuoteProps) {
  return (
    <blockquote className={`blueprint-pullquote blueprint-pullquote--${context}`}>
      <span className="blueprint-pullquote-mark" aria-hidden="true">
        &ldquo;
      </span>
      <p className="blueprint-pullquote-text">{quote}</p>
      <hr className="blueprint-pullquote-rule" aria-hidden="true" />
      <cite className="blueprint-pullquote-attribution">— {attribution}</cite>
    </blockquote>
  );
}
