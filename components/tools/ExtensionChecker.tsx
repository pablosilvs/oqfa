"use client";
import { useState } from "react";
import { extensions } from "@/data/extensions";

export function ExtensionChecker() {
  const [q, setQ] = useState("pdf");
  const norm = q.trim().toLowerCase().replace(/^\./, "");
  const found = extensions.find((e) => e.ext === norm);
  return (
    <div className="rounded-xl border p-4 bg-[var(--card)]">
      <h3 className="font-bold">Verificador de extensão</h3>
      <label className="mt-2 block text-sm">Digite a extensão
        <input value={q} onChange={(e) => setQ(e.target.value)} placeholder=".heic" className="mt-1 w-full rounded-lg border p-2" aria-label="Extensão" />
      </label>
      {found ? (
        <div className="mt-2 text-sm space-y-1">
          <p><strong>{found.name}</strong> — {found.type}</p>
          <p className="text-slate-500">{found.description}</p>
          <p>Programas: {found.programs.join(", ")}</p>
          <p className="rounded-lg bg-yellow-100 p-2 text-yellow-900">⚠️ {found.care}</p>
        </div>
      ) : (
        <p className="mt-2 text-sm text-slate-500">{norm ? `Não conhecemos .${norm} ainda. Tente abrir no navegador ou Drive.` : "Digite uma extensão."}</p>
      )}
    </div>
  );
}
