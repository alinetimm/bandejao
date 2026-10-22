import type { ButtonHTMLAttributes, ReactNode } from "react";

import clsx from "clsx";
import NextLink from "next/link";

const comum =
  "inline-flex items-center justify-center gap-2 rounded-[15px] bg-brand text-white transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60";

const variantes = {
  // Botão "ENVIAR" do Figma (72:163): 38px de altura, Poppins ExtraBold caixa alta.
  // 19px (em vez de 18) para contar como "texto grande" no contraste branco × laranja.
  primary:
    "h-[38px] min-w-[143px] px-6 text-[19px] font-extrabold uppercase tracking-[-0.01em]",
  // Pílula "conheça o nosso delivery" do Figma (208:370): 32px, Poppins Medium 21px
  pill: "min-h-9 px-5 py-1 text-[15px] font-medium tracking-[-0.01em] md:text-lg lg:min-h-8 lg:text-[21px]",
};

type ButtonProps = {
  children: ReactNode;
  className?: string;
  variant?: keyof typeof variantes;
} & (
  | ({ href?: undefined } & ButtonHTMLAttributes<HTMLButtonElement>)
  | { href: string; external?: boolean }
);

export const Button = ({ variant = "primary", ...props }: ButtonProps) => {
  const base = clsx(comum, variantes[variant]);

  if (props.href !== undefined) {
    const { href, children, className } = props;
    // Links "#" (placeholders) não abrem nova aba — CLAUDE.md §2.6
    const external = "external" in props && props.external && href !== "#";

    if (external) {
      return (
        <a
          className={clsx(base, className)}
          href={href}
          rel="noopener noreferrer"
          target="_blank"
        >
          {children}
        </a>
      );
    }

    return (
      <NextLink className={clsx(base, className)} href={href}>
        {children}
      </NextLink>
    );
  }

  const { children, className, type = "button", ...rest } = props;

  return (
    <button className={clsx(base, className)} type={type} {...rest}>
      {children}
    </button>
  );
};
