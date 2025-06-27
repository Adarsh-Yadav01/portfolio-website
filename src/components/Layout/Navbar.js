import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  Box,
  Container,
  useScrollTrigger
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

function ElevationScroll({ children }) {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    sx: {
      backgroundImage: trigger ? 
        (theme) => `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.secondary.main})` : 
        (theme) => `${theme.palette.background.paper}`,
      boxShadow: trigger ? 8 : 1,
      transition: 'all 0.3s ease-in-out',
    },
  });
}

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('Home');
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  const menuItems = ['Home', 'About','Skills', 'Projects', 'Contact'];

  useEffect(() => {
    const handleScroll = () => {
      const sections = menuItems.map(item => 
        document.getElementById(item.toLowerCase())
      );
      
      const scrollPosition = window.scrollY + 100;

      const currentSection = sections.find(section => {
        if (!section) return false;
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;
        return scrollPosition >= sectionTop && scrollPosition < sectionBottom;
      });

      if (currentSection) {
        setActiveSection(currentSection.id.charAt(0).toUpperCase() + currentSection.id.slice(1));
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId.toLowerCase());
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    if (mobileOpen) {
      setMobileOpen(false);
    }
  };

  const scrollTrigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return (
    <>
      <ElevationScroll>
        <AppBar>
          <Container maxWidth="lg">
            <Toolbar sx={{ px: { xs: 1, sm: 2 } }}>
              <Typography 
                variant="h6" 
                component="div"
                sx={{
                  flexGrow: 1,
                  fontWeight: 700,
                  color: scrollTrigger ? '#fff' : 'text.primary',
                  fontSize: { xs: '1.2rem', sm: '1.5rem' },
                  textTransform: 'none',
                  letterSpacing: '0.5px'
                }}
              >
                Adarsh Yadav
              </Typography>

              {isMobile ? (
                <IconButton
                  aria-label="open drawer"
                  edge="end"
                  onClick={handleDrawerToggle}
                  sx={{
                    ml: 1,
                    color: scrollTrigger ? '#fff' : 'text.primary',
                    '&:hover': {
                      transform: 'scale(1.1)',
                    },
                    transition: 'transform 0.2s',
                    padding: '8px',
                  }}
                >
                  <MenuIcon size={24} />
                </IconButton>
              ) : (
                <Box 
                  sx={{ 
                    display: 'flex',
                    gap: 1
                  }}
                >
                  {menuItems.map((item) => (
                    <Button
                      key={item}
                      onClick={() => scrollToSection(item)}
                      sx={{
                        position: 'relative',
                        color: scrollTrigger ? '#fff' : 'text.primary',
                        fontWeight: 500,
                        px: 2,
                        py: 1,
                        transition: 'all 0.2s',
                        '&::after': {
                          content: '""',
                          position: 'absolute',
                          width: activeSection === item ? '100%' : '0%',
                          height: '2px',
                          bottom: '0',
                          left: '0',
                          background: '#fff',
                          transition: 'width 0.3s ease-in-out',
                        },
                        '&:hover': {
                          backgroundColor: 'transparent',
                          transform: 'translateY(-2px)',
                          '&::after': {
                            width: '100%',
                          },
                        },
                        ...(activeSection === item && {
                          fontWeight: 600,
                        }),
                      }}
                    >
                      {item}
                    </Button>
                  ))}
                </Box>
              )}
            </Toolbar>
          </Container>
        </AppBar>
      </ElevationScroll>

      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          '& .MuiDrawer-paper': {
            width: 250,
            background: (theme) => theme.palette.background.paper,
            borderTopLeftRadius: '16px',
            borderBottomLeftRadius: '16px',
            boxShadow: (theme) => theme.shadows[8],
          },
        }}
      >
        <List sx={{ pt: 2 }}>
          {menuItems.map((item) => (
            <ListItem
              button
              key={item}
              onClick={() => scrollToSection(item)}
              sx={{
                my: 1,
                mx: 2,
                borderRadius: '8px',
                transition: 'all 0.2s',
                background: activeSection === item ? 
                  (theme) => `linear-gradient(45deg, ${theme.palette.primary.main}20, ${theme.palette.secondary.main}20)` : 
                  'transparent',
                '&:hover': {
                  transform: 'translateX(8px)',
                  background: (theme) => `linear-gradient(45deg, ${theme.palette.primary.main}10, ${theme.palette.secondary.main}10)`,
                },
              }}
            >
              <ListItemText 
                primary={item} 
                sx={{
                  '& .MuiTypography-root': {
                    fontWeight: activeSection === item ? 600 : 400,
                    color: 'text.primary',
                  },
                }}
              />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Navbar;