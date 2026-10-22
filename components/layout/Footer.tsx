import { siteConfig } from "@/config/site";

// Faixa inferior (Figma 72:131)
export const Footer = () => (
  <footer className="flex h-[52px] items-center justify-center bg-ink text-sm text-white">
    {siteConfig.name}
  </footer>
);
