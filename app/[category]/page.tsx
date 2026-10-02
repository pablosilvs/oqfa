import { notFound } from "next/navigation";
import Image from "next/image";
import type { Metadata } from "next";
import { getCategoryBySlug } from "@/data/categories";
import { getSolutionsByCategory, getPopularSolutions } from "@/services/solutions";
import { SolutionCard } from "@/components/solutions/SolutionCard";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { absoluteUrl } from "@/lib/site";

export async function generateStaticParams() {
  const { categories } = await import("@/data/categories");
  return categories.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }): Promise<Metadata> {
  const { category } = await params;
  const cat = getCategoryBySlug(category);
  if (!cat) return { title: "Categoria não encontrada", robots: { index: false, follow: true } };
  const url = absoluteUrl(`/${cat.slug}`);
  const title = `${cat.name} — o que fazer`;
  return {
    title,
    description: cat.description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      title,
      description: cat.description,
      images: cat.image ? [{ url: cat.image }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: cat.description,
      images: cat.image ? [cat.image] : undefined,
    },
  };
}

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  const cat = getCategoryBySlug(category);
  if (!cat) notFound();
  const list = getSolutionsByCategory(category);
  const popular = getPopularSolutions(3).filter((s) => s.categorySlug === category);
  return (
    <div className="space-y-6">
      <Breadcrumbs items={[{ label: "Início", href: "/" }, { label: cat.name }]} />
      {cat.image && (
        <span className="relative block h-48 w-full overflow-hidden rounded-2xl">
          <Image src={cat.image} alt={cat.imageAlt ?? cat.name} fill className="object-cover" priority={false} />
        </span>
      )}
      <div>
        <h1 className="text-3xl font-bold">{cat.name}</h1>
        <p className="text-slate-500">{cat.description} — {list.length} soluções.</p>
        <p className="text-xs text-slate-400 mt-1">Foto: Pexels</p>
      </div>
      {popular.length > 0 && (
        <section><h2 className="font-bold">Populares em {cat.name}</h2>
          <div className="mt-2 grid md:grid-cols-3 gap-4">{popular.map((s) => <SolutionCard key={s.slug} s={s} />)}</div>
        </section>
      )}
      <section><h2 className="font-bold">Todas as soluções</h2>
        <div className="mt-2 grid md:grid-cols-3 gap-4">{list.map((s) => <SolutionCard key={s.slug} s={s} />)}</div>
      </section>
    </div>
  );
}
