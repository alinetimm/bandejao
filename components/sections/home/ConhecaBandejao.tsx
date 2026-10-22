import { SectionTitle } from "@/components/ui/SectionTitle";
import { SmartImage } from "@/components/ui/SmartImage";
import { conheca } from "@/content/home";

// Figma 208:295: foto vertical (363×510) à esquerda, título e texto em itálico à direita.
// Mobile (Figma 244:231): título centralizado, foto larga (616×416) e o texto abaixo.
// A coluna da direita usa `contents` no mobile para intercalar a foto entre título e texto.
export const ConhecaBandejao = () => (
  <section className="py-12 lg:pb-[233px] lg:pt-[144px]">
    <div className="mx-auto flex max-w-[960px] flex-col gap-6 px-4 sm:px-6 md:flex-row md:items-start md:gap-12 lg:gap-[101px] xl:px-0">
      <div className="order-2 w-full md:order-1 md:max-w-[363px] md:shrink-0">
        <SmartImage
          innerShadow
          rounded
          aspect="363/510"
          aspectMobile="616/416"
          className="md:!aspect-[363/510]"
          image={conheca.image}
          sizes="(min-width: 768px) 363px, 100vw"
        />
      </div>

      <div className="contents md:order-2 md:block md:max-w-[496px] lg:pt-[45px]">
        <SectionTitle
          className="order-1 text-center md:text-left [&>span:last-child]:tracking-[-0.04em]"
          first={conheca.titulo[0]}
          second={conheca.titulo[1]}
        />
        <div className="order-3 space-y-5 text-[15px] font-medium italic tracking-[-0.01em] text-body md:mt-[10px] md:text-base lg:space-y-[27px] lg:text-lg">
          {conheca.paragrafos.map((p) => (
            <p key={p.slice(0, 20)}>{p}</p>
          ))}
        </div>
      </div>
    </div>
  </section>
);
