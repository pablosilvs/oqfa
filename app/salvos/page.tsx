"use client";
import { useEffect, useState } from "react";
import { getLocalStorage, getFavoritesKey } from "@/lib/storage";
import { getSolutionBySlugOnly } from "@/services/solutions";
import { SolutionCard } from "@/components/solutions/SolutionCard";
import { EmptyState } from "@/components/EmptyState";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

export default function SalvosPage() {
  const [slugs, setSlugs] = useState<string[] | null>(null);
  useEffect(() => { setSlugs(getLocalStorage<string[]>(getFavoritesKey(), [])); }, []);
  if (slugs === null) return <p>Carregando…</p>;
  const items = slugs.map(getSolutionBySlugOnly).filter(Boolean);
  return (
    <div className="space-y-4">
      <Breadcrumbs items={[{ label: "Início", href: "/" }, { label: "Salvos" }]} />
      <h1 className="text-2xl font-bold">Salvos</h1>
      {items.length === 0 ? (
        <EmptyState title="Você ainda não salvou nenhuma solução." description="Abra uma solução e toque em Salvar para ver aqui." actionHref="/buscar" actionLabel="Buscar soluções" />
      ) : (
        <div className="grid md:grid-cols-3 gap-4">{items.map((s) => s && <SolutionCard key={s.slug} s={s} />)}</div>
      )}
    </div>
  );
}
