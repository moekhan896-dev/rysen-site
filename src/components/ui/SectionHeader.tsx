import { cn } from "@/lib/utils";
import { Eyebrow } from "./Eyebrow";
import type { ReactNode } from "react";

type Alignment = "left" | "center";
type HeadingLevel = "h1" | "h2" | "h3";

interface SectionHeaderProps {
  eyebrow?: ReactNode;
  eyebrowVariant?: "default" | "pill";
  eyebrowDot?: boolean;
  heading: ReactNode;
  /** Word(s) inside the heading rendered in italic + accent color. Matches first occurrence. */
  italicWord?: string;
  subhead?: ReactNode;
  align?: Alignment;
  as?: HeadingLevel;
  className?: string;
}

const headingSizeMap: Record<HeadingLevel, string> = {
  h1: "text-display",
  h2: "text-h2",
  h3: "text-h3",
};

function renderHeadingWithItalic(heading: ReactNode, italicWord?: string): ReactNode {
  if (!italicWord || typeof heading !== "string") return heading;

  const idx = heading.toLowerCase().indexOf(italicWord.toLowerCase());
  if (idx === -1) return heading;

  const before = heading.slice(0, idx);
  const match = heading.slice(idx, idx + italicWord.length);
  const after = heading.slice(idx + italicWord.length);

  return (
    <>
      {before}
      <span className="italic text-accent font-medium">{match}</span>
      {after}
    </>
  );
}

export function SectionHeader({
  eyebrow,
  eyebrowVariant = "default",
  eyebrowDot = false,
  heading,
  italicWord,
  subhead,
  align = "left",
  as = "h2",
  className,
}: SectionHeaderProps) {
  const Tag = as;
  const alignClass = align === "center" ? "text-center items-center mx-auto" : "text-left items-start";

  return (
    <div className={cn("flex flex-col", alignClass, className)}>
      {eyebrow && (
        <div className="mb-7">
          <Eyebrow variant={eyebrowVariant} withDot={eyebrowDot}>
            {eyebrow}
          </Eyebrow>
        </div>
      )}
      <Tag
        className={cn(
          headingSizeMap[as],
          "font-medium text-text",
          align === "center" ? "max-w-3xl" : ""
        )}
      >
        {renderHeadingWithItalic(heading, italicWord)}
      </Tag>
      {subhead && (
        <p
          className={cn(
            "mt-7 text-lead text-text-muted font-normal",
            align === "center" ? "max-w-xl" : "max-w-[560px]"
          )}
        >
          {subhead}
        </p>
      )}
    </div>
  );
}
