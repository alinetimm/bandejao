import { SmartImage } from "@/components/ui/SmartImage";
import { preparo } from "@/content/home";

// Figma 72:88: foto escura (camada preta 48%) com texto no canto inferior esquerdo.
export const PreparoBanner = () => (
  <section className="relative h-[420px] overflow-hidden md:h-[600px] lg:h-[767px]">
    <SmartImage
      className="!absolute inset-0 h-full"
      focus="center 24%"
      image={preparo.image}
    />
    <div aria-hidden="true" className="absolute inset-0 bg-black/[0.48]" />

    <div className="relative mx-auto h-full max-w-[1206px] px-4 sm:px-6 xl:px-0">
      <p className="absolute bottom-8 left-4 font-extrabold uppercase tracking-[-0.01em] text-white sm:left-6 lg:bottom-[38px] xl:left-0">
        <span className="block text-[34px] leading-[1] md:text-[55px] md:leading-[55px]">
          {preparo.linha1}
        </span>
        <span className="block text-[28px] font-medium leading-[1.1] md:text-[45px] md:leading-[45px]">
          {preparo.linha2}
        </span>
      </p>
    </div>
  </section>
);
