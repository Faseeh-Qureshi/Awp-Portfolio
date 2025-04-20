import React from 'react';

const Footer = ({ darkMode }) => {
  const footerStyle = {
    background: darkMode
    ? 'linear-gradient(90deg, rgb(21, 36, 71), rgb(11, 72, 170))'
    : 'linear-gradient(90deg, #E0F7FA, rgb(70, 184, 237))',
    padding: '1.5rem',
    textAlign: 'center',
    borderTop: darkMode ? '1px solid #374151' : '1px solid #d1d5db',
    transition: 'all 0.3s ease'
  };

  const textStyle = {
    fontSize: '1rem',
    color: darkMode ? '#CBD5E1' : '#1F2937'
  };

  return (
    <footer style={footerStyle}>
      <p style={textStyle}>
        © {new Date().getFullYear()} <b> <i>Faseeh Qureshi.</i></b> All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
