import NextLink from "next/link";

import { Carousel } from "@/components/ui/Carousel";
import { RichText } from "@/components/ui/RichText";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { SmartImage } from "@/components/ui/SmartImage";
import { servicos } from "@/content/home";

// Figma 208:305, 208:306 e 72:300: título, texto e carrossel de 5 cards (368×261, 3 visíveis).
export const ServicesCarousel = () => (
  <section className="py-16 lg:pb-[108px] lg:pt-[115px]">
    <div className="mx-auto max-w-[1196px] px-4 sm:px-6 xl:px-0">
      <SectionTitle first={servicos.titulo[0]} second={servicos.titulo[1]} />
      <p className="mt-2 max-w-[476px] text-lg font-medium tracking-[-0.01em] text-body md:whitespace-pre-line">
        <RichText value={servicos.texto} />
      </p>
    </div>

    <div className="mx-auto mt-7 max-w-[1330px] px-2 sm:px-4 xl:px-0">
      <Carousel
        ariaLabel="Nossos serviços"
        slideClassName="basis-full pl-6 sm:basis-1/2 lg:basis-1/3 lg:pl-[55px]"
        trackClassName="-ml-6 lg:-ml-[55px]"
      >
        {servicos.itens.map((item) => (
          <NextLink
            key={item.id}
            aria-label={item.nome}
            className="block rounded-[25px] transition-transform hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand"
            href={`/services#${item.id}`}
          >
            <SmartImage
              innerShadow
              rounded
              aspect="368/261"
              image={item.image}
              sizes="(min-width: 1024px) 368px, (min-width: 640px) 50vw, 100vw"
            />
          </NextLink>
        ))}
      </Carousel>
    </div>
  </section>
);
