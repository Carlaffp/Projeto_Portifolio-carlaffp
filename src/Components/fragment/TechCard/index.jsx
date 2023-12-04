import styles from "../TechCard/TechCard.module.css"
export function TechCard({technologies}){
  return(
    <>
      {technologies.map((item,index) =>(
        <li key={index} className={styles.techLi}>
          <img className={styles.techImg} src={item.img} alt="" />
          <h3 className={styles.techName}>{item.name}</h3>
        </li>
      ))}
    </>
  )

}