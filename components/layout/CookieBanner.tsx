"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { getConsent, setConsent } from "@/lib/consent";

export function CookieBanner() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (!getConsent()) setShow(true);
  }, []);
  if (!show) return null;
  const choose = (v: "all" | "necessary") => {
    setConsent(v);
    setShow(false);
  };
  return (
    <div role="dialog" aria-label="Cookies" className="fixed bottom-16 md:bottom-4 left-4 right-4 md:left-auto md:max-w-sm z-50 rounded-xl border border-[var(--card-border)] bg-[var(--card)] p-4 shadow-lg">
      <p className="text-sm font-semibold">Cookies</p>
      <p className="text-sm text-slate-500 mt-1">
        Usamos o necessário no seu aparelho (tema, salvos, histórico). Analytics e anúncios só carregam se você aceitar e se estiverem configurados. <Link className="underline" href="/cookies">Saiba mais</Link>.
      </p>
      <div className="mt-3 flex gap-2">
        <button onClick={() => choose("all")} className="cursor-pointer rounded-lg bg-[#2563EB] px-3 py-2 text-sm text-white transition-colors hover:bg-[#1d4ed8] active:bg-[#1e40af]">Aceitar</button>
        <button onClick={() => choose("necessary")} className="cursor-pointer rounded-lg border px-3 py-2 text-sm transition-colors hover:border-[#2563EB]">Somente necessários</button>
      </div>
    </div>
  );
}
