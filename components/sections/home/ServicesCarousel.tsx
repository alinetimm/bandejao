import NextLink from "next/link";

import { Carousel } from "@/components/ui/Carousel";
import { RichText } from "@/components/ui/RichText";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { SmartImage } from "@/components/ui/SmartImage";
import { servicos } from "@/content/home";

// Figma 208:305, 208:306 e 72:300: título, texto e carrossel de 5 cards (368×261, 3 visíveis).
// Abaixo de 1024px (Figma "Carrossel Mobile" 482:258) os cards ganham o nome do serviço
// sobre um degradê laranja. O Figma mobile mostra 3 cards; em 375px ficariam com ~90px e
// texto ilegível, então mostramos 2 (e 3 a partir do tablet).
export const ServicesCarousel = () => (
  <section className="py-12 lg:pb-[108px] lg:pt-[115px]">
    <div className="mx-auto max-w-[1196px] px-4 sm:px-6 xl:px-0">
      <SectionTitle first={servicos.titulo[0]} second={servicos.titulo[1]} />
      <p className="mt-2 max-w-[476px] text-[15px] font-medium tracking-[-0.01em] text-body md:whitespace-pre-line md:text-base lg:text-lg">
        <RichText value={servicos.texto} />
      </p>
    </div>

    <div className="mx-auto mt-5 max-w-[1330px] px-1 sm:px-4 lg:mt-7 xl:px-0">
      <Carousel
        ariaLabel="Nossos serviços"
        slideClassName="basis-1/2 pl-3 md:basis-1/3 lg:pl-[55px]"
        trackClassName="-ml-3 lg:-ml-[55px]"
      >
        {servicos.itens.map((item) => (
          <NextLink
            key={item.id}
            aria-label={item.nome}
            className="relative block rounded-[14px] transition-transform hover:scale-[1.02] lg:rounded-[25px]"
            href={`/services#${item.id}`}
          >
            <SmartImage
              rounded
              aspect="368/261"
              className="!rounded-[14px] lg:!rounded-[25px]"
              image={item.image}
              sizes="(min-width: 1024px) 368px, (min-width: 768px) 33vw, 50vw"
            />
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 rounded-[inherit] shadow-[inset_20px_-20px_48px_0px_#f66922,inset_0px_-3px_8px_8px_rgba(0,0,0,0.25)] lg:shadow-[inset_0px_4px_8px_8px_rgba(0,0,0,0.25)]"
            />
            <span
              aria-hidden="true"
              className="absolute bottom-[7%] left-[7%] right-[8%] text-[12px] font-bold uppercase leading-[1.1] tracking-[-0.01em] text-white md:text-sm lg:hidden"
            >
              {item.nome}
            </span>
          </NextLink>
        ))}
      </Carousel>
    </div>
  </section>
);
