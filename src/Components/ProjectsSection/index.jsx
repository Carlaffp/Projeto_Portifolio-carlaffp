
import styles from "../ProjectsSection/ProjectSection.module.css"
import { ProjectList } from "./projectsList"


export function ProjectSection(){
  return(
    <div className={styles.projectSection}>
      <h1 className={styles.title}>Projetos</h1>
      <ProjectList/>
    </div>
  )
}