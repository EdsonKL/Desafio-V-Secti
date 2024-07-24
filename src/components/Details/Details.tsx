import { useLocation, useParams } from "react-router-dom";
import styles from "./Details.module.css";
import content from "../../json/content.json";
import Header from "../Header/Header";
import Maps from "../Maps/Maps";
import Share from "../Share/Share";
import { useEffect, useRef } from "react";

function Details() {
  const heroDetailsRef = useRef<HTMLDivElement | null>(null);

  const location = useLocation();


  const params = useParams();
  const tabContent = content.find((tab) => tab.id === params.id);
  console.log(tabContent);

  useEffect(() => {
    const hash = location.hash;
    if (hash === "#heroDetails" && heroDetailsRef.current) {
      heroDetailsRef.current?.scrollIntoView({behavior: "instant"});
    }
  }, [location]);

  return (
    <section ref={heroDetailsRef} id="heroDetails">
      <Header />
      <main  className={styles.container}>
        <div className={styles.videoContent}>
          <h1>{tabContent?.title}</h1>
          <iframe
            src={`https://www.youtube.com/embed/${tabContent?.details?.video}`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
          <Share tabContent={tabContent}/>
          <p>{tabContent?.content}</p>
        </div>
        <div className={styles.description}>
          {tabContent?.type == "tourism" ? (
            <>
              <h2>Localização do ponto Turistico</h2>
              <Maps tabContent={tabContent} />
            </>
          ) : null}
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
    </section>
  );
}

export default Details;
