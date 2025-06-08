// src/pages/Home/sections/AboutUsSection.jsx
import React from 'react';
import styles from './AboutUsSection.module.css';

function AboutUsSection() {
  return (
    <section className={styles.aboutUsSection}>
      <h2 className={styles.sectionTitle}>Sabor no Preparo</h2>
      <div className={styles.contentWrapper}>
        <div className={styles.imagePlaceholder}>
          {/* Espaço para a imagem de preparação de alimentos */}
          <img src="/assets/images/PARMEGIANA.png" alt="Sabor no Preparo" />
        </div>
        <div className={styles.textBlock}>
          <h3>Conheça o Bandejão</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
          <p>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
          {}
          {/* <button className={styles.learnMoreButton}>Saiba Mais</button> */}
        </div>
      </div>
    </section>
  );
}

export default AboutUsSection;