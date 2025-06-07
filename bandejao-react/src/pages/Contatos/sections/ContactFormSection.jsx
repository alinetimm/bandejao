// src/pages/Contatos/sections/ContactFormSection.jsx
import React from 'react';
import styles from './ContactFormSection.module.css';

function ContactFormSection() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para enviar o formulário (futuramente)
    console.log('Formulário enviado!');
    alert('Mensagem enviada! Em breve entraremos em contato.');
    // Resetar formulário
    e.target.reset();
  };

  return (
    <section className={styles.contactFormSection}>
      <div className={styles.contentWrapper}>
        <div className={styles.infoColumn}>
          <h2 className={styles.infoTitle}>LOREM IPSUM</h2>
          <p className={styles.infoText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco.
          </p>
          <p className={styles.contactItem}>
            <span className={styles.icon}>📍</span> Lorem Ipsum, Dolor St 3000
          </p>
          <p className={styles.contactItem}>
            <span className={styles.icon}>📞</span> +00 0 0000-0000
          </p>
          <p className={styles.contactItem}>
            <span className={styles.icon}>✉️</span> lorem@ipsumdolor.com
          </p>
        </div>
        <div className={styles.formColumn}>
          <form className={styles.contactForm} onSubmit={handleSubmit}>
            <div className={styles.formRow}>
              <input type="text" placeholder="Lorem ipsum" className={styles.inputField} required />
              <input type="email" placeholder="Lorem ipsum" className={styles.inputField} required />
              <input type="tel" placeholder="Lorem ipsum" className={styles.inputField} />
            </div>
            <input type="text" placeholder="Lorem ipsum" className={styles.inputField} />
            <textarea placeholder="Lorem ipsum" className={styles.textareaField} rows="6" required></textarea>
            <button type="submit" className={styles.submitButton}>ENVIAR</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactFormSection;