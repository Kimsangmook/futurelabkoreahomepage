'use client';

import styled from 'styled-components';
import { motion } from 'framer-motion';
import { GridContainer, GridCol } from '@/components/Grid';

const TitleSection = () => {
  return (
    <StyledSection>
      <GridContainer>
        <GridCol sm={0} md={2} lg={2} />

        <GridCol sm={4} md={8} lg={8}>
          <BackgroundVideo
            src="https://d3157wx5zs7nsu.cloudfront.net/3j_corp/renewal/video/PC_2_presentation.mp4"
            loop
            autoPlay
            muted
            playsInline
          />
          <AnimationContainer>
            {/* 위쪽 수평 막대 + 수직 막대 */}
            <RightBar
              initial={{ x: 0 }}
              animate={{ x: -155 }}
              transition={{ duration: 0.8, delay: 1.5, ease: 'easeOut' }}
            >
              <TopHorizontalBar
                initial={{ x: '100%', opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, ease: 'easeOut' }}
              />
              {/* 오른쪽 끝에서 위에서 아래로 이동하는 수직 막대 */}
              <TopVerticalBar
                initial={{ height: '0', opacity: 0, y: -40 }}
                animate={{ height: '40px', opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
              />
            </RightBar>

            {/* 텍스트 애니메이션 */}
            <TextContainer>
              <MotionText
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 1 }}
              >
                FUTURE LAB KOREA
              </MotionText>

              <SubText
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.3, duration: 0.8, ease: 'easeOut' }}
              >
                Make Your Future
              </SubText>
            </TextContainer>

            {/* 아래쪽 수평 막대 + 수직 막대 */}
            <LeftBar
              initial={{ x: 0 }}
              animate={{ x: -155 }}
              transition={{ duration: 0.8, delay: 1.5, ease: 'easeOut' }}
            >
              <BottomHorizontalBar
                initial={{ x: '-100%', opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, ease: 'easeOut' }}
              />

              {/* 왼쪽 끝에서 아래에서 위로 이동하는 수직 막대 */}
              <BottomVerticalBar
                initial={{ height: '0', opacity: 0, y: 40 }}
                animate={{ height: '40px', opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
              />
            </LeftBar>
          </AnimationContainer>
        </GridCol>

        <GridCol sm={0} md={2} lg={2} />
      </GridContainer>
    </StyledSection>
  );
};

export default TitleSection;

const StyledSection = styled.section`
  background-color: #373d4c;
`;

const BackgroundVideo = styled.video`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: translate(-50%, -50%);
`;

const AnimationContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 25px;
  padding: 180px 0px;
`;

/* 수평 막대 + 수직 막대 컨테이너 */
const RightBar = styled(motion.div)`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

/* 수평 막대 - 위쪽 */
const TopHorizontalBar = styled(motion.div)`
  width: 165px;
  height: 8px;
  background-color: white;
  position: relative;
`;

/* 수직 막대 - 위쪽 (오른쪽 끝에서 위에서 아래로 이동) */
const TopVerticalBar = styled(motion.div)`
  width: 8px;
  height: 40px;
  background-color: white;
  position: absolute;
  left: 0;
  bottom: -34px;
`;

/* 수평 막대 + 수직 막대 컨테이너 */
const LeftBar = styled(motion.div)`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

/* 수평 막대 - 아래쪽 */
const BottomHorizontalBar = styled(motion.div)`
  width: 165px;
  height: 8px;
  background-color: white;
  position: relative;
`;

/* 수직 막대 - 아래쪽 (왼쪽 끝에서 아래에서 위로 이동) */
const BottomVerticalBar = styled(motion.div)`
  width: 8px;
  height: 40px;
  background-color: white;
  position: absolute;
  right: 0;
  top: -34px;
`;

const TextContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-items: flex-start;
  gap: 2px;
`;

/* 텍스트 애니메이션 */
const MotionText = styled(motion.h1)`
  text-align: center;
  font-size: 48px;
  font-weight: 400;
  letter-spacing: -0.5px;
  line-height: 56px;
  color: #ffffff;
`;

/* SubText 마지막에 등장 */
const SubText = styled(motion.a)`
  color: white;
  opacity: 0; // 초기에는 보이지 않음
`;
