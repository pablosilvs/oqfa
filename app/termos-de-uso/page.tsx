import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
export const metadata = { title: "Termos de uso" };
export default function Page() {
  return (
    <div className="max-w-2xl space-y-3">
      <Breadcrumbs items={[{label:"Início",href:"/"},{label:"Termos"}]} />
      <h1 className="text-2xl font-bold">Termos de uso</h1>
      <div className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
        <p>Conteúdo educacional gratuito, sem garantia de resultado. Use com bom senso. Em eletricidade, gás, segurança e finanças, procure profissional e canais oficiais. Não prometemos estorno ou conserto.</p>
        <p>Recursos de medição e publicidade só existem quando configurados e consentidos; eles não alteram o conteúdo gratuito nem exigem pagamento.</p>
      </div>
    </div>
  );
}
