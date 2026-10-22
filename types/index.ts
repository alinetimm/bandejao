import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export type ContentImage = {
  src?: string; // vazio/undefined => renderiza ImagePlaceholder
  alt: string; // obrigatório, descritivo, pt-BR
  hint?: string; // o que deve ir aqui (aparece no placeholder) ex.: "Foto: equipe servindo buffet"
};

// Texto com trechos em negrito (opcionalmente itálico),
// ex.: ["Servimos há mais de ", { forte: "30 anos" }, "."]
// "\n" vira quebra de linha a partir do tablet (mesmas quebras do Figma).
export type RichText = (string | { forte: string; italico?: boolean })[];

// Ícone SVG exportado do Figma, com o tamanho original
export type ContentIcon = { src: string; width: number; height: number };
