'use client';

import { useState } from 'react';
import styled from 'styled-components';

interface Props {
  frontText: string;
  backText: string;
}

const VisionCardArticle = ({ frontText, backText }: Props) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    setIsFlipped((prev) => !prev);
  };

  return (
    <Container
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <FrontBox className={isFlipped ? '' : isHovered ? '' : 'active'}>
        <Row>
          <FrontText>{frontText}</FrontText>
        </Row>
      </FrontBox>

      <BackBox className={isFlipped ? 'active' : isHovered ? 'active' : ''}>
        <Row>
          <BackText>{backText}</BackText>
        </Row>
      </BackBox>
    </Container>
  );
};

export default VisionCardArticle;

const Container = styled.div`
  position: relative;
  flex-grow: 1; /* 가변적인 크기를 균등하게 유지 */
  aspect-ratio: 1 / 1; /* 정사각형 유지 */
  perspective: 1000px;
  transition: 0.9s;
`;

const BoxStyles = `
  width: 100%;
  height: 100%;
  background: #fffef3;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: transform 0.6s ease-in-out;
  backface-visibility: hidden;
`;

const FrontBox = styled.div`
  ${BoxStyles}
  transform-origin: right;
  transform: translateX(-100%) rotateY(-90deg);

  &.active {
    transform: translateX(0) rotateY(0deg);
  }
`;

const BackBox = styled.div`
  ${BoxStyles}
  position: absolute;
  top: 0;
  left: 0;
  transform-origin: left;
  transform: translateX(100%) rotateY(90deg);

  &.active {
    transform: translateX(0) rotateY(0deg);
  }
`;

const Row = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  font-size: 18px;
  margin: 10px 0;
`;

const FrontText = styled.p`
  text-align: center;
  color: #333d4f;
`;

const BackText = styled.p`
  text-align: center;
  color: #333d4f;
`;
