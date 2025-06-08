// src/pages/Home/sections/HeroSection.jsx
import styles from "./HeroSection.module.css";

function HeroSection() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContent}>
        <img
          src="/assets/icons/Logo.png"
          alt="Bandejão Logo"
          className={styles.logo}
        />
        <h1 className={styles.title}>Nossos Serviços</h1>
        {/*Botão? */}
        {/* <button className={styles.callToAction}>Saiba Mais</button> */}
      </div>
    </section>
  );
}

export default HeroSection;
