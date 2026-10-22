import Image from "next/image";

import { SmartImage } from "@/components/ui/SmartImage";
import { hero } from "@/content/home";

// Figma 72:82–72:86: foto + camada laranja 61% + logo grande. Fica por baixo da navbar translúcida.
// A foto ocupa 1809px num quadro de 1440 (sobra ~12,8% de cada lado), escondendo as faixas
// transparentes das laterais do arquivo.
export const Hero = () => (
  <section className="relative -mt-[var(--header-h)] h-[440px] overflow-hidden md:h-[600px] lg:h-[737px]">
    <SmartImage
      priority
      className="!absolute inset-y-0 -left-[12.8%] -right-[12.8%] h-full !w-auto"
      image={hero.image}
      imageClassName="object-bottom"
    />
    <div aria-hidden="true" className="absolute inset-0 bg-brand/[0.61]" />

    <div className="relative mx-auto h-full max-w-[1196px] px-4 sm:px-6 xl:px-0">
      <h1 className="absolute bottom-10 left-4 sm:left-6 lg:bottom-[60px] xl:left-[2px]">
        <Image
          priority
          alt={hero.logo.alt}
          className="h-auto w-[240px] md:w-[360px] lg:w-[463px]"
          height={hero.logo.height}
          src={hero.logo.src}
          width={hero.logo.width}
        />
      </h1>
    </div>
  </section>
);
