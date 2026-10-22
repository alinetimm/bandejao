import Image from "next/image";

import DefaultLayout from "@/layouts/default";

// Home provisória — seções reais na Fase 2 (ver docs/CONTEUDO.md).
export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="relative h-fit w-full overflow-hidden">
        <Image
          priority
          alt="Mãos cortando abobrinha em uma tábua"
          className="h-auto w-full object-cover"
          height={737}
          src="/assets/images/background_placeholder1.png"
          width={1440}
        />

        <div
          className="
          absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
          lg:bottom-24 lg:left-36 lg:translate-y-0 lg:translate-x-0 z-10 lg:top-auto
          "
        >
          <Image
            alt="Bandejão Refeições"
            className="h-auto w-40 sm:w-60 md:w-80 lg:w-[460px]"
            height={119}
            src="/assets/icons/logo.svg"
            width={463}
          />
        </div>
      </section>

      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 bg-white">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className="text-4xl font-bold text-ink">Nossos Serviços</h1>
          <p className="mt-2 text-lg text-body">
            Servimos refeições saborosas há mais de 30 anos. clique na imagem
            para saber mais.
          </p>
        </div>
      </section>

      {/* TODO(imagem): PNG com texto embutido — substituir na Fase 2 (CLAUDE.md §2.3) */}
      <section className="h-fit w-full overflow-hidden">
        <Image
          alt="Panela com colher de pau — Sabor no preparo, excelência ao servir"
          className="h-auto w-full object-cover"
          height={767}
          src="/assets/images/background_placeholder2.png"
          width={1440}
        />
      </section>
    </DefaultLayout>
  );
}
