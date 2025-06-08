// src/pages/Home/sections/PartnersGallerySection.jsx
import React from 'react';
import styles from './PartnersGallerySection.module.css';

function PartnersGallerySection() {
  return (
    <section className={styles.partnersGallerySection}>
      <h2 className={styles.sectionTitle}>Galeria dos parceiros</h2>
      <div className={styles.galleryGrid}>
        {/* Exemplo de itens da galeria, mapear um array de imagens */}
        <div className={styles.galleryItem}>
          <img src="/assets/images/gallery-img-1.jpg" alt="Parceiro 1" />
        </div>
        <div className={styles.galleryItem}>
          <img src="/assets/images/gallery-img-2.jpg" alt="Parceiro 2" />
        </div>
        <div className={styles.galleryItem}>
          <img src="/assets/images/gallery-img-3.jpg" alt="Parceiro 3" />
        </div>
        <div className={styles.galleryItem}>
          <img src="/assets/images/gallery-img-4.jpg" alt="Parceiro 4" />
        </div>
        <div className={styles.galleryItem}>
          <img src="/assets/images/gallery-img-5.jpg" alt="Parceiro 5" />
        </div>
        <div className={styles.galleryItem}>
          <img src="/assets/images/gallery-img-6.jpg" alt="Parceiro 6" />
        </div>
        {/* mais itens conforme o Figma */}
      </div>
      {/* Elemento "O Bandejão também pode ir..." com a imagem da marmita */}
      <div className={styles.deliveryPromo}>
        <h3 className={styles.deliveryTitle}>
          O Bandejão também pode ir
          <br />
          até a porta da sua casa.
        </h3>
        <p className={styles.deliverySubtitle}>
          <a href="/delivery" className={styles.deliveryLink}>
            Conheça o nosso delivery
          </a>
        </p>
        <img
          src="/assets/images/marmita-delivery.png" // Imagem da marmita
          alt="Marmita Delivery"
          className={styles.deliveryImage}
        />
      </div>
    </section>
  );
}

export default PartnersGallerySection;