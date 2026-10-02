"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Compass } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const links = [
  { href: "/", label: "Início" },
  { href: "/buscar", label: "Soluções" },
  { href: "/categorias", label: "Categorias" },
  { href: "/ferramentas", label: "Ferramentas" },
  { href: "/mais-procurados", label: "Mais procurados" },
  { href: "/sobre", label: "Sobre" },
];

export function Header() {
  const path = usePathname();
  const isActive = (href: string) =>
    href === "/" ? path === "/" : path === href || path.startsWith(href + "/");
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--card-border)] bg-[var(--background)]/90 backdrop-blur">
      <a href="#conteudo" className="skip-link">Pular para o conteúdo</a>
      <div className="mx-auto flex h-14 w-full max-w-5xl items-center gap-2 px-3 sm:gap-3 sm:px-4">
        <Link
          href="/"
          aria-current={path === "/" ? "page" : undefined}
          aria-label="O Que Eu Faço Agora? - início"
          className="flex shrink-0 cursor-pointer items-center gap-2 rounded-lg px-1 py-1 font-bold hover:opacity-90"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#2563EB] text-white">
            <Compass size={18} aria-hidden />
          </span>
          <span className="hidden text-[13px] leading-tight sm:block">O Que Eu Faço<br />Agora?</span>
          <span className="text-[13px] sm:hidden">OQFA</span>
        </Link>
        <nav className="ml-1 hidden items-center gap-1 text-[13px] md:flex" aria-label="Principal">
          {links.map((l) => {
            const active = isActive(l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                aria-current={active ? "page" : undefined}
                className={`cursor-pointer rounded-lg px-2.5 py-1.5 transition-colors hover:bg-slate-100 hover:text-[#2563EB] dark:hover:bg-slate-800 ${
                  active ? "bg-blue-50 font-semibold text-[#2563EB] dark:bg-blue-950 dark:text-blue-300" : "text-slate-600 dark:text-slate-300"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>
        <div className="ml-auto flex shrink-0 items-center gap-1.5">
          <Link
            href="/salvos"
            aria-current={path === "/salvos" ? "page" : undefined}
            className={`hidden cursor-pointer rounded-lg px-2.5 py-1.5 text-[13px] transition-colors hover:text-[#2563EB] sm:inline ${
              path === "/salvos" ? "font-semibold text-[#2563EB]" : "text-slate-600 dark:text-slate-300"
            }`}
          >
            Salvos
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
