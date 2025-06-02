
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
          <AboutSidebar selected={selected} onSelect={setSelected} />
        </div>
        <div className="flex-1 h-screen overflow-hidden">
          <AboutIntro />
          <AboutMap />
        </div>
      </div>
    </LayoutWrapper>
  );
}
