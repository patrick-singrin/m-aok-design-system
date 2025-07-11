/**
 * AOK Design System - Color Tokens
 * 
 * These tokens are extracted from the AOK Figma design system
 * Supporting both light and dark mode themes
 */

// Primary Brand Colors
export const colors = {
  // AOK Brand Green - Primary
  primary: {
    main: '#005E3F',      // Primary brand green from Figma
    dark: '#004730',      // Cover background color
    light: '#00B376',     // Lighter variant for interactive states
  },

  // Light Theme Colors
  light: {
    background: {
      primary: '#FFFFFF',
      secondary: '#F5F5F5',
      tertiary: '#E5E5E5',
    },
    text: {
      primary: '#293033',   // From illustrative icons
      secondary: '#666666',
      disabled: '#999999',
    },
    surface: {
      primary: '#FFFFFF',
      elevated: '#FFFFFF',
      overlay: 'rgba(0, 0, 0, 0.1)',
    },
    border: {
      primary: 'rgba(0, 0, 0, 0.1)',
      secondary: 'rgba(0, 0, 0, 0.05)',
    }
  },

  // Dark Theme Colors  
  dark: {
    background: {
      primary: '#00150F',   // Dark mode background from Figma
      secondary: '#1A1A1A',
      tertiary: '#2A2A2A',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#CCCCCC',
      disabled: '#666666',
    },
    surface: {
      primary: '#1A1A1A',
      elevated: '#2A2A2A',
      overlay: 'rgba(255, 255, 255, 0.1)',
    },
    border: {
      primary: 'rgba(255, 255, 255, 0.1)',
      secondary: 'rgba(255, 255, 255, 0.05)',
    }
  },

  // Semantic Colors
  semantic: {
    success: '#00B376',
    warning: '#FF9500',
    error: '#FF3B30',
    info: '#007AFF',
  },

  // Interactive States
  states: {
    hover: 'rgba(0, 94, 63, 0.08)',
    pressed: 'rgba(0, 94, 63, 0.12)',
    focused: 'rgba(0, 94, 63, 0.16)',
    disabled: 'rgba(0, 0, 0, 0.38)',
  }
} as const;

// Color utility functions
export const getColor = (path: string, theme: 'light' | 'dark' = 'light') => {
  const pathArray = path.split('.');
  let current: any = colors;
  
  for (const key of pathArray) {
    current = current[key];
    if (!current) return undefined;
  }
  
  return current;
};

// CSS Custom Properties for Storybook
export const cssVariables = {
  light: {
    '--color-primary': colors.primary.main,
    '--color-primary-dark': colors.primary.dark,
    '--color-primary-light': colors.primary.light,
    '--color-background-primary': colors.light.background.primary,
    '--color-background-secondary': colors.light.background.secondary,
    '--color-text-primary': colors.light.text.primary,
    '--color-text-secondary': colors.light.text.secondary,
    '--color-surface-primary': colors.light.surface.primary,
    '--color-border-primary': colors.light.border.primary,
  },
  dark: {
    '--color-primary': colors.primary.main,
    '--color-primary-dark': colors.primary.dark,
    '--color-primary-light': colors.primary.light,
    '--color-background-primary': colors.dark.background.primary,
    '--color-background-secondary': colors.dark.background.secondary,
    '--color-text-primary': colors.dark.text.primary,
    '--color-text-secondary': colors.dark.text.secondary,
    '--color-surface-primary': colors.dark.surface.primary,
    '--color-border-primary': colors.dark.border.primary,
  }
} as const; 