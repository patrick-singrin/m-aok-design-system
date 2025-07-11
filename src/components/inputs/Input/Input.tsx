import React, { useState, forwardRef } from 'react';
import { colors } from '../../../tokens/colors';
import { typography } from '../../../tokens/typography';
import { spacing, touchTarget } from '../../../tokens/spacing';
import { Icon, IconName } from '../../foundations/Icon/Icon';

export interface InputProps {
  /**
   * Input variant type
   */
  variant?: 'text' | 'search' | 'email' | 'password' | 'number' | 'tel';
  
  /**
   * Input size affecting height and padding
   */
  size?: 'small' | 'medium' | 'large';
  
  /**
   * Input state for styling
   */
  state?: 'normal' | 'focused' | 'error' | 'success' | 'disabled';
  
  /**
   * Input value
   */
  value?: string;
  
  /**
   * Default value for uncontrolled input
   */
  defaultValue?: string;
  
  /**
   * Placeholder text
   */
  placeholder?: string;
  
  /**
   * Input label
   */
  label?: string;
  
  /**
   * Helper text below input
   */
  helperText?: string;
  
  /**
   * Error message (overrides helperText when state is error)
   */
  errorMessage?: string;
  
  /**
   * Success message (overrides helperText when state is success)
   */
  successMessage?: string;
  
  /**
   * Left icon name
   */
  leftIcon?: IconName;
  
  /**
   * Right icon name
   */
  rightIcon?: IconName;
  
  /**
   * Show clear button when input has value
   */
  clearable?: boolean;
  
  /**
   * Required field indicator
   */
  required?: boolean;
  
  /**
   * Disabled state
   */
  disabled?: boolean;
  
  /**
   * Read-only state
   */
  readOnly?: boolean;
  
  /**
   * Full width input
   */
  fullWidth?: boolean;
  
  /**
   * Dark mode support
   */
  darkMode?: boolean;
  
  /**
   * Maximum character length
   */
  maxLength?: number;
  
  /**
   * Show character counter
   */
  showCounter?: boolean;
  
  /**
   * Event handlers
   */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onClear?: () => void;
  onLeftIconClick?: () => void;
  onRightIconClick?: () => void;
  
  /**
   * Additional CSS class
   */
  className?: string;
  
  /**
   * Input name attribute
   */
  name?: string;
  
  /**
   * Input id attribute
   */
  id?: string;
  
  /**
   * ARIA attributes
   */
  'aria-label'?: string;
  'aria-describedby'?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(({
  variant = 'text',
  size = 'medium',
  state = 'normal',
  value,
  defaultValue,
  placeholder,
  label,
  helperText,
  errorMessage,
  successMessage,
  leftIcon,
  rightIcon,
  clearable = false,
  required = false,
  disabled = false,
  readOnly = false,
  fullWidth = false,
  darkMode = false,
  maxLength,
  showCounter = false,
  onChange,
  onFocus,
  onBlur,
  onClear,
  onLeftIconClick,
  onRightIconClick,
  className = '',
  name,
  id,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  ...props
}, ref) => {
  const [isFocused, setIsFocused] = useState(false);
  const [internalValue, setInternalValue] = useState(defaultValue || '');
  
  const theme = darkMode ? colors.dark : colors.light;
  const currentValue = value !== undefined ? value : internalValue;
  const hasValue = currentValue && currentValue.length > 0;
  
  // Determine actual state
  const actualState = disabled ? 'disabled' : state === 'normal' && isFocused ? 'focused' : state;
  
  const getSizeStyles = () => {
    const sizeMap = {
      small: {
        height: touchTarget.minimum, // 44px
        padding: `${spacing.sm} ${spacing.md}`,
        fontSize: typography.body.small.fontSize,
      },
      medium: {
        height: touchTarget.comfortable, // 48px
        padding: `${spacing.md} ${spacing.lg}`,
        fontSize: typography.body.medium.fontSize,
      },
      large: {
        height: touchTarget.large, // 56px
        padding: `${spacing.lg} ${spacing.xl}`,
        fontSize: typography.body.large.fontSize,
      },
    };
    
    return sizeMap[size];
  };

  const getStateStyles = (): React.CSSProperties => {
    const baseStyles = {
      transition: 'all 0.2s ease-in-out',
    };

    switch (actualState) {
      case 'focused':
        return {
          ...baseStyles,
          borderColor: colors.primary.main,
          boxShadow: `0 0 0 2px ${colors.primary.main}20`,
          backgroundColor: theme.background.primary,
        };
        
      case 'error':
        return {
          ...baseStyles,
          borderColor: colors.semantic.error,
          backgroundColor: theme.background.primary,
        };
        
      case 'success':
        return {
          ...baseStyles,
          borderColor: colors.semantic.success,
          backgroundColor: theme.background.primary,
        };
        
      case 'disabled':
        return {
          ...baseStyles,
          borderColor: theme.border.primary,
          backgroundColor: theme.background.secondary,
          color: theme.text.disabled,
          cursor: 'not-allowed',
        };
        
      default:
        return {
          ...baseStyles,
          borderColor: theme.border.primary,
          backgroundColor: theme.background.primary,
        };
    }
  };

  const getInputContainerStyles = (): React.CSSProperties => {
    const sizeStyles = getSizeStyles();
    
    return {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      width: fullWidth ? '100%' : 'auto',
      minWidth: '200px',
      height: sizeStyles.height,
      border: '1px solid',
      borderRadius: '8px',
      overflow: 'hidden',
      ...getStateStyles(),
    };
  };

  const getInputStyles = (): React.CSSProperties => {
    const sizeStyles = getSizeStyles();
    
    return {
      flex: 1,
      height: '100%',
      border: 'none',
      outline: 'none',
      background: 'transparent',
      color: theme.text.primary,
      fontSize: sizeStyles.fontSize,
      fontFamily: typography.body.medium.fontFamily,
      padding: `0 ${leftIcon ? '0' : spacing.sm} 0 ${rightIcon || clearable ? '0' : spacing.sm}`,
    };
  };

  const getLabelStyles = (): React.CSSProperties => {
    return {
      display: 'block',
      marginBottom: spacing.xs,
      fontSize: typography.body.small.fontSize,
      fontWeight: typography.title.small.fontWeight,
      color: actualState === 'error' ? colors.semantic.error : theme.text.primary,
      fontFamily: typography.title.small.fontFamily,
    };
  };

  const getHelperTextStyles = (): React.CSSProperties => {
    let color: string = theme.text.secondary;
    
    if (actualState === 'error') {
      color = colors.semantic.error;
    } else if (actualState === 'success') {
      color = colors.semantic.success;
    }
    
    return {
      marginTop: spacing.xs,
      fontSize: typography.body.small.fontSize,
      color,
      fontFamily: typography.body.small.fontFamily,
    };
  };

  const getIconButtonStyles = (): React.CSSProperties => {
    return {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: spacing.sm,
      background: 'none',
      border: 'none',
      cursor: disabled ? 'not-allowed' : 'pointer',
      color: theme.text.secondary,
      transition: 'color 0.2s ease',
    };
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (value === undefined) {
      setInternalValue(event.target.value);
    }
    onChange?.(event);
  };

  const handleInputFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(true);
    onFocus?.(event);
  };

  const handleInputBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(false);
    onBlur?.(event);
  };

