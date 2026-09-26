import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "AURA Pilates Studio Surabaya",
    short_name: "AURA Pilates",
    description: "Boutique Reformer Pilates & Movement Studio Surabaya Barat",
    start_url: "/",
    display: "standalone",
    background_color: "#FAF7F2",
    theme_color: "#1A2821",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
