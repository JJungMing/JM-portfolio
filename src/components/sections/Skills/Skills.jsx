import React from 'react';
import styles from './Skills.module.css';
import SectionTitle from '../../common/SectionTitle/SectionTitle';

function Skills() {
  return (
    <section className={styles.skillsContainer} id="skills">
      
      <SectionTitle children='Skills' />
      
      <div className={styles.skillGrid}>
        <div>Language</div>
        <div>Frontend</div>
        <div>Backend</div>
        <div>DevOps</div>
      </div>
    </section>
  );
}

export default Skills;
