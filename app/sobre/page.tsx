import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
export const metadata = { title: "Sobre" };
export default function Sobre() {
  return (<div className="space-y-3 max-w-2xl"><Breadcrumbs items={[{label:"Início",href:"/"},{label:"Sobre"}]} /><h1 className="text-2xl font-bold">Sobre</h1><p className="text-sm text-slate-500">O Que Eu Faço Agora? é um portal brasileiro gratuito que mostra o primeiro passo para resolver problemas cotidianos: celular, computador, internet, arquivos, pagamentos, compras e casa.</p><p className="text-sm text-slate-500">Criamos conteúdo original em linguagem simples, com foco em segurança. Não pedimos login e não vendemos nada nesta versão.</p></div>);
}
