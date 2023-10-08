import Link from "next/link";
import styles from "./footer.module.css";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.copyRight}>
        {" "}
        © 2023 Haseebulhasan. All rights reserved{" "}
      </div>
      <div className={styles.socailLinks}>
        <Link href="https://www.facebook.com/huhassan88/" target="_blank">
          <FacebookIcon sx={{ color: "#fff "}} />
        </Link>
        <Link href="https://www.instagram.com/imhaseebulhasan/" target="_blank">
          <InstagramIcon sx={{ color: "#fff "}} />
        </Link>
        <Link href="https://www.linkedin.com/in/haseeb-ul-hasan-203259164/" target="_blank">
          <LinkedInIcon sx={{ color: "#fff "}} />
        </Link>
        <Link href="https://github.com/HaseebUlHasan" target="_blank">
          <GitHubIcon sx={{ color: "#fff "}} />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
