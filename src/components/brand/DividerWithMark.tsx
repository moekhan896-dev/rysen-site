import type { FC } from "react";
import { SignalTriangle } from "./SignalTriangle";

interface DividerWithMarkProps {
  context?: "paper" | "ink";
}

/**
 * A hairline rule with a SignalTriangle at the center. Used as a section
 * break between consecutive paper sections to create visual rhythm.
 */
export const DividerWithMark: FC<DividerWithMarkProps> = ({
  context = "paper",
}) => {
  return (
    <div
      className={`divider-with-mark divider-with-mark--${context}`}
      role="presentation"
    >
      <SignalTriangle size={12} decorative />
    </div>
  );
};
