import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://arbicho.uz";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [], // No restricted pages since it's a static site
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
