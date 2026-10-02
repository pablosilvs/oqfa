import { getPopularSolutions } from "@/services/solutions";
import { SolutionCard } from "@/components/solutions/SolutionCard";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

export const metadata = { title: "Mais procurados" };

export default function MaisProcuradosPage() {
  const list = getPopularSolutions(12);
  return (
    <div className="space-y-4">
      <Breadcrumbs items={[{ label: "Início", href: "/" }, { label: "Mais procurados" }]} />
      <h1 className="text-2xl font-bold">Mais procurados</h1>
      <p className="text-sm text-slate-500">Seleção dos problemas mais buscados. Sem números inventados.</p>
      <ol className="grid md:grid-cols-3 gap-4">
        {list.map((s, i) => (
          <li key={s.slug}>
            <p className="text-xs font-bold text-slate-400">{i + 1}.</p>
            <SolutionCard s={s} />
          </li>
        ))}
      </ol>
    </div>
  );
}
