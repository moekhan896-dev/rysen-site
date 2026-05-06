import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type EyebrowVariant = "default" | "pill";

interface EyebrowProps {
  children: ReactNode;
  variant?: EyebrowVariant;
  withDot?: boolean;
  dotColor?: string;
  className?: string;
}

export function Eyebrow({
  children,
  variant = "default",
  withDot = false,
  dotColor = "var(--success)",
  className,
}: EyebrowProps) {
  if (variant === "pill") {
    return (
      <div
        className={cn(
          "inline-flex items-center gap-2.5",
          "px-3.5 py-1.5 rounded-full",
          "bg-white/85 backdrop-blur-xl backdrop-saturate-150",
          "border-[0.5px] border-black/[0.04]",
          "shadow-[0_1px_0_rgba(255,255,255,0.9)_inset,0_1px_2px_rgba(0,0,0,0.02),0_4px_12px_rgba(0,0,0,0.03)]",
          "text-[12.5px] font-medium text-text tracking-[-0.05px]",
          className
        )}
      >
        {withDot && (
          <span
            className="w-[7px] h-[7px] rounded-full animate-pulse-dot"
            style={{
              backgroundColor: dotColor,
              boxShadow: `0 0 0 0 ${dotColor}`,
            }}
            aria-hidden="true"
          />
        )}
        {children}
      </div>
    );
  }

  return (
    <span
      className={cn(
        "inline-flex items-center gap-3",
        "text-[12px] font-medium uppercase text-text-muted",
        "tracking-[1.5px]",
        className
      )}
    >
      {withDot && (
        <span
          className="inline-block w-1.5 h-1.5 rounded-full"
          style={{ backgroundColor: dotColor }}
          aria-hidden="true"
        />
      )}
      {children}
    </span>
  );
}
