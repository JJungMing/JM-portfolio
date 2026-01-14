import React from 'react';
import styles from './SectionTitle.module.css';

function SectionTitle({ children }) {
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>{children}</h3>
    </div>
  );
}

export default SectionTitle;
