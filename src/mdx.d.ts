declare module "*.mdx" {
  import type { ComponentType } from "react";
  import type { ArticleFrontmatter } from "@/lib/articles";

  export const frontmatter: ArticleFrontmatter;
  const MDXComponent: ComponentType;
  export default MDXComponent;
}
