import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
export const metadata = { title: "Política editorial" };
export default function Page() {
  return (<div className="max-w-2xl space-y-2"><Breadcrumbs items={[{label:"Início",href:"/"},{label:"Política editorial"}]} /><h1 className="text-2xl font-bold">Política editorial</h1><div className="text-sm text-slate-500 space-y-2"><p>Objetivo educacional em linguagem simples, revisão periódica e segurança primeiro.</p><p>Não ensinamos procedimentos perigosos. Quando há risco, orientamos parar e procurar profissional.</p><p>Sem garantia de resultado e sem promessa de estorno. Conteúdo original, sem cópia.</p></div></div>);
}
