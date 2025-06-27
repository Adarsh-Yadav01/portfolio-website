import React from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  IconButton, 
  Stack, 
  Tooltip,
  useTheme 
} from '@mui/material';
import { 
  GitHub as GitHubIcon, 
  LinkedIn as LinkedInIcon, 
  Email as EmailIcon,
  FavoriteRounded as HeartIcon 
} from '@mui/icons-material';

const Footer = () => {
  const theme = useTheme();
  
  const socialLinks = [
    {
      name: 'GitHub',
      icon: <GitHubIcon />,
      url: 'https://github.com'
    },
    {
      name: 'LinkedIn',
      icon: <LinkedInIcon />,
      url: 'https://linkedin.com'
    },
    {
      name: 'Email',
      icon: <EmailIcon />,
      url: 'mailto:your@email.com'
    }
  ];

  return (
    <Box 
      component="footer"
      sx={{
        mt: 'auto',
        py: 6,
        background: (theme) => `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '100%',
          background: 'rgba(0, 0, 0, 0.1)',
        }
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ 
          textAlign: 'center',
          position: 'relative',
          zIndex: 1 
        }}>
          <Stack
            direction="row"
            spacing={2}
            justifyContent="center"
            sx={{ mb: 3 }}
          >
            {socialLinks.map((link) => (
              <Tooltip 
                key={link.name}
                title={link.name}
                arrow
                placement="top"
              >
                <IconButton
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: 'white',
                    bgcolor: 'rgba(255, 255, 255, 0.1)',
                    transition: 'all 0.2s ease-in-out',
                    '&:hover': {
                      bgcolor: 'rgba(255, 255, 255, 0.2)',
                      transform: 'translateY(-3px)'
                    }
                  }}
                >
                  {link.icon}
                </IconButton>
              </Tooltip>
            ))}
          </Stack>

          <Typography 
            variant="body1" 
            sx={{ 
              color: 'white',
              mb: 1,
              fontWeight: 500
            }}
          >
            Let's connect and create together
          </Typography>

          <Typography 
            variant="body2" 
            sx={{ 
              color: 'rgba(255, 255, 255, 0.8)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 0.5,
              mb: 1
            }}
          >
            Made with <HeartIcon sx={{ color: '#ff6b6b', fontSize: 20 }} /> by Adarsh Yadav
          </Typography>

          <Typography 
            variant="caption" 
            sx={{ 
              color: 'rgba(255, 255, 255, 0.7)'
            }}
          >
            © {new Date().getFullYear()} All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;