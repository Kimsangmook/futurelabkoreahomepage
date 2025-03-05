'use client';

import { useState } from 'react';
import styled, { css } from 'styled-components';

interface Props {
  frontText: string;
  backText: string;
  url?: string; // 선택적 이미지 URL
}

const VisionCardArticle = ({ frontText, backText, url }: Props) => {
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
      <FrontBox className={isFlipped ? '' : isHovered ? '' : 'active'} $backgroundUrl={url}>
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
  flex: 1;
  aspect-ratio: 1 / 1; /* 정사각형 유지 */
  perspective: 1000px;
  transition: 0.9s;
`;

const BoxFrontStyles = css<{ $backgroundUrl?: string }>`
  width: 100%;
  height: 100%;
  position: relative;
  background: ${(props) =>
    props.$backgroundUrl ? `url(${props.$backgroundUrl}) no-repeat center/cover` : '#fffef3'};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: transform 0.6s ease-in-out;
  backface-visibility: hidden;

  /* 흐림 효과 추가 */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: inherit;
    filter: blur(10px); /* 배경 흐림 효과 */
    opacity: 0.7; /* 투명도 조정 */
    z-index: -1;
  }
`;

const BoxBackStyles = css`
  width: 100%;
  height: 100%;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: transform 0.6s ease-in-out;
  backface-visibility: hidden;
  padding: 24px;
`;

const FrontBox = styled.div<{ $backgroundUrl?: string }>`
  ${BoxFrontStyles}
  transform-origin: right;
  transform: translateX(-100%) rotateY(-90deg);

  &.active {
    transform: translateX(0) rotateY(0deg);
  }
`;

const BackBox = styled.div`
  ${BoxBackStyles}
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
  position: relative;
  z-index: 1; /* 텍스트가 흐려지지 않도록 z-index 추가 */
`;

const FrontText = styled.p`
  text-align: center;
  color: white;
  font-weight: bold;
  font-size: 24px;
  text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.6); /* 텍스트 가독성 향상 */
`;

const BackText = styled.p`
  text-align: center;
  color: #333d4f;
`;
