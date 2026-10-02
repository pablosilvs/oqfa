import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
export const metadata = { title: "Política de privacidade" };
export default function Page() {
  return (
    <div className="max-w-2xl space-y-3">
      <Breadcrumbs items={[{label:"Início",href:"/"},{label:"Privacidade"}]} />
      <h1 className="text-2xl font-bold">Política de privacidade</h1>
      <div className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
        <p>Não coletamos dados pessoais nem exigimos login. Tema, favoritos, histórico, checklist e feedback ficam no seu navegador (localStorage). Ferramentas rodam localmente, sem enviar seus dados.</p>
        <p>Quando habilitados via configuração e com o seu consentimento no banner de cookies, podemos carregar Google Analytics (medição anônima) e Google AdSense (anúncios). Sem configuração e sem o seu aceite, nada disso é carregado.</p>
        <p>Somos um projeto independente, sem empresa registrada, CNPJ ou endereço físico a declarar.</p>
      </div>
    </div>
  );
}
