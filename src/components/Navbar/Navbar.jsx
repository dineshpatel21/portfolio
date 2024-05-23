import React, { useState } from "react";
import styles from "./Navbar.module.css";
// import { getImageUrl } from "../../utils";
import humbergerImg from "../../assets/nav/humberger.png";
import closeImg from "../../assets/nav/close.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        Portfolio
      </a>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          //   src={getImageUrl("nav/humberger.png")}
          src={isOpen ? humbergerImg : closeImg}
          style={{ width: 40, height: 40 }}
          onClick={() => setIsOpen(!isOpen)}
          alt="menu-button"
        />
        <ul className={`${styles.menuItem} ${!isOpen && styles.menuOpen}`}>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
