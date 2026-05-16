import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleHero } from "@/components/blog/ArticleHero";
import { ArticleProse } from "@/components/blog/ArticleProse";
import { ArticleTOC } from "@/components/blog/ArticleTOC";
import { AuthorBio } from "@/components/blog/AuthorBio";
import { ReadingProgress } from "@/components/blog/ReadingProgress";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { ShareButtons } from "@/components/blog/ShareButtons";
import { CTABanner } from "@/components/page-sections/CTABanner";
import { buildArticleJsonLd } from "@/lib/article-schema";
import {
  formatPublishedDate,
  getAllArticles,
  getArticleBySlug,
} from "@/lib/articles";

const SITE_URL = "https://rysengrowth.com";

interface PageProps {
  readonly params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllArticles().map((a) => ({ slug: a.frontmatter.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};
  const fm = article.frontmatter;
  const url = `${SITE_URL}/blog/${fm.slug}`;
  const ogImage = `${SITE_URL}/blog/${fm.slug}/opengraph-image`;
  return {
    title: fm.title,
    description: fm.description,
    keywords: [...fm.keywords],
    alternates: { canonical: url },
    openGraph: {
      title: fm.title,
      description: fm.description,
      url,
      type: "article",
      publishedTime: fm.publishedDate,
      modifiedTime: fm.modifiedDate ?? fm.publishedDate,
      authors: [fm.author],
      images: [{ url: ogImage, width: 1200, height: 630, alt: fm.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: fm.title,
      description: fm.description,
      images: [ogImage],
    },
  };
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const fm = article.frontmatter;
  const Body = article.Body;
  const jsonLd = buildArticleJsonLd(fm);

  return (
    <main className="article-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <ReadingProgress />

      <ArticleHero frontmatter={fm} />

      <div className="article-layout">
        <aside className="article-rail article-rail-left">
          <ArticleTOC />
        </aside>

        <article className="article-body">
          <ArticleProse>
            <Body />
          </ArticleProse>

          <div className="article-footer-row">
            <div className="article-published-line">
              Published {formatPublishedDate(fm.publishedDate)}
              {fm.modifiedDate && fm.modifiedDate !== fm.publishedDate && (
                <> · Updated {formatPublishedDate(fm.modifiedDate)}</>
              )}
            </div>
            <ShareButtons title={fm.title} slug={fm.slug} />
          </div>

          <AuthorBio />
        </article>

        <aside className="article-rail article-rail-right">
          <div className="article-rail-sticky">
            <div className="article-rail-label">Share this note</div>
            <ShareButtons title={fm.title} slug={fm.slug} />
          </div>
        </aside>
      </div>

      <RelatedArticles slug={fm.slug} count={2} />

      <CTABanner
        title="Want this kind of thinking applied to your firm?"
        subtitle="Get a free audit of your firm’s visibility, same methodology, your numbers."
        primaryText="Get a free audit"
        primaryHref="/audit"
        secondaryText="See our work"
        secondaryHref="/case-studies"
      />
    </main>
  );
}
