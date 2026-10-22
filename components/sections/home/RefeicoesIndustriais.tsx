import { SmartImage } from "@/components/ui/SmartImage";
import { refeicoes } from "@/content/home";

// Figma 208:286: textos alinhados à direita sobre a foto grande (730×460) + 3 fotos (400×210) à direita.
// Mobile (Figma 244:236): mantém as 2 colunas, com proporções 376×352 e 200×160 (cantos 10px).
export const RefeicoesIndustriais = () => (
  <section className="pb-12 lg:pb-[183px]">
    <div className="mx-auto grid max-w-[1196px] grid-cols-[376fr_200fr] gap-4 px-4 sm:px-6 md:gap-8 lg:grid-cols-[730fr_400fr] lg:gap-16 xl:px-0">
      <div className="flex flex-col justify-between gap-4 lg:gap-8">
        <div className="text-right">
          <h2 className="text-[22px] font-extrabold leading-[1.1] tracking-[-0.01em] text-brand md:text-[40px] lg:text-[55px] lg:leading-[52px]">
            {refeicoes.titulo}
          </h2>
          <p className="ml-auto mt-1 max-w-[422px] text-[15px] font-extrabold italic leading-[1.1] tracking-[-0.01em] text-surface-dark md:text-2xl lg:mt-0 lg:text-[34px] lg:leading-[36px] lg:text-black">
            {refeicoes.subtitulo}
          </p>
          {/* TODO(conteúdo): texto provisório — ver content/home.ts */}
          <p className="ml-auto mt-3 max-w-[348px] text-[13px] italic tracking-[-0.01em] text-body md:text-base lg:mt-6 lg:text-lg">
            {refeicoes.texto}
          </p>
        </div>

        <SmartImage
          aspect="730/460"
          aspectMobile="376/352"
          focus="center 34%"
          image={refeicoes.principal}
          sizes="(min-width: 1024px) 730px, 60vw"
        />
      </div>

      <ul className="flex flex-col justify-end gap-3 md:gap-6 lg:justify-start lg:gap-[56px]">
        {refeicoes.laterais.map((img) => (
          <li key={img.src}>
            <SmartImage
              innerShadow
              rounded
              aspect="400/210"
              aspectMobile="200/160"
              className="max-lg:!rounded-[10px]"
              image={img}
              sizes="(min-width: 1024px) 400px, 35vw"
            />
          </li>
        ))}
      </ul>
    </div>
  </section>
);
