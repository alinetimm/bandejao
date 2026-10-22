import { PageLayout } from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/Button";
import { naoEncontrada } from "@/content/site";

export default function NotFoundPage() {
  return (
    <PageLayout
      description={naoEncontrada.texto}
      showContactBlock={false}
      title={naoEncontrada.titulo}
    >
      <section className="mx-auto flex max-w-[712px] flex-col items-center px-4 py-20 text-center lg:py-32">
        <p className="text-[64px] font-extrabold leading-none text-brand lg:text-[96px]">
          404
        </p>
        <h1 className="mt-4 text-[24px] font-extrabold tracking-[-0.01em] text-ink md:text-[36px]">
          {naoEncontrada.titulo}
        </h1>
        <p className="mt-4 text-[15px] font-medium tracking-[-0.01em] text-body md:text-lg">
          {naoEncontrada.texto}
        </p>
        <Button className="mt-8" href="/" variant="pill">
          {naoEncontrada.botao}
        </Button>
      </section>
    </PageLayout>
  );
}
