import { user } from "../../data/user.js"
import ImgWhatsapp from "../../assets/whatsapp-icon.png"
import ImgLinkedIn from "../../assets/linkedin-icon.png"
import ImgGithub from "../../assets/github-icon.png"
import styles from "../Footer/Footer.module.css"

export function Footer (){
  return(
    <footer className={styles.footer}>
      <div className={styles.divInform}>
        <h1 className={styles.title}>Contato</h1>
        <div className={styles.images}>
        <img src={ImgWhatsapp} alt="Whatsapp" />
        <img src={ImgLinkedIn} alt="Linkedin" />
        <img src={ImgGithub} alt="Github" />
        </div>
      </div>
      <div className={styles.p}>
        <p>Todos os direitos reservados - {user}</p>
      </div>
    </footer>
  )
}