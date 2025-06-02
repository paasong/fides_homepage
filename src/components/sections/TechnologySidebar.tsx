// ✅ TechnologySidebar.tsx

interface SidebarItem {
  label: string;
  value: string;
}

export default function TechnologySidebar({
  selected,
  onSelect,
}: {
  selected: string;
  onSelect: (value: string) => void;
}) {
  const items: SidebarItem[] = [
    { label: 'Lawee 소개', value: 'features' },
    { label: '주요 기능', value: 'guide' },
    { label: '특화 기술', value: 'technology' },
    { label: '도입 안내', value: 'intro' },
    { label: '제휴 안내', value: 'partner' },
  ];

  const handleClick = (value: string) => {
    onSelect(value);
    const el = document.getElementById(value);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    history.replaceState(null, '', `#${value}`);
  };

  return (
    <aside className="sticky top-28 h-fit px-6 py-4 min-w-[160px]">
      <ul className="space-y-3 text-sm">
        {items.map((item) => (
          <li
            key={item.value}
            onClick={() => handleClick(item.value)}
            className={`cursor-pointer whitespace-nowrap ${
              selected === item.value ? 'text-blue-600 font-semibold' : 'text-gray-700'
            }`}
          >
            ● {item.label}
          </li>
        ))}
      </ul>
    </aside>
  );
}