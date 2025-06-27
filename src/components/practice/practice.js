import React from 'react';
import { Container, Typography, Button, Box, Grid, useTheme, IconButton } from '@mui/material';
import { 
  GitHub, 
  LinkedIn, 
  Instagram,
  Code,
  Storage,
  Cloud,
  Terminal,
  DataObject
} from '@mui/icons-material';
import { keyframes, alpha } from '@mui/material/styles';
import profileImage from '../../assets/adarshImage.jpeg';
import EnhancedProfileSection from './EnhancedProfilePhoto';

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const float = keyframes`
  0% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-15px) rotate(5deg);
  }
  100% {
    transform: translateY(0px) rotate(0deg);
  }
`;

const TechIcon = ({ Icon, delay, top, left, right, bottom }) => {
  const theme = useTheme();
  
  return (
    <Box
      sx={{
        position: 'absolute',
        width: '50px',
        height: '50px',
        borderRadius: '12px',
        backgroundColor: theme.palette.background.paper,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: `0px 8px 24px ${alpha(theme.palette.primary.main, 0.12)}`,
        animation: `${float} 3s ease-in-out infinite`,
        animationDelay: delay,
        top,
        left,
        right,
        bottom,
        zIndex: 3,
        transition: 'all 0.3s ease-in-out',
        '& svg': {
          color: theme.palette.primary.main,
          fontSize: '28px'
        },
        '&:hover': {
          transform: 'translateY(-4px) scale(1.1)',
          boxShadow: `0px 12px 24px ${alpha(theme.palette.primary.main, 0.2)}`,
        }
      }}
    >
      {Icon && <Icon />} 
    </Box>
  );
};

const practise = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: theme.palette.background.gradient,
        pt: 8,
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box sx={{ animation: `${fadeInRight} 1s ease-out` }}>
              <Typography
                variant="h6"
                component="div"
                sx={{ 
                  color: theme.palette.primary.main, 
                  fontWeight: 600, 
                  mb: 2,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1
                }}
              >
                <span role="img" aria-label="wave">👋</span> Welcome to my portfolio
              </Typography>
              
              <Typography
                variant="h1"
                component="h1"
                sx={{
                  fontWeight: 700,
                  mb: 2,
                  background: theme.palette.text.gradient,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                }}
              >
                Hi, I'm Adarsh Yadav
              </Typography>

              <Typography
                variant="h5"
                component="p"
                sx={{
                  mb: 4,
                  fontSize: { xs: '1.1rem', md: '1.3rem' },
                  lineHeight: 1.6,
                  color: theme.palette.text.secondary,
                }}
              >
                A Full Stack Developer passionate about creating modern and user-friendly applications. 
                Specialized in React, Node.js, and cloud technologies.
              </Typography>

              <Box sx={{ mb: 4, display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <Button 
                  variant="contained"
                  size="large"
                >
                  View Projects
                </Button>
                <Button 
                  variant="contained"
                  size="large"
                >
                  Contact Me
                </Button>
              </Box>

              <Box 
                sx={{ 
                  display: 'flex', 
                  gap: 2,
                  animation: `${fadeInUp} 1s ease-out`,
                  animationDelay: '0.5s',
                  animationFillMode: 'backwards',
                }}
              >
                {[GitHub, LinkedIn, Instagram].map((Icon, index) => (
                  <IconButton
                    key={index}
                    sx={{
                      width: 45,
                      height: 45,
                      borderRadius: '12px',
                      border: `2px solid ${theme.palette.primary.main}`,
                      color: theme.palette.primary.main,
                      transition: 'all 0.3s ease-in-out',
                      '&:hover': {
                        background: theme.palette.text.gradient,
                        borderColor: 'transparent',
                        color: '#ffffff',
                        transform: 'translateY(-4px)',
                        boxShadow: `0px 8px 24px ${alpha(theme.palette.primary.main, 0.16)}`,
                      },
                    }}
                  >
                    <Icon />
                  </IconButton>
                ))}
              </Box>
            </Box>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Box 
              sx={{ 
                animation: `${fadeInUp} 1s ease-out`,
                position: 'relative',
                '& > div': { // EnhancedProfileSection wrapper
                  borderRadius: '16px',
                  overflow: 'hidden',
                  boxShadow: `0px 12px 24px ${alpha(theme.palette.primary.main, 0.12)}`,
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: `0px 16px 32px ${alpha(theme.palette.primary.main, 0.16)}`,
                  }
                }
              }}
            >
              <EnhancedProfileSection profileImage={profileImage} />
              
              <TechIcon Icon={Code} delay="0s" top="10%" left="10%" />
              <TechIcon Icon={Storage} delay="0.2s" top="10%" right="10%" />
              <TechIcon Icon={Cloud} delay="0.4s" bottom="10%" left="10%" />
              <TechIcon Icon={Terminal} delay="0.6s" bottom="10%" right="10%" />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default practise;