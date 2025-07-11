import type { Meta, StoryObj } from '@storybook/react';
import { List, ListItem } from './List';

const meta: Meta<typeof List> = {
  title: 'Foundation/Containers/List',
  component: List,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
# List Component

AOK Design System list component optimized for mobile content display with various item types.

## Features
- Multiple list variants (default, bordered, card)
- Multiple item types (basic, with-icon, with-actions, with-avatar, with-description)
- Touch-optimized item heights (56px minimum)
- Interactive states (clickable, selected, disabled)
- Dark mode support
- Action buttons integration
- Header and footer support
- Accessibility compliant (WCAG 2.1 AA)
- Mobile-optimized layouts

## Design Tokens Used
- Colors: Primary, semantic colors, and theme colors
- Typography: AOK Buenos Aires Text hierarchy
- Spacing: 8px grid system with consistent padding
- Touch Targets: Minimum 56px for list items

## Use Cases
- Settings and preferences lists
- Contact and user lists
- Navigation menus
- Content browsing
- Action-oriented lists
        `,
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'bordered', 'card'],
      description: 'List variant style',
    },
    darkMode: {
      control: { type: 'boolean' },
      description: 'Dark mode styling',
    },
    header: {
      control: { type: 'text' },
      description: 'List header text',
    },
    footer: {
      control: { type: 'text' },
      description: 'List footer text',
    },
    fullWidth: {
      control: { type: 'boolean' },
      description: 'Full width list',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Default story
export const Default: Story = {
  render: () => (
    <List>
      <ListItem title="First Item" subtitle="This is a subtitle" />
      <ListItem title="Second Item" subtitle="Another subtitle" />
      <ListItem title="Third Item" />
    </List>
  ),
};

// List variants
export const ListVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <h3 style={{ margin: '0 0 16px 0' }}>Default List</h3>
        <List>
          <ListItem title="Default Item 1" subtitle="Standard list styling" />
          <ListItem title="Default Item 2" subtitle="No borders or shadows" />
        </List>
      </div>
      
      <div>
        <h3 style={{ margin: '0 0 16px 0' }}>Bordered List</h3>
        <List variant="bordered">
          <ListItem title="Bordered Item 1" subtitle="With border styling" />
          <ListItem title="Bordered Item 2" subtitle="Clean bordered appearance" />
        </List>
      </div>
      
      <div>
        <h3 style={{ margin: '0 0 16px 0' }}>Card List</h3>
        <List variant="card">
          <ListItem title="Card Item 1" subtitle="Elevated card styling" />
          <ListItem title="Card Item 2" subtitle="With shadow and borders" />
        </List>
      </div>
    </div>
  ),
};

// Item variants
export const ItemVariants: Story = {
  render: () => (
    <List variant="bordered">
      <ListItem
        variant="basic"
        title="Basic Item"
        subtitle="Simple text only"
      />
      <ListItem
        variant="with-icon"
        title="With Icon"
        subtitle="Has a left icon"
        leftIcon="user"
      />
      <ListItem
        variant="with-avatar"
        title="With Avatar"
        subtitle="User profile item"
        avatarSrc="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face"
        avatarAlt="User avatar"
      />
      <ListItem
        variant="with-actions"
        title="With Actions"
        subtitle="Has action buttons"
        leftIcon="settings"
        actions={[
          { icon: 'edit', label: 'Edit', onClick: () => alert('Edit clicked') },
          { icon: 'delete', label: 'Delete', onClick: () => alert('Delete clicked'), variant: 'outline' },
        ]}
      />
      <ListItem
        variant="with-description"
        title="With Description"
        subtitle="Extended information"
        description="This item includes additional description text that provides more context about the content."
        leftIcon="info"
      />
    </List>
  ),
};

// Interactive states
export const InteractiveStates: Story = {
  render: () => (
    <List variant="card" header="Interactive Examples">
      <ListItem
        title="Clickable Item"
        subtitle="Tap to interact"
        leftIcon="arrow-right"
        onClick={() => alert('Item clicked!')}
      />
      <ListItem
        title="Selected Item"
        subtitle="Currently selected"
        leftIcon="check"
        selected
        onClick={() => alert('Selected item clicked!')}
      />
      <ListItem
        title="Disabled Item"
        subtitle="Cannot interact"
        leftIcon="user"
        disabled
        onClick={() => alert('This should not trigger')}
      />
      <ListItem
        title="With Right Icon"
        subtitle="Navigation indicator"
        leftIcon="settings"
        rightIcon="arrow-right"
        onClick={() => alert('Navigation item clicked!')}
      />
    </List>
  ),
};

// Settings list example
export const SettingsList: Story = {
  render: () => (
    <List variant="card" header="Settings" footer="More options in account settings">
      <ListItem
        title="Profile"
        subtitle="Edit your profile information"
        leftIcon="user"
        rightIcon="arrow-right"
        onClick={() => alert('Profile settings')}
      />
      <ListItem
        title="Notifications"
        subtitle="Manage notification preferences"
        leftIcon="info"
        rightIcon="arrow-right"
        onClick={() => alert('Notification settings')}
      />
      <ListItem
        title="Privacy"
        subtitle="Control your privacy settings"
        leftIcon="settings"
        rightIcon="arrow-right"
        onClick={() => alert('Privacy settings')}
      />
      <ListItem
        title="Security"
        subtitle="Password and authentication"
        leftIcon="warning"
        rightIcon="arrow-right"
        onClick={() => alert('Security settings')}
      />
    </List>
  ),
};

// Contact list example
export const ContactList: Story = {
  render: () => (
    <List variant="bordered" header="Contacts">
      <ListItem
        title="Alice Johnson"
        subtitle="+1 (555) 123-4567"
        avatarSrc="https://images.unsplash.com/photo-1494790108755-2616b0e5a93e?w=80&h=80&fit=crop&crop=face"
        avatarAlt="Alice Johnson"
        actions={[
          { icon: 'camera', label: 'Call', onClick: () => alert('Calling Alice'), variant: 'primary' },
          { icon: 'share', label: 'Message', onClick: () => alert('Messaging Alice'), variant: 'secondary' },
        ]}
      />
      <ListItem
        title="Bob Smith"
        subtitle="bob.smith@email.com"
        avatarSrc="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face"
        avatarAlt="Bob Smith"
        actions={[
          { icon: 'camera', label: 'Call', onClick: () => alert('Calling Bob'), variant: 'primary' },
          { icon: 'share', label: 'Message', onClick: () => alert('Messaging Bob'), variant: 'secondary' },
        ]}
      />
      <ListItem
        title="Carol Davis"
        subtitle="Available"
        avatarSrc="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face"
        avatarAlt="Carol Davis"
        actions={[
          { icon: 'camera', label: 'Call', onClick: () => alert('Calling Carol'), variant: 'primary' },
          { icon: 'share', label: 'Message', onClick: () => alert('Messaging Carol'), variant: 'secondary' },
        ]}
      />
    </List>
  ),
};

// Task list example
export const TaskList: Story = {
  render: () => (
    <List variant="card" header="Today's Tasks">
      <ListItem
        title="Review design system documentation"
        subtitle="Due: 2:00 PM"
        leftIcon="edit"
        selected
        actions={[
          { icon: 'check', label: 'Complete', onClick: () => alert('Task completed'), variant: 'primary' },
          { icon: 'edit', label: 'Edit', onClick: () => alert('Edit task'), variant: 'ghost' },
        ]}
      />
      <ListItem
        title="Team meeting preparation"
        subtitle="Due: 4:00 PM"
        leftIcon="user"
        actions={[
          { icon: 'check', label: 'Complete', onClick: () => alert('Task completed'), variant: 'primary' },
          { icon: 'edit', label: 'Edit', onClick: () => alert('Edit task'), variant: 'ghost' },
        ]}
      />
      <ListItem
        title="Update project timeline"
        subtitle="Due: Tomorrow"
        leftIcon="settings"
        actions={[
          { icon: 'check', label: 'Complete', onClick: () => alert('Task completed'), variant: 'primary' },
          { icon: 'edit', label: 'Edit', onClick: () => alert('Edit task'), variant: 'ghost' },
        ]}
      />
    </List>
  ),
};

// Dark mode example
export const DarkMode: Story = {
  render: () => (
    <div style={{ backgroundColor: '#00150F', padding: '24px', borderRadius: '8px' }}>
      <List variant="card" header="Dark Mode List" darkMode>
        <ListItem
          title="Dark Mode Item"
          subtitle="Adapted for dark theme"
          leftIcon="settings"
          darkMode
          onClick={() => alert('Dark mode item clicked')}
        />
        <ListItem
          title="With Actions"
          subtitle="Action buttons in dark mode"
          leftIcon="user"
          darkMode
          actions={[
            { icon: 'edit', label: 'Edit', onClick: () => alert('Edit'), variant: 'primary' },
            { icon: 'delete', label: 'Delete', onClick: () => alert('Delete'), variant: 'outline' },
          ]}
        />
        <ListItem
          title="Selected Item"
          subtitle="Selected state in dark mode"
          leftIcon="check"
          selected
          darkMode
        />
      </List>
    </div>
  ),
  parameters: {
    backgrounds: { default: 'dark' },
  },
};

// Mobile layout example
export const MobileLayout: Story = {
  render: () => (
    <div style={{ width: '350px' }}>
      <List variant="card" header="Mobile App Menu" fullWidth>
        <ListItem
          title="Home"
          subtitle="Dashboard and overview"
          leftIcon="user"
          rightIcon="arrow-right"
          onClick={() => alert('Home')}
        />
        <ListItem
          title="Profile"
          subtitle="Your account settings"
          leftIcon="settings"
          rightIcon="arrow-right"
          onClick={() => alert('Profile')}
        />
        <ListItem
          title="Messages"
          subtitle="3 new messages"
          leftIcon="share"
          rightIcon="arrow-right"
          onClick={() => alert('Messages')}
        />
        <ListItem
          title="Notifications"
          subtitle="Manage your alerts"
          leftIcon="info"
          actions={[
            { icon: 'settings', label: 'Settings', onClick: () => alert('Notification settings'), variant: 'ghost' },
          ]}
        />
        <ListItem
          title="Help & Support"
          subtitle="Get help when you need it"
          leftIcon="info"
          rightIcon="arrow-right"
          onClick={() => alert('Help')}
        />
      </List>
    </div>
  ),
  parameters: {
    viewport: {
      defaultViewport: 'iphone13',
    },
  },
};

// Full featured example
export const FullFeatured: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '500px' }}>
      <List variant="card" header="Recent Activity" footer="Load more activities">
        <ListItem
          variant="with-description"
          title="New user registered"
          subtitle="2 minutes ago"
          description="Alice Johnson joined your team and completed the onboarding process."
          leftIcon="user"
          actions={[
            { icon: 'check', label: 'Approve', onClick: () => alert('Approved'), variant: 'primary' },
            { icon: 'close', label: 'Dismiss', onClick: () => alert('Dismissed'), variant: 'ghost' },
          ]}
        />
        <ListItem
          variant="with-description"
          title="Project deadline approaching"
          subtitle="1 hour ago"
          description="The AOK Design System project is due in 3 days. Make sure all components are ready."
          leftIcon="warning"
          selected
          actions={[
            { icon: 'edit', label: 'Review', onClick: () => alert('Review'), variant: 'primary' },
          ]}
        />
        <ListItem
          title="System maintenance scheduled"
          subtitle="Yesterday"
          leftIcon="settings"
          actions={[
            { icon: 'info', label: 'Details', onClick: () => alert('Details'), variant: 'secondary' },
          ]}
        />
      </List>
    </div>
  ),
}; 