import React from 'react';

const About = ({ darkMode }) => {
  const headingStyle = {
    fontSize: '2.75rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
    textShadow: '1px 1px 3px rgba(0,0,0,0.2)'
  };

  const textStyle = {
    fontSize: '1.125rem',
    maxWidth: '800px',
    margin: '0 auto',
    lineHeight: '1.8',
    padding: '0 1rem'
  };

  const imageStyle = {
    width: '250px',
    height: '250px',
    objectFit: 'cover',
    borderRadius: '50%',
    border: `5px solid ${darkMode ? '#DC2626' : '#1D4ED8'}`,
    boxShadow: '0 10px 20px rgba(0,0,0,0.3)',
    transition: 'all 0.3s ease'
  };

  return (
    <section id="about" style={{ textAlign: 'center', margin: '3rem 0' }}>
      <h2 style={headingStyle}>About Me</h2>
      <p style={textStyle}>
        I’m Faseeh Qureshi a visionary full stack developer with a proven track record of transforming ambitious 
        ideas into high-impact digital solutions. With a rich background in MERN, Nextjs Tailwind CSS, Flutter, ML, Generative AI, DBMS
        and more, I’ve built innovative products that push the boundaries of design and functionality. My journey from my early days of coding 
        to leading sophisticated projects, demonstrates my commitment to excellence and my passion for crafting intuitive, user-centric experiences.
      </p>
      <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'center' }}>
        <img 
          src="https://media.licdn.com/dms/image/v2/D4D03AQGQxjn9xGb1LA/profile-displayphoto-shrink_800_800/B4DZQ8WPdwHMAg-/0/1736179256510?e=1750291200&v=beta&t=-DPvQnG0xRepfWw3V1uqw8HtSB9iDfPRDZVh1RqRYlg" 
          alt="Faseeh Qureshi" 
          style={imageStyle}
        />
      </div>
    </section>
  );
};

export default About;
