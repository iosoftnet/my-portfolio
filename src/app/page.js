import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.personalInfo}>
        <div className={styles.title}>
          Its me, <br />
          Muhammad Ishaq, <br />
          Front End Developer
        </div>

        <div className={styles.desc}>
          A Frontend focused Web Developer buildings the Frontend of Websites
          and Web Application that leads to the success of the overall Products.
        </div>

        <div className={styles.downloadBtn}>
          <Link
            className={styles.download}
            href="/M-Ishaq-Resume.pdf"
            download
            target="_blank"
          >
            Download CV
          </Link>
          <Link
            className={styles.download}
            href="/coverLetter.pdf"
            download
            target="_blank"
          >
            Download Cover Letter
          </Link>
        </div>
      </div>

      <div className={styles.image}>
        <Image src="/ishaq.jpg" fill alt="muhammad image" />
      </div>
    </div>
  );
}
