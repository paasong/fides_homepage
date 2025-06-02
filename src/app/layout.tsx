import './globals.css';
import { ReactNode } from 'react';
import HeaderWrapper from './HeaderWrapper';

export const metadata = {
  title: 'My Homepage',
  description: 'IR Kudos Landing',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko">
      <body className="bg-white text-black">
        {/* 헤더는 고정 */}
        <HeaderWrapper />

        {/* 헤더를 제외한 나머지 영역 */}
        <div className="flex flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
