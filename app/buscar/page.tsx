import { Suspense } from "react";
import type { Metadata } from "next";
import { searchAll } from "@/services/solutions";
import { SolutionCard } from "@/components/solutions/SolutionCard";
import { SearchBar } from "@/components/search/SearchBar";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { EmptyState } from "@/components/EmptyState";
import { absoluteUrl } from "@/lib/site";

// Página de busca: útil para navegar, mas não é conteúdo indexável.
// noindex aqui protege contra URLs finas com ?q= no Google.
export const metadata: Metadata = {
  title: "Buscar soluções",
  description: "Busque o problema e veja o que fazer primeiro.",
  alternates: { canonical: absoluteUrl("/buscar") },
  robots: { index: false, follow: true },
};

export default async function BuscarPage({ searchParams }: { searchParams: Promise<{ q?: string }> }) {
  const { q } = await searchParams;
  const query = (q ?? "").trim().slice(0, 120);
  const results = query ? searchAll(query) : [];
  return (
    <div className="space-y-4">
      <Breadcrumbs items={[{ label: "Início", href: "/" }, { label: "Buscar" }]} />
      <h1 className="text-2xl font-bold">{query ? `Resultados para: ${query}` : "Buscar soluções"}</h1>
      <Suspense><SearchBar initial={query} /></Suspense>
      {!query && <EmptyState title="Digite o problema" description="Ex.: meu celular caiu na água, pix não chegou, wifi lento." />}
      {query && results.length === 0 && (
        <div className="space-y-2">
          <EmptyState title="Não encontramos exatamente esse problema." description="Tente descrever com outras palavras. Ex.: troque 'cel' por 'celular', 'pc' por 'computador'." actionHref="/" actionLabel="Voltar ao início" />
        </div>
      )}
      {query && results.length > 0 && (
        <>
          {results[0] && <p className="text-sm text-slate-500">Melhor correspondência: <strong>{results[0].title}</strong></p>}
          <div className="grid gap-4 md:grid-cols-3">
            {results.map((s) => <SolutionCard key={s.slug} s={s} />)}
          </div>
        </>
      )}
    </div>
  );
}
