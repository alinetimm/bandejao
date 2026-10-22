import type { ContentImage, RichText } from "@/types";

// Textos e imagens da página Serviços (Figma: frame "Serviços" 80:160).

export type ServicoId =
  | "empresas"
  | "hospitalares"
  | "delivery"
  | "cantinas"
  | "buffet";

export type FotoServico = ContentImage & {
  // Proporção da foto no Figma (largura/altura)
  aspect: string;
  // object-position do recorte do Figma
  focus?: string;
};

export type ServicoBloco = {
  id: ServicoId; // âncora: /services#<id>
  titulo: [string, string];
  subtitulo: RichText;
  paragrafos: string[];
  // texto-foto-faixa: texto + 1 foto à direita, e abaixo uma faixa com foto larga + foto menor
  // texto-duas-verticais: texto à esquerda + 2 fotos verticais à direita
  // foto-texto: foto à esquerda + texto à direita
  layout: "texto-foto-faixa" | "texto-duas-verticais" | "foto-texto";
  fotos: FotoServico[];
  // Fotos com cantos de 25px e sombra interna (varia por bloco no Figma)
  fotosArredondadas: boolean;
  // Largura do texto corrido no Figma, em px (só no desktop)
  larguraTexto?: number;
};

export const servicosPagina = { titulo: "SERVIÇOS" };

