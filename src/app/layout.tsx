import './globals.css';
import { ReactNode } from 'react';
import HeaderWrapper from './HeaderWrapper'; 
import LayoutWrapper from './LayoutWrapper';  

export const metadata = {
  title: 'My Homepage',
  description: 'IR Kudos Landing',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko">
      <body className="bg-white text-black">
        <HeaderWrapper />
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
