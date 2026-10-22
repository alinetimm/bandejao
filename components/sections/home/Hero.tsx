import Image from "next/image";

import { SmartImage } from "@/components/ui/SmartImage";
import { hero } from "@/content/home";

// Figma 72:82–72:86: foto + camada laranja 61% + logo grande. Fica por baixo da navbar translúcida.
// A foto ocupa 1809px num quadro de 1440 (sobra ~12,8% de cada lado), escondendo as faixas
// transparentes das laterais do arquivo.
// Mobile (Figma 244:186–244:189): altura ≈ largura da tela e logo menor, centralizado embaixo.
export const Hero = () => (
  <section className="relative -mt-[var(--header-h)] h-[105vw] max-h-[600px] min-h-[360px] overflow-hidden lg:h-[737px] lg:max-h-none">
    <SmartImage
      priority
      className="!absolute inset-y-0 -left-[12.8%] -right-[12.8%] h-full !w-auto"
      image={hero.image}
      imageClassName="object-bottom"
    />
    <div aria-hidden="true" className="absolute inset-0 bg-brand/[0.61]" />

    <div className="relative mx-auto h-full max-w-[1196px] px-4 sm:px-6 xl:px-0">
      <h1 className="absolute bottom-[6%] left-1/2 -translate-x-1/2 lg:bottom-[60px] lg:left-6 lg:translate-x-0 xl:left-[2px]">
        <Image
          priority
          alt={hero.logo.alt}
          className="h-auto w-[38vw] max-w-[300px] lg:w-[463px] lg:max-w-none"
          height={hero.logo.height}
          src={hero.logo.src}
          width={hero.logo.width}
        />
      </h1>
    </div>
  </section>
);
