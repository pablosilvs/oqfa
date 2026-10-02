import { normalizeText, expandSynonyms } from "@/lib/utils";
import type { Solution } from "@/types";

interface Scored {
  solution: Solution;
  score: number;
}

export function searchSolutions(query: string, all: Solution[]): Solution[] {
  const q = normalizeText(query);
  if (!q || q.length < 2) return [];
  const terms = q.split(" ").filter((t) => t.length > 1);
  const expanded = terms.flatMap(expandSynonyms);

  const scored: Scored[] = all.map((s) => {
    const title = normalizeText(s.title);
    const desc = normalizeText(s.description);
    const cat = normalizeText(s.categorySlug);
    const keywords = s.keywords.map(normalizeText).join(" ");
    const synonyms = (s.synonyms ?? []).map(normalizeText).join(" ");
    let score = 0;

    if (title === q) score += 100;
    if (title.includes(q)) score += 50;
    for (const t of terms) {
      if (title.includes(t)) score += 12;
    }
    for (const e of expanded) {
      if (e.length > 2 && title.includes(e)) score += 6;
    }
    if (keywords.includes(q)) score += 25;
    for (const t of terms) {
      if (keywords.includes(t)) score += 5;
    }
    if (synonyms.includes(q) || terms.some((t) => synonyms.includes(t))) score += 15;
    if (cat.includes(q) || terms.some((t) => cat.includes(t))) score += 4;
    if (desc.includes(q)) score += 8;
    for (const t of terms) {
      if (desc.includes(t)) score += 2;
    }
    if (s.popular) score += 2;
    return { solution: s, score };
  });

  return scored
    .filter((s) => s.score > 0)
    .sort((a, b) => b.score - a.score)
    .map((s) => s.solution);
}
