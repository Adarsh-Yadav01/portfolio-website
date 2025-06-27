import React, { useState, useEffect } from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActions,
  Button,
  Chip,
  Box,
  IconButton,
  Tooltip,
  alpha,
  Link
} from '@mui/material';
import {
  GitHub as GitHubIcon,
  Launch as LaunchIcon,
  Favorite as FavoriteIcon,
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
  ExpandMore as ExpandMoreIcon,
  ExpandLess as ExpandLessIcon,
} from '@mui/icons-material';

const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = React.useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [expanded, setExpanded] = useState(false);

  // Ensure project.images is an array and has at least one image
  const images = Array.isArray(project.images) ? project.images : [project.image];

  useEffect(() => {
    let timer;
    if (!isHovered) {
      timer = setInterval(() => {
        setIsTransitioning(true);
        setTimeout(() => {
          setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
          setIsTransitioning(false);
        }, 300);
      }, 3000);
    }
    return () => clearInterval(timer);
  }, [isHovered, images.length]);

  const handlePrevImage = (e) => {
    e.stopPropagation();
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
      setIsTransitioning(false);
    }, 300);
  };

  const handleNextImage = (e) => {
    e.stopPropagation();
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      setIsTransitioning(false);
    }, 300);
  };

  const toggleExpanded = (e) => {
    e.preventDefault();
    setExpanded(!expanded);
  };

  return (
    <Card
      sx={{
        maxWidth: 345,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        transition: 'all 0.3s ease-in-out',
        borderRadius: 4,
        overflow: 'hidden',
        background: (theme) => `linear-gradient(135deg, 
          ${alpha(theme.palette.primary.light, 0.1)} 0%,
          ${alpha(theme.palette.secondary.light, 0.15)} 100%
        )`,
        backdropFilter: 'blur(8px)',
        border: (theme) => `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: (theme) => `
            0 12px 24px ${alpha(theme.palette.primary.main, 0.2)},
            0 4px 8px ${alpha(theme.palette.secondary.main, 0.1)}
          `,
          background: (theme) => `linear-gradient(135deg, 
            ${alpha(theme.palette.primary.light, 0.15)} 0%,
            ${alpha(theme.palette.secondary.light, 0.2)} 100%
          )`,
        },
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Box sx={{ position: 'relative', overflow: 'hidden', height: 200 }}>
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            opacity: isTransitioning ? 0 : 1,
            transition: 'opacity 0.3s ease-in-out',
          }}
        >
          <CardMedia
            component="img"
            height="200"
            image={images[currentImageIndex]}
            alt={`${project.title} - Image ${currentImageIndex + 1}`}
            sx={{
              transition: 'all 0.5s ease-in-out',
              transform: isHovered ? 'scale(1.1)' : 'scale(1)',
              filter: isHovered ? 'brightness(0.8)' : 'brightness(1)',
            }}
          />
        </Box>

        {/* Image Navigation Overlay */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: (theme) => `linear-gradient(135deg,
              ${alpha(theme.palette.primary.main, 0.9)} 0%,
              ${alpha(theme.palette.secondary.main, 0.9)} 100%
            )`,
            opacity: isHovered ? 1 : 0,
            transition: 'opacity 0.3s ease-in-out',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 2,
          }}
        >
          {/* Navigation Arrows */}
          {images.length > 1 && (
            <>
              <IconButton
                onClick={handlePrevImage}
                sx={{
                  position: 'absolute',
                  left: 8,
                  bgcolor: (theme) => alpha(theme.palette.background.paper, 0.9),
                  '&:hover': { 
                    bgcolor: (theme) => alpha(theme.palette.background.paper, 1),
                    transform: 'scale(1.1)',
                  },
                }}
              >
                <ChevronLeftIcon />
              </IconButton>
              <IconButton
                onClick={handleNextImage}
                sx={{
                  position: 'absolute',
                  right: 8,
                  bgcolor: (theme) => alpha(theme.palette.background.paper, 0.9),
                  '&:hover': { 
                    bgcolor: (theme) => alpha(theme.palette.background.paper, 1),
                    transform: 'scale(1.1)',
                  },
                }}
              >
                <ChevronRightIcon />
              </IconButton>
            </>
          )}

          {/* Action Buttons */}
          <Tooltip title="View Demo">
            <IconButton
              sx={{
                bgcolor: (theme) => alpha(theme.palette.background.paper, 0.9),
                '&:hover': { 
                  bgcolor: (theme) => alpha(theme.palette.background.paper, 1),
                  transform: 'scale(1.1)',
                },
                transform: isHovered ? 'scale(1) rotate(0deg)' : 'scale(0) rotate(-180deg)',
                transition: 'all 0.3s ease-in-out',
              }}
              size="large"
              onClick={() => window.open(project.demoLink, '_blank')}
            >
              <LaunchIcon sx={{ color: 'primary.main' }} />
            </IconButton>
          </Tooltip>
          <Tooltip title="Source Code">
            <IconButton
              sx={{
                bgcolor: (theme) => alpha(theme.palette.background.paper, 0.9),
                '&:hover': { 
                  bgcolor: (theme) => alpha(theme.palette.background.paper, 1),
                  transform: 'scale(1.1)',
                },
                transform: isHovered ? 'scale(1) rotate(0deg)' : 'scale(0) rotate(180deg)',
                transition: 'all 0.3s ease-in-out 0.1s',
              }}
              size="large"
              onClick={() => window.open(project.githubLink, '_blank')}
            >
              <GitHubIcon sx={{ color: 'primary.main' }} />
            </IconButton>
          </Tooltip>
        </Box>

        {/* Image Indicators */}
        {images.length > 1 && (
          <Box
            sx={{
              position: 'absolute',
              bottom: 8,
              left: '50%',
              transform: 'translateX(-50%)',
              display: 'flex',
              gap: 1,
              zIndex: 2,
            }}
          >
            {images.map((_, index) => (
              <Box
                key={index}
                sx={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  backgroundColor: index === currentImageIndex ? 'white' : 'rgba(255,255,255,0.5)',
                  transition: 'all 0.3s ease',
                }}
              />
            ))}
          </Box>
        )}
      </Box>

      <CardContent 
        sx={{ 
          flexGrow: 1, 
          p: 3,
          background: (theme) => `linear-gradient(135deg,
            ${alpha(theme.palette.primary.light, 0.05)} 0%,
            ${alpha(theme.palette.secondary.light, 0.1)} 100%
          )`,
        }}
      >
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{
            fontWeight: 700,
            background: (theme) => `linear-gradient(45deg, 
              ${theme.palette.primary.main}, 
              ${theme.palette.secondary.main}
            )`,
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            mb: 2,
            textShadow: '0 2px 4px rgba(0,0,0,0.1)',
          }}
        >
          {project.title}
        </Typography>

        <Box sx={{ position: 'relative' }}>
          <Typography
            variant="body2"
            sx={{
              mb: 3,
              lineHeight: 1.6,
              color: 'text.secondary',
              transition: 'color 0.3s ease',
              overflow: 'hidden',
              display: '-webkit-box',
              WebkitLineClamp: expanded ? 'unset' : 2,
              WebkitBoxOrient: 'vertical',
              position: 'relative',
              '&:hover': {
                color: 'text.primary',
              },
            }}
          >
            {project.description}
          </Typography>
          {project.description.length > 120 && (
            <Link
              component="button"
              variant="body2"
              onClick={toggleExpanded}
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 0.5,
                color: 'primary.main',
                textDecoration: 'none',
                '&:hover': {
                  textDecoration: 'underline',
                },
              }}
            >
              {expanded ? (
                <>
                  Show Less
                  <ExpandLessIcon sx={{ fontSize: 16 }} />
                </>
              ) : (
                <>
                  Read More
                  <ExpandMoreIcon sx={{ fontSize: 16 }} />
                </>
              )}
            </Link>
          )}
        </Box>

        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
          {project.technologies.map((tech) => (
            <Chip
              key={tech}
              label={tech}
              size="small"
              sx={{
                borderRadius: 2,
                background: (theme) => `linear-gradient(45deg, 
                  ${alpha(theme.palette.primary.main, 0.9)}, 
                  ${alpha(theme.palette.secondary.main, 0.9)}
                )`,
                color: 'white',
                fontWeight: 500,
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  background: (theme) => `linear-gradient(45deg, 
                    ${theme.palette.primary.main}, 
                    ${theme.palette.secondary.main}
                  )`,
                  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                },
              }}
            />
          ))}
        </Box>
      </CardContent>

      <CardActions
        sx={{
          p: 3,
          pt: 0,
          display: 'flex',
          justifyContent: 'space-between',
          background: (theme) => `linear-gradient(135deg,
            ${alpha(theme.palette.primary.light, 0.05)} 0%,
            ${alpha(theme.palette.secondary.light, 0.1)} 100%
          )`,
        }}
      >
        <Box sx={{ display: 'flex', gap: 1 }}>
          <Button
            size="small"
            variant="contained"
            startIcon={<LaunchIcon />}
            onClick={() => window.open(project.demoLink, '_blank')}
            sx={{
              background: (theme) => `linear-gradient(45deg, 
                ${theme.palette.primary.main}, 
                ${theme.palette.secondary.main}
              )`,
              '&:hover': {
                background: (theme) => `linear-gradient(45deg, 
                  ${theme.palette.primary.dark}, 
                  ${theme.palette.secondary.dark}
                )`,
                transform: 'translateY(-2px)',
              },
            }}
          >
            Live Demo
          </Button>
          <Button
            size="small"
            variant="outlined"
            startIcon={<GitHubIcon />}
            onClick={() => window.open(project.githubLink, '_blank')}
            sx={{
              borderColor: 'primary.main',
              '&:hover': {
                borderColor: 'secondary.main',
                transform: 'translateY(-2px)',
              },
            }}
          >
            Code
          </Button>
        </Box>
        <IconButton
          size="small"
          sx={{
            color: 'error.main',
            transition: 'all 0.2s ease-in-out',
            '&:hover': { 
              transform: 'scale(1.1)',
              color: 'error.dark',
            },
          }}
        >
          <FavoriteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default ProjectCard;