import { MetadataRoute } from "next";
import { studioConfig } from "@/config/studio";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "RUXH — Social Creative Studio",
    short_name: "RUXH",
    description: studioConfig.meta.description,
    start_url: "/",
    display: "standalone",
    background_color: "#0B0B0B",
    theme_color: "#0B0B0B",
    icons: [
      {
        src: "/favicon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
