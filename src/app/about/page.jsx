import Image from "next/image";
import styles from "./about.module.css";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          src="/ishaq.jpg"
          fill
          alt="about pic"
          className={styles.image}
        />
      </div>

      <div className={styles.rightSection}>
        <div className={styles.title}> About me</div>
        <div className={styles.desc}>
          I am Muhammad Ishaq, a dedicated front-end web developer with a
          passion for crafting engaging and user-friendly digital experiences.
          With expertise in HTML, CSS, JavaScript, React, NextJS and Angular other CMS like Wordpress, WebFlow
          Frontend UI I specialize in translating design concepts into
          responsive and visually appealing websites. I thrive on collaborating
          with teams to deliver seamless interfaces that elevate user
          interactions and drive engagement. Lets build something exceptional
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
            <div className={styles.heading}> Muhammad Ishaq </div>
            <div className={styles.heading}> iosoftnet@gmail.com </div>
            <div className={styles.heading}> 4 Jan 1996 </div>
            <div className={styles.heading}> +971 562123845 </div>
            <div className={styles.heading}> BS Computer Science </div>
            <div className={styles.heading}> Available </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
