import React from 'react';
import { Container, Typography, Grid, Box } from '@mui/material';
import ProjectCard from './ProjectCard';
import { projects } from '../../utils/constants';

const Projects = () => {
  return (
    <Box 
      sx={{ 
        py: { xs: 8, md: 12 },
        background: 'background.gradient',
        minHeight: '100vh',
        position: 'relative'
      }}
    >
      {/* Decorative Background Elements */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '100%',
          overflow: 'hidden',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: '10%',
            left: '5%',
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            background: (theme) => theme.palette.background.gradient,
            filter: 'blur(40px)',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            top: '60%',
            right: '10%',
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            background: (theme) => theme.palette.background.gradient,
            filter: 'blur(50px)',
          }}
        />
      </Box>

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box 
          sx={{
            textAlign: 'center',
            mb: { xs: 6, md: 10 },
            maxWidth: '800px',
            mx: 'auto'
          }}
        >
          <Typography 
            variant="h2" 
            component="h2" 
            gutterBottom
            sx={{
              fontWeight: 800,
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              mb: 3,
              background: (theme) => theme.palette.text.gradient,
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textTransform: 'none',
            }}
          >
            Featured Projects
          </Typography>
          
          <Typography 
            variant="h5" 
            sx={{
              fontSize: { xs: '1.1rem', md: '1.25rem' },
              lineHeight: 1.8,
              maxWidth: '600px',
              mx: 'auto',
              mb: 4,
              color: 'text.secondary',
              opacity: 0.9
            }}
          >
            Explore my portfolio of innovative web applications and creative solutions
          </Typography>
        </Box>

        <Grid 
          container 
          spacing={{ xs: 3, md: 4 }}
          sx={{
            '& .MuiGrid-item': {
              display: 'flex',
              '@keyframes fadeIn': {
                from: {
                  opacity: 0,
                  transform: 'translateY(20px)',
                },
                to: {
                  opacity: 1,
                  transform: 'translateY(0)',
                },
              },
              animation: 'fadeIn 0.6s ease-out forwards',
              animationFillMode: 'both',
              '&:nth-of-type(1)': { animationDelay: '0.1s' },
              '&:nth-of-type(2)': { animationDelay: '0.2s' },
              '&:nth-of-type(3)': { animationDelay: '0.3s' },
              '&:nth-of-type(4)': { animationDelay: '0.4s' },
              '&:nth-of-type(5)': { animationDelay: '0.5s' },
              '&:nth-of-type(6)': { animationDelay: '0.6s' },
            },
          }}
        >
          {projects.map((project) => (
            <Grid 
              item 
              xs={12} 
              sm={6} 
              md={4} 
              key={project.id}
              sx={{
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <ProjectCard project={project} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Projects;