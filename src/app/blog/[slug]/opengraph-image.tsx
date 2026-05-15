import { ImageResponse } from "next/og";
import { getAllArticles, getArticleBySlug } from "@/lib/articles";

export const runtime = "nodejs";
export const alt = "Rysen Notes — article";
export const contentType = "image/png";
export const size = { width: 1200, height: 630 };

export async function generateImageMetadata() {
  return getAllArticles().map((a) => ({
    id: a.frontmatter.slug,
    contentType: "image/png",
    size,
    alt: a.frontmatter.title,
  }));
}

export default async function OpengraphImage({
  params,
}: {
  params: { slug: string };
}) {
  const article = getArticleBySlug(params.slug);
  const title = article?.frontmatter.title ?? "Rysen Notes";
  const category = article?.frontmatter.category?.toUpperCase() ?? "RYSEN NOTES";
  const date = article
    ? new Date(article.frontmatter.publishedDate).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 80px",
          background:
            "linear-gradient(160deg, #f7f5ee 0%, #f1ede1 100%)",
          color: "#1a1a1f",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 18,
            letterSpacing: 2,
            color: "#595964",
            textTransform: "uppercase",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <span
              style={{
                width: 10,
                height: 10,
                borderRadius: 999,
                background: "#f5c518",
                display: "inline-block",
              }}
            />
            RYSEN NOTES
          </div>
          <div>{category}</div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 24,
          }}
        >
          <div
            style={{
              fontSize: 60,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              fontWeight: 500,
              color: "#1a1a1f",
              maxWidth: 1040,
            }}
          >
            {title}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 18,
            color: "#595964",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span
              style={{
                fontSize: 32,
                fontWeight: 500,
                letterSpacing: "-0.02em",
                color: "#1a1a1f",
              }}
            >
              Rysen
            </span>
            <span
              style={{
                fontSize: 14,
                color: "#9a9aa3",
                letterSpacing: 1.5,
                textTransform: "uppercase",
              }}
            >
              Detroit · Est. 2019
            </span>
          </div>
          <div
            style={{
              fontSize: 16,
              letterSpacing: 1,
              color: "#9a9aa3",
              textTransform: "uppercase",
            }}
          >
            {date}
          </div>
        </div>
      </div>
    ),
    size
  );
}
