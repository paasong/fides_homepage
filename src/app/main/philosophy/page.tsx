// src/app/main/philosophy/page.tsx
import DetailSidebar from '@/components/DetailSidebar';


export default function PhilosophyPage() {
  return (
    <main className="min-h-screen px-8 py-16 bg-white">
      <DetailSidebar />
      <h1 className="text-3xl font-bold mb-6">경영철학</h1>
      <p className="text-lg leading-relaxed">
        고객과 함께 성장하며, 투명하고 신뢰받는 경영을 지향합니다.
      </p>
      <div className="mt-12">
        <img
          src="/images/philosophy-example.jpg"
          alt="경영철학 소개"
          className="rounded-lg shadow-lg w-full max-w-3xl"
        />
      </div>
    </main>
  );
}