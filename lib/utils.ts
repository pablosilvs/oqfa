import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function normalizeText(s: string): string {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[-_]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

const SYNONYMS: Record<string, string[]> = {
  wifi: ["wi-fi", "wireless", "roteador"],
  "wi-fi": ["wifi", "wireless", "roteador"],
  pc: ["computador", "desktop"],
  computador: ["pc", "desktop", "notebook"],
  notebook: ["laptop", "computador", "pc"],
  cel: ["celular", "smartphone", "telefone"],
  celular: ["cel", "smartphone", "telefone", "mobile"],
  pix: ["ted", "transferencia", "pagamento"],
  zip: ["rar", "compactado", "arquivo"],
};

export function expandSynonyms(term: string): string[] {
  const n = normalizeText(term);
  return [n, ...(SYNONYMS[n] ?? [])];
}
