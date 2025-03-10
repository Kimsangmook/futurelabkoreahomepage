'use client';

import styled, { css } from 'styled-components';
import { GridContainer, GridCol } from '@/components/Grid';
import BussinessCardArticle from './BusinessCardArticle';
import { DESKTOP, TABLET } from '@/styles/breakpoint';
const Business = () => {
  return (
    <StyledSection>
      <GridContainer>
        <GridCol sm={0} md={2} lg={2} />

        <GridCol sm={4} md={8} lg={8}>
          <BusinssContainer>
            <HeaderText>Our Business</HeaderText>
            <BusinessArticleContainer>
              <BussinessCardArticle
                title="RENEWABLE ENERGY"
                description={[
                  '기존 신재생에너지 발전사업 미흡',
                  '대형발전이 아닌 소형발전',
                  '제로에너지 건물',
                ]}
                backgroundColor="black"
              />

              <BussinessCardArticle
                title="SMARTFARM"
                description={['소규모 스마트팜의 한계', 'Indoor Farming', 'ICT / IOT 접목']}
                backgroundColor="#1A1A1A"
              />

              <BussinessCardArticle
                title="TOKENIZATION"
                description={[
                  'RWA가 트렌드',
                  '코인투자로 인한 투자성향 변화',
                  '투자의 진입장벽 낮춤',
                  '자산 유동화 가능성 확대',
                ]}
                backgroundColor="#000"
              />
            </BusinessArticleContainer>
          </BusinssContainer>
        </GridCol>

        <GridCol sm={0} md={2} lg={2} />
      </GridContainer>
    </StyledSection>
  );
};

export default Business;

const StyledSection = styled.section`
  background-color: #373d4c;
`;

const BusinssContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 50px;
`;

const HeaderText = styled.h2`
  text-align: center;
  font-size: 40px;
  font-weight: 400;
  letter-spacing: -0.5px;
  line-height: 56px;
`;

const BusinessArticleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 8px;
  width: 100%;
`;
