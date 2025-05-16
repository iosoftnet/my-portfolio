import Image from "next/image";
import Link from "next/link";
import styles from "./project.module.css";

const Project = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}> Projects </div>

      <div className={styles.projectsDiv}>
        <Link href="https://openhomegroup.com/" target="_blank" className={styles.project}>
          <div className={styles.imageCont}>
            <Image
              src="/openhomegroup.jpeg"
              fill
              alt="project image"
              className={styles.image}
            />
          </div>
          <div> Open Home Properties </div>
        </Link>

        <Link href="https://ghala.estate/" target="_blank" className={styles.project}>
          <div className={styles.imageCont}>
            <Image
              src="/ghala-real.jpeg"
              fill
              alt="project image"
              className={styles.image}
            />
          </div>
          <div> Ghala Real Estate </div>
        </Link>

        <Link href="https://outlast-book.netlify.app/"  target="_blank" className={styles.project}>
          <div className={styles.imageCont}>
            <Image
              src="/book.png"
              fill
              alt="project image"
              className={styles.image}
            />
          </div>
          <div> Outlast Book </div>
        </Link>

        <Link href="https://khareedbaij.web.app/" target="_blank" className={styles.project}>
          <div className={styles.imageCont}>
            <Image
              src="/olx.png"
              fill
              alt="project image"
              className={styles.image}
            />
          </div>
          <div> Olx Clone KhareedBaji</div>
        </Link>

        <Link href="https://tictoctoe-game.netlify.app/" target="_blank" className={styles.project}>
          <div className={styles.imageCont}>
            <Image
              src="/tictoctoe.png"
              fill
              alt="project image"
              className={styles.image}
            />
          </div>
          <div> Tictoctoe Game </div>
        </Link>

        <Link href="https://user-data-posts.netlify.app/" target="_blank" className={styles.project}>
          <div className={styles.imageCont}>
            <Image
              src="/json.png"
              fill
              alt="project image"
              className={styles.image}
            />
          </div>
          <div> Json Placeholder API </div>
        </Link>

        <Link href="https://www.iosoftnet.com" target="_blank" className={styles.project}>
          <div className={styles.imageCont}>
            <Image
              src="/portfolio.png"
              fill
              alt="project image"
              className={styles.image}
            />
          </div>
          <div> Portfolio </div>
        </Link>

        <Link href="https://skyloov.com/" target="_blank" className={styles.project}>
          <div className={styles.imageCont}>
            <Image
              src="/aqary.jpg"
              fill
              alt="project image"
              className={styles.image}
            />
          </div>
          <div> AQARY INTERNATIONAL GROUP </div>
        </Link>
      </div>
    </div>
  );
};

export default Project;
