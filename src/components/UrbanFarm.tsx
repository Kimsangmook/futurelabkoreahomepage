'use client';

import { GridCol, GridContainer } from '@/components/Grid';
import styled from 'styled-components';

const UrbanFarm = () => {
  return (
    <StyledSection>
      <BackContainer>
        <Left $backgroundUrl={'/images/urban.png'} />
      </BackContainer>
      <GridContainer>
        <GridCol sm={2} md={6} lg={6}></GridCol>
        <GridCol sm={2} md={6} lg={6}>
          <UrbanContent>
            <Title>도심형 수직농장</Title>
            <SubTitle>URBAN INDOOR FARM</SubTitle>
            <Description>
              <p>NPL 건물, 폐공장</p>
              <p>폐공장, 폐건물</p>
              <p>미매각 건물 활용</p>
              <p>새로운 문화적 공간 창출</p>
            </Description>
          </UrbanContent>
        </GridCol>
      </GridContainer>
    </StyledSection>
  );
};

export default UrbanFarm;

const StyledSection = styled.section`
  position: relative;
  background-color: black;
  padding: 20px 0;
  text-align: center;
`;

const UrbanContent = styled.div`
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
  color: #00ffcc;
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
  width: 100%;
  height: 100%;
`;

const Left = styled.div<{ $backgroundUrl?: string }>`
  width: 50%;
  height: 100%;
  background: ${(props) =>
    props.$backgroundUrl ? `url(${props.$backgroundUrl}) no-repeat center/cover` : 'red'};
`;
