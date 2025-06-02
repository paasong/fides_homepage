'use client';

import { ReactNode } from 'react';

export default function LayoutWrapper({ children }: { children: ReactNode }) {
  return (
    <main
      className="w-full"
      style={{
        paddingTop: '64px', // header와 겹치지 않게
      }}
    >
      {children}
    </main>
  );
}
