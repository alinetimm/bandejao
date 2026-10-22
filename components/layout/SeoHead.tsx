import NextHead from "next/head";
import { useRouter } from "next/router";

import { siteConfig } from "@/config/site";

type SeoHeadProps = {
  // Sem title => só o nome do site
  title?: string;
  description?: string;
};

export const SeoHead = ({
  title,
  description = siteConfig.description,
}: SeoHeadProps) => {
  const { asPath } = useRouter();
  const fullTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.name;
  // Sem domínio configurado, og:url e canonical ficam de fora e a imagem usa caminho relativo
  const caminho = asPath.split(/[?#]/)[0];
  const url = siteConfig.url ? `${siteConfig.url}${caminho}` : undefined;
  const ogImage = `${siteConfig.url}${siteConfig.ogImage}`;

  return (
    <NextHead>
      <title>{fullTitle}</title>
      <meta key="description" content={description} name="description" />
      {url && <link key="canonical" href={url} rel="canonical" />}

      <meta key="og:title" content={fullTitle} property="og:title" />
      <meta
        key="og:description"
        content={description}
        property="og:description"
      />
      <meta key="og:type" content="website" property="og:type" />
      <meta key="og:locale" content="pt_BR" property="og:locale" />
      <meta
        key="og:site_name"
        content={siteConfig.name}
        property="og:site_name"
      />
      {url && <meta key="og:url" content={url} property="og:url" />}
      <meta key="og:image" content={ogImage} property="og:image" />
      <meta key="og:image:width" content="1200" property="og:image:width" />
      <meta key="og:image:height" content="630" property="og:image:height" />
      <meta
        key="og:image:alt"
        content="Logo do Bandejão Refeições sobre foto de preparo de alimentos"
        property="og:image:alt"
      />
      <meta
        key="twitter:card"
        content="summary_large_image"
        name="twitter:card"
      />

      <meta
        key="viewport"
        content="width=device-width, initial-scale=1, viewport-fit=cover"
        name="viewport"
      />
      <meta key="theme-color" content="#F66922" name="theme-color" />
      {/* TODO(imagem): ícones gerados a partir do "b" do logo; trocar se a marca tiver um ícone oficial */}
      <link key="icon" href="/favicon.ico" rel="icon" sizes="48x48" />
      <link
        key="icon-png"
        href="/assets/brand/icon-512.png"
        rel="icon"
        type="image/png"
      />
      <link
        key="apple-touch-icon"
        href="/apple-touch-icon.png"
        rel="apple-touch-icon"
      />
    </NextHead>
  );
};
