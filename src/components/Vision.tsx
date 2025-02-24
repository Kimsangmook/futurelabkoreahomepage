'use client';

import styled, { css } from 'styled-components';


const Vision = () => {
  return (
    <GridContainer>
        <GridCol $sm={0} $md={2} $lg={2} />

        <GridCol $sm={4} $md={8} $lg={8}>
          <HeaderText>Our Vision</HeaderText>
          <VisionContainer>
            <VisionItem>
                <Title>VISION</Title>
                <Circle>
                <TargetIcon />
                </Circle>
                <Description>기업의 사회공헌과 사회적 책임의 실현</Description>
            </VisionItem>
            <VisionItem>
                <Title>MISSION</Title>
                <Circle>
                <RocketIcon />
                </Circle>
                <Description>제로에너지 팜 시스템의 구축과 기술개발</Description>
            </VisionItem>
            <VisionItem>
                <Title>VALUE</Title>
                <Circle>
                <AtomIcon />
                </Circle>
                <Description>이타심과 배려에 기초한 고민과 성공을 향한 열정</Description>
            </VisionItem>
            </VisionContainer>
        </GridCol>

        <GridCol $sm={0} $md={2} $lg={2} />

    </GridContainer>
  );
};

export default Vision;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(12, minmax(5px, 1fr));
  gap: 24px;
  align-items: center;
  justify-content: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 80px 16px;
  scroll-margin-top: 80px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(12, minmax(5px, 1fr));
    padding: 60px 16px;
    gap: 28px;
    min-height: 300px;
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(4, minmax(5px, 1fr));
    padding: 40px 12px;
    gap: 12px;
    min-height: 200px;
  }
`;

const GridCol = styled.div<{$sm: number; $md: number; $lg: number}>`
  display: block;
  height: 100%;
  ${({ $sm, $md, $lg }) => css`
    grid-column: span ${$sm};
    /* display: none; */
    @media (min-width: 600px) {
      grid-column: span ${$md};

    }

    @media (min-width: 1024px) {
      grid-column: span ${$lg};
    }
  `}
`;

const HeaderText = styled.h2`
    text-align: center;
    font-size: 40px;
    font-weight: 400;
    letter-spacing: -.5px;
    line-height: 56px;
`;

const VisionContainer = styled.div`
    display: flex;
    justify-content: space-around;
    text-align: center;
    margin-top: 40px;
    gap: 8px;
`;
const VisionItem = styled.div`
    flex: 1;
`;
const Title = styled.h3`
  font-weight: bold;
`;

const Description = styled.p`
  font-size: 14px;
  color: #333;
`;

const Circle = styled.div`
  width: 100px;
  height: 100px;
  background-color: #555;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 16px;
`;
const TargetIcon = () => <span>🎯</span>;
const RocketIcon = () => <span>🚀</span>;
const AtomIcon = () => <span>⚛️</span>;