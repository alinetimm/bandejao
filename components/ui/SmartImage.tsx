import type { ContentImage } from "@/types";

import clsx from "clsx";
import Image from "next/image";

import { ImagePlaceholder } from "./ImagePlaceholder";

type SmartImageProps = {
  image: ContentImage;
  // Proporção do Figma, ex.: "4/3", "368/261". Sem aspect, o pai define a altura.
  aspect?: string;
  rounded?: boolean;
  priority?: boolean;
  sizes?: string;
  className?: string;
  imageClassName?: string;
};

// next/image quando há src; ImagePlaceholder com o mesmo tamanho quando não há.
export const SmartImage = ({
  image,
  aspect,
  rounded = false,
  priority = false,
  sizes = "100vw",
  className,
  imageClassName,
}: SmartImageProps) => (
  <div
    className={clsx(
      "relative w-full overflow-hidden",
      rounded && "rounded-[20px]",
      className,
    )}
    style={aspect ? { aspectRatio: aspect } : undefined}
  >
    {image.src ? (
      <Image
        fill
        alt={image.alt}
        className={clsx("object-cover", imageClassName)}
        priority={priority}
        sizes={sizes}
        src={image.src}
      />
    ) : (
      <ImagePlaceholder
        alt={image.alt}
        aspect={aspect}
        className={clsx(rounded && "rounded-[20px]")}
        hint={image.hint}
      />
    )}
  </div>
);
