import React from 'react';
import './Hero.css';
import heroImage from '../../assets/Me.jpg';

const Hero: React.FC = () => {
  return (
    <section id="home" className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <h1>Carla N. Hacuman</h1>
          <p className="subtitle">IT Driven Professional | Web Developer & Designer</p>
          <p className="description">
            Building modern, functional, and visually appealing web experiences with a passion for clean code and user-centric design.
          </p>
          <div className="hero-btns">
            <a href="#projects" className="btn">View My Work</a>
            <a href="#contact" className="btn btn-outline">Contact Me</a>
          </div>
        </div>
        <div className="hero-image-container">
          <div className="hero-card-floating">
            <div className="hero-card-glow"></div>
            <div className="hero-card">
              <img src={heroImage} alt="Carla N. Hacuman" className="hero-img-element" />
            </div>
            {/* Elegant spinning/glowing rings */}
            <div className="hero-ring hero-ring-1"></div>
            <div className="hero-ring hero-ring-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
