import { PageLayout } from "@/components/layout/PageLayout";
import { NossaFilosofia } from "@/components/sections/about/NossaFilosofia";
import { NossaHistoria } from "@/components/sections/about/NossaHistoria";
import { NossoDiferencial } from "@/components/sections/about/NossoDiferencial";
import { VamosConversar } from "@/components/sections/about/VamosConversar";
import { sobrePagina } from "@/content/about";

export default function AboutPage() {
  return (
    <PageLayout
      description="Desde 1992 o Bandejão Refeições fornece alimentação coletiva de qualidade para empresas, escolas, hospitais e eventos no sul do Rio Grande do Sul."
      title="Quem Somos"
    >
      <div className="mx-auto max-w-[1196px] px-4 pb-12 pt-8 sm:px-6 lg:pb-[59px] lg:pt-[146px] xl:px-0">
        <h1 className="text-center text-[30px] font-extrabold tracking-[-0.01em] text-brand md:text-5xl lg:text-left lg:text-[70px] lg:leading-[55px]">
          {sobrePagina.titulo}
        </h1>

        <div className="mt-6 lg:mt-[30px]">
          <NossaHistoria />
        </div>
        <div className="mt-12 lg:mt-[87px]">
          <NossaFilosofia />
        </div>
        <div className="mt-12 lg:mt-[43px]">
          <NossoDiferencial />
        </div>
        <div className="mt-12 lg:mt-[114px]">
          <VamosConversar />
        </div>
      </div>
    </PageLayout>
  );
}