  const handleClear = () => {
    if (value === undefined) {
      setInternalValue('');
    }
    onClear?.();
  };

  const getDisplayMessage = () => {
    if (actualState === 'error' && errorMessage) {
      return errorMessage;
    }
    if (actualState === 'success' && successMessage) {
      return successMessage;
    }
    return helperText;
  };

  const getCharacterCount = () => {
    if (!showCounter || !maxLength) return null;
    
    return (
      <span style={{ 
        fontSize: typography.body.small.fontSize,
        color: theme.text.secondary,
        marginLeft: spacing.sm 
      }}>
        {currentValue.length}/{maxLength}
      </span>
    );
  };

  return (
    <div className={className} style={{ width: fullWidth ? '100%' : 'auto' }}>
      {/* Label */}
      {label && (
        <label htmlFor={id} style={getLabelStyles()}>
          {label}
          {required && (
            <span style={{ color: colors.semantic.error, marginLeft: spacing.xs }}>*</span>
          )}
        </label>
      )}
      
      {/* Input Container */}
      <div style={getInputContainerStyles()}>
        {/* Left Icon */}
        {leftIcon && (
          <button
            type="button"
            style={getIconButtonStyles()}
            onClick={onLeftIconClick}
            disabled={disabled}
            aria-label="Left icon action"
          >
            <Icon name={leftIcon} size="small" color="inherit" darkMode={darkMode} />
          </button>
        )}
        
        {/* Input Field */}
        <input
          ref={ref}
          type={variant === 'search' ? 'text' : variant}
          value={currentValue}
          defaultValue={undefined} // Controlled by value or internalValue
          placeholder={placeholder}
          disabled={disabled}
          readOnly={readOnly}
          required={required}
          maxLength={maxLength}
          name={name}
          id={id}
          style={getInputStyles()}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          aria-label={ariaLabel}
          aria-describedby={ariaDescribedBy}
          aria-invalid={actualState === 'error'}
          {...props}
        />
        
        {/* Clear Button */}
        {clearable && hasValue && !disabled && (
          <button
            type="button"
            style={getIconButtonStyles()}
            onClick={handleClear}
            aria-label="Clear input"
          >
            <Icon name="close" size="small" color="inherit" darkMode={darkMode} />
          </button>
        )}
        
        {/* Right Icon */}
        {rightIcon && (
          <button
            type="button"
            style={getIconButtonStyles()}
            onClick={onRightIconClick}
            disabled={disabled}
            aria-label="Right icon action"
          >
            <Icon name={rightIcon} size="small" color="inherit" darkMode={darkMode} />
          </button>
        )}
      </div>
      
      {/* Helper Text and Character Counter */}
      {(getDisplayMessage() || showCounter) && (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {getDisplayMessage() && (
            <div style={getHelperTextStyles()}>
              {getDisplayMessage()}
            </div>
          )}
          {getCharacterCount()}
        </div>
      )}
    </div>
  );
});

Input.displayName = 'Input'; 