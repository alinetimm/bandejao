import type { Testimonial } from "@/content/testimonials";

import Image from "next/image";

import { Carousel } from "@/components/ui/Carousel";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { avaliacoesTitulo } from "@/content/home";

// Figma 448:211: card 577×208 — logo (105px) sobre a borda esquerda de um quadro com
// borda laranja de 5px e cantos de 25px; texto à direita. Um card visível por vez.
const Card = ({ item }: { item: Testimonial }) => (
  <figure className="relative flex min-h-[208px] items-center">
    <div
      aria-hidden="true"
      className="absolute inset-y-0 left-[48px] right-0 rounded-[25px] border-[5px] border-brand bg-white"
    />
    <Image
      alt={item.partnerName}
      className="absolute left-0 top-1/2 h-[80px] w-[80px] -translate-y-1/2 object-contain md:h-[105px] md:w-[105px]"
      height={105}
      src={item.partnerLogo}
      width={105}
    />
    <blockquote className="relative py-6 pl-[100px] pr-6 text-sm tracking-[-0.01em] text-ink md:pl-[123px] md:pr-[68px] md:text-base">
      {item.text}
    </blockquote>
  </figure>
);

export const Avaliacoes = ({ items }: { items: Testimonial[] }) => (
  <section className="pb-16 lg:pb-[169px]">
    <div className="mx-auto max-w-[680px] px-2 sm:px-4">
      <SectionTitle
        align="center"
        color="ink"
        first={avaliacoesTitulo}
        variant="single"
      />

      <Carousel
        ariaLabel="Avaliações de clientes"
        className="mt-8"
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
