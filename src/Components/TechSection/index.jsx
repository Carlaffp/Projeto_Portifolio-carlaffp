import { TechList } from "./TechList";
import styles from "../TechSection/TechSection.module.css"
export function TechSection(){
  return(
    <div className={styles.techSection}>
      <h1 className={styles.title}>Tecnologias</h1>
      <TechList/>
    </div>
  )
}