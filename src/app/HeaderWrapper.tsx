'use client';

import Header from '@/components/header';

export default function HeaderWrapper() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white border-b">
      <Header />
    </header>
  );
}
