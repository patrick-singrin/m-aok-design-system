import type { Meta, StoryObj } from '@storybook/react';
import { TabBar, TabItem } from './TabBar';
import { useState } from 'react';

const meta: Meta<typeof TabBar> = {
  title: 'Foundation/Navigation/TabBar',
  component: TabBar,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
# TabBar Component

AOK Design System bottom navigation tab bar optimized for mobile applications.

## Features
- Mobile-optimized bottom navigation
- Badge support for notifications
- Multiple variants (default, elevated, minimal)
- Active state management
- Icon + label combinations
- Dark mode support
- Accessibility compliant (WCAG 2.1 AA)
- Touch-optimized targets (56px/48px)

## Design Tokens Used
- Colors: Primary brand colors and theme colors
- Typography: AOK Buenos Aires Text hierarchy
- Spacing: 8px grid system with touch targets
- Touch Targets: 48px-56px for mobile accessibility

## Use Cases
- Mobile app bottom navigation
- Content category switching
- Feature area navigation
- Tab-based interfaces
        `,
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'elevated', 'minimal'],
      description: 'TabBar variant style',
    },
    showLabels: {
      control: { type: 'boolean' },
      description: 'Show labels under icons',
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

// Sample tab data
const sampleTabs: TabItem[] = [
  { id: 'home', label: 'Home', icon: 'user', onClick: () => console.log('Home clicked') },
  { id: 'search', label: 'Search', icon: 'search', onClick: () => console.log('Search clicked') },
  { id: 'notifications', label: 'Alerts', icon: 'info', badge: 3, onClick: () => console.log('Notifications clicked') },
  { id: 'profile', label: 'Profile', icon: 'settings', onClick: () => console.log('Profile clicked') },
];

// Default story
export const Default: Story = {
  render: () => {
    const [activeTab, setActiveTab] = useState('home');
    
    return (
      <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
        <div style={{ flex: 1, padding: '20px', backgroundColor: '#F5F5F5' }}>
          <h2>Content Area</h2>
          <p>Active tab: {activeTab}</p>
        </div>
        <TabBar
          tabs={sampleTabs}
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />
      </div>
    );
  },
};

// Variants
export const Variants: Story = {
  render: () => {
    const [activeTab, setActiveTab] = useState('home');
    
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
        <div>
          <h3 style={{ margin: '0 0 16px 0' }}>Default</h3>
          <TabBar
            tabs={sampleTabs}
            activeTab={activeTab}
            onTabChange={setActiveTab}
          />
        </div>
        
        <div>
          <h3 style={{ margin: '0 0 16px 0' }}>Elevated</h3>
          <TabBar
            tabs={sampleTabs}
            activeTab={activeTab}
            onTabChange={setActiveTab}
            variant="elevated"
          />
        </div>
        
        <div>
          <h3 style={{ margin: '0 0 16px 0' }}>Minimal</h3>
          <TabBar
            tabs={sampleTabs}
            activeTab={activeTab}
            onTabChange={setActiveTab}
            variant="minimal"
          />
        </div>
      </div>
    );
  },
};

// With and without labels
export const LabelOptions: Story = {
  render: () => {
    const [activeTab1, setActiveTab1] = useState('home');
    const [activeTab2, setActiveTab2] = useState('home');
    
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
        <div>
          <h3 style={{ margin: '0 0 16px 0' }}>With Labels</h3>
          <TabBar
            tabs={sampleTabs}
            activeTab={activeTab1}
            onTabChange={setActiveTab1}
            showLabels={true}
          />
        </div>
        
        <div>
          <h3 style={{ margin: '0 0 16px 0' }}>Icons Only</h3>
          <TabBar
            tabs={sampleTabs}
            activeTab={activeTab2}
            onTabChange={setActiveTab2}
            showLabels={false}
          />
        </div>
      </div>
    );
  },
};

// Badge examples
export const WithBadges: Story = {
  render: () => {
    const [activeTab, setActiveTab] = useState('home');
    
    const tabsWithBadges: TabItem[] = [
      { id: 'home', label: 'Home', icon: 'user' },
      { id: 'messages', label: 'Messages', icon: 'share', badge: 5 },
      { id: 'notifications', label: 'Alerts', icon: 'info', badge: 12 },
      { id: 'updates', label: 'Updates', icon: 'warning', badge: 100 },
      { id: 'profile', label: 'Profile', icon: 'settings' },
    ];
    
    return (
      <TabBar
        tabs={tabsWithBadges}
        activeTab={activeTab}
        onTabChange={setActiveTab}
        variant="elevated"
      />
    );
  },
};

// Disabled tabs
export const WithDisabledTabs: Story = {
  render: () => {
    const [activeTab, setActiveTab] = useState('home');
    
    const tabsWithDisabled: TabItem[] = [
      { id: 'home', label: 'Home', icon: 'user' },
      { id: 'search', label: 'Search', icon: 'search' },
      { id: 'premium', label: 'Premium', icon: 'warning', disabled: true },
      { id: 'profile', label: 'Profile', icon: 'settings' },
    ];
    
    return (
      <TabBar
        tabs={tabsWithDisabled}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />
    );
  },
};

// Dark mode
export const DarkMode: Story = {
  render: () => {
    const [activeTab, setActiveTab] = useState('notifications');
    
    return (
      <div style={{ backgroundColor: '#00150F', minHeight: '400px', display: 'flex', flexDirection: 'column' }}>
        <div style={{ flex: 1, padding: '20px', color: '#FFFFFF' }}>
          <h2>Dark Mode Content</h2>
          <p>Active tab: {activeTab}</p>
        </div>
        <TabBar
          tabs={sampleTabs}
          activeTab={activeTab}
          onTabChange={setActiveTab}
          variant="elevated"
          darkMode
        />
      </div>
    );
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};

// Mobile app example
export const MobileAppExample: Story = {
  render: () => {
    const [activeTab, setActiveTab] = useState('home');
    
    const appTabs: TabItem[] = [
      { id: 'home', label: 'Home', icon: 'user' },
      { id: 'explore', label: 'Explore', icon: 'search' },
      { id: 'activity', label: 'Activity', icon: 'heart', badge: 2 },
      { id: 'inbox', label: 'Inbox', icon: 'share', badge: 7 },
      { id: 'profile', label: 'Profile', icon: 'settings' },
    ];
    
    const getContentForTab = (tabId: string) => {
      switch (tabId) {
        case 'home':
          return (
            <div>
              <h1>Welcome Home</h1>
              <p>Your personalized dashboard with recent activity and recommendations.</p>
            </div>
          );
        case 'explore':
          return (
            <div>
              <h1>Explore</h1>
              <p>Discover new content, trending topics, and featured items.</p>
            </div>
          );
        case 'activity':
          return (
            <div>
              <h1>Activity</h1>
              <p>See your recent interactions, likes, and activity feed.</p>
            </div>
          );
        case 'inbox':
          return (
            <div>
              <h1>Inbox</h1>
              <p>Messages, notifications, and important updates.</p>
            </div>
          );
        case 'profile':
          return (
            <div>
              <h1>Profile</h1>
              <p>Manage your account settings and preferences.</p>
            </div>
          );
        default:
          return <div>Select a tab</div>;
      }
    };
    
    return (
      <div style={{ width: '375px', height: '667px', display: 'flex', flexDirection: 'column', border: '1px solid #ddd', borderRadius: '8px', overflow: 'hidden' }}>
        <div style={{ flex: 1, padding: '20px', backgroundColor: '#F9F9F9', overflow: 'auto' }}>
          {getContentForTab(activeTab)}
        </div>
        <TabBar
          tabs={appTabs}
          activeTab={activeTab}
          onTabChange={setActiveTab}
          variant="elevated"
        />
      </div>
    );
  },
  parameters: {
    viewport: {
      defaultViewport: 'iphone13',
    },
  },
};

// TODO: Add more realistic tab examples
// Note: Badge positioning might need refinement for smaller screens

// Three tabs layout
export const ThreeTabs: Story = {
  render: () => {
    const [activeTab, setActiveTab] = useState('feed');
    
    const threeTabs: TabItem[] = [
      { id: 'feed', label: 'Feed', icon: 'user' },
      { id: 'search', label: 'Search', icon: 'search' },
      { id: 'profile', label: 'Profile', icon: 'settings' },
    ];
    
    return (
      <TabBar
        tabs={threeTabs}
        activeTab={activeTab}
        onTabChange={setActiveTab}
        variant="elevated"
      />
    );
  },
}; 