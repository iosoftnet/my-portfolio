import Image from "next/image";
import Link from "next/link";
import styles from "./project.module.css";

const Project = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}> Projects </div>

      <div className={styles.projectsDiv}>
        <Link href="https://playing-dice.netlify.app/" target="_blank" className={styles.project}>
          <div className={styles.imageCont}>
            <Image
              src="/dice.png"
              fill
              alt="project image"
              className={styles.image}
            />
          </div>
          <div> Dice Game </div>
        </Link>

        <Link href="https://netflix-my-movie-clone.netlify.app/" target="_blank" className={styles.project}>
          <div className={styles.imageCont}>
            <Image
              src="/netflix.png"
              fill
              alt="project image"
              className={styles.image}
            />
          </div>
          <div> Netflix Clone </div>
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

        <Link href="https://www.haseeb-ul-hasan.com" target="_blank" className={styles.project}>
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
              src="/skyloov.png"
              fill
              alt="project image"
              className={styles.image}
            />
          </div>
          <div> Skyloov Property Portal </div>
        </Link>
      </div>
    </div>
  );
};

export default Project;
