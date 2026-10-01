import { MetadataRoute } from "next";
import { studioConfig } from "@/config/studio";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = studioConfig.meta.url;

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
