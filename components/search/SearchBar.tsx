"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Search } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

export function SearchBar({ initial = "", big = false, id = "busca" }: { initial?: string; big?: boolean; id?: string }) {
  const [q, setQ] = useState(initial);
  const router = useRouter();
  const go = (value: string) => {
    const v = value.trim().slice(0, 120);
    if (!v) return;
    trackEvent("search", { q: v });
    router.push(`/buscar?q=${encodeURIComponent(v)}`);
  };
  return (
    <form
      role="search"
      aria-label="Buscar solução"
      onSubmit={(e) => { e.preventDefault(); go(q); }}
      className={`flex w-full min-w-0 items-center gap-1.5 rounded-2xl border border-[var(--card-border)] bg-[var(--card)] p-1.5 shadow-[0_1px_2px_rgba(15,23,42,0.06)] transition-colors transition-shadow focus-within:border-[#2563EB] focus-within:ring-2 focus-within:ring-[#2563EB]/20 sm:gap-2 sm:p-2 ${big ? "sm:p-2.5" : ""}`}
    >
      <label htmlFor={id} className="sr-only">O que aconteceu?</label>
      <Search className="ml-1.5 shrink-0 text-slate-400 dark:text-slate-500" size={19} aria-hidden />
      <input
        id={id}
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Ex.: meu celular caiu na água"
        autoComplete="off"
        enterKeyHint="search"
        maxLength={120}
        className={`min-w-0 flex-1 bg-transparent text-slate-900 outline-none dark:text-slate-100 ${big ? "text-base md:text-lg" : "text-[15px]"} py-2`}
      />
      <button
        type="submit"
        className="shrink-0 cursor-pointer rounded-xl bg-[#2563EB] px-3 py-2.5 text-[13px] font-semibold whitespace-nowrap text-white transition-colors hover:bg-[#1d4ed8] focus-visible:ring-2 focus-visible:ring-white/60 active:bg-[#1e40af] active:scale-[0.98] sm:px-4 sm:text-sm"
      >
        Encontrar solução
      </button>
    </form>
  );
}
