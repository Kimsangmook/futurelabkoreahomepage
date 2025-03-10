'use client';

import { GridCol, GridContainer } from '@/components/Grid';

import styled from 'styled-components';

const HorizonTitle = () => {
  return (
    <StyledSection>
      <GridContainer>
        <GridCol sm={0} md={2} lg={2} />

        <GridCol sm={4} md={8} lg={8}>
          <HorizonContent>
            <Title>Smart Form with Future</Title>
          </HorizonContent>
        </GridCol>

        <GridCol sm={0} md={2} lg={2} />
      </GridContainer>
    </StyledSection>
  );
};

export default HorizonTitle;

const StyledSection = styled.section`
  background-color: #111827;
  padding: 20px 0;
  text-align: center;
`;

const HorizonContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const Title = styled.h3`
  font-size: 30px;
  font-weight: bold;
  color: white;
`;
