"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";

const CARDS = [
  {
    icon: Mail,
    title: "Email us",
    primary: "marketing@rysengrowth.com",
    href: "mailto:marketing@rysengrowth.com",
    detail: "Best for: detailed inquiries.",
  },
  {
    icon: Phone,
    title: "Call us",
    primary: "(248) 406-6223",
    href: "tel:+12484066223",
    detail: "Mon-Fri · 9AM–6PM ET.",
  },
  {
    icon: MapPin,
    title: "Visit our HQ",
    primary: "1 Campus Martius, Suite 200",
    secondary: "Detroit, MI 48226",
    detail: "By appointment only.",
  },
] as const;

export function ContactCards() {
  return (
    <div className="contact-cards">
      {CARDS.map((card, i) => {
        const Icon = card.icon;
        const inner = (
          <>
            <div className="contact-card-icon">
              <Icon size={18} strokeWidth={1.8} aria-hidden="true" />
            </div>
            <div className="contact-card-title">{card.title}</div>
            <div className="contact-card-primary">{card.primary}</div>
            {"secondary" in card && card.secondary && (
              <div className="contact-card-secondary">{card.secondary}</div>
            )}
            <div className="contact-card-detail">{card.detail}</div>
          </>
        );

        return (
          <motion.div
            key={card.title}
            className="contact-card"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.4, delay: 0.1 * i }}
          >
            {"href" in card && card.href ? (
              <a href={card.href} className="contact-card-link">
                {inner}
              </a>
            ) : (
              inner
            )}
          </motion.div>
        );
      })}
    </div>
  );
}
