import styles from "./Home.module.css";
import AboutUsSection from "./sections/AboutUsSection";
import DifferentiatorsSection from "./sections/DifferentiatorsSection";
import IndustrialMealsSection from "./sections/IndustrialMealsSection";
import PartnersGallerySection from "./sections/PartnersGallerySection";
import TestimonialsSection from "./sections/TestimonialsSection";

function Home() {
  return (
    <div className={styles.homePage}>
      <AboutUsSection />
      <IndustrialMealsSection />
      <DifferentiatorsSection />
      <PartnersGallerySection />
      <TestimonialsSection />
      {/* estilos específicos para o layout geral da página aqui */}
    </div>
  );
}

export default Home;
