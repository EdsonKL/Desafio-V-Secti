import Header from "../../components/Header/Header";
import styles from "./Developers.module.css";
import avatarEd from "../../assets/images/avatarEd.png";
import avatarGabs from "../../assets/images/avatarGabs.png";
import avatarMat from "../../assets/images/avatarMat.png";
import Card from "../../components/Card/Card";

function Developers() {
  return (
    <div>
      <Header />
      <main className={styles.mainContent}>
        <div className={styles.textContent}>
          <h1>Os Guardiões da Cultura</h1>
          <p>
            Por trás da página de conhecimentos sobre o patrimônio imaterial e
            material do maranhão, estão os espíritos criativos e incansáveis de
            nossos desenvolvedores. Eles trouxeram à vida a cultura maranhense
            para que você possa conhecê-la.
          </p>
        </div>
        <div className={styles.devsContainer}>
          <Card
            avatar={avatarGabs}
            githubLink="https://github.com/gabsmatos"
            linkedinLink="https://www.linkedin.com/in/gabriela-matos-5318b31bb?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
            name="< Ana Gabriela />"
          />
          <Card
            avatar={avatarEd}
            githubLink="https://github.com/EdsonKL"
            linkedinLink="https://www.linkedin.com/in/edson-mendes-85555a264/"
            name="< Edson Mendes />"
          />
          <Card
            avatar={avatarMat}
            githubLink="https://github.com/ymatteu"
            linkedinLink="#"
            name="< Matheus Abreu />"
          />
        </div>
      </main>
    </div>
  );
}

export default Developers;
