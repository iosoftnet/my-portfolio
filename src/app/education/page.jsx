import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import styles from "./education.module.css";

const Education = () => {
  return (
    <div className={styles.container}>
         <div className={styles.title}> Education </div>
        <div> 
        <div className={styles.contactDiv}>

        <div className={styles.contact}>
          <div className={styles.heading}> BS Computer Science </div>
          <div className={styles.subHeading}> 2016 - 2020 </div>
          <div className={styles.icon}>
            
            <BusinessCenterIcon sx={{ color: "#53c28b" }} />
          </div>
        </div>

        <div className={styles.contact}>
          <div className={styles.heading}> FSC Pre Engineering </div>
          <div className={styles.subHeading}> 2013 - 2015 </div>
          <div className={styles.icon}>
            
            <BusinessCenterIcon sx={{ color: "#53c28b" }} />
          </div>
        </div>

        <div className={styles.contact}>
          <div className={styles.heading}> Matric </div>
          <div className={styles.subHeading}> 2013 </div>
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