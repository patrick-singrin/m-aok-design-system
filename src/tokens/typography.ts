/**
 * AOK Design System - Typography Tokens
 * 
 * Typography system based on AOK Buenos Aires Text from Figma
 * Optimized for mobile applications (Android & iOS)
 */

// Font Family
export const fontFamily = {
  primary: '"AOK Buenos Aires Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  fallback: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
} as const;

// Font Weights
export const fontWeight = {
  regular: 400,
  semibold: 600,
} as const;

// Typography Scale - Mobile Optimized
export const typography = {
  // Display styles
  display: {
    large: {
      fontFamily: fontFamily.primary,
      fontSize: '32px',
      lineHeight: '40px',
      fontWeight: fontWeight.semibold,
      letterSpacing: '-0.5px',
    },
    medium: {
      fontFamily: fontFamily.primary,
      fontSize: '28px',
      lineHeight: '36px',
      fontWeight: fontWeight.semibold,
      letterSpacing: '-0.25px',
    },
    small: {
      fontFamily: fontFamily.primary,
      fontSize: '24px',
      lineHeight: '32px',
      fontWeight: fontWeight.semibold,
      letterSpacing: '0px',
    },
  },

  // Headline styles
  headline: {
    large: {
      fontFamily: fontFamily.primary,
      fontSize: '22px',
      lineHeight: '28px',
      fontWeight: fontWeight.semibold,
      letterSpacing: '0px',
    },
    medium: {
      fontFamily: fontFamily.primary,
      fontSize: '20px',
      lineHeight: '26px',
      fontWeight: fontWeight.semibold,
      letterSpacing: '0px',
    },
    small: {
      fontFamily: fontFamily.primary,
      fontSize: '18px',
      lineHeight: '24px',
      fontWeight: fontWeight.semibold,
      letterSpacing: '0px',
    },
  },

  // Title styles
  title: {
    large: {
      fontFamily: fontFamily.primary,
      fontSize: '18px',
      lineHeight: '24px',
      fontWeight: fontWeight.semibold,
      letterSpacing: '0px',
    },
    medium: {
      fontFamily: fontFamily.primary,
      fontSize: '16px',
      lineHeight: '22px',
      fontWeight: fontWeight.semibold,
      letterSpacing: '0.15px',
    },
    small: {
      fontFamily: fontFamily.primary,
      fontSize: '14px',
      lineHeight: '20px',
      fontWeight: fontWeight.semibold,
      letterSpacing: '0.1px',
    },
  },

  // Body text styles
  body: {
    large: {
      fontFamily: fontFamily.primary,
      fontSize: '16px',
      lineHeight: '24px',
      fontWeight: fontWeight.regular,
      letterSpacing: '0.15px',
    },
    medium: {
      fontFamily: fontFamily.primary,
      fontSize: '14px',
      lineHeight: '20px',
      fontWeight: fontWeight.regular,
      letterSpacing: '0.25px',
    },
    small: {
      fontFamily: fontFamily.primary,
      fontSize: '12px',
      lineHeight: '16px',
      fontWeight: fontWeight.regular,
      letterSpacing: '0.4px',
    },
  },

  // Label styles (for buttons, form labels, etc.)
  label: {
    large: {
      fontFamily: fontFamily.primary,
      fontSize: '14px',
      lineHeight: '20px',
      fontWeight: fontWeight.semibold,
      letterSpacing: '0.1px',
    },
    medium: {
      fontFamily: fontFamily.primary,
      fontSize: '12px',
      lineHeight: '16px',
      fontWeight: fontWeight.semibold,
      letterSpacing: '0.5px',
    },
    small: {
      fontFamily: fontFamily.primary,
      fontSize: '10px',
      lineHeight: '14px',
      fontWeight: fontWeight.semibold,
      letterSpacing: '0.8px',
      textTransform: 'uppercase' as const,
    },
  },
} as const;

// CSS Custom Properties for Typography
export const typographyCSSVariables = {
  '--font-family-primary': fontFamily.primary,
  '--font-family-fallback': fontFamily.fallback,
  '--font-weight-regular': fontWeight.regular.toString(),
  '--font-weight-semibold': fontWeight.semibold.toString(),
  
  // Display
  '--typography-display-large-size': typography.display.large.fontSize,
  '--typography-display-large-height': typography.display.large.lineHeight,
  '--typography-display-large-weight': typography.display.large.fontWeight.toString(),
  
  // Headlines
  '--typography-headline-large-size': typography.headline.large.fontSize,
  '--typography-headline-large-height': typography.headline.large.lineHeight,
  '--typography-headline-large-weight': typography.headline.large.fontWeight.toString(),
  
  // Body
  '--typography-body-large-size': typography.body.large.fontSize,
  '--typography-body-large-height': typography.body.large.lineHeight,
  '--typography-body-large-weight': typography.body.large.fontWeight.toString(),
  
  '--typography-body-medium-size': typography.body.medium.fontSize,
  '--typography-body-medium-height': typography.body.medium.lineHeight,
  '--typography-body-medium-weight': typography.body.medium.fontWeight.toString(),
} as const;

// Typography utility function
export const getTypographyStyle = (variant: string, size: string) => {
  const style = (typography as any)[variant]?.[size];
  return style || typography.body.medium;
}; 