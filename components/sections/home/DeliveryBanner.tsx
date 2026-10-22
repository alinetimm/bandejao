import Image from "next/image";

import { Button } from "@/components/ui/Button";
import { RichText } from "@/components/ui/RichText";
import { delivery } from "@/content/home";

// Figma 208:365: faixa escura (192px) com texto e botão à direita; o prato (536×428)
// passa da faixa para cima e para baixo.
export const DeliveryBanner = () => (
  <section className="relative pb-16 lg:h-[428px] lg:pb-0">
    <div
      aria-hidden="true"
      className="absolute inset-x-0 top-[128px] hidden h-[192px] bg-ink lg:block"
    />

    <div className="relative mx-auto flex max-w-[1287px] flex-col items-center lg:flex-row lg:items-start lg:gap-[21px]">
      <div className="w-full bg-ink px-4 py-10 text-center sm:px-6 lg:mt-[148px] lg:w-[730px] lg:shrink-0 lg:bg-transparent lg:p-0 lg:text-right">
        <p className="text-[28px] font-extrabold leading-[1.15] tracking-[-0.01em] text-white md:text-[49px] md:leading-[52px] lg:whitespace-pre-line">
          {delivery.texto}
        </p>
        <Button
          className="mt-6 lg:mt-[15px]"
          href={delivery.botao.href}
          variant="pill"
        >
          <span>
            <RichText value={delivery.botao.texto} />
          </span>
        </Button>
      </div>

      <Image
        alt={delivery.image.alt}
        className="-mt-4 h-auto w-[300px] md:w-[420px] lg:mt-0 lg:w-[536px]"
        height={428}
        sizes="(min-width: 1024px) 536px, 420px"
        src={delivery.image.src ?? ""}
        width={536}
      />
    </div>
  </section>
);
