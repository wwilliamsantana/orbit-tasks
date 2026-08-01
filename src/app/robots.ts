import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://orbit-tasks-ten.vercel.app/sitemap.xml",
    host: "https://orbit-tasks-ten.vercel.app/",
  };
}
