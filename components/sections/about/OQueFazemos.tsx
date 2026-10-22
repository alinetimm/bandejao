import { ListaMarcada, Subtitulo, textoCorrido } from "./shared";

import { oQueFazemos } from "@/content/about";

// Figma 228:269: título, introdução e lista com quadrado vazado.
export const OQueFazemos = () => (
  <section>
    <Subtitulo>{oQueFazemos.titulo}</Subtitulo>
    <p className={`mt-[27px] ${textoCorrido}`}>{oQueFazemos.intro}</p>
    <div className="mt-[27px]">
      <ListaMarcada itens={oQueFazemos.itens} marcador="quadrado" />
    </div>
  </section>
);
