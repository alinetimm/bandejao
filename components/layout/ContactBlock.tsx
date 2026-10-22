import clsx from "clsx";
import Image from "next/image";

import { QuoteForm } from "@/components/forms/QuoteForm";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { siteConfig } from "@/config/site";

type ContactBlockProps = {
  // footer: rodapé das páginas (Figma 453:811) · page: destaque na página Contato (Figma 453:814)
  variant?: "footer" | "page";
  showSocial?: boolean;
};

// Logo + endereços das unidades + formulário de orçamento. Âncora: #orcamento
// Na variante "page" (Figma 453:814/453:801) o bloco é mais alto e centralizado,
// sem o título "Solicite um orçamento" visível e sem os ícones sociais.
export const ContactBlock = ({
  variant = "footer",
  showSocial = variant === "footer",
}: ContactBlockProps) => (
  <section
    aria-label="Contato e orçamento"
    className={clsx(
      // scroll-margin: o link #orcamento para abaixo da navbar sticky
      "scroll-mt-[var(--header-h)] bg-surface-dark text-white",
      variant === "footer"
        ? "pb-16 pt-11"
        : "py-16 lg:pb-[169px] lg:pt-[157px]",
    )}
    id="orcamento"
  >
    <div
      className={clsx(
        "mx-auto flex flex-col gap-12 px-4 sm:px-6 lg:flex-row lg:gap-0 xl:px-0",
        variant === "footer" ? "max-w-[1192px]" : "max-w-[1125px]",
      )}
    >
      <div
        className={clsx(
          "lg:shrink-0",
          variant === "footer"
            ? "lg:w-[465px] lg:pt-[7px]"
            : "lg:w-[517px] lg:pt-[9px]",
        )}
      >
        <Image
          alt={siteConfig.name}
          height={47}
          src="/assets/brand/logo.svg"
          width={180}
        />

        <div className="mt-[50px] space-y-5">
          {siteConfig.unidades.map((unidade) => (
            <address
              key={unidade.cidade}
              className="text-base not-italic leading-[29px]"
            >
              <p className="font-bold">{unidade.cidade}</p>
              <p className="font-medium">{unidade.endereco}</p>
              <p className="flex flex-wrap gap-x-3 font-medium">
                {unidade.telefones.map((tel) => (
                  <a
                    key={tel.href}
                    className="hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
                    href={tel.href}
                  >
                    {tel.label}
                  </a>
                ))}
              </p>
            </address>
          ))}
        </div>

        {showSocial && <SocialLinks className="mt-5" />}
      </div>

      <QuoteForm className="lg:max-w-[608px]" hideTitle={variant === "page"} />
    </div>
  </section>
);
