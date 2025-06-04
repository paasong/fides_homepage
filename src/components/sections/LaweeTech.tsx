export default function LaweeTech() {
  return (
    <div className="w-full text-gray-800">
      {/* 특화 기술 1/3 */}
      <div id = "technology1" className="h-screen w-full flex flex-col justify-center items-center text-center bg-blue-200 space-y-6">
        <h2 className="text-5xl font-bold">특화 기술 (1/3)</h2>
        <h3 className="text-2xl font-semibold">[서브메인]</h3>
        <p>LAWE의 강점은 단순하지 않습니다. 통합하고, 추적하고, 집합하며 요약합니다.</p>
        <h3 className="text-2xl font-semibold">[제목1]</h3>
        <p>특허받은 기술 - "리걸테크 기반 사건 검색 서비스 제공 시스템"</p>
        <ul className="list-disc list-inside space-y-2 text-lg text-left max-w-3xl">
          <li>출원일: 2024년 08월 20일</li>
          <li>출원번호: 제10-2024-0111201 호</li>
          <li>등록번호: 특허 제 10-2785954 호</li>
          <li>등록일: 2025년 03월 19일</li>
        </ul>
      </div>

      {/* 특화 기술 2/3 */}
      <div id = "technology2" className="h-screen w-full flex flex-col justify-center items-center text-center bg-blue-200 space-y-6">
        <h2 className="text-5xl font-bold">특화 기술 (2/3)</h2>
        <h3 className="text-2xl font-semibold">[제목2]</h3>
        <p>기술 1: 눈덩이 글리기 기법 (통합 요약)</p>
        <p className="max-w-3xl text-left">
          LAWE는 단일 문서를 독립적으로 요약하지 않습니다. 사건 초기 작성된 문서의 주요 내용과 후속 문서의 흐름을 따라가며,
          새로운 정보가 추가되면 이를 연결해 최적화합니다.  
          우리는 이를 ***눈덩이 글리기 기법***이라고 부릅니다.
        </p>
      </div>

      {/* 특화 기술 3/3 */}
      <div id="technology3" className="h-screen w-full flex flex-col justify-center items-center text-center bg-blue-200 space-y-6">
        <h2 className="text-5xl font-bold">특화 기술 (3/3)</h2>
        <h3 className="text-2xl font-semibold">[제목3]</h3>
        <p>기술 2: 렌즈 포커싱 기법 (정밀 요약)</p>
        <p className="max-w-3xl text-left">
          LAWE는 중요한 문장을 중심으로 추상적인 내용을 구체화하며 재요약합니다.  
          단일 문서의 핵심 내용을 자동 정제해 핵심 키워드로 구조화합니다.  
          이를 우리는 ***렌즈 포커싱 기법***이라고 부릅니다.
        </p>
      </div>
    </div>
  );
}
