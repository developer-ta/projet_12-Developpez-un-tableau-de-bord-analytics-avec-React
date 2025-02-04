import { Link } from "react-router-dom";
import styles from "./Header.module.scss";

export default function Header() {
  return (
    <header id={styles["header"]}>
      <img
        src="src/presentation_Layer/assets/logo-SportSee.svg"
        alt="logo"
      ></img>
      <nav className="nav-top">
        <ul className="nav-top-list">
          <Link to={"/"}>
            <li>Accueil</li>
          </Link>
          <li>Profil</li>
          <li>Réglage</li>
          <li>Communauté</li>
        </ul>
      </nav>
    </header>
  );
}
