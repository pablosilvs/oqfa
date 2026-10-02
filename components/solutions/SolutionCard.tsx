import Link from "next/link";
import Image from "next/image";
import type { Solution } from "@/types";
import { Badge } from "@/components/ui/basics";
import { getCategoryBySlug } from "@/data/categories";
import { ArrowRight, Clock } from "lucide-react";

const diffLabel: Record<string, string> = { "muito-facil": "Muito fácil", facil: "Fácil", medio: "Médio", avancado: "Avançado" };
const riskTone: Record<string, "green" | "yellow" | "red"> = { baixo: "green", moderado: "yellow", alto: "red" };

export function SolutionCard({ s }: { s: Solution }) {
  const cat = getCategoryBySlug(s.categorySlug);
  const href = `/${s.categorySlug}/${s.slug}`;
  return (
    <Link
      href={href}
      aria-label={`${s.title} — ver o que fazer primeiro`}
      className="group flex h-full min-w-0 cursor-pointer flex-col gap-2.5 rounded-xl border border-[var(--card-border)] bg-[var(--card)] p-3.5 shadow-[0_1px_2px_rgba(15,23,42,0.05)] transition-all hover:-translate-y-0.5 hover:border-[#2563EB]/50 hover:shadow-[0_6px_16px_rgba(37,99,235,0.10)] focus-visible:ring-2 focus-visible:ring-[#2563EB] active:translate-y-0 active:shadow-sm"
    >
      {s.image && (
        <span className="relative block h-32 w-full shrink-0 overflow-hidden rounded-lg bg-slate-100 dark:bg-slate-800">
          <Image
            src={s.image}
            alt={s.imageAlt ?? s.title}
            fill
            sizes="(max-width:768px) 100vw, 33vw"
            className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            loading="lazy"
          />
        </span>
      )}
      <span className="flex flex-wrap items-center gap-1.5">
        <Badge tone="gray">{cat?.name ?? s.categorySlug}</Badge>
        <span className="inline-flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400">
          <Clock size={12} aria-hidden /> {s.estimatedTime}
        </span>
        <Badge tone={riskTone[s.riskLevel]}>Risco {s.riskLevel}</Badge>
      </span>
      <span className="text-[15px] leading-snug font-semibold text-slate-900 group-hover:text-[#2563EB] dark:text-slate-100 dark:group-hover:text-blue-300">
        {s.title}
      </span>
      <span className="line-clamp-2 text-[13px] leading-relaxed text-slate-500 dark:text-slate-400">{s.excerpt}</span>
      <span className="mt-auto flex items-center justify-between pt-1 text-xs">
        <span className="text-slate-400 dark:text-slate-500">{diffLabel[s.difficulty]}</span>
        <span className="inline-flex items-center gap-1 font-semibold text-[#2563EB] dark:text-blue-300">
          Ver passos <ArrowRight size={14} aria-hidden className="transition-transform group-hover:translate-x-0.5" />
        </span>
      </span>
    </Link>
  );
}
