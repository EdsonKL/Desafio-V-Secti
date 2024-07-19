import styles from "./Card.module.css";
import githubIcon from "../../assets/icons/github.png";
import linkedinIcon from "../../assets/icons/linkedin.png";

function Card({ avatar, name, githubLink, linkedinLink }: any) {
  return (
    <div>
      <div className={styles.card}>
        <img className={styles.image} src={avatar} alt="" />
        <h2 className={styles.devTitle}>{name}</h2>
        <div className={styles.socialsContainer}>
          <a href={githubLink} target="_blank" aria-label="Social media link 1">
            <img
              loading="lazy"
              src={githubIcon}
              className={styles.socialIcon}
              alt="link do github"
            />
          </a>
          <a
            href={linkedinLink}
            target="_blank"
            aria-label="Social media link 2"
          >
            <img
              loading="lazy"
              src={linkedinIcon}
              className={styles.socialIcon}
              alt="link do linkedin"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
