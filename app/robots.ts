import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site";

// Indexação normal do conteúdo público. Não bloqueia CSS, JS ou imagens.
// Sitemap resolvido dinamicamente via NEXT_PUBLIC_SITE_URL (fallback localhost).
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: absoluteUrl("/sitemap.xml"),
  };
}
