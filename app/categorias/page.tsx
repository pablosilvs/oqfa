import { categories } from "@/data/categories";
import { CategoryCard } from "@/components/solutions/CategoryCard";
import { getSolutionsByCategory } from "@/services/solutions";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

export const metadata = { title: "Categorias" };

export default function CategoriasPage() {
  return (
    <div className="space-y-4">
      <Breadcrumbs items={[{ label: "Início", href: "/" }, { label: "Categorias" }]} />
      <h1 className="text-2xl font-bold">Categorias</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {categories.map((c) => <CategoryCard key={c.slug} c={c} count={getSolutionsByCategory(c.slug).length} />)}
      </div>
    </div>
  );
}
