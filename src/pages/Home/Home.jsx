
import React from 'react';
import HeroSection from './sections/HeroSection';
import AboutUsSection from './sections/AboutUsSection';
import IndustrialMealsSection from './sections/IndustrialMealsSection';
import DifferentiatorsSection from './sections/DifferentiatorsSection';
import PartnersGallerySection from './sections/PartnersGallerySection';
import TestimonialsSection from './sections/TestimonialsSection';
import styles from './Home.module.css'; 

function Home() {
  return (
    <div className={styles.homePage}>
      <HeroSection />
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