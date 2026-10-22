import type { ContentImage } from "@/types";

export type GalleryItem = {
  id: string;
  image: ContentImage;
  // object-position do recorte usado no Figma (ex.: "center 40%")
  focus?: string;
};

// TODO(back-end): pode vir de API/CMS. Caminho sugerido: buscar em getStaticProps
// (pages/index.tsx) com revalidate e passar via props para <GaleriaParceiros>.
// O mosaico do desktop tem 8 posições, na ordem abaixo.
export const gallery: GalleryItem[] = [
  {
    id: "ano-novo",
    image: {
      src: "/assets/images/gallery/01-ano-novo.jpg",
      alt: "Mesa decorada de Ano Novo com doces e balões",
    },
  },
  {
    id: "prato-servido",
    image: {
      src: "/assets/images/gallery/02-prato-servido.jpg",
      alt: "Prato com arroz e feijão sendo servido no buffet",
    },
  },
  {
    id: "cubas-buffet",
    image: {
      src: "/assets/images/gallery/03-cubas-buffet.jpg",
      alt: "Cubas de buffet com saladas e pratos quentes",
    },
  },
  {
    id: "balcao",
    image: {
      src: "/assets/images/gallery/04-balcao.jpg",
      alt: "Balcão de buffet com cubas de carnes e massas",
    },
    focus: "center 15%",
  },
  {
    id: "servindo",
    image: {
      src: "/assets/images/gallery/05-servindo.jpg",
      alt: "Funcionário servindo refeições no balcão",
    },
    focus: "center 41%",
  },
  {
    id: "carnaval",
    image: {
      src: "/assets/images/gallery/06-carnaval.jpg",
      alt: "Buffet decorado com tema de Carnaval",
    },
  },
  {
    id: "cubas-variadas",
    image: {
      src: "/assets/images/gallery/07-cubas-variadas.jpg",
      alt: "Cubas variadas com saladas e frutas",
    },
    focus: "center 66%",
  },
  {
    id: "refeitorio",
    image: {
      src: "/assets/images/gallery/08-refeitorio.jpg",
      alt: "Refeitório com buffet e potes de sobremesa",
    },
    focus: "center 17%",
  },
];
