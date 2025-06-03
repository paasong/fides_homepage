// components/about/AboutSection2.tsx
import React from 'react';
import styles from '@/styles/about.module.css';

const AboutSection2: React.FC = () => {
  return (
    <section id="about2" className={styles.section}>
      <header className={styles.globalNav}>
        <h2>오시는 길</h2>
        <nav>
          <button>회사소개</button>
          <button>기술 소개</button>
          <button>특허 및 인증</button>
        </nav>
      </header>

      <div className={styles.content}>
        <h3>LOCATION</h3>
        <iframe
          src="https://www.google.com/maps/embed?pb=..." // 실제 지도 URL로 교체
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>

        <div className={styles.info}>
          <p>주소: 경기도 과천시 관문로 92, 101동 1503호 (중앙동, 힐스테이트 과천중앙)</p>
          <p>대표전화: 031-360-1053, 팩스: 031-360-1054</p>
          <p>이메일: <a href="mailto:fides@lawee.kr">fides@lawee.kr</a></p>
          <p>교통정보: 지하철 4호선 정부과천청사역 11번 출구 도보 5분</p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection2;
