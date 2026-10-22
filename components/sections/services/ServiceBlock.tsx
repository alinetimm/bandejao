import type { FotoServico, ServicoBloco } from "@/content/services";
import type { CSSProperties } from "react";

import { RichText } from "@/components/ui/RichText";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { SmartImage } from "@/components/ui/SmartImage";

// Um bloco da página Serviços (Figma 80:160). As 3 variantes de layout vêm de `bloco.layout`.
// No mobile tudo empilha com o texto antes das fotos.

const Texto = ({ bloco }: { bloco: ServicoBloco }) => (
  <div>
    <SectionTitle
      first={bloco.titulo[0]}
      second={bloco.titulo[1]}
      variant="uppercase"
    />
    <p className="text-lg font-medium tracking-[-0.01em] text-body">
      <RichText value={bloco.subtitulo} />
    </p>
    <div
      className="mt-[27px] space-y-[27px] text-lg font-medium tracking-[-0.01em] text-body lg:max-w-[var(--texto-w)]"
      style={
        bloco.larguraTexto
          ? ({ "--texto-w": `${bloco.larguraTexto}px` } as CSSProperties)
          : undefined
      }
    >
      {bloco.paragrafos.map((p) => (
        <p key={p.slice(0, 24)}>{p}</p>
      ))}
    </div>
  </div>
);

const Foto = ({
  foto,
  arredondada,
  sombra = arredondada,
  sizes,
}: {
  foto?: FotoServico;
  arredondada: boolean;
  sombra?: boolean;
  sizes: string;
}) =>
  foto ? (
    <SmartImage
      aspect={foto.aspect}
      focus={foto.focus}
      image={foto}
      innerShadow={sombra}
      rounded={arredondada}
      sizes={`(min-width: 1024px) ${sizes}, 100vw`}
    />
  ) : null;

export const ServiceBlock = ({ bloco }: { bloco: ServicoBloco }) => {
  const [f1, f2, f3] = bloco.fotos;
  const r = bloco.fotosArredondadas;

  return (
    // scroll-margin: a âncora (/services#id) para abaixo da navbar sticky
    <section className="scroll-mt-[calc(var(--header-h)+24px)]" id={bloco.id}>
      {bloco.layout === "texto-foto-faixa" && (
        <div className="grid gap-8 lg:grid-cols-[705fr_458fr] lg:gap-x-8 lg:gap-y-[37px]">
          <Texto bloco={bloco} />
          <div className="lg:self-end">
            <Foto arredondada={r} foto={f1} sizes="458px" />
          </div>
          <Foto arredondada={false} foto={f2} sizes="705px" />
          {/* No Figma esta foto tem sombra quase nula (5%): só cantos */}
          <Foto arredondada={r} foto={f3} sizes="458px" sombra={false} />
        </div>
      )}

      {bloco.layout === "texto-duas-verticais" && (
        <div className="grid gap-8 lg:grid-cols-[580fr_580fr] lg:gap-x-[33px]">
          <Texto bloco={bloco} />
          {/* Colunas proporcionais às larguras do Figma => as duas fotos ficam com a mesma altura */}
          <div
            className="grid grid-cols-[var(--cols)] gap-4 lg:gap-[26px]"
            style={
              {
                "--cols": `${f1?.aspect.split("/")[0] ?? 1}fr ${f2?.aspect.split("/")[0] ?? 1}fr`,
              } as CSSProperties
            }
          >
            <Foto arredondada={r} foto={f1} sizes="270px" />
            <Foto arredondada={r} foto={f2} sizes="286px" />
          </div>
        </div>
      )}

      {bloco.layout === "foto-texto" && (
        <div
          className="grid gap-8 lg:grid-cols-[minmax(0,var(--foto-w))_1fr] lg:gap-x-[30px]"
          style={
            {
              "--foto-w": `${f1?.aspect.split("/")[0] ?? 580}px`,
            } as CSSProperties
          }
        >
          <div className="order-2 lg:order-1">
            <Foto arredondada={r} foto={f1} sizes="580px" />
          </div>
          <div className="order-1 lg:order-2">
            <Texto bloco={bloco} />
          </div>
        </div>
      )}
    </section>
  );
};
