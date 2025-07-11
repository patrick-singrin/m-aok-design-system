import React from 'react';
import { colors } from '../../../tokens/colors';
import { typography } from '../../../tokens/typography';
import { spacing, touchTarget } from '../../../tokens/spacing';
import { Icon, IconName } from '../../foundations/Icon/Icon';
import { IconButton } from '../../controls/IconButton/IconButton';

export interface ListItemProps {
  /**
   * List item variant
   */
  variant?: 'basic' | 'with-icon' | 'with-actions' | 'with-avatar' | 'with-description';
  
  /**
   * Primary text content
   */
  title: string;
  
  /**
   * Secondary text content
   */
  subtitle?: string;
  
  /**
   * Description text (for with-description variant)
   */
  description?: string;
  
  /**
   * Left icon
   */
  leftIcon?: IconName;
  
  /**
   * Avatar image source
   */
  avatarSrc?: string;
  
  /**
   * Avatar alt text
   */
  avatarAlt?: string;
  
  /**
   * Right icon
   */
  rightIcon?: IconName;
  
  /**
   * Action buttons for the item
   */
  actions?: Array<{
    icon: IconName;
    label: string;
    onClick: () => void;
    variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  }>;
  
  /**
   * Click handler for the entire item
   */
  onClick?: () => void;
  
  /**
   * Disabled state
   */
  disabled?: boolean;
  
  /**
   * Selected state
   */
  selected?: boolean;
  
  /**
   * Dark mode support
   */
  darkMode?: boolean;
  
  /**
   * Show divider after item
   */
  showDivider?: boolean;
  
  /**
   * Additional CSS class
   */
  className?: string;
}

export const ListItem: React.FC<ListItemProps> = ({
  variant = 'basic',
  title,
  subtitle,
  description,
  leftIcon,
  avatarSrc,
  avatarAlt,
  rightIcon,
  actions,
  onClick,
  disabled = false,
  selected = false,
  darkMode = false,
  showDivider = true,
  className = '',
}) => {
  const theme = darkMode ? colors.dark : colors.light;
  
  const getItemStyles = (): React.CSSProperties => {
    return {
      display: 'flex',
      alignItems: 'center',
      padding: `${spacing.md} ${spacing.lg}`,
      minHeight: touchTarget.large, // 56px minimum
      backgroundColor: selected ? `${colors.primary.main}10` : theme.background.primary,
      borderLeft: selected ? `3px solid ${colors.primary.main}` : '3px solid transparent',
      cursor: onClick && !disabled ? 'pointer' : 'default',
      opacity: disabled ? 0.6 : 1,
      transition: 'all 0.2s ease-in-out',
      borderBottom: showDivider ? `1px solid ${theme.border.primary}` : 'none',
      position: 'relative',
    };
  };

  const getContentStyles = (): React.CSSProperties => {
    return {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      gap: spacing.xs,
      marginLeft: (leftIcon || avatarSrc) ? spacing.md : 0,
      marginRight: (rightIcon || actions) ? spacing.md : 0,
    };
  };

  const getTitleStyles = (): React.CSSProperties => {
    return {
      margin: 0,
      fontSize: typography.body.medium.fontSize,
      fontWeight: typography.title.medium.fontWeight,
      lineHeight: typography.body.medium.lineHeight,
      color: theme.text.primary,
      fontFamily: typography.title.medium.fontFamily,
    };
  };

  const getSubtitleStyles = (): React.CSSProperties => {
    return {
      margin: 0,
      fontSize: typography.body.small.fontSize,
      fontWeight: typography.body.small.fontWeight,
      lineHeight: typography.body.small.lineHeight,
      color: theme.text.secondary,
      fontFamily: typography.body.small.fontFamily,
    };
  };

  const getDescriptionStyles = (): React.CSSProperties => {
    return {
      margin: 0,
      fontSize: typography.body.small.fontSize,
      fontWeight: typography.body.small.fontWeight,
      lineHeight: typography.body.small.lineHeight,
      color: theme.text.secondary,
      fontFamily: typography.body.small.fontFamily,
    };
  };

  const getAvatarStyles = (): React.CSSProperties => {
    return {
      width: '40px',
      height: '40px',
      borderRadius: '50%',
      objectFit: 'cover',
      flexShrink: 0,
    };
  };

  const renderLeftElement = () => {
    if (avatarSrc) {
      return (
        <img
          src={avatarSrc}
          alt={avatarAlt || 'Avatar'}
          style={getAvatarStyles()}
        />
      );
    }
    
    if (leftIcon) {
      return (
        <Icon
          name={leftIcon}
          size="medium"
          color="inherit"
          darkMode={darkMode}
        />
      );
    }
    
    return null;
  };

  const renderRightElement = () => {
    if (actions && actions.length > 0) {
      return (
        <div style={{ display: 'flex', gap: spacing.xs }}>
          {actions.map((action, index) => (
            <IconButton
              key={index}
              icon={action.icon}
              variant={action.variant || 'ghost'}
              size="small"
              aria-label={action.label}
                             onClick={action.onClick}
              disabled={disabled}
              darkMode={darkMode}
            />
          ))}
        </div>
      );
    }
    
    if (rightIcon) {
      return (
        <Icon
          name={rightIcon}
          size="medium"
          color="secondary"
          darkMode={darkMode}
        />
      );
    }
    
    return null;
  };

  const renderContent = () => {
    switch (variant) {
      case 'with-description':
        return (
          <div style={getContentStyles()}>
            <h3 style={getTitleStyles()}>{title}</h3>
            {subtitle && <p style={getSubtitleStyles()}>{subtitle}</p>}
            {description && <p style={getDescriptionStyles()}>{description}</p>}
          </div>
        );
        
      default:
        return (
          <div style={getContentStyles()}>
            <h3 style={getTitleStyles()}>{title}</h3>
            {subtitle && <p style={getSubtitleStyles()}>{subtitle}</p>}
          </div>
        );
    }
  };

  return (
    <div
      style={getItemStyles()}
      className={className}
      onClick={onClick && !disabled ? onClick : undefined}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick && !disabled ? 0 : undefined}
      onKeyDown={(e) => {
        if (onClick && (e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault();
          onClick();
        }
      }}
    >
      {renderLeftElement()}
      {renderContent()}
      {renderRightElement()}
    </div>
  );
};

