import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2>About Me</h2>
        <div className="about-content">
          <p>
            I am a passionate Web Developer and UI/UX Designer. 
            My journey in the tech world is driven by a deep eagerness to learn and a commitment to hard work. 
            I gained valuable hands-on experience and industry knowledge during my On-the-Job Training (OJT), which further refined my technical skills and professional outlook.
          </p>
          <p>
            Beyond my technical capabilities, I pride myself on being a friendly, hard-working, and well-mannered professional who values collaboration and positive communication. 
            I am dedicated to building functional, user-centric web experiences and am always looking for new challenges to grow my expertise in the ever-evolving field of web development.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
