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
  if (variant === "single") {
    return (
      <Tag
        className={clsx(
          "text-3xl font-bold leading-tight md:text-[40px]",
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
        "flex flex-col leading-none",
        variant === "uppercase"
          ? "text-3xl font-black uppercase md:text-5xl"
          : "text-4xl font-extrabold md:text-[56px]",
        alignClass[align],
        className,
      )}
    >
      <span className="text-brand">{first}</span>
      {second && <span className="text-ink">{second}</span>}
    </Tag>
  );
};
