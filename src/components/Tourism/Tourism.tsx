import Tabs from "../Tabs/Tabs";
import styles from "./Tourism.module.css";;
import content from "../../json/content.json"
// import { TabsInfo } from "../Celebrations/Celebrations";

function Tourism() {
  const tabs = content.filter(tab => tab.type === "tourism")

  return (
    <section id="tourism" className={styles.mainContent}>
      <div className={styles.textTitle}>
        <h1>Turismo</h1>
        <p>
          O Maranhão é um destino repleto de encantos naturais e históricos,
          oferecendo uma experiência única para os visitantes. Suas paisagens
          diversificadas, que vão desde as praias paradisíacas até os
          fascinantes lençóis de areia e as exuberantes florestas, são apenas o
          começo. A riqueza histórica e cultural do estado se revela em cada
          monumento, rua e cidade, proporcionando uma viagem inesquecível
          através do tempo. Prepare-se para explorar e se apaixonar pelos
          tesouros que fazem do Maranhão um lugar verdadeiramente especial.
        </p>
      </div>
      <Tabs tabs={tabs}/>
    </section>
  );
}

export default Tourism;
