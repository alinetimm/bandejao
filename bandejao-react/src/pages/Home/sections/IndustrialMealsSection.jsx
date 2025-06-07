// src/pages/Home/sections/IndustrialMealsSection.jsx
import React from 'react';
import styles from './IndustrialMealsSection.module.css';

function IndustrialMealsSection() {
  return (
    <section className={styles.industrialMealsSection}>
      <h2 className={styles.sectionTitle}>Refeições Industriais</h2>
      <p className={styles.subtitle}>
        Preparamos para você e sua equipe refeições de alta qualidade.
      </p>

      <div className={styles.cardsContainer}>
        {/* Bloco 1 */}
        <div className={styles.card}>
          <div className={styles.cardIcon}> {/* Ícone ou imagem pequena */}</div>
          <h3>Solução Personalizada</h3>
          <p>
            Oferecemos cardápios flexíveis e adaptados às necessidades nutricionais e preferências da sua empresa.
          </p>
        </div>

        {/* Bloco 2 */}
        <div className={styles.card}>
          <div className={styles.cardIcon}></div>
          <h3>Qualidade e Segurança</h3>
          <p>
            Priorizamos ingredientes frescos e processos rigorosos de higiene e controle de qualidade em todas as etapas.
          </p>
        </div>

        {/* Bloco 3 */}
        <div className={styles.card}>
          <div className={styles.cardIcon}></div>
          <h3>Logística Eficiente</h3>
          <p>
            Garantimos a entrega pontual e em condições ideais, para que suas refeições cheguem quentes e saborosas.
          </p>
        </div>
      </div>
    </section>
  );
}

export default IndustrialMealsSection;