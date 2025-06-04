'use client';

export default function AboutMap() {
  return (
    <section
      id="map"
      className="min-h-screen w-full bg-white text-gray-800 px-12 py-24 flex flex-col space-y-16"
    >

      {/* 콘텐츠 영역 */}
      <div className="space-y-10">
        <h3 className="text-2xl font-semibold">LOCATION</h3>

        <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=..." // 실제 지도 URL로 교체
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>

        {/* 정보 영역 */}
        <div className="space-y-2 text-lg leading-relaxed">
          <p><strong>주소:</strong> 경기도 과천시 관문로 92, 101동 1503호 (중앙동, 힐스테이트 과천중앙)</p>
          <p><strong>대표전화:</strong> 031-360-1053, <strong>팩스:</strong> 031-360-1054</p>
          <p>
            <strong>이메일:</strong>{' '}
            <a href="mailto:fides@lawee.kr" className="text-blue-600 hover:underline">
              fides@lawee.kr
            </a>
          </p>
          <p><strong>교통정보:</strong> 지하철 4호선 정부과천청사역 11번 출구 도보 5분</p>
        </div>
      </div>
    </section>
  );
}
