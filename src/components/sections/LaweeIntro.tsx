export default function LaweeIntro() {
  return (
    <div className="w-full text-gray-800">
      {/* Intro1 */}
      <div id="intro1" className="h-screen w-full flex flex-col justify-center items-center text-center bg-blue-200 space-y-6">
        <div className="w-full h-1/2 bg-blue-400 flex items-center justify-center text-white text-3xl font-bold">
          포인트 이미지
        </div>
        <h2 className="text-5xl font-bold">LAWE 소개 (1/2)</h2>
        <p className="text-xl">LAWE는 AI 기반의 소송업무를 지향합니다.</p>
      </div>

      {/* Intro2 (id 추가) */}
      <div id="intro2" className="h-screen w-full flex flex-col justify-center items-center text-center bg-white space-y-6">
        <h2 className="text-5xl font-bold">LAWE 소개 (2/2)</h2>
        <p className="text-xl">LAWE를 도입한 법률팀은 어떻게 변할까요?</p>
        <ul className="list-disc list-inside space-y-3 text-lg max-w-3xl text-left">
          <li>효율성 향상 - 반복적인 문서 작업을 AI가 대신합니다.</li>
          <li>정보의 체계적 보존 - 소송 사건과 관련 문서를 DB로 완벽하게 관리합니다.</li>
          <li>유사 사건 인사이트 확보 - 판례 검색의 한계를 넘는 AI 기반 분석.</li>
          <li>법률 실무 최적화 - 변호사, 사무장, 로펌 직원 모두에게 실질적인 도움 제공.</li>
        </ul>
      </div>
    </div>
  );
}
