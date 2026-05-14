import type { ReactNode } from "react";

export function ArticleProse({ children }: { children: ReactNode }) {
  return <div className="article-prose">{children}</div>;
}
