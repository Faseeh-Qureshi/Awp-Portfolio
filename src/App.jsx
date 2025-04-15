import React, { useState } from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/skills';
import Projects from './components/projects';
import Footer from './components/footer';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const appStyle = {
    background: darkMode 
    ? 'linear-gradient(135deg, #0F172A, #1E293B)' // Deep dark blue gradient
    : 'linear-gradient(135deg,rgb(189, 236, 255),rgb(189, 233, 255))', 
    color: darkMode ? '#F1F5F9' : '#1F2937',
    transition: 'all 0.3s ease',
    minHeight: '100vh',
    fontFamily: "'Roboto', sans-serif"
  };

  return (
    <div style={appStyle}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <main style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
        <About darkMode={darkMode} />
        <Skills darkMode={darkMode} />
        <Projects darkMode={darkMode} />
      </main>
      <Footer darkMode={darkMode} />
    </div>
  );
}

export default App;