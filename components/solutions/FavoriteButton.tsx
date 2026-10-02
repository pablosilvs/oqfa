"use client";
import { useEffect, useState } from "react";
import { Bookmark, BookmarkCheck } from "lucide-react";
import { getLocalStorage, setLocalStorage, getFavoritesKey } from "@/lib/storage";
import { trackEvent } from "@/lib/analytics";

export function FavoriteButton({ slug }: { slug: string }) {
  const [fav, setFav] = useState(false);
  useEffect(() => {
    setFav(getLocalStorage<string[]>(getFavoritesKey(), []).includes(slug));
  }, [slug]);
  const toggle = () => {
    const list = getLocalStorage<string[]>(getFavoritesKey(), []);
    const n = list.includes(slug) ? list.filter((x) => x !== slug) : [...list, slug];
    setLocalStorage(getFavoritesKey(), n);
    setFav(n.includes(slug));
    if (n.includes(slug)) trackEvent("solution_saved", { slug });
  };
  return (
    <button onClick={toggle} aria-pressed={fav} aria-label={fav ? "Remover dos salvos" : "Salvar solução"} className="inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-sm font-semibold hover:border-[#2563EB] hover:text-[#2563EB]">
      {fav ? <BookmarkCheck size={18} /> : <Bookmark size={18} />}
      {fav ? "Salvo" : "Salvar"}
    </button>
  );
}
