import Link from "next/link";
import type { Solution } from "@/types";
import { SolutionCard } from "./SolutionCard";

export function RelatedSolutions({ items }: { items: Solution[] }) {
  if (!items.length) return null;
  return (
    <section aria-labelledby="relacionados">
      <h2 id="relacionados" className="text-xl font-bold">Talvez você também precise</h2>
      <div className="mt-3 grid gap-4 md:grid-cols-3">
        {items.map((s) => <SolutionCard key={s.slug} s={s} />)}
      </div>
      <p className="mt-3 text-sm"><Link href="/buscar" className="text-[#2563EB] underline">Buscar outra solução</Link></p>
    </section>
  );
}
