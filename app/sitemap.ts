import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://spartyncapital.com";

  return [
    "",
    "/about",
    "/praxis",
    "/contact",
    "/support",
    "/privacy",
    "/terms",
    "/data-deletion",
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.8,
  }));
}