export interface ListProps {
  /**
   * List variant affecting styling
   */
  variant?: 'default' | 'bordered' | 'card';
  
  /**
   * List items
   */
  children: React.ReactNode;
  
  /**
   * Dark mode support
   */
  darkMode?: boolean;
  
  /**
   * Show header
   */
  header?: string;
  
  /**
   * Show footer
   */
  footer?: string;
  
  /**
   * Full width list
   */
  fullWidth?: boolean;
  
  /**
   * Additional CSS class
   */
  className?: string;
}

export const List: React.FC<ListProps> = ({
  variant = 'default',
  children,
  darkMode = false,
  header,
  footer,
  fullWidth = false,
  className = '',
}) => {
  const theme = darkMode ? colors.dark : colors.light;
  
  const getListStyles = (): React.CSSProperties => {
    const baseStyles = {
      width: fullWidth ? '100%' : 'auto',
      minWidth: '300px',
      backgroundColor: theme.background.primary,
    };

    switch (variant) {
      case 'bordered':
        return {
          ...baseStyles,
          border: `1px solid ${theme.border.primary}`,
          borderRadius: '8px',
          overflow: 'hidden',
        };
        
      case 'card':
        return {
          ...baseStyles,
          border: `1px solid ${theme.border.primary}`,
          borderRadius: '12px',
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)',
          overflow: 'hidden',
        };
        
      default:
        return baseStyles;
    }
  };

  const getHeaderStyles = (): React.CSSProperties => {
    return {
      padding: `${spacing.md} ${spacing.lg}`,
      fontSize: typography.title.small.fontSize,
      fontWeight: typography.title.small.fontWeight,
      color: theme.text.secondary,
      backgroundColor: theme.background.secondary,
      borderBottom: `1px solid ${theme.border.primary}`,
      fontFamily: typography.title.small.fontFamily,
      margin: 0,
    };
  };

  const getFooterStyles = (): React.CSSProperties => {
    return {
      padding: `${spacing.md} ${spacing.lg}`,
      fontSize: typography.body.small.fontSize,
      fontWeight: typography.body.small.fontWeight,
      color: theme.text.secondary,
      backgroundColor: theme.background.secondary,
      borderTop: `1px solid ${theme.border.primary}`,
      fontFamily: typography.body.small.fontFamily,
      margin: 0,
    };
  };

  return (
    <div style={getListStyles()} className={className}>
      {header && (
        <div style={getHeaderStyles()}>
          {header}
        </div>
      )}
      <div>
        {children}
      </div>
      {footer && (
        <div style={getFooterStyles()}>
          {footer}
        </div>
      )}
    </div>
  );
}; 