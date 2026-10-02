import Link from "next/link";
import { ChevronRight } from "lucide-react";

export function Breadcrumbs({ items }: { items: { label: string; href?: string }[] }) {
  return (
    <nav aria-label="Você está aqui" className="text-sm text-slate-500">
      <ol className="flex flex-wrap items-center gap-1">
        {items.map((it, i) => (
          <li key={i} className="flex items-center gap-1">
            {i > 0 && <ChevronRight size={14} aria-hidden />}
            {it.href ? <Link href={it.href} className="hover:text-[#2563EB] hover:underline">{it.label}</Link> : <span aria-current="page" className="text-slate-800 dark:text-slate-200">{it.label}</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}
