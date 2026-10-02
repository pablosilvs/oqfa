# Google Search Console — O Que Eu Faço Agora?

## 1. Adicionar o domínio
1. Acesse https://search.google.com/search-console
2. Clique em **Adicionar propriedade** → escolha **Prefixo do URL**
3. Informe o domínio final, ex.: `https://seudominio.com.br` (sem barra no fim)

## 2. Verificar a propriedade
Opções (use uma):
- **Meta tag HTML** (recomendado aqui): copie o código fornecido pelo Search Console
  (só o conteúdo de `content`, ex.: `abc123...`) e configure na Vercel:
  `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=abc123...`
  O layout injeta `<meta name="google-site-verification">` automaticamente
  somente quando a variável está preenchida. Sem valor, nada é renderizado.
- Ou **arquivo HTML / DNS** seguindo o painel do Search Console.

Faça rebuild/redeploy após salvar a variável e clique em **Verificar**.

## 3. Enviar o sitemap
1. No menu lateral: **Sitemaps**
2. Em "Adicionar novo sitemap", digite: `sitemap.xml`
3. URL completa esperada: `https://seudominio.com.br/sitemap.xml`
4. Aguarde o status "Êxito"

## 4. Conferir indexação
- Inspecione uma solução importante, ex.: `/celular/celular-caiu-na-agua`
- Confira `canonical`, título único e dados estruturados (BreadcrumbList + FAQ)
- Sitemap inclui: home, categorias, soluções, ferramentas, institucionais.
  Não inclui: `/buscar?q=...`, `/salvos` ou estados internos.

Nenhum código de verificação é versionado no repositório.
