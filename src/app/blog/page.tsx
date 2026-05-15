import type { Metadata } from "next";
import { ArticleCard } from "@/components/blog/ArticleCard";
import { CTABanner } from "@/components/page-sections/CTABanner";
import { PageHero } from "@/components/page-sections/PageHero";
import { PageSection } from "@/components/page-sections/PageSection";
import { getAllArticles } from "@/lib/articles";
import { BlogSubscribe } from "./BlogSubscribe";

export const metadata: Metadata = {
  title:
    "Rysen Notes — Marketing Insights for Law Firms & Medical Practices",
  description:
    "Long-form writing from Art Khan on AI search, marketing attribution, local SEO, and the operational discipline of professional services marketing.",
  openGraph: {
    title: "Rysen Notes — Marketing Insights for Law Firms & Medical Practices",
    description:
      "Long-form writing from Art Khan on AI search, attribution, local SEO, and the operational discipline of professional services marketing.",
    type: "website",
  },
};

export default function BlogIndexPage() {
  const articles = getAllArticles();

  return (
    <main className="blog-index">
      <PageHero
        eyebrow="Rysen notes"
        title={
          <>
            <span className="accent-italic">Published thinking</span> on
            marketing for legal and medical practices.
          </>
        }
        subtitle="Long-form writing on AI search, attribution, local SEO, and the operational discipline of professional services marketing."
      />

      <PageSection eyebrow="Latest writing" title="Latest writing." titleAlignment="left" maxWidth="1100px">
        <div className="blog-grid">
          {articles.map((article, i) => (
            <ArticleCard
              key={article.frontmatter.slug}
              frontmatter={article.frontmatter}
              index={i}
            />
          ))}
        </div>
      </PageSection>

      <PageSection
        eyebrow="Stay posted"
        title="Get future notes in your inbox."
        subtitle="One email when a new article publishes. No marketing, no nurturing — just the writing."
        background="tint"
        maxWidth="640px"
      >
        <BlogSubscribe />
      </PageSection>

      <CTABanner
        title="Need an actual audit, not just published thinking?"
        subtitle="We’ll audit your firm’s visibility for free. 48-hour turnaround."
        primaryText="Get a free audit"
        primaryHref="/audit"
        secondaryText="See our work"
        secondaryHref="/case-studies"
      />
    </main>
  );
}
