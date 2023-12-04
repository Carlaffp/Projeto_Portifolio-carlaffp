import ImgBanner from "../../assets/banner-img.png"
import { username } from "../../data/user"
import styles from "../BannerSection/BannerSection.module.css"

export function BannerSection(){
  return(
      <section className={styles.bannerSection}>
      <div className={styles.bannerInformation}>
      <p className={styles.name}>{username}</p>
      <h1 className={styles.title}>Bem vindo ao meu portfólio</h1>
      <p className={styles.p}>Uma frase interessante sobre mim</p>
      <button className={styles.button} type="submit">Saiba mais</button>
      </div>
      <div className={styles.divImg}>
        <img className={styles.img} src={ImgBanner} alt="" />
      </div>
      </section>
  )
}