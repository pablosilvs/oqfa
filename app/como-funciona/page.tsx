import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
function P({ t, d }: { t: string; d: string }) { return (<div className="max-w-2xl space-y-2"><Breadcrumbs items={[{label:"Início",href:"/"},{label:t}]} /><h1 className="text-2xl font-bold">{t}</h1><p className="text-sm text-slate-500 whitespace-pre-line">{d}</p></div>); }
export const metadata = { title: "Como funciona" };
export default function Como() { return <P t="Como funciona" d={"1. Você descreve o problema.\n2. Mostramos o que fazer primeiro.\n3. Você segue etapas marcáveis.\nTudo grátis, sem login. Favoritos e histórico ficam no seu aparelho."} />; }
