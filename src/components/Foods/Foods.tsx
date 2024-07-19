import { TabsInfo } from "../Celebrations/Celebrations";
import Tabs from "../Tabs/Tabs";
import styles from "./Foods.module.css"

function Foods() {
    const tabs: TabsInfo[] = [
        {
          id: "1",
          tabTitle: "Arroz de Cuxá",
          title: "Arroz de Cuxá",
          content:
            "De origem indígena, a Dança do Caroço se concentra na região do Delta do Parnaíba, principalmente no município de Tutóia. Isolados ou formando uma roda ou cordão, os componentes brincam respondendo às toadas improvisadas tiradas pelos cantadores, ao som de instrumentos como tambores, cuíca e cabaça.",
          image: "",
          link: "",
        },
        {
          id: "2",
          tabTitle: "Lorem Ipsum",
          title: "Lorem Ipsum",
          content:
            "Lorem Ipsum",
          image: "",
          link: "",
        },
        {
          id: "3",
          tabTitle: "Lorem Ipsum",
          title: "Lorem Ipsum",
          content:
            "Lorem Ipsum",
          image: "",
          link: "",
        },
        {
          id: "4",
          tabTitle: "Lorem Ipsum",
          title: "Lorem Ipsum",
          content:
            "Lorem Ipsum.",
          image: "",
          link: "",
        },
        {
          id: "5",
          tabTitle: "Lorem Ipsum",
          title: "Lorem Ipsum",
          content:
            "Lorem Ipsum",
          image: "",
          link: "",
        },
      ];
    
    return (
        <section id="foods" className={styles.mainContent}>
        <div className={styles.textTitle}>
          <h1>Culinária</h1>
          <p>
          A culinária do Maranhão é um convite a uma experiência sensorial única, onde sabores, aromas e tradições se misturam de maneira harmoniosa. Cada prato conta uma história, refletindo a riqueza cultural e a influência de diferentes povos que contribuíram para a formação desta gastronomia singular. Prepare-se para descobrir uma cozinha vibrante, marcada pela criatividade e pela diversidade de ingredientes que exaltam a essência do Maranhão.
          </p>
        </div>
        <Tabs tabs={tabs}/>
      </section>
  )
}

export default Foods
