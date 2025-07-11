import type { Meta, StoryObj } from '@storybook/react';
import { IconButton } from './IconButton';

const meta: Meta<typeof IconButton> = {
  title: 'Components/IconButton',
  component: IconButton,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
# IconButton Component

AOK Design System icon button component for action-oriented interactions in mobile apps.

## Features
- Multiple variants (primary, secondary, ghost, outline)
- Three sizes with proper touch targets (44px, 48px, 56px)
- Multiple shapes (circle, square, rounded)
- Loading state with spinner animation
- Dark mode support
- Accessibility compliant (WCAG 2.1 AA)
- Mobile-optimized touch targets

## Design Tokens Used
- Colors: Primary brand colors and theme colors
- Spacing: Consistent padding and sizing
- Touch Targets: Minimum 44px for mobile accessibility
- Typography: Consistent with design system

## Use Cases
- Navigation actions (back, close, menu)
- Quick actions (edit, delete, share)
- Floating action buttons
- Toolbar buttons
        `,
      },
    },
  },
  argTypes: {
    icon: {
      control: { type: 'select' },
      options: ['edit', 'delete', 'share', 'settings', 'close', 'add', 'search', 'filter', 'heart', 'camera'],
      description: 'Icon name from the AOK icon library',
    },
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'ghost', 'outline'],
      description: 'Button variant style',
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: 'Button size',
    },
    shape: {
      control: { type: 'select' },
      options: ['circle', 'square', 'rounded'],
      description: 'Button shape',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Disable button interactions',
    },
    loading: {
      control: { type: 'boolean' },
      description: 'Show loading spinner',
    },
    darkMode: {
      control: { type: 'boolean' },
      description: 'Enable dark mode styling',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Default story
export const Default: Story = {
  args: {
    icon: 'edit',
    'aria-label': 'Edit item',
  },
};

// Variant examples
export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
      <IconButton icon="edit" variant="primary" aria-label="Primary edit" />
      <IconButton icon="edit" variant="secondary" aria-label="Secondary edit" />
      <IconButton icon="edit" variant="ghost" aria-label="Ghost edit" />
      <IconButton icon="edit" variant="outline" aria-label="Outline edit" />
    </div>
  ),
};

// Size examples
export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
      <div style={{ textAlign: 'center' }}>
        <IconButton icon="edit" size="small" aria-label="Small edit" />
        <div style={{ marginTop: '8px', fontSize: '12px' }}>Small (44px)</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <IconButton icon="edit" size="medium" aria-label="Medium edit" />
        <div style={{ marginTop: '8px', fontSize: '12px' }}>Medium (48px)</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <IconButton icon="edit" size="large" aria-label="Large edit" />
        <div style={{ marginTop: '8px', fontSize: '12px' }}>Large (56px)</div>
      </div>
    </div>
  ),
};

// Shape examples
export const Shapes: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
      <div style={{ textAlign: 'center' }}>
        <IconButton icon="settings" shape="circle" aria-label="Circle settings" />
        <div style={{ marginTop: '8px', fontSize: '12px' }}>Circle</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <IconButton icon="settings" shape="square" aria-label="Square settings" />
        <div style={{ marginTop: '8px', fontSize: '12px' }}>Square</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <IconButton icon="settings" shape="rounded" aria-label="Rounded settings" />
        <div style={{ marginTop: '8px', fontSize: '12px' }}>Rounded</div>
      </div>
    </div>
  ),
};

// State examples
export const States: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
      <div style={{ textAlign: 'center' }}>
        <IconButton icon="edit" aria-label="Normal edit" />
        <div style={{ marginTop: '8px', fontSize: '12px' }}>Normal</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <IconButton icon="edit" loading aria-label="Loading edit" />
        <div style={{ marginTop: '8px', fontSize: '12px' }}>Loading</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <IconButton icon="edit" disabled aria-label="Disabled edit" />
        <div style={{ marginTop: '8px', fontSize: '12px' }}>Disabled</div>
      </div>
    </div>
  ),
};

// Common actions
export const CommonActions: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', textAlign: 'center' }}>
      <div>
        <IconButton icon="close" variant="ghost" aria-label="Close" />
        <div style={{ marginTop: '8px', fontSize: '12px' }}>Close</div>
      </div>
      <div>
        <IconButton icon="edit" variant="primary" aria-label="Edit" />
        <div style={{ marginTop: '8px', fontSize: '12px' }}>Edit</div>
      </div>
      <div>
        <IconButton icon="delete" variant="outline" aria-label="Delete" />
        <div style={{ marginTop: '8px', fontSize: '12px' }}>Delete</div>
      </div>
      <div>
        <IconButton icon="share" variant="secondary" aria-label="Share" />
        <div style={{ marginTop: '8px', fontSize: '12px' }}>Share</div>
      </div>
      <div>
        <IconButton icon="add" variant="primary" shape="circle" aria-label="Add" />
        <div style={{ marginTop: '8px', fontSize: '12px' }}>Add</div>
      </div>
      <div>
        <IconButton icon="search" variant="ghost" aria-label="Search" />
        <div style={{ marginTop: '8px', fontSize: '12px' }}>Search</div>
      </div>
      <div>
        <IconButton icon="filter" variant="outline" aria-label="Filter" />
        <div style={{ marginTop: '8px', fontSize: '12px' }}>Filter</div>
      </div>
      <div>
        <IconButton icon="settings" variant="secondary" aria-label="Settings" />
        <div style={{ marginTop: '8px', fontSize: '12px' }}>Settings</div>
      </div>
    </div>
  ),
};

// Dark mode examples
export const DarkMode: Story = {
  render: () => (
    <div style={{ backgroundColor: '#00150F', padding: '24px', borderRadius: '8px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <IconButton icon="edit" variant="primary" darkMode aria-label="Primary edit dark" />
        <IconButton icon="share" variant="secondary" darkMode aria-label="Secondary share dark" />
        <IconButton icon="close" variant="ghost" darkMode aria-label="Ghost close dark" />
        <IconButton icon="settings" variant="outline" darkMode aria-label="Outline settings dark" />
      </div>
    </div>
  ),
  parameters: {
    backgrounds: { default: 'dark' },
  },
};

// Mobile navigation examples
export const MobileNavigation: Story = {
  render: () => (
    <div style={{ width: '360px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {/* Header navigation */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 16px', backgroundColor: '#F5F5F5', borderRadius: '8px' }}>
        <IconButton icon="arrow-left" variant="ghost" size="medium" aria-label="Go back" />
        <span style={{ fontSize: '18px', fontWeight: 'bold' }}>Profile</span>
        <IconButton icon="more-vertical" variant="ghost" size="medium" aria-label="Menu" />
      </div>
      
      {/* Action bar */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', padding: '16px', backgroundColor: '#F5F5F5', borderRadius: '8px' }}>
        <IconButton icon="edit" variant="primary" size="large" aria-label="Edit profile" />
        <IconButton icon="camera" variant="outline" size="large" aria-label="Change photo" />
        <IconButton icon="share" variant="secondary" size="large" aria-label="Share profile" />
      </div>
    </div>
  ),
  parameters: {
    viewport: {
      defaultViewport: 'iphone13',
    },
  },
};

// Interactive examples
export const Interactive: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <IconButton 
          icon="heart" 
          variant="outline" 
          aria-label="Like" 
          onClick={() => alert('Liked!')} 
        />
        <IconButton 
          icon="share" 
          variant="ghost" 
          aria-label="Share" 
          onClick={() => alert('Shared!')} 
        />
        <IconButton 
          icon="edit" 
          variant="primary" 
          aria-label="Edit" 
          onClick={() => alert('Edit clicked!')} 
        />
        <IconButton 
          icon="delete" 
          variant="outline" 
          aria-label="Delete" 
          onClick={() => alert('Delete clicked!')} 
        />
      </div>
    </div>
  ),
};

// Floating Action Button examples
export const FloatingActionButton: Story = {
  render: () => (
    <div style={{ position: 'relative', width: '300px', height: '200px', backgroundColor: '#F5F5F5', borderRadius: '8px', padding: '16px' }}>
      <p style={{ margin: 0, color: '#666' }}>
        Content area with floating action button
      </p>
      
      {/* FAB positioned in bottom right */}
      <div style={{ position: 'absolute', bottom: '16px', right: '16px' }}>
        <IconButton 
          icon="add" 
          variant="primary" 
          size="large" 
          shape="circle" 
          aria-label="Add new item"
          onClick={() => alert('Add new item')}
        />
      </div>
    </div>
  ),
};

// Loading states
export const LoadingStates: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
      <IconButton icon="edit" loading variant="primary" aria-label="Loading primary" />
      <IconButton icon="share" loading variant="secondary" aria-label="Loading secondary" />
      <IconButton icon="delete" loading variant="outline" aria-label="Loading outline" />
      <IconButton icon="settings" loading variant="ghost" aria-label="Loading ghost" />
    </div>
  ),
}; 