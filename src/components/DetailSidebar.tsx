'use client';

import Link from 'next/link';

interface SidebarItem {
  label: string;
  value: string;
}

interface DetailSidebarProps {
  items: SidebarItem[];
  selected: string;
  onSelect: (val: string) => void;
}

export default function DetailSidebar({
  items,
  selected,
  onSelect,
}: DetailSidebarProps) {
  return (
    <div className="fixed top-[100px] left-10 space-y-3">
      {items.map((item) => {
        const isActive = selected === item.value;

        return (
          <div key={item.value} className="flex items-center space-x-2">
            <div
              className={`w-2 h-2 rounded-full ${
                isActive ? 'bg-blue-600' : 'bg-gray-400'
              }`}
            />
            <button
              onClick={() => {
                onSelect(item.value);
                const el = document.getElementById(item.value);
                if (el) el.scrollIntoView({ behavior: 'smooth' });
                history.replaceState(null, '', `#${item.value}`);
              }}
              className={`text-sm text-left ${
                isActive ? 'text-blue-600 font-semibold' : 'text-gray-600'
              }`}
            >
              {item.label}
            </button>
          </div>
        );
      })}
    </div>
  );
}
