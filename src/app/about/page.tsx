'use client';

import { useEffect, useRef, useState } from 'react';
import LayoutWrapper from '@/app/LayoutWrapper';
import AboutSidebar from '@/components/about/AboutSidebar';
import AboutIntro from '@/components/about/AboutIntro';
import AboutMap from '@/components/about/AboutMap';

const sectionOrder = ['intro', 'map'];

export default function AboutPage() {
  const [selected, setSelected] = useState('intro');
  const isScrolling = useRef(false);

  // 초기 hash 이동 처리
  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (sectionOrder.includes(hash)) {
      setSelected(hash);
      const el = document.getElementById(hash);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  // 휠 이벤트로 부드러운 섹션 이동
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (isScrolling.current) return;

      const currentIndex = sectionOrder.indexOf(selected);
      let nextIndex = currentIndex;

      if (e.deltaY > 0 && currentIndex < sectionOrder.length - 1) {
        nextIndex = currentIndex + 1;
      } else if (e.deltaY < 0 && currentIndex > 0) {
        nextIndex = currentIndex - 1;
      }

      if (nextIndex !== currentIndex) {
        const next = sectionOrder[nextIndex];
        const el = document.getElementById(next);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
          history.replaceState(null, '', `#${next}`);
          setSelected(next);
          isScrolling.current = true;
          setTimeout(() => (isScrolling.current = false), 800);
        }
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [selected]);

  return (
    <LayoutWrapper>
      <div className="flex w-full">
        {/* ✅ 왼쪽 고정 사이드바 */}
        <div className="fixed top-28 left-0 h-[calc(100vh-7rem)] w-[160px] bg-white z-50 px-4 py-4">
          <AboutSidebar selected={selected} onSelect={(value) => {
            setSelected(value);
            const el = document.getElementById(value);
            if (el) el.scrollIntoView({ behavior: 'smooth' });
            history.replaceState(null, '', `#${value}`);
          }} />
        </div>

        {/* ✅ 본문 영역은 좌측 여백 확보 */}
        <div className="w-full pl-[160px]">
          <AboutIntro />
          <AboutMap />
        </div>
      </div>
    </LayoutWrapper>
  );
}
