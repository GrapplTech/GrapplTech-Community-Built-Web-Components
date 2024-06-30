import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Innovate Your Future</h1>
        <p className="hero-subtitle">Empowering you with cutting-edge technology solutions.</p>
        <button className="hero-button">Get Started</button>
      </div>
      <div className="hero-image">
        <img src="/tech.png" alt="Tech Background" />
      </div>
    </section>
  );
};

export default Hero;
