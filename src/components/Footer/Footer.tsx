import styles from "./Footer.module.css";
import logoInova from "../../assets/icons/logoInova.png";
import logoGov from "../../assets/icons/logoGovMaranhao.png";
import logoAlura from "../../assets/icons/logoAlura.png";

function Footer() {
  return (
    <footer className={styles.footer}>
        <div className={styles.footerContent}>
            <img src={logoInova} alt="logoInova" width="100px"/>
            <img src={logoGov} alt="logoGovMaranhao" width="115px"/>
            <img src={logoAlura} alt="logoAlura" width="100px" height="45px"/>

            <p className="copyright">&copy; 2024 Cultura Maranhense. Todos os direitos reservados.</p>

        </div>
    </footer>
  )
}

export default Footer