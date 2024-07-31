import styles from "./Handicraft.module.css";
import content from "../../json/content.json";
import { IdSessions } from "../../Types/Enums";
import { TabsInfo } from "../../Types/Types";
import ContentSession from "../ContentSession/ContentSession";

function Handicraft() {
  const contentProps: TabsInfo[] = content.filter(
    (tab) => tab.type === IdSessions.Handicraft
  );
  return (
    <section className={styles.mainContent}>
      <div className={styles.textTitle}>
        <h1>Artesanato</h1>
        <p>
          O artesanato maranhense tem mais de 400 anos de tradição, basta uma
          visita ao Centro Histórico de São Luís e se pode ver a variedade de
          artefatos provenientes da produção artesanal do Maranhão, marcados
          pela criatividade de uma tradição popular que vem sendo aprimorada
          desde a fundação da capital maranhense. Suas tradições manuais sofrem
          influências de diferentes povos e suas peças, técnicas, materiais e
          ferramentas apresentam muitas variações de estado para estado.
        </p>
      </div>
      <ContentSession contentProps={contentProps} />
    </section>
  );
}

export default Handicraft;
