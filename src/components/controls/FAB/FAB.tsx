import React from 'react';
import { colors } from '../../../tokens/colors';
import { typography } from '../../../tokens/typography';
import { spacing, touchTarget } from '../../../tokens/spacing';
import { Icon, IconName } from '../../foundations/Icon/Icon';

export interface FABProps {
  /**
   * FAB variant style
   */
  variant?: 'primary' | 'secondary' | 'surface' | 'tertiary';
  
  /**
   * FAB size
   */
  size?: 'small' | 'medium' | 'large';
  
  /**
   * Main icon for the FAB
   */
  icon: IconName;
  
  /**
   * Label text for extended FAB
   */
  label?: string;
  
  /**
   * Extended FAB (shows label alongside icon)
   */
  extended?: boolean;
  
  /**
   * Disabled state
   */
  disabled?: boolean;
  
  /**
   * Loading state
   */
  loading?: boolean;
  
  /**
   * Dark mode support
   */
  darkMode?: boolean;
  
  /**
   * Click handler
   */
  onClick?: () => void;
  
  /**
   * Position style (for absolute positioning)
   */
  position?: {
    bottom?: string;
    right?: string;
    top?: string;
    left?: string;
  };
  
  /**
   * Additional CSS class
   */
  className?: string;
  
  /**
   * Accessibility label
   */
  'aria-label'?: string;
}

export const FAB: React.FC<FABProps> = ({
  variant = 'primary',
  size = 'medium',
  icon,
  label,
  extended = false,
  disabled = false,
  loading = false,
  darkMode = false,
  onClick,
  position,
  className = '',
  'aria-label': ariaLabel,
}) => {
  const theme = darkMode ? colors.dark : colors.light;
  
  const getSizeStyles = () => {
    if (extended) {
      return {
        small: {
          height: touchTarget.minimum, // 44px
          padding: `0 ${spacing.lg}`,
          fontSize: typography.body.small.fontSize,
          iconSize: 'small' as const,
        },
        medium: {
          height: touchTarget.comfortable, // 48px
          padding: `0 ${spacing.xl}`,
          fontSize: typography.body.medium.fontSize,
          iconSize: 'medium' as const,
        },
        large: {
          height: touchTarget.large, // 56px
          padding: `0 ${spacing.xl}`,
          fontSize: typography.body.large.fontSize,
          iconSize: 'medium' as const,
        },
      };
    } else {
      return {
        small: {
          width: touchTarget.minimum, // 44px
          height: touchTarget.minimum,
          fontSize: typography.body.small.fontSize,
          iconSize: 'small' as const,
        },
        medium: {
          width: touchTarget.large, // 56px
          height: touchTarget.large,
          fontSize: typography.body.medium.fontSize,
          iconSize: 'medium' as const,
        },
        large: {
          width: '64px',
          height: '64px',
          fontSize: typography.body.large.fontSize,
          iconSize: 'large' as const,
        },
      };
    }
  };

  const getVariantStyles = (): React.CSSProperties => {
    const baseStyles = {
      border: 'none',
      cursor: disabled ? 'not-allowed' : 'pointer',
      transition: 'all 0.2s ease-in-out',
      opacity: disabled ? 0.6 : 1,
    };

    switch (variant) {
      case 'primary':
        return {
          ...baseStyles,
          backgroundColor: disabled ? theme.background.secondary : colors.primary.main,
          color: '#FFFFFF',
          boxShadow: '0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)',
        };
        
      case 'secondary':
        return {
          ...baseStyles,
          backgroundColor: disabled ? theme.background.secondary : theme.background.primary,
          color: colors.primary.main,
          border: `1px solid ${colors.primary.main}`,
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.12), 0 2px 4px rgba(0, 0, 0, 0.18)',
        };
        
      case 'surface':
        return {
          ...baseStyles,
          backgroundColor: disabled ? theme.background.secondary : theme.background.primary,
          color: theme.text.primary,
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.12), 0 2px 4px rgba(0, 0, 0, 0.18)',
        };
        
      case 'tertiary':
        return {
          ...baseStyles,
          backgroundColor: disabled ? theme.background.secondary : theme.background.tertiary,
          color: theme.text.primary,
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)',
        };
        
      default:
        return baseStyles;
    }
  };

  const getFABStyles = (): React.CSSProperties => {
    const sizeStyles = getSizeStyles()[size];
    
    const baseStyles: React.CSSProperties = {
      display: 'flex',
      alignItems: 'center',
      justifyContent: extended ? 'flex-start' : 'center',
      gap: extended && label ? spacing.sm : 0,
      borderRadius: extended ? '28px' : '50%',
      fontFamily: typography.body.medium.fontFamily,
      fontWeight: typography.title.medium.fontWeight,
      minWidth: extended ? 'auto' : sizeStyles.width,
      ...getVariantStyles(),
      ...sizeStyles,
      ...(position && { position: 'fixed', ...position }),
    };

    return baseStyles;
  };

  const { iconSize } = getSizeStyles()[size];

  return (
    <button
      style={getFABStyles()}
      className={className}
      disabled={disabled || loading}
      onClick={onClick}
      aria-label={ariaLabel || label || `${icon} action`}
    >
      {loading ? (
        // Loading spinner
        <div
          style={{
            width: iconSize === 'small' ? 16 : iconSize === 'medium' ? 20 : 24,
            height: iconSize === 'small' ? 16 : iconSize === 'medium' ? 20 : 24,
            border: '2px solid transparent',
            borderTop: '2px solid currentColor',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite',
          }}
        />
      ) : (
        <Icon
          name={icon}
          size={iconSize}
          color="inherit"
          darkMode={darkMode}
        />
      )}
      
      {extended && label && !loading && (
        <span>{label}</span>
      )}
      
      {/* Add CSS animation for loading spinner */}
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </button>
  );
}; 