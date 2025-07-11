import type { Meta, StoryObj } from '@storybook/react';
import { FAB } from './FAB';

const meta: Meta<typeof FAB> = {
  title: 'Components/FAB',
  component: FAB,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
# FAB (Floating Action Button) Component

AOK Design System floating action button for primary actions in mobile applications.

## Features
- Multiple variants (primary, secondary, surface, tertiary)
- Three sizes (small, medium, large)
- Extended FAB with labels
- Loading states with spinner
- Position support for floating
- Dark mode support
- Accessibility compliant (WCAG 2.1 AA)
- Mobile-optimized touch targets

## Design Tokens Used
- Colors: Primary brand colors and theme colors
- Typography: AOK Buenos Aires Text hierarchy
- Spacing: 8px grid system with touch targets
- Touch Targets: 44px-64px for mobile accessibility

## Use Cases
- Primary actions in mobile apps
- Quick access to main functionality
- Content creation triggers
- Navigation shortcuts
        `,
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'surface', 'tertiary'],
      description: 'FAB variant style',
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: 'FAB size',
    },
    icon: {
      control: { type: 'select' },
      options: ['add', 'edit', 'camera', 'share', 'settings'],
      description: 'FAB icon',
    },
    label: {
      control: { type: 'text' },
      description: 'Label for extended FAB',
    },
    extended: {
      control: { type: 'boolean' },
      description: 'Extended FAB with label',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Disabled state',
    },
    loading: {
      control: { type: 'boolean' },
      description: 'Loading state',
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

// Default story
export const Default: Story = {
  args: {
    icon: 'add',
    'aria-label': 'Add new item',
  },
};

// Variants
export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
      <div style={{ textAlign: 'center' }}>
        <FAB icon="add" variant="primary" aria-label="Primary add" />
        <div style={{ marginTop: '8px', fontSize: '12px' }}>Primary</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <FAB icon="edit" variant="secondary" aria-label="Secondary edit" />
        <div style={{ marginTop: '8px', fontSize: '12px' }}>Secondary</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <FAB icon="camera" variant="surface" aria-label="Surface camera" />
        <div style={{ marginTop: '8px', fontSize: '12px' }}>Surface</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <FAB icon="share" variant="tertiary" aria-label="Tertiary share" />
        <div style={{ marginTop: '8px', fontSize: '12px' }}>Tertiary</div>
      </div>
    </div>
  ),
};

// Sizes
export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
      <div style={{ textAlign: 'center' }}>
        <FAB icon="add" size="small" aria-label="Small add" />
        <div style={{ marginTop: '8px', fontSize: '12px' }}>Small (44px)</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <FAB icon="add" size="medium" aria-label="Medium add" />
        <div style={{ marginTop: '8px', fontSize: '12px' }}>Medium (56px)</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <FAB icon="add" size="large" aria-label="Large add" />
        <div style={{ marginTop: '8px', fontSize: '12px' }}>Large (64px)</div>
      </div>
    </div>
  ),
};

// Extended FAB
export const Extended: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center' }}>
      <FAB 
        icon="add" 
        label="Add New" 
        extended 
        aria-label="Add new item"
        onClick={() => alert('Add new clicked!')}
      />
      <FAB 
        icon="edit" 
        label="Edit Content" 
        extended 
        variant="secondary"
        aria-label="Edit content"
        onClick={() => alert('Edit clicked!')}
      />
      <FAB 
        icon="camera" 
        label="Take Photo" 
        extended 
        variant="surface"
        size="large"
        aria-label="Take photo"
        onClick={() => alert('Camera clicked!')}
      />
    </div>
  ),
};

// States
export const States: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
      <div style={{ textAlign: 'center' }}>
        <FAB icon="add" aria-label="Normal add" />
        <div style={{ marginTop: '8px', fontSize: '12px' }}>Normal</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <FAB icon="add" loading aria-label="Loading add" />
        <div style={{ marginTop: '8px', fontSize: '12px' }}>Loading</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <FAB icon="add" disabled aria-label="Disabled add" />
        <div style={{ marginTop: '8px', fontSize: '12px' }}>Disabled</div>
      </div>
    </div>
  ),
};

// Dark mode
export const DarkMode: Story = {
  render: () => (
    <div style={{ backgroundColor: '#00150F', padding: '24px', borderRadius: '8px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
        <FAB icon="add" variant="primary" darkMode aria-label="Primary dark" />
        <FAB icon="edit" variant="secondary" darkMode aria-label="Secondary dark" />
        <FAB icon="camera" variant="surface" darkMode aria-label="Surface dark" />
        <FAB icon="share" variant="tertiary" darkMode aria-label="Tertiary dark" />
      </div>
    </div>
  ),
  parameters: {
    backgrounds: { default: 'dark' },
  },
};

// Positioned FAB examples
export const PositionedFAB: Story = {
  render: () => (
    <div style={{ 
      position: 'relative', 
      width: '350px', 
      height: '500px', 
      backgroundColor: '#F5F5F5', 
      borderRadius: '8px',
      padding: '20px'
    }}>
      <h3 style={{ margin: '0 0 16px 0' }}>Content Area</h3>
      <p>This demonstrates FAB positioning within a container. In real apps, FABs are typically positioned fixed to the viewport.</p>
      
      {/* Bottom right FAB */}
      <FAB 
        icon="add" 
        position={{ bottom: '20px', right: '20px' }}
        aria-label="Add item"
        onClick={() => alert('Add clicked!')}
      />
      
      {/* Bottom left extended FAB */}
      <FAB 
        icon="camera" 
        label="Photo"
        extended
        variant="secondary"
        position={{ bottom: '20px', left: '20px' }}
        aria-label="Take photo"
        onClick={() => alert('Photo clicked!')}
      />
      
      {/* Top right FAB */}
      <FAB 
        icon="settings" 
        size="small"
        variant="surface"
        position={{ top: '20px', right: '20px' }}
        aria-label="Settings"
        onClick={() => alert('Settings clicked!')}
      />
    </div>
  ),
};

// Mobile app example
export const MobileAppExample: Story = {
  render: () => (
    <div style={{ 
      width: '375px', 
      height: '667px', 
      display: 'flex', 
      flexDirection: 'column',
      border: '1px solid #ddd',
      borderRadius: '8px',
      overflow: 'hidden',
      position: 'relative'
    }}>
      {/* Header */}
      <div style={{ 
        padding: '16px', 
        backgroundColor: '#005E3F', 
        color: 'white',
        textAlign: 'center'
      }}>
        <h2 style={{ margin: 0, fontSize: '18px' }}>My Notes</h2>
      </div>
      
      {/* Content */}
      <div style={{ flex: 1, padding: '16px', backgroundColor: '#FFFFFF' }}>
        <div style={{ marginBottom: '16px', padding: '12px', backgroundColor: '#F5F5F5', borderRadius: '8px' }}>
          <h4 style={{ margin: '0 0 8px 0' }}>Shopping List</h4>
          <p style={{ margin: 0, fontSize: '14px', color: '#666' }}>Milk, Bread, Eggs...</p>
        </div>
        
        <div style={{ marginBottom: '16px', padding: '12px', backgroundColor: '#F5F5F5', borderRadius: '8px' }}>
          <h4 style={{ margin: '0 0 8px 0' }}>Meeting Notes</h4>
          <p style={{ margin: 0, fontSize: '14px', color: '#666' }}>Discuss project timeline...</p>
        </div>
        
        <div style={{ padding: '12px', backgroundColor: '#F5F5F5', borderRadius: '8px' }}>
          <h4 style={{ margin: '0 0 8px 0' }}>Ideas</h4>
          <p style={{ margin: 0, fontSize: '14px', color: '#666' }}>New app features...</p>
        </div>
      </div>
      
      {/* FAB for adding new note */}
      <FAB 
        icon="add" 
        position={{ bottom: '20px', right: '20px' }}
        aria-label="Add new note"
        onClick={() => alert('Add new note!')}
      />
    </div>
  ),
  parameters: {
    viewport: {
      defaultViewport: 'iphone13',
    },
  },
};

// TODO: Test FAB positioning on different screen sizes
// Known issue: Multiple FABs might overlap on smaller devices

// Interactive demo
export const InteractiveDemo: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'center' }}>
      <h3 style={{ margin: 0 }}>Try clicking the FABs below</h3>
      
      <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
        <FAB 
          icon="add" 
          aria-label="Add item"
          onClick={() => alert('Added new item!')}
        />
        
        <FAB 
          icon="edit" 
          label="Edit"
          extended
          variant="secondary"
          aria-label="Edit content"
          onClick={() => alert('Edit mode activated!')}
        />
        
        <FAB 
          icon="camera" 
          variant="surface"
          size="large"
          aria-label="Take photo"
          onClick={() => alert('Camera opened!')}
        />
        
        <FAB 
          icon="share" 
          label="Share Content"
          extended
          variant="tertiary"
          aria-label="Share content"
          onClick={() => alert('Share dialog opened!')}
        />
      </div>
    </div>
  ),
}; 