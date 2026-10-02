// /ads.txt — autorização de vendedores de anúncios.
// Sem Publisher ID real, retornamos orientação em comentário (não inventar ID).
// Quando o AdSense fornecer sua linha, substitua o corpo abaixo por algo como:
// google.com, pub-XXXXXXXXXXXXXXXX, DIRECT, f08c47fec0942fa0
export function GET(): Response {
  const body = [
    "# ads.txt — O Que Eu Faço Agora?",
    "# Nenhum Publisher ID configurado ainda.",
    "# Quando o Google AdSense fornecer sua linha, coloque-a aqui.",
    "# Formato esperado: google.com, pub-XXXXXXXXXXXXXXXX, DIRECT, f08c47fec0942fa0",
  ].join("\n");
  return new Response(body + "\n", {
    headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "public, max-age=86400" },
  });
}
