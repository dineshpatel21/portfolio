import React from "react";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Fill free to reach out.</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src="" alt="Email icon" />
          <a href="mailto:dinesh.patel36936@gmail.com">
            dinesh.patel36936@gmail.com
          </a>
        </li>
        <li className={styles.link}>
          <img src="" alt="Github icon" />
          <a href="https://www.linkedin.com/in/dinesh-patel-b4aa20220?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
            Linkedin.com
          </a>
        </li>
        <li className={styles.link}>
          <img src="" alt="Email icon" />
          <a href="https://github.com/dineshpatel21">Github.com</a>
        </li>
      </ul>
    </footer>
  );
};
export default Contact;
