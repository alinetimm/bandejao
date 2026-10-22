import { PageLayout } from "@/components/layout/PageLayout";
import { ServiceBlock } from "@/components/sections/services/ServiceBlock";
import { servicosBlocos, servicosPagina } from "@/content/services";

export default function ServicesPage() {
  return (
    <PageLayout
      description="Refeições para empresas, hospitais, cantinas escolares, delivery de marmitas e buffet para eventos em Pelotas e Rio Grande."
      title="Serviços"
    >
      <div className="mx-auto max-w-[1196px] px-4 pb-16 pt-12 sm:px-6 lg:pb-[198px] lg:pt-[77px] xl:px-0">
        <h1 className="text-center text-5xl font-extrabold tracking-[-0.01em] text-black md:text-[70px] md:leading-[55px]">
          {servicosPagina.titulo}
        </h1>

        <div className="mt-12 space-y-20 lg:mt-[103px] lg:space-y-[130px]">
          {servicosBlocos.map((bloco) => (
            <ServiceBlock key={bloco.id} bloco={bloco} />
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
