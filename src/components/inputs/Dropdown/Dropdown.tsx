import React, { useState, useRef, useEffect } from 'react';
import { colors } from '../../../tokens/colors';
import { typography } from '../../../tokens/typography';
import { spacing, touchTarget } from '../../../tokens/spacing';
import { Icon, IconName } from '../../foundations/Icon/Icon';

export interface DropdownOption {
  /**
   * Option value
   */
  value: string;
  
  /**
   * Option label
   */
  label: string;
  
  /**
   * Option description (optional)
   */
  description?: string;
  
  /**
   * Option icon (optional)
   */
  icon?: IconName;
  
  /**
   * Disabled state
   */
  disabled?: boolean;
  
  /**
   * Category/group (optional)
   */
  group?: string;
}

export interface DropdownProps {
  /**
   * Dropdown options
   */
  options: DropdownOption[];
  
  /**
   * Selected value(s)
   */
  value?: string | string[];
  
  /**
   * Placeholder text
   */
  placeholder?: string;
  
  /**
   * Multiple selection
   */
  multiple?: boolean;
  
  /**
   * Searchable dropdown
   */
  searchable?: boolean;
  
  /**
   * Search placeholder
   */
  searchPlaceholder?: string;
  
  /**
   * Disabled state
   */
  disabled?: boolean;
  
  /**
   * Error state
   */
  error?: boolean;
  
  /**
   * Error message
   */
  errorMessage?: string;
  
  /**
   * Label for the dropdown
   */
  label?: string;
  
  /**
   * Required field indicator
   */
  required?: boolean;
  
  /**
   * Dark mode support
   */
  darkMode?: boolean;
  
  /**
   * Change handler
   */
  onChange?: (value: string | string[]) => void;
  
  /**
   * Additional CSS class
   */
  className?: string;
  
  /**
   * Maximum height for dropdown menu
   */
  maxHeight?: string;
}

