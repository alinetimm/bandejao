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
    <p className="text-[17px] font-medium tracking-[-0.01em] text-body lg:text-lg">
      <RichText value={bloco.subtitulo} />
    </p>
    <div
      className="mt-[20px] space-y-[20px] text-[15px] md:text-base lg:text-lg font-medium lg:mt-[27px] lg:space-y-[27px] tracking-[-0.01em] text-body lg:max-w-[var(--texto-w)]"
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
  className,
}: {
  foto?: FotoServico;
  arredondada: boolean;
  sombra?: boolean;
  sizes: string;
  className?: string;
}) =>
  foto ? (
    <SmartImage
      aspect={foto.aspect}
      aspectMobile={foto.aspectMobile}
      className={className}
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
  // Fotos extras que só existem no layout mobile do Figma (ex.: Buffet)
  const extrasMobile = bloco.fotos.filter((f) => f.somenteMobile);
  const principal = bloco.fotos.find((f) => !f.somenteMobile);

  return (
    // scroll-margin: a âncora (/services#id) para abaixo da navbar sticky
    <section className="scroll-mt-[calc(var(--header-h)+24px)]" id={bloco.id}>
      {bloco.layout === "texto-foto-faixa" && (
        // Mobile (Figma 352:376): texto, foto larga e, abaixo, as duas menores lado a lado
        <div className="grid grid-cols-2 gap-x-3 gap-y-4 lg:grid-cols-[705fr_458fr] lg:gap-x-8 lg:gap-y-[37px]">
          <div className="col-span-2 lg:col-span-1">
            <Texto bloco={bloco} />
          </div>
          <div className="order-2 lg:order-none lg:self-end">
            <Foto arredondada={r} foto={f1} sizes="458px" />
          </div>
          <Foto
            arredondada={false}
            className="order-1 col-span-2 lg:order-none lg:col-span-1"
            foto={f2}
            sizes="705px"
          />
          {/* No Figma esta foto tem sombra quase nula (5%): só cantos */}
          <Foto
            arredondada={r}
            className="order-3 lg:order-none"
            foto={f3}
            sizes="458px"
            sombra={false}
          />
        </div>
      )}

      {bloco.layout === "texto-duas-verticais" && (
        <div className="grid gap-6 lg:grid-cols-[580fr_580fr] lg:gap-x-[33px]">
          <Texto bloco={bloco} />
          {/* Colunas proporcionais às larguras do Figma => as duas fotos ficam com a mesma altura */}
          <div
            className="grid grid-cols-[var(--cols)] gap-3 lg:gap-[26px]"
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
          className="grid gap-6 lg:grid-cols-[minmax(0,var(--foto-w))_1fr] lg:gap-x-[30px]"
          style={
            {
              "--foto-w": `${principal?.aspect.split("/")[0] ?? 580}px`,
            } as CSSProperties
          }
        >
          <div
            className={
              extrasMobile.length
                ? "order-2 grid grid-cols-2 gap-3 lg:order-1 lg:block"
                : "order-2 lg:order-1"
            }
          >
            <Foto arredondada={r} foto={principal} sizes="580px" />
            {extrasMobile.map((f) => (
              <Foto
                key={f.src}
                arredondada={r}
                className="lg:hidden"
                foto={f}
                sizes="50vw"
              />
            ))}
          </div>
          <div className="order-1 lg:order-2">
            <Texto bloco={bloco} />
          </div>
        </div>
      )}
    </section>
  );
};
