import Image from "next/image";
import styles from "./about.module.css";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          src="/haseeb.jpg"
          fill
          alt="about pic"
          className={styles.image}
        />
      </div>

      <div className={styles.rightSection}>
        <div className={styles.title}> About me</div>
        <div className={styles.desc}>
          I'm Haseeb Ul Hasan, a dedicated front-end web developer with a
          passion for crafting engaging and user-friendly digital experiences.
          With expertise in HTML, CSS, JavaScript, React, NextJS and Angular
          Frontend UI I specialize in translating design concepts into
          responsive and visually appealing websites. I thrive on collaborating
          with teams to deliver seamless interfaces that elevate user
          interactions and drive engagement. Let's build something exceptional
          together.
        </div>

        <div className={styles.detailSection}>
          <div className={styles.subTitle}>
            <div className={styles.heading}> Name: </div>
            <div className={styles.heading}> Email: </div>
            <div className={styles.heading}> Date of Birth: </div>
            <div className={styles.heading}> Phone: </div>
            <div className={styles.heading}> Degree: </div>
            <div className={styles.heading}> Freelancer: </div>
          </div>

          <div className={styles.subTitle}>
            <div className={styles.heading}> Haseeb Ul Hasan </div>
            <div className={styles.heading}> huhassan88@gmail.com </div>
            <div className={styles.heading}> 24 April 1999 </div>
            <div className={styles.heading}> +971 506322498 </div>
            <div className={styles.heading}> BS Software Engineering </div>
            <div className={styles.heading}> Available </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
