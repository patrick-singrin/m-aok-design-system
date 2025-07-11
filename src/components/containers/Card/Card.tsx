import React from 'react';
import { colors } from '../../../tokens/colors';
import { typography } from '../../../tokens/typography';
import { spacing, touchTarget } from '../../../tokens/spacing';

export interface CardProps {
  /**
   * Card variant determines layout and styling
   */
  variant?: 'base' | 'content' | 'info' | 'action';
  
  /**
   * Elevation level for shadow depth
   */
  elevation?: 'none' | 'low' | 'medium' | 'high';
  
  /**
   * Card content
   */
  children?: React.ReactNode;
  
  /**
   * Card title
   */
  title?: string;
  
  /**
   * Card subtitle or description
   */
  subtitle?: string;
  
  /**
   * Image source for content cards
   */
  imageSrc?: string;
  
  /**
   * Image alt text
   */
  imageAlt?: string;
  
  /**
   * Action button text
   */
  actionText?: string;
  
  /**
   * Secondary action text
   */
  secondaryActionText?: string;
  
  /**
   * Icon for info cards
   */
  icon?: React.ReactNode;
  
  /**
   * Click handlers
   */
  onCardClick?: () => void;
  onActionClick?: () => void;
  onSecondaryActionClick?: () => void;
  
  /**
   * Dark mode support
   */
  darkMode?: boolean;
  
  /**
   * Disable card interactions
   */
  disabled?: boolean;
  
  /**
   * Make card full width
   */
  fullWidth?: boolean;
  
  /**
   * Custom padding
   */
  padding?: 'none' | 'small' | 'medium' | 'large';
  
  /**
   * Additional CSS class
   */
  className?: string;
}

export const Card: React.FC<CardProps> = ({
  variant = 'base',
  elevation = 'low',
  children,
  title,
  subtitle,
  imageSrc,
  imageAlt,
  actionText,
  secondaryActionText,
  icon,
  onCardClick,
  onActionClick,
  onSecondaryActionClick,
  darkMode = false,
  disabled = false,
  fullWidth = false,
  padding = 'medium',
  className = '',
}) => {
  const theme = darkMode ? colors.dark : colors.light;
  
  const getElevationStyles = (): React.CSSProperties => {
    const elevationMap = {
      none: { boxShadow: 'none' },
      low: { boxShadow: '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)' },
      medium: { boxShadow: '0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)' },
      high: { boxShadow: '0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23)' },
    };
    
    return elevationMap[elevation];
  };

  const getPaddingValue = () => {
    const paddingMap = {
      none: '0',
      small: spacing.sm,
      medium: spacing.lg,
      large: spacing.xl,
    };
    
    return paddingMap[padding];
  };

  const getCardStyles = (): React.CSSProperties => {
    return {
      backgroundColor: theme.background.primary,
      borderRadius: '12px',
      border: `1px solid ${theme.border.primary}`,
      width: fullWidth ? '100%' : 'auto',
      maxWidth: fullWidth ? '100%' : '400px',
      overflow: 'hidden',
      transition: 'all 0.2s ease-in-out',
      cursor: onCardClick && !disabled ? 'pointer' : 'default',
      opacity: disabled ? 0.6 : 1,
      pointerEvents: disabled ? 'none' : 'auto',
      ...getElevationStyles(),
      // Hover effects for interactive cards
      ...(onCardClick && !disabled && {
        ':hover': {
          transform: 'translateY(-2px)',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.12), 0 2px 4px rgba(0, 0, 0, 0.08)',
        },
      }),
    };
  };

  const getContentStyles = (): React.CSSProperties => {
    return {
      padding: getPaddingValue(),
      display: 'flex',
      flexDirection: 'column',
      gap: spacing.sm,
    };
  };

  const getButtonStyles = (isPrimary: boolean = true): React.CSSProperties => {
    return {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: `${spacing.sm} ${spacing.lg}`,
      borderRadius: '8px',
      border: isPrimary ? 'none' : `1px solid ${colors.primary.main}`,
      backgroundColor: isPrimary ? colors.primary.main : 'transparent',
      color: isPrimary ? '#FFFFFF' : colors.primary.main,
      fontSize: typography.body.medium.fontSize,
      fontWeight: typography.title.medium.fontWeight,
      fontFamily: typography.title.medium.fontFamily,
      minHeight: touchTarget.minimum,
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      flex: 1,
    };
  };

  const renderImage = () => {
    if (!imageSrc) return null;
    
    return (
      <div style={{ width: '100%', height: '200px', overflow: 'hidden' }}>
        <img
          src={imageSrc}
          alt={imageAlt || 'Card image'}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
          }}
        />
      </div>
    );
  };

  const renderHeader = () => {
    if (!title && !icon) return null;
    
    return (
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: spacing.sm }}>
        {icon && (
          <div style={{ 
            flexShrink: 0, 
            marginTop: '2px' // Align with text baseline
          }}>
            {icon}
          </div>
        )}
        <div style={{ flex: 1 }}>
          {title && (
            <h3
              style={{
                margin: 0,
                fontSize: typography.title.medium.fontSize,
                fontWeight: typography.title.medium.fontWeight,
                lineHeight: typography.title.medium.lineHeight,
                color: theme.text.primary,
              }}
            >
              {title}
            </h3>
          )}
          {subtitle && (
            <p
              style={{
                margin: `${spacing.xs} 0 0 0`,
                fontSize: typography.body.small.fontSize,
                fontWeight: typography.body.small.fontWeight,
                lineHeight: typography.body.small.lineHeight,
                color: theme.text.secondary,
              }}
            >
              {subtitle}
            </p>
          )}
        </div>
      </div>
    );
  };

  const renderActions = () => {
    if (!actionText && !secondaryActionText) return null;
    
    return (
      <div style={{ 
        display: 'flex', 
        gap: spacing.sm,
        marginTop: spacing.sm,
      }}>
        {secondaryActionText && (
          <button
            style={getButtonStyles(false)}
            onClick={onSecondaryActionClick}
          >
            {secondaryActionText}
          </button>
        )}
        {actionText && (
          <button
            style={getButtonStyles(true)}
            onClick={onActionClick}
          >
            {actionText}
          </button>
        )}
      </div>
    );
  };

  const renderContent = () => {
    switch (variant) {
      case 'content':
        return (
          <>
            {renderImage()}
            <div style={getContentStyles()}>
              {renderHeader()}
              {children}
              {renderActions()}
            </div>
          </>
        );
        
      case 'info':
        return (
          <div style={getContentStyles()}>
            {renderHeader()}
            {children}
            {renderActions()}
          </div>
        );
        
      case 'action':
        return (
          <div style={getContentStyles()}>
            {renderHeader()}
            {children}
            {renderActions()}
          </div>
        );
        
      case 'base':
      default:
        return (
          <div style={getContentStyles()}>
            {children}
          </div>
        );
    }
  };

  return (
    <div
      style={getCardStyles()}
      className={className}
      onClick={onCardClick}
      role={onCardClick ? 'button' : undefined}
      tabIndex={onCardClick && !disabled ? 0 : undefined}
      onKeyDown={(e) => {
        if (onCardClick && (e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault();
          onCardClick();
        }
      }}
    >
      {renderContent()}
    </div>
  );
}; 