import { Button } from "@/components/ui/Button";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { vamosConversar } from "@/content/about";

// Figma 225:425–225:429: chamada centralizada; o botão rola até o formulário (#orcamento).
export const VamosConversar = () => (
  <section className="mx-auto max-w-[712px] text-center">
    <SectionTitle
      align="center"
      first={vamosConversar.titulo}
      variant="single"
    />
    <p className="mt-4 text-lg font-medium tracking-[-0.01em] text-body">
      {vamosConversar.texto}
    </p>
    <Button
      className="mt-[29px] min-w-[272px]"
      href={vamosConversar.botao.href}
      variant="pill"
    >
      {vamosConversar.botao.texto}
    </Button>
  </section>
);
