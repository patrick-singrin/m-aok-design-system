import React from 'react';
import { colors } from '../../../tokens/colors';
import { typography } from '../../../tokens/typography';
import { spacing, touchTarget } from '../../../tokens/spacing';

// Icon components (simplified for now - will be replaced with proper icon system)
const BackIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M15.41 7.41L14 6L8 12L14 18L15.41 16.59L10.83 12Z"/>
  </svg>
);

const CloseIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12Z"/>
  </svg>
);

const AOKLogo = ({ horizontal = false }: { horizontal?: boolean }) => (
  <svg width={horizontal ? "80" : "32"} height="32" viewBox="0 0 80 32" fill="currentColor">
    <text x="4" y="20" fontSize="18" fontWeight="600" fontFamily="AOK Buenos Aires Text">
      {horizontal ? "AOK" : "A"}
    </text>
  </svg>
);

export interface NavBarProps {
  /**
   * Navigation bar variant based on Figma NavBarElements
   */
  variant?: 'dismiss' | 'iconbutton' | 'textbutton' | 'backbutton' | 'logo' | 'title' | 'headsub';
  
  /**
   * Content alignment in the navbar
   */
  alignment?: 'left' | 'middle' | 'right';
  
  /**
   * Dark mode support - matches Figma Dark Mode property
   */
  darkMode?: boolean;
  
  /**
   * Title text for title and headsub variants
   */
  title?: string;
  
  /**
   * Subtitle text for headsub variant
   */
  subtitle?: string;
  
  /**
   * Button text for textbutton variant
   */
  buttonText?: string;
  
  /**
   * Custom icon for iconbutton variant
   */
  icon?: React.ReactNode;
  
  /**
   * Logo type for logo variant
   */
  logoType?: 'standard' | 'horizontal';
  
  /**
   * Click handlers
   */
  onButtonClick?: () => void;
  onBackClick?: () => void;
  onDismissClick?: () => void;
  
  /**
   * Additional CSS class
   */
  className?: string;
}

export const NavBar: React.FC<NavBarProps> = ({
  variant = 'title',
  alignment = 'middle',
  darkMode = false,
  title = 'Title',
  subtitle,
  buttonText = 'Button',
  icon,
  logoType = 'standard',
  onButtonClick,
  onBackClick,
  onDismissClick,
  className = '',
}) => {
  const theme = darkMode ? colors.dark : colors.light;
  
  const getNavBarStyles = (): React.CSSProperties => {
    return {
      display: 'flex',
      alignItems: 'center',
      justifyContent: alignment === 'left' ? 'flex-start' : alignment === 'right' ? 'flex-end' : 'center',
      width: '100%',
      minHeight: touchTarget.large, // 56px minimum touch target
      padding: `${spacing.sm} ${spacing.lg}`, // 8px vertical, 24px horizontal
      backgroundColor: theme.background.primary,
      borderBottom: `1px solid ${theme.border.primary}`,
      position: 'relative',
    };
  };

  const getContentStyles = (): React.CSSProperties => {
    const baseStyles: React.CSSProperties = {
      display: 'flex',
      alignItems: 'center',
      gap: spacing.sm,
      color: theme.text.primary,
      fontFamily: typography.title.medium.fontFamily,
    };

    if (alignment === 'middle') {
      return {
        ...baseStyles,
        position: 'absolute',
        left: '50%',
        transform: 'translateX(-50%)',
        maxWidth: '60%', // Prevent overlap with side elements
      };
    }

    return baseStyles;
  };

  const getButtonStyles = (): React.CSSProperties => {
    return {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'none',
      border: 'none',
      color: 'inherit',
      cursor: 'pointer',
      padding: spacing.xs,
      minHeight: touchTarget.minimum, // 44px
      minWidth: touchTarget.minimum,
      borderRadius: '8px',
      transition: 'background-color 0.2s ease',
      fontSize: typography.body.medium.fontSize,
      fontWeight: typography.title.medium.fontWeight,
      fontFamily: typography.title.medium.fontFamily,
    };
  };

  const renderContent = () => {
    switch (variant) {
      case 'dismiss':
        return (
          <button
            style={getButtonStyles()}
            onClick={onDismissClick}
            aria-label="Close"
          >
            <CloseIcon />
          </button>
        );

      case 'backbutton':
        return (
          <button
            style={getButtonStyles()}
            onClick={onBackClick}
            aria-label="Go back"
          >
            <BackIcon />
          </button>
        );

      case 'iconbutton':
        return (
          <button
            style={getButtonStyles()}
            onClick={onButtonClick}
            aria-label="Action"
          >
            {icon || <CloseIcon />}
          </button>
        );

      case 'textbutton':
        return (
          <button
            style={{
              ...getButtonStyles(),
              padding: `${spacing.xs} ${spacing.sm}`,
              minWidth: 'auto',
            }}
            onClick={onButtonClick}
          >
            {buttonText}
          </button>
        );

      case 'logo':
        return (
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <AOKLogo horizontal={logoType === 'horizontal'} />
          </div>
        );

      case 'title':
        return (
          <h1
            style={{
              margin: 0,
              fontSize: typography.title.large.fontSize,
              fontWeight: typography.title.large.fontWeight,
              lineHeight: typography.title.large.lineHeight,
              color: theme.text.primary,
              textAlign: 'center',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }}
          >
            {title}
          </h1>
        );

      case 'headsub':
        return (
          <div style={{ textAlign: 'center' }}>
            <h1
              style={{
                margin: 0,
                fontSize: typography.title.medium.fontSize,
                fontWeight: typography.title.medium.fontWeight,
                lineHeight: typography.title.medium.lineHeight,
                color: theme.text.primary,
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
              }}
            >
              {title}
            </h1>
            {subtitle && (
              <p
                style={{
                  margin: `${spacing.xs} 0 0 0`,
                  fontSize: typography.body.small.fontSize,
                  fontWeight: typography.body.small.fontWeight,
                  lineHeight: typography.body.small.lineHeight,
                  color: theme.text.secondary,
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                }}
              >
                {subtitle}
              </p>
            )}
          </div>
        );

      default:
        return <span>{title}</span>;
    }
  };

  return (
    <nav style={getNavBarStyles()} className={className}>
      <div style={getContentStyles()}>
        {renderContent()}
      </div>
    </nav>
  );
}; 