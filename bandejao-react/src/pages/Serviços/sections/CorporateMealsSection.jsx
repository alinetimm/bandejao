// src/pages/Servicos/sections/CorporateMealsSection.jsx
import React from 'react';
import styles from './CorporateMealsSection.module.css';

function CorporateMealsSection() {
  return (
    <section className={styles.corporateMealsSection}>
      <div className={styles.contentWrapper}>
        <div className={styles.textColumn}>
          <h2 className={styles.sectionTitle}>REFEIÇÕES PARA EMPRESAS:</h2>
          <p className={styles.description}>
            Oferecemos soluções completas para alimentação de seus colaboradores, com foco em qualidade, sabor e nutrição.
          </p>
        </div>
        <div className={styles.imageGallery}>
          <div className={styles.mainImagePlaceholder}>
            {/* Imagem principal */}
            <img src="/assets/images/corporate-meals-main.jpg" alt="Refeições para Empresas Principal" />
          </div>
          <div className={styles.thumbnailContainer}>
            <div className={styles.thumbnailPlaceholder}>
              {/* Miniatura 1 */}
              <img src="/assets/images/corporate-meals-thumb-1.jpg" alt="Refeições para Empresas Thumbnail 1" />
            </div>
            <div className={styles.thumbnailPlaceholder}>
              {/* Miniatura 2 */}
              <img src="/assets/images/corporate-meals-thumb-2.jpg" alt="Refeições para Empresas Thumbnail 2" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CorporateMealsSection;