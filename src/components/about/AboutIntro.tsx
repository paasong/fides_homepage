'use client';

import React from 'react';

export default function AboutIntro() {
  return (
    <section
      id="intro"
      className="min-h-screen w-full bg-white text-gray-800 px-12 py-24 flex flex-col space-y-16"
    >


      {/* 콘텐츠 */}
      <div className="space-y-10">
        <div>
          <h3 className="text-2xl font-semibold mb-2">[서브메인]</h3>
          <p className="text-lg">
            (주)피데스는 법률 분야 AI 기반 업무 시스템 및 데이터 개발 전문 기업을 지향합니다.
          </p>
        </div>

        <div>
          <h4 className="text-xl font-semibold mb-2">[제목1]</h4>
          <p className="text-lg mb-2">
            "정직하게 살고, 타인에게 해를 끼치지 않고, 각자에게 그의 정당한 몫을 주는 것" - 이것이 피데스가 지향하는 가치입니다.
          </p>
          <p className="italic text-sm text-gray-500">
            (Honeste vivere, alterum non laedere, suum cuique tribuere ; 로마의 법학자 울피아누스의 법과 정의의 개념)
          </p>
        </div>

        {/* 대문구 영역 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-6">
          <div className="space-y-2">
            <p className="font-semibold">대문구: 법률 (into Lex)</p>
            <p className="text-sm">법률 분야에서 최고의 전문성을 지향합니다.</p>
          </div>
          <div className="space-y-2">
            <p className="font-semibold">대문구: 신뢰 (within Fides)</p>
            <p className="text-sm">피데스의 정신과 자세로 임합니다.</p>
          </div>
          <div className="space-y-2">
            <p className="font-semibold">대문구: 공공성 (for Publica)</p>
            <p className="text-sm">공익과 공공성을 조화롭게 추구합니다.</p>
          </div>
          <div className="space-y-2">
            <p className="font-semibold">대문구: 협업 (by Cooperatio)</p>
            <p className="text-sm">집단지성과 공정한 협업을 추구합니다.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
