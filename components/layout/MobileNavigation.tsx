"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Search, LayoutGrid, Bookmark } from "lucide-react";

const items = [
  { href: "/", label: "Início", icon: Home },
  { href: "/buscar", label: "Buscar", icon: Search },
  { href: "/categorias", label: "Categorias", icon: LayoutGrid },
  { href: "/salvos", label: "Salvos", icon: Bookmark },
];

export function MobileNavigation() {
  const path = usePathname();
  return (
    <nav aria-label="Navegação móvel" className="fixed right-0 bottom-0 left-0 z-40 border-t border-[var(--card-border)] bg-[var(--card)]/95 backdrop-blur md:hidden">
      <div className="grid grid-cols-4 pb-[env(safe-area-inset-bottom)]">
        {items.map((it) => {
          const active = it.href === "/" ? path === "/" : path === it.href || path.startsWith(it.href + "/");
          const Icon = it.icon;
          return (
            <Link
              key={it.href}
              href={it.href}
              aria-current={active ? "page" : undefined}
              className={`flex cursor-pointer flex-col items-center gap-0.5 px-1 py-2 text-[11px] transition-colors hover:text-[#2563EB] focus-visible:ring-2 focus-visible:ring-[#2563EB] active:scale-[0.97] ${active ? "font-semibold text-[#2563EB] dark:text-blue-300" : "text-slate-500 dark:text-slate-400"}`}
            >
              <Icon size={20} aria-hidden />
              {it.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
