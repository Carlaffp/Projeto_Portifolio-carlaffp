import styles from "../AboutMeSection/AboutMe.module.css"
export function AboutMeSection(){
  return(
    <div className={styles.AboutMeSection}>
      <h1 className={styles.title}>Sobre mim</h1>
      <p className={styles.p}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque fuga voluptatibus sed eius minima explicabo laborum libero similique aperiam hic aliquid quae nesciunt, veritatis enim tenetur tempora! Nemo, quidem perspiciatis!</p>
    </div>
  )
}