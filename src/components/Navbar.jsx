import React from 'react';

const Navbar = ({ darkMode, setDarkMode }) => {
  const navbarStyle = {
    background: darkMode
      ? 'linear-gradient(90deg, rgb(21, 36, 71), rgb(11, 72, 170))'
      : 'linear-gradient(90deg, #E0F7FA, rgb(70, 184, 237))',
    padding: '1rem 2rem',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    backdropFilter: 'blur(8px)',
    borderBottom: darkMode ? '1px solid #374151' : '1px solid #d1d5db',
    transition: 'all 0.3s ease'
  };

  const brandStyle = {
    display: 'flex',
    alignItems: 'center',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: darkMode ? '#F1F5F9' : '#1F2937'
  };

  const avatarStyle = {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    backgroundColor: darkMode ? '#1E3A8A' : '#3B82F6',
    color: '#ffffff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '0.75rem',
    fontWeight: 'bold',
    fontSize: '1rem'
  };

  const navLinksStyle = {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginTop: '0.5rem'
  };

  const linkStyle = {
    margin: '0 0.5rem',
    fontSize: '1rem',
    fontWeight: 500,
    color: darkMode ? '#F1F5F9' : '#1F2937',
    textDecoration: 'none',
    transition: 'color 0.3s ease'
  };

  const buttonStyle = {
    marginLeft: '0.5rem',
    padding: '0.5rem 1rem',
    background: darkMode
      ? 'linear-gradient(45deg, #DC2626, #B91C1C)'
      : 'linear-gradient(45deg, #1D4ED8, #2563EB)',
    border: 'none',
    borderRadius: '8px',
    color: '#ffffff',
    fontWeight: 600,
    cursor: 'pointer',
    boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
    transition: 'background 0.3s ease, transform 0.2s ease'
  };

  const handleMouseEnter = (e) => {
    e.target.style.transform = 'scale(1.05)';
  };

  const handleMouseLeave = (e) => {
    e.target.style.transform = 'scale(1)';
  };

  return (
    <nav style={navbarStyle}>
      <div style={brandStyle}>
        <div style={avatarStyle}>FQ</div>
        Faseeh Qureshi
      </div>
      <div style={navLinksStyle}>
        <a href="#about" style={linkStyle}>About</a>
        <a href="#skills" style={linkStyle}>Skills</a>
        <a href="#projects" style={linkStyle}>Projects</a>
        <button
          onClick={() => setDarkMode(!darkMode)}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={buttonStyle}
        >
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
