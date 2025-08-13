import React from 'react';
import styled from 'styled-components';
import Button from './components/Button/Button';

const StyledLayout = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  border-bottom: 1px solid #eee;
  margin-bottom: 40px;
`;

const StyledNav = styled.nav`
  display: flex;
  gap: 20px;
`;

const StyledFooter = styled.footer`
  margin-top: 80px;
  padding: 20px 0;
  border-top: 1px solid #eee;
  text-align: center;
`;

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <StyledLayout>
      <StyledHeader>
        <h1>Dionatan's Portfolio</h1>
        <StyledNav>
          <Button text="About" onClick={() => (window.location.href = '/')} backgroundColor="#333" />
          <Button text="Skills" onClick={() => (window.location.href = '/skills')} backgroundColor="#333" />
          <Button text="Contact" onClick={() => (window.location.href = '/contact')} backgroundColor="#333" />
        </StyledNav>
      </StyledHeader>
      <main>{children}</main>
      <StyledFooter>
        <p>© {new Date().getFullYear()} Portfolio. All rights reserved.</p>
      </StyledFooter>
    </StyledLayout>
  );
};

export default Layout;
