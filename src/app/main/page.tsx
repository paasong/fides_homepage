'use client';

export default function MainPage() {
  return (
    <main className="relative">
      {[
        {
          id: 'section1',
          bg: "url('/images/section1.jpg')",
          content: (
            <>
              <h1 className="text-5xl font-bold text-white">We Prove the Power of IR & SR</h1>
              <p className="text-white mt-4">Scroll down ↓</p>
            </>
          ),
        },
        {
          id: 'section2',
          bg: 'bg-black',
          content: (
            <div className="text-white text-4xl font-bold">
              IR Consulting<br />
              <div className="mt-4 border-t border-blue-600 w-full" />
              <div className="mt-4">DX Solution</div>
            </div>
          ),
        },
        {
          id: 'section3',
          bg: 'bg-blue-100',
          content: <div className="text-4xl font-semibold">Section 3</div>,
        },
        {
          id: 'section4',
          bg: 'bg-green-100',
          content: <div className="text-4xl font-semibold">Section 4</div>,
        },
        {
          id: 'section5',
          bg: 'bg-yellow-100',
          content: <div className="text-4xl font-semibold">Section 5</div>,
        },
        {
          id: 'section6',
          bg: 'bg-gray-100',
          content: <div className="text-4xl font-semibold">Section 6</div>,
        },
      ].map((section, index) => (
        <section
          key={section.id}
          id={section.id}
          className={`h-screen w-full flex items-center justify-center ${section.bg.includes('url') ? '' : section.bg}`}
          style={section.bg.includes('url') ? { backgroundImage: section.bg, backgroundSize: 'cover', backgroundPosition: 'center' } : {}}
        >
          {section.content}
        </section>
      ))}
    </main>
  );
}
