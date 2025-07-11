import React, { useEffect, useState } from 'react';
import { colors } from '../../../tokens/colors';
import { typography } from '../../../tokens/typography';
import { spacing, touchTarget } from '../../../tokens/spacing';
import { Icon, IconName } from '../../foundations/Icon/Icon';

export interface SnackbarAction {
  /**
   * Action label
   */
  label: string;
  
  /**
   * Action click handler
   */
  onClick: () => void;
  
  /**
   * Action button variant
   */
  variant?: 'text' | 'outlined';
}

export interface SnackbarProps {
  /**
   * Snackbar message
   */
  message: string;
  
  /**
   * Snackbar variant
   */
  variant?: 'default' | 'success' | 'warning' | 'error' | 'info';
  
  /**
   * Position on screen
   */
  position?: 'top' | 'bottom' | 'top-center' | 'bottom-center';
  
  /**
   * Show/hide state
   */
  open: boolean;
  
  /**
   * Auto-hide duration in milliseconds (0 = no auto-hide)
   */
  autoHideDuration?: number;
  
  /**
   * Action button
   */
  action?: SnackbarAction;
  
  /**
   * Show close button
   */
  showCloseButton?: boolean;
  
  /**
   * Icon to display
   */
  icon?: IconName;
  
  /**
   * Dark mode support
   */
  darkMode?: boolean;
  
  /**
   * Close handler
   */
  onClose?: () => void;
  
  /**
   * Additional CSS class
   */
  className?: string;
}

export const Snackbar: React.FC<SnackbarProps> = ({
  message,
  variant = 'default',
  position = 'bottom',
  open,
  autoHideDuration = 6000,
  action,
  showCloseButton = false,
  icon,
  darkMode = false,
  onClose,
  className = '',
}) => {
  const [visible, setVisible] = useState(open);
  const [animating, setAnimating] = useState(false);
  const theme = darkMode ? colors.dark : colors.light;

  useEffect(() => {
    if (open) {
      setVisible(true);
      setAnimating(true);
      
      if (autoHideDuration > 0) {
        const timer = setTimeout(() => {
          handleClose();
        }, autoHideDuration);
        
        return () => clearTimeout(timer);
      }
    } else {
      handleClose();
    }
  }, [open, autoHideDuration]);

  const handleClose = () => {
    setAnimating(false);
    setTimeout(() => {
      setVisible(false);
      onClose?.();
    }, 300); // Animation duration
  };

  const getVariantStyles = (): React.CSSProperties => {
    const baseStyles = {
      backgroundColor: theme.background.primary,
      color: theme.text.primary,
      border: `1px solid ${theme.border.primary}`,
    };

    switch (variant) {
      case 'success':
        return {
          backgroundColor: '#E8F5E8',
          color: '#2E7D32',
          border: '1px solid #4CAF50',
        };
        
      case 'warning':
        return {
          backgroundColor: '#FFF3E0',
          color: '#F57C00',
          border: '1px solid #FF9800',
        };
        
      case 'error':
        return {
          backgroundColor: '#FFEBEE',
          color: '#C62828',
          border: '1px solid #F44336',
        };
        
      case 'info':
        return {
          backgroundColor: '#E3F2FD',
          color: '#1565C0',
          border: '1px solid #2196F3',
        };
        
      default:
        return baseStyles;
    }
  };

  const getPositionStyles = (): React.CSSProperties => {
    const basePositionStyles = {
      position: 'fixed' as const,
      zIndex: 1400,
      left: spacing.md,
      right: spacing.md,
      maxWidth: 'calc(100vw - 32px)',
    };

    switch (position) {
      case 'top':
        return {
          ...basePositionStyles,
          top: spacing.md,
        };
        
      case 'top-center':
        return {
          position: 'fixed' as const,
          zIndex: 1400,
          top: spacing.md,
          left: '50%',
          transform: 'translateX(-50%)',
          maxWidth: '600px',
        };
        
      case 'bottom-center':
        return {
          position: 'fixed' as const,
          zIndex: 1400,
          bottom: spacing.md,
          left: '50%',
          transform: 'translateX(-50%)',
          maxWidth: '600px',
        };
        
      default: // bottom
        return {
          ...basePositionStyles,
          bottom: spacing.md,
        };
    }
  };

  const getSnackbarStyles = (): React.CSSProperties => {
    return {
      ...getVariantStyles(),
      ...getPositionStyles(),
      display: 'flex',
      alignItems: 'flex-start',
      gap: spacing.sm,
      padding: spacing.md,
      borderRadius: '8px',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
      fontFamily: typography.body.medium.fontFamily,
      fontSize: typography.body.medium.fontSize,
      lineHeight: typography.body.medium.lineHeight,
      minHeight: touchTarget.minimum, // 44px
      transform: animating 
        ? 'translateY(0) scale(1)' 
        : position.includes('top') 
          ? 'translateY(-100%) scale(0.95)' 
          : 'translateY(100%) scale(0.95)',
      opacity: animating ? 1 : 0,
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    };
  };

  const getDefaultIcon = (): IconName | undefined => {
    if (icon) return icon;
    
    switch (variant) {
      case 'success':
        return 'check';
      case 'warning':
        return 'warning';
      case 'error':
        return 'close';
      case 'info':
        return 'info';
      default:
        return undefined;
    }
  };

  const getActionButtonStyles = (actionVariant: 'text' | 'outlined' = 'text'): React.CSSProperties => {
    const baseStyles = {
      border: 'none',
      background: 'none',
      cursor: 'pointer',
      padding: `${spacing.xs} ${spacing.sm}`,
      borderRadius: '4px',
      fontFamily: typography.body.medium.fontFamily,
      fontSize: typography.body.small.fontSize,
      fontWeight: typography.title.small.fontWeight,
      minHeight: touchTarget.minimum,
      transition: 'background-color 0.2s ease-in-out',
    };

    if (actionVariant === 'outlined') {
      return {
        ...baseStyles,
        border: '1px solid currentColor',
        color: 'inherit',
      };
    }

    return {
      ...baseStyles,
      color: 'inherit',
    };
  };

  const displayIcon = getDefaultIcon();

  if (!visible) return null;

  return (
    <div style={getSnackbarStyles()} className={className} role="alert" aria-live="polite">
      {displayIcon && (
        <Icon
          name={displayIcon}
          size="small"
          color="inherit"
          darkMode={darkMode}
        />
      )}
      
      <div style={{ flex: 1, marginTop: '2px' }}>
        {message}
      </div>
      
      <div style={{ display: 'flex', alignItems: 'center', gap: spacing.xs, marginLeft: spacing.xs }}>
        {action && (
          <button
            style={getActionButtonStyles(action.variant)}
            onClick={action.onClick}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
            }}
          >
            {action.label}
          </button>
        )}
        
        {showCloseButton && (
          <button
            style={{
              border: 'none',
              background: 'none',
              cursor: 'pointer',
              padding: spacing.xs,
              borderRadius: '4px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              minWidth: touchTarget.minimum,
              minHeight: touchTarget.minimum,
              color: 'inherit',
              transition: 'background-color 0.2s ease-in-out',
            }}
            onClick={handleClose}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
            }}
            aria-label="Close"
          >
            <Icon
              name="close"
              size="small"
              color="inherit"
              darkMode={darkMode}
            />
          </button>
        )}
      </div>
    </div>
  );
}; 