// src/pages/Home/sections/DifferentiatorsSection.jsx
import React from 'react';
import styles from './DifferentiatorsSection.module.css';

function DifferentiatorsSection() {
  return (
    <section className={styles.differentiatorsSection}>
      <h2 className={styles.sectionTitle}>Nossas Diferenciais</h2>
      <div className={styles.contentGrid}>
        {/* Item Diferencial 1 */}
        <div className={styles.differentiatorItem}>
          <div className={styles.bulletPoint}></div>
          <p>
            Atendimento personalizado e flexível para atender às suas demandas específicas.
          </p>
        </div>

        {/* Item Diferencial 2 */}
        <div className={styles.differentiatorItem}>
          <div className={styles.bulletPoint}></div>
          <p>
            Equipe altamente qualificada e apaixonada por gastronomia.
          </p>
        </div>

        {/* Item Diferencial 3 */}
        <div className={styles.differentiatorItem}>
          <div className={styles.bulletPoint}></div>
          <p>
            Compromisso com a sustentabilidade e o uso consciente dos recursos.
          </p>
        </div>

        {/* mais itens conforme o Figma */}
        <div className={styles.differentiatorItem}>
          <div className={styles.bulletPoint}></div>
          <p>
            Tecnologia de ponta para otimizar processos e garantir a qualidade.
          </p>
        </div>
      </div>
    </section>
  );
}

export default DifferentiatorsSection;