import React from "react";
import styles from "./Experience.module.css";
import globalStyles from "../../globalStyles.module.css";
import reactjs from "../../assets/experience/reactjs.png";
import html from "../../assets/experience/html.png";
import css from "../../assets/experience/css.png";
import js from "../../assets/experience/js.png";
// import graphQL from "../../assets/experience/graphQL.png";
import monogdb from "../../assets/experience/mongodb.png";
// import node from "../../assets/experience/node.png";
import android from "../../assets/experience/android.png";
import kotlin from "../../assets/experience/kotlin.png";
import Earnwealth from "../../assets/experience/Earnwealth.png";
import sampark_infoways from "../../assets/experience/sampark_infoways.jpg";


// import sitwithlaptop from "../../assets/about/sitwithlaptop.png";

const Experience = () => {
  const skill = [
    { title: "HTML", src: html },
    { title: "CSS", src: css },
    { title: "JS", src: js },
    { title: "Android", src: android },
    { title: "Kotlin", src: kotlin },
    { title: "REACT JS", src: reactjs },
    { title: "MongoDB", src: monogdb },
    // { title: "Node", src: node },
    // { title: "GraphQL", src: graphQL },
    
  ];

  const history = [
    {
      role: "React Native Developer",
      organisation: "Sampark Infoways",
      startDate: "28-05-2023",
      endDate: "30-04-2024",
      experiences: ["React Native", "Android", "Kotlin"],
      ImageSrc: Earnwealth,
    },
    {
      role: "React Native Developer",
      organisation: "EarnWealth Solutions",
      startDate: "19-12-2022",
      endDate: "10-04-2023",
      experiences: ["React Native", "Android", "Kotlin"],
      ImageSrc: sampark_infoways,
    },
  ];
  return (
    <section id="experience" className={styles.container}>
      <h2 className={globalStyles.title}>Experience</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skill.map((item, index) => {
            console.log(item.src);
            return (
              <div className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={item.src} alt={item.title} />
                </div>
                <p>{item.title}</p>
              </div>
            );
          })}
        </div>

        <ul className={styles.history}>
          {history.map((item, index) => {
            return (
              <li key={index} className={styles.historyItem}>
                <img src={item.ImageSrc} alt={`${item.organisation} logo`} />
                <div className={styles.historyItemDetails}>
                  <h3>{`${item.role}, ${item.organisation}`}</h3>
                  <p>{`${item.startDate} - ${item.endDate}`}</p>
                  <ul>
                    {item.experiences.map((experience, index) => {
                      return <li key={index}>{experience}</li>;
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
export default Experience;
