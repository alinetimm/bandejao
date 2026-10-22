import { siteConfig } from "@/config/site";

// Faixa inferior (Figma 72:131) + crédito discreto (pedido da cliente, fora do Figma)
export const Footer = () => (
  <footer className="flex min-h-[52px] flex-col items-center justify-center gap-0.5 bg-ink py-2 text-center">
    <p className="text-sm text-white">{siteConfig.name}</p>
    <p className="text-[11px] text-white/60">Produzido por Aline y Ulian</p>
  </footer>
);
