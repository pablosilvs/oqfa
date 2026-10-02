import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site";
import { solutions } from "@/data/solutions";
import { categories } from "@/data/categories";

// Sitemap somente de conteúdo público real. Sem query strings, sem /salvos,
// sem /buscar (página de busca não deve ser indexada como conteúdo).
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const urls: MetadataRoute.Sitemap = [
    { url: absoluteUrl("/"), lastModified: now },
    { url: absoluteUrl("/categorias"), lastModified: now },
    { url: absoluteUrl("/ferramentas"), lastModified: now },
    { url: absoluteUrl("/mais-procurados"), lastModified: now },
    { url: absoluteUrl("/sobre"), lastModified: now },
    { url: absoluteUrl("/como-funciona"), lastModified: now },
    { url: absoluteUrl("/contato"), lastModified: now },
    { url: absoluteUrl("/politica-de-privacidade"), lastModified: now },
    { url: absoluteUrl("/termos-de-uso"), lastModified: now },
    { url: absoluteUrl("/cookies"), lastModified: now },
    { url: absoluteUrl("/politica-editorial"), lastModified: now },
  ];
  for (const c of categories) urls.push({ url: absoluteUrl(`/${c.slug}`), lastModified: now });
  for (const s of solutions) urls.push({ url: absoluteUrl(`/${s.categorySlug}/${s.slug}`), lastModified: new Date(s.updatedAt) });
  return urls;
}
