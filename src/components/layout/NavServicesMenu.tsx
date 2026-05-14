"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { FileText, MapPin, Sparkles } from "lucide-react";

interface MegaMenuProps {
  readonly open: boolean;
  readonly onClose: () => void;
}

const ITEM_PROPS = { size: 24, strokeWidth: 1.6 } as const;

const SERVICES = [
  {
    icon: <Sparkles {...ITEM_PROPS} aria-hidden="true" />,
    title: "AI Search",
    subtitle: "Be the answer when AI suggests",
    desc: "Optimize content, entity signals, and citations so ChatGPT, Perplexity, and Google AI Overviews recommend your firm by name.",
    href: "/services/ai-search",
  },
  {
    icon: <MapPin {...ITEM_PROPS} aria-hidden="true" />,
    title: "Local SEO",
    subtitle: "Own your metro. Period.",
    desc: "Hyperlocal SEO, GMB optimization, citation work, review velocity, and 3-pack dominance neighborhood by neighborhood.",
    href: "/services/local-seo",
  },
  {
    icon: <FileText {...ITEM_PROPS} aria-hidden="true" />,
    title: "Content & Reputation",
    subtitle: "Full-stack growth, not piecemeal services",
    desc: "Authority content, reputation management, newsletters, web design, and off-page SEO — run as one integrated program.",
    href: "/services/content",
  },
] as const;

export function NavServicesMenu({ open, onClose }: MegaMenuProps) {
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="nav-mega-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            aria-hidden="true"
          />
          <motion.div
            className="nav-mega"
            role="menu"
            aria-label="Services menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="nav-mega-inner">
              <div className="nav-mega-grid">
                {SERVICES.map((s, i) => (
                  <motion.div
                    key={s.href}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.08 * i, duration: 0.3 }}
                    className="nav-mega-card-wrap"
                  >
                    <Link
                      href={s.href}
                      className="nav-mega-card"
                      onClick={onClose}
                      role="menuitem"
                    >
                      <div className="nav-mega-card-icon">{s.icon}</div>
                      <div className="nav-mega-card-title">{s.title}</div>
                      <div className="nav-mega-card-subtitle">{s.subtitle}</div>
                      <p className="nav-mega-card-desc">{s.desc}</p>
                      <span className="nav-mega-card-link">
                        Learn more <span className="arrow">→</span>
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="nav-mega-divider" aria-hidden="true" />

              <div className="nav-mega-footer">
                <span className="nav-mega-footer-label">ALL SERVICES</span>
                <Link
                  href="/services"
                  className="nav-mega-footer-link"
                  onClick={onClose}
                  role="menuitem"
                >
                  Browse the full overview <span className="arrow">→</span>
                </Link>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
