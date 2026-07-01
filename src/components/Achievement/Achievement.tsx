import React from 'react';
import './Achievement.css';

const Achievement: React.FC = () => {
  const achievements = [
    {
      title: 'Top Performer Award',
      organization: 'Tech Solutions Inc.',
      year: '2023',
    },
    {
      title: 'Hackathon Winner',
      organization: 'City Tech Meetup',
      year: '2022',
    },
  ];

  return (
    <section id="achievement" className="achievement bg-alt">
      <div className="container">
        <h2>Achievements</h2>
        <div className="achievement-list">
          {achievements.map((ach, index) => (
            <div key={index} className="achievement-item">
              <h3>{ach.title}</h3>
              <p>{ach.organization} | {ach.year}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievement;
