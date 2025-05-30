// src/components/DetailSidebar.tsx
'use client';

import { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';

const sections = [
  { label: 'Lawee 소개', path: '/main/philosophy' },
  { label: '주요 기능', path: '/main/features' },
  { label: '특화 기술', path: '/main/technology' },
  { label: '도입 안내', path: '/main/guide' },
  { label: '제휴 안내', path: '/main/partner' },
];

export default function DetailSidebar() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <aside className="fixed top-1/4 left-0 z-40 hidden md:flex flex-col items-center bg-blue-50 rounded-r-xl py-2 shadow-md">
      {sections.map((section) => (
        <button
          key={section.path}
          onClick={() => router.push(section.path)}
          className={`w-20 h-10 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 border-b border-white last:border-none transition
            ${pathname === section.path ? 'bg-blue-900' : ''}`}
        >
          {section.label}
        </button>
      ))}
    </aside>
  );
}
