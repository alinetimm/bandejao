// src/pages/QuemSomos/QuemSomos.jsx
import React from 'react';
import AboutCompanySection from './sections/AboutCompanySection';
import HistoryMissionSection from './sections/HistoryMissionSection';
import styles from './QuemSomos.module.css';
function QuemSomos() {
  return (
    <div className={styles.quemSomosPage}>
      <AboutCompanySection />
      <HistoryMissionSection />
      {/* O footer já está no App.js, não precisa aqui */}
    </div>
  );
}

export default QuemSomos;