import { cities, slugify } from "@/lib/cities";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const cityPages = cities.map((c) => ({
    url: `https://medicallienmgt.com/workers-comp-billing/${slugify(c.city)}-ca/`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: "https://medicallienmgt.com/",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: "https://medicallienmgt.com/workers-comp-billing/",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    ...cityPages,
  ];
}
