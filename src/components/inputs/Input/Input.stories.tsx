import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';
import { useState } from 'react';

const meta: Meta<typeof Input> = {
  title: 'Foundation/Inputs/Input',
  component: Input,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
# Input Component

AOK Design System input component optimized for mobile applications with comprehensive state management.

## Features
- Multiple input types (text, search, email, password, number, tel)
- Three sizes with proper touch targets (44px, 48px, 56px)
- Complete state system (normal, focused, error, success, disabled)
- Icon support (left and right icons)
- Clear functionality for better UX
- Character counter and validation
- Dark mode support
- Accessibility compliant (WCAG 2.1 AA)
- Mobile-optimized touch targets

## Design Tokens Used
- Colors: Primary, semantic colors, and theme colors
- Typography: AOK Buenos Aires Text hierarchy
- Spacing: 8px grid system with consistent padding
- Touch Targets: Minimum 44px for mobile accessibility

## Use Cases
- Form inputs and data collection
- Search functionality
- User authentication (email, password)
- Profile and settings forms
        `,
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['text', 'search', 'email', 'password', 'number', 'tel'],
      description: 'Input type variant',
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: 'Input size',
    },
    state: {
      control: { type: 'select' },
      options: ['normal', 'focused', 'error', 'success', 'disabled'],
      description: 'Input state',
    },
    placeholder: {
      control: { type: 'text' },
      description: 'Placeholder text',
    },
    label: {
      control: { type: 'text' },
      description: 'Input label',
    },
    helperText: {
      control: { type: 'text' },
      description: 'Helper text below input',
    },
    errorMessage: {
      control: { type: 'text' },
      description: 'Error message',
    },
    leftIcon: {
      control: { type: 'select' },
      options: ['search', 'user', 'edit', 'settings'],
      description: 'Left icon',
    },
    rightIcon: {
      control: { type: 'select' },
      options: ['search', 'user', 'edit', 'settings'],
      description: 'Right icon',
    },
    clearable: {
      control: { type: 'boolean' },
      description: 'Show clear button',
    },
    required: {
      control: { type: 'boolean' },
      description: 'Required field',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Disabled state',
    },
    fullWidth: {
      control: { type: 'boolean' },
      description: 'Full width input',
    },
    darkMode: {
      control: { type: 'boolean' },
      description: 'Dark mode styling',
    },
    showCounter: {
      control: { type: 'boolean' },
      description: 'Show character counter',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Default story
export const Default: Story = {
  args: {
    placeholder: 'Enter text here...',
  },
};

// Variants
export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '400px' }}>
      <Input variant="text" placeholder="Text input" label="Text" />
      <Input variant="search" placeholder="Search..." label="Search" leftIcon="search" />
      <Input variant="email" placeholder="email@example.com" label="Email" />
      <Input variant="password" placeholder="••••••••" label="Password" />
      <Input variant="number" placeholder="123" label="Number" />
      <Input variant="tel" placeholder="+1 (555) 000-0000" label="Phone" />
    </div>
  ),
};

// Sizes
export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '400px' }}>
      <Input size="small" placeholder="Small input (44px)" label="Small Size" />
      <Input size="medium" placeholder="Medium input (48px)" label="Medium Size" />
      <Input size="large" placeholder="Large input (56px)" label="Large Size" />
    </div>
  ),
};

// States
export const States: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '400px' }}>
      <Input 
        state="normal" 
        placeholder="Normal state" 
        label="Normal" 
        helperText="This is helper text" 
      />
      <Input 
        state="focused" 
        placeholder="Focused state" 
        label="Focused" 
        value="Focused input"
        helperText="Input is focused" 
      />
      <Input 
        state="error" 
        placeholder="Error state" 
        label="Error" 
        value="Invalid input"
        errorMessage="This field has an error" 
      />
      <Input 
        state="success" 
        placeholder="Success state" 
        label="Success" 
        value="Valid input"
        successMessage="Input is valid" 
      />
      <Input 
        state="disabled" 
        placeholder="Disabled state" 
        label="Disabled" 
        disabled
        helperText="This input is disabled" 
      />
    </div>
  ),
};

// With Icons
export const WithIcons: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '400px' }}>
      <Input 
        leftIcon="search" 
        placeholder="Search..." 
        label="Search with Left Icon" 
      />
      <Input 
        rightIcon="user" 
        placeholder="Username" 
        label="Input with Right Icon" 
      />
      <Input 
        leftIcon="search" 
        rightIcon="filter" 
        placeholder="Search with filters" 
        label="Both Icons" 
      />
      <Input 
        leftIcon="user" 
        clearable 
        defaultValue="Clear me" 
        label="With Clear Button" 
      />
    </div>
  ),
};

// Interactive Forms
export const InteractiveForms: Story = {
  render: () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [search, setSearch] = useState('');
    
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '400px' }}>
        <h3 style={{ margin: 0, fontSize: '18px' }}>Login Form</h3>
        
        <Input
          variant="email"
          label="Email Address"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          leftIcon="user"
          state={email && !email.includes('@') ? 'error' : 'normal'}
          errorMessage={email && !email.includes('@') ? 'Please enter a valid email' : undefined}
        />
        
        <Input
          variant="password"
          label="Password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          state={password && password.length < 6 ? 'error' : password.length >= 6 ? 'success' : 'normal'}
          errorMessage={password && password.length < 6 ? 'Password must be at least 6 characters' : undefined}
          successMessage={password.length >= 6 ? 'Password strength is good' : undefined}
        />
        
        <h3 style={{ margin: '24px 0 0 0', fontSize: '18px' }}>Search</h3>
        
        <Input
          variant="search"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          leftIcon="search"
          clearable
          onClear={() => setSearch('')}
        />
      </div>
    );
  },
};

// Character Counter
export const CharacterCounter: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '400px' }}>
      <Input
        label="Bio"
        placeholder="Tell us about yourself..."
        maxLength={100}
        showCounter
        helperText="Write a short bio"
      />
      <Input
        label="Tweet"
        placeholder="What's happening?"
        maxLength={280}
        showCounter
        defaultValue="This is a sample tweet with character counting!"
      />
    </div>
  ),
};

// Dark Mode
export const DarkMode: Story = {
  render: () => (
    <div style={{ backgroundColor: '#00150F', padding: '24px', borderRadius: '8px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '400px' }}>
        <Input
          label="Dark Mode Input"
          placeholder="Enter text..."
          darkMode
          helperText="This input adapts to dark theme"
        />
        <Input
          label="Search in Dark Mode"
          placeholder="Search..."
          leftIcon="search"
          clearable
          darkMode
          defaultValue="Dark theme search"
        />
        <Input
          label="Error in Dark Mode"
          placeholder="Error state"
          state="error"
          errorMessage="Error message in dark mode"
          darkMode
          value="Invalid input"
        />
      </div>
    </div>
  ),
  parameters: {
    backgrounds: { default: 'dark' },
  },
};

// Mobile Forms
export const MobileForms: Story = {
  render: () => (
    <div style={{ width: '350px', padding: '16px', backgroundColor: '#F9F9F9', borderRadius: '8px' }}>
      <h3 style={{ margin: '0 0 16px 0', fontSize: '18px', textAlign: 'center' }}>Profile Setup</h3>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <Input
          label="Full Name"
          placeholder="Enter your full name"
          required
          fullWidth
          leftIcon="user"
        />
        
        <Input
          label="Email"
          variant="email"
          placeholder="email@example.com"
          required
          fullWidth
        />
        
        <Input
          label="Phone Number"
          variant="tel"
          placeholder="+1 (555) 000-0000"
          fullWidth
        />
        
        <Input
          label="Bio"
          placeholder="Tell us about yourself..."
          maxLength={150}
          showCounter
          fullWidth
          helperText="Optional - share a bit about yourself"
        />
        
        <button style={{
          width: '100%',
          padding: '12px',
          backgroundColor: '#005E3F',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          fontSize: '16px',
          fontWeight: 'bold',
          marginTop: '8px'
        }}>
          Save Profile
        </button>
      </div>
    </div>
  ),
  parameters: {
    viewport: {
      defaultViewport: 'iphone13',
    },
  },
};

// Validation Examples
export const ValidationExamples: Story = {
  render: () => {
    const [email, setEmail] = useState('test@');
    const [phone, setPhone] = useState('555');
    const [username, setUsername] = useState('user123');
    
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '400px' }}>
        <Input
          label="Email Validation"
          variant="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          state={email.includes('@') && email.includes('.') ? 'success' : 'error'}
          errorMessage="Please enter a valid email address"
          successMessage="Email format is correct"
        />
        
        <Input
          label="Phone Validation"
          variant="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          state={phone.length >= 10 ? 'success' : 'error'}
          errorMessage="Phone number must be at least 10 digits"
          successMessage="Phone number format is correct"
        />
        
        <Input
          label="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          state={username.length >= 3 ? 'success' : 'error'}
          errorMessage="Username must be at least 3 characters"
          successMessage="Username is available"
          leftIcon="user"
        />
      </div>
    );
  },
};

// Full Width Examples
export const FullWidthExamples: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Input
        label="Full Width Input"
        placeholder="This input takes full width"
        fullWidth
        helperText="Full width input for forms"
      />
      <Input
        label="Full Width with Icons"
        placeholder="Search across the entire width"
        leftIcon="search"
        rightIcon="filter"
        clearable
        fullWidth
      />
    </div>
  ),
}; 