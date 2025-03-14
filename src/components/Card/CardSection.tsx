'use client';

import React from 'react';
import styled from 'styled-components';
import CardHeader from './CardHeader';
import Card from './Card';

const cards = [
  {
    title: 'CHALLENGE',
    type: 1,
    description: '새로운 도전과 꿈을 뛰어 넘는 현실',
    image: '/images/mission.png',
    value: 'MISSION',
  },
  {
    title: 'ZERO ENERGY',
    type: 2,
    description: '제로에너지 기반 지속 가능한 소비',
    image: '/images/vision.png',
    value: 'VISION',
  },
  {
    title: 'CONSIDERATION',
    type: 3,
    description: '미래를 고무하는 이타심과 배려',
    image: '/images/value.png',
    value: 'VALUE',
  },
];

const CardSection = () => {
  return (
    <SectionContainer>
      <CardHeader />
      <CardContainer>
        {cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </CardContainer>
    </SectionContainer>
  );
};

export default CardSection;

const SectionContainer = styled.section`
  text-align: center;
  padding: 60px 20px;
  background-color: black;
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;
