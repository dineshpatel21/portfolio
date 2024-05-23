import React from "react";
import styles from "./About.module.css";
import about from "../../assets/about/arrow.png";
import react from "../../assets/about/react.png";
import ui from "../../assets/about/ui.png";
import sitwithlaptop from "../../assets/about/sitwithlaptop.png";

const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className = {styles.content}>
      <img
        className={styles.aboutImage}
        src={sitwithlaptop}
        alt="Me sitting with laptop"
      />
      <ul className={styles.aboutItems}>
        <li className={styles.aboutItem}>
          <img src={about} alt="ui icon" />
          <div className={styles.aboutItemText}>
            <h3>React Native Developer</h3>
            <p>I'm react native developer with 18 months experience.</p>
          </div>
        </li>
        <li className={styles.aboutItem}>
          <img src={react} alt="ui icon" />
          <div className={styles.aboutItemText}>
            <h3>Android Developer</h3>
            <p>I'm android developer with 18 months experience.</p>
          </div>
        </li>
        <li className={styles.aboutItem}>
          <img src={ui} alt="ui icon" />
          <div className={styles.aboutItemText}>
            <h3>React Developer</h3>
            <p>I'm React Developer with 18 months experience.</p>
          </div>
        </li>
      </ul>
      </div>
    </section>
  );
};
export default About;
