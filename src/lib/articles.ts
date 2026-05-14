import type { ComponentType } from "react";

export interface ArticleFrontmatter {
  readonly title: string;
  readonly slug: string;
  readonly description: string;
  readonly category: string;
  readonly publishedDate: string;
  readonly modifiedDate?: string;
  readonly readTime: string;
  readonly author: string;
  readonly authorRole: string;
  readonly featured?: boolean;
  readonly keywords: ReadonlyArray<string>;
  readonly relatedSlugs?: ReadonlyArray<string>;
}

export interface Article {
  readonly frontmatter: ArticleFrontmatter;
  readonly Body: ComponentType;
}

import AiSearchBody, { frontmatter as aiFm } from "@content/articles/ai-search-legal-marketing-2027.mdx";
import DeathBody, { frontmatter as deathFm } from "@content/articles/death-of-impressions-marketing-report.mdx";
import LocalBody, { frontmatter as localFm } from "@content/articles/local-seo-law-firms-year-two.mdx";
import PlaybookBody, { frontmatter as playbookFm } from "@content/articles/first-position-playbook.mdx";

const REGISTRY: ReadonlyArray<Article> = [
  { frontmatter: aiFm, Body: AiSearchBody },
  { frontmatter: deathFm, Body: DeathBody },
  { frontmatter: localFm, Body: LocalBody },
  { frontmatter: playbookFm, Body: PlaybookBody },
];

function byDateDesc(a: Article, b: Article): number {
  return b.frontmatter.publishedDate.localeCompare(a.frontmatter.publishedDate);
}

export function getAllArticles(): ReadonlyArray<Article> {
  return [...REGISTRY].sort(byDateDesc);
}

export function getArticleBySlug(slug: string): Article | undefined {
  return REGISTRY.find((a) => a.frontmatter.slug === slug);
}

export function getRelatedArticles(slug: string, count = 2): ReadonlyArray<Article> {
  const current = getArticleBySlug(slug);
  if (!current) return [];
  const related = current.frontmatter.relatedSlugs ?? [];
  const explicit = related
    .map((s) => getArticleBySlug(s))
    .filter((a): a is Article => Boolean(a));
  if (explicit.length >= count) return explicit.slice(0, count);
  // Fill remainder with most-recent articles from a different category, excluding self
  const filler = getAllArticles().filter(
    (a) =>
      a.frontmatter.slug !== slug &&
      !explicit.some((e) => e.frontmatter.slug === a.frontmatter.slug)
  );
  return [...explicit, ...filler].slice(0, count);
}

export function formatPublishedDate(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
