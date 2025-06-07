// src/pages/Servicos/sections/HospitalMealsSection.jsx
import React from 'react';
import styles from './HospitalMealsSection.module.css';

function HospitalMealsSection() {
  return (
    <section className={styles.hospitalMealsSection}>
      <div className={styles.contentWrapper}>
        <div className={styles.imageGallery}>
          <div className={styles.thumbnailContainer}>
            <div className={styles.thumbnailPlaceholder}>
              <img src="/assets/images/hospital-thumb-1.jpg" alt="Hospital Thumbnail 1" />
            </div>
            <div className={styles.thumbnailPlaceholder}>
              <img src="/assets/images/hospital-thumb-2.jpg" alt="Hospital Thumbnail 2" />
            </div>
          </div>
          <div className={styles.mainImagePlaceholder}>
            <img src="/assets/images/hospital-main.jpg" alt="Hospital Principal" />
          </div>
        </div>
        <div className={styles.textColumn}>
          <h2 className={styles.sectionTitle}>REFEIÇÕES <br/> HOSPITALARES:</h2>
          <p className={styles.description}>
            Dietas personalizadas e nutritivas para pacientes, visando a recuperação e o bem-estar, com a segurança alimentar e higiene necessárias.
          </p>
        </div>
      </div>
    </section>
  );
}

export default HospitalMealsSection;