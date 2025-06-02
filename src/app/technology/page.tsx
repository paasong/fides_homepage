// ✅ technology/page.tsx

'use client';

import { useEffect, useRef, useState } from 'react';
import LayoutWrapper from '@/app/LayoutWrapper';
import TechnologySidebar from '@/components/sections/TechnologySidebar';
import LaweeFeatures from '@/components/sections/LaweeFeatures';
import LaweeGuide from '@/components/sections/LaweeGuide';
import LaweeIntro from '@/components/sections/LaweeIntro';
import LaweePartner from '@/components/sections/LaweePartner';
import LaweeTech from '@/components/sections/LaweeTech';

const sectionOrder = ['features', 'guide', 'technology', 'intro', 'partner'];

export default function TechnologyPage() {
  const [selected, setSelected] = useState('features');
  const isScrolling = useRef(false);

  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (sectionOrder.includes(hash)) {
      setSelected(hash);
      const el = document.getElementById(hash);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

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
        setSelected(next);
        const el = document.getElementById(next);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
        history.replaceState(null, '', `#${next}`);
        isScrolling.current = true;
        setTimeout(() => (isScrolling.current = false), 800);
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: true });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [selected]);

  return (
    <LayoutWrapper>
      <div className="flex">
        <div className="min-w-[160px]">
          <TechnologySidebar selected={selected} onSelect={setSelected} />
        </div>
        <div className="flex-1 h-screen overflow-hidden">
          <LaweeFeatures />
          <LaweeGuide />
          <LaweeTech />
          <LaweeIntro />
          <LaweePartner />
        </div>
      </div>
    </LayoutWrapper>
  );
}
