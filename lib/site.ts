export const siteConfig = {
  name: "O Que Eu Faço Agora?",
  shortName: "OQFA",
  tagline: "Conte o problema. Nós mostramos o que fazer primeiro.",
  description:
    "Portal brasileiro gratuito que mostra o que fazer primeiro quando algo dá errado: celular, computador, internet, Pix, encomendas e casa.",
  baseUrl: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
};

export function absoluteUrl(path: string): string {
  const base = siteConfig.baseUrl.replace(/\/$/, "");
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${base}${p}`;
}
