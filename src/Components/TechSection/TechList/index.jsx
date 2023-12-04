import { technologies } from "../../../data/technologies"
import { TechCard } from "../../fragment/TechCard"
import styles from "../TechList/TechList.module.css"

export function TechList(){
  return(
      <ul className={styles.techUl}>
        <TechCard  technologies={technologies}/>
      </ul>
  )
}