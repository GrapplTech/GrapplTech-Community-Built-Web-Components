// src/components/Hero.js
import React from 'react';
import styled from 'styled-components';
import backgroundImage from '../assets/Img2.png';

const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: url(${backgroundImage}) no-repeat center center/cover;
  color: black;
  text-align: center;
  padding: 0 2rem;
`;

const HeroHeading = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroSubheading = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

const HeroButton = styled.a`
  background: #007bff;
  color: #fff;
  padding: 0.75rem 1.5rem;
  text-decoration: none;
  border-radius: 5px;
  font-weight: bold;
  height: 30px;
    width: 150px;
    font-size: x-large;

  &:hover {
    background: #0056b3;
  }
`;

const Hero = () => (
  <HeroSection>
    <HeroHeading>Welcome to Our Website</HeroHeading>
    <HeroSubheading>We provide the best services for you.</HeroSubheading>
    <HeroButton href="#services">Get Started</HeroButton>
  </HeroSection>
);

export default Hero;
