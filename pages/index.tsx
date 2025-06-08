import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { Image } from "@heroui/image";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="relative h-fit w-full overflow-hidden">
        <Image
          alt="background"
          src="/assets/images/background_placeholder1.png"
          className="object-cover rounded-none"
        />

        <div
          className="
          absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
          lg:bottom-24 lg:left-36 lg:translate-y-0 lg:translate-x-0 z-10 lg:top-auto
          "
        >
          <Image
            alt="logo_bandejao"
            src="/assets/icons/logo.svg"
            className="rounded-none w-40 sm:w-60 md:w-80 lg:w-[460px]"
          />
        </div>
      </section>

      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 bg-white">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title()}>Nossos Serviços</h1>
          <p className="mt-2 text-lg text-gray-600">
            Servimos refeições saborosas há mais de 30 anos. clique na imagem
            para saber mais.
          </p>
        </div>
      </section>

      <section className="h-fit w-full overflow-hidden">
        <Image
          alt="background"
          src="/assets/images/background_placeholder2.png"
          className="object-cover rounded-none"
        />
      </section>
    </DefaultLayout>
  );
}
