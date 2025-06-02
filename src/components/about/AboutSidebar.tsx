// ✅ 2. AboutSidebar.tsx
// 역할: About 페이지 전용 사이드 메뉴 (왼쪽 고정)

interface SidebarItem {
  label: string;
  value: string;
}

export default function AboutSidebar({
  selected,
  onSelect,
}: {
  selected: string;
  onSelect: (value: string) => void;
}) {
  const items: SidebarItem[] = [
    { label: '회사 소개', value: 'intro' },
    { label: '오시는 길', value: 'map' },
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