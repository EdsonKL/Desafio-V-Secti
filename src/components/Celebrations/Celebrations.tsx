import ContentSession from "../ContentSession/ContentSession";
import content from "../../json/content.json";
import { TabsInfo } from "../../Types/Types";
import styles from "./Celetrations.module.css";
import { IdSessions } from "../../Types/Enums";

function Celebration() {
  const contentProps: TabsInfo[] = content.filter(
    (tab) => tab.type === IdSessions.Celebration
  );

  return (
    <section className={styles.mainContent}>
      <div className={styles.textTitle}>
        <h1>Festas</h1>
        <p>
          As festas do Maranhão são um espetáculo de cores, sons e tradições que
          celebram a rica herança cultural do estado. Em cada festividade, há
          uma vibrante demonstração de alegria e devoção, onde o folclore, a
          música e as danças se entrelaçam para criar momentos inesquecíveis.
          Essas celebrações são um reflexo da alma maranhense, convidando todos
          a participar e vivenciar a energia contagiante das festas que marcam o
          calendário cultural do Maranhão.
        </p>
      </div>
      <ContentSession contentProps={contentProps} />
    </section>
  );
}

export default Celebration;
