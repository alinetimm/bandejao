import NextHead from "next/head";

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
  const fullTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.name;

  return (
    <NextHead>
      <title>{fullTitle}</title>
      <meta key="description" content={description} name="description" />
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
      <meta
        key="viewport"
        content="width=device-width, initial-scale=1, viewport-fit=cover"
        name="viewport"
      />
      <link href="/favicon.ico" rel="icon" />
    </NextHead>
  );
};
