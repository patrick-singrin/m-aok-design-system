import React from 'react';
import { colors } from '../../../tokens/colors';
import { typography } from '../../../tokens/typography';
import { spacing, touchTarget } from '../../../tokens/spacing';
import { Icon, IconName } from '../../foundations/Icon/Icon';

export interface TabItem {
  /**
   * Tab identifier
   */
  id: string;
  
  /**
   * Tab label
   */
  label: string;
  
  /**
   * Tab icon
   */
  icon: IconName;
  
  /**
   * Badge count (optional)
   */
  badge?: number;
  
  /**
   * Disabled state
   */
  disabled?: boolean;
  
  /**
   * Click handler
   */
  onClick?: () => void;
}

export interface TabBarProps {
  /**
   * Array of tab items
   */
  tabs: TabItem[];
  
  /**
   * Currently active tab ID
   */
  activeTab: string;
  
  /**
   * Tab bar variant
   */
  variant?: 'default' | 'elevated' | 'minimal';
  
  /**
   * Show labels under icons
   */
  showLabels?: boolean;
  
  /**
   * Dark mode support
   */
  darkMode?: boolean;
  
  /**
   * Tab change handler
   */
  onTabChange?: (tabId: string) => void;
  
  /**
   * Additional CSS class
   */
  className?: string;
}

export const TabBar: React.FC<TabBarProps> = ({
  tabs,
  activeTab,
  variant = 'default',
  showLabels = true,
  darkMode = false,
  onTabChange,
  className = '',
}) => {
  const theme = darkMode ? colors.dark : colors.light;
  
  const getTabBarStyles = (): React.CSSProperties => {
    const baseStyles = {
      display: 'flex',
      width: '100%',
      borderTop: `1px solid ${theme.border.primary}`,
      backgroundColor: theme.background.primary,
    };

    switch (variant) {
      case 'elevated':
        return {
          ...baseStyles,
          boxShadow: '0 -2px 8px rgba(0, 0, 0, 0.1)',
          borderTop: 'none',
        };
        
      case 'minimal':
        return {
          ...baseStyles,
          borderTop: 'none',
          backgroundColor: 'transparent',
        };
        
      default:
        return baseStyles;
    }
  };

  const getTabStyles = (tab: TabItem): React.CSSProperties => {
    const isActive = tab.id === activeTab;
    const isDisabled = tab.disabled;
    
    return {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
      padding: showLabels ? `${spacing.sm} ${spacing.xs}` : spacing.md,
      minHeight: showLabels ? touchTarget.large : touchTarget.comfortable, // 56px or 48px
      cursor: isDisabled ? 'not-allowed' : 'pointer',
      opacity: isDisabled ? 0.4 : 1,
      transition: 'all 0.2s ease-in-out',
      backgroundColor: isActive ? `${colors.primary.main}08` : 'transparent',
      borderTop: isActive ? `2px solid ${colors.primary.main}` : '2px solid transparent',
      color: isActive ? colors.primary.main : theme.text.secondary,
    };
  };

  const getBadgeStyles = (): React.CSSProperties => {
    return {
      position: 'absolute',
      top: '-6px',
      right: '-6px',
      backgroundColor: colors.semantic.error,
      color: '#FFFFFF',
      borderRadius: '10px',
      minWidth: '18px',
      height: '18px',
      fontSize: '11px',
      fontWeight: 'bold',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0 4px',
    };
  };

  const getLabelStyles = (tab: TabItem): React.CSSProperties => {
    const isActive = tab.id === activeTab;
    
    return {
      fontSize: typography.body.small.fontSize,
      fontWeight: isActive ? typography.title.small.fontWeight : typography.body.small.fontWeight,
      fontFamily: typography.body.small.fontFamily,
      marginTop: spacing.xs,
      textAlign: 'center',
      lineHeight: '1.2',
      color: 'inherit',
    };
  };

  const handleTabClick = (tab: TabItem) => {
    if (tab.disabled) return;
    
    onTabChange?.(tab.id);
    tab.onClick?.();
  };

  return (
    <div style={getTabBarStyles()} className={className} role="tablist">
      {tabs.map((tab) => (
        <div
          key={tab.id}
          style={getTabStyles(tab)}
          onClick={() => handleTabClick(tab)}
          role="tab"
          aria-selected={tab.id === activeTab}
          aria-disabled={tab.disabled}
          tabIndex={tab.disabled ? -1 : 0}
          onKeyDown={(e) => {
            if ((e.key === 'Enter' || e.key === ' ') && !tab.disabled) {
              e.preventDefault();
              handleTabClick(tab);
            }
          }}
        >
          <div style={{ position: 'relative' }}>
            <Icon
              name={tab.icon}
              size="medium"
              color="inherit"
              darkMode={darkMode}
            />
            {tab.badge && tab.badge > 0 && (
              <span style={getBadgeStyles()}>
                {tab.badge > 99 ? '99+' : tab.badge}
              </span>
            )}
          </div>
          
          {showLabels && (
            <span style={getLabelStyles(tab)}>
              {tab.label}
            </span>
          )}
        </div>
      ))}
    </div>
  );
}; 