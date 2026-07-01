import React from 'react';
import './Projects.css';

const Projects: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: 'Infarm',
      type: 'Capstone Project',
      description: 'An innovative agricultural platform designed to streamline farm management and monitoring, developed as a final year capstone project.',
      tech: ['React', 'Web Systems', 'UI/UX'],
    },
    {
      id: 2,
      title: 'Job Matching Platform',
      type: 'Internship Project',
      description: 'Developed a sophisticated job matching interface to connect job seekers with potential employers efficiently.',
      tech: ['Frontend Development', 'API Integration', 'UI Components'],
    },
    {
      id: 3,
      title: 'Email Marketing Web Application',
      type: 'Internship Project',
      description: 'Created a user-friendly web application for managing and executing email marketing campaigns, focusing on dashboard usability.',
      tech: ['React', 'Dashboard Design', 'Email Systems'],
    },
    {
      id: 4,
      title: 'Coaching Management Website',
      type: 'Internship Project',
      description: 'A dedicated platform for managing coaching schedules, client progress, and communication during my internship.',
      tech: ['Web Development', 'Management Tools', 'UI/UX'],
    },
    {
      id: 5,
      title: 'Subdivision Booking System',
      type: 'School Project',
      description: 'A comprehensive booking and management system for subdivision lots and amenities, developed as a key academic project.',
      tech: ['System Design', 'Frontend Development', 'Database'],
    },
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-placeholder">
                <span className="project-type">{project.type}</span>
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
