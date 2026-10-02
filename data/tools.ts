export interface ToolMeta {
  slug: string;
  name: string;
  description: string;
  icon: string;
}

export const tools: ToolMeta[] = [
  { slug: "calculadora-download", name: "Calculadora de download", description: "Descubra quanto tempo leva para baixar um arquivo na sua velocidade.", icon: "download" },
  { slug: "conversor-dados", name: "Conversor de dados", description: "Converta KB, MB, GB e TB rapidinho.", icon: "calculator" },
  { slug: "verificador-extensao", name: "Verificador de extensão", description: "Descubra o que é .pdf, .zip, .heic e como abrir.", icon: "file" },
  { slug: "consumo-eletrico", name: "Calculadora de consumo elétrico", description: "Estime kWh/mês e custo da conta de luz.", icon: "zap" },
  { slug: "qr-code", name: "Gerador de QR Code", description: "Crie QR para link, texto, telefone ou WhatsApp. Tudo no seu navegador.", icon: "qr" },
];
