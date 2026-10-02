# Analytics e AdSense — como habilitar

Tudo é opcional. Sem variáveis configuradas E sem consentimento "Aceitar",
nenhum script de terceiro é carregado e nenhum anúncio é renderizado.

## Google Analytics 4
1. Crie a propriedade e obtenha o ID `G-XXXXXXXXXX`
2. Na Vercel: `NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX`
3. Redeploy. O script `gtag.js` carrega com `afterInteractive` uma única vez
   (componente `GoogleAnalytics` no layout), somente após o usuário clicar
   em **Aceitar** no banner de cookies.
4. Eventos internos (`trackEvent`) enviam `gtag('event', ...)` quando o
   `gtag` existe; sem GA, viram no-op e nada quebra.

## Google AdSense
1. Crie a conta e obtenha o client `ca-pub-XXXXXXXXXXXXXXXX`
2. Na Vercel: `NEXT_PUBLIC_ADSENSE_CLIENT_ID=ca-pub-XXXXXXXXXXXXXXXX`
3. Redeploy. O script oficial carrega globalmente uma única vez
   (`AdSenseScript`), somente após **Aceitar** nos cookies.
4. Blocos `AdSlot(slot="...")` renderizam `<ins class="adsbygoogle">`
   somente com client válido + consentimento. Sem isso, retornam `null`
   (sem caixa falsa, sem layout shift).
5. Para usar slots reais, informe o `data-ad-slot` de cada bloco criado
   no painel do AdSense.

## ads.txt
- Rota `/ads.txt` já existe (`app/ads.txt/route.ts`).
- Sem Publisher ID, ela retorna apenas comentários de orientação.
- Quando o AdSense fornecer sua linha, edite o route para retornar:
  `google.com, pub-XXXXXXXXXXXXXXXX, DIRECT, f08c47fec0942fa0`
- Verifique em `https://seudominio.com.br/ads.txt`.
