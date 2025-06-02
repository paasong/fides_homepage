'use client';

import { ReactNode } from 'react';

export default function LayoutWrapper({ children }: { children: ReactNode }) {
  return (
    <div className="w-full min-h-screen">
      {children}
    </div>
  );
}