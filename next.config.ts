import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  pageExtensions: ["ts", "tsx", "md", "mdx"],
};

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    // Turbopack-compatible plugin references must be strings (loaded by name).
    remarkPlugins: [["remark-gfm", {}]],
    rehypePlugins: [
      ["rehype-slug", {}],
      ["rehype-autolink-headings", { behavior: "wrap" }],
    ],
  },
});

export default withMDX(nextConfig);
