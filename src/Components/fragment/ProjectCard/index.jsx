import ImgGit from "../../../assets/git-icon.png"
import styles from "../ProjectCard/ProjectCard.module.css"
export function ProjectCard({projects}){
  return(
    <>
      {projects.map((item)=>(
        <li className={styles.projectCard}>
          <div className={styles.cardInform}>
            <h3 className={styles.title}>{item.name}</h3>
            <p className={styles.description}>{item.descricao}</p>
            <span className={styles.span}>Saiba mais</span>
          </div>
            <div className={styles.divImg}>
              <img className={styles.img} src={ImgGit} alt="" />
            </div>
        </li>
      ))}
    </>
  )
}