import type { FotoSobre } from "@/content/about";
import type { ReactNode } from "react";

import Image from "next/image";

import { SmartImage } from "@/components/ui/SmartImage";

// Peças comuns às seções de Quem Somos (Figma 113:262): subtítulo 23px bold,
// texto 18px medium, fotos sem cantos e marcadores de lista exportados do Figma.

export const Subtitulo = ({ children }: { children: ReactNode }) => (
  <h2 className="text-[19px] font-bold text-body lg:text-[23px]">{children}</h2>
);

export const textoCorrido =
  "text-[15px] md:text-base lg:text-lg font-medium tracking-[-0.01em] text-body";

export const Foto = ({ foto, sizes }: { foto: FotoSobre; sizes: string }) => (
  <SmartImage
    aspect={foto.aspect}
    aspectMobile={foto.aspectMobile}
    focus={foto.focus}
    image={foto}
    sizes={`(min-width: 1024px) ${sizes}, 100vw`}
  />
);

// Lista com marcador (não interativo): quadrado vazado ou check laranja
export const ListaMarcada = ({
  itens,
  marcador,
}: {
  itens: string[];
  marcador: "quadrado" | "check";
}) => (
  <ul className={`space-y-5 lg:space-y-[27px] ${textoCorrido}`}>
    {itens.map((item) => (
      <li key={item} className="flex items-start gap-3">
        {marcador === "quadrado" ? (
          <Image
            alt=""
            className="mt-[-1px] h-[29px] w-[28px] shrink-0"
            height={79}
            src="/assets/icons/checkbox.svg"
            width={78}
          />
        ) : (
          <Image
            alt=""
            className="mt-[3px] h-auto w-[26px] shrink-0"
            height={19}
            src="/assets/icons/check.svg"
            width={26}
          />
        )}
        <span>{item}</span>
      </li>
    ))}
  </ul>
);
