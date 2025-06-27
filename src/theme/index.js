import { createTheme, alpha } from '@mui/material/styles';

const themeColors = {
  primary: {
    main: '#7C3AED', // Deep Purple
    light: '#9F67FF',
    dark: '#5B21B6',
    contrastText: '#ffffff',
  },
  secondary: {
    main: '#059669', // Emerald Green
    light: '#10B981',
    dark: '#047857',
    contrastText: '#ffffff',
  },
  success: {
    main: '#2DD4BF', // Teal
    light: '#5EEAD4',
    dark: '#14B8A6',
    contrastText: '#ffffff',
  },
  error: {
    main: '#E11D48', // Rose
    light: '#FB7185',
    dark: '#BE123C',
    contrastText: '#ffffff',
  },
  warning: {
    main: '#EA580C', // Orange
    light: '#FB923C',
    dark: '#C2410C',
    contrastText: '#ffffff',
  },
  info: {
    main: '#06B6D4', // Cyan
    light: '#22D3EE',
    dark: '#0891B2',
    contrastText: '#ffffff',
  },
};

// Custom gradient generator
const createGradient = (startColor, endColor) => `linear-gradient(to right, ${startColor}, ${endColor})`;

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: themeColors.primary,
    secondary: themeColors.secondary,
    success: themeColors.success,
    error: themeColors.error,
    warning: themeColors.warning,
    info: themeColors.info,
    background: {
      default: '#FAF5FF', // Light purple background
      paper: '#FFFFFF',
      gradient: createGradient(alpha(themeColors.primary.main, 0.05), alpha(themeColors.secondary.main, 0.05)),
    },
    text: {
      primary: '#1E1B4B', // Dark indigo for better readability
      secondary: '#4B5563',
      gradient: createGradient(themeColors.primary.main, themeColors.secondary.main),
    },
    divider: alpha('#64748B', 0.12),
  },
  // ... rest of the configuration remains the same as your original theme
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          textTransform: 'none',
          fontWeight: 600,
          padding: '10px 24px',
          background: createGradient(themeColors.primary.main, themeColors.secondary.main),
          color: '#ffffff',
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0px 8px 24px rgba(15, 23, 42, 0.16)',
          },
        },
        contained: {
          '&:hover': {
            background: createGradient(themeColors.primary.dark, themeColors.secondary.dark),
          },
        },
        outlined: {
          borderWidth: 2,
          '&:hover': {
            borderWidth: 2,
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          padding: 12,
          background: '#ffffff',
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: `0px 12px 24px ${alpha(themeColors.primary.main, 0.12)}`,
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          fontWeight: 600,
          '&.MuiChip-filled': {
            background: createGradient(themeColors.primary.main, themeColors.secondary.main),
            color: '#ffffff',
          },
        },
      },
    },
  },
});

export default theme;