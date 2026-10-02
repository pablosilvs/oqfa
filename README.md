# O Que Eu Faço Agora? (OQFA)

Portal brasileiro gratuito: conte o problema, veja o que fazer primeiro.

## Stack
Next.js 16 (App Router), TypeScript, React, Tailwind CSS v4, Lucide, Zod (pronto), ESLint, Prettier.

## Como rodar
```bash
npm install
npm run dev
npm run build
npm run lint
npm run typecheck
```

## Estrutura
- `app/` rotas (home, buscar, categorias, [category], [category]/[slug], ferramentas, salvos, mais-procurados, institucionais)
- `components/` layout, search, solutions, diagnostics, tools, ui
- `data/` categories, solutions-*, tools, extensions
- `services/solutions.ts` abstração (trocar por Supabase depois)
- `lib/` search, storage, analytics, seo, pexels, utils
- `types/` Solution, Category, Diagnostic
- `scripts/fetch-pexels-images.mjs` busca server-side com PEXELS_API_KEY
- `docs/supabase-future.md` plano futuro

## Imagens
Pexels via URLs estáticas `images.pexels.com` (sem key no frontend). Para atualizar:
```bash
PEXELS_API_KEY=... node scripts/fetch-pexels-images.mjs "wifi router"
```
Troque `image` em `data/*`.

## Variáveis (.env.example)
```
NEXT_PUBLIC_SITE_URL=http://localhost:3000
# NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=
# NEXT_PUBLIC_GA_ID=
# NEXT_PUBLIC_ADSENSE_CLIENT_ID=
# PEXELS_API_KEY= (só servidor/scripts)
```
Sem valores reais no repositório. `PEXELS_API_KEY` nunca usa prefixo `NEXT_PUBLIC_`.

## Adicionar solução
1. Crie objeto `Solution` em `data/solutions-<cat>.ts`.
2. `relatedSolutions` com slugs existentes.
3. Rode build para gerar rota `/<cat>/<slug>` automaticamente.

## Adicionar categoria
1. `data/categories.ts` + soluções com `categorySlug` igual.
2. Rota `/slug` é automática via `app/[category]`.

## Adicionar ferramenta
1. `data/tools.ts` + componente em `components/tools/` + seção em `app/ferramentas/page.tsx`.

## Publicar na Vercel
- Push no GitHub, Import na Vercel, `NEXT_PUBLIC_SITE_URL=https://seu-dominio` (sem barra final).
- Build: `next build`. Sem banco necessário.

## Publicação (produção, Search Console, Analytics, AdSense)
1. `npm install` → `npm run build` precisa passar com 0 erros.
2. Na Vercel, configure as variáveis conforme `.env.example`:
   - `NEXT_PUBLIC_SITE_URL` — domínio final (ex.: `https://seudominio.com.br`).
   - `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` — só o conteúdo da meta tag (opcional).
   - `NEXT_PUBLIC_GA_ID` — `G-...` (opcional; sem valor, nada carrega).
   - `NEXT_PUBLIC_ADSENSE_CLIENT_ID` — `ca-pub-...` (opcional; sem valor, nada carrega).
3. Redeploy a cada mudança de variável `NEXT_PUBLIC_*` (injetada no build).
4. Search Console: ver `docs/google-search-console.md`. Envie `sitemap.xml`.
5. Confira `/sitemap.xml`, `/robots.txt` e `/ads.txt` no domínio final.
6. Analytics/AdSense: ver `docs/analytics-adsense.md`. Ambos respeitam o banner
   de cookies — com "Somente necessários", nenhum script opcional inicia.

## Futuro
- `/api/assistant` (Groq): classificar categoria e sugerir conteúdos existentes, sem inventar procedimento perigoso. Não implementado.
- Supabase: ver `docs/supabase-future.md`.
