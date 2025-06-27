import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  Container,
  Chip,
  Tooltip,
  LinearProgress,
  Divider,
  alpha,
} from '@mui/material';
import { motion } from 'framer-motion';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import BrushIcon from '@mui/icons-material/Brush';
import DnsIcon from '@mui/icons-material/Dns';
import SpeedIcon from '@mui/icons-material/Speed';

const skills = [
  {
    name: 'Frontend Development',
    mainTech: 'React & Next.js',
    level: 85,
    icon: CodeIcon,
    gradient: ['#7C3AED', '#06B6D4'],
    subSkills: ['React', 'TypeScript', 'Next.js', 'Redux'],
    description: 'Building responsive and interactive user interfaces with modern frameworks',
    years: 4,
    projects: 30,
    recentWork: 'E-commerce Platform'
  },
  {
    name: 'Backend Development',
    mainTech: 'Node.js',
    level: 80,
    icon: DnsIcon,
    gradient: ['#059669', '#10B981'],
    subSkills: ['Node.js', 'Express', 'GraphQL', 'REST APIs'],
    description: 'Creating scalable server-side applications and APIs',
    years: 3,
    projects: 25,
    recentWork: 'Microservices Architecture'
  },
  {
    name: 'UI/UX Design',
    mainTech: 'Design Systems',
    level: 75,
    icon: BrushIcon,
    gradient: ['#7C3AED', '#FB923C'],
    subSkills: ['Material-UI', 'Figma', 'Tailwind', 'Framer'],
    description: 'Crafting beautiful and intuitive user experiences',
    years: 4,
    projects: 40,
    recentWork: 'Design System'
  },
  {
    name: 'Database Management',
    mainTech: 'MongoDB & SQL',
    level: 70,
    icon: StorageIcon,
    gradient: ['#059669', '#06B6D4'],
    subSkills: ['MongoDB', 'PostgreSQL', 'Redis', 'Firebase'],
    description: 'Managing and optimizing database systems',
    years: 3,
    projects: 20,
    recentWork: 'Data Migration'
  },
  {
    name: 'Web Performance',
    mainTech: 'Optimization',
    level: 85,
    icon: SpeedIcon,
    gradient: ['#7C3AED', '#2DD4BF'],
    subSkills: ['Optimization', 'SEO', 'Analytics', 'Caching'],
    description: 'Optimizing web applications for speed and efficiency',
    years: 3,
    projects: 15,
    recentWork: 'Performance Audit'
  }
];

const createGradient = (startColor, endColor) => 
  `linear-gradient(135deg, ${startColor} 0%, ${endColor} 100%)`;

const SkillCard = ({ skill, index, inView }) => {
  const [hover, setHover] = useState(false);
  const IconComponent = skill.icon;
  const gradientBg = createGradient(skill.gradient[0], skill.gradient[1]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      style={{ height: '100%' }}
    >
      <Card
        elevation={hover ? 4 : 1}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        sx={{
          height: '100%',
          p: 3,
          position: 'relative',
          transition: 'all 0.3s ease-in-out',
          transform: hover ? 'translateY(-8px)' : 'none',
          border: '1px solid',
          borderColor: hover ? 'primary.main' : 'divider',
          '&:before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            borderRadius: 2,
            padding: '2px',
            background: hover ? gradientBg : 'none',
            mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            maskComposite: 'exclude',
            opacity: 0.5,
          }
        }}
      >
        {/* Header */}
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
          <Box
            sx={{
              background: alpha(skill.gradient[0], 0.1),
              p: 1.5,
              borderRadius: 2,
              transition: 'all 0.3s ease',
              transform: hover ? 'scale(1.1)' : 'scale(1)',
            }}
          >
            <IconComponent sx={{ 
              color: skill.gradient[0],
              fontSize: 28 
            }} />
          </Box>
          <Box sx={{ ml: 2 }}>
            <Typography variant="h6" fontWeight="700">
              {skill.name}
            </Typography>
            <Typography 
              variant="body2" 
              sx={{ 
                color: 'text.secondary',
                opacity: 0.8 
              }}
            >
              {skill.mainTech}
            </Typography>
          </Box>
        </Box>

        {/* Progress Bar */}
        <Box sx={{ mb: 3 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
            <Typography variant="body2" fontWeight="600">
              Proficiency
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {inView ? `${skill.level}%` : '0%'}
            </Typography>
          </Box>
          <LinearProgress
            variant="determinate"
            value={inView ? skill.level : 0}
            sx={{
              height: 6,
              borderRadius: 1,
              bgcolor: alpha(skill.gradient[0], 0.1),
              '.MuiLinearProgress-bar': {
                background: gradientBg,
                transition: 'transform 1.5s ease-in-out',
              },
            }}
          />
        </Box>

        {/* Description */}
        <Typography 
          variant="body2" 
          sx={{ 
            color: 'text.secondary',
            mb: 3,
            minHeight: 40
          }}
        >
          {skill.description}
        </Typography>

        {/* Sub Skills */}
        <Box sx={{ mb: 3 }}>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            {skill.subSkills.map((subSkill) => (
              <Chip
                key={subSkill}
                label={subSkill}
                size="small"
                sx={{
                  bgcolor: alpha(skill.gradient[0], 0.1),
                  color: skill.gradient[0],
                  fontWeight: 500,
                  '&:hover': {
                    bgcolor: alpha(skill.gradient[0], 0.2),
                  },
                }}
              />
            ))}
          </Box>
        </Box>

        <Divider sx={{ my: 2 }} />

        {/* Stats */}
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <Tooltip title="Years of Experience">
            <Typography 
              variant="body2" 
              sx={{ 
                color: 'text.secondary',
                display: 'flex',
                alignItems: 'center',
                gap: 0.5
              }}
            >
              {skill.years} Years
            </Typography>
          </Tooltip>
          <Tooltip title="Completed Projects">
            <Typography 
              variant="body2" 
              sx={{ 
                color: 'text.secondary',
                display: 'flex',
                alignItems: 'center',
                gap: 0.5
              }}
            >
              {skill.projects}+ Projects
            </Typography>
          </Tooltip>
        </Box>

        {/* Recent Work Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: hover ? 1 : 0 }}
          transition={{ duration: 0.2 }}
          style={{
            position: 'absolute',
            top: 16,
            right: 16,
          }}
        >
          <Chip
            label={`Recent: ${skill.recentWork}`}
            size="small"
            sx={{
              background: gradientBg,
              color: 'white',
              fontWeight: 500,
            }}
          />
        </motion.div>
      </Card>
    </motion.div>
  );
};

const Skill = () => {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.1 }
    );

    const section = document.getElementById('skills-section');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <Box
      id="skills-section"
      sx={{
        py: 8,
        background: (theme) => theme.palette.background.gradient,
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -20 }}
          transition={{ duration: 0.6 }}
        >
          <Typography 
            variant="h3" 
            align="center"
            sx={{
              mb: 2,
              fontWeight: 800,
              background: (theme) => theme.palette.text.gradient,
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Technical Expertise
          </Typography>
          <Typography 
            variant="h6"
            align="center"
            sx={{ 
              mb: 6, 
              maxWidth: 600, 
              mx: 'auto',
              color: 'text.secondary',
              opacity: 0.8
            }}
          >
            Leveraging cutting-edge technologies to build innovative solutions
          </Typography>
        </motion.div>

        <Grid container spacing={3}>
          {skills.map((skill, index) => (
            <Grid item xs={12} md={6} lg={4} key={skill.name}>
              <SkillCard 
                skill={skill} 
                index={index}
                inView={inView}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Skill;