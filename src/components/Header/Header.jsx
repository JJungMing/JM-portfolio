import React from 'react';
import styles from './Header.module.css';

const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
};

function Header() {
  return (
    <header className={styles.headerWrapper}>
      <div className={styles.headerInner}>
        <a href="#top" className={styles.brand}>JM's Portfolio</a>
        <nav className={styles.nav}>
          <button onClick={() => scrollTo("about")}>ABOUT</button>
          <button onClick={() => scrollTo("skills")}>SKILLS</button>
          <button onClick={() => scrollTo("projects")}>PROJECTS</button>
          <a href="#archiving" className={styles.navItem}>
            ARCHIVING
          </a>
          <a href="#career" className={styles.navItem}>
            CAREER
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
