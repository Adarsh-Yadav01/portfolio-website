import React, { useState } from 'react';
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  Grid,
  Paper,
  Alert,
  Snackbar,
  useTheme,
  IconButton,
  CircularProgress
} from '@mui/material';
import {
  Email,
  Phone,
  LocationOn,
  Send as SendIcon,
  LinkedIn,
  GitHub,
  Twitter
} from '@mui/icons-material';

const Contact = () => {
  const theme = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [focused, setFocused] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setLoading(false);
    setOpen(true);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Box 
      sx={{ 
        py: { xs: 8, md: 12 },
        background: `linear-gradient(135deg, 
          ${theme.palette.primary.light}15,
          ${theme.palette.secondary.light}15)`,
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Decorative Elements */}
      <Box
        sx={{
          position: 'absolute',
          top: '10%',
          left: '5%',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: `radial-gradient(circle, ${theme.palette.primary.main}15, ${theme.palette.secondary.main}15)`,
          filter: 'blur(40px)',
          animation: 'float 8s ease-in-out infinite',
          '@keyframes float': {
            '0%, 100%': { transform: 'translateY(0)' },
            '50%': { transform: 'translateY(-20px)' },
          },
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 } }}>
          <Typography 
            variant="h2" 
            component="h2"
            sx={{
              fontWeight: 800,
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              mb: 2
            }}
          >
            Let's Connect
          </Typography>
          <Typography 
            variant="h6" 
            color="text.secondary"
            sx={{ 
              maxWidth: '600px', 
              mx: 'auto',
              opacity: 0.8
            }}
          >
            Have a project in mind? Let's create something amazing together.
          </Typography>
        </Box>

        <Grid container spacing={4} alignItems="stretch">
          <Grid item xs={12} md={6}>
            <Paper 
              elevation={4}
              sx={{
                p: 4,
                height: '100%',
                borderRadius: 3,
                transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: `0 12px 24px ${theme.palette.primary.main}20`,
                },
                background: `linear-gradient(135deg, 
                  ${theme.palette.background.paper} 0%, 
                  ${theme.palette.background.default} 100%)`,
              }}
            >
              <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => setFocused('name')}
                      onBlur={() => setFocused('')}
                      required
                      variant="outlined"
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          borderRadius: 2,
                          transition: 'all 0.3s ease-in-out',
                          ...(focused === 'name' && {
                            '& fieldset': {
                              borderWidth: '2px',
                              borderColor: theme.palette.primary.main,
                            },
                          }),
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setFocused('email')}
                      onBlur={() => setFocused('')}
                      required
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          borderRadius: 2,
                          transition: 'all 0.3s ease-in-out',
                          ...(focused === 'email' && {
                            '& fieldset': {
                              borderWidth: '2px',
                              borderColor: theme.palette.primary.main,
                            },
                          }),
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Message"
                      name="message"
                      multiline
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocused('message')}
                      onBlur={() => setFocused('')}
                      required
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          borderRadius: 2,
                          transition: 'all 0.3s ease-in-out',
                          ...(focused === 'message' && {
                            '& fieldset': {
                              borderWidth: '2px',
                              borderColor: theme.palette.primary.main,
                            },
                          }),
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      fullWidth
                      disabled={loading}
                      sx={{
                        py: 1.5,
                        borderRadius: 2,
                        textTransform: 'none',
                        fontSize: '1.1rem',
                        background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                        '&:hover': {
                          background: `linear-gradient(45deg, ${theme.palette.primary.dark}, ${theme.palette.secondary.dark})`,
                        },
                      }}
                    >
                      {loading ? (
                        <CircularProgress size={24} color="inherit" />
                      ) : (
                        <>
                          Send Message
                          <SendIcon sx={{ ml: 1 }} />
                        </>
                      )}
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Paper>
          </Grid>

          <Grid item xs={12} md={6}>
            <Paper 
              elevation={4}
              sx={{
                p: 4,
                height: '100%',
                borderRadius: 3,
                transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: `0 12px 24px ${theme.palette.primary.main}20`,
                },
                background: `linear-gradient(135deg, 
                  ${theme.palette.background.paper} 0%, 
                  ${theme.palette.background.default} 100%)`,
              }}
            >
              <Typography 
                variant="h5" 
                gutterBottom
                sx={{ 
                  fontWeight: 600,
                  mb: 4,
                  background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Let's Talk
              </Typography>
              
              <Box sx={{ mb: 4 }}>
                <Box 
                  sx={{ 
                    display: 'flex', 
                    alignItems: 'center',
                    mb: 3,
                    '&:hover': {
                      transform: 'translateX(8px)',
                      transition: 'transform 0.3s ease',
                    },
                  }}
                >
                  <Email sx={{ 
                    mr: 2, 
                    color: theme.palette.primary.main,
                    fontSize: 28
                  }} />
                  <Box>
                    <Typography variant="subtitle2" color="text.secondary">
                      Email
                    </Typography>
                    <Typography>your@email.com</Typography>
                  </Box>
                </Box>

                <Box 
                  sx={{ 
                    display: 'flex', 
                    alignItems: 'center',
                    mb: 3,
                    '&:hover': {
                      transform: 'translateX(8px)',
                      transition: 'transform 0.3s ease',
                    },
                  }}
                >
                  <Phone sx={{ 
                    mr: 2, 
                    color: theme.palette.primary.main,
                    fontSize: 28
                  }} />
                  <Box>
                    <Typography variant="subtitle2" color="text.secondary">
                      Phone
                    </Typography>
                    <Typography>+1 234 567 890</Typography>
                  </Box>
                </Box>

                <Box 
                  sx={{ 
                    display: 'flex', 
                    alignItems: 'center',
                    '&:hover': {
                      transform: 'translateX(8px)',
                      transition: 'transform 0.3s ease',
                    },
                  }}
                >
                  <LocationOn sx={{ 
                    mr: 2, 
                    color: theme.palette.primary.main,
                    fontSize: 28
                  }} />
                  <Box>
                    <Typography variant="subtitle2" color="text.secondary">
                      Location
                    </Typography>
                    <Typography>Your Location</Typography>
                  </Box>
                </Box>
              </Box>

              <Box sx={{ mt: 6 }}>
                <Typography 
                  variant="subtitle1" 
                  gutterBottom
                  sx={{ mb: 2 }}
                >
                  Connect with me
                </Typography>
                <Box sx={{ display: 'flex', gap: 2 }}>
                  {[
                    { icon: LinkedIn, link: '#' },
                    { icon: GitHub, link: '#' },
                    { icon: Twitter, link: '#' },
                  ].map((social, index) => (
                    <IconButton
                      key={index}
                      href={social.link}
                      target="_blank"
                      sx={{
                        background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                        color: 'white',
                        '&:hover': {
                          background: `linear-gradient(45deg, ${theme.palette.primary.dark}, ${theme.palette.secondary.dark})`,
                          transform: 'translateY(-3px)',
                        },
                        transition: 'all 0.3s ease',
                      }}
                    >
                      <social.icon />
                    </IconButton>
                  ))}
                </Box>
              </Box>
            </Paper>
          </Grid>
        </Grid>

        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={() => setOpen(false)}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        >
          <Alert 
            severity="success" 
            variant="filled"
            sx={{ 
              width: '100%',
              borderRadius: 2,
              background: `linear-gradient(45deg, ${theme.palette.success.main}, ${theme.palette.success.dark})`,
            }}
          >
            Message sent successfully! I'll get back to you soon.
          </Alert>
        </Snackbar>
      </Container>
    </Box>
  );
};

export default Contact;