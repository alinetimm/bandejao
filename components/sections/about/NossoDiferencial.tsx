import { Foto, ListaMarcada, Subtitulo } from "./shared";

import { diferencial } from "@/content/about";

// Figma 277:194–277:325: lista com check laranja à esquerda; 1 foto vertical + 2 empilhadas à direita.
export const NossoDiferencial = () => (
  <section className="grid gap-10 lg:grid-cols-[582px_1fr] lg:gap-8">
    <div className="lg:mt-[35px] lg:max-w-[531px] lg:-translate-x-[4px]">
      <Subtitulo>{diferencial.titulo}</Subtitulo>
      <div className="mt-[27px]">
        <ListaMarcada itens={diferencial.itens} marcador="check" />
      </div>
    </div>

    <div className="grid grid-cols-[213fr_258fr] gap-5 lg:max-w-[491px] lg:pl-[2px]">
      <Foto foto={diferencial.vertical} sizes="213px" />
      <div className="flex flex-col justify-between gap-5">
        {diferencial.empilhadas.map((f) => (
          <Foto key={f.src} foto={f} sizes="258px" />
        ))}
      </div>
    </div>
  </section>
);
