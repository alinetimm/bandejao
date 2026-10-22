import type { ButtonHTMLAttributes, ReactNode } from "react";

import clsx from "clsx";
import NextLink from "next/link";

// Estilo do botão "ENVIAR" do Figma (nó 72:163): laranja, cantos 15px, Poppins ExtraBold 18px.
const base =
  "inline-flex h-[38px] min-w-[143px] items-center justify-center gap-2 rounded-[15px] bg-brand px-6 text-lg font-extrabold uppercase tracking-[-0.01em] text-white transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand disabled:cursor-not-allowed disabled:opacity-60";

type ButtonProps = {
  children: ReactNode;
  className?: string;
} & (
  | ({ href?: undefined } & ButtonHTMLAttributes<HTMLButtonElement>)
  | { href: string; external?: boolean }
);

export const Button = (props: ButtonProps) => {
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
