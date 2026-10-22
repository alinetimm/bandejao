import type { Testimonial } from "@/content/testimonials";

import Image from "next/image";

import { Carousel } from "@/components/ui/Carousel";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { avaliacoesTitulo } from "@/content/home";

// Figma 448:211: card 577×208 — logo (105px) sobre a borda esquerda de um quadro com
// borda laranja de 5px e cantos de 25px; texto à direita. Um card visível por vez.
// Mobile (Figma 477:188): mesmo card em escala menor (texto com mínimo legível de 13px).
const Card = ({ item }: { item: Testimonial }) => (
  <figure className="relative flex min-h-[130px] items-center md:min-h-[208px]">
    <div
      aria-hidden="true"
      className="absolute inset-y-0 left-[28px] right-0 rounded-[16px] border-[3px] border-brand bg-white md:left-[48px] md:rounded-[25px] md:border-[5px]"
    />
    <Image
      alt={item.partnerName}
      className="absolute left-0 top-1/2 h-[56px] w-[56px] -translate-y-1/2 object-contain md:h-[105px] md:w-[105px]"
      height={105}
      src={item.partnerLogo}
      width={105}
    />
    <blockquote className="relative py-4 pl-[68px] pr-4 text-[13px] tracking-[-0.01em] text-ink md:py-6 md:pl-[123px] md:pr-[68px] md:text-base">
      {item.text}
    </blockquote>
  </figure>
);

export const Avaliacoes = ({ items }: { items: Testimonial[] }) => (
  <section className="pb-12 lg:pb-[169px]">
    <div className="mx-auto max-w-[680px] px-2 sm:px-4">
      <SectionTitle
        align="center"
        color="ink"
        first={avaliacoesTitulo}
        variant="single"
      />

      <Carousel
        ariaLabel="Avaliações de clientes"
        className="mt-5 md:mt-8"
        seta="sombra"
        slideClassName="basis-full pl-[19px]"
        trackClassName="-ml-[19px]"
      >
        {items.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </Carousel>
    </div>
  </section>
);
