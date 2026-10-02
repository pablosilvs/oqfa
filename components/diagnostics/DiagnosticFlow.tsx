"use client";
import { useState } from "react";
import type { DiagnosticNode } from "@/types";
import Link from "next/link";

export function DiagnosticFlow({ nodes, entryId }: { nodes: DiagnosticNode[]; entryId: string }) {
  const [currentId, setCurrentId] = useState(entryId);
  const [trail, setTrail] = useState<string[]>([entryId]);
  const map = new Map(nodes.map((n) => [n.id, n]));
  const cur = map.get(currentId);
  if (!cur) return null;

  const go = (next: string) => {
    setCurrentId(next);
    setTrail((t) => [...t, next]);
  };
  const back = () => {
    if (trail.length <= 1) return;
    const n = [...trail];
    n.pop();
    setTrail(n);
    setCurrentId(n[n.length - 1]);
  };
  const restart = () => {
    setTrail([entryId]);
    setCurrentId(entryId);
  };

  return (
    <section aria-labelledby="diagnostico" className="rounded-2xl border border-[#2563EB]/30 bg-blue-50 dark:bg-blue-950 p-4 md:p-6">
      <h2 id="diagnostico" className="text-xl font-bold">Vamos descobrir o que aconteceu</h2>
      <div className="mt-3 rounded-xl bg-white dark:bg-slate-900 p-4">
        {cur.result ? (
          <div>
            <p className="font-semibold">{cur.result.title}</p>
            <p className="mt-1 text-sm text-slate-500">{cur.result.description}</p>
            {cur.result.solutionSlug && (
              <p className="mt-2 text-sm"><Link className="text-[#2563EB] underline" href={`/buscar?q=${encodeURIComponent(cur.result.solutionSlug.replace(/-/g, " "))}`}>Ver solução relacionada</Link></p>
            )}
            <div className="mt-3 flex gap-2">
              <button onClick={back} className="rounded-lg border px-3 py-2 text-sm">Voltar</button>
              <button onClick={restart} className="rounded-lg bg-[#2563EB] px-3 py-2 text-sm text-white">Recomeçar</button>
            </div>
          </div>
        ) : (
          <div>
            <p className="font-semibold">{cur.question}</p>
            {cur.description && <p className="text-sm text-slate-500">{cur.description}</p>}
            <div className="mt-3 grid gap-2">
              {(cur.options ?? []).map((op) => (
                <button key={op.label} onClick={() => go(op.nextNodeId)} className="rounded-lg border px-4 py-2 text-left text-sm hover:border-[#2563EB] hover:text-[#2563EB]">
                  {op.label}
                </button>
              ))}
            </div>
            {trail.length > 1 && <button onClick={back} className="mt-3 text-sm underline">Voltar</button>}
          </div>
        )}
      </div>
    </section>
  );
}
