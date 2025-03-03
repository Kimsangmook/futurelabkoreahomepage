import styled from "styled-components";

export const TABLET = "600px";
export const DESKTOP = "1024px";

export const OnlyMobile = `
  @media (min-width: ${TABLET}) {
    display: none;
  }
`;
export const Mobile = styled.div`
  @media (min-width: ${TABLET}) {
    display: none;
  }
`;
export const OnlyTabletDesktop = `
  @media (max-width: ${TABLET}) {
    display: none;
  }
`;
export const TabletDesktop = styled.div`
  @media (max-width: ${TABLET}) {
    display: none;
  }
`;
