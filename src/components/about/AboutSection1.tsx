// components/about/AboutSection1.tsx
import React from 'react';
import styles from '@/styles/about.module.css';

const AboutSection1: React.FC = () => {
  return (
    <section id="about1" className={styles.section}>
      <header className={styles.globalNav}>
        <h2>회사소개</h2>
        <nav>
          <button>회사소개</button>
          <button>기술 소개</button>
          <button>특허 및 인증</button>
        </nav>
      </header>

      <div className={styles.content}>
        <h3>[서브메인]</h3>
        <p>(주)피데스는 법률 분야 AI 기반 업무 시스템 및 데이터 개발 전문 기업을 지향합니다.</p>

        <h4>[제목1]</h4>
        <p>"정직하게 살고, 타인에게 해를 끼치지 않고, 각자에게 그의 정당한 몫을 주는 것" - 이것이 피데스가 지향하는 가치입니다.</p>
        <p className={styles.italic}>
          (Honeste vivere, alterum non laedere, suum cuique tribuere ; 로마의 법학자 울피아누스의 법과 정의의 개념)
        </p>

        <div className={styles.columns}>
          <div>
            <p><strong>대문구:</strong> 법률 (into Lex)</p>
            <p>법률 분야에서 최고의 전문성을 지향합니다.</p>
          </div>
          <div>
            <p><strong>대문구:</strong> 신뢰 (within Fides)</p>
            <p>피데스의 정신과 자세로 임합니다.</p>
          </div>
          <div>
            <p><strong>대문구:</strong> 공공성 (for Publica)</p>
            <p>공익과 공공성을 조화롭게 추구합니다.</p>
          </div>
          <div>
            <p><strong>대문구:</strong> 협업 (by Cooperatio)</p>
            <p>집단지성과 공정한 협업을 추구합니다.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection1;
