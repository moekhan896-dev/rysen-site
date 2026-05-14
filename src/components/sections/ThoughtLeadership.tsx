import Link from "next/link";
import { ArticleCard } from "@/components/blog/ArticleCard";
import { getAllArticles } from "@/lib/articles";

export function ThoughtLeadership() {
  const articles = getAllArticles().slice(0, 4);

  return (
    <section className="thought-leadership">
      <div className="thought-leadership-inner">
        <div className="thought-leadership-header">
          <div className="section-2-eyebrow">PUBLISHED THINKING</div>
          <h2 className="thought-leadership-h2">
            Where we stand on{" "}
            <span className="accent-italic">what&rsquo;s changing.</span>
          </h2>
          <p className="thought-leadership-sub">
            Selected writing on AI search, attribution, and the future of
            professional services marketing.
          </p>
        </div>

        <div className="thought-leadership-grid">
          {articles.map((article, i) => (
            <ArticleCard
              key={article.frontmatter.slug}
              frontmatter={article.frontmatter}
              index={i}
            />
          ))}
        </div>

        <div className="thought-leadership-footer">
          <Link href="/blog" className="thought-leadership-link">
            View all notes <span className="arrow">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
