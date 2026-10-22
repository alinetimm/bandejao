import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export type ContentImage = {
  src?: string; // vazio/undefined => renderiza ImagePlaceholder
  alt: string; // obrigatório, descritivo, pt-BR
  hint?: string; // o que deve ir aqui (aparece no placeholder) ex.: "Foto: equipe servindo buffet"
};
