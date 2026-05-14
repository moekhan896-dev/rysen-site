import Link from "next/link";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <div className="footer-grid">
          {/* Column 1 — wordmark + tagline + Detroit address */}
          <div className="footer-col footer-col-brand">
            <Link href="/" className="footer-wordmark">
              <span className="footer-wordmark-icon" aria-hidden="true"></span>
              Rysen
            </Link>
            <p className="footer-tagline">
              Data-driven marketing · Legal & Medical
            </p>

            <address className="footer-address">
              <span className="footer-address-line">Rysen Growth</span>
              <span className="footer-address-line">1 Campus Martius, Suite 200</span>
              <span className="footer-address-line">Detroit, MI 48226</span>
              <span className="footer-address-line">
                <a href="tel:+12484066223">(248) 406-6223</a>
              </span>
              <span className="footer-address-line">
                <a href="mailto:marketing@rysengrowth.com">marketing@rysengrowth.com</a>
              </span>
            </address>

            <div className="footer-est-row">
              <DetroitStamp />
              <span className="footer-est-mark">
                Est. 2019 · Independent · Founder-led
              </span>
            </div>
          </div>

          {/* Column 2 — Services */}
          <div className="footer-col">
            <h4 className="footer-heading">Services</h4>
            <ul className="footer-links">
              <li><Link href="/services/ai-search">AI Search</Link></li>
              <li><Link href="/services/local-seo">Local SEO</Link></li>
              <li><Link href="/services/content">Content & Reputation</Link></li>
              <li><Link href="/services">All Services</Link></li>
            </ul>
          </div>

          {/* Column 3 — Company */}
          <div className="footer-col">
            <h4 className="footer-heading">Company</h4>
            <ul className="footer-links">
              <li><Link href="/about">About</Link></li>
              <li><Link href="/case-studies">Work</Link></li>
              <li><Link href="/#team">Team</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <li><Link href="/audit">Free Audit</Link></li>
            </ul>
          </div>

          {/* Column 4 — Legal */}
          <div className="footer-col">
            <h4 className="footer-heading">Legal</h4>
            <ul className="footer-links">
              <li><Link href="/privacy">Privacy Policy</Link></li>
              <li><Link href="/terms">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-wedge-line">
          Detroit, MI · 100% US-based team · Specialized in legal and medical · Est. 2019
        </div>

        <div className="footer-bottom">
          <div className="footer-copyright">
            © 2026 Rysen Growth · Detroit · All rights reserved
          </div>
          <div className="footer-legal-links">
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function DetroitStamp() {
  return (
    <svg
      className="detroit-stamp"
      width="56"
      height="56"
      viewBox="0 0 56 56"
      aria-hidden="true"
    >
      <defs>
        <path id="detroit-stamp-arc-top" d="M 6,28 a 22,22 0 0 1 44,0" fill="none" />
        <path id="detroit-stamp-arc-bot" d="M 6,28 a 22,22 0 0 0 44,0" fill="none" />
      </defs>
      <circle cx="28" cy="28" r="25" fill="none" stroke="currentColor" strokeWidth="0.5" />
      <circle cx="28" cy="28" r="21" fill="none" stroke="currentColor" strokeWidth="0.5" />
      <text fontSize="5" fontFamily="JetBrains Mono, monospace" letterSpacing="1.5" fill="currentColor">
        <textPath href="#detroit-stamp-arc-top" startOffset="50%" textAnchor="middle">
          DETROIT · MI
        </textPath>
      </text>
      <text fontSize="5" fontFamily="JetBrains Mono, monospace" letterSpacing="1.5" fill="currentColor">
        <textPath href="#detroit-stamp-arc-bot" startOffset="50%" textAnchor="middle">
          EST. 2019
        </textPath>
      </text>
      <text x="28" y="32" fontSize="14" fontFamily="Geist, sans-serif" fontWeight="500" fill="currentColor" textAnchor="middle">
        R
      </text>
    </svg>
  );
}
