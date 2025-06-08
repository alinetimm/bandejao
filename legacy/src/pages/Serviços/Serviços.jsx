// src/pages/Servicos/Servicos.jsx
import React from 'react';
import ServicesHeroSection from './sections/ServicesHeroSection';
import CorporateMealsSection from './sections/CorporateMealsSection';
import BuffetEventsSection from './sections/BuffetEventsSection';
import SchoolCanteensSection from './sections/SchoolCanteensSection';
import HospitalMealsSection from './sections/HospitalMealsSection';
import DeliveryMealsSection from './sections/DeliveryMealsSection';
import styles from './Serviços.module.css'; // Para estilos da página Serviços se houver

function Servicos() {
  return (
    <div className={styles.servicosPage}>
      <ServicesHeroSection />
      <CorporateMealsSection />
      <BuffetEventsSection/>
      <SchoolCanteensSection />
      <HospitalMealsSection />
      <DeliveryMealsSection />
      {/* O footer deve ser renderizado no App.js ou no layout global */}
    </div>
  );
}

export default Servicos;