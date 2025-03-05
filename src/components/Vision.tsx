'use client';

import styled, { css } from 'styled-components';
import { GridContainer, GridCol } from '@/components/Grid';
import VisionCardArticle from './\bVisionArticle';
import { DESKTOP, TABLET } from '@/styles/breakpoint';
const Vision = () => {
  return (
    <StyledSection>
      <GridContainer>
        <GridCol sm={0} md={2} lg={2} />

        <GridCol sm={4} md={8} lg={8}>
          <VisionContainer>
            <VisionArticleContainer>
              <VisionCardArticle
                frontText="VISION"
                backText="기업의 사회공헌과 사회적 책임의 실현"
                url="/images/vision.png"
              />
              <VisionCardArticle
                frontText="MISSION"
                backText="제로 에너지 팜 시스템의 구축과 기술개발"
                url="/images/mission.png"
              />
              <VisionCardArticle
                frontText="VALUE"
                backText="이타심과 배려에 기초한 고민과 성공을 향한 열정"
                url="/images/value.png"
              />
            </VisionArticleContainer>
          </VisionContainer>
        </GridCol>

        <GridCol sm={0} md={2} lg={2} />
      </GridContainer>
    </StyledSection>
  );
};

export default Vision;

const StyledSection = styled.section`
  background-color: #fffef3;
`;

const VisionContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px 0px;
`;

const VisionArticleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 8px;
  width: 100%;
  gap: 12px;
  @media (min-width: ${TABLET}) {
    gap: 24px;
  }

  @media (min-width: ${DESKTOP}) {
    gap: 40px;
  }
`;
