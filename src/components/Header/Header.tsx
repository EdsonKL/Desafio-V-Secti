import styles from "./Header.module.css";
import logo from "../../assets/images/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { IdSessions } from "../../Types/Enums";

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
                onClick={() => navigateToSection("/", `#${IdSessions.Hero}`)}
                className={styles.navbarItems}
              >
                Início
              </button>
            </li>
            <li>
              <button
                onClick={() =>
                  navigateToSection("/", `#${IdSessions.Celebration}`)
                }
                className={styles.navbarItems}
              >
                Festas
              </button>
            </li>
            <li>
              <button
                onClick={() => navigateToSection("/", `#${IdSessions.Food}`)}
                className={styles.navbarItems}
              >
                Culinária
              </button>
            </li>
            <li>
              <button
                onClick={() =>
                  navigateToSection("/", `#${IdSessions.Handicraft}`)
                }
                className={styles.navbarItems}
              >
                Artesanato
              </button>
            </li>
            <li>
              <button
                onClick={() => navigateToSection("/", `#${IdSessions.Tourism}`)}
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
