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
          <button onClick={() => scrollTo("about")} className={styles.navItem}>About</button>
          <button onClick={() => scrollTo("skills")} className={styles.navItem}>Skills</button>
          <button onClick={() => scrollTo("archiving")} className={styles.navItem}>Archiving</button>
          <button onClick={() => scrollTo("projects")} className={styles.navItem}>Projects</button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
