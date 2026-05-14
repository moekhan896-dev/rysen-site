import type { ArticleFrontmatter } from "./articles";

const SITE_URL = "https://rysengrowth.com";

export function buildArticleJsonLd(fm: ArticleFrontmatter) {
  const articleUrl = `${SITE_URL}/blog/${fm.slug}`;
  const ogImage = `${SITE_URL}/blog/${fm.slug}/opengraph-image`;

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: fm.title,
    description: fm.description,
    image: ogImage,
    datePublished: fm.publishedDate,
    dateModified: fm.modifiedDate ?? fm.publishedDate,
    keywords: fm.keywords.join(", "),
    author: {
      "@type": "Person",
      name: fm.author,
      jobTitle: fm.authorRole,
      url: `${SITE_URL}/about`,
      sameAs: [`${SITE_URL}/about`],
    },
    publisher: {
      "@type": "Organization",
      name: "Rysen Growth",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/favicon.ico`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": articleUrl,
    },
  };
}
