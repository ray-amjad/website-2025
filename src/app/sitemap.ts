import type { MetadataRoute } from "next";

const SITE_URL = "https://www.rayamjad.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/press", "/company"];
  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
