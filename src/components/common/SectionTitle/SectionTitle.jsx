import React from 'react';
import styles from './SectionTitle.module.css';

function SectionTitle({ children }) {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>{children}</h2>
    </div>
  );
}

export default SectionTitle;
