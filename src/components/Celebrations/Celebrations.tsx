import Tabs from "../Tabs/Tabs";
import styles from "./Celetrations.module.css";
import content from "../../json/content.json";
export type Details = {
  video: string;
  image1: string;
  image2: string;
};
export type TabsInfo = {
  id: string;
  type: string;
  tabTitle: string;
  title: string;
  content: string;
  image: string;
  details: Details;
};

function Celebration() {
  const tabs = content.filter((tab) => tab.type === "celebration");

  return (
    <section id="celebrations" className={styles.mainContent}>
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
      <Tabs tabs={tabs} />
    </section>
  );
}

export default Celebration;
