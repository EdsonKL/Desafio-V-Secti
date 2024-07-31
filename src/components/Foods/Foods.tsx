// import { TabsInfo } from "../Celebrations/Celebrations";
import ContentSession from "../ContentSession/ContentSession";
import styles from "./Foods.module.css";
import content from "../../json/content.json";
import { IdSessions } from "../../Types/Enums";
import { TabsInfo } from "../../Types/Types";

function Foods() {
  const contentProps: TabsInfo[] = content.filter(
    (tab) => tab.type === IdSessions.Food
  );
  return (
    <section className={styles.mainContent}>
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
      <ContentSession contentProps={contentProps} />
    </section>
  );
}

export default Foods;
