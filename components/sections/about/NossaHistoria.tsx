import { OQueFazemos } from "./OQueFazemos";
import { Foto, Subtitulo, textoCorrido } from "./shared";

import { historia } from "@/content/about";

// Figma 113:284–228:306: duas colunas independentes.
// Esquerda: fotos (1 grande + 3 menores) e "O Que Fazemos". Direita: texto e 2 fotos.
// Mobile (Figma 477:192/477:199): as colunas somem (`contents`) e a ordem vira:
// foto grande, texto, fotos menores, O Que Fazemos e as 2 fotos quadradas lado a lado.
export const NossaHistoria = () => (
  <div className="flex flex-col gap-8 lg:flex-row lg:gap-8">
    <div className="contents lg:flex lg:w-[582px] lg:shrink-0 lg:flex-col lg:gap-[78px]">
      <div className="contents lg:block lg:space-y-5">
        <div className="order-1 lg:order-none">
          <Foto foto={historia.principal} sizes="582px" />
        </div>
        <div className="order-3 grid grid-cols-[215fr_346fr] gap-3 lg:order-none lg:gap-5">
          <Foto foto={historia.vertical} sizes="215px" />
          <div className="flex flex-col justify-between gap-3 lg:gap-[22px]">
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
      <section className="order-2 lg:order-none lg:-mt-[9px] lg:pl-[7px]">
        <Subtitulo>{historia.titulo}</Subtitulo>
        <div
          className={`mt-4 space-y-5 lg:mt-[27px] lg:space-y-[27px] ${textoCorrido}`}
        >
          {historia.paragrafos.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </div>
      </section>
      <div className="order-5 grid grid-cols-2 gap-3 lg:order-none lg:block lg:space-y-5">
        {historia.direita.map((f) => (
          <Foto key={f.src} foto={f} sizes="497px" />
        ))}
      </div>
    </div>
  </div>
);
