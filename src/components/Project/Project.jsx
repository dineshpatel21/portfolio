import React from "react";
// import code from "../../assets/project/code.png";
import ProjectCard from "./ProjectCard";
import styles from "./Project.module.css";

const Project = () => {
  const projects = [
    {
      title: "",
      imageSrc: "",
      description: "",
      demo: "",
      source: "",
      skills: ["c", "c++", "java", "mysql"],
    },
    {
      title: "",
      imageSrc: "",
      description: "",
      demo: "",
      source: "",
      skills: ["html", "css", "javascript"],
    },
    {
      title: "",
      imageSrc: "",
      description: "",
      demo: "",
      source: "",
      skills: ["html", "css", "javascript"],
    },
    {
      title: "",
      imageSrc: "",
      description: "",
      demo: "",
      source: "",
      skills: ["html", "css", "javascript"],
    },
  ];
  return (
    <section id="projects" className={styles.container}>
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.projects}>
        {projects.map((item, index) => {
          return <ProjectCard key={index} item={item} />;
        })}
      </div>
    </section>
  );
};
export default Project;
