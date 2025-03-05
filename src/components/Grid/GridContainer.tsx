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
  scroll-margin-top: 80px;
  position: relative;

  @media (min-width: ${TABLET}) {
    grid-template-columns: repeat(12, minmax(5px, 1fr));
    gap: 12px;
  }

  @media (min-width: ${DESKTOP}) {
    grid-template-columns: repeat(12, minmax(5px, 1fr));
    gap: 28px;
  }
`;
