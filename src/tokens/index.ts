/**
 * AOK Design System - Design Tokens
 * 
 * Central export for all design tokens
 */

export * from './colors';
export * from './typography';
export * from './spacing';

// Theme utility
export const createTheme = (mode: 'light' | 'dark') => {
  return {
    mode,
    // Add theme-specific utilities here
  };
}; 