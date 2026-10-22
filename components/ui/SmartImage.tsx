import type { ContentImage } from "@/types";
import type { CSSProperties } from "react";

import clsx from "clsx";
import Image from "next/image";

import { ImagePlaceholder } from "./ImagePlaceholder";

type SmartImageProps = {
  image: ContentImage;
  // Proporção do Figma, ex.: "4/3", "368/261". Sem aspect, o pai define a altura.
  aspect?: string;
  // Proporção abaixo de 1024px (frames "Android" do Figma), quando difere do desktop
  aspectMobile?: string;
  // Cantos de 25px usados nas fotos do Figma
  rounded?: boolean;
  // Sombra interna das fotos arredondadas do Figma
  innerShadow?: boolean;
  // object-position do recorte, ex.: "center 40%"
  focus?: string;
  priority?: boolean;
  sizes?: string;
  className?: string;
  imageClassName?: string;
};

// next/image quando há src; ImagePlaceholder com o mesmo tamanho quando não há.
export const SmartImage = ({
  image,
  aspect,
  aspectMobile,
  rounded = false,
  innerShadow = false,
  focus,
  priority = false,
  sizes = "100vw",
  className,
  imageClassName,
}: SmartImageProps) => (
  <div
    className={clsx(
      "relative w-full overflow-hidden",
      rounded && "rounded-[25px]",
      aspectMobile && "aspect-[var(--ar-m)] lg:aspect-[var(--ar)]",
      className,
    )}
    style={
      aspectMobile
        ? ({
            "--ar": aspect ?? aspectMobile,
            "--ar-m": aspectMobile,
          } as CSSProperties)
        : aspect
          ? { aspectRatio: aspect }
          : undefined
    }
  >
    {image.src ? (
      <Image
        fill
        alt={image.alt}
        className={clsx("object-cover", imageClassName)}
        priority={priority}
        sizes={sizes}
        src={image.src}
        style={focus ? { objectPosition: focus } : undefined}
      />
    ) : (
      <ImagePlaceholder
        alt={image.alt}
        aspect={aspect}
        className={clsx(rounded && "rounded-[25px]")}
        hint={image.hint}
      />
    )}
    {innerShadow && (
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-[inherit] shadow-[inset_0px_4px_8px_8px_rgba(0,0,0,0.25)]"
      />
    )}
  </div>
);
