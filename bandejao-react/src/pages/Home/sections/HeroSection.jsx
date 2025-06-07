// src/pages/Home/sections/HeroSection.jsx
import React from 'react';
import styles from './HeroSection.module.css'; 
import HeroBackground from '../../../assets/images/Rectangle.png';

function HeroSection() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContent}>
        <img
          src="/assets/icons/Vector.png" 
          alt="Bandejão Logo"
          className={styles.logo}
        />
        <h1 className={styles.title}>Nossos Serviços</h1>
        {/*Botão? */}
        {/* <button className={styles.callToAction}>Saiba Mais</button> */}
      </div>
    </section>
  );
}

export default HeroSection;