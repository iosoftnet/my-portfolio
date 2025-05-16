import WorkIcon from "@mui/icons-material/Work";

import styles from "./experience.module.css";

const Experience = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}> Experience </div>

      <div className={styles.experienceDiv}>
        <div className={styles.experience}>
          <div className={styles.headingTitle}>
            <div className={styles.heading}> Frontend Developer </div>
            <div className={styles.subHeading}> Aug 2023 - Present </div>
          </div>
          <div className={styles.location}>
            {" "}
            Open Home Properties Abu Dhabi, UAE{" "}
          </div>
          <div className={styles.icon}>
            <WorkIcon sx={{ color: "#ae9402" }} />
          </div>
          <div>
            <ul className={styles.keyPoint}>
              <li className={styles.list}>
                {" "}
                Real Estate Properties, Mangement, Media{" "}
              </li>
              <li className={styles.list}>
                {" "}
                Prioritizing intuitive design for property listings, search
                functionality, Service, blogs, Companies Mangement, Projects,
                Agents etc
              </li>
              <li className={styles.list}>
                {" "}
                Ensuring seamless browsing on various devices{" "}
              </li>
              <li className={styles.list}>
                {" "}
                Showcasing property details, images, and descriptions{" "}
              </li>
              <li className={styles.list}> Wordpress, React, Next.js, Material-UI, Webflow </li>
            </ul>
          </div>
        </div>

        <div className={styles.experience}>
          <div className={styles.headingTitle}>
            <div className={styles.heading}> Frontend Developer </div>
            <div className={styles.subHeading}> Oct 2022 - Sep 2023 </div>
          </div>
          <div className={styles.location}>
            Aqary International Group Abu Dhabi, UAE
          </div>

          <div className={styles.icon}>
            <WorkIcon sx={{ color: "#ae9402" }} />
          </div>

          <div>
            <ul className={styles.keyPoint}>
              <li className={styles.list}> Real Estate Property Portal </li>
              <li className={styles.list}>
                {" "}
                Prioritizing intuitive design for property listings, search
                functionality, Agents and Companies listing
              </li>
              <li className={styles.list}>
                {" "}
                Ensuring seamless browsing on various devices{" "}
              </li>
              <li className={styles.list}>
                {" "}
                Showcasing property details, images, and descriptions{" "}
              </li>
              <li className={styles.list}>
                {" "}
                React, Next.js, Material-UI, Prime React and Bootstraf, Angular
                UI{" "}
              </li>
            </ul>
          </div>
        </div> 

        <div className={styles.experience}>
          <div className={styles.headingTitle}>
            <div className={styles.heading}> Frontend Developer </div>
            <div className={styles.subHeading}> Dec 2021 - 2022 </div>
          </div>
          <div className={styles.location}>
            {" "}
            Ghala Real Estate Abu Dhabi, UAE{" "}
          </div>
          <div className={styles.icon}>
            <WorkIcon sx={{ color: "#ae9402" }} />
          </div>
          <div>
            <ul className={styles.keyPoint}>
              <li className={styles.list}>
                {" "}
                Real Estate Properties, Mangement, Media{" "}
              </li>
              <li className={styles.list}>
                {" "}
                Prioritizing intuitive design for property listings, search
                functionality, Service, blogs, Companies Mangement, Projects,
                Agents etc
              </li>
              <li className={styles.list}>
                {" "}
                Ensuring seamless browsing on various devices{" "}
              </li>
              <li className={styles.list}>
                {" "}
                Showcasing property details, images, and descriptions{" "}
              </li>
              <li className={styles.list}> Wordpress, React, Next.js, Material-UI, Webflow </li>
            </ul>
          </div>
        </div>

        <div className={styles.experience}>
          <div className={styles.headingTitle}>
            <div className={styles.heading}> Junior Frontend Developer </div>
            <div className={styles.subHeading}> Nov 2021 - June 2022 </div>
          </div>
          <div className={styles.location}> Cloudtek, Islamabad Pakistan </div>

          <div className={styles.icon}>
            <WorkIcon sx={{ color: "#ae9402" }} />
          </div>
          <div>
            <ul className={styles.keyPoint}>
              <li className={styles.list}> Solve Clients Test </li>
              <li className={styles.list}>
                Collaborate with senior developers and designers to implement
                user-friendly, responsive web applications using React.js
              </li>
              <li className={styles.list}>
                Participate in the design and development of intuitive and
                visually appealing user interfaces
              </li>
              <li className={styles.list}>
                {" "}
                React, Html, CSS, Javascript, Material UI and Bootstraf
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.experience}>
          <div className={styles.headingTitle}>
            <div className={styles.heading}> Junior Frontend Developer </div>
            <div className={styles.subHeading}> Aug 2021 - Oct 2021 </div>
          </div>
          <div className={styles.location}> Asimplify, Islamabad Pakistan </div>

          <div className={styles.icon}>
            <WorkIcon sx={{ color: "#ae9402" }} />
          </div>

          <div>
            <ul className={styles.keyPoint}>
              <li className={styles.list}>
                {" "}
                Building the basic logic and worked on basic and small tasks
                using HTML, CSS, JavaScript, React JS{" "}
              </li>
              <li className={styles.list}>
                works with Senior developers to improve the appearance of a
                website.
              </li>
              <li className={styles.list}>
                Build reusable code and libraries for future use
              </li>
              <li className={styles.list}>
                {" "}
                React, Html, CSS, Javascript, Material UI and Bootstraf
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
