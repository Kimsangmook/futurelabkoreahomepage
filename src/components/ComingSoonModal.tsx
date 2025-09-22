'use client';

import React, { useState } from 'react';

const ComingSoonModal = () => {
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) return null;

  return (
    <div
      className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50"
      onClick={() => setIsOpen(false)}
    >
      <div
        className="bg-white p-8 rounded-lg shadow-lg max-w-md mx-4 text-center relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-2 right-2 text-xl hover:opacity-70 transition-opacity"
          onClick={() => setIsOpen(false)}
        >
          ❌
        </button>
        <h2 className="text-2xl font-bold mb-4">🚧 페이지 준비 중! 🚧</h2>
        <p className="mb-3">이 페이지는 현재 마법사의 작업 중입니다. 🧙‍♂️✨</p>
        <p>보다 멋진 소개로 우리 회사를 알릴 예정이니 잠시만 기다려 주세요! ⏳</p>
      </div>
    </div>
  );
};

export default ComingSoonModal;