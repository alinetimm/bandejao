// src/pages/Servicos/sections/CorporateBuffetSection.jsx
import React from 'react';
import styles from './BuffetEventSection.module.css';

function CorporateBuffetSection() {
  return (
    <section className={styles.corporateBuffetSection}>
      <div className={styles.contentWrapper}>
        <div className={styles.imageGallery}>
          <div className={styles.thumbnailContainer}>
            <div className={styles.thumbnailPlaceholder}>
              <img src="/assets/images/buffet-thumb-1.jpg" alt="Buffet Thumbnail 1" />
            </div>
            <div className={styles.thumbnailPlaceholder}>
              <img src="/assets/images/buffet-thumb-2.jpg" alt="Buffet Thumbnail 2" />
            </div>
          </div>
          <div className={styles.mainImagePlaceholder}>
            <img src="/assets/images/buffet-main.jpg" alt="Buffet Principal" />
          </div>
        </div>
        <div className={styles.textColumn}>
          <h2 className={styles.sectionTitle}>BUFFET CORPORATIVO <br/> E EVENTOS:</h2>
          <p className={styles.description}>
            A alimentação completa para seu evento, desde coffee breaks a jantares de gala, com cardápios personalizados e atendimento de excelência.
          </p>
        </div>
      </div>
    </section>
  );
}

export default CorporateBuffetSection;