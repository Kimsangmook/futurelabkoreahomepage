'use client';

import { DESKTOP, TABLET } from '@/styles/breakpoint';
import { GridCol, GridContainer } from '@/components/Grid';
import styled, { css } from 'styled-components';

import VisionCardArticle from './\bVisionArticle';

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
                backText="새로운 도전을 통해 모두가 꿈꾸는 세상을 뛰어넘는 이상을 만든다"
                url="/images/vision.png"
              />
              <VisionCardArticle
                frontText="MISSION"
                backText="제로에너지 팜 시스템을 실현해 지속가능한 소비를 창출한다"
                url="/images/mission.png"
              />
              <VisionCardArticle
                frontText="VALUE"
                backText="이타심과 배려에 기초한 고민과 미래의 모습을 향한 열정"
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
  background-color: black;
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
