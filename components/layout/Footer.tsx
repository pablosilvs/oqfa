import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-[var(--card-border)] bg-[var(--card)] pb-20 md:pb-8">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-4 text-sm">
        <div>
          <p className="font-bold">O Que Eu Faço Agora?</p>
          <p className="mt-2 text-slate-500">Portal gratuito com o primeiro passo para resolver problemas do dia a dia.</p>
        </div>
        <div>
          <p className="font-semibold mb-2">Explorar</p>
          <ul className="space-y-1 text-slate-600 dark:text-slate-300">
            <li><Link href="/buscar">Soluções</Link></li>
            <li><Link href="/categorias">Categorias</Link></li>
            <li><Link href="/ferramentas">Ferramentas</Link></li>
            <li><Link href="/mais-procurados">Mais procurados</Link></li>
          </ul>
        </div>
        <div>
          <p className="font-semibold mb-2">Ajuda</p>
          <ul className="space-y-1 text-slate-600 dark:text-slate-300">
            <li><Link href="/como-funciona">Como funciona</Link></li>
            <li><Link href="/sobre">Sobre</Link></li>
            <li><Link href="/contato">Contato</Link></li>
            <li><Link href="/salvos">Salvos</Link></li>
          </ul>
        </div>
        <div>
          <p className="font-semibold mb-2">Legal</p>
          <ul className="space-y-1 text-slate-600 dark:text-slate-300">
            <li><Link href="/politica-de-privacidade">Privacidade</Link></li>
            <li><Link href="/termos-de-uso">Termos</Link></li>
            <li><Link href="/cookies">Cookies</Link></li>
            <li><Link href="/politica-editorial">Política editorial</Link></li>
          </ul>
        </div>
      </div>
      <p className="text-center text-xs text-slate-400 pb-4">Conteúdo educacional. Sem garantia de resultado. Em risco, procure profissional.</p>
    </footer>
  );
}
