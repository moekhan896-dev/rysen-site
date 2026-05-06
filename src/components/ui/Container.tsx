import { cn } from "@/lib/utils";
import type { ElementType, ReactNode } from "react";

type ContainerSize = "default" | "wide";

interface ContainerProps {
  children: ReactNode;
  size?: ContainerSize;
  as?: ElementType;
  className?: string;
}

const sizeMap: Record<ContainerSize, string> = {
  default: "max-w-[1200px]",
  wide: "max-w-[1400px]",
};

export function Container({
  children,
  size = "default",
  as: Tag = "div",
  className,
}: ContainerProps) {
  return (
    <Tag
      className={cn(
        "w-full mx-auto px-5 md:px-8",
        sizeMap[size],
        className
      )}
    >
      {children}
    </Tag>
  );
}
