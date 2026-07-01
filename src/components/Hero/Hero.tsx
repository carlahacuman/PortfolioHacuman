import React from 'react';
import './Hero.css';
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
        <div className="hero-image">
          {/* Leave empty for user's image */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
