import styled from 'styled-components';
import { DESKTOP, TABLET } from '@/styles/breakpoint';

type Props = {
  sm: number;
  md: number;
  lg: number;
  children?: React.ReactNode;
};

export const GridCol = ({ sm, md, lg, children }: Props) => {
  return (
    <StyledGridCol $sm={sm} $md={md} $lg={lg}>
      {children}
    </StyledGridCol>
  );
};

const StyledGridCol = styled.div<{ $sm: number; $md: number; $lg: number }>`
  display: block;
  height: 100%;
  grid-column: span ${({ $sm }) => $sm};

  @media (min-width: ${TABLET}) {
    grid-column: span ${({ $md }) => $md};
  }

  @media (min-width: ${DESKTOP}) {
    grid-column: span ${({ $lg }) => $lg};
  }
`;
