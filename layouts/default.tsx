import { Head } from "./head";

import { Navbar } from "@/components/navbar";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col">
      <Head />
      <Navbar />
      <main className="mx-auto flex-grow ">{children}</main>
      {/* Rodapé provisório — ContactBlock/Footer na Fase 1 */}
      <footer className="w-full flex items-center justify-center gap-1 py-3 text-sm">
        <span className="text-body">Produzido por</span>
        <span className="text-primary">Aline y Ulian</span>
      </footer>
    </div>
  );
}
