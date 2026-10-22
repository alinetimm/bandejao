import type { ReactNode } from "react";

import clsx from "clsx";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { useCallback } from "react";

type CarouselProps = {
  children: ReactNode[];
  ariaLabel: string;
  // Largura e espaçamento de cada slide (o espaçamento é o padding-left do slide
  // e precisa do mesmo valor negativo em trackClassName).
  // Padrão: 1 no mobile, 2 no tablet, 3 no desktop (CLAUDE.md §7)
  slideClassName?: string;
  trackClassName?: string;
  // simples: triângulo de "Nossos Serviços" · sombra: com sombra, de "Avaliações"
  seta?: "simples" | "sombra";
  loop?: boolean;
  className?: string;
};

// Setas exportadas do Figma (apontam para a direita; a esquerda é a mesma, girada).
const setas = {
  simples: { src: "/assets/icons/seta.svg", width: 29, height: 25 },
  sombra: { src: "/assets/icons/seta-sombra.svg", width: 37, height: 31 },
};

export const Carousel = ({
  children,
  ariaLabel,
  slideClassName = "basis-full pl-4 sm:basis-1/2 lg:basis-1/3",
  trackClassName = "-ml-4",
  seta = "simples",
  loop = true,
  className,
}: CarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop, align: "start" });

  const anterior = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const proximo = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const botao =
    "flex h-11 w-11 shrink-0 items-center justify-center rounded-full transition hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand";
  const icone = setas[seta];

  return (
    <section
      aria-label={ariaLabel}
      aria-roledescription="carrossel"
      className={clsx("flex items-center gap-1 md:gap-2", className)}
    >
      <button
        aria-label="Anterior"
        className={botao}
        type="button"
        onClick={anterior}
      >
        <Image alt="" className="rotate-180" {...icone} />
      </button>

      <div ref={emblaRef} className="min-w-0 flex-1 overflow-hidden">
        <div className={clsx("flex touch-pan-y", trackClassName)}>
          {children.map((child, i) => (
            <div
              key={i}
              aria-label={`${i + 1} de ${children.length}`}
              aria-roledescription="slide"
              className={clsx("min-w-0 shrink-0 grow-0", slideClassName)}
              role="group"
            >
              {child}
            </div>
          ))}
        </div>
      </div>

      <button
        aria-label="Próximo"
        className={botao}
        type="button"
        onClick={proximo}
      >
        <Image alt="" {...icone} />
      </button>
    </section>
  );
};
