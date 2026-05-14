import type { ReactNode } from "react";

interface PageSectionProps {
  readonly eyebrow?: string;
  readonly title?: ReactNode;
  readonly subtitle?: ReactNode;
  readonly titleAlignment?: "left" | "center";
  readonly maxWidth?: string;
  readonly background?: "light" | "dark" | "tint";
  readonly id?: string;
  readonly className?: string;
  readonly children: ReactNode;
}

export function PageSection({
  eyebrow,
  title,
  subtitle,
  titleAlignment = "center",
  maxWidth = "1200px",
  background = "light",
  id,
  className,
  children,
}: PageSectionProps) {
  return (
    <section
      id={id}
      className={`page-section page-section-bg-${background}${
        className ? ` ${className}` : ""
      }`}
    >
      <div
        className="page-section-inner"
        style={{ maxWidth }}
      >
        {(eyebrow || title || subtitle) && (
          <div
            className={`page-section-header${
              titleAlignment === "center"
                ? " page-section-header-center"
                : " page-section-header-left"
            }`}
          >
            {eyebrow && (
              <div className="page-section-eyebrow">{eyebrow}</div>
            )}
            {title && <h2 className="page-section-title">{title}</h2>}
            {subtitle && <p className="page-section-subtitle">{subtitle}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
