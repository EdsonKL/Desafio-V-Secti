import Tabs from "../Tabs/Tabs";
import styles from "./Celetrations.module.css";
import imgCaroco from "../../assets/images/caroco.jpg";
import imgBumba from "../../assets/images/bumbaboi.jpg"
import imgSaojoao from "../../assets/images/saojoao.jpg";
import imgTambor from "../../assets/images/tamborcrioula.jpg";
import imgDivino from "../../assets/images/festadivino.jpg";

function Celebration() {
  const tabs = [
    {
      id: "1",
      tabTitle: "Dança Do Caroço",
      title: "Dança do Caroço",
      content:
        "De origem indígena, a Dança do Caroço se concentra na região do Delta do Parnaíba, principalmente no município de Tutóia. Isolados ou formando uma roda ou cordão, os componentes brincam respondendo às toadas improvisadas tiradas pelos cantadores, ao som de instrumentos como tambores, cuíca e cabaça.",
      image: imgCaroco,
      link: "",
    },
    {
      id: "2",
      tabTitle: "Bumba Meu Boi",
      title: "Bumba Meu Boi",
      content:
        "Num espetáculo de cores, danças e ritmos, o Bumba-Meu-Boi é a expressão máxima da cultura popular do Maranhão. Elevado a Patrimônio Imaterial do povo brasileiro, a manifestação tem origens indefinidas, mas elementos culturais africanos e europeus, introduzidos principalmente por meio da religiosidade, são evidentes.",
      image: imgBumba,
      link: "",
    },
    {
      id: "3",
      tabTitle: "São João",
      title: "São João",
      content:
        "No Maranhão, o período junino é marcado por muitos sons, cores e sabores. É o tempo de celebrar todas as ricas manifestações culturais maranhenses. São Luís se transforma em um enorme arraial, são várias estruturas montadas em diferentes pontos da ilha, para apresentações culturais, danças típicas e cantores regionais, além das barracas de comida típica.",
      image: imgSaojoao,
      link: "",
    },
    {
      id: "4",
      tabTitle: "Tambor De Crioula",
      title: "Tambor De Crioula",
      content:
        "Manifestação de raízes africanas que só existe no Maranhão, o Tambor de Crioula foi reconhecido em 2011 como Patrimônio Imaterial Brasileiro. Alegre, sensual e irreverente, pode ser apreciado ao ar livre, nas praças, casas e interior de terreiros por todo o Maranhão, mas sobretudo em São Luís.",
      image: imgTambor,
      link: "",
    },
    {
      id: "5",
      tabTitle: "Festa Do Divino",
      title: "Festa Do Divino",
      content:
        "Comemorada, durante todo o mês de maio, desde os tempos coloniais, a Festa do Divino Espírito Santo é uma curiosa mistura de devoção ao Divino com homenagens ao Império. Os cortejos populares percorrem as ruas da cidade entoando cânticos até chegar à casa do Imperador, que recebe as homenagens com uma dança peculiar, entoando cantigas de louvor ao Divino ao toque das caixeiras.",
      image: imgDivino,
      link: "",
    },
  ];

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
      <Tabs tabs={tabs} img={imgCaroco} />
    </section>
  );
}

export default Celebration;
