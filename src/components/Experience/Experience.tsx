import React from 'react';
import './Experience.css';

const Experience: React.FC = () => {
  const experiences = [
    {
      company: 'Confidential (Under NDA)',
      position: 'Frontend Developer Intern',
      period: 'Jan 2024 - Present',
      description: 'Developed and maintained reusable UI components for a large-scale web platform, focusing on performance and scalability. Improved dashboard interface and usability through user-centric design principles. Collaborated with backend developers to integrate RESTful APIs and ensured a seamless, responsive experience across all devices and browsers.',
    }
  ];

  return (
    <section id="experience" className="experience bg-alt">
      <div className="container">
        <h2>Work Experience</h2>
        <div className="experience-list">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-item">
              <div className="exp-header">
                <h3>{exp.position}</h3>
                <span className="period">{exp.period}</span>
              </div>
              <h4 className="company">{exp.company}</h4>
              <p className="exp-description">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
