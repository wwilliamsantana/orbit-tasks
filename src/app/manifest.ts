import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Orbit Tasks",
    short_name: "Orbit",
    description:
      "Modern Kanban Board built with Next.js, TypeScript, Tailwind CSS and Dnd Kit.",
    start_url: "/",
    display: "standalone",
    background_color: "#0f172a",
    theme_color: "#2563eb",
    orientation: "portrait",
    lang: "en",
  };
}
