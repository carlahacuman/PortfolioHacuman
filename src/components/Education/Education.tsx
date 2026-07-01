import React from 'react';
import './Education.css';

const Education: React.FC = () => {
  const education = [
    {
      school: 'University of Technology',
      degree: 'Bachelor of Science in Information Technology',
      year: '2022',
    },
    {
      school: 'Online Certifications',
      degree: 'Full Stack Web Development Bootcamp',
      year: '2021',
    },
  ];

  return (
    <section id="education" className="education">
      <div className="container">
        <h2>Education</h2>
        <div className="education-grid">
          {education.map((edu, index) => (
            <div key={index} className="education-card">
              <h3>{edu.degree}</h3>
              <p className="school">{edu.school}</p>
              <span className="year">{edu.year}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
