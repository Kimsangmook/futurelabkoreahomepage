'use client';

import styled from 'styled-components';
import Image from 'next/image';
import { GridCol, GridContainer } from './Grid';

const DistributionStructure = () => {
  return (
    <Section>
      <GridContainer>
        <GridCol sm={0} md={2} lg={2} />
        <GridCol sm={4} md={8} lg={8}>
          <BackgroundOverlay>
            <Title>유통 구조</Title>
          </BackgroundOverlay>
          <Content>
            <ProcessContainer>
              <CircleContainer>
                <HalfCircle $position="top" $color="#000000" />
                <Circle $bgColor="#1A1A1A">
                  <Icon>🔲</Icon>
                </Circle>
              </CircleContainer>

              <CircleContainer>
                <HalfCircle $position="bottom" $color="#4D4D4D" />
                <Circle $bgColor="#B3B3B3">
                  <Icon>📊</Icon>
                </Circle>
              </CircleContainer>

              <CircleContainer>
                <HalfCircle $position="top" $color="#FFFFFF" />
                <Circle $bgColor="#1A1A1A">
                  <Icon>📋</Icon>
                </Circle>
              </CircleContainer>

              <CircleContainer>
                <HalfCircle $position="bottom" $color="#4D4D4D" />
                <Circle $bgColor="#B3B3B3">
                  <Icon>⚙️</Icon>
                </Circle>
              </CircleContainer>

              <CircleContainer>
                <HalfCircle $position="top" $color="#FFFFFF" />
                <Circle $bgColor="#1A1A1A">
                  <Icon>👥</Icon>
                </Circle>
              </CircleContainer>
            </ProcessContainer>
          </Content>
        </GridCol>
        <GridCol sm={0} md={2} lg={2} />
      </GridContainer>
    </Section>
  );
};

export default DistributionStructure;

const Section = styled.section`
  background-color: #2c3748;
  padding: 80px 0;
  color: white;
`;

const BackgroundOverlay = styled.div`
  text-align: center;
  font-size: 36px;
  font-weight: bold;
`;

const Title = styled.h2``;

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
`;

const ProcessContainer = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
  justify-content: center;
`;

const CircleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;
const HalfCircle = styled.div<{ $position: 'top' | 'bottom'; $color: string }>`
  width: 140px;
  height: 70px;
  border-radius: 140px 140px 0 0;
  background-color: ${({ $color }) => $color};
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 0;
  ${({ $position }) =>
    $position === 'top' ? 'top: -20px;' : 'bottom: -20px; transform: rotate(180deg);'}
`;

const Circle = styled.div<{ $bgColor: string }>`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: ${({ $bgColor }) => $bgColor};
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

const Icon = styled.span`
  font-size: 36px;
`;
