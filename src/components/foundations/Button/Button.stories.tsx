import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

// Icon component for examples
const SampleIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
    <path d="M8 0L10.309 5.878L16 6.757L12 10.616L13.236 16L8 13.385L2.764 16L4 10.616L0 6.757L5.691 5.878L8 0Z" />
  </svg>
);

const meta: Meta<typeof Button> = {
  title: 'Foundation/Controls/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
# Button Component

AOK Design System button component with variants matching Figma specifications.

## Features
- Multiple variants (primary, secondary, text)
- Size variations (small, medium, large)  
- Dark mode support
- Loading states
- Icon support
- Accessibility compliant (WCAG 2.1 AA)

## Design Tokens Used
- Colors: Primary brand green (#005E3F)
- Typography: AOK Buenos Aires Text
- Spacing: 8px grid system
- Touch targets: Minimum 44px

## Figma Reference
Based on the Button components in the AOK Design System Figma file.
        `,
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'text'],
      description: 'Button style variant',
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: 'Button size',
    },
    darkMode: {
      control: { type: 'boolean' },
      description: 'Enable dark mode styling',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Disable the button',
    },
    loading: {
      control: { type: 'boolean' },
      description: 'Show loading state',
    },
    fullWidth: {
      control: { type: 'boolean' },
      description: 'Make button full width',
    },
    iconPosition: {
      control: { type: 'select' },
      options: ['left', 'right'],
      description: 'Icon position',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Default story
export const Default: Story = {
  args: {
    children: 'Button',
    variant: 'primary',
    size: 'medium',
  },
};

// Variant examples
export const Primary: Story = {
  args: {
    children: 'Primary Button',
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary Button',
    variant: 'secondary',
  },
};

export const Text: Story = {
  args: {
    children: 'Text Button',
    variant: 'text',
  },
};

// Size examples
export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <Button size="small">Small</Button>
      <Button size="medium">Medium</Button>
      <Button size="large">Large</Button>
    </div>
  ),
};

// Dark mode examples
export const DarkMode: Story = {
  render: () => (
    <div 
      style={{ 
        display: 'flex', 
        gap: '16px', 
        padding: '24px',
        backgroundColor: '#00150F',
        borderRadius: '8px'
      }}
    >
      <Button variant="primary" darkMode>Primary</Button>
      <Button variant="secondary" darkMode>Secondary</Button>
      <Button variant="text" darkMode>Text</Button>
    </div>
  ),
  parameters: {
    backgrounds: { default: 'dark' },
  },
};

// With icons
export const WithIcons: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexDirection: 'column' }}>
      <div style={{ display: 'flex', gap: '16px' }}>
        <Button icon={<SampleIcon />} iconPosition="left">
          Left Icon
        </Button>
        <Button icon={<SampleIcon />} iconPosition="right">
          Right Icon
        </Button>
      </div>
      <div style={{ display: 'flex', gap: '16px' }}>
        <Button variant="secondary" icon={<SampleIcon />}>
          Secondary with Icon
        </Button>
        <Button variant="text" icon={<SampleIcon />}>
          Text with Icon
        </Button>
      </div>
    </div>
  ),
};

// States
export const States: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexDirection: 'column' }}>
      <div style={{ display: 'flex', gap: '16px' }}>
        <Button>Normal</Button>
        <Button disabled>Disabled</Button>
        <Button loading>Loading</Button>
      </div>
      <div style={{ display: 'flex', gap: '16px' }}>
        <Button variant="secondary">Normal</Button>
        <Button variant="secondary" disabled>Disabled</Button>
        <Button variant="secondary" loading>Loading</Button>
      </div>
    </div>
  ),
};

// Full width
export const FullWidth: Story = {
  render: () => (
    <div style={{ width: '300px' }}>
      <Button fullWidth>Full Width Button</Button>
    </div>
  ),
};

// Mobile layout example
export const MobileLayout: Story = {
  render: () => (
    <div style={{ width: '320px', padding: '16px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <Button fullWidth variant="primary">
          Hauptaktion
        </Button>
        <Button fullWidth variant="secondary">
          Sekundäraktion
        </Button>
        <Button fullWidth variant="text">
          Abbrechen
        </Button>
      </div>
    </div>
  ),
  parameters: {
    viewport: {
      defaultViewport: 'iphone13',
    },
  },
}; 