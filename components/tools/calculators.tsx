"use client";
import { useState } from "react";
import { trackEvent } from "@/lib/analytics";

export function DownloadCalculator() {
  const [size, setSize] = useState("500");
  const [unit, setUnit] = useState<"MB" | "GB" | "TB">("MB");
  const [speed, setSpeed] = useState("50");
  const mult = unit === "MB" ? 1 : unit === "GB" ? 1024 : 1024 * 1024;
  const mb = (parseFloat(size) || 0) * mult;
  const mbps = parseFloat(speed) || 0;
  const seconds = mbps > 0 ? (mb * 8) / mbps : 0;
  const fmt = seconds < 60 ? `${Math.round(seconds)} segundos` : seconds < 3600 ? `${(seconds / 60).toFixed(1)} minutos` : `${(seconds / 3600).toFixed(2)} horas`;
  return (
    <div className="rounded-xl border p-4 bg-[var(--card)]">
      <h3 className="font-bold">Calculadora de download</h3>
      <div className="mt-2 grid gap-2 md:grid-cols-3">
        <label className="text-sm">Tamanho<input value={size} onChange={(e) => setSize(e.target.value)} inputMode="decimal" className="mt-1 w-full rounded-lg border p-2" /></label>
        <label className="text-sm">Unidade<select value={unit} onChange={(e) => setUnit(e.target.value as never)} className="mt-1 w-full rounded-lg border p-2"><option>MB</option><option>GB</option><option>TB</option></select></label>
        <label className="text-sm">Velocidade (Mbps)<input value={speed} onChange={(e) => setSpeed(e.target.value)} inputMode="decimal" className="mt-1 w-full rounded-lg border p-2" /></label>
      </div>
      <p className="mt-2 text-sm" aria-live="polite">Tempo aproximado: <strong>{mbps > 0 ? fmt : "—"}</strong></p>
      <button onClick={() => trackEvent("tool_used", { tool: "download" })} className="mt-1 text-xs underline">Usamos Mbps → MB/s dividindo por 8.</button>
    </div>
  );
}

export function DataConverter() {
  const [v, setV] = useState("1");
  const [from, setFrom] = useState<"KB" | "MB" | "GB" | "TB">("GB");
  const toKB = { KB: 1, MB: 1024, GB: 1024 ** 2, TB: 1024 ** 3 } as const;
  const kb = (parseFloat(v) || 0) * toKB[from];
  return (
    <div className="rounded-xl border p-4 bg-[var(--card)]">
      <h3 className="font-bold">Conversor de dados</h3>
      <div className="mt-2 flex gap-2">
        <input value={v} onChange={(e) => setV(e.target.value)} className="w-24 rounded-lg border p-2" aria-label="Valor" />
        <select value={from} onChange={(e) => setFrom(e.target.value as never)} className="rounded-lg border p-2" aria-label="De"><option>KB</option><option>MB</option><option>GB</option><option>TB</option></select>
      </div>
      <ul className="mt-2 text-sm space-y-1">
        <li>KB: {(kb).toLocaleString("pt-BR")}</li>
        <li>MB: {(kb / 1024).toLocaleString("pt-BR")}</li>
        <li>GB: {(kb / 1024 ** 2).toLocaleString("pt-BR")}</li>
        <li>TB: {(kb / 1024 ** 3).toLocaleString("pt-BR", { maximumFractionDigits: 4 })}</li>
      </ul>
    </div>
  );
}

export function PowerCalculator() {
  const [w, setW] = useState("150");
  const [h, setH] = useState("4");
  const [d, setD] = useState("30");
  const [kwh, setKwh] = useState("0.90");
  const kwhMes = ((parseFloat(w) || 0) * (parseFloat(h) || 0) * (parseFloat(d) || 0)) / 1000;
  const custo = kwhMes * (parseFloat(kwh.replace(",", ".")) || 0);
  return (
    <div className="rounded-xl border p-4 bg-[var(--card)]">
      <h3 className="font-bold">Consumo elétrico</h3>
      <p className="text-xs text-slate-500">Sem tarifa inventada: se não souber, deixe o kWh em branco.</p>
      <div className="mt-2 grid grid-cols-2 gap-2 md:grid-cols-4">
        <label className="text-sm">Watts<input value={w} onChange={(e) => setW(e.target.value)} className="mt-1 w-full rounded-lg border p-2" /></label>
        <label className="text-sm">Horas/dia<input value={h} onChange={(e) => setH(e.target.value)} className="mt-1 w-full rounded-lg border p-2" /></label>
        <label className="text-sm">Dias/mês<input value={d} onChange={(e) => setD(e.target.value)} className="mt-1 w-full rounded-lg border p-2" /></label>
        <label className="text-sm">R$/kWh<input value={kwh} onChange={(e) => setKwh(e.target.value)} className="mt-1 w-full rounded-lg border p-2" /></label>
      </div>
      <p className="mt-2 text-sm">kWh/mês: <strong>{kwhMes.toFixed(2)}</strong>{kwh && <span> — Custo estimado: <strong>R$ {custo.toFixed(2)}</strong></span>}</p>
    </div>
  );
}
