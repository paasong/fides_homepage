'use client';

import React, { useState } from 'react';
import Link from 'next/link';

interface NavItemWithDropdownProps {
  title: string;
  href?: string;
  dropdownItems?: { label: string; href: string }[];
}

export default function NavItemWithDropdown({ title, href, dropdownItems }: NavItemWithDropdownProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative"
    >
      <Link
        href={href || '#'}
        className="px-3 py-2 text-sm hover:text-blue-600 whitespace-nowrap"
      >
        {title}
      </Link>

      {dropdownItems && isHovered && (
        <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-md py-2 px-4 z-50 flex gap-6 text-sm text-gray-600">
          {dropdownItems.map((item) => (
            <Link key={item.label} href={item.href} className="hover:text-blue-600">
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}