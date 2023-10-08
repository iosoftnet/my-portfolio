import Image from "next/image"
import styles from "./skills.module.css"

const Skills = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}> Skills </div>

      <div className={styles.skillsDiv}>
        <div className={styles.skill}>
           <div className={styles.imageCont}>
           <Image src="/html.png" fill alt="skill image" className={styles.image}/>
           </div>
            <div> HTML </div>
        </div>
        <div className={styles.skill}>
           <div className={styles.imageCont}>
           <Image src="/css.png" fill alt="skill image" className={styles.image}/>
           </div>
            <div> CSS </div>
        </div>

        <div className={styles.skill}>
           <div className={styles.imageCont}>
           <Image src="/js.png" fill alt="skill image" className={styles.image}/>
           </div>
            <div> Javascript </div>
        </div>

        <div className={styles.skill}>
           <div className={styles.imageCont}>
           <Image src="/react.png" fill alt="skill image" className={styles.image}/>
           </div>
            <div> React </div>
        </div>

        <div className={styles.skill}>
           <div className={styles.imageCont}>
           <Image src="/next.png" fill alt="skill image" className={styles.image}/>
           </div>
            <div> Next </div>
        </div>

        <div className={styles.skill}>
           <div className={styles.imageCont}>
           <Image src="/angular.png" fill alt="skill image" className={styles.image}/>
           </div>
            <div> Angular </div>
        </div>

        <div className={styles.skill}>
           <div className={styles.imageCont}>
           <Image src="/bootstraf.png" fill alt="skill image" className={styles.image}/>
           </div>
            <div> Bootstraf </div>
        </div>

        <div className={styles.skill}>
           <div className={styles.imageCont}>
           <Image src="/material.png" fill alt="skill image" className={styles.image}/>
           </div>
            <div> Material UI </div>
        </div>
        
        <div className={styles.skill}>
           <div className={styles.imageCont}>
           <Image src="/primeReact.png" fill alt="skill image" className={styles.image}/>
           </div>
            <div> Prime React </div>
        </div>

        <div className={styles.skill}>
           <div className={styles.imageCont}>
           <Image src="/git.png" fill alt="skill image" className={styles.image}/>
           </div>
            <div> Github </div>
        </div>
      </div>
    </div>
  )
}

export default Skills