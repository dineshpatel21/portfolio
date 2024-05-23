import React from "react";
import styles from "./ProjectCard.module.css";
import code from "../../assets/project/code.png";

const ProjectCard = ({
  key,
  item: { title, imageSrc, description, skills, demo, source },
}) => {
  return (
    <div key={key} className={styles.container}>
      <img src={code} className={styles.image} alt={`project logo`} />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.skills}>
        {skills.map((skill, idx) => {
          return (
            <li key={idx} className={styles.skill}>
              {skill}
            </li>
          );
        })}
      </ul>
      <div className={styles.links}>
        <a href={demo} className={styles.link}>
          Demo
        </a>
        <a href={source} className={styles.link}>
          Source
        </a>
      </div>
    </div>
  );
};
export default ProjectCard;
