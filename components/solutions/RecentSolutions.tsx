"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, History } from "lucide-react";
import { getLocalStorage, getHistoryKey } from "@/lib/storage";
import { getSolutionBySlugOnly } from "@/services/solutions";

export function RecentSolutions() {
  const [slugs, setSlugs] = useState<string[]>([]);
  useEffect(() => {
    const h = getLocalStorage<Array<{ slug: string }>>(getHistoryKey(), []);
    setSlugs(h.map((x) => x.slug).slice(0, 6));
  }, []);
  if (!slugs.length) return null;
  const items = slugs.map(getSolutionBySlugOnly).filter((x): x is NonNullable<typeof x> => Boolean(x));
  if (!items.length) return null;

  // 1 item: card compacto. Vários: trilha horizontal elegante.
  return (
    <section aria-labelledby="vistos" className="rounded-2xl border border-[var(--card-border)] bg-[var(--card)] p-4 sm:p-5">
      <div className="flex items-center gap-2">
        <History size={16} className="text-slate-400" aria-hidden />
        <h2 id="vistos" className="text-base font-bold tracking-tight sm:text-lg">Você viu recentemente</h2>
        <span className="ml-auto text-xs text-slate-400 dark:text-slate-500">{items.length} {items.length === 1 ? "item" : "itens"}</span>
      </div>
      {items.length === 1 && items[0] ? (
        <Link
          href={`/${items[0].categorySlug}/${items[0].slug}`}
          className="mt-3 flex cursor-pointer items-center gap-3 rounded-xl border border-[var(--card-border)] p-2.5 transition-colors hover:border-[#2563EB]/50 hover:bg-slate-50 dark:hover:bg-slate-800/60"
        >
          {items[0].image && (
            <span className="relative block h-12 w-16 shrink-0 overflow-hidden rounded-lg bg-slate-100 dark:bg-slate-800">
              <Image src={items[0].image} alt="" fill sizes="64px" className="object-cover" loading="lazy" />
            </span>
          )}
          <span className="min-w-0">
            <span className="block truncate text-sm font-semibold">{items[0].title}</span>
            <span className="mt-0.5 inline-flex items-center gap-1 text-xs font-semibold text-[#2563EB] dark:text-blue-300">
              Continuar <ArrowRight size={13} aria-hidden />
            </span>
          </span>
        </Link>
      ) : (
        <div className="scroll-row mt-3 flex gap-2.5 overflow-x-auto pb-1">
          {items.map((s) => (
            <Link
              key={s.slug}
              href={`/${s.categorySlug}/${s.slug}`}
              className="flex w-56 shrink-0 cursor-pointer items-center gap-2.5 rounded-xl border border-[var(--card-border)] p-2.5 transition-colors hover:border-[#2563EB]/50 hover:bg-slate-50 dark:hover:bg-slate-800/60"
            >
              {s.image && (
                <span className="relative block h-11 w-14 shrink-0 overflow-hidden rounded-lg bg-slate-100 dark:bg-slate-800">
                  <Image src={s.image} alt="" fill sizes="56px" className="object-cover" loading="lazy" />
                </span>
              )}
              <span className="min-w-0 text-[13px] leading-snug font-medium">
                <span className="line-clamp-2">{s.shortTitle ?? s.title}</span>
              </span>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}

export function HistoryTracker({ slug }: { slug: string }) {
  useEffect(() => {
    try {
      const k = getHistoryKey();
      const h = getLocalStorage<Array<{ slug: string; ts: number }>>(k, []);
      const filtered = h.filter((x) => x.slug !== slug);
      const n = [{ slug, ts: Date.now() }, ...filtered].slice(0, 15);
      localStorage.setItem(k, JSON.stringify(n));
    } catch { /* ignore */ }
  }, [slug]);
  return null;
}
