import React, { useEffect, useState, useRef } from 'react';
import { Box, useTheme, useMediaQuery } from '@mui/material';
import { keyframes } from '@mui/system';

// Enhanced animations
const rotateGradient = keyframes`
  0% {
    background-position: 0% 50%;
    filter: hue-rotate(0deg);
  }
  50% {
    background-position: 100% 50%;
    filter: hue-rotate(30deg);
  }
  100% {
    background-position: 0% 50%;
    filter: hue-rotate(0deg);
  }
`;

const morphShape = keyframes`
  0% {
    border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
    transform: rotate(0deg) scale(1);
  }
  33% {
    border-radius: 70% 30% 50% 50% / 30% 30% 70% 70%;
    transform: rotate(120deg) scale(0.98);
  }
  66% {
    border-radius: 40% 60% 70% 30% / 50% 60% 30% 60%;
    transform: rotate(240deg) scale(1.02);
  }
  100% {
    border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
    transform: rotate(360deg) scale(1);
  }
`;

const floatAnimation = keyframes`
  0% {
    transform: translateY(0) translateX(0);
  }
  25% {
    transform: translateY(-15px) translateX(5px);
  }
  50% {
    transform: translateY(-5px) translateX(10px);
  }
  75% {
    transform: translateY(5px) translateX(-5px);
  }
  100% {
    transform: translateY(0) translateX(0);
  }
`;

const pulse = keyframes`
  0% {
    transform: scale(1);
    opacity: 0.8;
  }
  50% {
    transform: scale(1.1);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 0.8;
  }
`;

// Enhanced glass effect component
const GlassPanel = ({ children, ...props }) => {
  const theme = useTheme();
  
  return (
    <Box
      sx={{
        background: theme.palette.mode === 'dark' 
          ? 'rgba(10, 10, 30, 0.2)' 
          : 'rgba(255, 255, 255, 0.15)',
        backdropFilter: 'blur(12px)',
        borderRadius: '16px',
        border: `1px solid ${theme.palette.mode === 'dark' 
          ? 'rgba(255, 255, 255, 0.1)' 
          : 'rgba(255, 255, 255, 0.3)'}`,
        boxShadow: theme.palette.mode === 'dark'
          ? '0 8px 32px rgba(0, 0, 0, 0.4)'
          : '0 8px 32px rgba(0, 0, 0, 0.1)',
        ...props.sx
      }}
    >
      {children}
    </Box>
  );
};

