import ImgLogo from "../../assets/portfolio.png"
import styles from "../Header/Header.module.css"
export function Header(){
  return(
    <header className={styles.header}>
    <div className={styles.divLogo}>
      <img src={ImgLogo} alt="" />
    </div>
    <menu className={styles.menu}>
      <span>Sobre</span>
      <span>Stack</span>
      <span>Projetos</span>
    </menu>
    <div className={styles.divButton}>
      <button className={styles.button} type="submit">Contato</button>
    </div>
    </header>
  )
}