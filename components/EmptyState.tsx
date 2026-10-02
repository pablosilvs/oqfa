import Link from "next/link";

export function EmptyState({ title, description, actionHref, actionLabel }: { title: string; description: string; actionHref?: string; actionLabel?: string }) {
  return (
    <div className="rounded-xl border border-dashed border-[var(--card-border)] bg-[var(--card)] p-8 text-center">
      <p className="font-semibold">{title}</p>
      <p className="mt-1 text-sm text-slate-500">{description}</p>
      {actionHref && <Link href={actionHref} className="mt-4 inline-block rounded-lg bg-[#2563EB] px-4 py-2 text-sm text-white">{actionLabel ?? "Ver soluções"}</Link>}
    </div>
  );
}
