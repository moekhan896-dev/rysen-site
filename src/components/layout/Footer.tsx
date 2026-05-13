export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <div className="footer-grid">
          {/* Column 1 — wordmark + tagline + Detroit address */}
          <div className="footer-col footer-col-brand">
            <a href="/" className="footer-wordmark">
              <span className="footer-wordmark-icon" aria-hidden="true"></span>
              Rysen
            </a>
            <p className="footer-tagline">
              AI Search Agency · Legal &amp; Medical
            </p>

            <address className="footer-address">
              <span className="footer-address-line">Rysen Growth</span>
              <span className="footer-address-line">1 Campus Martius, Suite 200</span>
              <span className="footer-address-line">Detroit, MI 48226</span>
              <span className="footer-address-line">(248) 406-6223</span>
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
              <li>
                <a href="/services/ai-search-seo">AI Search SEO</a>
              </li>
              <li>
                <a href="/services/seo">Traditional SEO</a>
              </li>
              <li>
                <a href="/services/content-authority">Content &amp; Authority</a>
              </li>
              <li>
                <a href="/audit">Free Audit</a>
              </li>
            </ul>
          </div>

          {/* Column 3 — Company */}
          <div className="footer-col">
            <h4 className="footer-heading">Company</h4>
            <ul className="footer-links">
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
              <li>
                <a href="/locations">Locations</a>
              </li>
              <li>
                <a href="/blog">Blog</a>
              </li>
            </ul>
          </div>

          {/* Column 4 — Get in touch */}
          <div className="footer-col">
            <h4 className="footer-heading">Get in touch</h4>
            <ul className="footer-links">
              <li>
                <a href="mailto:hello@rysengrowth.com">hello@rysengrowth.com</a>
              </li>
              <li>
                <a href="tel:+12484066223">(248) 406-6223</a>
              </li>
            </ul>
            <a href="#" className="footer-cta">
              Book a call <span className="arrow">→</span>
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copyright">
            © 2026 Rysen Growth · Detroit · All rights reserved
          </div>
          <div className="footer-legal-links">
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms &amp; Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/**
 * Stylized circular Detroit stamp/seal — vector-only, no photo.
 * Sits next to the Est. mark in the brand column.
 */
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
        <path
          id="detroit-stamp-arc-top"
          d="M 6,28 a 22,22 0 0 1 44,0"
          fill="none"
        />
        <path
          id="detroit-stamp-arc-bot"
          d="M 6,28 a 22,22 0 0 0 44,0"
          fill="none"
        />
      </defs>
      <circle
        cx="28"
        cy="28"
        r="25"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.5"
      />
      <circle
        cx="28"
        cy="28"
        r="21"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.5"
      />
      <text
        fontSize="5"
        fontFamily="JetBrains Mono, monospace"
        letterSpacing="1.5"
        fill="currentColor"
      >
        <textPath href="#detroit-stamp-arc-top" startOffset="50%" textAnchor="middle">
          DETROIT · MI
        </textPath>
      </text>
      <text
        fontSize="5"
        fontFamily="JetBrains Mono, monospace"
        letterSpacing="1.5"
        fill="currentColor"
      >
        <textPath href="#detroit-stamp-arc-bot" startOffset="50%" textAnchor="middle">
          EST. 2019
        </textPath>
      </text>
      {/* center mark */}
      <text
        x="28"
        y="32"
        fontSize="14"
        fontFamily="Geist, sans-serif"
        fontWeight="500"
        fill="currentColor"
        textAnchor="middle"
      >
        R
      </text>
    </svg>
  );
}
