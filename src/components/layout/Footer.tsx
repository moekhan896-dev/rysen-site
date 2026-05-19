import Link from "next/link";
import { RysenLogo } from "@/components/brand/RysenLogo";

const SITEMAP: ReadonlyArray<{
  head: string;
  items: ReadonlyArray<
    | { kind: "link"; label: string; href: string }
    | { kind: "tel"; label: string; href: string }
    | { kind: "mail"; label: string; href: string }
    | { kind: "text"; label: string }
  >;
}> = [
  {
    head: "Practice",
    items: [
      { kind: "link", label: "Methodology", href: "/methodology" },
      { kind: "link", label: "Services", href: "/services" },
      { kind: "link", label: "How we measure", href: "/how-we-measure" },
      { kind: "link", label: "How we work", href: "/how-we-work" },
      { kind: "link", label: "Case studies", href: "/case-studies" },
      { kind: "link", label: "Audit", href: "/audit" },
    ],
  },
  {
    head: "Verticals",
    items: [
      { kind: "link", label: "Legal", href: "/legal" },
      { kind: "link", label: "Medical", href: "/medical" },
    ],
  },
  {
    head: "Firm",
    items: [
      { kind: "link", label: "About", href: "/about" },
      { kind: "link", label: "Team", href: "/about" },
      { kind: "link", label: "Press", href: "/about" },
      { kind: "link", label: "Thought leadership", href: "/blog" },
    ],
  },
  {
    head: "Contact",
    items: [
      {
        kind: "mail",
        label: "marketing@rysengrowth.com",
        href: "mailto:marketing@rysengrowth.com",
      },
      { kind: "tel", label: "(248) 406-6223", href: "tel:+12484066223" },
      { kind: "text", label: "1 Campus Martius, Suite 200" },
      { kind: "text", label: "Detroit, MI 48226" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="rebrand-footer">
      <div className="footer-triangle-pattern" aria-hidden="true" />
      <div className="rebrand-footer-inner">
        <div className="rebrand-footer-top">
          <RysenLogo size="lg" />
        </div>

        <p className="rebrand-footer-tagline">
          A boutique agency for law firms and medical practices that intend to
          organically dominate their market.
        </p>

        <div className="rebrand-footer-divider" />

        <div className="rebrand-footer-sitemap">
          {SITEMAP.map((col) => (
            <div className="rebrand-footer-col" key={col.head}>
              <div className="rebrand-footer-col-head">{col.head}</div>
              {col.items.map((item) =>
                item.kind === "link" ? (
                  <Link key={item.label} href={item.href}>
                    {item.label}
                  </Link>
                ) : item.kind === "mail" || item.kind === "tel" ? (
                  <a key={item.label} href={item.href}>
                    {item.label}
                  </a>
                ) : (
                  <div key={item.label} className="rebrand-footer-col-line">
                    {item.label}
                  </div>
                )
              )}
            </div>
          ))}
        </div>

        <div className="rebrand-footer-divider-tight" />

        <div className="rebrand-footer-bottom">
          <span className="rebrand-footer-legal">
            Rysen Growth, LLC. Based in Detroit, Michigan.
            Founded 2019.
          </span>
          <span className="rebrand-footer-legal-links">
            <Link href="/privacy">Privacy</Link>
            <span aria-hidden="true">·</span>
            <Link href="/terms">Terms</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
