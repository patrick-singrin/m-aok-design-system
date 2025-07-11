import type { Meta, StoryObj } from '@storybook/react';
import { Icon, iconNames, IconName } from './Icon';

const meta: Meta<typeof Icon> = {
  title: 'Foundation/Basics/Icon',
  component: Icon,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
# Icon Component

AOK Design System icon component with comprehensive icon library based on Figma system icons.

## Features
- Complete icon library (navigation, actions, communication, media)
- Multiple sizes (small 16px, medium 24px, large 32px)
- Semantic colors with design token integration
- Dark mode support
- Mobile-optimized touch targets
- Accessibility compliant (WCAG 2.1 AA)

## Design Tokens Used
- Colors: Primary brand colors and semantic colors
- Sizing: Consistent 8px grid-based sizing
- Interactive states for clickable icons

## Figma Reference
Based on the System Icons from the AOK Design System Figma file.
Icons include both filled and outlined variants for different use cases.
        `,
      },
    },
  },
  argTypes: {
    name: {
      control: { type: 'select' },
      options: iconNames,
      description: 'Icon name from the AOK icon library',
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: 'Icon size',
    },
    color: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'success', 'warning', 'error', 'inherit'],
      description: 'Icon color using design tokens',
    },
    darkMode: {
      control: { type: 'boolean' },
      description: 'Enable dark mode styling',
    },
    customSize: {
      control: { type: 'number' },
      description: 'Custom size in pixels',
    },
    customColor: {
      control: { type: 'color' },
      description: 'Custom color override',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Default story
export const Default: Story = {
  args: {
    name: 'search',
    size: 'medium',
    color: 'inherit',
  },
};

// Size examples
export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
      <div style={{ textAlign: 'center' }}>
        <Icon name="search" size="small" />
        <div style={{ marginTop: '8px', fontSize: '12px' }}>Small (16px)</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Icon name="search" size="medium" />
        <div style={{ marginTop: '8px', fontSize: '12px' }}>Medium (24px)</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Icon name="search" size="large" />
        <div style={{ marginTop: '8px', fontSize: '12px' }}>Large (32px)</div>
      </div>
    </div>
  ),
};

// Color examples
export const Colors: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
      <div style={{ textAlign: 'center' }}>
        <Icon name="info" color="primary" size="large" />
        <div style={{ marginTop: '8px', fontSize: '12px' }}>Primary</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Icon name="check" color="success" size="large" />
        <div style={{ marginTop: '8px', fontSize: '12px' }}>Success</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Icon name="warning" color="warning" size="large" />
        <div style={{ marginTop: '8px', fontSize: '12px' }}>Warning</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Icon name="error" color="error" size="large" />
        <div style={{ marginTop: '8px', fontSize: '12px' }}>Error</div>
      </div>
    </div>
  ),
};

// Navigation icons
export const NavigationIcons: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px', textAlign: 'center' }}>
      {['arrow-left', 'arrow-right', 'arrow-up', 'arrow-down'].map((iconName) => (
        <div key={iconName}>
          <Icon name={iconName as IconName} size="large" />
          <div style={{ marginTop: '8px', fontSize: '12px' }}>{iconName}</div>
        </div>
      ))}
    </div>
  ),
};

// Action icons
export const ActionIcons: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px', textAlign: 'center' }}>
      {['add', 'edit', 'delete', 'close', 'filter', 'search', 'more-vertical', 'more-horizontal'].map((iconName) => (
        <div key={iconName}>
          <Icon name={iconName as IconName} size="large" />
          <div style={{ marginTop: '8px', fontSize: '12px' }}>{iconName}</div>
        </div>
      ))}
    </div>
  ),
};

// Communication icons
export const CommunicationIcons: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px', textAlign: 'center' }}>
      {['check', 'info', 'warning', 'error', 'heart', 'share'].map((iconName) => (
        <div key={iconName}>
          <Icon name={iconName as IconName} size="large" />
          <div style={{ marginTop: '8px', fontSize: '12px' }}>{iconName}</div>
        </div>
      ))}
    </div>
  ),
};

// User & Media icons
export const UserMediaIcons: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px', textAlign: 'center' }}>
      {['user', 'settings', 'camera', 'image'].map((iconName) => (
        <div key={iconName}>
          <Icon name={iconName as IconName} size="large" />
          <div style={{ marginTop: '8px', fontSize: '12px' }}>{iconName}</div>
        </div>
      ))}
    </div>
  ),
};

// All icons grid
export const AllIcons: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '16px', textAlign: 'center' }}>
      {iconNames.map((iconName) => (
        <div key={iconName} style={{ padding: '12px' }}>
          <Icon name={iconName} size="medium" />
          <div style={{ marginTop: '4px', fontSize: '10px', wordBreak: 'break-word' }}>{iconName}</div>
        </div>
      ))}
    </div>
  ),
};

// Dark mode examples
export const DarkMode: Story = {
  render: () => (
    <div style={{ backgroundColor: '#00150F', padding: '24px', borderRadius: '8px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '24px', color: '#FFFFFF' }}>
        <Icon name="search" size="large" darkMode />
        <Icon name="user" size="large" color="primary" darkMode />
        <Icon name="settings" size="large" color="secondary" darkMode />
        <Icon name="heart" size="large" color="error" darkMode />
      </div>
    </div>
  ),
  parameters: {
    backgrounds: { default: 'dark' },
  },
};

// Interactive icons (clickable)
export const InteractiveIcons: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
      <Icon 
        name="edit" 
        size="large" 
        color="primary" 
        onClick={() => alert('Edit clicked!')}
        aria-label="Edit item"
      />
      <Icon 
        name="delete" 
        size="large" 
        color="error" 
        onClick={() => alert('Delete clicked!')}
        aria-label="Delete item"
      />
      <Icon 
        name="share" 
        size="large" 
        color="primary" 
        onClick={() => alert('Share clicked!')}
        aria-label="Share item"
      />
      <Icon 
        name="settings" 
        size="large" 
        color="secondary" 
        onClick={() => alert('Settings clicked!')}
        aria-label="Open settings"
      />
    </div>
  ),
};

// Custom styling
export const CustomStyling: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
      <Icon name="heart" customSize={40} customColor="#FF69B4" />
      <Icon name="add" customSize={60} customColor="#FFD700" />
      <Icon name="camera" customSize={48} customColor="#00BFFF" />
    </div>
  ),
};

// Mobile usage example
export const MobileUsage: Story = {
  render: () => (
    <div style={{ width: '320px', padding: '16px', backgroundColor: '#F5F5F5' }}>
      {/* Header with icons */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', padding: '8px', backgroundColor: '#FFFFFF', borderRadius: '8px' }}>
        <Icon name="arrow-left" size="medium" />
        <span style={{ fontSize: '18px', fontWeight: 'bold' }}>Profile</span>
        <Icon name="more-vertical" size="medium" />
      </div>
      
      {/* Action buttons with icons */}
      <div style={{ display: 'flex', gap: '12px', marginBottom: '16px' }}>
        <button style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '12px', backgroundColor: '#005E3F', color: '#FFFFFF', border: 'none', borderRadius: '8px', flex: 1 }}>
          <Icon name="edit" size="small" />
          Edit
        </button>
        <button style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '12px', backgroundColor: '#FFFFFF', color: '#005E3F', border: '1px solid #005E3F', borderRadius: '8px', flex: 1 }}>
          <Icon name="share" size="small" />
          Share
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