import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md";

type CommonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  showArrow?: boolean;
  className?: string;
};

type ButtonAsButton = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof CommonProps | "href"> & {
    href?: undefined;
  };

type ButtonAsLink = CommonProps & {
  href: string;
  target?: string;
  rel?: string;
};

type ButtonProps = ButtonAsButton | ButtonAsLink;

const baseClasses =
  "group inline-flex items-center justify-center gap-2 font-medium tracking-snug transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-text text-white rounded-full shadow-md hover:bg-accent hover:text-text hover:-translate-y-px hover:shadow-lg",
  secondary:
    "text-accent hover:opacity-70 rounded-full",
  ghost:
    "text-text hover:opacity-60 rounded-full",
};

const sizeClasses: Record<ButtonSize, Record<ButtonVariant, string>> = {
  sm: {
    primary: "px-4 py-2 text-[13px]",
    secondary: "text-[13px]",
    ghost: "text-[13px]",
  },
  md: {
    primary: "px-[22px] py-[13px] text-[14.5px]",
    secondary: "text-[15px]",
    ghost: "text-[15px]",
  },
};

export function Button(props: ButtonProps) {
  const {
    children,
    variant = "primary",
    size = "md",
    showArrow = false,
    className,
    ...rest
  } = props;

  const classes = cn(
    baseClasses,
    variantClasses[variant],
    sizeClasses[size][variant],
    className
  );

  const content = (
    <>
      {children}
      {showArrow && (
        <ArrowRight
          className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5"
          aria-hidden="true"
        />
      )}
    </>
  );

  if ("href" in props && props.href) {
    const { target, rel } = props;
    return (
      <Link href={props.href} target={target} rel={rel} className={classes}>
        {content}
      </Link>
    );
  }

  const buttonRest = rest as ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button {...buttonRest} className={classes}>
      {content}
    </button>
  );
}
