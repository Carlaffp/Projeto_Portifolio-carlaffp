import { projects } from "../../../data/projects";
import { ProjectCard } from "../../fragment/ProjectCard";
import styles from "./ProjectList.module.css"

export function ProjectList(){
  return(
      <ul className={styles.projectList}>
      <ProjectCard projects = {projects}/>
      </ul>
  )

}