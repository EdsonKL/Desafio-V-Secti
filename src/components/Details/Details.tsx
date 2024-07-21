import { useParams } from "react-router-dom";
import styles from "./Details.module.css";
import content from "../../json/content.json";
import Header from "../Header/Header";

function Details() {
  const params = useParams();
  const tabContent = content.find((tab) => tab.id === params.id);
  console.log(tabContent);

  return (
    <>
      <Header />
      <main className={styles.container}>
        <div className={styles.videoContent}>
          <h1>{tabContent?.title}</h1>
          <iframe
            src={`https://www.youtube.com/embed/${tabContent?.details?.video}`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
          <p>{tabContent?.content}</p>
        </div>
        <div className={styles.description}>
          <h1>Mais Detalhes Sobre...</h1>
          <div className={styles.firstContent}>
            <img src={tabContent?.details.image1} alt="" />
            <p>{tabContent?.details.description1}</p>
          </div>
          <div className={styles.secondContent}>
            <p>{tabContent?.details.description2}</p>
            <img src={tabContent?.details.image2} alt="" />
          </div>
        </div>
      </main>
    </>
  );
}

export default Details;
