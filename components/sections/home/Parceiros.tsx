import type { Partner } from "@/content/partners";

import Image from "next/image";

import { SectionTitle } from "@/components/ui/SectionTitle";
import { parceirosTitulo } from "@/content/home";

// Figma 72:147–314:215: grade 5×5 de logos (184px; a 2ª linha tem 120px de altura).
export const Parceiros = ({ partners }: { partners: Partner[] }) => (
  <section className="pb-16 pt-16 lg:pb-[45px] lg:pt-[122px]">
    <div className="mx-auto max-w-[992px] px-4 sm:px-6 xl:px-0">
      <SectionTitle
        align="center"
        color="ink"
        first={parceirosTitulo}
        variant="single"
      />

      <ul className="mt-8 grid grid-cols-3 gap-3 sm:grid-cols-5 lg:mt-[23px] lg:grid-rows-[184px_120px_184px_184px_184px] lg:gap-x-[18px] lg:gap-y-[19px]">
        {partners.map((p) => (
          <li key={p.id} className="relative aspect-square lg:aspect-auto">
            <Image
              fill
              alt={p.name}
              className="object-contain p-1 lg:p-2"
              sizes="(min-width: 1024px) 184px, 30vw"
              src={p.logo}
            />
          </li>
        ))}
      </ul>
    </div>
  </section>
);
