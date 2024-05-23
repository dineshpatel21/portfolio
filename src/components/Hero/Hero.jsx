import React from "react";
import styles from "./Hero.module.css";
import Dinesh from "../../assets/Hero/Dinesh.jpg";

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, i'm Dinesh Patel</h1>
        <p className={styles.description}>
          i'm a React native developer with 18 months of experience using React
          and Javascript. Reach out if you'd like to learn more.
        </p>
        <a
          href="mailto:dinesh.patel36936@gmail.com"
          className={styles.emailContact}
        >
          Contact me
        </a>
      </div>
      <img src={Dinesh} alt="" className={styles.heroImg} />
      <div className={styles.topblur} />
      <div className={styles.bottomblur} />
    </section>
  );
};
export default Hero;
