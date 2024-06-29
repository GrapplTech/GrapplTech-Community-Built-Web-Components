
import React from 'react';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: #333;
  color: #fff;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
  `;

const NavLinks = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`;

const NavLink = styled.a`
  color: #fff;
  text-decoration: none;
  font-weight: bold;
  font-size: 22px;

  &:hover {
    text-decoration: underline;
  }
`;

const Navbar = () => (
  <NavbarContainer>
    <h1>Logo</h1>
    <NavLinks>
      <NavLink href="#home">Home</NavLink>
      <NavLink href="#about">About</NavLink>
      <NavLink href="#services">Services</NavLink>
      <NavLink href="#contact">Contact</NavLink>
    </NavLinks>
  </NavbarContainer>
);

export default Navbar;
