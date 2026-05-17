import Link from "next/link";
import { SignalTriangle } from "@/components/brand/SignalTriangle";

const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="footer-confidential">
      <div className="footer-confidential-inner">
        <div className="footer-confidential__mark">
          <SignalTriangle size={16} decorative />
          <span className="footer-confidential__wordmark">Rysen</span>
        </div>
        <p className="footer-confidential__location">
          Detroit, Michigan. Founded 2019.
        </p>
        <div className="footer-confidential__rule" aria-hidden="true" />
        <div className="footer-confidential__legal">
          <span>© {CURRENT_YEAR} Rysen Growth, LLC</span>
          <Link href="/privacy" className="footer-confidential__legal-link">
            Privacy
          </Link>
          <Link href="/terms" className="footer-confidential__legal-link">
            Terms
          </Link>
        </div>
      </div>
    </footer>
  );
}
