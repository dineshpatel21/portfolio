import React from "react";
import styles from "./Experience.module.css";
import aboutstyles from "../About/About.module.css";
import reactjs from "../../assets/experience/reactjs.png";
import sitwithlaptop from "../../assets/about/sitwithlaptop.png";

const Experience = () => {
  const skill = [
    { title: "HTML", src: "../../assets/experience/html.png" },
    { title: "CSS", src: "../../assets/experience/css.png" },
    { title: "JS", src: "../../assets/experience/html.png" },
    { title: "GraphQL", src: "../../assets/experience/graphQL.png" },
    { title: "MongoDB", src: "../../assets/experience/mongodb.png" },
    { title: "Node", src: "../../assets/experience/node.png" },
    { title: "REACT JS", src: "../../assets/experience/reactjs.png" },
  ];

  const history = [
    {
      role: "React Native Developer",
      organisation: "Sampark Infoways",
      startDate: "28-05-2023",
      endDate: "30-04-2024",
      experiences: ["React Native", "Android", "Kotlin"],
      ImageSrc: "",
    },
    {
      role: "React Native Developer",
      organisation: "EarnWealth Solutions",
      startDate: "19-12-2022",
      endDate: "10-04-2023",
      experiences: ["React Native", "Android", "Kotlin"],
      ImageSrc: "",
    },
  ];
  return (
    <section id="experience" className={styles.container}>
      <h2 className={aboutstyles.title}>Experience</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skill.map((item, index) => {
            console.log(item.src);
            return (
              <div className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={reactjs} alt={item.title} />
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
                <img src={sitwithlaptop} alt={`${item.organisation} logo`} />
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
