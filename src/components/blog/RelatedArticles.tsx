import { ArticleCard } from "./ArticleCard";
import { getRelatedArticles } from "@/lib/articles";

export function RelatedArticles({ slug, count = 2 }: { slug: string; count?: number }) {
  const related = getRelatedArticles(slug, count);
  if (related.length === 0) return null;

  return (
    <section className="related-articles">
      <div className="related-articles-inner">
        <div className="related-articles-eyebrow">Continue reading</div>
        <h2 className="related-articles-h2">Related notes.</h2>
        <div className="related-articles-grid">
          {related.map((a, i) => (
            <ArticleCard
              key={a.frontmatter.slug}
              frontmatter={a.frontmatter}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
