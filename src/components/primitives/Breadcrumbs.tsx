import Link from "next/link";

interface Crumb {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  trail: ReadonlyArray<Crumb>;
}

export function Breadcrumbs({ trail }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="breadcrumbs">
      <ol className="breadcrumbs-list">
        {trail.map((c, i) => {
          const isLast = i === trail.length - 1;
          return (
            <li key={`${c.label}-${i}`} className="breadcrumbs-item">
              {c.href && !isLast ? (
                <Link href={c.href} className="breadcrumbs-link">
                  {c.label}
                </Link>
              ) : (
                <span className="breadcrumbs-current" aria-current="page">
                  {c.label}
                </span>
              )}
              {!isLast && (
                <span className="breadcrumbs-sep" aria-hidden="true">
                  ›
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
