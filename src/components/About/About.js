import React, { useState } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Paper, 
  alpha,
  useTheme 
} from '@mui/material';
import { 
  Code as CodeIcon, 
  Storage as StorageIcon, 
  Web as WebIcon, 
  Speed as SpeedIcon 
} from '@mui/icons-material';

const SkillCard = ({ icon: Icon, title, description }) => {
  const theme = useTheme();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Box
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      sx={{
        perspective: '1000px',
        height: 300,
        width: '100%',
      }}
    >
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          height: '100%',
          transition: 'transform 0.6s',
          transformStyle: 'preserve-3d',
          transform: isHovered ? 'rotateY(180deg)' : 'rotateY(0)',
        }}
      >
        {/* Front of card */}
        <Paper
          elevation={0}
          sx={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backfaceVisibility: 'hidden',
            p: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '16px',
            bgcolor: 'background.paper',
            transition: 'all 0.3s ease-in-out',
            boxShadow: `0px 8px 24px ${alpha(theme.palette.primary.main, 0.12)}`,
            '&:hover': {
              transform: 'translateY(-4px)',
              boxShadow: `0px 12px 24px ${alpha(theme.palette.primary.main, 0.2)}`,
            }
          }}
        >
          <Box
            sx={{
              mb: 3,
              p: 2,
              borderRadius: '12px',
              background: `linear-gradient(45deg, 
                ${alpha(theme.palette.primary.main, 0.1)}, 
                ${alpha(theme.palette.secondary.main, 0.1)})`,
              color: 'primary.main',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.3s ease-in-out',
              '&:hover': {
                transform: 'scale(1.1)',
                background: `linear-gradient(45deg, 
                  ${alpha(theme.palette.primary.main, 0.15)}, 
                  ${alpha(theme.palette.secondary.main, 0.15)})`,
              }
            }}
          >
            <Icon sx={{ fontSize: 40 }} />
          </Box>
          
          <Typography 
            variant="h6" 
            component="h3" 
            sx={{
              fontWeight: 600,
              mb: 2,
              color: 'text.primary',
              textAlign: 'center'
            }}
          >
            {title}
          </Typography>
        </Paper>

        {/* Back of card */}
        <Paper
          elevation={0}
          sx={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
            p: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '16px',
            background: `linear-gradient(45deg, 
              ${theme.palette.primary.main}, 
              ${theme.palette.secondary.main})`,
            color: 'common.white',
            boxShadow: `0px 8px 24px ${alpha(theme.palette.primary.main, 0.2)}`,
          }}
        >
          <Typography 
            variant="body1" 
            sx={{
              textAlign: 'center',
              lineHeight: 1.6,
              fontWeight: 500
            }}
          >
            {description}
          </Typography>
        </Paper>
      </Box>
    </Box>
  );
};

const About = () => {
  const theme = useTheme();
  
  const skills = [
    {
      icon: CodeIcon,
      title: "Frontend Development",
      description: "Crafting responsive web applications with React.js, Material-UI, and modern JavaScript techniques"
    },
    {
      icon: StorageIcon,
      title: "Backend Development",
      description: "Building robust server-side solutions with Node.js, Express, and both SQL and NoSQL databases"
    },
    {
      icon: WebIcon,
      title: "UI/UX Design",
      description: "Creating intuitive and accessible interfaces with a focus on user experience and modern design principles"
    },
    {
      icon: SpeedIcon,
      title: "Performance",
      description: "Optimizing applications for speed and scalability using best practices and efficient coding patterns"
    }
  ];

  return (
    <Box
      sx={{
        py: 12,
        background: theme => theme.palette.background.gradient,
        minHeight: '100vh'
      }}
    >
      <Container maxWidth="lg">
        <Box 
          sx={{
            textAlign: 'center',
            mb: 8,
            maxWidth: '800px',
            mx: 'auto'
          }}
        >
          <Typography 
            variant="h2" 
            component="h2" 
            sx={{
              fontWeight: 700,
              mb: 3,
              background: theme => theme.palette.text.gradient,
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontSize: {
                xs: '2.5rem',
                md: '3.75rem'
              }
            }}
          >
            Crafting Digital Experiences
          </Typography>
          
          <Typography 
            variant="h5" 
            sx={{
              lineHeight: 1.6,
              fontWeight: 400,
              color: 'text.secondary',
              fontSize: {
                xs: '1.25rem',
                md: '1.5rem'
              }
            }}
          >
            Passionate about building beautiful, functional, and user-centered web applications
            that make a difference.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {skills.map((skill, index) => (
            <Grid 
              item 
              xs={12} 
              sm={6} 
              md={3} 
              key={index}
              sx={{
                opacity: 0,
                animation: 'fadeInUp 0.5s ease-out forwards',
                animationDelay: `${index * 0.2}s`,
                '@keyframes fadeInUp': {
                  '0%': {
                    opacity: 0,
                    transform: 'translateY(20px)'
                  },
                  '100%': {
                    opacity: 1,
                    transform: 'translateY(0)'
                  }
                }
              }}
            >
              <SkillCard {...skill} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default About;