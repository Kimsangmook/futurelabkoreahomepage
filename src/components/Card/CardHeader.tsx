'use client';

import React from 'react';
import styled from 'styled-components';

const CardHeader = () => {
  return (
    <HeaderContainer>
      <Subtitle>
        우리의 미래, <StrongText>Future Lab Korea</StrongText> 의 가치
      </Subtitle>
      <Contack>Contack Us</Contack>
    </HeaderContainer>
  );
};

export default CardHeader;

const HeaderContainer = styled.div`
  text-align: center;
`;

const Subtitle = styled.h2`
  font-size: 32px;
  font-weight: bold;
  color: #00ff99;
`;

const StrongText = styled.span`
  font-weight: bold;
`;

const Contack = styled.a`
  display: inline-block;
  margin-top: 20px;
  font-size: 16px;
  color: white;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;
