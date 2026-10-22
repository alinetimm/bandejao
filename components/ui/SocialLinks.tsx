import clsx from "clsx";
import Image from "next/image";

import { siteConfig } from "@/config/site";

// Ícones exportados do Figma (nó 427:199), na ordem e tamanho originais.
const redes = [
  {
    key: "facebook",
    label: "Facebook",
    icon: "/assets/icons/facebook.svg",
    width: 18,
    height: 38,
  },
  {
    key: "instagram",
    label: "Instagram",
    icon: "/assets/icons/instagram.svg",
    width: 38,
    height: 38,
  },
  {
    key: "whatsapp",
    label: "WhatsApp",
    icon: "/assets/icons/whatsapp.svg",
    width: 36,
    height: 38,
  },
] as const;

export const SocialLinks = ({ className }: { className?: string }) => (
  <ul className={clsx("flex items-center gap-6", className)}>
    {redes.map((rede) => {
      const href = siteConfig.links[rede.key];
      const placeholder = href === "#";

      return (
        <li key={rede.key}>
          <a
            aria-label={rede.label}
            className="block rounded transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
            href={href}
            {...(placeholder
              ? {}
              : { target: "_blank", rel: "noopener noreferrer" })}
          >
            <Image
              alt=""
              height={rede.height}
              src={rede.icon}
              width={rede.width}
            />
          </a>
        </li>
      );
    })}
  </ul>
);
