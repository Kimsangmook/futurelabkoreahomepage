'use client';

import { GridCol, GridContainer } from '@/components/Grid';

import styled from 'styled-components';

const Footer = () => {
  return (
    <StyledSection>
      <GridContainer>
        <GridCol sm={0} md={2} lg={2} />

        <GridCol sm={4} md={8} lg={8}>
          <FooterContent>
            {/* <Logo src="/favicon.ice" alt="퓨처랩 코리아 로고" /> */}
            <CompanyName>(주) 퓨처랩 코리아</CompanyName>
            <CompanyInfo>
              <p>📍 ADDRESS 서울특별시 금천구 가산디지털1로 212 1306호</p>
              <p>📧 E-Mail admin@futurelabkorea.com</p>
              <p>📝 사업자등록번호 238-87-03544</p>
            </CompanyInfo>
          </FooterContent>
        </GridCol>

        <GridCol sm={0} md={2} lg={2} />
      </GridContainer>
    </StyledSection>
  );
};

export default Footer;

const StyledSection = styled.section`
  background-color: #f8f9fa;
  padding: 20px 0;
  text-align: center;
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const Logo = styled.img`
  width: 120px;
  height: auto;
`;

const CompanyName = styled.h3`
  font-size: 1.2rem;
  font-weight: bold;
  margin: 0;
`;

const CompanyInfo = styled.div`
  font-size: 0.9rem;
  color: #555;
  line-height: 1.5;

  p {
    margin: 0;
  }
`;
