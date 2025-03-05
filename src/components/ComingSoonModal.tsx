'use client';

import React, { useState } from 'react';
import styled from 'styled-components';

const ComingSoonModal = () => {
  const [isOpen, setIsOpen] = useState(true); // 페이지 로드 시 자동으로 모달 열림

  if (!isOpen) return null; // 닫으면 다시 열리지 않도록 설정

  return (
    <ModalWrapper $isOpen={isOpen} onClick={() => setIsOpen(false)}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={() => setIsOpen(false)}>❌</CloseButton>
        <h2>🚧 페이지 준비 중! 🚧</h2>
        <p>이 페이지는 현재 마법사의 작업 중입니다. 🧙‍♂️✨</p>
        <p>보다 멋진 소개로 우리 회사를 알릴 예정이니 잠시만 기다려 주세요! ⏳</p>
      </ModalContent>
    </ModalWrapper>
  );
};

const ModalWrapper = styled.div<{ $isOpen: boolean }>`
  display: ${({ $isOpen }) => ($isOpen ? 'flex' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 12px;
  width: 90%;
  max-width: 400px;
  text-align: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
`;

export default ComingSoonModal;
