import { solutions } from "@/data/solutions";
import { searchSolutions } from "@/lib/search";

export function getAllSolutions() {
  return solutions;
}

export function getSolutionBySlug(category: string, slug: string) {
  return solutions.find((s) => s.categorySlug === category && s.slug === slug);
}

export function getSolutionBySlugOnly(slug: string) {
  return solutions.find((s) => s.slug === slug);
}

export function getSolutionsByCategory(category: string) {
  return solutions.filter((s) => s.categorySlug === category);
}

export function searchAll(query: string) {
  return searchSolutions(query, solutions);
}

export function getRelatedSolutions(slug: string, limit = 3) {
  const base = getSolutionBySlugOnly(slug);
  if (!base) return [];
  const ids = base.relatedSolutions ?? [];
  const found = ids
    .map((id) => getSolutionBySlugOnly(id))
    .filter((x): x is NonNullable<typeof x> => Boolean(x));
  if (found.length >= limit) return found.slice(0, limit);
  const sameCat = solutions.filter(
    (s) => s.categorySlug === base.categorySlug && s.slug !== slug && !ids.includes(s.slug)
  );
  return [...found, ...sameCat].slice(0, limit);
}

export function getPopularSolutions(limit = 8) {
  const popular = solutions.filter((s) => s.popular);
  if (popular.length >= limit) return popular.slice(0, limit);
  return [...popular, ...solutions.filter((s) => !s.popular)].slice(0, limit);
}
