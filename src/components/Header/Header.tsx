import styles from "./Header.module.css"
import logo from "../../assets/images/logo.png"

function Header() {
  return (
    <header className={styles.header}>
        <div className={styles.container}>
            <div className={styles.logo}>
                <img src={logo} alt="" />
            </div>

            <nav className={styles.navbar}>
                <ul className={styles.navbarList}>
                    <li><a href="#" className={styles.navbarItems}>Início</a></li>
                    <li><a href="#celebrations" className={styles.navbarItems}>Festas</a></li>
                    <li><a href="#foods" className={styles.navbarItems}>Culinária</a></li>
                    <li><a href="#handicraft" className={styles.navbarItems}>Artesanato</a></li>
                    <li><a href="#tourism" className={styles.navbarItems}>Turismo</a></li>
                    <li><a href="#devs" className={styles.navbarItems}>Desenvolvedores</a></li>
                </ul>
            </nav>
        </div>
</header>

  )
}

export default Header