import React from 'react';
import styles from './Projects.module.css';
import SectionTitle from '../../common/SectionTitle/SectionTitle';

function Projects() {
  return (
    <section className={styles.projectsContainer} id="projects">
      <SectionTitle children='Projects' />
      {/* Projects 내용 추가 예정 */}
    </section>
  );
}

export default Projects;
