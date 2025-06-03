'use client';

import Link from 'next/link';

export default function MainPage() {
    return (
        <main className="relative scroll-smooth">

            {[
                {
                    id: 'section1',
                    bg: "url('/images/sean_pollock.jpg')",
                    content: (
                        <>
                            <div className="flex flex-col items-center text-center">
                                <h1 className="text-7xl font-bold text-white">FIDES</h1>
                                <p className="text-white mt-4">송무 업무의 혁신을 이뤄냅니다</p>
                            </div>
                        </>
                    ),
                },
                {
                    id: 'section2',
                    bg: "url('/images/spiral.jpg')",
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
                    bg: "url('/images/3d_judge_baton.jpg')",
                    content: (
                        <div className="flex justify-center gap-8 mt-6">
                            {/* 버튼 1 */}
                            <div className="flex flex-col items-center space-y-2">
                                <Link href="/dx-solution3">
                                    <div className="w-40 h-40 relative overflow-hidden rounded-full shadow-md cursor-pointer hover:opacity-90 transition duration-300">
                                        <img
                                            src="/images/test_picto.png"
                                            alt="DX 3"
                                            className="block w-full h-full object-cover"
                                        />
                                    </div>
                                </Link>
                                <span className="text-white text-2xl mt-4">DX 솔루션 3</span>
                            </div>

                            {/* 버튼 2 */}
                            <div className="flex flex-col items-center space-y-2">
                                <Link href="/dx-solution3">
                                    <div className="w-40 h-40 relative overflow-hidden rounded-full shadow-md cursor-pointer hover:opacity-90 transition duration-300">
                                        <img
                                            src="/images/test_picto.png"
                                            alt="DX 3"
                                            className="block w-full h-full object-cover"
                                        />
                                    </div>
                                </Link>
                                <span className="text-white text-2xl mt-4">DX 솔루션 3</span>
                            </div>

                            {/* 버튼 3 */}
                            <div className="flex flex-col items-center space-y-2">
                                <Link href="/dx-solution3">
                                    <div className="w-40 h-40 relative overflow-hidden rounded-full shadow-md cursor-pointer hover:opacity-90 transition duration-300">
                                        <img
                                            src="/images/test_picto.png"
                                            alt="DX 3"
                                            className="block w-full h-full object-cover"
                                        />
                                    </div>
                                </Link>
                                <span className="text-white text-2xl mt-4">DX 솔루션 3</span>
                            </div>
                        </div>
                    ),
                },
                {
                    id: 'section4',
                    bg: "url('/images/broken_line_bw.jpg')",
                    content: (
                        <div className="text-center text-white">
                            <img
                                src="/images/sample.jpg"
                                alt="설명 이미지"
                                className="w-80 mx-auto mb-4 rounded-lg shadow-md"
                            />
                            <div className="text-2xl font-semibold">
                                혁신적인 기술로 송무의 미래를 만듭니다.
                            </div>
                        </div>
                    ),
                },
                {
                    id: 'section5',
                    bg: "url('/images/hands_on_keyboard.jpg')",
                    content: <div className="text-4xl font-semibold text-white">
                                <h2 className="text-4xl font-semibold">법률 AI 솔루션</h2>
                                <p className="max-w-md">
                                    FIDES는 AI 기반 법률 분석 및 송무 지원 솔루션을 통해 변호사의 업무 효율을 극대화합니다.
                                </p>
                            </div>,
                },
                {
                    id: 'section6',
                    bg: "url('/images/click.jpg')",
                    content: <div className="text-4xl font-semibold text-white">찾아오시는 길</div>,
                },
            ].map((section) => (
                <section
                    key={section.id}
                    id={section.id}
                    className="snap-start relative h-screen w-full flex items-center justify-center overflow-hidden">


                    {/* 블러 처리된 배경 이미지 */}
                    <div
                        className="absolute inset-0 w-full h-full bg-cover bg-center blur-sm scale-110"
                        style={{ backgroundImage: section.bg }}
                    />

                    {/* 실제 콘텐츠 */}
                    <div className="relative z-10">
                        {section.content}
                    </div>
                </section>
            ))}
        </main>
    );
}