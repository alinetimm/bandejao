export type Testimonial = {
  id: string;
  partnerName: string;
  partnerLogo: string;
  text: string;
};

// TODO(back-end): pode vir de API/CMS. Caminho sugerido: buscar em getStaticProps
// (pages/index.tsx) com revalidate e passar via props para <Avaliacoes>.
// TODO(conteúdo): textos provisórios (lorem ipsum) do Figma — manter até a cliente enviar as avaliações reais
const LOREM =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.";

export const testimonials: Testimonial[] = [1, 2, 3].map((n) => ({
  id: `avaliacao-${n}`,
  partnerName: "Mercado Livre",
  partnerLogo: "/assets/images/home/avaliacao-mercado-livre.png",
  text: LOREM,
}));
