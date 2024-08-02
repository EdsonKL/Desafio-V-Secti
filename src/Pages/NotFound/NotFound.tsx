import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import styles from "./NotFound.module.css";
function NotFound() {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.container}>
        <h1>404 - Not Found</h1>
        <p>A página que você busca não foi encontrada!</p>
      </main>
      <Footer />
    </div>
  );
}

export default NotFound;
