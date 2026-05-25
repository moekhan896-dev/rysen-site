// Session 45 — PhotoPlaceholder.
//
// Clearly-labeled photo slot for sections that need real
// photography dropped in later. Marked with a dashed border, a
// hatched background, a tiny green triangle, the shot type label,
// and the aspect ratio so the user knows exactly what to capture.
//
// Usage:
//   <PhotoPlaceholder label="OFFICE — WIDE EXTERIOR" ratio="16/9" />
//
// The `style` prop is forwarded so the placeholder can be positioned
// inside a magazine-style grid (e.g. grid-column: span 2).

import type { CSSProperties } from "react";
import { TriangleMark } from "./TriangleMark";

type PhotoPlaceholderProps = {
  label: string;
  ratio: string;
  className?: string;
  style?: CSSProperties;
};

export function PhotoPlaceholder({
  label,
  ratio,
  className,
  style,
}: PhotoPlaceholderProps) {
  return (
    <div
      className={`photo-ph ${className ?? ""}`}
      style={{ aspectRatio: ratio, ...style }}
      role="presentation"
      aria-label={`Photo placeholder: ${label}, ${ratio} aspect ratio`}
    >
      <div className="photo-ph__mark">
        <TriangleMark size={14} />
        <span className="photo-ph__label">{label}</span>
        <span className="photo-ph__ratio">{ratio}</span>
      </div>
    </div>
  );
}
