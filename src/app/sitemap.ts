import type { MetadataRoute } from "next";
import { getAllArticles } from "@/lib/articles";

const SITE_URL = "https://rysengrowth.com";

const STATIC_ROUTES: ReadonlyArray<{ path: string; priority: number; changeFrequency: "monthly" | "weekly" | "yearly" }> = [
  { path: "/", priority: 1.0, changeFrequency: "weekly" },
  { path: "/about", priority: 0.8, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.7, changeFrequency: "monthly" },
  { path: "/audit", priority: 0.9, changeFrequency: "monthly" },
  { path: "/services", priority: 0.8, changeFrequency: "monthly" },
  { path: "/services/ai-search", priority: 0.7, changeFrequency: "monthly" },
  { path: "/services/local-seo", priority: 0.7, changeFrequency: "monthly" },
  { path: "/services/content", priority: 0.7, changeFrequency: "monthly" },
  { path: "/case-studies", priority: 0.8, changeFrequency: "monthly" },
  { path: "/case-studies/aws-law-firm", priority: 0.7, changeFrequency: "monthly" },
  { path: "/case-studies/tyler-family-law", priority: 0.7, changeFrequency: "monthly" },
  { path: "/case-studies/hartman-dermatology", priority: 0.7, changeFrequency: "monthly" },
  { path: "/case-studies/coleman-co", priority: 0.7, changeFrequency: "monthly" },
  { path: "/case-studies/ridge-dental", priority: 0.7, changeFrequency: "monthly" },
  { path: "/blog", priority: 0.8, changeFrequency: "weekly" },
  { path: "/privacy", priority: 0.3, changeFrequency: "yearly" },
  { path: "/terms", priority: 0.3, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const today = new Date();
  const staticEntries: MetadataRoute.Sitemap = STATIC_ROUTES.map((r) => ({
    url: `${SITE_URL}${r.path}`,
    lastModified: today,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));

  const blogEntries: MetadataRoute.Sitemap = getAllArticles().map((a) => ({
    url: `${SITE_URL}/blog/${a.frontmatter.slug}`,
    lastModified: new Date(a.frontmatter.modifiedDate ?? a.frontmatter.publishedDate),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticEntries, ...blogEntries];
}
