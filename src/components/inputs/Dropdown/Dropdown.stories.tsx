import type { Meta, StoryObj } from '@storybook/react';
import { Dropdown, DropdownOption } from './Dropdown';
import { useState } from 'react';

const meta: Meta<typeof Dropdown> = {
  title: 'Foundation/Inputs/Dropdown',
  component: Dropdown,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
# Dropdown Component

AOK Design System dropdown/select component for enhanced form inputs in mobile applications.

## Features
- Single and multiple selection modes
- Searchable options with filtering
- Grouped options with categories
- Icon support for options
- Option descriptions
- Mobile-optimized touch targets
- Keyboard navigation support
- Dark mode support
- Accessibility compliant (WCAG 2.1 AA)
- Error states and validation

## Design Tokens Used
- Colors: Primary brand colors and semantic colors
- Typography: AOK Buenos Aires Text hierarchy
- Spacing: 8px grid system with touch targets
- Touch Targets: 44px minimum for mobile accessibility

## Use Cases
- Form selectors
- Category filters
- Country/region pickers
- Multi-select filters
- Settings configuration
- User preferences
        `,
      },
    },
  },
  argTypes: {
    multiple: {
      control: { type: 'boolean' },
      description: 'Multiple selection mode',
    },
    searchable: {
      control: { type: 'boolean' },
      description: 'Enable search functionality',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Disabled state',
    },
    error: {
      control: { type: 'boolean' },
      description: 'Error state',
    },
    darkMode: {
      control: { type: 'boolean' },
      description: 'Dark mode styling',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Sample options
const countryOptions: DropdownOption[] = [
  { value: 'us', label: 'United States', icon: 'user' },
  { value: 'ca', label: 'Canada', icon: 'user' },
  { value: 'uk', label: 'United Kingdom', icon: 'user' },
  { value: 'de', label: 'Germany', icon: 'user' },
  { value: 'fr', label: 'France', icon: 'user' },
  { value: 'jp', label: 'Japan', icon: 'user' },
  { value: 'au', label: 'Australia', icon: 'user' },
];

const categoryOptions: DropdownOption[] = [
  { value: 'electronics', label: 'Electronics', description: 'Phones, laptops, gadgets' },
  { value: 'clothing', label: 'Clothing', description: 'Shirts, pants, accessories' },
  { value: 'home', label: 'Home & Garden', description: 'Furniture, decor, tools' },
  { value: 'sports', label: 'Sports', description: 'Equipment, apparel, fitness' },
  { value: 'books', label: 'Books', description: 'Fiction, non-fiction, textbooks' },
];

const groupedOptions: DropdownOption[] = [
  { value: 'inbox', label: 'Inbox', icon: 'info', group: 'Mail' },
  { value: 'sent', label: 'Sent', icon: 'share', group: 'Mail' },
  { value: 'drafts', label: 'Drafts', icon: 'edit', group: 'Mail' },
  { value: 'important', label: 'Important', icon: 'warning', group: 'Labels' },
  { value: 'starred', label: 'Starred', icon: 'heart', group: 'Labels' },
  { value: 'archive', label: 'Archive', icon: 'filter', group: 'Labels' },
];

// Default story
export const Default: Story = {
  render: () => {
    const [value, setValue] = useState<string>('');
    
    return (
      <div style={{ width: '300px' }}>
        <Dropdown
          options={countryOptions}
          value={value}
          onChange={(newValue) => setValue(newValue as string)}
          placeholder="Select a country"
          label="Country"
        />
      </div>
    );
  },
};

// Searchable dropdown
export const Searchable: Story = {
  render: () => {
    const [value, setValue] = useState<string>('');
    
    const manyOptions: DropdownOption[] = [
      { value: 'argentina', label: 'Argentina' },
      { value: 'australia', label: 'Australia' },
      { value: 'austria', label: 'Austria' },
      { value: 'belgium', label: 'Belgium' },
      { value: 'brazil', label: 'Brazil' },
      { value: 'canada', label: 'Canada' },
      { value: 'china', label: 'China' },
      { value: 'denmark', label: 'Denmark' },
      { value: 'france', label: 'France' },
      { value: 'germany', label: 'Germany' },
      { value: 'india', label: 'India' },
      { value: 'italy', label: 'Italy' },
      { value: 'japan', label: 'Japan' },
      { value: 'mexico', label: 'Mexico' },
      { value: 'netherlands', label: 'Netherlands' },
      { value: 'norway', label: 'Norway' },
      { value: 'spain', label: 'Spain' },
      { value: 'sweden', label: 'Sweden' },
      { value: 'switzerland', label: 'Switzerland' },
      { value: 'uk', label: 'United Kingdom' },
      { value: 'us', label: 'United States' },
    ];
    
    return (
      <div style={{ width: '300px' }}>
        <Dropdown
          options={manyOptions}
          value={value}
          onChange={(newValue) => setValue(newValue as string)}
          placeholder="Search and select a country"
          label="Country"
          searchable
          searchPlaceholder="Type to search countries..."
        />
      </div>
    );
  },
};

// Multiple selection
export const MultipleSelection: Story = {
  render: () => {
    const [value, setValue] = useState<string[]>([]);
    
    return (
      <div style={{ width: '300px' }}>
        <Dropdown
          options={categoryOptions}
          value={value}
          onChange={(newValue) => setValue(newValue as string[])}
          placeholder="Select categories"
          label="Product Categories"
          multiple
          searchable
        />
        
        <div style={{ marginTop: '16px', fontSize: '14px' }}>
          Selected: {value.length > 0 ? value.join(', ') : 'None'}
        </div>
      </div>
    );
  },
};

// Grouped options
export const GroupedOptions: Story = {
  render: () => {
    const [value, setValue] = useState<string>('');
    
    return (
      <div style={{ width: '300px' }}>
        <Dropdown
          options={groupedOptions}
          value={value}
          onChange={(newValue) => setValue(newValue as string)}
          placeholder="Select a folder"
          label="Mail Folder"
        />
      </div>
    );
  },
};

// With descriptions
export const WithDescriptions: Story = {
  render: () => {
    const [value, setValue] = useState<string>('');
    
    return (
      <div style={{ width: '350px' }}>
        <Dropdown
          options={categoryOptions}
          value={value}
          onChange={(newValue) => setValue(newValue as string)}
          placeholder="Select a category"
          label="Product Category"
          searchable
        />
      </div>
    );
  },
};

// States
export const States: Story = {
  render: () => {
    const [normalValue, setNormalValue] = useState<string>('');
    const [disabledValue, setDisabledValue] = useState<string>('us');
    const [errorValue, setErrorValue] = useState<string>('');
    
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '300px' }}>
        <Dropdown
          options={countryOptions}
          value={normalValue}
          onChange={(newValue) => setNormalValue(newValue as string)}
          placeholder="Normal state"
          label="Normal"
        />
        
        <Dropdown
          options={countryOptions}
          value={disabledValue}
          onChange={(newValue) => setDisabledValue(newValue as string)}
          placeholder="Disabled state"
          label="Disabled"
          disabled
        />
        
        <Dropdown
          options={countryOptions}
          value={errorValue}
          onChange={(newValue) => setErrorValue(newValue as string)}
          placeholder="Error state"
          label="With Error"
          error
          errorMessage="Please select a valid country"
          required
        />
      </div>
    );
  },
};

// Dark mode
export const DarkMode: Story = {
  render: () => {
    const [value, setValue] = useState<string[]>([]);
    
    return (
      <div style={{ backgroundColor: '#00150F', padding: '24px', borderRadius: '8px', width: '350px' }}>
        <Dropdown
          options={categoryOptions}
          value={value}
          onChange={(newValue) => setValue(newValue as string[])}
          placeholder="Select categories"
          label="Product Categories"
          multiple
          searchable
          darkMode
        />
      </div>
    );
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};

// Mobile form example
export const MobileFormExample: Story = {
  render: () => {
    const [country, setCountry] = useState<string>('');
    const [categories, setCategories] = useState<string[]>([]);
    const [priority, setPriority] = useState<string>('');
    
    const priorityOptions: DropdownOption[] = [
      { value: 'low', label: 'Low Priority', icon: 'info', description: 'Non-urgent items' },
      { value: 'medium', label: 'Medium Priority', icon: 'warning', description: 'Standard processing' },
      { value: 'high', label: 'High Priority', icon: 'close', description: 'Urgent attention needed' },
    ];
    
    return (
      <div style={{ 
        width: '375px', 
        height: '600px', 
        display: 'flex', 
        flexDirection: 'column',
        border: '1px solid #ddd',
        borderRadius: '8px',
        overflow: 'hidden'
      }}>
        {/* Header */}
        <div style={{ 
          padding: '16px', 
          backgroundColor: '#005E3F', 
          color: 'white',
          textAlign: 'center'
        }}>
          <h2 style={{ margin: 0, fontSize: '18px' }}>Create Listing</h2>
        </div>
        
        {/* Form */}
        <div style={{ flex: 1, padding: '16px', backgroundColor: '#FFFFFF', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <Dropdown
            options={countryOptions}
            value={country}
            onChange={(newValue) => setCountry(newValue as string)}
            placeholder="Select your country"
            label="Country"
            required
            searchable
          />
          
          <Dropdown
            options={categoryOptions}
            value={categories}
            onChange={(newValue) => setCategories(newValue as string[])}
            placeholder="Select categories"
            label="Product Categories"
            multiple
            searchable
          />
          
          <Dropdown
            options={priorityOptions}
            value={priority}
            onChange={(newValue) => setPriority(newValue as string)}
            placeholder="Select priority level"
            label="Priority"
            required
          />
          
          <div style={{ marginTop: 'auto', paddingTop: '20px' }}>
            <button
              style={{
                width: '100%',
                padding: '16px',
                backgroundColor: '#005E3F',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                fontSize: '16px',
                fontWeight: 'bold',
                cursor: 'pointer',
              }}
              onClick={() => alert(`Country: ${country}\nCategories: ${categories.join(', ')}\nPriority: ${priority}`)}
            >
              Create Listing
            </button>
          </div>
        </div>
      </div>
    );
  },
  parameters: {
    viewport: {
      defaultViewport: 'iphone13',
    },
  },
};

// Settings example
export const SettingsExample: Story = {
  render: () => {
    const [language, setLanguage] = useState<string>('en');
    const [notifications, setNotifications] = useState<string[]>(['email']);
    const [theme, setTheme] = useState<string>('auto');
    
    const languageOptions: DropdownOption[] = [
      { value: 'en', label: 'English', description: 'English (US)' },
      { value: 'es', label: 'Español', description: 'Spanish' },
      { value: 'fr', label: 'Français', description: 'French' },
      { value: 'de', label: 'Deutsch', description: 'German' },
      { value: 'pt', label: 'Português', description: 'Portuguese' },
    ];
    
    const notificationOptions: DropdownOption[] = [
      { value: 'email', label: 'Email Notifications', icon: 'share' },
      { value: 'push', label: 'Push Notifications', icon: 'info' },
      { value: 'sms', label: 'SMS Notifications', icon: 'warning' },
      { value: 'in-app', label: 'In-App Notifications', icon: 'heart' },
    ];
    
    const themeOptions: DropdownOption[] = [
      { value: 'light', label: 'Light Mode', icon: 'user', description: 'Always use light theme' },
      { value: 'dark', label: 'Dark Mode', icon: 'settings', description: 'Always use dark theme' },
      { value: 'auto', label: 'Auto', icon: 'filter', description: 'Follow system preference' },
    ];
    
    return (
      <div style={{ 
        width: '375px', 
        height: '600px', 
        display: 'flex', 
        flexDirection: 'column',
        border: '1px solid #ddd',
        borderRadius: '8px',
        overflow: 'hidden'
      }}>
        {/* Header */}
        <div style={{ 
          padding: '16px', 
          backgroundColor: '#005E3F', 
          color: 'white',
          textAlign: 'center'
        }}>
          <h2 style={{ margin: 0, fontSize: '18px' }}>App Settings</h2>
        </div>
        
        {/* Settings */}
        <div style={{ flex: 1, padding: '16px', backgroundColor: '#FFFFFF', display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <Dropdown
            options={languageOptions}
            value={language}
            onChange={(newValue) => setLanguage(newValue as string)}
            label="Language"
            searchable
          />
          
          <Dropdown
            options={notificationOptions}
            value={notifications}
            onChange={(newValue) => setNotifications(newValue as string[])}
            label="Notification Preferences"
            multiple
          />
          
          <Dropdown
            options={themeOptions}
            value={theme}
            onChange={(newValue) => setTheme(newValue as string)}
            label="Theme"
          />
          
          <div style={{ marginTop: 'auto', paddingTop: '20px', display: 'flex', gap: '12px' }}>
            <button
              style={{
                flex: 1,
                padding: '16px',
                backgroundColor: '#f0f0f0',
                color: '#333',
                border: '1px solid #ccc',
                borderRadius: '8px',
                fontSize: '16px',
                cursor: 'pointer',
              }}
            >
              Reset
            </button>
            <button
              style={{
                flex: 1,
                padding: '16px',
                backgroundColor: '#005E3F',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                fontSize: '16px',
                fontWeight: 'bold',
                cursor: 'pointer',
              }}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    );
  },
  parameters: {
    viewport: {
      defaultViewport: 'iphone13',
    },
  },
}; 