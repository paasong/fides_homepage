import '../globals.css';
import { ReactNode } from 'react';
import Header from '@/components/header'; // components/Header.tsx 경로

export const metadata = {
  title: 'My Homepage',
  description: 'IR Kudos Landing',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko">
      <body className="bg-white text-black">
        {children}
      </body>
    </html>
  );
}
