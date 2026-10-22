import type { GalleryItem } from "@/content/gallery";

import clsx from "clsx";

import { SectionTitle } from "@/components/ui/SectionTitle";
import { SmartImage } from "@/components/ui/SmartImage";
import { galeriaTitulo } from "@/content/home";

// Figma 208:349: mosaico 1104×597 com 8 fotos. No mobile/tablet vira grade de 2 colunas
// (os agrupadores usam `contents` e somem do layout).
const Foto = ({ item, sizes }: { item?: GalleryItem; sizes: string }) =>
  item ? (
    <SmartImage
      className="aspect-square min-h-0 lg:aspect-auto lg:h-full"
      focus={item.focus}
      image={item.image}
      sizes={`(min-width: 1024px) ${sizes}, 50vw`}
    />
  ) : null;

const grupo = "contents lg:grid lg:min-h-0";

export const GaleriaParceiros = ({ items }: { items: GalleryItem[] }) => {
  const [a, b, c, d, e, f, g, h] = items;

  return (
    <section className="pb-16 lg:pb-[183px]">
      <div className="mx-auto max-w-[1107px] px-4 sm:px-6 xl:px-0">
        <SectionTitle
          align="right"
          className="!font-bold"
          first={galeriaTitulo}
          variant="single"
        />

        <div className="mt-8 grid grid-cols-2 gap-3 lg:mt-[29px] lg:aspect-[1104/597] lg:max-w-[1104px] lg:grid-cols-[325fr_219fr_526fr] lg:gap-[17px]">
          <Foto item={a} sizes="325px" />
          <div
            className={clsx(grupo, "lg:grid-rows-[299fr_280fr] lg:gap-[18px]")}
          >
            <Foto item={b} sizes="219px" />
            <Foto item={c} sizes="218px" />
          </div>
          <div
            className={clsx(
              grupo,
              "lg:grid-rows-[199fr_195fr_173fr] lg:gap-[15px]",
            )}
          >
            <div className={clsx(grupo, "lg:grid-cols-[238fr_272fr] lg:gap-4")}>
              <Foto item={d} sizes="238px" />
              <Foto item={e} sizes="272px" />
            </div>
            <Foto item={f} sizes="528px" />
            <div
              className={clsx(
                grupo,
                "lg:grid-cols-[173fr_338fr] lg:gap-[17px]",
              )}
            >
              <Foto item={g} sizes="173px" />
              <Foto item={h} sizes="338px" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
