import { DownloadCalculator, DataConverter, PowerCalculator } from "@/components/tools/calculators";
import { ExtensionChecker } from "@/components/tools/ExtensionChecker";
import { QrGenerator } from "@/components/tools/QrGenerator";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

export const metadata = { title: "Ferramentas gratuitas" };

export default function FerramentasPage() {
  return (
    <div className="space-y-4">
      <Breadcrumbs items={[{ label: "Início", href: "/" }, { label: "Ferramentas" }]} />
      <h1 className="text-2xl font-bold">Ferramentas gratuitas</h1>
      <p className="text-slate-500 text-sm">Tudo funciona no seu navegador. Nada é enviado para servidor.</p>
      <div className="grid gap-4 md:grid-cols-2">
        <section id="calculadora-download"><DownloadCalculator /></section>
        <section id="conversor-dados"><DataConverter /></section>
        <section id="verificador-extensao"><ExtensionChecker /></section>
        <section id="consumo-eletrico"><PowerCalculator /></section>
        <section id="qr-code" className="md:col-span-2"><QrGenerator /></section>
      </div>
    </div>
  );
}
