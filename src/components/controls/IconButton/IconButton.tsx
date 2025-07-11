import React from 'react';
import { colors } from '../../../tokens/colors';
import { spacing, touchTarget } from '../../../tokens/spacing';
import { Icon, IconName } from '../../foundations/Icon/Icon';

export interface IconButtonProps {
  /**
   * Icon name from the AOK icon library
   */
  icon: IconName;
  
  /**
   * Button variant style
   */
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  
  /**
   * Button size - affects both button and icon size
   */
  size?: 'small' | 'medium' | 'large';
  
  /**
   * Button shape
   */
  shape?: 'circle' | 'square' | 'rounded';
  
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
   * Accessibility label (required for screen readers)
   */
  'aria-label': string;
  
  /**
   * Additional CSS class
   */
  className?: string;
  
  /**
   * HTML button type
   */
  type?: 'button' | 'submit' | 'reset';
}

export const IconButton: React.FC<IconButtonProps> = ({
  icon,
  variant = 'primary',
  size = 'medium',
  shape = 'circle',
  disabled = false,
  loading = false,
  darkMode = false,
  onClick,
  'aria-label': ariaLabel,
  className = '',
  type = 'button',
  ...props
}) => {
  const theme = darkMode ? colors.dark : colors.light;
  
  const getSizeStyles = () => {
    const sizeMap = {
      small: {
        buttonSize: touchTarget.minimum, // 44px
        iconSize: 'small' as const,
        padding: spacing.sm,
      },
      medium: {
        buttonSize: touchTarget.comfortable, // 48px
        iconSize: 'medium' as const,
        padding: spacing.md,
      },
      large: {
        buttonSize: touchTarget.large, // 56px
        iconSize: 'large' as const,
        padding: spacing.lg,
      },
    };
    
    return sizeMap[size];
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
          backgroundColor: disabled ? theme.border.primary : colors.primary.main,
          color: '#FFFFFF',
        };
        
      case 'secondary':
        return {
          ...baseStyles,
          backgroundColor: disabled ? theme.border.primary : theme.background.secondary,
          color: theme.text.primary,
          border: `1px solid ${theme.border.primary}`,
        };
        
      case 'ghost':
        return {
          ...baseStyles,
          backgroundColor: 'transparent',
          color: theme.text.primary,
        };
        
      case 'outline':
        return {
          ...baseStyles,
          backgroundColor: 'transparent',
          color: colors.primary.main,
          border: `1px solid ${colors.primary.main}`,
        };
        
      default:
        return baseStyles;
    }
  };

  const getShapeStyles = () => {
    const { buttonSize } = getSizeStyles();
    
    const baseShape = {
      width: buttonSize,
      height: buttonSize,
      minWidth: buttonSize,
      minHeight: buttonSize,
    };

    switch (shape) {
      case 'circle':
        return {
          ...baseShape,
          borderRadius: '50%',
        };
        
      case 'square':
        return {
          ...baseShape,
          borderRadius: '4px',
        };
        
      case 'rounded':
        return {
          ...baseShape,
          borderRadius: '12px',
        };
        
      default:
        return baseShape;
    }
  };

  const getButtonStyles = (): React.CSSProperties => {
    return {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      ...getVariantStyles(),
      ...getShapeStyles(),
    };
  };

  const { iconSize } = getSizeStyles();

  return (
    <button
      style={getButtonStyles()}
      className={className}
      disabled={disabled || loading}
      onClick={onClick}
      aria-label={ariaLabel}
      type={type}
      {...props}
    >
      {loading ? (
        // Simple loading spinner using CSS animation
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