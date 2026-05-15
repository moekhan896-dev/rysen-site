import Link from "next/link";
import { SignalTriangle } from "@/components/brand/SignalTriangle";

interface ContinueReadingProps {
  href: string;
  label: string;
  context?: "paper" | "ink";
}

export function ContinueReading({
  href,
  label,
  context = "paper",
}: ContinueReadingProps) {
  return (
    <Link
      href={href}
      className={`continue-reading continue-reading--${context}`}
    >
      <span>{label}</span>
      <SignalTriangle size={10} className="continue-arrow" decorative />
    </Link>
  );
}
