import type { ReactNode } from "react";

import { ContactBlock } from "./ContactBlock";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
import { SeoHead } from "./SeoHead";

type PageLayoutProps = {
  children: ReactNode;
  title?: string;
  description?: string;
  // Falso na página Contato, que já mostra o bloco em destaque
  showContactBlock?: boolean;
};

export const PageLayout = ({
  children,
  title,
  description,
  showContactBlock = true,
}: PageLayoutProps) => (
  <div className="flex min-h-screen flex-col">
    <SeoHead description={description} title={title} />
    <a
      className="sr-only z-[100] bg-white px-4 py-2 text-ink focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      href="#conteudo"
    >
      Pular para o conteúdo
    </a>
    <Navbar />
    <main className="flex-grow" id="conteudo">
      {children}
    </main>
    {showContactBlock && <ContactBlock />}
    <Footer />
  </div>
);
