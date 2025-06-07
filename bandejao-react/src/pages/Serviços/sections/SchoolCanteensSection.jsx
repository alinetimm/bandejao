// src/pages/Servicos/sections/SchoolCanteensSection.jsx
import React from 'react';
import styles from './SchoolCanteensSection.module.css';

function SchoolCanteensSection() {
  return (
    <section className={styles.schoolCanteensSection}>
      <div className={styles.contentWrapper}>
        <div className={styles.textColumn}>
          <h2 className={styles.sectionTitle}>CANTINAS ESCOLARES:</h2>
          <p className={styles.description}>
            Oferecemos uma alimentação saudável e saborosa para os alunos, com cardápios balanceados e variados que incentivam bons hábitos alimentares.
          </p>
        </div>
        <div className={styles.imageGallery}>
          <div className={styles.mainImagePlaceholder}>
            <img src="/assets/images/school-canteens-main.jpg" alt="Cantinas Escolares Principal" />
          </div>
          <div className={styles.thumbnailContainer}>
            <div className={styles.thumbnailPlaceholder}>
              <img src="/assets/images/school-canteens-thumb-1.jpg" alt="Cantinas Escolares Thumbnail 1" />
            </div>
            <div className={styles.thumbnailPlaceholder}>
              <img src="/assets/images/school-canteens-thumb-2.jpg" alt="Cantinas Escolares Thumbnail 2" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SchoolCanteensSection;