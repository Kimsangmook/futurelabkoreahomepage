import styled from 'styled-components';
import { DESKTOP, TABLET } from '@/styles/breakpoint';

type Props = {
  children: React.ReactNode;
};

const GridContainer = ({ children }: Props) => {
  return <StyledGridContainer>{children}</StyledGridContainer>;
};

export default GridContainer;

const StyledGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(5px, 1fr));
  gap: 24px;
  align-items: center;
  justify-content: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 80px 16px;
  scroll-margin-top: 80px;
  background-color: #373d4c;
  position: relative;

  @media (min-width: ${TABLET}) {
    grid-template-columns: repeat(12, minmax(5px, 1fr));
    padding: 40px 12px;
    gap: 12px;
    min-height: 200px;
  }

  @media (min-width: ${DESKTOP}) {
    grid-template-columns: repeat(12, minmax(5px, 1fr));
    padding: 60px 16px;
    gap: 28px;
    min-height: 300px;
  }
`;
