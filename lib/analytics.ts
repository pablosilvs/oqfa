type EventName =
  | "search"
  | "solution_view"
  | "solution_saved"
  | "solution_completed"
  | "feedback_yes"
  | "feedback_no"
  | "tool_used";

// Utilidade desacoplada. Hoje só console/debug + localStorage leve.
// Futuro: plugar GA/Plausible/Supabase sem quebrar quando ausente.
export function trackEvent(name: EventName, data?: Record<string, string | number | boolean>): void {
  try {
    if (typeof window === "undefined") return;
    // GA futuro: window.gtag?.('event', name, data)
    const gtag = (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag;
    if (typeof gtag === "function") {
      gtag("event", name, data ?? {});
    }
  } catch {
    // analytics nunca deve quebrar a app
  }
}
