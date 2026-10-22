import { PageLayout } from "@/components/layout/PageLayout";

// Página provisória — conteúdo real em fases seguintes (ver CLAUDE.md §6).
export default function ServicesPage() {
  return (
    <PageLayout title="Serviços">
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <h1 className="text-4xl font-bold text-ink">Serviços</h1>
      </section>
    </PageLayout>
  );
}
