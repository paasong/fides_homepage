'use client';

import React from 'react';

export interface Patent {
  id: number;
  applicationNumber: string;
  inventionTitle: string;
  registrationNumber: string;
  imageUrl: string;
}

interface Props {
  patent: Patent;
  onClickImage: (imgUrl: string) => void;
}

const PatentItem = ({ patent, onClickImage }: Props) => (
  <div className="w-full flex items-start gap-4 py-6 border-b">
    <button
      onClick={() => onClickImage(patent.imageUrl)}
      className="bg-orange-400 text-white font-bold px-3 py-1 rounded shrink-0"
    >
      특허
    </button>
    <div className="text-sm sm:text-base leading-relaxed">
      <p className="font-semibold">- 출원번호 : {patent.applicationNumber}</p>
      <p>- 발명의 명칭 : {patent.inventionTitle}</p>
      <p>- 등록번호 : {patent.registrationNumber}</p>
    </div>
  </div>
);

export default PatentItem;
