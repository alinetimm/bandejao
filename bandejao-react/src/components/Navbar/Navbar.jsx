import React from 'react';
import './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Bandejão Refeições</h1>
      <ul>
        <li><a href="#about">Quem Somos</a></li>
        <li><a href="#menu">Cardápio</a></li>
        <li><a href="#contact">Contato</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;