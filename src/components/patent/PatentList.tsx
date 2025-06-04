'use client';

import React, { useState } from 'react';
import PatentItem, { Patent } from './PatentItem';
import PatentModal from './PatentModal';

const patents: Patent[] = [
  {
    id: 1,
    applicationNumber: '제 10-2024-0111201 호',
    inventionTitle: '리걸테크 기반 사건 검색 서비스 제공 시스템',
    registrationNumber: '특허 제 10-2785954 호',
    imageUrl: '/images/patent/patent-detail.png', // ← 여기 사용
  },
  {
    id: 2,
    applicationNumber: '제 10-2024-0111202 호',
    inventionTitle: 'AI 기반 문서 요약 시스템',
    registrationNumber: '특허 제 10-2785955 호',
    imageUrl: '/images/patent/patent-detail.png',
  },
];

const PatentList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const [modalImage, setModalImage] = useState<string | null>(null);

  const handleImageClick = (url: string) => setModalImage(url);
  const closeModal = () => setModalImage(null);

  const totalPages = Math.ceil(patents.length / itemsPerPage);
  const currentItems = patents.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="w-full max-w-screen-xl mx-auto px-6 pt-24">
      <h1 className="text-3xl font-bold mb-2 text-center">특허 및 인증</h1>
      <p className="text-center mb-6 text-gray-600">중요한 인증 정보를 확인하세요</p>

      <div className="border-t border-b divide-y">
        {currentItems.map((patent) => (
          <PatentItem key={patent.id} patent={patent} onClickImage={handleImageClick} />
        ))}
      </div>

      <div className="flex justify-center mt-6 gap-2 items-center">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            className={`w-8 h-8 rounded-full border ${
              currentPage === i + 1 ? 'bg-black text-white' : 'text-gray-600'
            }`}
            onClick={() => setCurrentPage(i + 1)}
          >
            {i + 1}
          </button>
        ))}
      </div>

      {modalImage && (
        <PatentModal imageUrl={modalImage} onClose={closeModal} />
      )}
    </div>
  );
};

export default PatentList;
