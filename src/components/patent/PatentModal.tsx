'use client';

import React from 'react';

interface Props {
  imageUrl: string;
  onClose: () => void;
}

const PatentModal = ({ imageUrl, onClose }: Props) => {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-transparent p-0 max-w-[90vw] max-h-[90vh] flex flex-col items-center">
        <img
          src={imageUrl}
          alt="특허 이미지"
          className="max-w-full max-h-[80vh] rounded-lg"
        />
        <button
          onClick={onClose}
          className="mt-4 text-red-500 font-semibold text-sm underline"
        >
          닫기
        </button>
      </div>
    </div>
  );
};

export default PatentModal;
