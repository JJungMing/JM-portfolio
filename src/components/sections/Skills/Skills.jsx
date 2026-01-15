import React from 'react';
import styles from './Skills.module.css';
import SectionTitle from '../../common/SectionTitle/SectionTitle';

import languageImg from '../../../Image/free-icon-programming-language-18756635.png';
import frontendImg from '../../../Image/free-icon-html-code-19037981.png';
import backendImg from '../../../Image/free-icon-backend-coding-16990182.png';
import devopsImg from '../../../Image/free-icon-dev-10259833.png';

const skills = [
  {
    image: languageImg,
    title: 'Language',
    items: ['TypeScript', 'JavaScript', 'Python', 'Java'],
  },
  {
    image: frontendImg,
    title: 'Frontend',
    items: ['React', 'Next.js', 'Zustand', 'React Query', 'Sass', 'Tailwind CSS'],
  },
  {
    image: backendImg,
    title: 'Backend',
    items: ['Spring Boot', 'JPA', 'Firebase', 'MySQL'],
  },
  {
    image: devopsImg,
    title: 'DevOps',
    items: ['Docker', 'AWS', 'Vercel', 'GitHub'],
  },
];

function Skills() {
  return (
    <section className={styles.skillsWrapper} id="skills">
      <div className={styles.skillsContainer}>
        
        <SectionTitle>Skills</SectionTitle>

        <div className={styles.skillsCard}>
          {skills.map((skill) => (
            <div key={skill.title} className={styles.skillRow}>
              <div className={styles.skillName}>
                <img
                  src={skill.image}
                  alt={`${skill.title} 아이콘`}
                  className={styles.skillIcon}
                />
                <span>{skill.title}</span>
              </div>

              <ul className={styles.skillTags}>
                {skill.items.map((item) => (
                  <li key={item} className={styles.tag}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
      
    </section>
  );
}

export default Skills;