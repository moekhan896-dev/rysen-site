import Link from "next/link";
import { RysenLogo } from "@/components/brand/RysenLogo";

const SITEMAP = [
  { label: "Methodology", href: "/methodology" },
  { label: "Services", href: "/services" },
  { label: "Work", href: "/case-studies" },
  { label: "About", href: "/about" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
] as const;

const VERTICALS = [
  { label: "Legal", href: "/legal" },
  { label: "Medical", href: "/medical" },
  { label: "Brand-built", href: "/case-studies" },
] as const;

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__col site-footer__col--brand">
          <RysenLogo size="md" />
          <p className="site-footer__tagline">
            Marketing engineering for law firms and medical practices.
          </p>
        </div>

        <div className="site-footer__col">
          <h3 className="site-footer__col-head">Sitemap</h3>
          <ul>
            {SITEMAP.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="site-footer__col">
          <h3 className="site-footer__col-head">Verticals</h3>
          <ul>
            {VERTICALS.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="site-footer__col">
          <h3 className="site-footer__col-head">Contact</h3>
          <ul>
            <li>
              <a href="mailto:marketing@rysengrowth.com">marketing@rysengrowth.com</a>
            </li>
            <li>
              <a href="tel:+12484066223">(248) 406-6223</a>
            </li>
            <li>Detroit + Phoenix</li>
          </ul>
        </div>
      </div>

      <div className="site-footer__strip">
        <span>© 2026 Rysen Growth. All rights reserved.</span>
        <span className="site-footer__legal-links">
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
        </span>
      </div>
    </footer>
  );
}
