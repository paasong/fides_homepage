'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import NavItemWithDropdown from './NavItemWithDropdown';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(0);
  const sectionCount = 6;
  const pathname = usePathname();

  const menuItems = [
    {
      title: '회사소개',
      dropdownItems: [
        { label: '회사소개', href: '/about#about' },
        { label: '오시는 길', href: '/about#map' },
      ],
    },
    {
      title: '기술 소개',
      
      dropdownItems: [
        { label: 'LAWEE 소개', href: '/technology#intro' },
        { label: '주요 기능', href: '/technology#features' },
        { label: '특화 기술', href: '/technology#technology' },
        { label: '도입 안내', href: '/technology#guide' },
        { label: '제휴 안내', href: '/technology#partner' },
      ],
    },
    {
      title: '특허 및 인증',
      href: '/patent',
    },
  ];

  useEffect(() => {
    if (pathname !== '/main') return;

    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      sections.forEach((section, index) => {
        if (
          section.offsetTop <= scrollPosition &&
          section.offsetTop + section.clientHeight > scrollPosition
        ) {
          setActiveSection(index);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  const scrollToSection = (index: number) => {
    const section = document.querySelectorAll('section')[index];
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b">
      <div className="max-w-screen-xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/main" className="text-xl font-bold text-blue-700">
          <span className="text-blue">FIDES</span>
        </Link>

        <nav className="hidden md:flex gap-8 items-center text-sm text-gray-800">
          {menuItems.map((item) => (
            <NavItemWithDropdown
              key={item.title}
              title={item.title}
              href={item.href}
              dropdownItems={item.dropdownItems}
            />
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="#contact"
            className="hidden md:inline-block bg-black text-white px-4 py-2 rounded-full text-sm hover:bg-gray-800"
          >
            Contact
          </Link>

          <button
            className="md:hidden flex flex-col gap-1"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className="w-6 h-0.5 bg-black"></span>
            <span className="w-6 h-0.5 bg-black"></span>
            <span className="w-6 h-0.5 bg-black"></span>
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t text-sm px-4 py-3 space-y-2">
          {menuItems.map((item) => (
            <div key={item.title}>
              <Link href={item.href || '#'} className="block py-1 text-gray-800">
                {item.title}
              </Link>
              {item.dropdownItems && (
                <div className="ml-4 text-gray-600 space-y-1">
                  {item.dropdownItems.map((subItem) => (
                    <Link
                      key={subItem.label}
                      href={subItem.href}
                      className="block hover:text-blue-600"
                    >
                      {subItem.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          <Link
            href="#contact"
            className="block bg-black text-white px-4 py-2 rounded-full text-center mt-4"
          >
            Contact
          </Link>
        </div>
      )}

      {/* section 인디케이터: /main 에서만 보임 */}
      {pathname === '/main' && (
        <div className="fixed left-4 top-1/3 z-40 hidden md:flex flex-col items-center gap-4">
          {Array.from({ length: sectionCount }).map((_, i) => (
            <button
              key={i}
              title={`Section ${i + 1}`}
              onClick={() => scrollToSection(i)}
              className={`w-3 h-3 rounded-full border-2 transition-colors duration-200 ${
                activeSection === i ? 'bg-blue-600 border-blue-600' : 'bg-white border-gray-400'
              }`}
            ></button>
          ))}
        </div>
      )}
    </header>
  );
}
