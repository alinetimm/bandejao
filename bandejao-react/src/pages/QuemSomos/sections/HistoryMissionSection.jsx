// src/pages/QuemSomos/sections/HistoryMissionSection.jsx
import React from 'react';
import styles from './HistoryMissionSection.module.css';

function HistoryMissionSection() {
  return (
    <section className={styles.historyMissionSection}>
      <div className={styles.contentWrapper}>
        <div className={styles.imageColumn}>
          {/* Imagens de placeholder conforme Figma */}
          <div className={styles.imagePlaceholder}>
            <img src="/assets/images/quem-somos-img-1.jpg" alt="Quem Somos 1" />
          </div>
          <div className={styles.imagePlaceholder}>
            <img src="/assets/images/quem-somos-img-2.jpg" alt="Quem Somos 2" />
          </div>
        </div>
        <div className={styles.textColumn}>
          <h2 className={styles.subTitle}>História e Propósito:</h2>
          <p className={styles.paragraph}>
            Desde 1992, o Bandejão Refeições se dedica a fornecer
            alimentação de qualidade para empresas e instituições.
            Nosso intuito é oferecer refeições equilibradas, preparadas
            com ingredientes selecionados e segundo as mais altas
            padrões de higiene e segurança alimentar.
          </p>

          <h2 className={styles.subTitle}>Diferenciais:</h2>
          <ul className={styles.differentiatorsList}>
            <li>
              <span className={styles.bulletPoint}></span>Equipe especializada: Nutricionistas, chefs e cozinheiros qualificados
            </li>
            <li>
              <span className={styles.bulletPoint}></span>Qualidade e sabor: Ingredientes frescos e balanceados
            </li>
            <li>
              <span className={styles.bulletPoint}></span>Personalização: Cardápios adaptados às necessidades dos clientes
            </li>
            <li>
              <span className={styles.bulletPoint}></span>Sustentabilidade: Compromisso com práticas responsáveis no Código Alimentar
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default HistoryMissionSection;