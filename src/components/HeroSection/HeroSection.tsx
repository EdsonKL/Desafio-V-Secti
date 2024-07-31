// import React from "react";
import styles from "./HeroSection.module.css";
import imgMA from "../../assets/images/maimg.png"

function HeroSection() {
  return (
    <section  className={styles.container}>
      <div className={styles.mainContent}>
        <h1>Conheça a cultura do <span>Maranhão</span></h1>
        <img src={imgMA} alt="imagem do maranhão em mapa" />
      </div>
      <div className={styles.textContent}>
        <h1>Aventure-se em diversos assuntos</h1>
        <p>
          A cultura do Maranhão é um verdadeiro tesouro, rica em tradições e
          manifestações que refletem a diversidade e a história deste estado
          encantador. Em cada canto, a herança cultural se manifesta de maneira
          única, seja através da gastronomia, das festas tradicionais, dos
          pontos turísticos repletos de histórias e belezas naturais, ou do
          artesanato que guarda a essência do povo maranhense. Explore e
          descubra as diversas facetas que tornam o Maranhão um destino
          culturalmente vibrante e inesquecível.
        </p>
      </div>
    </section>
  );
}

export default HeroSection;
