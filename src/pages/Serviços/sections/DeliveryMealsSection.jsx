// src/pages/Servicos/sections/DeliveryMealsSection.jsx
import React from 'react';
import styles from './DeliveryMealsSection.module.css';

function DeliveryMealsSection() {
  return (
    <section className={styles.deliveryMealsSection}>
      <div className={styles.contentWrapper}>
        <div className={styles.textColumn}>
          <h2 className={styles.sectionTitle}>DELIVERY DE MARMITAS:</h2>
          <p className={styles.description}>
            Receba refeições caseiras e nutritivas no conforto da sua casa ou trabalho, com a praticidade e o sabor que você já conhece.
          </p>
        </div>
        <div className={styles.imageGallery}>
          <div className={styles.mainImagePlaceholder}>
            <img src="/assets/images/delivery-main.jpg" alt="Delivery Principal" />
          </div>
          <div className={styles.thumbnailContainer}>
            <div className={styles.thumbnailPlaceholder}>
              <img src="/assets/images/delivery-thumb-1.jpg" alt="Delivery Thumbnail 1" />
            </div>
            <div className={styles.thumbnailPlaceholder}>
              <img src="/assets/images/delivery-thumb-2.jpg" alt="Delivery Thumbnail 2" />
            </div>
            <div className={styles.thumbnailPlaceholder}>
              <img src="/assets/images/delivery-thumb-3.jpg" alt="Delivery Thumbnail 3" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DeliveryMealsSection;