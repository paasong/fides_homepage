export default function LaweeFeatures() {
  return (
    <div className="w-full text-gray-800">
      {/* Features 1 */}
      <div id="features1" className="h-screen w-full flex flex-col justify-center items-center text-center bg-yellow-100 space-y-6 px-12">
        <h2 className="text-5xl font-bold">주요 기능 (1/2)</h2>
        <p className="text-xl font-semibold">LAWE는 소송업무의 단계별로 AI 기술을 적용합니다.</p>
      </div>

      {/* Features 2 */}
      <div id="features2" className="h-screen w-full flex flex-col justify-center items-center text-center bg-white space-y-6 px-12">
        <h2 className="text-5xl font-bold">주요 기능 (2/2)</h2>
        <ul className="list-decimal list-inside space-y-3 text-lg max-w-3xl text-left">
          <li>소송 사건 등록</li>
          <li>소송문서 업로드</li>
          <li>PDF 문서 텍스트 정보 자동 추출</li>
          <li>AI 요약 자동 생성</li>
          <li>유사 사건 자동 추천</li>
          <li>문서 초안 생성</li>
          <li>전자기록 자동 생성 및 보존</li>
          <li>개인정보 비식별 처리 및 기록 검색</li>
        </ul>
      </div>
    </div>
  );
}
