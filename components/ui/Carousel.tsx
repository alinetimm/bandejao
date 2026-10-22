import type { ReactNode } from "react";

import clsx from "clsx";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { useCallback } from "react";

type CarouselProps = {
  children: ReactNode[];
  ariaLabel: string;
  // Largura de cada slide; padrão: 1 no mobile, 2 no tablet, 3 no desktop (CLAUDE.md §7)
  slideClassName?: string;
  loop?: boolean;
  className?: string;
};

// Seta do Figma (instâncias "direita"/"esquerda"): mesmo triângulo, rotacionado.
const Seta = ({ direcao }: { direcao: "esquerda" | "direita" }) => (
  <Image
    alt=""
    className={clsx(
      "drop-shadow-[0_2px_2px_rgba(74,74,74,0.35)]",
      direcao === "direita" ? "rotate-90" : "-rotate-90",
    )}
    height={22}
    src="/assets/icons/seta.svg"
    width={22}
  />
);

export const Carousel = ({
  children,
  ariaLabel,
  slideClassName = "basis-full sm:basis-1/2 lg:basis-1/3",
  loop = true,
  className,
}: CarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop, align: "start" });

  const anterior = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const proximo = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const botao =
    "flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand";

  return (
    <section
      aria-label={ariaLabel}
      aria-roledescription="carrossel"
      className={clsx("flex items-center gap-2", className)}
    >
      <button
        aria-label="Anterior"
        className={botao}
        type="button"
        onClick={anterior}
      >
        <Seta direcao="esquerda" />
      </button>

      <div ref={emblaRef} className="min-w-0 flex-1 overflow-hidden">
        <div className="-ml-4 flex touch-pan-y">
          {children.map((child, i) => (
            <div
              key={i}
              aria-label={`${i + 1} de ${children.length}`}
              aria-roledescription="slide"
              className={clsx("min-w-0 shrink-0 grow-0 pl-4", slideClassName)}
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
        <Seta direcao="direita" />
      </button>
    </section>
  );
};
