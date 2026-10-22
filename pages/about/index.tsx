import { PageLayout } from "@/components/layout/PageLayout";

// Página provisória — conteúdo real em fases seguintes (ver CLAUDE.md §6).
export default function AboutPage() {
  return (
    <PageLayout title="Quem Somos">
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <h1 className="text-4xl font-bold text-ink">Quem Somos</h1>
      </section>
    </PageLayout>
  );
}
