export type SiteConfig = typeof siteConfig;

export type NavItem = { label: string; href: string };

export type Unidade = {
  cidade: string;
  endereco: string;
  telefones: { label: string; href: string }[];
  // TODO(link): URL do Google Maps da unidade
  mapsUrl: string;
};

export const siteConfig = {
  name: "Bandejão Refeições",
  description:
    "Alimentação coletiva em Pelotas e Rio Grande/RS há mais de 30 anos: refeições para empresas, hospitais, cantinas escolares, delivery de marmitas e buffet para eventos.",
  // Domínio de produção, sem barra no final (usado em og:url, og:image e canonical).
  // TODO(link): definir NEXT_PUBLIC_SITE_URL quando o domínio for registrado (ver .env.example)
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "",
  // Imagem de compartilhamento (1200×630), gerada a partir da foto e do logo do hero
  ogImage: "/assets/brand/og-image.jpg",
  navItems: [
    { label: "Home", href: "/" },
    { label: "Serviços", href: "/services" },
    { label: "Contato", href: "/contact" },
    { label: "Quem Somos", href: "/about" },
  ] satisfies NavItem[],
  unidades: [
    {
      cidade: "Pelotas",
      endereco: "Avenida Francisco Caruccio, 777",
      telefones: [
        { label: "(53) 98109-0159", href: "tel:+5553981090159" },
        { label: "(53) 3227-9644", href: "tel:+555332279644" },
      ],
      mapsUrl: "#",
    },
    {
      cidade: "Rio Grande",
      endereco: "Avenida Rheingantz, 70",
      telefones: [{ label: "(53) 98111-1405", href: "tel:+5553981111405" }],
      mapsUrl: "#",
    },
  ] satisfies Unidade[],
  // Links "#" são placeholders: não abrir em nova aba enquanto não houver URL real.
  links: {
    instagram: "#", // TODO(link): perfil do Instagram
    facebook: "#", // TODO(link): página do Facebook
    whatsapp: "#", // TODO(link): link wa.me do WhatsApp
    ifood: "#", // TODO(link): página do iFood
  },
};
