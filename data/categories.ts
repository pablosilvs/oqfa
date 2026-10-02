import type { Category } from "@/types";

// Imagens: Pexels (images.pexels.com) — URLs estáticas, sem API key no frontend.
// Fotógrafos creditados quando conhecido. Ver lib/pexels.ts para atualização via API no servidor.
export const categories: Category[] = [
  {
    id: "cat-celular",
    slug: "celular",
    name: "Celular",
    description: "Problemas com Android e iPhone: bateria, tela, água, travamentos e conexão.",
    icon: "smartphone",
    image: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=800",
    imageAlt: "Pessoa segurando celular",
    group: "Tecnologia",
  },
  {
    id: "cat-computador",
    slug: "computador",
    name: "Computador",
    description: "PC e notebook que não liga, lento, esquentando ou sem internet.",
    icon: "laptop",
    image: "https://images.pexels.com/photos/2058128/pexels-photo-2058128.jpeg?auto=compress&cs=tinysrgb&w=800",
    imageAlt: "Notebook aberto em mesa",
    group: "Tecnologia",
  },
  {
    id: "cat-internet",
    slug: "internet",
    name: "Internet",
    description: "Wi-Fi lento, caindo ou sem conexão no roteador e nos aparelhos.",
    icon: "wifi",
    image: "https://images.pexels.com/photos/159304/network-cable-ethernet-computer-159304.jpeg?auto=compress&cs=tinysrgb&w=800",
    imageAlt: "Cabos de rede e roteador",
    group: "Tecnologia",
  },
  {
    id: "cat-arquivos",
    slug: "arquivos",
    name: "Arquivos",
    description: "ZIP, PDF, pendrive e extensões desconhecidas: abrir e recuperar.",
    icon: "folder",
    image: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=800",
    imageAlt: "Pastas e documentos digitais",
    group: "Tecnologia",
  },
  {
    id: "cat-pagamentos",
    slug: "pagamentos",
    name: "Pagamentos",
    description: "Pix, cartão e cobranças: o que conferir antes de falar com o banco.",
    icon: "credit-card",
    image: "https://images.pexels.com/photos/6608880/pexels-photo-6608880.jpeg?auto=compress&cs=tinysrgb&w=800",
    imageAlt: "Pagamento por aproximação com celular",
    group: "Dinheiro",
  },
  {
    id: "cat-compras",
    slug: "compras",
    name: "Compras",
    description: "Encomenda atrasada, produto errado ou com defeito e rastreio parado.",
    icon: "package",
    image: "https://images.pexels.com/photos/6169056/pexels-photo-6169056.jpeg?auto=compress&cs=tinysrgb&w=800",
    imageAlt: "Caixas de entrega",
    group: "Dinheiro",
  },
  {
    id: "cat-casa",
    slug: "casa",
    name: "Casa",
    description: "Chuveiro, geladeira, tomada e lâmpada: verificações seguras iniciais.",
    icon: "home",
    image: "https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=800",
    imageAlt: "Interior de casa moderna",
    group: "Casa",
  },
  {
    id: "cat-veiculos",
    slug: "veiculos",
    name: "Veículos",
    description: "Noções iniciais seguras: bateria, painel e quando chamar ajuda.",
    icon: "car",
    image: "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=800",
    imageAlt: "Carro em estrada",
    group: "Casa",
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
