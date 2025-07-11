import React from 'react';
import { colors } from '../../../tokens/colors';

// Icon definitions based on Figma System Icons
const iconPaths = {
  // Navigation icons
  'arrow-left': 'M15.41 7.41L14 6L8 12L14 18L15.41 16.59L10.83 12Z',
  'arrow-right': 'M8.59 16.59L10 18L16 12L10 6L8.59 7.41L13.17 12Z',
  'arrow-up': 'M7.41 15.41L12 10.83L16.59 15.41L18 14L12 8L6 14Z',
  'arrow-down': 'M7.41 8.59L12 13.17L16.59 8.59L18 10L12 16L6 10Z',
  
  // Action icons
  'close': 'M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12Z',
  'add': 'M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z',
  'edit': 'M3 17.25V21H6.75L17.81 9.94L14.06 6.19L3 17.25ZM20.71 7.04C21.1 6.65 21.1 6.02 20.71 5.63L18.37 3.29C17.98 2.9 17.35 2.9 16.96 3.29L15.13 5.12L18.88 8.87L20.71 7.04Z',
  'delete': 'M6 19C6 20.1 6.9 21 8 21H16C17.1 21 18 20.1 18 19V7H6V19ZM19 4H15.5L14.5 3H9.5L8.5 4H5V6H19V4Z',
  'filter': 'M10 18H14V16H10V18ZM3 6V8H21V6H3ZM6 13H18V11H6V13Z',
  'search': 'M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3S3 5.91 3 9.5S5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14Z',
  'more-vertical': 'M12 8C13.1 8 14 7.1 14 6C14 4.9 13.1 4 12 4C10.9 4 10 4.9 10 6C10 7.1 10.9 8 12 8ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10ZM12 16C10.9 16 10 16.9 10 18C10 19.1 10.9 20 12 20C13.1 20 14 19.1 14 18C14 16.9 13.1 16 12 16Z',
  'more-horizontal': 'M6 10C4.9 10 4 10.9 4 12C4 13.1 4.9 14 6 14C7.1 14 8 13.1 8 12C8 10.9 7.1 10 6 10ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10ZM18 10C16.9 10 16 10.9 16 12C16 13.1 16.9 14 18 14C19.1 14 20 13.1 20 12C20 10.9 19.1 10 18 10Z',
  
  // Communication icons
  'check': 'M9 16.17L4.83 12L3.41 13.41L9 19L21 7L19.59 5.59Z',
  'info': 'M12 2C6.48 2 2 6.48 2 12S6.48 22 12 22S22 17.52 22 12S17.52 2 12 2ZM13 17H11V11H13V17ZM13 9H11V7H13V9Z',
  'warning': 'M1 21H23L12 2L1 21ZM13 18H11V16H13V18ZM13 14H11V10H13V14Z',
  'error': 'M12 2C6.48 2 2 6.48 2 12S6.48 22 12 22S22 17.52 22 12S17.52 2 12 2ZM13 17H11V15H11V17ZM13 13H11V7H13V13Z',
  
  // User & Account icons
  'user': 'M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z',
  'settings': 'M19.14 12.94C19.18 12.64 19.2 12.33 19.2 12C19.2 11.68 19.18 11.36 19.14 11.06L20.77 9.8C20.9 9.69 20.93 9.5 20.84 9.34L19.3 6.66C19.21 6.5 19.02 6.44 18.86 6.5L16.95 7.27C16.58 6.98 16.17 6.74 15.73 6.55L15.42 4.5C15.4 4.32 15.25 4.18 15.07 4.18H12.93C12.75 4.18 12.6 4.32 12.58 4.5L12.27 6.55C11.83 6.74 11.42 6.98 11.05 7.27L9.14 6.5C8.98 6.44 8.79 6.5 8.7 6.66L7.16 9.34C7.07 9.5 7.1 9.69 7.23 9.8L8.86 11.06C8.82 11.36 8.8 11.68 8.8 12C8.8 12.33 8.82 12.64 8.86 12.94L7.23 14.2C7.1 14.31 7.07 14.5 7.16 14.66L8.7 17.34C8.79 17.5 8.98 17.56 9.14 17.5L11.05 16.73C11.42 17.02 11.83 17.26 12.27 17.45L12.58 19.5C12.6 19.68 12.75 19.82 12.93 19.82H15.07C15.25 19.82 15.4 19.68 15.42 19.5L15.73 17.45C16.17 17.26 16.58 17.02 16.95 16.73L18.86 17.5C19.02 17.56 19.21 17.5 19.3 17.34L20.84 14.66C20.93 14.5 20.9 14.31 20.77 14.2L19.14 12.94ZM14 15.6C12.02 15.6 10.4 13.98 10.4 12C10.4 10.02 12.02 8.4 14 8.4C15.98 8.4 17.6 10.02 17.6 12C17.6 13.98 15.98 15.6 14 15.6Z',
  
  // Media icons
  'camera': 'M9 2L7.17 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4H16.83L15 2H9ZM12 17C9.24 17 7 14.76 7 12C7 9.24 9.24 7 12 7C14.76 7 17 9.24 17 12C17 14.76 14.76 17 12 17ZM12 9C10.34 9 9 10.34 9 12C9 13.66 10.34 15 12 15C13.66 15 15 13.66 15 12C15 10.34 13.66 9 12 9Z',
  'image': 'M21 19V5C21 3.9 20.1 3 19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19ZM8.5 13.5L11 16.51L14.5 12L19 18H5L8.5 13.5Z',
  
  // Communication & Social icons
  'heart': 'M12 21.35L10.55 20.03C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5C22 12.28 18.6 15.36 13.45 20.04L12 21.35Z',
  'share': 'M18 16.08C17.24 16.08 16.56 16.38 16.04 16.85L8.91 12.7C8.96 12.47 9 12.24 9 12C9 11.76 8.96 11.53 8.91 11.3L15.96 7.19C16.5 7.69 17.21 8 18 8C19.66 8 21 6.66 21 5C21 3.34 19.66 2 18 2C16.34 2 15 3.34 15 5C15 5.24 15.04 5.47 15.09 5.7L8.04 9.81C7.5 9.31 6.79 9 6 9C4.34 9 3 10.34 3 12C3 13.66 4.34 15 6 15C6.79 15 7.5 14.69 8.04 14.19L15.16 18.34C15.11 18.55 15.08 18.77 15.08 19C15.08 20.61 16.39 21.92 18 21.92C19.61 21.92 20.92 20.61 20.92 19C20.92 17.39 19.61 16.08 18 16.08Z',
};