const EnhancedProfileSection = ({ profileImage }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const containerRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  // Handle scroll for parallax effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY * 0.05);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle mouse movement for 3D effect
  useEffect(() => {
    const container = containerRef.current;
    const handleMouseMove = (e) => {
      if (container) {
        const rect = container.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        setMousePosition({ x, y });
      }
    };

    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      return () => {
        if (container) {
          container.removeEventListener('mousemove', handleMouseMove);
        }
      };
    }
  }, []);

  return (
    <Box
      ref={containerRef}
      sx={{
        position: 'relative',
        width: '100%',
        maxWidth: isMobile ? '300px' : '400px',
        height: isMobile ? '300px' : '400px',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        perspective: '1000px',
        transformStyle: 'preserve-3d',
        cursor: 'pointer',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Dynamic background with improved effects */}
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: `translate(-50%, -50%) rotate(${scrollPosition}deg) scale(${isHovered ? 1.1 : 1})`,
          width: '150%',
          height: '150%',
          background: theme.palette.mode === 'dark'
            ? `linear-gradient(45deg, 
                rgba(66, 133, 244, 0.15),
                rgba(52, 168, 83, 0.15),
                rgba(251, 188, 5, 0.15),
                rgba(234, 67, 53, 0.15)
              )`
            : `linear-gradient(45deg, 
                rgba(66, 133, 244, 0.1),
                rgba(52, 168, 83, 0.1),
                rgba(251, 188, 5, 0.1),
                rgba(234, 67, 53, 0.1)
              )`,
          backgroundSize: '400% 400%',
          animation: `${morphShape} 25s ease-in-out infinite`,
          filter: 'blur(50px)',
          zIndex: 1,
          transition: 'transform 0.5s ease-out',
        }}
      />

      {/* Modern gradient border with improved animation */}
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: `translate(-50%, -50%) perspective(1000px) rotateY(${isHovered ? mousePosition.x * 10 : 0}deg) rotateX(${isHovered ? -mousePosition.y * 10 : 0}deg)`,
          width: isMobile ? '260px' : '340px',
          height: isMobile ? '260px' : '340px',
          borderRadius: '50%',
          background: `linear-gradient(45deg,
            ${theme.palette.primary.main},
            ${theme.palette.secondary ? theme.palette.secondary.main : '#34A853'},
            ${theme.palette.primary.light},
            ${theme.palette.secondary ? theme.palette.secondary.light : '#FBBC05'}
          )`,
          backgroundSize: '300% 300%',
          animation: `${rotateGradient} 15s linear infinite`,
          padding: '6px',
          zIndex: 2,
          transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
          boxShadow: isHovered 
            ? `0 20px 60px rgba(${theme.palette.mode === 'dark' ? '0, 0, 0, 0.6' : '100, 100, 255, 0.3'})`
            : `0 10px 30px rgba(${theme.palette.mode === 'dark' ? '0, 0, 0, 0.4' : '100, 100, 255, 0.2'})`,
        }}
      >
        <GlassPanel
          sx={{
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            overflow: 'hidden',
            position: 'relative',
          }}
        >
          {/* Overlay effect on hover */}
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              background: theme.palette.mode === 'dark'
                ? 'linear-gradient(135deg, rgba(66, 133, 244, 0.2) 0%, transparent 50%, rgba(234, 67, 53, 0.2) 100%)'
                : 'linear-gradient(135deg, rgba(66, 133, 244, 0.1) 0%, transparent 50%, rgba(234, 67, 53, 0.1) 100%)',
              opacity: isHovered ? 1 : 0,
              transition: 'opacity 0.5s ease',
              zIndex: 2,
            }}
          />
          
          <Box
            component="img"
            src={profileImage}
            alt="Profile"
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
              filter: `contrast(${isHovered ? 1.1 : 1.05}) brightness(${isHovered ? 1.05 : 1.02})`,
              transform: isHovered ? 'scale(1.12) rotate(2deg)' : 'scale(1)',
            }}
          />
        </GlassPanel>
      </Box>

      {/* Enhanced floating particles with better animation */}
      {[...Array(16)].map((_, index) => (
        <Box
          key={index}
          sx={{
            position: 'absolute',
            width: isMobile ? Math.random() * 4 + 4 : Math.random() * 6 + 6,
            height: isMobile ? Math.random() * 4 + 4 : Math.random() * 6 + 6,
            borderRadius: '50%',
            background: index % 2 === 0 
              ? `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.primary.light})`
              : `linear-gradient(45deg, ${theme.palette.secondary ? theme.palette.secondary.main : '#34A853'}, ${theme.palette.secondary ? theme.palette.secondary.light : '#FBBC05'})`,
            animation: `${floatAnimation} ${4 + index * 0.5}s ease-in-out infinite, ${pulse} ${3 + index * 0.2}s ease-in-out infinite`,
            animationDelay: `${index * 0.3}s`,
            transform: `rotate(${index * 30}deg) translateY(-${120 + Math.random() * 80}px)`,
            opacity: 0.7,
            zIndex: 3,
            filter: 'blur(1px)',
            transition: 'all 0.3s ease',
            scale: isHovered ? 1.2 : 1,
          }}
        />
      ))}

      {/* Subtle light reflections */}
      <Box
        sx={{
          position: 'absolute',
          top: '30%',
          left: '20%',
          width: '20px',
          height: '20px',
          borderRadius: '50%',
          background: 'rgba(255, 255, 255, 0.8)',
          filter: 'blur(10px)',
          opacity: 0.7,
          zIndex: 4,
          animation: `${pulse} 3s infinite`,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          top: '20%',
          right: '15%',
          width: '15px',
          height: '15px',
          borderRadius: '50%',
          background: 'rgba(255, 255, 255, 0.8)',
          filter: 'blur(8px)',
          opacity: 0.5,
          zIndex: 4,
          animation: `${pulse} 4s infinite 1s`,
        }}
      />
    </Box>
  );
};

export default EnhancedProfileSection;