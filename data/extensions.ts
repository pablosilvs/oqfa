export interface ExtInfo {
  ext: string;
  name: string;
  type: string;
  description: string;
  programs: string[];
  care: string;
}

export const extensions: ExtInfo[] = [
  { ext: "pdf", name: "PDF", type: "Documento", description: "Documento portátil que mantém formatação. Abre no navegador.", programs: ["Chrome", "Edge", "Adobe Reader"], care: "Desconfie se pedir macro ou programa pago." },
  { ext: "zip", name: "ZIP", type: "Compactado", description: "Pasta compactada. Windows extrai com botão direito > Extrair tudo.", programs: ["Windows", "7-Zip"], care: "Baixe de novo se der erro; passe antivírus." },
  { ext: "rar", name: "RAR", type: "Compactado", description: "Como ZIP, precisa de extrator. Use programa conhecido.", programs: ["7-Zip", "WinRAR"], care: "Baixe só da loja oficial." },
  { ext: "docx", name: "Word", type: "Documento", description: "Texto do Word. Abre no Google Docs sem Office.", programs: ["Word", "Google Docs"], care: "Não ative macro de desconhecido." },
  { ext: "xlsx", name: "Excel", type: "Planilha", description: "Planilha. Abre no Google Planilhas.", programs: ["Excel", "Google Planilhas"], care: "Macro pode ser golpe." },
  { ext: "pptx", name: "PowerPoint", type: "Apresentação", description: "Slides. Abre no Google Apresentações.", programs: ["PowerPoint", "Google Apresentações"], care: "Cuidado com arquivo de e-mail estranho." },
  { ext: "jpg", name: "JPEG", type: "Imagem", description: "Foto comum, leve. Abre em tudo.", programs: ["Galeria", "Navegador"], care: "Qualidade cai se salvar muitas vezes." },
  { ext: "jpeg", name: "JPEG", type: "Imagem", description: "Mesmo que JPG.", programs: ["Galeria", "Navegador"], care: "Mesmo cuidado do JPG." },
  { ext: "png", name: "PNG", type: "Imagem", description: "Imagem com fundo transparente. Maior que JPG.", programs: ["Galeria", "Navegador"], care: "Ótimo para print e logo." },
  { ext: "webp", name: "WebP", type: "Imagem", description: "Imagem moderna e leve da web.", programs: ["Chrome", "Galeria recente"], care: "Se não abrir, converta para JPG." },
  { ext: "heic", name: "HEIC", type: "Imagem iPhone", description: "Foto de iPhone econômica. No Windows precisa extensão HEIF.", programs: ["Fotos iPhone", "Google Drive"], care: "Peça em JPG se não abrir." },
  { ext: "mp4", name: "MP4", type: "Vídeo", description: "Vídeo mais compatível.", programs: ["VLC", "Navegador"], care: "Se travar, teste no VLC." },
  { ext: "mov", name: "MOV", type: "Vídeo Apple", description: "Vídeo de iPhone/Mac.", programs: ["VLC", "QuickTime"], care: "Converta se não abrir no Windows." },
  { ext: "mkv", name: "MKV", type: "Vídeo", description: "Vídeo com várias faixas. Use VLC.", programs: ["VLC"], care: "Pesado; teste com player atualizado." },
  { ext: "exe", name: "Executável", type: "Programa Windows", description: "Instala programa. Só rode de fonte confiável.", programs: ["Windows"], care: "Nunca rode exe de desconhecido. Pode ser vírus." },
  { ext: "apk", name: "APK", type: "App Android", description: "Instalador Android fora da loja.", programs: ["Android"], care: "Só Play Store ou site oficial. Risco alto." },
  { ext: "iso", name: "ISO", type: "Imagem de disco", description: "Cópia de CD/sistema. Windows monta com duplo clique.", programs: ["Windows"], care: "Baixe só do site oficial." },
  { ext: "csv", name: "CSV", type: "Planilha texto", description: "Dados separados por vírgula. Abre no Excel.", programs: ["Excel", "Google Planilhas"], care: "Confira separador e acentos." },
  { ext: "json", name: "JSON", type: "Dados", description: "Dados para sistemas. Abre no bloco de notas.", programs: ["VS Code", "Bloco de notas"], care: "Não execute se vier como programa." },
  { ext: "xml", name: "XML", type: "Dados/NFe", description: "Dados estruturados, comum em nota fiscal.", programs: ["Navegador", "Excel"], care: "Guarde para contabilidade." },
];
