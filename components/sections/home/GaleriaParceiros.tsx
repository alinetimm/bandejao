import type { GalleryItem } from "@/content/gallery";

import { SectionTitle } from "@/components/ui/SectionTitle";
import { SmartImage } from "@/components/ui/SmartImage";
import { galeriaTitulo } from "@/content/home";

// Figma 208:349 (desktop): mosaico 1104×597 com 8 fotos.
// Figma 387:582 (mobile): outro mosaico — 1 vertical + 2 empilhadas, 3 quadradas, 2 lado a lado.
// Os dois mosaicos são renderizados e um deles fica oculto por breakpoint.
const Foto = ({
  item,
  sizes,
  aspect,
}: {
  item?: GalleryItem;
  sizes: string;
  aspect?: string;
}) =>
  item ? (
    <SmartImage
      aspect={aspect}
      className={aspect ? undefined : "h-full min-h-0"}
      focus={item.focus}
      image={item.image}
      sizes={sizes}
    />
  ) : null;

export const GaleriaParceiros = ({ items }: { items: GalleryItem[] }) => {
  const [a, b, c, d, e, f, g, h] = items;

  return (
    <section className="pb-12 lg:pb-[183px]">
      <div className="mx-auto max-w-[1107px] px-4 sm:px-6 xl:px-0">
        <SectionTitle
          align="right"
          className="!font-bold"
          first={galeriaTitulo}
          variant="single"
        />

        {/* Mobile e tablet */}
        <div className="mt-5 space-y-2.5 md:space-y-4 lg:hidden">
          <div className="grid grid-cols-[192fr_317fr] gap-2.5 md:gap-4">
            <Foto aspect="192/408" item={a} sizes="38vw" />
            <div className="flex flex-col justify-between gap-2.5 md:gap-4">
              <Foto aspect="317/200" item={h} sizes="60vw" />
              <Foto aspect="317/186" item={f} sizes="60vw" />
            </div>
          </div>
          <div className="grid grid-cols-[160fr_169fr_160fr] gap-2.5 md:gap-4">
            <Foto aspect="160/160" item={g} sizes="33vw" />
            <Foto aspect="169/160" item={d} sizes="33vw" />
            <Foto aspect="160/160" item={e} sizes="33vw" />
          </div>
          <div className="grid grid-cols-[246fr_263fr] gap-2.5 md:gap-4">
            <Foto aspect="246/252" item={b} sizes="50vw" />
            <Foto aspect="263/252" item={c} sizes="50vw" />
          </div>
        </div>

        {/* Desktop */}
        <div className="mt-[29px] hidden aspect-[1104/597] max-w-[1104px] grid-cols-[325fr_219fr_526fr] gap-[17px] lg:grid">
          <Foto item={a} sizes="325px" />
          <div className="grid min-h-0 grid-rows-[299fr_280fr] gap-[18px]">
            <Foto item={b} sizes="219px" />
            <Foto item={c} sizes="218px" />
          </div>
          <div className="grid min-h-0 grid-rows-[199fr_195fr_173fr] gap-[15px]">
            <div className="grid min-h-0 grid-cols-[238fr_272fr] gap-4">
              <Foto item={d} sizes="238px" />
              <Foto item={e} sizes="272px" />
            </div>
            <Foto item={f} sizes="528px" />
            <div className="grid min-h-0 grid-cols-[173fr_338fr] gap-[17px]">
              <Foto item={g} sizes="173px" />
              <Foto item={h} sizes="338px" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
