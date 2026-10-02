// Imagens via Pexels.
// Estratégia:
// - O frontend usa apenas URLs estáticas https://images.pexels.com (sem API key).
// - Este helper roda apenas no servidor / scripts (node) para buscar novas fotos
//   usando PEXELS_API_KEY do .env e sugerir URLs para data/*.
// Nunca importe este arquivo em Client Components.
//
// Uso manual:
//   PEXELS_API_KEY=... node scripts/fetch-pexels-images.mjs "celular na água"
//
// Documentação: https://www.pexels.com/api/documentation/

export const PEXELS_CURATED_IMAGES: Record<string, { url: string; alt: string }> = {
  celular: {
    url: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Pessoa segurando celular",
  },
  computador: {
    url: "https://images.pexels.com/photos/2058128/pexels-photo-2058128.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Notebook aberto em mesa",
  },
  internet: {
    url: "https://images.pexels.com/photos/159304/network-cable-ethernet-computer-159304.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Cabos de rede",
  },
  pagamentos: {
    url: "https://images.pexels.com/photos/6608880/pexels-photo-6608880.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Pagamento com celular",
  },
  casa: {
    url: "https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Interior de casa",
  },
};

export function pexelsAttribution(photo: { photographer?: string; photographerUrl?: string }): string {
  if (!photo.photographer) return "Foto: Pexels";
  return `Foto: ${photo.photographer} / Pexels`;
}
