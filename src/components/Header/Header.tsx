import styles from "./Header.module.css";
import logo from "../../assets/images/logo.png";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  const navigateToSection = (path: any, hash: any) => {
    navigate(`${path}${hash}`);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src={logo} alt="" />
        </div>

        <nav className={styles.navbar}>
          <ul className={styles.navbarList}>
            <li>
              <button
                onClick={() => navigateToSection("/", "#hero")}
                className={styles.navbarItems}
              >
                Início
              </button>
            </li>
            <li>
              <button
                onClick={() => navigateToSection("/", "#celebrations")}
                className={styles.navbarItems}
              >
                Festas
              </button>
            </li>
            <li>
              <button
                onClick={() => navigateToSection("/", "#foods")}
                className={styles.navbarItems}
              >
                Culinária
              </button>
            </li>
            <li>
              <button
                onClick={() => navigateToSection("/", "#handicraft")}
                className={styles.navbarItems}
              >
                Artesanato
              </button>
            </li>
            <li>
              <button
                onClick={() => navigateToSection("/", "#tourism")}
                className={styles.navbarItems}
              >
                Turismo
              </button>
            </li>
            <li>
              <Link to="/devs" className={styles.navbarItems}>
                Desenvolvedores
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
