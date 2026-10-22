import { SectionTitle } from "@/components/ui/SectionTitle";
import { SmartImage } from "@/components/ui/SmartImage";
import { conheca } from "@/content/home";

// Figma 208:295: foto vertical (363×510) à esquerda, título e texto em itálico à direita.
export const ConhecaBandejao = () => (
  <section className="py-16 lg:pb-[233px] lg:pt-[144px]">
    <div className="mx-auto flex max-w-[960px] flex-col gap-10 px-4 sm:px-6 md:flex-row md:items-start md:gap-12 lg:gap-[101px] xl:px-0">
      <div className="order-2 mx-auto w-full max-w-[363px] md:order-1 md:mx-0 md:shrink-0">
        <SmartImage
          innerShadow
          rounded
          aspect="363/510"
          image={conheca.image}
          sizes="363px"
        />
      </div>

      <div className="order-1 md:order-2 md:max-w-[496px] lg:pt-[45px]">
        <SectionTitle
          className="[&>span:last-child]:tracking-[-2.2px]"
          first={conheca.titulo[0]}
          second={conheca.titulo[1]}
        />
        <div className="mt-[10px] space-y-[27px] text-lg font-medium italic tracking-[-0.01em] text-body">
          {conheca.paragrafos.map((p) => (
            <p key={p.slice(0, 20)}>{p}</p>
          ))}
        </div>
      </div>
    </div>
  </section>
);
