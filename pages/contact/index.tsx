import { ContactBlock } from "@/components/layout/ContactBlock";
import { PageLayout } from "@/components/layout/PageLayout";

// Figma "Contatos" (126:168): só o bloco de contato em destaque, sem repetir no rodapé.
export default function ContactPage() {
  return (
    <PageLayout
      // Página curta: o fundo escuro cobre a tela toda em monitores altos
      description="Fale com o Bandejão Refeições: unidades em Pelotas e Rio Grande e formulário para solicitar um orçamento."
      mainClassName="bg-surface-dark"
      showContactBlock={false}
      title="Contato"
    >
      <h1 className="sr-only">Contato</h1>
      <ContactBlock variant="page" />
    </PageLayout>
  );
}
