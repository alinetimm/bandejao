import type { ContentImage, RichText } from "@/types";

// Textos e imagens da página Quem Somos (Figma: frame "Quem Somos" 113:262).

export type FotoSobre = ContentImage & {
  aspect: string; // largura/altura no Figma
  focus?: string; // object-position do recorte
};

const foto = (
  arquivo: string,
  alt: string,
  aspect: string,
  focus?: string,
): FotoSobre => ({
  src: `/assets/images/about/${arquivo}`,
  alt,
  aspect,
  focus,
});

export const sobrePagina = { titulo: "Quem Somos" };

export const historia = {
  titulo: "Nossa História:",
  paragrafos: [
    "O Bandejão Refeições nasceu em 1992 com uma missão clara: transformar a alimentação coletiva em uma experiência prática, saudável e de qualidade. Ao longo dessas décadas, nos tornamos referência no fornecimento de refeições para empresas, escolas, hospitais e eventos em toda a região do sul do Rio Grande do Sul.",
    "Crescemos mantendo um compromisso firme com a excelência em cada etapa: do planejamento ao prato servido. Hoje, com uma estrutura sólida, processos modernos e uma equipe altamente capacitada, seguimos inovando sem abrir mão daquilo que sempre nos guiou: o respeito ao cliente e o prazer em servir bem.",
  ],
  // Coluna da esquerda: 1 grande + 3 menores
  principal: foto(
    "historia-principal.jpg",
    "Funcionária de costas com camiseta Bandejão na cozinha",
    "582/300",
    "100% 22%",
  ),
  vertical: foto(
    "historia-buffet.jpg",
    "Balcão de buffet com cubas de comida",
    "215/283",
    "40% 0%",
  ),
  empilhadas: [
    foto(
      "historia-equipe.jpg",
      "Duas funcionárias de uniforme laranja trabalhando na cozinha",
      "346/176",
    ),
    foto(
      "historia-servindo.jpg",
      "Prato sendo servido no balcão do buffet",
      "346/85",
      "center 60%",
    ),
  ],
  // Coluna da direita, abaixo do texto
  direita: [
    {
      src: "/assets/images/services/delivery.jpg",
      alt: "Potes de marmita com arroz, linguiça e croquete",
      aspect: "497/323",
    },
    foto(
      "historia-frango.jpg",
      "Mão com luva montando bandeja de frango com pimentões",
      "497/243",
      "center 60%",
    ),
  ] satisfies FotoSobre[],
};

export const oQueFazemos = {
  titulo: "O Que Fazemos",
  intro:
    "Oferecemos soluções completas e personalizadas em alimentação coletiva, com serviços que incluem:",
  itens: [
    "Refeições corporativas para empresas de todos os tamanhos",
    "Buffet para eventos empresariais e sociais",
    "Cantinas escolares com foco em saúde e praticidade",
    "Refeições hospitalares adaptadas a cada tipo de dieta",
    "Delivery de marmitas para empresas e consumidores finais",
  ],
};

export const filosofia = {
  titulo: "Nossa Filosofia",
  lema: [
    { forte: "Alimentar é " },
    { forte: "cuidar", italico: true },
    ".",
  ] satisfies RichText,
  intro:
    "Por isso, trabalhamos com três pilares que sustentam todas as nossas ações:",
  pilares: [
    [
      { forte: "Qualidade:" },
      " ingredientes selecionados, cardápios balanceados e sabor em cada refeição.",
    ],
    [
      { forte: "Pontualidade:" },
      " respeito ao tempo do cliente com logística eficiente e transporte próprio.",
    ],
    [
      { forte: "Compromisso:" },
      " ser um parceiro confiável, que entende as necessidades de cada empresa ou instituição.",
    ],
  ] satisfies RichText[],
  fotos: [
    foto(
      "filosofia-montagem.jpg",
      "Funcionária montando marmitas no balcão",
      "274/408",
    ),
    foto(
      "filosofia-prato.jpg",
      "Prato com arroz e salada sendo servido",
      "286/408",
      "100% 89%",
    ),
  ],
};

export const diferencial = {
  titulo: "Nosso Diferencial",
  itens: [
    "Mais de 30 anos de atuação no setor de alimentação coletiva",
    "Atendimento personalizado com foco em cada cliente",
    "Cardápios elaborados por nutricionistas",
    "Estrutura moderna e equipe treinada",
    "Rigorosos padrões de higiene e segurança alimentar",
    "Frota própria com alvará de transporte",
    "Flexibilidade para atender diferentes formatos e demandas",
  ],
  // 1 vertical à esquerda + 2 empilhadas à direita
  vertical: foto(
    "diferencial-termometro.jpg",
    "Mão medindo temperatura com termômetro e prancheta de controle",
    "213/493",
    "86% 91%",
  ),
  empilhadas: [
    foto(
      "diferencial-molho.jpg",
      "Concha despejando molho sobre massa",
      "258/234",
    ),
    foto(
      "diferencial-pimentoes.jpg",
      "Funcionária com luva montando bandeja com pimentões",
      "258/239",
      "center 65%",
    ),
  ],
};

export const vamosConversar = {
  titulo: "Vamos conversar?",
  texto:
    "Se você busca uma empresa de refeições que entrega qualidade, sabor, pontualidade e atenção a cada detalhe, fale com o Bandejão. Estamos prontos para desenvolver a solução ideal para a sua necessidade.",
  // Rola até o formulário do rodapé
  botao: { texto: "solicite uma proposta", href: "#orcamento" },
};
