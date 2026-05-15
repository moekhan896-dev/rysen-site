import Link from "next/link";
import { SignalTriangle } from "@/components/brand/SignalTriangle";

interface BridgeLink {
  category: string;
  title: string;
  href: string;
}

interface InterlinkBridgeProps {
  variant?: "paper" | "ink";
  primary?: BridgeLink;
  secondary?: BridgeLink;
  tertiary?: BridgeLink;
}

export function InterlinkBridge({
  variant = "paper",
  primary,
  secondary,
  tertiary,
}: InterlinkBridgeProps) {
  const links = [primary, secondary, tertiary].filter(
    (l): l is BridgeLink => l !== undefined
  );

  return (
    <aside
      className={`interlink-bridge interlink-bridge--${variant}`}
      data-context={variant}
    >
      <div className="interlink-bridge__inner">
        <div className="interlink-bridge__label">
          <SignalTriangle size={10} decorative />
          <span>Related reading</span>
        </div>

        <div className="interlink-bridge__links">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="interlink-bridge__link"
            >
              <span className="interlink-bridge__category">
                {link.category}
              </span>
              <span className="interlink-bridge__title">{link.title}</span>
              <SignalTriangle
                size={10}
                decorative
                className="interlink-bridge__arrow"
              />
            </Link>
          ))}
        </div>
      </div>
    </aside>
  );
}
