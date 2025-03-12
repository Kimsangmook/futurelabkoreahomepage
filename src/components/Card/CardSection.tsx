'use client';

import React from 'react';
import styled from 'styled-components';
import CardHeader from './CardHeader';
import Card from './Card';

const cards = [
  {
    title: 'Challenge',
    subtitle: '도전',
    description: '새로운 도전을 통해 모두가 꿈꾸는 세상을 뛰어넘는 이상을 만든다',
    image: '/images/vision.png',
    value: 'VISION',
  },
  {
    title: 'Zero Energy',
    subtitle: '제로 에너지',
    description: '제로에너지 팜 시스템을 실현해 지속가능한 소비를 창출한다',
    image: '/images/mission.png',
    value: 'MISSION',
  },
  {
    title: 'Consideration',
    subtitle: '친환경',
    description: '이타심과 배려에 기초한 고민과 미래의 모습을 향한 열정',
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
