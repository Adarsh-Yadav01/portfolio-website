import React, { useState } from 'react';
import { 
  Box, 
  Card, 
  CardContent, 
  Container, 
  Grid, 
  Typography, 
  useTheme, 
  useMediaQuery,
  IconButton,
  Chip
} from '@mui/material';
import { 
  School as SchoolIcon, 
  WorkOutline as WorkIcon, 
  ModelTraining as CertificateIcon 
} from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';

const EducationalTimeline = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [selectedStage, setSelectedStage] = useState(0);

  const educationStages = [
    {
      title: "Computer Science Bachelor's",
      institution: "Tech Innovation University",
      period: "2018 - 2022",
      skills: ["React", "TypeScript", "Node.js"],
      description: "Completed comprehensive computer science program with a focus on modern web technologies and software engineering principles.",
      icon: SchoolIcon,
      color: theme.palette.primary.main
    },
    {
      title: "Advanced Web Development",
      institution: "Professional Certification Program",
      period: "2022 - 2023",
      skills: ["Material-UI", "GraphQL", "Cloud Computing"],
      description: "Acquired advanced certifications in cutting-edge web development technologies and best practices.",
      icon: CertificateIcon,
      color: theme.palette.secondary.main
    },
    {
      title: "Senior Frontend Developer",
      institution: "Tech Innovations Inc.",
      period: "2022 - Present",
      skills: ["React", "Redux", "Performance Optimization"],
      description: "Leading frontend development, creating scalable and high-performance web applications using modern tech stacks.",
      icon: WorkIcon,
      color: theme.palette.success.main
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        delayChildren: 0.3,
        staggerChildren: 0.2 
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 300 
      }
    }
  };

  return (
    <Container maxWidth="lg">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <Card 
          elevation={6} 
          sx={{ 
            background: theme.palette.background.gradient,
            borderRadius: 3,
            overflow: 'hidden'
          }}
        >
          <CardContent>
            <Typography 
              variant="h4" 
              align="center" 
              gutterBottom 
              sx={{ 
                fontWeight: 700, 
                backgroundImage: `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                mb: 4 
              }}
            >
              Professional Journey
            </Typography>

            <Grid 
              container 
              spacing={3} 
              direction={isMobile ? 'column' : 'row'}
            >
              {/* Timeline Navigation */}
              <Grid 
                item 
                xs={12} 
                md={4} 
                sx={{ 
                  display: 'flex', 
                  flexDirection: isMobile ? 'row' : 'column',
                  justifyContent: 'center',
                  gap: 2,
                  overflow: 'auto'
                }}
              >
                {educationStages.map((stage, index) => (
                  <motion.div
                    key={stage.title}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <IconButton
                      onClick={() => setSelectedStage(index)}
                      sx={{
                        backgroundColor: selectedStage === index 
                          ? stage.color 
                          : theme.palette.grey[300],
                        color: selectedStage === index ? 'white' : 'inherit',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          backgroundColor: stage.color,
                          color: 'white'
                        }
                      }}
                    >
                      <stage.icon />
                    </IconButton>
                  </motion.div>
                ))}
              </Grid>

              {/* Stage Details */}
              <Grid item xs={12} md={8}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedStage}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Card 
                      elevation={4} 
                      sx={{ 
                        p: 3, 
                        borderRadius: 2,
                        background: 'white',
                        boxShadow: `0 8px 24px ${theme.palette.primary.light}20`
                      }}
                    >
                      <Typography 
                        variant="h5" 
                        color="primary" 
                        gutterBottom
                      >
                        {educationStages[selectedStage].title}
                      </Typography>
                      <Typography 
                        variant="subtitle1" 
                        color="textSecondary"
                      >
                        {educationStages[selectedStage].institution}
                      </Typography>
                      <Typography 
                        variant="caption" 
                        color="textSecondary" 
                        sx={{ mb: 2, display: 'block' }}
                      >
                        {educationStages[selectedStage].period}
                      </Typography>
                      <Typography variant="body1" sx={{ mb: 2 }}>
                        {educationStages[selectedStage].description}
                      </Typography>
                      <Box sx={{ display: 'flex', gap: 1 }}>
                        {educationStages[selectedStage].skills.map((skill) => (
                          <Chip 
                            key={skill} 
                            label={skill} 
                            size="small" 
                            variant="filled"
                          />
                        ))}
                      </Box>
                    </Card>
                  </motion.div>
                </AnimatePresence>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </motion.div>
    </Container>
  );
};

export default EducationalTimeline;