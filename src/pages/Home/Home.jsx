import React from 'react';
import styles from'./Home.module.css';
import Header from '../../components/Header/Header';
import About from '../../components/sections/About/About';

function Home() {
    return (
        <div className={styles.homeContainer}>
            <Header />
            <div className={styles.titleFrame}>
                <div className={styles.title}>
                    프론트엔드 신입 개발자 포트폴리오<br />
                    -박정민-
                </div>
                <div className={styles.content}>
                    안녕하세요.
                    본질에 집중하는 프론트엔드 개발자 박정민입니다.
                </div>
                <div className={styles.button}>
                    더 알아보기 버튼
                </div>
            </div>
            <About />            
        </div>
    );
}

export default Home;