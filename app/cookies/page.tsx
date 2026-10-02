import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
export const metadata = { title: "Cookies" };
export default function Page() {
  return (
    <div className="max-w-2xl space-y-3">
      <Breadcrumbs items={[{label:"Início",href:"/"},{label:"Cookies"}]} />
      <h1 className="text-2xl font-bold">Cookies</h1>
      <div className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
        <p>O essencial (tema, salvos, histórico e sua escolha de consentimento) fica guardado no seu aparelho. Isso não é rastreamento.</p>
        <p>Se você clicar em <strong>Aceitar</strong> e se estiverem configurados, aí sim poderão ser carregados cookies de medição (Google Analytics) e de publicidade (Google AdSense). Com <strong>Somente necessários</strong>, esses scripts opcionais nunca são iniciados.</p>
        <p>Você pode mudar de ideia limpando os dados do site no navegador — o banner volta a aparecer.</p>
      </div>
    </div>
  );
}
