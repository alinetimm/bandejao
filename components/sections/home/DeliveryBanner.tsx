import Image from "next/image";

import { Button } from "@/components/ui/Button";
import { RichText } from "@/components/ui/RichText";
import { delivery } from "@/content/home";

// Figma 208:365: faixa escura (192px) com texto e botão à direita; o prato (536×428)
// passa da faixa para cima e para baixo.
// Mobile (Figma 244:329): o prato vem primeiro, metade sobre a faixa escura; texto centralizado.
export const DeliveryBanner = () => (
  <section className="relative pb-12 lg:h-[428px] lg:pb-0">
    <div
      aria-hidden="true"
      className="absolute inset-x-0 top-[128px] hidden h-[192px] bg-ink lg:block"
    />

    <div className="relative mx-auto flex max-w-[1287px] flex-col items-center lg:flex-row lg:items-start lg:gap-[21px]">
      <Image
        alt={delivery.image.alt}
        className="relative z-10 order-1 h-auto w-[42vw] max-w-[320px] lg:order-2 lg:w-[536px] lg:max-w-none"
        height={428}
        sizes="(min-width: 1024px) 536px, 42vw"
        src={delivery.image.src ?? ""}
        width={536}
      />

      <div className="order-2 -mt-[17vw] w-full bg-ink px-4 pb-8 pt-[20vw] text-center sm:px-6 md:-mt-[128px] md:pt-[150px] lg:order-1 lg:mt-[148px] lg:w-[730px] lg:shrink-0 lg:bg-transparent lg:p-0 lg:text-right">
        <p className="text-[17px] font-extrabold leading-[1.15] tracking-[-0.01em] text-white md:text-[32px] lg:whitespace-pre-line lg:text-[49px] lg:leading-[52px]">
          {delivery.texto}
        </p>
        <Button
          className="mt-4 lg:mt-[15px]"
          href={delivery.botao.href}
          variant="pill"
        >
          <span>
            <RichText value={delivery.botao.texto} />
          </span>
        </Button>
      </div>
    </div>
  </section>
);
