import Link from "next/link";
import { SignalTriangle } from "@/components/brand/SignalTriangle";

interface SidebarItem {
  label: string;
  value: string;
}

export interface FeatureCardProps {
  kicker: string;
  title: string;
  /**
   * Lead paragraph. Use <em> tags inline to flag editorial emphasis
   * (renders in Fraunces italic 19px) and <strong> wrappers around
   * metric numbers (they pick up the inline-metric serif treatment).
   */
  lead: React.ReactNode;
  sidebar?: ReadonlyArray<SidebarItem>;
  href?: string;
  linkLabel?: string;
  context?: "paper" | "ink";
}

/**
 * Magazine-spread feature card. Asymmetric layout, large Fraunces title,
 * metrics integrated INTO the description (via <em> + <strong> tags in
 * the lead prop, not stacked at the bottom), optional 200px sidebar with
 * pull-out details, single 2px yellow top accent. No monospace, no
 * stacked metric row, no shadow box.
 */
export function FeatureCard({
  kicker,
  title,
  lead,
  sidebar,
  href,
  linkLabel,
  context = "paper",
}: FeatureCardProps) {
  const body = (
    <>
      <div className="feature-card__kicker">{kicker}</div>
      <h3 className="feature-card__title">{title}</h3>
      <div className="feature-card__body">
        <div className="feature-card__lead">{lead}</div>
        {sidebar && sidebar.length > 0 && (
          <aside className="feature-card__sidebar" aria-label="At a glance">
            {sidebar.map((item, i) => (
              <div key={item.label} className="feature-card__sidebar-block">
                <div className="feature-card__sidebar-label">{item.label}</div>
                <div className="feature-card__sidebar-value">{item.value}</div>
                {i < sidebar.length - 1 && (
                  <hr
                    className="feature-card__sidebar-rule"
                    aria-hidden="true"
                  />
                )}
              </div>
            ))}
          </aside>
        )}
      </div>
      {href && linkLabel && (
        <span className="feature-card__link">
          <span>{linkLabel}</span>
          <SignalTriangle size={10} decorative />
        </span>
      )}
    </>
  );

  const cls = `feature-card feature-card--${context}`;
  return href ? (
    <Link href={href} className={`${cls} feature-card--linked`}>
      {body}
    </Link>
  ) : (
    <article className={cls}>{body}</article>
  );
}
