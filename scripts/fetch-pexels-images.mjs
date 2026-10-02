import "dotenv/config";
import { createClient } from "pexels";

// Script utilitário (node): busca foto no Pexels e imprime URL + fotógrafo.
// Uso: npm run pexels -- "wifi router"
// Nunca rode no browser. Requer PEXELS_API_KEY no .env.
async function main() {
  const query = process.argv.slice(2).join(" ") || "smartphone help";
  const key = process.env.PEXELS_API_KEY;
  if (!key) {
    console.error("PEXELS_API_KEY ausente no .env");
    process.exit(1);
  }
  const client = createClient(key);
  const res = await client.photos.search({ query, per_page: 3 });
  if (!res || typeof res === "string" || !("photos" in res)) {
    console.error("Resposta inesperada", res);
    process.exit(1);
  }
  for (const p of res.photos ?? []) {
    console.log(`${p.src.medium} | ${p.photographer} | ${p.url}`);
  }
}

main();
