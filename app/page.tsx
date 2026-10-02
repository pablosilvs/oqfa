import Link from "next/link";
import { SearchBar } from "@/components/search/SearchBar";
import { SolutionCard } from "@/components/solutions/SolutionCard";
import { CategoryCard } from "@/components/solutions/CategoryCard";
import { RecentSolutions } from "@/components/solutions/RecentSolutions";
import { categories } from "@/data/categories";
import { getPopularSolutions, getAllSolutions } from "@/services/solutions";
import { tools } from "@/data/tools";
import { Card } from "@/components/ui/basics";

const chips = [
  { label: "Celular não liga", q: "celular não liga" },
  { label: "Internet lenta", q: "wifi lento" },
  { label: "Pix não chegou", q: "pix não chegou" },
  { label: "PC muito lento", q: "notebook muito lento" },
  { label: "Encomenda atrasada", q: "encomenda atrasada" },
  { label: "Arquivo não abre", q: "arquivo zip não abre" },
];

export default function Home() {
  const popular = getPopularSolutions(6);
  const all = getAllSolutions();
  const byCat = (slug: string) => all.filter((s) => s.categorySlug === slug).length;

  return (
    <div className="space-y-7 md:space-y-9">
      <section className="rounded-2xl bg-gradient-to-b from-blue-700 to-blue-900 px-4 py-6 text-center text-white sm:px-6 sm:py-8 md:px-8">
        <h1 className="text-[1.7rem] leading-tight font-extrabold tracking-tight sm:text-3xl md:text-4xl">O que aconteceu?</h1>
        <p className="mx-auto mt-1.5 max-w-xl text-[14px] text-blue-100 md:text-[15px]">Conte o problema. Nós mostramos o que fazer primeiro.</p>
        <div className="mx-auto mt-4 max-w-2xl text-left md:mt-5">
          <SearchBar big />
        </div>
        <p className="mt-3.5 text-xs text-blue-200/90">Ou escolha uma situação comum</p>
        <div className="mx-auto mt-2 flex max-w-2xl flex-wrap justify-center gap-1.5 sm:gap-2">
          {chips.map((c) => (
            <Link
              key={c.label}
              href={`/buscar?q=${encodeURIComponent(c.q)}`}
              className="cursor-pointer rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-[13px] leading-none whitespace-nowrap transition-colors hover:border-white/30 hover:bg-white/25 focus-visible:ring-2 focus-visible:ring-white/70 active:bg-white/30"
            >
              {c.label}
            </Link>
          ))}
        </div>
      </section>

      <RecentSolutions />

      <section aria-labelledby="popular">
        <div className="flex items-baseline justify-between gap-2">
          <h2 id="popular" className="text-lg font-bold tracking-tight md:text-xl">Problemas populares</h2>
          <Link href="/mais-procurados" className="shrink-0 cursor-pointer text-[13px] font-medium text-[#2563EB] hover:underline dark:text-blue-300">Ver todos</Link>
        </div>
        <div className="mt-3 grid min-w-0 gap-3 sm:grid-cols-2 md:grid-cols-3 md:gap-4">
          {popular.slice(0, 6).map((s) => <SolutionCard key={s.slug} s={s} />)}
        </div>
      </section>

      <section aria-labelledby="cats">
        <h2 id="cats" className="text-lg font-bold tracking-tight md:text-xl">Escolha uma categoria</h2>
        <div className="mt-3 grid min-w-0 grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {categories.map((c) => <CategoryCard key={c.slug} c={c} count={byCat(c.slug)} />)}
        </div>
      </section>

      <section aria-labelledby="como" className="rounded-2xl border border-[var(--card-border)] bg-[var(--card)] p-4 sm:p-5">
        <h2 id="como" className="text-lg font-bold tracking-tight md:text-xl">Resolva em poucos minutos</h2>
        <ol className="mt-3 grid gap-3 text-sm md:grid-cols-3">
          <li><Card><strong>1. Conte o problema.</strong><br /><span className="text-slate-500 dark:text-slate-400">Digite como você falaria.</span></Card></li>
          <li><Card><strong>2. Veja o que fazer primeiro.</strong><br /><span className="text-slate-500 dark:text-slate-400">Sem enrolação, direto ao ponto.</span></Card></li>
          <li><Card><strong>3. Siga as etapas.</strong><br /><span className="text-slate-500 dark:text-slate-400">Marque cada passo concluído.</span></Card></li>
        </ol>
      </section>

      <section aria-labelledby="ferr">
        <div className="flex items-baseline justify-between gap-2">
          <h2 id="ferr" className="text-lg font-bold tracking-tight md:text-xl">Ferramentas gratuitas</h2>
          <Link href="/ferramentas" className="shrink-0 cursor-pointer text-[13px] font-medium text-[#2563EB] hover:underline dark:text-blue-300">Ver todas</Link>
        </div>
        <div className="mt-3 grid min-w-0 gap-3 sm:grid-cols-2 md:grid-cols-3 md:gap-4">
          {tools.map((t) => (
            <Link key={t.slug} href={`/ferramentas#${t.slug}`} className="cursor-pointer rounded-xl focus-visible:ring-2 focus-visible:ring-[#2563EB]">
              <Card className="h-full p-4 transition-colors hover:border-[#2563EB]/50"><strong className="text-[15px]">{t.name}</strong><p className="mt-1 text-[13px] text-slate-500 dark:text-slate-400">{t.description}</p></Card>
            </Link>
          ))}
        </div>
      </section>

      <section aria-labelledby="faq" className="rounded-2xl border border-[var(--card-border)] bg-[var(--card)] p-4 sm:p-5">
        <h2 id="faq" className="text-lg font-bold tracking-tight md:text-xl">Perguntas frequentes</h2>
        <details className="mt-2 rounded-lg"><summary className="cursor-pointer rounded py-1 text-[15px] font-semibold hover:text-[#2563EB]">Preciso pagar ou criar conta?</summary><p className="text-sm text-slate-500 dark:text-slate-400">Não. Tudo é gratuito e sem login.</p></details>
        <details className="mt-2 rounded-lg"><summary className="cursor-pointer rounded py-1 text-[15px] font-semibold hover:text-[#2563EB]">E se for perigoso?</summary><p className="text-sm text-slate-500 dark:text-slate-400">Dizemos quando parar e procurar profissional. Nada de procedimento arriscado.</p></details>
        <details className="mt-2 rounded-lg"><summary className="cursor-pointer rounded py-1 text-[15px] font-semibold hover:text-[#2563EB]">Vocês acessam meu banco?</summary><p className="text-sm text-slate-500 dark:text-slate-400">Não. Damos passos operacionais e você resolve no app oficial.</p></details>
      </section>

      <section className="rounded-2xl bg-slate-900 px-4 py-6 text-center text-white sm:px-6 sm:py-8 dark:bg-slate-950 dark:border dark:border-[var(--card-border)]">
        <h2 className="text-xl font-bold tracking-tight md:text-2xl">Não sabe o que fazer?</h2>
        <p className="mt-1 text-[13px] text-slate-300 dark:text-slate-400">Descreva com suas palavras.</p>
        <div className="mx-auto mt-3 max-w-2xl text-left"><SearchBar id="busca-final" /></div>
      </section>
    </div>
  );
}
