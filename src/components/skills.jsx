import React from 'react';

const skills = [
  'HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS',
  'Node.js', 'Express.js', 'MongoDB',
  'Flutter', 'Dart', 'Git', 'REST APIs'
];

const Skills = ({ darkMode }) => {
  const headingStyle = {
    fontSize: '2.75rem',
    fontWeight: 'bold',
    marginBottom: '1.5rem',
    textShadow: '1px 1px 3px rgba(0,0,0,0.2)'
  };

  const skillStyle = {
    padding: '0.75rem 1.25rem',
    background: darkMode ? 'linear-gradient(45deg,rgb(27, 98, 214),rgb(20, 37, 78))' : 'linear-gradient(25deg, #E0F7FA,rgb(75, 177, 224))',
    color: darkMode ? '#F1F5F9' : '#1F2937',
    borderRadius: '9999px',
    boxShadow: '0 7px 9px rgba(168, 14, 14, 0.1)',
    fontSize: '1rem',
    margin: '0.5rem',
    transition: 'all 0.3s ease'
  };

  return (
    <section id="skills" style={{ textAlign: 'center', margin: '3rem 0' }}>
      <h2 style={headingStyle}>My Skills & Expertise</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {skills.map(skill => (
          <span key={skill} style={skillStyle}>
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Skills;
