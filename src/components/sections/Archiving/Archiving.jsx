import React from 'react';
import styles from './Archiving.module.css';
import SectionTitle from '../../common/SectionTitle/SectionTitle';

function Archiving() {
  return (
    <section id="archiving" className={styles.archivingContainer}>
      <div className={styles.archivingContent}>
        
        <SectionTitle children='Archiving' />
      
        <div className={styles.archivingInners}>
          <a href="https://github.com/JJungMing" className={styles.archivingInner} target='blank'>
            <div className={styles.archivingIcon}>
              <img 
                src={'githubImg'}
                alt={` GitHub 아이콘`}
              />
            </div>
            <div className={styles.archivingLink}>링크</div>
            <div className={styles.archivingDescription}>소스코드 저장소</div>
          </a>
        </div>

      </div>
    </section>
  );
}

export default Archiving;
