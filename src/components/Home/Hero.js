import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, Container, Grid, IconButton, useTheme } from '@mui/material';
import { 
  GitHub, 
  LinkedIn, 
  Instagram,
  Code as CodeIcon,
  Storage as StorageIcon,
  Cloud as CloudIcon,
  Terminal as TerminalIcon,
  DataObject as DataObjectIcon,
  ArrowDownward as ArrowDownwardIcon
} from '@mui/icons-material';
import { keyframes } from '@mui/system';
import EnhancedProfileSection from './EnhancedProfilePhoto';
// Import the profile image 
import profileImage from '../../assets/adarshImage.jpeg';

// Enhanced animations
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(-40px);
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
    transform: translateY(-20px) rotate(5deg);
  }
  100% {
    transform: translateY(0px) rotate(0deg);
  }
`;

const pulse = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(66, 133, 244, 0.6);
  }
  70% {
    box-shadow: 0 0 0 15px rgba(66, 133, 244, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(66, 133, 244, 0);
  }
`;

const TechIcon = ({ Icon, delay, top, left, right, bottom, tooltip }) => {
  const theme = useTheme();
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <Box
      sx={{
        position: 'absolute',
        width: { xs: '40px', md: '60px' },
        height: { xs: '40px', md: '60px' },
        borderRadius: '16px',
        backgroundColor: theme.palette.background.paper,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: `0px 10px 30px ${theme.palette.mode === 'dark' ? 'rgba(0, 0, 0, 0.4)' : 'rgba(100, 100, 255, 0.2)'}`,
        animation: `${float} 4s ease-in-out infinite`,
        animationDelay: delay,
        top,
        left,
        right,
        bottom,
        zIndex: 3,
        transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
        transform: isHovered ? 'translateY(-8px) scale(1.1)' : 'translateY(0) scale(1)',
        '&:hover': {
          boxShadow: `0px 15px 35px ${theme.palette.mode === 'dark' ? 'rgba(0, 0, 0, 0.6)' : 'rgba(100, 100, 255, 0.3)'}`,
        },
        '&::before': {
          content: isHovered ? `"${tooltip}"` : '""',
          position: 'absolute',
          bottom: '-30px',
          left: '50%',
          transform: 'translateX(-50%)',
          backgroundColor: theme.palette.background.paper,
          color: theme.palette.text.primary,
          padding: '4px 8px',
          borderRadius: '4px',
          fontSize: '12px',
          fontWeight: 500,
          opacity: isHovered ? 1 : 0,
          transition: 'opacity 0.3s ease',
          whiteSpace: 'nowrap',
          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
        }
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {Icon && <Icon sx={{ 
        color: theme.palette.primary.main, 
        fontSize: { xs: '20px', md: '28px' },
        transition: 'all 0.3s ease',
        transform: isHovered ? 'scale(1.2)' : 'scale(1)'
      }} />}
    </Box>
  );
};

const Hero = () => {
  const theme = useTheme();
  const [scrollIndicator, setScrollIndicator] = useState(true);

  // Hide scroll indicator on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrollIndicator(false);
      } else {
        setScrollIndicator(true);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Box
      id="hero"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: theme.palette.mode === 'dark' 
          ? 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)' 
          : 'linear-gradient(135deg, #f5f7fa 0%, #e8eaf6 100%)',
        position: 'relative',
        overflow: 'hidden',
        pt: { xs: 10, md: 8 },
        pb: { xs: 8, md: 6 },
      }}
    >
      {/* Background decoration */}
      <Box sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 0,
        opacity: 0.6,
        pointerEvents: 'none',
      }}>
        {/* Gradient circles */}
        {[...Array(5)].map((_, i) => (
          <Box
            key={i}
            sx={{
              position: 'absolute',
              width: { xs: '200px', md: '300px' },
              height: { xs: '200px', md: '300px' },
              borderRadius: '50%',
              background: `radial-gradient(circle, ${theme.palette.primary.main}20 0%, transparent 70%)`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              transform: 'translate(-50%, -50%)',
              animation: `${float} ${10 + i * 2}s ease-in-out infinite`,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </Box>

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={{ xs: 6, md: 8 }} alignItems="center" justifyContent="space-between">
          {/* Left content */}
          <Grid item xs={12} md={6}>
            <Box sx={{ 
              animation: `${fadeInRight} 1s ease-out`,
              maxWidth: '600px',
              mx: { xs: 'auto', md: 0 },
              textAlign: { xs: 'center', md: 'left' },
            }}>
              <Typography
                variant="subtitle1"
                component="div"
                sx={{ 
                  color: theme.palette.primary.main, 
                  fontWeight: 600, 
                  mb: 2,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 1,
                  px: 2,
                  py: 0.5,
                  borderRadius: '50px',
                  background: theme.palette.mode === 'dark' ? 'rgba(66, 133, 244, 0.1)' : 'rgba(66, 133, 244, 0.08)',
                  backdropFilter: 'blur(4px)',
                }}
              >
                <span role="img" aria-label="wave">👋</span> Welcome to my portfolio
              </Typography>
              
              <Typography
                variant="h1"
                component="h1"
                sx={{
                  fontWeight: 800,
                  mb: 2,
                  background: theme.palette.mode === 'dark'
                    ? 'linear-gradient(90deg, #4285F4, #34A853, #FBBC05, #EA4335)'
                    : 'linear-gradient(90deg, #1a73e8, #0d652d, #e37400, #c5221f)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  textFillColor: 'transparent',
                  fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem' },
                  lineHeight: 1.1,
                  letterSpacing: '-0.02em',
                }}
              >
                Hi, I'm Adarsh Yadav
              </Typography>

              <Typography
                variant="h6"
                component="p"
                sx={{
                  mb: 4,
                  fontSize: { xs: '1.1rem', md: '1.25rem' },
                  lineHeight: 1.6,
                  color: theme.palette.text.secondary,
                  fontWeight: 400,
                }}
              >
                A <Box component="span" sx={{ fontWeight: 600, color: theme.palette.primary.main }}>Full Stack Developer</Box> passionate 
                about creating modern, user-friendly applications with cutting-edge technologies. 
                Specialized in React, Node.js, and cloud solutions.
              </Typography>

              <Box sx={{ 
                mb: 5, 
                display: 'flex', 
                gap: 2, 
                flexWrap: 'wrap',
                justifyContent: { xs: 'center', md: 'flex-start' } 
              }}>
                <Button 
                  variant="contained"
                  size="large"
                  sx={{
                    borderRadius: '50px',
                    px: 4,
                    py: 1.5,
                    fontSize: '1rem',
                    fontWeight: 600,
                    textTransform: 'none',
                    boxShadow: theme.palette.mode === 'dark' 
                      ? '0 8px 20px rgba(66, 133, 244, 0.3)' 
                      : '0 8px 20px rgba(66, 133, 244, 0.2)',
                    transition: 'all 0.3s ease',
                    position: 'relative',
                    overflow: 'hidden',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      background: 'linear-gradient(120deg, transparent, rgba(255,255,255,0.2), transparent)',
                      transform: 'translateX(-100%)',
                    },
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: theme.palette.mode === 'dark' 
                        ? '0 12px 30px rgba(66, 133, 244, 0.4)' 
                        : '0 12px 30px rgba(66, 133, 244, 0.3)',
                      '&::before': {
                        transform: 'translateX(100%)',
                        transition: 'transform 0.8s ease',
                      }
                    }
                  }}
                >
                  View Projects
                </Button>
                <Button 
                  variant="outlined"
                  size="large"
                  sx={{
                    borderRadius: '50px',
                    px: 4,
                    py: 1.5,
                    fontSize: '1rem',
                    fontWeight: 600,
                    textTransform: 'none',
                    borderWidth: '2px',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      borderWidth: '2px',
                      transform: 'translateY(-5px)',
                    }
                  }}
                >
                  Contact Me
                </Button>
              </Box>

              <Box 
                sx={{ 
                  display: 'flex', 
                  gap: 3,
                  animation: `${fadeInUp} 1s ease-out`,
                  animationDelay: '0.5s',
                  animationFillMode: 'backwards',
                  justifyContent: { xs: 'center', md: 'flex-start' }
                }}
              >
                {[
                  { icon: GitHub, name: 'GitHub' },
                  { icon: LinkedIn, name: 'LinkedIn' },
                  { icon: Instagram, name: 'Instagram' }
                ].map((item, index) => (
                  <IconButton
                    key={index}
                    aria-label={item.name}
                    sx={{
                      width: 50,
                      height: 50,
                      borderRadius: '14px',
                      border: `2px solid ${theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`,
                      backgroundColor: theme.palette.background.paper,
                      color: theme.palette.text.primary,
                      transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
                      '&:hover': {
                        background: theme.palette.primary.main,
                        borderColor: 'transparent',
                        color: '#ffffff',
                        transform: 'translateY(-8px) scale(1.05)',
                        boxShadow: '0 10px 25px rgba(66, 133, 244, 0.3)',
                      },
                    }}
                  >
                    <item.icon fontSize="medium" />
                  </IconButton>
                ))}
              </Box>
            </Box>
          </Grid>
          
          {/* Right content - Profile image */}
          <Grid item xs={12} md={5}>
            <Box 
              sx={{ 
                animation: `${fadeInUp} 1s ease-out`,
                position: 'relative',
                maxWidth: '450px',
                mx: 'auto',
                '&:hover': {
                  '& .tech-icon': {
                    transform: 'scale(1.1)',
                  }
                }
              }}
            >
              <EnhancedProfileSection profileImage={profileImage} />
              
              <TechIcon Icon={CodeIcon} delay="0s" top="5%" left="0%" tooltip="React" />
              <TechIcon Icon={StorageIcon} delay="0.3s" top="5%" right="0%" tooltip="MongoDB" />
              <TechIcon Icon={CloudIcon} delay="0.6s" bottom="5%" left="0%" tooltip="AWS" />
              <TechIcon Icon={TerminalIcon} delay="0.9s" bottom="5%" right="0%" tooltip="Node.js" />
              <TechIcon Icon={DataObjectIcon} delay="1.2s" top="50%" left="-5%" tooltip="TypeScript" />
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Scroll down indicator */}
      {scrollIndicator && (
        <Box
          sx={{
            position: 'absolute',
            bottom: 40,
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 1,
            opacity: scrollIndicator ? 1 : 0,
            transition: 'opacity 0.5s ease',
            animation: `${fadeInUp} 1s ease-out 1.5s backwards`,
            zIndex: 10,
          }}
        >
          <Typography
            variant="body2"
            sx={{
              color: theme.palette.text.secondary,
              fontSize: '0.9rem',
              fontWeight: 500,
            }}
          >
            Scroll Down
          </Typography>
          <IconButton
            size="small"
            sx={{
              color: theme.palette.primary.main,
              animation: `${pulse} 2s infinite`,
            }}
          >
            <ArrowDownwardIcon />
          </IconButton>
        </Box>
      )}
    </Box>
  );
};

export default Hero;