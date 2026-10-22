import Image from "next/image";

import { SectionTitle } from "@/components/ui/SectionTitle";
import { diferenciais } from "@/content/diferenciais";
import { diferenciaisIntro } from "@/content/home";

// Figma 244:246: título, texto e 8 itens em 2 colunas — círculo laranja (109×110) com
// ícone branco sobre uma "pílula" com borda (89px de altura, cantos 57px).
// Mobile (Figma 244:247): 1 coluna em zigue-zague (itens pares recuados ~15%).
export const Diferenciais = () => (
  <section className="pb-12 lg:pb-[112px]">
    <div className="mx-auto max-w-[1168px] px-4 sm:px-6 xl:px-0">
      <SectionTitle
        first={diferenciaisIntro.titulo[0]}
        second={diferenciaisIntro.titulo[1]}
      />
      <p className="mt-3 text-[15px] font-medium tracking-[-0.01em] text-body md:text-base lg:mt-[13px] lg:pl-[6px] lg:text-lg">
        {diferenciaisIntro.texto}
      </p>

      <ul className="mt-6 grid gap-y-3 md:gap-y-5 lg:ml-[58px] lg:mt-[96px] lg:grid-flow-col lg:grid-cols-[568px_1fr] lg:grid-rows-4 lg:gap-y-9">
        {diferenciais.map((item) => (
          <li
            key={item.id}
            className="flex items-center max-lg:even:ml-[15%] lg:even:ml-0"
          >
            <span className="relative z-10 flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full bg-brand md:h-[80px] md:w-[80px] lg:h-[110px] lg:w-[109px]">
              <Image
                alt=""
                className="h-auto w-[60%] lg:w-auto"
                height={item.icon.height}
                src={item.icon.src}
                width={item.icon.width}
              />
            </span>
            <span className="-ml-[42px] flex min-h-[44px] w-[260px] max-w-[calc(100%-10px)] items-center rounded-[57px] border-[1.7px] border-surface-dark py-1.5 pl-[52px] pr-4 text-[13px] font-bold leading-[1.15] tracking-[-0.01em] text-body md:-ml-[56px] md:min-h-[72px] md:w-[380px] md:pl-[70px] md:text-lg lg:-ml-[63px] lg:h-[89px] lg:w-auto lg:max-w-none lg:whitespace-pre-line lg:pl-[73px] lg:pr-6 lg:text-[22px] lg:leading-[24px]">
              {item.texto}
            </span>
          </li>
        ))}
      </ul>
    </div>
  </section>
);
