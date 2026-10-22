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
// Na variante "page" (Figma 453:814/453:801) o bloco é mais alto e centralizado e, no desktop,
// não mostra o título "Solicite um orçamento" nem os ícones sociais.
// Mobile (Figma 405:203 e rodapés "Android"): formulário primeiro, depois logo, endereços e redes.
export const ContactBlock = ({
  variant = "footer",
  showSocial = true,
}: ContactBlockProps) => (
  <section
    aria-label="Contato e orçamento"
    className={clsx(
      // scroll-margin: o link #orcamento para abaixo da navbar sticky
      "scroll-mt-[var(--header-h)] bg-surface-dark text-white",
      variant === "footer"
        ? "pb-10 pt-8 lg:pb-16 lg:pt-11"
        : "py-8 lg:pb-[169px] lg:pt-[157px]",
    )}
    id="orcamento"
  >
    <div
      className={clsx(
        "mx-auto flex flex-col gap-10 px-4 sm:px-6 lg:flex-row lg:gap-0 xl:px-0",
        variant === "footer" ? "max-w-[1192px]" : "max-w-[1125px]",
      )}
    >
      <div
        className={clsx(
          "order-2 lg:order-1 lg:shrink-0",
          variant === "footer"
            ? "lg:w-[465px] lg:pt-[7px]"
            : "lg:w-[517px] lg:pt-[9px]",
        )}
      >
        <Image
          alt={siteConfig.name}
          className="h-auto w-[120px] lg:w-[180px]"
          height={47}
          src="/assets/brand/logo.svg"
          width={180}
        />

        <div className="mt-6 space-y-5 lg:mt-[50px]">
          {siteConfig.unidades.map((unidade) => (
            <address
              key={unidade.cidade}
              className="text-[14px] not-italic leading-[1.8] lg:text-base lg:leading-[29px]"
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

        {showSocial && (
          <SocialLinks
            className={clsx("mt-5", variant === "page" && "lg:hidden")}
          />
        )}
      </div>

      <QuoteForm
        className="order-1 lg:order-2 lg:max-w-[608px]"
        hideTitle={variant === "page"}
      />
    </div>
  </section>
);
