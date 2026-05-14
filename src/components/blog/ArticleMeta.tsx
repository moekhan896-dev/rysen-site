import type { ArticleFrontmatter } from "@/lib/articles";
import { formatPublishedDate } from "@/lib/articles";

export function ArticleMeta({ frontmatter }: { frontmatter: ArticleFrontmatter }) {
  return (
    <div className="article-meta">
      <span className="article-meta-mono">AK</span>
      <span className="article-meta-name">{frontmatter.author}</span>
      <span className="article-meta-sep" aria-hidden="true">·</span>
      <span className="article-meta-date">{formatPublishedDate(frontmatter.publishedDate)}</span>
      <span className="article-meta-sep" aria-hidden="true">·</span>
      <span className="article-meta-read">{frontmatter.readTime}</span>
    </div>
  );
}
