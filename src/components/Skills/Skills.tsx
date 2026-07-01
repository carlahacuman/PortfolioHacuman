import React from 'react';
import './Skills.css';

const Skills: React.FC = () => {
  const techSkills = [
    { name: 'HTML5', level: '90%' },
    { name: 'CSS3', level: '85%' },
    { name: 'JavaScript', level: '80%' },
    { name: 'React', level: '75%' },
    { name: 'TypeScript', level: '70%' },
    { name: 'UI/UX Design', level: '85%' },
  ];

  const softSkills = [
    { name: 'Hard-working', level: '95%' },
    { name: 'Eager to Learn', level: '95%' },
    { name: 'Friendly', level: '90%' },
    { name: 'Well-mannered', level: '90%' },
    { name: 'Communication', level: '85%' },
    { name: 'Teamwork', level: '90%' },
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2>My Skills</h2>
        <div className="skills-wrapper">
          <div className="skills-container">
            <h3>Technical Skills</h3>
            <div className="skills-grid">
              {techSkills.map((skill) => (
                <div key={skill.name} className="skill-item">
                  <div className="skill-info">
                    <span>{skill.name}</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{ width: skill.level }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="skills-container">
            <h3>Soft Skills</h3>
            <div className="skills-grid">
              {softSkills.map((skill) => (
                <div key={skill.name} className="skill-item">
                  <div className="skill-info">
                    <span>{skill.name}</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{ width: skill.level }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
