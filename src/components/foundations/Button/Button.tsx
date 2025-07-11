import React from 'react';
import { colors } from '../../../tokens/colors';
import { typography } from '../../../tokens/typography';
import { spacing, borderRadius, touchTarget } from '../../../tokens/spacing';

export interface ButtonProps {
  /**
   * Button variant - mirrors Figma button types
   */
  variant?: 'primary' | 'secondary' | 'text';
  
  /**
   * Button size
   */
  size?: 'small' | 'medium' | 'large';
  
  /**
   * Button content
   */
  children: React.ReactNode;
  
  /**
   * Whether the button is disabled
   */
  disabled?: boolean;
  
  /**
   * Whether the button is in loading state
   */
  loading?: boolean;
  
  /**
   * Dark mode support - matches Figma Dark Mode property
   */
  darkMode?: boolean;
  
  /**
   * Optional icon to display
   */
  icon?: React.ReactNode;
  
  /**
   * Icon position
   */
  iconPosition?: 'left' | 'right';
  
  /**
   * Click handler
   */
  onClick?: () => void;
  
  /**
   * Full width button
   */
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  children,
  disabled = false,
  loading = false,
  darkMode = false,
  icon,
  iconPosition = 'left',
  onClick,
  fullWidth = false,
  ...props
}) => {
  const theme = darkMode ? colors.dark : colors.light;
  
  const getButtonStyles = () => {
    const baseStyles: React.CSSProperties = {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: spacing.sm,
      border: 'none',
      borderRadius: borderRadius.md,
      cursor: disabled ? 'not-allowed' : 'pointer',
      transition: 'all 0.2s ease-in-out',
      fontFamily: typography.label.large.fontFamily,
      fontWeight: typography.label.large.fontWeight,
      fontSize: typography.label.large.fontSize,
      lineHeight: typography.label.large.lineHeight,
      letterSpacing: typography.label.large.letterSpacing,
      textDecoration: 'none',
      width: fullWidth ? '100%' : 'auto',
      opacity: disabled ? 0.6 : 1,
    };

    // Size-specific styles
    const sizeStyles = {
      small: {
        padding: `${spacing.xs} ${spacing.md}`,
        minHeight: touchTarget.minimum,
        fontSize: typography.label.medium.fontSize,
      },
      medium: {
        padding: `${spacing.sm} ${spacing.lg}`,
        minHeight: touchTarget.comfortable,
      },
      large: {
        padding: `${spacing.md} ${spacing.xl}`,
        minHeight: touchTarget.large,
        fontSize: typography.label.large.fontSize,
      },
    };

    // Variant-specific styles
    const variantStyles = {
      primary: {
        backgroundColor: colors.primary.main,
        color: '#FFFFFF',
        '&:hover': {
          backgroundColor: colors.primary.dark,
        },
        '&:active': {
          backgroundColor: colors.primary.dark,
          transform: 'scale(0.98)',
        },
      },
      secondary: {
        backgroundColor: 'transparent',
        color: darkMode ? theme.text.primary : colors.primary.main,
        border: `1px solid ${colors.primary.main}`,
        '&:hover': {
          backgroundColor: colors.states.hover,
        },
        '&:active': {
          backgroundColor: colors.states.pressed,
          transform: 'scale(0.98)',
        },
      },
      text: {
        backgroundColor: 'transparent',
        color: darkMode ? theme.text.primary : colors.primary.main,
        '&:hover': {
          backgroundColor: colors.states.hover,
        },
        '&:active': {
          backgroundColor: colors.states.pressed,
          transform: 'scale(0.98)',
        },
      },
    };

    return {
      ...baseStyles,
      ...sizeStyles[size],
      ...variantStyles[variant],
    };
  };

  const renderContent = () => {
    if (loading) {
      return (
        <>
          <div
            style={{
              width: '16px',
              height: '16px',
              border: '2px solid currentColor',
              borderTop: '2px solid transparent',
              borderRadius: '50%',
              animation: 'spin 1s linear infinite',
            }}
          />
          Loading...
        </>
      );
    }

    const content = (
      <>
        {icon && iconPosition === 'left' && (
          <span style={{ display: 'flex', alignItems: 'center' }}>{icon}</span>
        )}
        {children}
        {icon && iconPosition === 'right' && (
          <span style={{ display: 'flex', alignItems: 'center' }}>{icon}</span>
        )}
      </>
    );

    return content;
  };

  return (
    <>
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
      <button
        style={getButtonStyles()}
        onClick={onClick}
        disabled={disabled || loading}
        {...props}
      >
        {renderContent()}
      </button>
    </>
  );
}; 