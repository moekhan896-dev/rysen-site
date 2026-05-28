// Session 52 — Breadcrumbs.
//
// Renders the visible breadcrumb trail under the page header AND
// emits a Schema.org BreadcrumbList JSON-LD block in the same tree.
// Pass the trail once, get both.
//
// The last crumb is the current page and renders as plain text with
// aria-current="page". Earlier crumbs render as anchors.

import Link from "next/link";

type Crumb = {
  name: string;
  href?: string;
};

type Props = {
  trail: ReadonlyArray<Crumb>;
};

const SITE_URL = "https://rysengrowth.com";

export function Breadcrumbs({ trail }: Props) {
  if (!trail.length) return null;

  const jsonld = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((c, i) => {
      const item: Record<string, unknown> = {
        "@type": "ListItem",
        position: i + 1,
        name: c.name,
      };
      if (c.href && i < trail.length - 1) {
        item.item = `${SITE_URL}${c.href}`;
      }
      return item;
    }),
  };

  return (
    <>
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <ol className="breadcrumbs__list">
          {trail.map((c, i) => {
            const isLast = i === trail.length - 1;
            return (
              <li key={`${c.name}-${i}`} className="breadcrumbs__item">
                {!isLast && c.href ? (
                  <Link href={c.href} className="breadcrumbs__link">
                    {c.name}
                  </Link>
                ) : (
                  <span aria-current="page" className="breadcrumbs__current">
                    {c.name}
                  </span>
                )}
                {!isLast && (
                  <span aria-hidden="true" className="breadcrumbs__sep">
                    /
                  </span>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonld) }}
      />
    </>
  );
}
