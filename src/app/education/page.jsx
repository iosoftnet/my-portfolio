import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import styles from "./education.module.css";

const Education = () => {
  return (
    <div className={styles.container}>
         <div className={styles.title}> Education </div>
        <div> 
        <div className={styles.contactDiv}>

        <div className={styles.contact}>
          <div className={styles.heading}> BS Software Engineering </div>
          <div className={styles.subHeading}> 2017 - 2021 </div>
          <div className={styles.icon}>
            
            <BusinessCenterIcon sx={{ color: "#53c28b" }} />
          </div>
        </div>

        <div className={styles.contact}>
          <div className={styles.heading}> FSC Pre Engineering </div>
          <div className={styles.subHeading}> 2015 - 2017 </div>
          <div className={styles.icon}>
            
            <BusinessCenterIcon sx={{ color: "#53c28b" }} />
          </div>
        </div>

        <div className={styles.contact}>
          <div className={styles.heading}> Matric </div>
          <div className={styles.subHeading}> 2015 </div>
          <div className={styles.icon}>
            <BusinessCenterIcon sx={{ color: "#53c28b" }} />
          </div>
        </div>

        </div>
         </div>
    </div>
  )
}

export default Education