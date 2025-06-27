import financelogin from '../assets/login.png';
import financePage1 from '../assets/finance page1.png';
import financePage2 from '../assets/finance page2.png';



export const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce platform with features like product catalog, shopping cart, user authentication, and payment integration. Built using modern web technologies for optimal performance.',
    images: [
      financelogin,
      financePage1,
      financePage2,
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
    demoLink: 'https://demo.com',
    githubLink: 'https://github.com',
    featured: true
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A comprehensive productivity application for managing daily tasks and projects. Features include drag-and-drop task organization, priority setting, and progress tracking.',
    images: [
      '/api/placeholder/400/300',
      '/api/placeholder/400/300',
      '/api/placeholder/400/300'
    ],
    technologies: ['React', 'Firebase', 'Material UI'],
    demoLink: 'https://demo.com',
    githubLink: 'https://github.com',
    featured: true
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description: 'Real-time weather tracking application providing detailed forecasts, interactive maps, and historical weather data visualization using modern charting libraries.',
    images: [
      '/api/placeholder/400/300',
      '/api/placeholder/400/300',
      '/api/placeholder/400/300'
    ],
    technologies: ['React', 'OpenWeather API', 'ChartJS'],
    demoLink: 'https://demo.com',
    githubLink: 'https://github.com',
    featured: false
  }
];

export const skillCategories = [
  {
    category: 'Frontend',
    skills: [
      {
        name: 'React',
        level: 'Advanced',
        icon: 'react-icon'
      },
      {
        name: 'JavaScript',
        level: 'Advanced',
        icon: 'javascript-icon'
      },
      {
        name: 'TypeScript',
        level: 'Intermediate',
        icon: 'typescript-icon'
      },
      {
        name: 'Material UI',
        level: 'Advanced',
        icon: 'mui-icon'
      },
      {
        name: 'HTML5',
        level: 'Advanced',
        icon: 'html5-icon'
      },
      {
        name: 'CSS3',
        level: 'Advanced',
        icon: 'css3-icon'
      }
    ]
  },
  {
    category: 'Backend',
    skills: [
      {
        name: 'Node.js',
        level: 'Advanced',
        icon: 'nodejs-icon'
      },
      {
        name: 'Express',
        level: 'Advanced',
        icon: 'express-icon'
      },
      {
        name: 'MongoDB',
        level: 'Intermediate',
        icon: 'mongodb-icon'
      },
      {
        name: 'SQL',
        level: 'Intermediate',
        icon: 'sql-icon'
      }
    ]
  },
  {
    category: 'DevOps & Tools',
    skills: [
      {
        name: 'Git',
        level: 'Advanced',
        icon: 'git-icon'
      },
      {
        name: 'Docker',
        level: 'Intermediate',
        icon: 'docker-icon'
      }
    ]
  }
];

// Additional data that might be useful
export const projectCategories = [
  'All',
  'Frontend',
  'Full Stack',
  'Mobile',
  'UI/UX'
];

export const projectFilters = [
  'Featured',
  'Recent',
  'Popular'
];