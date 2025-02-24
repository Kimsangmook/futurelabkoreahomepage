'use client';

import styled from 'styled-components';
import Link from 'next/link';

const Header = () => {
  return (
    <HeaderContainer>
      <Logo>🌳 FutureLAB</Logo>
      <Nav>
        <NavList>
          <NavItem><StyledLink href="#plan">PLAN</StyledLink></NavItem>
          <NavItem><StyledLink href="#vision">VISION</StyledLink></NavItem>
          <NavItem><StyledLink href="#background">BACKGROUND</StyledLink></NavItem>
          <NavItem><StyledLink href="#model">MODEL</StyledLink></NavItem>
          <NavItem><StyledLink href="#structure">STRUCTURE</StyledLink></NavItem>
        </NavList>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  position: static;
  top: -64px;
  left: 0;
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

const Nav = styled.nav``;

const NavList = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;
`;

const NavItem = styled.li``;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #333;
  font-size: 1rem;
  font-weight: 500;
  &:hover {
    color: #0070f3;
  }
`;
