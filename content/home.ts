import type { ContentImage, RichText } from "@/types";

// Textos e imagens da Home (Figma: frame "Home" 72:80). Ordem = ordem das seções.

export type ServicoCard = {
  id: "empresas" | "hospitalares" | "delivery" | "cantinas" | "buffet";
  nome: string;
  image: ContentImage;
};

export const hero = {
  logo: {
    src: "/assets/brand/logo-hero.svg",
    alt: "Bandejão Refeições",
    width: 463,
    height: 182,
  },
  image: {
    src: "/assets/images/home/hero.jpg",
    alt: "Mãos cortando abobrinha em uma tábua",
  } satisfies ContentImage,
};

export const servicos = {
  titulo: ["Nossos", "Serviços"] as const,
  texto: [
    "Servimos refeições saborosas há mais de ",
    { forte: "30 anos" },
    ".\nclique na imagem para saber mais.",
  ] satisfies RichText,
  // Clicar no card leva para /services#<id>
  itens: [
    {
      id: "empresas",
      nome: "Refeições para Empresas",
      image: {
        src: "/assets/images/services/empresas.jpg",
        alt: "Buffet com cubas de massa, carne e legumes",
      },
    },
    {
      id: "hospitalares",
      nome: "Refeições Hospitalares",
      image: {
        src: "/assets/images/services/hospitalares.jpg",
        alt: "Marmitas descartáveis empilhadas",
      },
    },
    {
      id: "delivery",
      nome: "Delivery de Marmitas",
      image: {
        src: "/assets/images/services/delivery.jpg",
        alt: "Potes com arroz, feijão e acompanhamentos",
      },
    },
    {
      id: "cantinas",
      nome: "Cantinas Escolares",
      image: {
        src: "/assets/images/services/cantinas.jpg",
        alt: "Marmitas com divisórias, arroz e acompanhamentos",
      },
    },
    {
      id: "buffet",
      nome: "Buffet Corporativo e Eventos",
      image: {
        src: "/assets/images/services/buffet.jpg",
        alt: "Rechauds de buffet com carnes e acompanhamentos",
      },
    },
  ] satisfies ServicoCard[],
};

export const preparo = {
  linha1: "SABOR NO PREPARO",
  linha2: "EXCELÊNCIA AO SERVIR",
  image: {
    src: "/assets/images/home/preparo.jpg",
    alt: "Panela grande sendo mexida com colher de madeira na cozinha",
  } satisfies ContentImage,
};

export const conheca = {
  titulo: ["Conheça o", "Bandejão"] as const,
  paragrafos: [
    "Desde 1992, o Bandejão Refeições se dedica a fornecer alimentação de qualidade para empresas e instituições. Nossa missão é oferecer refeições equilibradas, preparadas com ingredientes selecionados e seguindo os mais altos padrões de higiene e segurança alimentar.",
    "Pelas mãos de Bruna Peter e Marcelo Oxley, o Bandejão atende dezenas de empresas e serve mais de 1000 refeições diariamente.",
  ],
  image: {
    src: "/assets/images/home/conheca-bandejao.jpg",
    alt: "Funcionária de costas com camiseta Bandejão, com o letreiro da marca ao fundo",
  } satisfies ContentImage,
};

export const refeicoes = {
  titulo: "Refeições industriais",
  subtitulo: "preparadas para sentir o sabor de casa",
  // TODO(conteúdo): texto provisório do Figma — manter até a cliente enviar o definitivo
  texto:
    "(insira aqui um texto que mostre que acompanhando esse trecho terá imagens de refeições produzidas para nossos clientes)",
  principal: {
    src: "/assets/images/home/refeicoes-buffet.jpg",
    alt: "Balcão de buffet com saladas, potes de frutas e cubas de comida",
  } satisfies ContentImage,
  laterais: [
    {
      src: "/assets/images/home/refeicoes-cubas.jpg",
      alt: "Cubas com bife, massa e legumes sendo servidas",
    },
    {
      src: "/assets/images/home/refeicoes-croquete.jpg",
      alt: "Mão com luva segurando um croquete aberto",
    },
    {
      src: "/assets/images/home/refeicoes-marmitas.jpg",
      alt: "Mãos com luvas montando marmitas",
    },
  ] satisfies ContentImage[],
};

export const diferenciaisIntro = {
  titulo: ["Nossos", "Diferenciais"] as const,
  texto:
    "No Bandejão Refeições, oferecemos uma grande variedade de serviços de alimentação adequados a cada necessidade de maneira personalizada. Cada parceiro é pensado individualmente para garantir uma refeição mais saborosa e saudável.",
};

export const galeriaTitulo = "Galeria dos parceiros";

export const delivery = {
  texto: "O Bandejão também pode ir\naté a porta da sua casa.",
  botao: {
    texto: ["conheça o nosso ", { forte: "delivery" }] satisfies RichText,
    href: "/services#delivery",
  },
  image: {
    src: "/assets/images/home/parmegiana.png",
    alt: "Prato de filé à parmegiana com arroz e batata frita",
  } satisfies ContentImage,
};

export const parceirosTitulo = "Nossos parceiros";

export const avaliacoesTitulo = "Avaliações";
