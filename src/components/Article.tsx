'use client';

import styled, { css } from 'styled-components';

const Article = () => {
  return (

        <GridContainer>
          <GridCol $sm={0} $md={2} $lg={2} />
          <GridCol $sm={4} $md={8} $lg={8}>
            <BackgroundVideo 
              src="https://d3157wx5zs7nsu.cloudfront.net/3j_corp/renewal/video/PC_2_presentation.mp4" 
              loop 
              autoPlay 
              muted 
              playsInline 
            />
            <TextSection>
              <LeftContent>
                <MainHeading>
                  대한민국을 선도하는<br />
                  에너지·녹색 성장<br />
                  그린테크 기업
                </MainHeading>
              </LeftContent>
              <RightContent>
                <Paragraph>새로운 시대! 새로운 세대가 중심이 된 스타트업</Paragraph>
                <Paragraph>에너지 자립과 농업 기술 혁명을 꿈꾸며</Paragraph>
                <Paragraph>스마트 팜 · 신재생에너지를 통해</Paragraph>
                <Paragraph>당신의 새로운 꿈을 실현합니다.</Paragraph>
              </RightContent>
            </TextSection>
          </GridCol>
          <GridCol $sm={0} $md={2} $lg={2} />
        </GridContainer>

  );
};

export default Article;



// ✅ 배경 비디오 스타일 (배경처럼 채우기)
const BackgroundVideo = styled.video`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: translate(-50%, -50%);
`;



// ✅ 레이아웃을 위한 그리드 컨테이너
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
  position: relative;

  background-color: black;
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

// ✅ 그리드 컬럼
const GridCol = styled.div<{ $sm: number; $md: number; $lg: number }>`
  display: block;
  height: 100%;
  ${({ $sm, $md, $lg }) => css`
    grid-column: span ${$sm};
    @media (min-width: 600px) {
      grid-column: span ${$md};
    }
    @media (min-width: 1024px) {
      grid-column: span ${$lg};
    }
  `}
`;

// ✅ 글자 섹션 (배경 블록 추가)
const TextSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6); /* 검정색 반투명 배경 */
  padding: 40px;
  border-radius: 8px;
  max-width: 800px;
  color: white;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    padding: 20px;
  }
`;

// ✅ 왼쪽 텍스트 컨테이너
const LeftContent = styled.div`
  flex: 1;
`;

// ✅ 오른쪽 텍스트 컨테이너
const RightContent = styled.div`
  flex: 1;
  padding-left: 20px;

  @media (max-width: 768px) {
    padding-left: 0;
    padding-top: 20px;
  }
`;

// ✅ 메인 헤딩 스타일
const MainHeading = styled.h2`
  font-size: 2.75rem;
  font-weight: bold;
  line-height: 1.2;
  color: white;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

// ✅ 일반 문단 스타일
const Paragraph = styled.p`
  font-size: 1rem;
  color: white;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;
