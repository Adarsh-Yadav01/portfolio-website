import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Box } from '@mui/material';
import Navbar from './components/Layout/Navbar';
import Hero from './components/Home/Hero';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Layout/Footer';
import Skill from './components/Skills/Skills';
import Education from './components/Education/LifeJourneyTimeline';
import theme from './theme/index';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* Main container */}
      <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        {/* Navbar */}
        <Navbar />
        
        {/* Content wrapper with proper spacing for fixed navbar */}
        <Box component="main" sx={{ flex: 1 }}>
          {/* Home section */}
          <Box
            id="home"
            sx={{
              minHeight: '100vh',
              pt: { xs: '56px', sm: '64px' }, // Adjusts for navbar height on mobile/desktop
            }}
          >
            <Hero />
          </Box>

          {/* About section */}
          <Box
            id="about"
            sx={{
              minHeight: '100vh',
              bgcolor: 'background.default',
            }}
          >
            <About />
          </Box>

          {/* Education section */}
          <Box
            id="education"
            sx={{
              minHeight: '100vh',
              bgcolor: 'background.paper', // Alternating background color
              py: 8, // Add vertical padding
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Education />
          </Box>

          {/* Skills section */}
          <Box
            id="skills"
            sx={{
              minHeight: '100vh',
              bgcolor: 'background.default',
            }}
          >
            <Skill />
          </Box>

          {/* Projects section */}
          <Box
            id="projects"
            sx={{
              minHeight: '100vh',
            }}
          >
            <Projects />
          </Box>

          {/* Contact section */}
          <Box
            id="contact"
            sx={{
              minHeight: '100vh',
              bgcolor: 'background.default',
            }}
          >
            <Contact />
          </Box>
        </Box>

        {/* Footer */}
        <Footer />
      </Box>
    </ThemeProvider>
  );
};

export default App;