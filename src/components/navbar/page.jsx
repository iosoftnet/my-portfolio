import styles from "./navbar.module.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className={styles.container}>
        <Link href="/" className={styles.name}> Haseebulhasan </Link>
        <div className={styles.links}>
            <Link href="/about" className={styles.link}> About </Link>
            <Link href="/education" className={styles.link}> Education </Link>
            <Link href="/skills" className={styles.link}> Skills </Link>
            <Link href="/experience" className={styles.link}> Experience </Link> 
            <Link href="/project" className={styles.link}> Projects </Link>
            <Link href="/contact" className={styles.link}> Contact </Link>

        </div>
    </div>
  )
}

export default Navbar