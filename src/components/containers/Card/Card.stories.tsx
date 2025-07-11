import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';
import { Icon } from '../../foundations/Icon/Icon';

const meta: Meta<typeof Card> = {
  title: 'Foundation/Containers/Card',
  component: Card,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
# Card Component

AOK Design System card component with multiple variants for mobile content display.

## Features
- Multiple variants (base, content, info, action)
- Elevation system with shadow depths
- Image support for content cards
- Interactive states and click handling
- Dark mode support
- Mobile-optimized layouts
- Accessibility compliant (WCAG 2.1 AA)

## Design Tokens Used
- Colors: Background, border, and text colors
- Typography: AOK Buenos Aires Text hierarchy
- Spacing: 8px grid system with consistent padding
- Elevation: Consistent shadow system

## Card Variants
- **Base**: Simple container for custom content
- **Content**: Cards with image, title, description, and actions
- **Info**: Information cards with icon, title, and description
- **Action**: Cards focused on user actions
        `,
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['base', 'content', 'info', 'action'],
      description: 'Card layout variant',
    },
    elevation: {
      control: { type: 'select' },
      options: ['none', 'low', 'medium', 'high'],
      description: 'Shadow elevation level',
    },
    padding: {
      control: { type: 'select' },
      options: ['none', 'small', 'medium', 'large'],
      description: 'Internal padding',
    },
    darkMode: {
      control: { type: 'boolean' },
      description: 'Enable dark mode styling',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Disable card interactions',
    },
    fullWidth: {
      control: { type: 'boolean' },
      description: 'Make card full width',
    },
    title: {
      control: { type: 'text' },
      description: 'Card title',
    },
    subtitle: {
      control: { type: 'text' },
      description: 'Card subtitle',
    },
    actionText: {
      control: { type: 'text' },
      description: 'Primary action button text',
    },
    secondaryActionText: {
      control: { type: 'text' },
      description: 'Secondary action button text',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Base card examples
export const Base: Story = {
  args: {
    variant: 'base',
    children: 'This is a basic card with custom content.',
  },
};

export const BaseWithContent: Story = {
  args: {
    variant: 'base',
    padding: 'medium',
    children: (
      <div>
        <h3 style={{ margin: '0 0 8px 0' }}>Custom Content</h3>
        <p style={{ margin: '0 0 16px 0', color: '#666' }}>
          You can put any custom content inside a base card. This gives you complete control over the layout.
        </p>
        <div style={{ display: 'flex', gap: '8px' }}>
          <button style={{ padding: '8px 16px', backgroundColor: '#005E3F', color: 'white', border: 'none', borderRadius: '4px' }}>
            Action
          </button>
          <button style={{ padding: '8px 16px', backgroundColor: 'transparent', color: '#005E3F', border: '1px solid #005E3F', borderRadius: '4px' }}>
            Cancel
          </button>
        </div>
      </div>
    ),
  },
};

// Content card examples
export const ContentCard: Story = {
  args: {
    variant: 'content',
    title: 'Beautiful Sunset',
    subtitle: 'Captured at Golden Gate Bridge',
    imageSrc: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=200&fit=crop',
    imageAlt: 'Beautiful sunset over Golden Gate Bridge',
    actionText: 'View Details',
    secondaryActionText: 'Share',
  },
};

export const ContentCardWithoutImage: Story = {
  args: {
    variant: 'content',
    title: 'News Article',
    subtitle: 'Latest updates from our development team',
    actionText: 'Read More',
    children: (
      <p style={{ margin: 0, color: '#666' }}>
        This is a content card without an image. It can still contain rich content, titles, and actions while maintaining a clean layout.
      </p>
    ),
  },
};

// Info card examples
export const InfoCard: Story = {
  args: {
    variant: 'info',
    title: 'Account Settings',
    subtitle: 'Manage your profile and preferences',
    icon: <Icon name="user" size="large" color="primary" />,
    actionText: 'Open Settings',
  },
};

export const InfoCardWithWarning: Story = {
  args: {
    variant: 'info',
    title: 'Security Alert',
    subtitle: 'Unusual activity detected on your account',
    icon: <Icon name="warning" size="large" color="warning" />,
    actionText: 'Review Activity',
    secondaryActionText: 'Dismiss',
    children: (
      <p style={{ margin: 0, fontSize: '14px', color: '#666' }}>
        We noticed a login from a new device. Please review your recent activity to ensure your account security.
      </p>
    ),
  },
};

// Action card examples
export const ActionCard: Story = {
  args: {
    variant: 'action',
    title: 'Complete Your Profile',
    subtitle: 'Add more information to get personalized recommendations',
    icon: <Icon name="edit" size="large" color="primary" />,
    actionText: 'Complete Profile',
    secondaryActionText: 'Skip for Now',
  },
};

// Elevation examples
export const Elevations: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px' }}>
      <Card elevation="none" title="No Elevation" padding="medium">
        <p style={{ margin: 0, color: '#666' }}>This card has no shadow.</p>
      </Card>
      <Card elevation="low" title="Low Elevation" padding="medium">
        <p style={{ margin: 0, color: '#666' }}>This card has a subtle shadow.</p>
      </Card>
      <Card elevation="medium" title="Medium Elevation" padding="medium">
        <p style={{ margin: 0, color: '#666' }}>This card has a moderate shadow.</p>
      </Card>
      <Card elevation="high" title="High Elevation" padding="medium">
        <p style={{ margin: 0, color: '#666' }}>This card has a strong shadow.</p>
      </Card>
    </div>
  ),
};

// Interactive cards
export const InteractiveCard: Story = {
  args: {
    variant: 'info',
    title: 'Clickable Card',
    subtitle: 'This entire card is clickable',
    icon: <Icon name="arrow-right" size="medium" color="primary" />,
    onCardClick: () => alert('Card clicked!'),
  },
};

export const CardWithActions: Story = {
  args: {
    variant: 'action',
    title: 'Card with Actions',
    subtitle: 'Click the buttons below',
    actionText: 'Primary Action',
    secondaryActionText: 'Secondary',
    onActionClick: () => alert('Primary action clicked!'),
    onSecondaryActionClick: () => alert('Secondary action clicked!'),
  },
};

// Dark mode examples
export const DarkMode: Story = {
  render: () => (
    <div style={{ backgroundColor: '#00150F', padding: '24px', borderRadius: '8px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
        <Card
          variant="info"
          title="Dark Mode Card"
          subtitle="This card adapts to dark theme"
          icon={<Icon name="settings" size="large" color="primary" darkMode />}
          actionText="Settings"
          darkMode
        />
        <Card
          variant="content"
          title="Content Card"
          subtitle="Works great in dark mode"
          actionText="View"
          secondaryActionText="Share"
          darkMode
        >
          <p style={{ margin: 0, color: '#B0B0B0' }}>
            Content is clearly visible with proper contrast ratios.
          </p>
        </Card>
      </div>
    </div>
  ),
  parameters: {
    backgrounds: { default: 'dark' },
  },
};

// Mobile layout examples
export const MobileLayout: Story = {
  render: () => (
    <div style={{ width: '350px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Card
        variant="content"
        title="Mobile News Card"
        subtitle="Optimized for mobile viewing"
        imageSrc="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=350&h=200&fit=crop"
        actionText="Read More"
        fullWidth
      >
        <p style={{ margin: 0, fontSize: '14px', color: '#666' }}>
          This card is designed to look great on mobile devices with appropriate touch targets and spacing.
        </p>
      </Card>
      
      <Card
        variant="info"
        title="Quick Action"
        subtitle="Tap to perform action"
        icon={<Icon name="camera" size="large" color="primary" />}
        actionText="Take Photo"
        fullWidth
      />
      
      <Card
        variant="action"
        title="Complete Setup"
        subtitle="3 steps remaining"
        icon={<Icon name="check" size="large" color="success" />}
        actionText="Continue"
        secondaryActionText="Skip"
        fullWidth
      />
    </div>
  ),
  parameters: {
    viewport: {
      defaultViewport: 'iphone13',
    },
  },
};

// Card grid layout
export const CardGrid: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
      <Card
        variant="content"
        title="Product A"
        subtitle="High-quality product"
        imageSrc="https://images.unsplash.com/photo-1560472355-536de3962603?w=300&h=200&fit=crop"
        actionText="Add to Cart"
        secondaryActionText="Wishlist"
      >
        <p style={{ margin: 0, fontSize: '14px', color: '#666' }}>
          Premium quality product with excellent features and customer reviews.
        </p>
      </Card>
      
      <Card
        variant="content"
        title="Product B"
        subtitle="Best seller"
        imageSrc="https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=300&h=200&fit=crop"
        actionText="Add to Cart"
        secondaryActionText="Wishlist"
      >
        <p style={{ margin: 0, fontSize: '14px', color: '#666' }}>
          Our most popular item with thousands of satisfied customers.
        </p>
      </Card>
      
      <Card
        variant="content"
        title="Product C"
        subtitle="New arrival"
        imageSrc="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=200&fit=crop"
        actionText="Add to Cart"
        secondaryActionText="Wishlist"
      >
        <p style={{ margin: 0, fontSize: '14px', color: '#666' }}>
          Latest addition to our catalog with innovative design and features.
        </p>
      </Card>
    </div>
  ),
};

// States and variations
export const CardStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Card
        variant="info"
        title="Normal State"
        subtitle="Card in normal state"
        icon={<Icon name="info" size="large" color="primary" />}
        actionText="Action"
      />
      
      <Card
        variant="info"
        title="Disabled State"
        subtitle="Card is disabled"
        icon={<Icon name="info" size="large" color="secondary" />}
        actionText="Action"
        disabled
      />
      
      <Card
        variant="info"
        title="Full Width Card"
        subtitle="This card takes full available width"
        icon={<Icon name="info" size="large" color="primary" />}
        actionText="Action"
        fullWidth
      />
    </div>
  ),
}; 