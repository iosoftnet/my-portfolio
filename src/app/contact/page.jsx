import React from "react";
import styles from "./contact.module.css";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import ShareIcon from "@mui/icons-material/Share";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Link from "next/link";

const Contact = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Get in touch</div>

      <div className={styles.contactDiv}>
        <div className={styles.contact}>
          <div className={styles.heading}> Phone </div>
          <div className={styles.subHeading}> +971 56 2123845 </div>
          <div className={styles.icon}>
            {" "}
            <CallIcon sx={{ color: "#ae9402" }} />{" "}
          </div>
        </div>

        <div className={styles.contact}>
          <div className={styles.heading}> Email </div>
          <div className={styles.subHeading}> iosoftnet@gmail.com </div>
          <div className={styles.icon}>
            {" "}
            <EmailIcon sx={{ color: "#ae9402" }} />{" "}
          </div>
        </div>

        <div className={styles.contact}>
          <div className={styles.heading}> Address </div>
          <div className={styles.subHeading}> Abu Dhabi, UAE </div>
          <div className={styles.icon}>
            {" "}
            <FmdGoodIcon sx={{ color: "#ae9402" }} />{" "}
          </div>
        </div>

        <div className={styles.contact}>
          <div className={styles.heading}> Follow me </div>
          <div className={styles.socailLinks}>
          <Link href="https://www.facebook.com/ishaq.afridi.161009/" target="_blank">
          <FacebookIcon sx={{ color: "#fff "}} />
        </Link>
        <Link href="https://www.instagram.com/ishaqafrid/" target="_blank">
          <InstagramIcon sx={{ color: "#fff "}} />
        </Link>
        <Link href="https://www.linkedin.com/in/muhammad-ishaq099/" target="_blank">
          <LinkedInIcon sx={{ color: "#fff "}} />
        </Link>
        <Link href="https://github.com/iosoftnet" target="_blank">
          <GitHubIcon sx={{ color: "#fff "}} />
        </Link>
          </div>
          <div className={styles.icon}>
            {" "}
            <ShareIcon sx={{ color: "#ae9402" }} />{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
