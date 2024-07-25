// import { TabsInfo } from "../Celebrations/Celebrations";
import Tabs from "../Tabs/Tabs";
import styles from "./Foods.module.css";
import content from "../../json/content.json";

function Foods() {
  const tabs = content.filter((tab) => tab.type === "foods") 
  return (
    <section id="foods" className={styles.mainContent}>
      <div className={styles.textTitle}>
        <h1>Culinária</h1>
        <p>
          A culinária do Maranhão é um convite a uma experiência sensorial
          única, onde sabores, aromas e tradições se misturam de maneira
          harmoniosa. Cada prato conta uma história, refletindo a riqueza
          cultural e a influência de diferentes povos que contribuíram para a
          formação desta gastronomia singular. Prepare-se para descobrir uma
          cozinha vibrante, marcada pela criatividade e pela diversidade de
          ingredientes que exaltam a essência do Maranhão.
        </p>
      </div>
      <Tabs tabs={tabs} />
    </section>
  );
}

export default Foods;
