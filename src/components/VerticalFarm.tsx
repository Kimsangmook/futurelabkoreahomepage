'use client';

import { GridCol, GridContainer } from '@/components/Grid';
import styled from 'styled-components';

const VerticalFarm = () => {
  return (
    <StyledSection>
      <BackContainer>
        <Right $backgroundUrl={'/images/school.png'} />
      </BackContainer>
      <GridContainer>
        <GridCol sm={2} md={6} lg={6}>
          <VerticalContent>
            <Title>폐교형 상생 수직농장</Title>
            <SubTitle></SubTitle>
            <SubTitle>YOUTH VERTICAL FARM</SubTitle>
            <Description>
              <p>
                <strong>폐교 모델:</strong> 인구소멸지역, 폐교
              </p>
              <p>신재생 에너지 기반 시설</p>
              <p>청년, 퇴직 공무원 고용</p>
              <p>지역 경제 및 인구 활성화 포커싱</p>
            </Description>
          </VerticalContent>
        </GridCol>

        <GridCol sm={2} md={6} lg={6}></GridCol>
      </GridContainer>
    </StyledSection>
  );
};

export default VerticalFarm;

const StyledSection = styled.section`
  position: relative;
  background-color: black;
  padding: 20px 0;
  text-align: center;
`;

const VerticalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
  height: 400px;
  padding: 20px;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  color: #007bff;
`;

const SubTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
  color: #ffffff;
`;

const Description = styled.div`
  font-size: 16px;
  text-align: center;
  line-height: 1.5;
  max-width: 300px;
  color: #ffffff;
`;

const BackContainer = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  display: flex;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
`;

const Right = styled.div<{ $backgroundUrl?: string }>`
  width: 50%;
  height: 100%;
  background: ${(props) =>
    props.$backgroundUrl ? `url(${props.$backgroundUrl}) no-repeat center/cover` : '#ddd'};
`;