export const servicosBlocos: ServicoBloco[] = [
  {
    id: "empresas",
    titulo: ["REFEIÇÕES PARA", "EMPRESAS:"],
    subtitulo: [
      "Alimentação corporativa para ",
      { forte: "escritórios, fábricas e indústrias." },
    ],
    paragrafos: [
      "Oferecemos alimentação corporativa completa, com refeições balanceadas, saborosas e preparadas com ingredientes frescos e selecionados. Nosso serviço é pensado para atender empresas de todos os portes, com soluções personalizadas que se adaptam à rotina e estrutura de cada cliente. As entregas são feitas com pontualidade, seja em marmitas individuais, buffets ou refeições empratadas. Garantimos segurança alimentar, praticidade e bem-estar aos colaboradores — contribuindo diretamente para um ambiente de trabalho mais saudável e produtivo.",
    ],
    layout: "texto-foto-faixa",
    fotosArredondadas: true,
    fotos: [
      {
        src: "/assets/images/services/empresas-cubas.jpg",
        alt: "Cubas de buffet com massa, carnes e legumes",
        aspect: "458/210",
      },
      {
        src: "/assets/images/services/empresas-marmitas.webp",
        alt: "Potes de marmita com arroz e acompanhamentos enfileirados",
        aspect: "705/210",
        focus: "left center",
      },
      {
        src: "/assets/images/services/empresas-prato.webp",
        alt: "Mão com luva segurando prato com arroz e bife à milanesa",
        aspect: "458/210",
        focus: "center 60%",
      },
    ],
    larguraTexto: 711,
  },
  {
    id: "hospitalares",
    titulo: ["REFEIÇÕES", "HOSPITALARES:"],
    subtitulo: [
      "Dietas balanceadas e adaptadas para ",
      { forte: "hospitais e clínicas." },
    ],
    paragrafos: [
      "Entregamos refeições específicas para o ambiente hospitalar, preparadas de acordo com orientações médicas e necessidades nutricionais dos pacientes. Nossos cardápios são desenvolvidos por nutricionistas e adaptados para diferentes dietas, como restrições de sódio, açúcar, lactose, glúten, entre outras.",
      "Trabalhamos com porções individuais, marmitas ou pratos servidos conforme a estrutura da instituição. Mais que refeições: fornecemos suporte nutricional essencial para o processo de recuperação, com sabor, higiene e responsabilidade.",
    ],
    layout: "texto-duas-verticais",
    fotosArredondadas: false,
    fotos: [
      {
        src: "/assets/images/services/hospitalares-marmitas.jpg",
        alt: "Marmitas descartáveis empilhadas com etiqueta de dieta",
        aspect: "268/478",
        focus: "center 75%",
      },
      {
        src: "/assets/images/services/hospitalares-dieta.jpg",
        alt: "Marmita aberta com arroz integral, carne moída e cenoura, com etiqueta de dieta",
        aspect: "286/478",
        focus: "center 30%",
      },
    ],
    larguraTexto: 580,
  },
  {
    id: "delivery",
    titulo: ["DELIVERY DE", "MARMITAS:"],
    subtitulo: [
      "Opção prática para refeições ",
      { forte: "individuais e coletivas" },
      ".",
    ],
    paragrafos: [
      "Para quem busca praticidade no dia a dia, nosso serviço de delivery de marmitas é a solução ideal. Atendemos tanto empresas quanto consumidores finais, com refeições prontas, equilibradas e entregues no ponto certo. As entregas são feitas por nossa equipe própria ou via iFood, sempre com embalagens seguras que mantêm a temperatura e a qualidade dos alimentos. Perfeito para quem deseja se alimentar bem, com comodidade, sem abrir mão do sabor e da nutrição.",
    ],
    layout: "foto-texto",
    fotosArredondadas: false,
    fotos: [
      {
        src: "/assets/images/services/delivery-potes.jpg",
        alt: "Potes com arroz, linguiça, croquete e salada",
        aspect: "580/466",
        focus: "90% 100%",
      },
    ],
    larguraTexto: 430,
  },
  {
    id: "cantinas",
    titulo: ["CANTINAS", "ESCOLARES:"],
    subtitulo: [
      "Alimentação saudável e saborosa para ",
      { forte: "instituições de ensino." },
    ],
    paragrafos: [
      "Nossas cantinas escolares são estruturadas para atender alunos com rapidez, organização e qualidade. Oferecemos lanches e refeições saudáveis, com cardápios equilibrados e pensados para contribuir com o desenvolvimento e a saúde das crianças e adolescentes. Trabalhamos com diferentes formas de pagamento, incluindo sistemas pré-pagos, que oferecem mais controle aos pais. Além disso, garantimos um fluxo ágil no atendimento, evitando filas e respeitando o tempo de intervalo escolar. Tudo isso com o cuidado e a segurança alimentar que esse público merece.",
    ],
    layout: "texto-duas-verticais",
    fotosArredondadas: true,
    fotos: [
      {
        src: "/assets/images/services/cantinas-bandeja.jpg",
        alt: "Bandeja com arroz, frango, massa e pote de feijão",
        aspect: "271/460",
      },
      {
        src: "/assets/images/services/cantinas-marmitas.jpg",
        alt: "Marmitas com massa, arroz e carne de panela",
        aspect: "285/460",
        focus: "center 40%",
      },
    ],
    larguraTexto: 564,
  },
  {
    id: "buffet",
    titulo: ["BUFFET CORPORATIVO", "E EVENTOS:"],
    // TODO(conteúdo): subtítulo repetido do bloco Empresas no Figma — manter até a cliente enviar o definitivo
    subtitulo: [
      "Alimentação corporativa para ",
      { forte: "escritórios, fábricas e indústrias." },
    ],
    paragrafos: [
      "Para confraternizações, reuniões, aniversários ou eventos empresariais, o Bandejão oferece um serviço de buffet completo e sob medida. Trabalhamos com cardápios variados, que vão de coffee breaks e coqueteis a refeições completas, servidas em formato buffet self-service. Tudo com qualidade, pontualidade e alto padrão de higiene, para que seu evento seja uma experiência gastronômica rica em sabor.",
    ],
    layout: "foto-texto",
    fotosArredondadas: true,
    fotos: [
      {
        src: "/assets/images/services/buffet-rechauds.webp",
        alt: "Rechauds de buffet com carnes e acompanhamentos em evento",
        aspect: "459/427",
        focus: "center 70%",
      },
    ],
    larguraTexto: 615,
  },
];
