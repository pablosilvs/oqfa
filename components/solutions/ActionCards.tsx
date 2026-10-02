import type { ActionItem } from "@/types";
import { Card } from "@/components/ui/basics";
import { CheckCircle2, OctagonX } from "lucide-react";

export function FirstActionsCard({ items }: { items: ActionItem[] }) {
  return (
    <section aria-labelledby="faca-primeiro" className="rounded-2xl border-2 border-[#16A34A] bg-green-50 dark:bg-green-950 p-4 md:p-6">
      <h2 id="faca-primeiro" className="text-xl font-bold text-green-800 dark:text-green-200">Faça isso primeiro</h2>
      <p className="text-sm text-green-700 dark:text-green-300">Primeiro, faça isso. Antes de tentar outra coisa.</p>
      <ol className="mt-3 space-y-2">
        {items.map((a, i) => (
          <li key={a.id} className="flex gap-3 rounded-xl bg-white dark:bg-slate-900 p-3">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#16A34A] text-sm font-bold text-white">{i + 1}</span>
            <span><strong className="block text-sm">{a.title}</strong>{a.description && <span className="text-sm text-slate-500">{a.description}</span>}</span>
          </li>
        ))}
      </ol>
    </section>
  );
}

export function AvoidActionsCard({ items }: { items: ActionItem[] }) {
  return (
    <section aria-labelledby="nao-faca" className="rounded-2xl border border-red-200 bg-red-50 dark:bg-red-950 dark:border-red-900 p-4 md:p-6">
      <h2 id="nao-faca" className="flex items-center gap-2 text-xl font-bold text-red-800 dark:text-red-200"><OctagonX size={20} />Não faça isso</h2>
      <p className="text-sm text-red-700 dark:text-red-300">Evite fazer isso — pode piorar.</p>
      <ul className="mt-3 space-y-2">
        {items.map((a) => (
          <li key={a.id} className="rounded-xl bg-white dark:bg-slate-900 p-3 text-sm">
            <strong>{a.title}</strong>{a.description && <span className="text-slate-500"> — {a.description}</span>}
          </li>
        ))}
      </ul>
    </section>
  );
}

export function SafetyBlock() {
  return (
    <section aria-labelledby="quando-parar" className="rounded-2xl bg-slate-900 text-white p-4 md:p-6">
      <h2 id="quando-parar" className="text-xl font-bold flex items-center gap-2"><CheckCircle2 size={20} />Quando é melhor parar</h2>
      <ul className="mt-2 list-disc pl-5 text-sm space-y-1 text-slate-200">
        <li>Cheiro de queimado, fumaça, faísca ou choque: interrompa e mantenha distância.</li>
        <li>Bateria inchada ou vazando: não carregue nem fure.</li>
        <li>Desligue energia/aparelho apenas quando for seguro fazer isso.</li>
        <li>Procure assistência técnica ou emergência apropriada.</li>
      </ul>
    </section>
  );
}
