'use client';

import styled, { css } from 'styled-components';


const CommitmentsSection = () => {
  return (
    <GridContainer id="protecting_users">
        <GridCol $sm={0} $md={2} $lg={2} />

        <GridCol $sm={4} $md={8} $lg={8}>
          <HeaderText>FUTURE LAB KOREA BUSINESS PLAN</HeaderText>
        </GridCol>

        <GridCol $sm={0} $md={2} $lg={2} />

    </GridContainer>
  );
};

export default CommitmentsSection;

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

const HeaderText = styled.h1`
    text-align: center;
    font-size: 48px;
    font-weight: 400;
    letter-spacing: -.5px;
    line-height: 56px;
`;