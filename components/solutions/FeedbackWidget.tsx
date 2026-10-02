"use client";
import { useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage, getFeedbackKey } from "@/lib/storage";
import { trackEvent } from "@/lib/analytics";

export function FeedbackWidget({ slug }: { slug: string }) {
  const [vote, setVote] = useState<"yes" | "no" | null>(null);
  const [text, setText] = useState("");
  const [sent, setSent] = useState(false);
  useEffect(() => {
    const all = getLocalStorage<Record<string, string>>(getFeedbackKey(), {});
    if (all[slug] === "yes" || all[slug] === "no") setVote(all[slug] as "yes" | "no");
    if (all[slug + ":sent"]) setSent(true);
  }, [slug]);
  const save = (v: "yes" | "no") => {
    const all = getLocalStorage<Record<string, string>>(getFeedbackKey(), {});
    all[slug] = v;
    setLocalStorage(getFeedbackKey(), all);
    setVote(v);
    trackEvent(v === "yes" ? "feedback_yes" : "feedback_no", { slug });
  };
  const sendText = () => {
    if (!text.trim()) return;
    const all = getLocalStorage<Record<string, string>>(getFeedbackKey(), {});
    // Nesta versão salvamos apenas localmente, sem dados sensíveis. Futuro: enviar ao Supabase.
    all[slug + ":text"] = text.trim().slice(0, 500);
    all[slug + ":sent"] = "1";
    setLocalStorage(getFeedbackKey(), all);
    setSent(true);
  };
  return (
    <section aria-labelledby="feedback" className="rounded-2xl border border-[var(--card-border)] bg-[var(--card)] p-4">
      <h2 id="feedback" className="font-bold">Isso resolveu seu problema?</h2>
      {vote === "yes" && <p className="mt-2 text-sm text-green-700">Que bom! Obrigado pelo feedback.</p>}
      {vote !== "yes" && vote !== "no" && (
        <div className="mt-2 flex gap-2">
          <button onClick={() => save("yes")} className="rounded-lg bg-[#16A34A] px-4 py-2 text-sm text-white">Sim</button>
          <button onClick={() => save("no")} className="rounded-lg border px-4 py-2 text-sm">Não</button>
        </div>
      )}
      {vote === "no" && !sent && (
        <div className="mt-3">
          <label htmlFor={`fb-${slug}`} className="text-sm">O que aconteceu? (opcional)</label>
          <textarea id={`fb-${slug}`} value={text} onChange={(e) => setText(e.target.value)} rows={3} maxLength={500} className="mt-1 w-full rounded-lg border p-2 text-sm" placeholder="Conte em poucas palavras" />
          <button onClick={sendText} className="mt-2 rounded-lg bg-[#2563EB] px-4 py-2 text-sm text-white">Enviar</button>
          <p className="mt-1 text-xs text-slate-400">Salvo só neste aparelho nesta versão.</p>
        </div>
      )}
      {vote === "no" && sent && <p className="mt-2 text-sm">Obrigado! Vamos melhorar esta solução.</p>}
    </section>
  );
}
