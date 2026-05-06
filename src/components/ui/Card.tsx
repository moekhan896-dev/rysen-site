import { cn } from "@/lib/utils";
import type { ElementType, ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  as?: ElementType;
  className?: string;
}

export function Card({ children, as: Tag = "div", className }: CardProps) {
  return (
    <Tag
      className={cn(
        "bg-bg-card rounded-2xl",
        "border-[0.5px] border-line",
        "shadow-lg",
        className
      )}
    >
      {children}
    </Tag>
  );
}
