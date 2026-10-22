export type Partner = {
  id: string;
  name: string; // usado como alt do logo
  logo: string;
};

// TODO(back-end): pode vir de API/CMS. Caminho sugerido: buscar em getStaticProps
// (pages/index.tsx) com revalidate e passar via props para <Parceiros>.
const p = (id: string, name: string): Partner => ({
  id,
  name,
  logo: `/assets/partners/${id}.png`,
});

// Ordem da grade do Figma (5 colunas, linha a linha)
export const partners: Partner[] = [
  p("mercado-livre", "Mercado Livre"),
  p("freedom", "Freedom"),
  p("furg", "FURG — Universidade Federal do Rio Grande"),
  p("savarauto", "Savarauto"),
  p("ole", "Olé"),
  p("guanabara", "Supermercado Guanabara"),
  p("tanac", "Tanac"),
  p("acpo", "ACPO"),
  p("colegio-gonzaga", "Colégio Gonzaga"),
  p("zimmer", "Zimmer"),
  p("planfer", "Planfer"),
  p("hospital-monporto", "Hospital Monporto"),
  p("polimix-energia", "Polimix Energia"),
  p("ser-e-aprender", "Ser & Aprender"),
  p("frigorifico-klug", "Frigorífico Klug"),
  p("boreal", "Boreal Sistemas de Limpeza"),
  p("irmaos-jouglard", "Irmãos Jouglard"),
  p("peil", "Peil"),
  p("leal-santos", "Leal Santos"),
  p("roloff", "Roloff"),
  p("upa-24h", "UPA 24h"),
  p("mac-engenharia", "MAC Engenharia"),
  p("sao-bento", "São Bento"),
  p("hospital-ernesto-mauricio-arndt", "Hospital Dr. Ernesto Maurício Arndt"),
  p("mercotainer", "Mercotainer"),
];
