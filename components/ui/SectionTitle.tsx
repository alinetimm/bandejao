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
  // Tamanhos do Figma: single 49px/52px, stacked 55px/55px, ExtraBold, tracking -1%
  if (variant === "single") {
    return (
      <Tag
        className={clsx(
          "text-[34px] font-extrabold leading-tight tracking-[-0.01em] md:text-[49px] md:leading-[52px]",
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
          ? "text-[30px] font-extrabold uppercase leading-[1.1] md:text-[49px] md:leading-[52px]"
          : "text-[40px] font-extrabold leading-[1] md:text-[55px] md:leading-[55px]",
        alignClass[align],
        className,
      )}
    >
      <span className="text-brand">{first}</span>
      {second && <span className="text-ink">{second}</span>}
    </Tag>
  );
};
