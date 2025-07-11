/**
 * AOK Design System - Spacing Tokens
 * 
 * Consistent spacing system derived from Figma layout patterns
 * Optimized for mobile touch targets and visual hierarchy
 */

// Base spacing unit (8px grid system)
const BASE_UNIT = 8;

export const spacing = {
  // Micro spacing (0-16px)
  none: '0px',
  xs: '4px',    // 0.5 * BASE_UNIT
  sm: '8px',    // 1 * BASE_UNIT
  
  // Small spacing (16-32px)
  md: '16px',   // 2 * BASE_UNIT
  lg: '24px',   // 3 * BASE_UNIT
  xl: '32px',   // 4 * BASE_UNIT
  
  // Medium spacing (40-64px)
  '2xl': '40px', // 5 * BASE_UNIT
  '3xl': '48px', // 6 * BASE_UNIT  
  '4xl': '56px', // 7 * BASE_UNIT
  '5xl': '64px', // 8 * BASE_UNIT
  
  // Large spacing (72-96px) - observed in Figma layouts
  '6xl': '72px', // 9 * BASE_UNIT
  '7xl': '80px', // 10 * BASE_UNIT
  '8xl': '96px', // 12 * BASE_UNIT - prominent gap value from Figma
} as const;

// Component-specific spacing
export const componentSpacing = {
  // Button padding
  button: {
    horizontal: spacing.md,
    vertical: spacing.sm,
    icon: spacing.xs,
  },
  
  // Card padding - observed from Figma card components
  card: {
    padding: spacing['6xl'], // 96px from Figma layouts
    gap: spacing['4xl'],     // 56px gap observed in content
  },
  
  // List item spacing
  listItem: {
    padding: spacing.md,
    gap: spacing.sm,
  },
  
  // Input field spacing
  input: {
    horizontal: spacing.md,
    vertical: spacing.sm,
    gap: spacing.xs,
  },
  
  // Navigation spacing
  navigation: {
    padding: spacing.lg,
    gap: spacing.md,
  },
  
  // Container spacing - based on Figma canvas layouts
  container: {
    horizontal: spacing['6xl'], // 96px horizontal padding from Figma
    vertical: spacing['5xl'],   // 64px vertical spacing
    section: spacing['6xl'],    // 96px section gaps
  },
} as const;

// Mobile touch target sizes (minimum 44px as per accessibility guidelines)
export const touchTarget = {
  minimum: '44px',
  comfortable: '48px',
  large: '56px',
} as const;

// Border radius values
export const borderRadius = {
  none: '0px',
  sm: '4px',
  md: '8px',
  lg: '12px',
  xl: '16px',
  '2xl': '24px',   // Card radius observed in Figma
  '3xl': '40px',   // Large container radius from Figma
  full: '9999px',  // Circular elements
} as const;

// CSS Custom Properties for Spacing
export const spacingCSSVariables = {
  '--spacing-none': spacing.none,
  '--spacing-xs': spacing.xs,
  '--spacing-sm': spacing.sm,
  '--spacing-md': spacing.md,
  '--spacing-lg': spacing.lg,
  '--spacing-xl': spacing.xl,
  '--spacing-2xl': spacing['2xl'],
  '--spacing-3xl': spacing['3xl'],
  '--spacing-4xl': spacing['4xl'],
  '--spacing-5xl': spacing['5xl'],
  '--spacing-6xl': spacing['6xl'],
  '--spacing-7xl': spacing['7xl'],
  '--spacing-8xl': spacing['8xl'],
  
  '--border-radius-sm': borderRadius.sm,
  '--border-radius-md': borderRadius.md,
  '--border-radius-lg': borderRadius.lg,
  '--border-radius-xl': borderRadius.xl,
  '--border-radius-2xl': borderRadius['2xl'],
  '--border-radius-3xl': borderRadius['3xl'],
  
  '--touch-target-minimum': touchTarget.minimum,
  '--touch-target-comfortable': touchTarget.comfortable,
  '--touch-target-large': touchTarget.large,
} as const;

// Utility function to get spacing values
export const getSpacing = (key: keyof typeof spacing) => spacing[key];

// Utility function to calculate custom spacing based on base unit
export const customSpacing = (multiplier: number) => `${BASE_UNIT * multiplier}px`; 