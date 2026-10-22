import clsx from "clsx";

type SectionTitleProps = {
  // stacked: duas linhas brand/ink (Home) · single: uma linha, uma cor
  // uppercase: duas linhas em caixa alta (página Serviços)
  variant?: "stacked" | "single" | "uppercase";
  first: string;
  second?: string;
  // Cor da variante single
  color?: "brand" | "ink" | "white";
  as?: "h1" | "h2" | "h3";
  align?: "left" | "center" | "right";
  className?: string;
};

const colorClass = {
  brand: "text-brand",
  ink: "text-ink",
  white: "text-white",
};
const alignClass = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
};

export const SectionTitle = ({
  variant = "stacked",
  first,
  second,
  color = "brand",
  as: Tag = "h2",
  align = "left",
  className,
}: SectionTitleProps) => {
  // Tamanhos do Figma (desktop): single 49px/52px, stacked 55px/55px, uppercase 49px,
  // ExtraBold, tracking -1%. Mobile segue os frames "Android" (~metade, com mínimo legível).
  if (variant === "single") {
    return (
      <Tag
        className={clsx(
          "text-[24px] font-extrabold leading-tight tracking-[-0.01em] md:text-[36px] lg:text-[49px] lg:leading-[52px]",
          colorClass[color],
          alignClass[align],
          className,
        )}
      >
        {first}
      </Tag>
    );
  }

  return (
    <Tag
      className={clsx(
        "flex flex-col tracking-[-0.01em]",
        variant === "uppercase"
          ? "text-[24px] font-extrabold uppercase leading-[1.1] md:text-[36px] lg:text-[49px] lg:leading-[52px]"
          : "text-[26px] font-extrabold leading-[1] md:text-[40px] lg:text-[55px] lg:leading-[55px]",
        alignClass[align],
        className,
      )}
    >
      <span className="text-brand">{first}</span>
      {second && <span className="text-ink">{second}</span>}
    </Tag>
  );
};
