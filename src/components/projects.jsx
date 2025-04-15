import React from 'react';

const projects = [
  {
    title: 'Portfolio Website',
    description: 'A visually striking portfolio that marries innovative design with technical mastery. Crafted with React and Tailwind CSS, it stands as a testament to creativity and excellence.',
    image: '/pfp.jpg' // Ensure this image is in your public folder
  },
  {
    title: 'Alston Driver',
    description: 'A robust cross-platform app built for Alston Coaches Aurtalia. The Alston Driver App empowers drivers with efficient route planning and navigation tools, simplifying your workday. The Driver app uses Google maps and Mapbox maps to provide secure navigation to destinations using approved routes for commercial vehicles. It also helps drivers in their daily tasks.',
    image: '/driverApp.jpg' // Ensure this image is in your public folder
  }
];

const Projects = ({ darkMode }) => {
  const headingStyle = {
    fontSize: '2.75rem',
    fontWeight: 'bold',
    marginBottom: '2rem',
    textShadow: '1px 1px 3px rgba(0,0,0,0.2)'
  };

  const cardStyle = {
    backgroundColor: darkMode ? '#102A4C' : '#ffffff',
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease'
  };

  const cardHoverStyle = {
    transform: 'scale(1.04)',
    boxShadow: '0 12px 24px rgba(0,0,0,0.3)'
  };

  const [hoveredIndex, setHoveredIndex] = React.useState(null);

  return (
    <section id="projects" style={{ textAlign: 'center', margin: '3rem 0' }}>
      <h2 style={headingStyle}>Featured Projects</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
        {projects.map((project, idx) => (
          <div
            key={idx}
            style={{
              ...cardStyle,
              ...(hoveredIndex === idx ? cardHoverStyle : {})
            }}
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <img 
              src={project.image} 
              alt={project.title} 
              style={{ width: '100%', height: '220px', objectFit: 'cover', transition: 'all 0.3s ease' }}
            />
            <div style={{ padding: '1.5rem' }}>
              <h3 style={{ fontSize: '1.75rem', fontWeight: '600', marginBottom: '0.75rem', color: darkMode ? '#F1F5F9' : '#1F2937' }}>
                {project.title}
              </h3>
              <p style={{ fontSize: '1rem', marginBottom: '1.25rem', color: darkMode ? '#CBD5E1' : '#4B5563' }}>
                {project.description}
              </p>
              <button
                onClick={() => alert(`Project "${project.title}" coming soon!`)}
                style={{
                  padding: '0.75rem 1.5rem',
                  background: darkMode 
                    ? 'linear-gradient(45deg, #DC2626, #B91C1C)' 
                    : 'linear-gradient(45deg, #1D4ED8, #2563EB)',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                  transition: 'background 0.3s ease, transform 0.2s ease'
                }}
                onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
              >
                View Project
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
