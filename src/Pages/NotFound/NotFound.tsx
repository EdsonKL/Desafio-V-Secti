import Header from "../../components/Header/Header"
import styles from "./NotFound.module.css"
function NotFound() {
  return (
    <>
    <Header/>
    <div className={styles.container}>
      <h1>404 - Not Found</h1>
      <p>A página que você busca não foi encontrada!</p>
    </div>
    </>
  )
}

export default NotFound
