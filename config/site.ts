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
  description: "Servimos refeições saborosas há mais de 30 anos.",
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
