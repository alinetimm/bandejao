import { Foto, Subtitulo, textoCorrido } from "./shared";

import { RichText } from "@/components/ui/RichText";
import { filosofia } from "@/content/about";

// Figma 277:191–277:193: 2 fotos verticais à esquerda, texto à direita.
export const NossaFilosofia = () => (
  <section className="grid gap-6 lg:grid-cols-[582px_1fr] lg:gap-8">
    <div className="order-2 grid grid-cols-[274fr_286fr] gap-3 lg:gap-[21px] lg:order-1">
      {filosofia.fotos.map((f) => (
        <Foto key={f.src} foto={f} sizes="286px" />
      ))}
    </div>

    <div className="order-1 lg:order-2 lg:-mt-[9px] lg:max-w-[458px] lg:pl-[1px]">
      <Subtitulo>{filosofia.titulo}</Subtitulo>
      <div className={`mt-5 lg:mt-[27px] ${textoCorrido}`}>
        <p>
          <RichText value={filosofia.lema} />
        </p>
        <p>{filosofia.intro}</p>
      </div>
      <div
        className={`mt-5 lg:mt-[27px] space-y-5 lg:space-y-[27px] ${textoCorrido}`}
      >
        {filosofia.pilares.map((pilar, i) => (
          <p key={i}>
            <RichText value={pilar} />
          </p>
        ))}
      </div>
    </div>
  </section>
);
