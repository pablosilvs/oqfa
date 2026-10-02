import { notFound } from "next/navigation";
import Image from "next/image";
import type { Metadata } from "next";
import { getSolutionBySlug, getRelatedSolutions } from "@/services/solutions";
import { getCategoryBySlug } from "@/data/categories";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Badge } from "@/components/ui/basics";
import { FirstActionsCard, AvoidActionsCard, SafetyBlock } from "@/components/solutions/ActionCards";
import { SolutionSteps } from "@/components/solutions/SolutionSteps";
import { DiagnosticFlow } from "@/components/diagnostics/DiagnosticFlow";
import { RelatedSolutions } from "@/components/solutions/RelatedSolutions";
import { FavoriteButton } from "@/components/solutions/FavoriteButton";
import { FeedbackWidget } from "@/components/solutions/FeedbackWidget";
import { HistoryTracker } from "@/components/solutions/RecentSolutions";
import { AdSlot } from "@/components/AdSlot";
import { solutionMetadata, breadcrumbJsonLd, faqJsonLd } from "@/lib/seo";
import { absoluteUrl } from "@/lib/site";

export async function generateStaticParams() {
  const { solutions } = await import("@/data/solutions");
  return solutions.map((s) => ({ category: s.categorySlug, slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ category: string; slug: string }> }): Promise<Metadata> {
  const { category, slug } = await params;
  const s = getSolutionBySlug(category, slug);
  if (!s) return { title: "Não encontrado" };
  return solutionMetadata({ title: s.title, description: s.excerpt, path: `/${s.categorySlug}/${s.slug}`, image: s.image });
}

const diffLabel: Record<string, string> = { "muito-facil": "Muito fácil", facil: "Fácil", medio: "Médio", avancado: "Avançado" };

export default async function SolutionPage({ params }: { params: Promise<{ category: string; slug: string }> }) {
  const { category, slug } = await params;
  const s = getSolutionBySlug(category, slug);
  if (!s) notFound();
  const cat = getCategoryBySlug(s.categorySlug);
  const related = getRelatedSolutions(s.slug, 3);
  const crumbs = breadcrumbJsonLd([
    { name: "Início", url: absoluteUrl("/") },
    { name: cat?.name ?? s.categorySlug, url: absoluteUrl(`/${s.categorySlug}`) },
    { name: s.title, url: absoluteUrl(`/${s.categorySlug}/${s.slug}`) },
  ]);
  return (
    <article className="space-y-6">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbs) }} />
      {s.faq && s.faq.length > 0 && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(s.faq)) }} />
      )}
      <HistoryTracker slug={s.slug} />
      <Breadcrumbs items={[{ label: "Início", href: "/" }, { label: cat?.name ?? s.categorySlug, href: `/${s.categorySlug}` }, { label: s.shortTitle ?? s.title }]} />
      <div>
        <Badge tone="gray">{cat?.name}</Badge>
        <h1 className="mt-2 text-2xl font-extrabold tracking-tight md:text-[1.75rem]">{s.title}</h1>
        <p className="mt-1.5 text-[15px] text-slate-500 dark:text-slate-400">{s.description}</p>
        <div className="mt-3 flex flex-wrap items-center gap-2 text-sm">
          <Badge tone="blue">⏱ {s.estimatedTime}</Badge>
          <Badge tone="gray">{diffLabel[s.difficulty]}</Badge>
          <Badge tone={s.riskLevel === "alto" ? "red" : s.riskLevel === "moderado" ? "yellow" : "green"}>Risco {s.riskLevel}</Badge>
          <FavoriteButton slug={s.slug} />
        </div>
      </div>
      {s.image && (
        <figure>
          <span className="relative block h-56 md:h-80 w-full overflow-hidden rounded-2xl">
            <Image src={s.image} alt={s.imageAlt ?? s.title} fill className="object-cover" priority sizes="100vw" />
          </span>
          <figcaption className="mt-1 text-xs text-slate-400">Foto: {s.photographer ?? "Pexels"} / Pexels — ilustrativa.</figcaption>
        </figure>
      )}
      <FirstActionsCard items={s.firstActions} />
      <AdSlot slot="intro" />
      {s.avoidActions && s.avoidActions.length > 0 && <AvoidActionsCard items={s.avoidActions} />}
      {s.diagnostics && s.diagnosticEntryId && <DiagnosticFlow nodes={s.diagnostics} entryId={s.diagnosticEntryId} />}
      <SolutionSteps slug={s.slug} steps={s.steps} />
      <AdSlot slot="mid" />
      <section aria-labelledby="ainda-nao" className="rounded-2xl border p-4 bg-[var(--card)]">
        <h2 id="ainda-nao" className="font-bold text-lg">Se ainda não resolveu</h2>
        <ul className="mt-1 list-disc pl-5 text-sm text-slate-500 space-y-1">
          <li>Repita o primeiro bloco com calma, sem pular etapas.</li>
          <li>Teste em outro aparelho, cabo ou rede para isolar o defeito.</li>
          <li>Guarde fotos, comprovantes e protocolos para o atendimento.</li>
          <li>Veja as soluções relacionadas abaixo.</li>
        </ul>
      </section>
      {s.warnings && s.warnings.length > 0 && (
        <section aria-label="Avisos" className="rounded-2xl border border-yellow-300 bg-yellow-50 dark:bg-yellow-950 p-4">
          <h2 className="font-bold">Avisos importantes</h2>
          {s.warnings.map((w) => <p key={w.id} className="mt-1 text-sm"><strong>{w.title}:</strong> {w.description}</p>)}
        </section>
      )}
      <SafetyBlock />
      {s.faq && s.faq.length > 0 && (
        <section aria-labelledby="faq"><h2 id="faq" className="font-bold text-lg">Dúvidas comuns</h2>
          <div className="mt-2 space-y-2">{s.faq.map((f, i) => <details key={i} className="rounded-xl border p-3 bg-[var(--card)]"><summary className="cursor-pointer font-semibold text-sm">{f.question}</summary><p className="mt-1 text-sm text-slate-500">{f.answer}</p></details>)}</div>
        </section>
      )}
      <RelatedSolutions items={related} />
      <FeedbackWidget slug={s.slug} />
      <p className="text-xs text-slate-400">Atualizado em {s.updatedAt}. Conteúdo educacional, sem garantia. Em risco, procure profissional.</p>
    </article>
  );
}
