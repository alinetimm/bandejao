import Image from "next/image";

import { SectionTitle } from "@/components/ui/SectionTitle";
import { diferenciais } from "@/content/diferenciais";
import { diferenciaisIntro } from "@/content/home";

// Figma 244:246: título, texto e 8 itens em 2 colunas — círculo laranja (109×110) com
// ícone branco sobre uma "pílula" com borda (89px de altura, cantos 57px).
export const Diferenciais = () => (
  <section className="pb-16 lg:pb-[112px]">
    <div className="mx-auto max-w-[1168px] px-4 sm:px-6 xl:px-0">
      <SectionTitle
        first={diferenciaisIntro.titulo[0]}
        second={diferenciaisIntro.titulo[1]}
      />
      <p className="mt-[13px] text-lg font-medium tracking-[-0.01em] text-body lg:pl-[6px]">
        {diferenciaisIntro.texto}
      </p>

      <ul className="mt-10 grid gap-y-6 lg:ml-[58px] lg:mt-[96px] lg:grid-cols-[568px_1fr] lg:gap-y-9">
        {diferenciais.map((item) => (
          <li key={item.id} className="flex items-center">
            <span className="relative z-10 flex h-[80px] w-[80px] shrink-0 items-center justify-center rounded-full bg-brand md:h-[110px] md:w-[109px]">
              <Image
                alt=""
                className="h-auto w-[60%] md:w-auto"
                height={item.icon.height}
                src={item.icon.src}
                width={item.icon.width}
              />
            </span>
            <span className="-ml-[46px] flex min-h-[72px] items-center rounded-[57px] border-[1.7px] border-surface-dark py-2 pl-[58px] pr-5 text-base font-bold leading-[1.15] tracking-[-0.01em] text-body md:-ml-[63px] md:h-[89px] md:pl-[73px] md:pr-6 md:text-[22px] md:leading-[24px] lg:whitespace-pre-line">
              {item.texto}
            </span>
          </li>
        ))}
      </ul>
    </div>
  </section>
);
