// src/pages/Contatos/Contatos.jsx
import React from 'react';
import ContactFormSection from './sections/ContactFormSection';
import styles from './Contatos.module.css'; // Para estilos da página Contatos se houver

function Contatos() {
  return (
    <div className={styles.contatosPage}>
      <ContactFormSection />
      {/* O footer já está no App.js, não precisa aqui */}
    </div>
  );
}

export default Contatos;