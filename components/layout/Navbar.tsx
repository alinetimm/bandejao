import {
  Navbar as HeroUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@heroui/navbar";
import clsx from "clsx";
import Image from "next/image";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

import { siteConfig } from "@/config/site";

const linkFoco =
  "rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white";

// Navbar do Figma (126:204): laranja 90% + blur, 82px, logo à esquerda e 4 links brancos.
// A altura vem de --header-h (styles/globals.css), usada também no scroll das âncoras.
export const Navbar = () => {
  const { pathname } = useRouter();
  const [aberto, setAberto] = useState(false);

  const ativo = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <HeroUINavbar
      classNames={{
        base: "bg-brand/90 backdrop-blur-[2px]",
        wrapper:
          "max-w-none px-4 sm:px-6 lg:px-10 xl:px-[100px] justify-start gap-0",
        menu: "bg-brand/95 top-[var(--header-h)]",
      }}
      height="var(--header-h)"
      isBlurred={false}
      isMenuOpen={aberto}
      maxWidth="full"
      position="sticky"
      onMenuOpenChange={setAberto}
    >
      <NavbarBrand className="max-w-fit shrink-0 grow-0 basis-auto">
        <NextLink className={linkFoco} href="/">
          <Image
            priority
            alt={`${siteConfig.name} — página inicial`}
            className="h-auto w-[130px] md:w-[180px]"
            height={47}
            src="/assets/brand/logo.svg"
            width={180}
          />
        </NextLink>
      </NavbarBrand>

      <NavbarContent
        as="ul"
        className="hidden gap-8 md:ml-10 md:flex lg:ml-16 lg:gap-12 xl:ml-[113px] xl:gap-[90px]"
        justify="start"
      >
        {siteConfig.navItems.map((item) => (
          <NavbarItem key={item.href} isActive={ativo(item.href)}>
            <NextLink
              aria-current={ativo(item.href) ? "page" : undefined}
              className={clsx(
                linkFoco,
                "whitespace-nowrap text-lg font-semibold text-white transition-opacity hover:opacity-80 xl:text-[21px]",
              )}
              href={item.href}
            >
              {item.label}
            </NextLink>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent className="md:hidden" justify="end">
        <NavbarMenuToggle
          aria-label={aberto ? "Fechar menu" : "Abrir menu"}
          className="text-white"
        />
      </NavbarContent>

      <NavbarMenu className="gap-2 pt-6">
        {siteConfig.navItems.map((item) => (
          <NavbarMenuItem key={item.href} isActive={ativo(item.href)}>
            <NextLink
              aria-current={ativo(item.href) ? "page" : undefined}
              className={clsx(
                linkFoco,
                "block py-2 text-2xl font-semibold text-white",
              )}
              href={item.href}
              onClick={() => setAberto(false)}
            >
              {item.label}
            </NextLink>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </HeroUINavbar>
  );
};
