"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import { SignalTriangle } from "@/components/brand/SignalTriangle";

interface InlineDetailProps {
  children: ReactNode;
  detail: string;
}

/**
 * InlineDetail. Wraps a phrase in body copy with a dashed yellow
 * underline that triggers a hover popover with additional context.
 * No third-party tooltip lib, just React state and CSS.
 */
export function InlineDetail({ children, detail }: InlineDetailProps) {
  const [show, setShow] = useState(false);
  return (
    <span
      className="inline-detail"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      onFocus={() => setShow(true)}
      onBlur={() => setShow(false)}
    >
      <span className="inline-detail__trigger" tabIndex={0}>
        {children}
      </span>
      {show && (
        <span className="inline-detail__popover" role="tooltip">
          <SignalTriangle size={8} decorative />
          <span>{detail}</span>
        </span>
      )}
    </span>
  );
}
