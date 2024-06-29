
import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 2rem;
  background: #333;
  color: #fff;
  text-align: center;
  font-size: x-large;
`;

const Footer = () => (
  <FooterContainer>
    <p>&copy; 2024  Community Built Web Components. All rights reserved.</p>
  </FooterContainer>
);

export default Footer;
