import React from 'react';
import styles from './About.module.css';
import {
    IoMdPerson,
    IoIosCalendar,
    IoIosCall,
    IoIosMail,
    IoIosPin,
    IoIosSchool,
} from 'react-icons/io';
{/*import Header from '../Header/Header';*/}

const items = [
    { icon: <IoMdPerson />, label: '이름', value: '박정민' },
    { icon: <IoIosCalendar />, label: '생년월일', value: '01.10.10' },
    { icon: <IoIosPin />, label: '위치', value: '청주시 흥덕구' },
    { icon: <IoIosCall />, label: '연락처', value: '010-7142-1213' },
    { icon: <IoIosMail />, label: '이메일', value: '1010pjm@naver.com' },
    { icon: <IoIosSchool />, label: '학력', value: '청주대학교(인공지능소프트웨어학과)' },
];

function About() {
    return (
        <section className={styles.aboutContainer}>
            {/*<Header />*/}
            <header className={styles.aboutHeader}>
                <h2 className={styles.aboutTitle}>ABOUT ME</h2>
            </header>

            <div className={styles.aboutGrid}>
                {items.map((item, idx) => (
                    <div key={idx} className={styles.aboutItem}>
                        <div className={styles.aboutItemIcon}>{item.icon}</div>
                        <div className={styles.aboutItemText}>
                            <div className={styles.aboutItemLabel}>{item.label}</div>
                            <div className={styles.aboutItemValue}>{item.value}</div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default About;