export type IconName = keyof typeof iconPaths;

export interface IconProps {
  /**
   * Icon name from the AOK icon library
   */
  name: IconName;
  
  /**
   * Icon size - matches Figma sizing
   */
  size?: 'small' | 'medium' | 'large';
  
  /**
   * Icon color - uses design tokens
   */
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'inherit';
  
  /**
   * Dark mode support
   */
  darkMode?: boolean;
  
  /**
   * Custom size in pixels (overrides size prop)
   */
  customSize?: number;
  
  /**
   * Custom color (overrides color prop)
   */
  customColor?: string;
  
  /**
   * Additional CSS class
   */
  className?: string;
  
  /**
   * Click handler
   */
  onClick?: () => void;
  
  /**
   * Accessibility label
   */
  'aria-label'?: string;
}

export const Icon: React.FC<IconProps> = ({
  name,
  size = 'medium',
  color = 'inherit',
  darkMode = false,
  customSize,
  customColor,
  className = '',
  onClick,
  'aria-label': ariaLabel,
  ...props
}) => {
  const theme = darkMode ? colors.dark : colors.light;
  
  const getSizeValue = () => {
    if (customSize) return customSize;
    
    switch (size) {
      case 'small': return 16;
      case 'medium': return 24;
      case 'large': return 32;
      default: return 24;
    }
  };

  const getColorValue = () => {
    if (customColor) return customColor;
    
    switch (color) {
      case 'primary': return colors.primary.main;
      case 'secondary': return theme.text.secondary;
      case 'success': return colors.semantic.success;
      case 'warning': return colors.semantic.warning;
      case 'error': return colors.semantic.error;
      case 'inherit': return 'currentColor';
      default: return 'currentColor';
    }
  };

  const iconSize = getSizeValue();
  const iconColor = getColorValue();
  const pathData = iconPaths[name];

  if (!pathData) {
    console.warn(`Icon "${name}" not found in AOK icon library`);
    return null;
  }

  const iconStyles: React.CSSProperties = {
    width: iconSize,
    height: iconSize,
    fill: iconColor,
    cursor: onClick ? 'pointer' : 'default',
    transition: 'fill 0.2s ease',
    flexShrink: 0,
  };

  return (
    <svg
      style={iconStyles}
      viewBox="0 0 24 24"
      className={className}
      onClick={onClick}
      aria-label={ariaLabel || name}
      role={onClick ? 'button' : 'img'}
      {...props}
    >
      <path d={pathData} />
    </svg>
  );
};

// Export icon names for TypeScript autocomplete
export const iconNames: IconName[] = Object.keys(iconPaths) as IconName[];

// Utility function to check if an icon exists
export const hasIcon = (name: string): name is IconName => {
  return name in iconPaths;
}; 