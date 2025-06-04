// ✅ page.tsx (최종 수정 - 내부 스크롤 허용 및 외부 smooth 처리)

'use client';

import { useEffect, useRef, useState } from 'react';
import LayoutWrapper from '@/app/LayoutWrapper';
import TechnologySidebar from '@/components/sections/TechnologySidebar';
import LaweeFeatures from '@/components/sections/LaweeFeatures';
import LaweeGuide from '@/components/sections/LaweeGuide';
import LaweeIntro from '@/components/sections/LaweeIntro';
import LaweePartner from '@/components/sections/LaweePartner';
import LaweeTech from '@/components/sections/LaweeTech';

const sectionOrder = [
  'intro1', 'intro2',
  'features1', 'features2',
  'technology1', 'technology2', 'technology3',
  'guide1', 'guide2', 
  'partner1', 'partner2'
];

export default function TechnologyPage() {
  const [selected, setSelected] = useState('intro');
  const currentSection = useRef('intro1');
  const isScrolling = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.find((e) => e.isIntersecting);
      if (visible) {
        const id = visible.target.id;
        currentSection.current = id;
        if (id.startsWith('technology')) setSelected('technology');
        else if (id.startsWith('features')) setSelected('features');
        else if (id.startsWith('intro')) setSelected('intro');
        else if (id.startsWith('guide')) setSelected('guide');
        else if (id.startsWith('partner')) setSelected('partner');
        else setSelected(id);
      }
    }, { threshold: 0.5 });

    const els = document.querySelectorAll('[id]');
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      const currentId = currentSection.current;
      const currentEl = document.getElementById(currentId);
      if (!currentEl) return;
      
      e.preventDefault();
      if (isScrolling.current) return;

      const currentIndex = sectionOrder.indexOf(currentId);
      let nextIndex = currentIndex;
      if (e.deltaY > 0 && currentIndex < sectionOrder.length - 1) nextIndex++;
      if (e.deltaY < 0 && currentIndex > 0) nextIndex--;

      const next = sectionOrder[nextIndex];
      const el = document.getElementById(next);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        isScrolling.current = true;
        setTimeout(() => (isScrolling.current = false), 500);
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, []);

  return (
    <LayoutWrapper>
      <div className="flex w-full">
        <div className="fixed top-28 left-0 h-[calc(100vh-7rem)] w-[160px] bg-white z-50 p-4">
          <TechnologySidebar
            selected={selected}
            onSelect={(value) => {
              const id = value === 'technology' ? 'technology1' : value + '1';
              const el = document.getElementById(id);
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
          />
        </div>

        <div className="w-full pl-[160px]">
          <LaweeIntro />
          <LaweeFeatures />
          <LaweeTech />
          <LaweeGuide />
          <LaweePartner />        
        </div>
      </div>
    </LayoutWrapper>
  );
}