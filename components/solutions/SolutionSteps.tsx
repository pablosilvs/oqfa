"use client";
import { useEffect, useState } from "react";
import type { SolutionStep } from "@/types";
import { getLocalStorage, setLocalStorage, getChecklistKey } from "@/lib/storage";
import { trackEvent } from "@/lib/analytics";

export function SolutionSteps({ slug, steps }: { slug: string; steps: SolutionStep[] }) {
  const key = getChecklistKey(slug);
  const [done, setDone] = useState<string[]>([]);
  useEffect(() => { setDone(getLocalStorage<string[]>(key, [])); }, [key]);
  const toggle = (id: string) => {
    setDone((d) => {
      const n = d.includes(id) ? d.filter((x) => x !== id) : [...d, id];
      setLocalStorage(key, n);
      if (n.length === steps.length) trackEvent("solution_completed", { slug });
      return n;
    });
  };
  const pct = steps.length ? Math.round((done.length / steps.length) * 100) : 0;
  return (
    <section aria-labelledby="passo-a-passo">
      <div className="flex items-center justify-between">
        <h2 id="passo-a-passo" className="text-xl font-bold">Passo a passo</h2>
        <p className="text-sm text-slate-500" aria-live="polite">{done.length} de {steps.length} concluídos</p>
      </div>
      <div className="mt-2 h-2 rounded-full bg-slate-200 dark:bg-slate-700" role="progressbar" aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100} aria-label="Progresso">
        <div className="h-2 rounded-full bg-[#2563EB] transition-all" style={{ width: `${pct}%` }} />
      </div>
      <ol className="mt-4 space-y-3">
        {steps.map((st, i) => {
          const checked = done.includes(st.id);
          return (
            <li key={st.id} className={`rounded-xl border p-4 ${checked ? "border-green-300 bg-green-50 dark:bg-green-950" : "border-[var(--card-border)] bg-[var(--card)]"}`}>
              <label className="flex cursor-pointer gap-3">
                <input type="checkbox" checked={checked} onChange={() => toggle(st.id)} className="mt-1 h-5 w-5 accent-[#16A34A]" aria-label={`Marcar etapa ${i + 1} como concluída`} />
                <span>
                  <strong className={`block ${checked ? "line-through text-slate-400" : ""}`}>{i + 1}. {st.title}</strong>
                  <span className="text-sm text-slate-500">{st.description}</span>
                  {st.warning && <span className="mt-1 block rounded-lg bg-yellow-100 p-2 text-sm text-yellow-900 dark:bg-yellow-900 dark:text-yellow-100">⚠️ {st.warning}</span>}
                </span>
              </label>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
