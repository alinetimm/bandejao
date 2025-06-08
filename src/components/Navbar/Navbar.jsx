import Logo from "../../assets/icons/Logo.png";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logoContainer}>
        <img src={Logo} alt="Logo" />
      </div>

      <ul className={styles.navlinks}>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#menu">Serviço</a>
        </li>
        <li>
          <a href="#contact">Contato</a>
        </li>
        <li>
          <a href="#about">Quem Somos</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
