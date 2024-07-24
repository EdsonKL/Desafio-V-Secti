import IconFace from "../../assets/icons/icon-Face.png";
import IconWhats from "../../assets/icons/icon-Whats.png";
import IconX from "../../assets/icons/icon-X.png";
import styles from "./Share.module.css";

function Share({ tabContent }: any) {
  return (
    <div className={styles.container}>
      <div className={styles.iconContainer}>
        <a
          target="_blank"
          href={`https://www.facebook.com/dialog/share?app_id=87741124305&href=https://desafio-v-secti.vercel.app/details/${tabContent?.id}`}
        >
          <img src={IconFace} />
        </a>
        <a
          target="_blank"
          href={`https://x.com/intent/post?text=Link:&url=https://desafio-v-secti.vercel.app/details/${tabContent?.id}`}
        >
          <img src={IconX} />
        </a>
        <a
          target="_blank"
          href={`https://api.whatsapp.com/send?text=https://desafio-v-secti.vercel.app/details/${tabContent?.id}`}
        >
          <img src={IconWhats} />
        </a>
      </div>
    </div>
  );
}

export default Share;
