import { SmartImage } from "@/components/ui/SmartImage";
import { refeicoes } from "@/content/home";

// Figma 208:286: textos alinhados à direita sobre a foto grande (730×460) + 3 fotos (400×210) à direita.
export const RefeicoesIndustriais = () => (
  <section className="pb-16 lg:pb-[183px]">
    <div className="mx-auto grid max-w-[1196px] gap-10 px-4 sm:px-6 lg:grid-cols-[730fr_400fr] lg:gap-16 xl:px-0">
      <div className="flex flex-col gap-8 lg:justify-between">
        <div className="text-right">
          <h2 className="text-[40px] font-extrabold leading-[1] tracking-[-0.01em] text-brand md:text-[55px] md:leading-[52px]">
            {refeicoes.titulo}
          </h2>
          <p className="ml-auto mt-3 max-w-[422px] text-2xl font-extrabold italic leading-[1.1] tracking-[-0.01em] text-black md:mt-0 md:text-[34px] md:leading-[36px]">
            {refeicoes.subtitulo}
          </p>
          {/* TODO(conteúdo): texto provisório — ver content/home.ts */}
          <p className="ml-auto mt-6 max-w-[348px] text-lg italic tracking-[-0.01em] text-body">
            {refeicoes.texto}
          </p>
        </div>

        <SmartImage
          aspect="730/460"
          focus="center 34%"
          image={refeicoes.principal}
          sizes="(min-width: 1024px) 730px, 100vw"
        />
      </div>

      <ul className="grid gap-6 sm:grid-cols-3 lg:grid-cols-1 lg:gap-[56px]">
        {refeicoes.laterais.map((img) => (
          <li key={img.src}>
            <SmartImage
              innerShadow
              rounded
              aspect="400/210"
              image={img}
              sizes="(min-width: 1024px) 400px, (min-width: 640px) 33vw, 100vw"
            />
          </li>
        ))}
      </ul>
    </div>
  </section>
);
