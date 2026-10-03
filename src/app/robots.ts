import type { MetadataRoute } from "next";
import { COMPANY } from "@/data/company";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [],
    },
    sitemap: `${COMPANY.siteUrl}/sitemap.xml`,
    host: COMPANY.siteUrl,
  };
}
