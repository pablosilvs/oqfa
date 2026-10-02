export type ConsentValue = "all" | "necessary" | null;

const KEY = "oqfa:cookies";

export function getConsent(): ConsentValue {
  if (typeof window === "undefined") return null;
  try {
    const v = window.localStorage.getItem(KEY);
    if (v === "all" || v === "necessary") return v;
    return null;
  } catch {
    return null;
  }
}

export function hasConsentedToAll(): boolean {
  return getConsent() === "all";
}

export function setConsent(v: Exclude<ConsentValue, null>): void {
  try {
    window.localStorage.setItem(KEY, v);
  } catch {
    // ignora
  }
  try {
    window.dispatchEvent(new CustomEvent("oqfa:consent", { detail: v }));
  } catch {
    // ignora
  }
}
