import type { Partner } from "@/content/partners";

import Image from "next/image";

import { SectionTitle } from "@/components/ui/SectionTitle";
import { parceirosTitulo } from "@/content/home";

// Figma 72:147–314:215: grade 5×5 de logos (184px; a 2ª linha tem 120px de altura).
// Mobile (Figma 387:581): também 5 colunas, com a mesma 2ª linha mais baixa (104×72).
export const Parceiros = ({ partners }: { partners: Partner[] }) => (
  <section className="pb-12 pt-4 lg:pb-[45px] lg:pt-[122px]">
    <div className="mx-auto max-w-[992px] px-4 sm:px-6 xl:px-0">
      <SectionTitle
        align="center"
        color="ink"
        first={parceirosTitulo}
        variant="single"
      />

      <ul className="mt-5 grid grid-cols-5 gap-x-2.5 gap-y-2 md:gap-4 lg:mt-[23px] lg:grid-rows-[184px_120px_184px_184px_184px] lg:gap-x-[18px] lg:gap-y-[19px]">
        {partners.map((p) => (
          <li
            key={p.id}
            className="relative aspect-square [&:nth-child(n+6):nth-child(-n+10)]:aspect-[104/72] lg:!aspect-auto"
          >
            <Image
              fill
              alt={p.name}
              className="object-contain p-0.5 lg:p-2"
              sizes="(min-width: 1024px) 184px, 20vw"
              src={p.logo}
            />
          </li>
        ))}
      </ul>
    </div>
  </section>
);
