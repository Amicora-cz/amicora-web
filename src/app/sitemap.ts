import type { MetadataRoute } from "next";
import { COMPANY } from "@/data/company";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: COMPANY.siteUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${COMPANY.siteUrl}/produkt`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${COMPANY.siteUrl}/o-spolecnosti`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${COMPANY.siteUrl}/kontakt`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${COMPANY.siteUrl}/ochrana-osobnich-udaju`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
