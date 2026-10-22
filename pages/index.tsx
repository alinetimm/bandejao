import type { GalleryItem } from "@/content/gallery";
import type { Partner } from "@/content/partners";
import type { Testimonial } from "@/content/testimonials";
import type { GetStaticProps } from "next";

import { PageLayout } from "@/components/layout/PageLayout";
import { Avaliacoes } from "@/components/sections/home/Avaliacoes";
import { ConhecaBandejao } from "@/components/sections/home/ConhecaBandejao";
import { DeliveryBanner } from "@/components/sections/home/DeliveryBanner";
import { Diferenciais } from "@/components/sections/home/Diferenciais";
import { GaleriaParceiros } from "@/components/sections/home/GaleriaParceiros";
import { Hero } from "@/components/sections/home/Hero";
import { Parceiros } from "@/components/sections/home/Parceiros";
import { PreparoBanner } from "@/components/sections/home/PreparoBanner";
import { RefeicoesIndustriais } from "@/components/sections/home/RefeicoesIndustriais";
import { ServicesCarousel } from "@/components/sections/home/ServicesCarousel";
import { gallery } from "@/content/gallery";
import { partners } from "@/content/partners";
import { testimonials } from "@/content/testimonials";

type HomeProps = {
  gallery: GalleryItem[];
  partners: Partner[];
  testimonials: Testimonial[];
};

export default function IndexPage({
  gallery,
  partners,
  testimonials,
}: HomeProps) {
  return (
    <PageLayout>
      <Hero />
      <ServicesCarousel />
      <PreparoBanner />
      <ConhecaBandejao />
      <RefeicoesIndustriais />
      <Diferenciais />
      <GaleriaParceiros items={gallery} />
      <DeliveryBanner />
      <Parceiros partners={partners} />
      <Avaliacoes items={testimonials} />
    </PageLayout>
  );
}

// TODO(back-end): galeria, parceiros e avaliações são estáticos (content/*.ts).
// Para buscar de uma API/CMS, troque os imports abaixo por fetch e adicione
// `revalidate` (ex.: 3600) ao retorno.
export const getStaticProps: GetStaticProps<HomeProps> = async () => ({
  props: { gallery, partners, testimonials },
});
