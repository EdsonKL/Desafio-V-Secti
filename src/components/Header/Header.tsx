import styles from "./Header.module.css";
import logo from "../../assets/icons/logo.png";
import { Link, useNavigate } from "react-router-dom";
import closeMenu from "../../assets/icons/closeMenu.svg";
import menuSanduiche from "../../assets/icons/menuSanduiche.svg";
import { useState } from "react";
import { IdSessions } from "../../Types/Enums";

function Header() {
 
  const [isOpen , setIsOpen] = useState(false);

  function switchMenu() {
    if (isOpen) {
      setIsOpen(false)
    }

    else {
      setIsOpen(true)
    }
  }

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

          <div className={styles.mobileMenuIcon}>
              {isOpen ? (
                <button onClick={switchMenu}><img src= {closeMenu} alt="closeMenu"></img></button>
              ) : (
                <button onClick={switchMenu}><img src= {menuSanduiche} alt="menuSanduiche"></img></button>
              )} 
              
          </div>

         

        </nav>
          
      </div>
          
          {isOpen ?(
            <nav className={styles.mobileMenu}>
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
          ): null} 
    </header>
  );
}

export default Header;
