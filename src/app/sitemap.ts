import type { MetadataRoute } from "next";
import { nav, site } from "@/content/site";
import { servicePages } from "@/content/service-pages";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", ...nav.map((n) => n.href), "/silver-home", ...servicePages.map((p) => `/${p.slug}`)];
  return [...new Set(routes)].map((path) => ({
    url: `${site.url}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.8,
  }));
}
