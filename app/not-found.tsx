import Link from "next/link";
import { SearchBar } from "@/components/search/SearchBar";
export default function NotFound() {
  return (
    <div className="space-y-4 text-center py-10">
      <h1 className="text-3xl font-bold">Essa página não existe ou mudou de endereço.</h1>
      <div className="mx-auto max-w-xl"><SearchBar /></div>
      <div className="flex justify-center gap-3 text-sm">
        <Link href="/" className="rounded-lg bg-[#2563EB] px-4 py-2 text-white">Ir para início</Link>
        <Link href="/categorias" className="rounded-lg border px-4 py-2">Categorias populares</Link>
      </div>
    </div>
  );
}
