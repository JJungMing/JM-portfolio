import React from 'react';
import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.headerWrapper}>
      <div className={styles.headerInner}>
        <a href="#top" className={styles.brand}>JM's Portfolio</a>
        <nav className={styles.nav}>
          <a href="#about" className={styles.navItem}>
            ABOUT ME
          </a>
          <a href="#skills" className={styles.navItem}>
            SKILLS
          </a>
          <a href="#archiving" className={styles.navItem}>
            ARCHIVING
          </a>
          <a href="#projects" className={styles.navItem}>
            PROJECTS
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