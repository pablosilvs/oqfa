export function getLocalStorage<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  try {
    const raw = window.localStorage.getItem(key);
    if (!raw) return fallback;
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

export function setLocalStorage(key: string, value: unknown): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // quota ou modo privado: ignora
  }
}

export function getChecklistKey(slug: string): string {
  return `oqfa:checklist:${slug}`;
}

export function getFavoritesKey(): string {
  return "oqfa:favorites";
}

export function getHistoryKey(): string {
  return "oqfa:history";
}

export function getFeedbackKey(): string {
  return "oqfa:feedback";
}
