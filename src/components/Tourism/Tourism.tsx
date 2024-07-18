import Tabs from "../Tabs/Tabs";
import styles from "./Tourism.module.css";
import imgLencois from "../../assets/images/imgLencois.webp";
import imgSlz from "../../assets/images/imgSlz.jpg";
import imgChapada from "../../assets/images/imgChapada.webp";
import imgAlcantra from "../../assets/images/imgAlcantra.jpg";
import imgImperatriz from "../../assets/images/imgImperatriz.png";
import { TabsInfo } from "../Celebrations/Celebrations";

function Tourism() {
  const tabs: TabsInfo[] = [
    {
      id: "1",
      tabTitle: "Lençois Maranhenses",
      title: "Lençois Maranhenses",
      content:
        "O Parque Nacional dos Lençóis Maranhenses é o destino perfeito para aqueles que buscam aventura e contemplação da natureza. Caminhar sobre as areias brancas do maior campo de dunas do Brasil, se refrescar em lagoas de água cristalina e observar o pôr-do-sol são experiências únicas que você levará para o resto da vida.",
      image: imgLencois,
      link: "",
    },
    {
      id: "2",
      tabTitle: "Chapada das Mesas",
      title: "Chapada das Mesas",
      content:
        "O Parque Nacional da Chapada das Mesas é um dos mais novos parques nacionais do Brasil. Florestas de buritizais, sertões, relevo de chapadas vermelhas, compõem um estonteante conjunto de curiosas formações rochosas, cânions, cavernas e cachoeiras. São inúmeras as surpresas e aventuras que uma visita a esse parque pode revelar.",
      image: imgChapada,
      link: "",
    },
    {
      id: "3",
      tabTitle: "São Luis",
      title: "São Luis",
      content:
        "No centro histórico da cidade encontra-se o bairro de Praia Grande, na área circundante da rua de Portugal, marcado por edifícios coloniais com azulejos distintos e varandas em ferro fundido. O Palácio dos Leões, onde reside o governador do estado, exibe arte e mobiliário franceses.",
      image: imgSlz,
      link: "",
    },
    {
      id: "4",
      tabTitle: "Alcântara",
      title: "Alcântara",
      content:
        "Alcântara foi a primeira cidade maranhense tombada pelo Instituto do Patrimônio Histórico e Artístico Nacional, em 1948, como cidade-monumento. Cercada por praias, ilhas desertas, serena e tranquila, Alcântara pode se orgulhar de ser também a mais importante cidade histórica da Amazônia.",
      image: imgAlcantra,
      link: "",
    },
    {
      id: "5",
      tabTitle: "Imperatriz",
      title: "Imperatriz",
      content:
        "Imperatriz consolida-se como destino ao turismo de negócios, de eventos, de lazer e ecoturismo. Imperatriz é a principal porta de entrada e o mais seguro ponto de apoio para a região turística estadual classificada como 'Polo das Águas, Cachoeiras e Chapadas'. A par disso, cumpre atentar-se ao caráter estratégico de Imperatriz como cidade polarizadora de uma vasta região, de geografia interestadual, abrangendo, além do sudoeste do Maranhão e norte do Tocantins.",
      image: imgImperatriz,
      link: "",
    },
  ];

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
      <Tabs tabs={tabs} />
    </section>
  );
}

export default Tourism;
