'use client';

import Link from 'next/link';

interface DropdownItem {
  
  label: string;
  href: string;
}

interface NavItemWithDropdownProps {
  title: string;
  href?: string;
  dropdownItems?: DropdownItem[];
}


export default function NavItemWithDropdown({
  title,
  href,
  dropdownItems,
}: NavItemWithDropdownProps) {
  return (
    <div className="relative inline-block group">
      <div className="px-2 py-1 cursor-pointer hover:text-blue-600 transition">
        {href ? (
          <Link href={href}>
            {title}
          </Link>
        ) : (
          <span>{title}</span>
        )}
      </div>

      {dropdownItems && (
        <div
          className="absolute left-0 mt-2 w-max bg-white shadow-md rounded text-sm z-50
                     opacity-0 invisible group-hover:opacity-100 group-hover:visible
                     transition-all duration-200"
        >
          <ul className="py-2 px-1 whitespace-nowrap">
            {dropdownItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
