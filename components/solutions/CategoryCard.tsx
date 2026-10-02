import Link from "next/link";
import Image from "next/image";
import type { Category } from "@/types";
import { Card } from "@/components/ui/basics";
import * as icons from "lucide-react";

export function CategoryCard({ c, count }: { c: Category; count?: number }) {
  const Icon = (icons as unknown as Record<string, React.ComponentType<{ size?: number }>>)[iconName(c.icon)] ?? icons.LayoutGrid;
  return (
    <Link
      href={`/${c.slug}`}
      aria-label={`Ver soluções de ${c.name}`}
      className="block min-w-0 cursor-pointer rounded-xl focus-visible:ring-2 focus-visible:ring-[#2563EB]"
    >
      <Card className="h-full p-3.5 transition-all hover:-translate-y-0.5 hover:border-[#2563EB]/50 hover:shadow-[0_6px_16px_rgba(37,99,235,0.10)] active:translate-y-0">
        {c.image && (
          <span className="relative mb-2 block h-24 w-full overflow-hidden rounded-lg bg-slate-100 sm:h-28 dark:bg-slate-800">
            <Image src={c.image} alt={c.imageAlt ?? c.name} fill sizes="300px" className="object-cover" loading="lazy" />
          </span>
        )}
        <span className="flex items-center gap-1.5 text-[14px] font-semibold"><Icon size={17} aria-hidden />{c.name}</span>
        <span className="mt-1 line-clamp-2 block text-[13px] leading-relaxed text-slate-500 dark:text-slate-400">{c.description}</span>
        {typeof count === "number" && <span className="mt-1.5 block text-xs text-slate-400 dark:text-slate-500">{count} soluções</span>}
      </Card>
    </Link>
  );
}

function iconName(icon: string): string {
  const map: Record<string, string> = {
    smartphone: "Smartphone", laptop: "Laptop", wifi: "Wifi", folder: "Folder",
    "credit-card": "CreditCard", package: "Package", home: "Home", car: "Car",
  };
  return map[icon] ?? "LayoutGrid";
}
