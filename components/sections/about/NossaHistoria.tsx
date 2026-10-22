import { OQueFazemos } from "./OQueFazemos";
import { Foto, Subtitulo, textoCorrido } from "./shared";

import { historia } from "@/content/about";

// Figma 113:284–228:306: duas colunas independentes.
// Esquerda: fotos (1 grande + 3 menores) e "O Que Fazemos". Direita: texto e 2 fotos.
// No mobile as colunas somem (`contents`) e a ordem vira: texto, fotos, O Que Fazemos.
export const NossaHistoria = () => (
  <div className="flex flex-col gap-10 lg:flex-row lg:gap-8">
    <div className="contents lg:flex lg:w-[582px] lg:shrink-0 lg:flex-col lg:gap-[78px]">
      <div className="order-2 space-y-5 lg:order-none">
        <Foto foto={historia.principal} sizes="582px" />
        <div className="grid grid-cols-[215fr_346fr] gap-5">
          <Foto foto={historia.vertical} sizes="215px" />
          <div className="flex flex-col justify-between gap-[22px]">
            {historia.empilhadas.map((f) => (
              <Foto key={f.src} foto={f} sizes="346px" />
            ))}
          </div>
        </div>
      </div>
      <div className="order-4 lg:order-none">
        <OQueFazemos />
      </div>
    </div>

    <div className="contents lg:flex lg:max-w-[497px] lg:flex-col lg:gap-[31px]">
      <section className="order-1 lg:order-none lg:-mt-[9px] lg:pl-[7px]">
        <Subtitulo>{historia.titulo}</Subtitulo>
        <div className={`mt-[27px] space-y-[27px] ${textoCorrido}`}>
          {historia.paragrafos.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </div>
      </section>
      <div className="order-3 space-y-5 lg:order-none">
        {historia.direita.map((f) => (
          <Foto key={f.src} foto={f} sizes="497px" />
        ))}
      </div>
    </div>
  </div>
);