export const Dropdown: React.FC<DropdownProps> = ({
  options,
  value,
  placeholder = 'Select an option',
  multiple = false,
  searchable = false,
  searchPlaceholder = 'Search options...',
  disabled = false,
  error = false,
  errorMessage,
  label,
  required = false,
  darkMode = false,
  onChange,
  className = '',
  maxHeight = '200px',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const theme = darkMode ? colors.dark : colors.light;

  const selectedValues = Array.isArray(value) ? value : value ? [value] : [];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setSearchTerm('');
        setFocusedIndex(-1);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (isOpen && searchable && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isOpen, searchable]);

  const filteredOptions = searchable && searchTerm
    ? options.filter(option =>
        option.label.toLowerCase().includes(searchTerm.toLowerCase()) ||
        option.description?.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : options;

  const getSelectedLabel = () => {
    if (selectedValues.length === 0) return placeholder;
    
    if (multiple) {
      if (selectedValues.length === 1) {
        const option = options.find(opt => opt.value === selectedValues[0]);
        return option?.label || selectedValues[0];
      }
      return `${selectedValues.length} items selected`;
    }
    
    const option = options.find(opt => opt.value === selectedValues[0]);
    return option?.label || selectedValues[0];
  };

  const handleOptionClick = (option: DropdownOption) => {
    if (option.disabled) return;

    let newValue: string | string[];
    
    if (multiple) {
      const newSelectedValues = selectedValues.includes(option.value)
        ? selectedValues.filter(v => v !== option.value)
        : [...selectedValues, option.value];
      newValue = newSelectedValues;
    } else {
      newValue = option.value;
      setIsOpen(false);
      setSearchTerm('');
    }
    
    onChange?.(newValue);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (disabled) return;

    switch (event.key) {
      case 'Enter':
      case ' ':
        if (!isOpen) {
          event.preventDefault();
          setIsOpen(true);
        } else if (focusedIndex >= 0) {
          event.preventDefault();
          handleOptionClick(filteredOptions[focusedIndex]);
        }
        break;
        
      case 'Escape':
        setIsOpen(false);
        setSearchTerm('');
        setFocusedIndex(-1);
        break;
        
      case 'ArrowDown':
        event.preventDefault();
        if (!isOpen) {
          setIsOpen(true);
        } else {
          setFocusedIndex(prev => 
            prev < filteredOptions.length - 1 ? prev + 1 : 0
          );
        }
        break;
        
      case 'ArrowUp':
        event.preventDefault();
        if (isOpen) {
          setFocusedIndex(prev => 
            prev > 0 ? prev - 1 : filteredOptions.length - 1
          );
        }
        break;
    }
  };

  const getContainerStyles = (): React.CSSProperties => {
    return {
      position: 'relative',
      width: '100%',
    };
  };

  const getLabelStyles = (): React.CSSProperties => {
    return {
      display: 'block',
      marginBottom: spacing.xs,
      fontFamily: typography.body.medium.fontFamily,
      fontSize: typography.body.small.fontSize,
      fontWeight: typography.title.small.fontWeight,
      color: theme.text.primary,
    };
  };

  const getTriggerStyles = (): React.CSSProperties => {
    return {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%',
      padding: `${spacing.sm} ${spacing.md}`,
      minHeight: touchTarget.minimum, // 44px
      backgroundColor: disabled ? theme.background.secondary : theme.background.primary,
      border: `2px solid ${error ? colors.semantic.error : isOpen ? colors.primary.main : theme.border.primary}`,
      borderRadius: '8px',
      cursor: disabled ? 'not-allowed' : 'pointer',
      fontFamily: typography.body.medium.fontFamily,
      fontSize: typography.body.medium.fontSize,
      color: selectedValues.length > 0 ? theme.text.primary : theme.text.secondary,
      opacity: disabled ? 0.6 : 1,
      transition: 'all 0.2s ease-in-out',
    };
  };

  const getDropdownStyles = (): React.CSSProperties => {
    return {
      position: 'absolute',
      top: '100%',
      left: 0,
      right: 0,
      marginTop: spacing.xs,
      backgroundColor: theme.background.primary,
      border: `1px solid ${theme.border.primary}`,
      borderRadius: '8px',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
      zIndex: 1000,
      maxHeight,
      overflowY: 'auto',
    };
  };

  const getSearchStyles = (): React.CSSProperties => {
    return {
      width: '100%',
      padding: spacing.sm,
      border: 'none',
      borderBottom: `1px solid ${theme.border.primary}`,
      backgroundColor: 'transparent',
      fontFamily: typography.body.medium.fontFamily,
      fontSize: typography.body.medium.fontSize,
      color: theme.text.primary,
      outline: 'none',
    };
  };

  const getOptionStyles = (option: DropdownOption, index: number): React.CSSProperties => {
    const isSelected = selectedValues.includes(option.value);
    const isFocused = index === focusedIndex;
    
    return {
      display: 'flex',
      alignItems: 'center',
      gap: spacing.sm,
      padding: spacing.sm,
      minHeight: touchTarget.minimum,
      cursor: option.disabled ? 'not-allowed' : 'pointer',
      backgroundColor: isFocused 
        ? theme.background.tertiary 
        : isSelected 
          ? `${colors.primary.main}10` 
          : 'transparent',
      color: option.disabled 
        ? theme.text.secondary 
        : isSelected 
          ? colors.primary.main 
          : theme.text.primary,
      opacity: option.disabled ? 0.5 : 1,
      borderLeft: isSelected ? `3px solid ${colors.primary.main}` : '3px solid transparent',
      transition: 'all 0.2s ease-in-out',
    };
  };

  const getErrorStyles = (): React.CSSProperties => {
    return {
      marginTop: spacing.xs,
      fontSize: typography.body.small.fontSize,
      color: colors.semantic.error,
    };
  };

  // Group options by category
  const groupedOptions = filteredOptions.reduce((groups, option) => {
    const group = option.group || 'main';
    if (!groups[group]) groups[group] = [];
    groups[group].push(option);
    return groups;
  }, {} as Record<string, DropdownOption[]>);

  return (
    <div style={getContainerStyles()} className={className} ref={dropdownRef}>
      {label && (
        <label style={getLabelStyles()}>
          {label}
          {required && <span style={{ color: colors.semantic.error, marginLeft: '4px' }}>*</span>}
        </label>
      )}
      
      <div
        style={getTriggerStyles()}
        onClick={() => !disabled && setIsOpen(!isOpen)}
        onKeyDown={handleKeyDown}
        tabIndex={disabled ? -1 : 0}
        role="combobox"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-label={label || placeholder}
      >
        <span>{getSelectedLabel()}</span>
        <Icon
          name={isOpen ? 'arrow-up' : 'arrow-down'}
          size="small"
          color="inherit"
          darkMode={darkMode}
        />
      </div>
      
      {isOpen && (
        <div style={getDropdownStyles()}>
          {searchable && (
            <input
              ref={searchInputRef}
              style={getSearchStyles()}
              placeholder={searchPlaceholder}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onClick={(e) => e.stopPropagation()}
            />
          )}
          
          <div role="listbox" aria-multiselectable={multiple}>
            {Object.entries(groupedOptions).map(([groupName, groupOptions]) => (
              <div key={groupName}>
                {groupName !== 'main' && (
                  <div style={{
                    padding: `${spacing.sm} ${spacing.md}`,
                    fontSize: typography.body.small.fontSize,
                    fontWeight: typography.title.small.fontWeight,
                    color: theme.text.secondary,
                    backgroundColor: theme.background.secondary,
                    borderBottom: `1px solid ${theme.border.primary}`,
                  }}>
                    {groupName}
                  </div>
                )}
                
                {groupOptions.map((option, index) => {
                  const globalIndex = filteredOptions.indexOf(option);
                  return (
                    <div
                      key={option.value}
                      style={getOptionStyles(option, globalIndex)}
                      onClick={() => handleOptionClick(option)}
                      role="option"
                      aria-selected={selectedValues.includes(option.value)}
                    >
                      {multiple && (
                        <div style={{
                          width: '16px',
                          height: '16px',
                          border: `2px solid ${selectedValues.includes(option.value) ? colors.primary.main : theme.border.primary}`,
                          borderRadius: '3px',
                          backgroundColor: selectedValues.includes(option.value) ? colors.primary.main : 'transparent',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}>
                                                     {selectedValues.includes(option.value) && (
                             <Icon name="check" size="small" color="inherit" darkMode={darkMode} />
                           )}
                        </div>
                      )}
                      
                      {option.icon && (
                        <Icon
                          name={option.icon}
                          size="small"
                          color="inherit"
                          darkMode={darkMode}
                        />
                      )}
                      
                      <div style={{ flex: 1 }}>
                        <div>{option.label}</div>
                        {option.description && (
                          <div style={{
                            fontSize: typography.body.small.fontSize,
                            color: theme.text.secondary,
                            marginTop: '2px',
                          }}>
                            {option.description}
                          </div>
                        )}
                      </div>
                      
                      {!multiple && selectedValues.includes(option.value) && (
                        <Icon
                          name="check"
                          size="small"
                          color="primary"
                          darkMode={darkMode}
                        />
                      )}
                    </div>
                  );
                })}
              </div>
            ))}
            
            {filteredOptions.length === 0 && (
              <div style={{
                padding: spacing.md,
                textAlign: 'center',
                color: theme.text.secondary,
                fontStyle: 'italic',
              }}>
                No options found
              </div>
            )}
          </div>
        </div>
      )}
      
      {error && errorMessage && (
        <div style={getErrorStyles()}>
          {errorMessage}
        </div>
      )}
    </div>
  );
}; 