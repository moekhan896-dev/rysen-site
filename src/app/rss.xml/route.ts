import { getAllArticles } from "@/lib/articles";

const SITE_URL = "https://rysengrowth.com";

function escapeXml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export const dynamic = "force-static";

export async function GET() {
  const articles = getAllArticles();
  const buildDate = new Date().toUTCString();

  const items = articles
    .map((a) => {
      const fm = a.frontmatter;
      const url = `${SITE_URL}/blog/${fm.slug}`;
      const pubDate = new Date(fm.publishedDate).toUTCString();
      return `
    <item>
      <title>${escapeXml(fm.title)}</title>
      <description>${escapeXml(fm.description)}</description>
      <link>${escapeXml(url)}</link>
      <guid isPermaLink="true">${escapeXml(url)}</guid>
      <pubDate>${pubDate}</pubDate>
      <author>marketing@rysengrowth.com (${escapeXml(fm.author)})</author>
      <category>${escapeXml(fm.category)}</category>
    </item>`;
    })
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>Rysen Notes</title>
    <link>${SITE_URL}/blog</link>
    <description>Long-form writing from Rysen Growth on AI search, attribution, local SEO, and the operational discipline of professional services marketing.</description>
    <language>en-us</language>
    <lastBuildDate>${buildDate}</lastBuildDate>
    <atom:link xmlns:atom="http://www.w3.org/2005/Atom" href="${SITE_URL}/rss.xml" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
