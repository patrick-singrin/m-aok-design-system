import type { Meta, StoryObj } from '@storybook/react';
import { NavBar } from './NavBar';

// Sample icons for examples
const EditIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M3 17.25V21H6.75L17.81 9.94L14.06 6.19L3 17.25ZM20.71 7.04C21.1 6.65 21.1 6.02 20.71 5.63L18.37 3.29C17.98 2.9 17.35 2.9 16.96 3.29L15.13 5.12L18.88 8.87L20.71 7.04Z"/>
  </svg>
);

const FilterIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M10 18H14V16H10V18ZM3 6V8H21V6H3ZM6 13H18V11H6V13Z"/>
  </svg>
);

const meta: Meta<typeof NavBar> = {
  title: 'Foundation/Navigation/NavBar',
  component: NavBar,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
# NavBar Component

AOK Design System navigation bar component with 16+ variants matching Figma NavBarElements specifications.

## Features
- Multiple alignment options (left, center, right)
- Various content types (title, buttons, icons, logo)
- Dark mode support
- Mobile-optimized touch targets (44px minimum)
- Accessibility compliant (WCAG 2.1 AA)

## Design Tokens Used
- Colors: AOK brand system with light/dark themes
- Typography: AOK Buenos Aires Text hierarchy
- Spacing: 8px grid system with proper touch targets

## Figma Reference
Based on the NavBarElements component set with properties:
- Alignment: Left, Middle, Right
- Type: dismiss, iconbutton, textbutton, backbutton, logo, title, headsub
- Dark Mode: true/false
        `,
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['dismiss', 'iconbutton', 'textbutton', 'backbutton', 'logo', 'title', 'headsub'],
      description: 'NavBar content variant',
    },
    alignment: {
      control: { type: 'select' },
      options: ['left', 'middle', 'right'],
      description: 'Content alignment',
    },
    darkMode: {
      control: { type: 'boolean' },
      description: 'Enable dark mode styling',
    },
    title: {
      control: { type: 'text' },
      description: 'Title text',
    },
    subtitle: {
      control: { type: 'text' },
      description: 'Subtitle text (for headsub variant)',
    },
    buttonText: {
      control: { type: 'text' },
      description: 'Button text (for textbutton variant)',
    },
    logoType: {
      control: { type: 'select' },
      options: ['standard', 'horizontal'],
      description: 'Logo variant',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Default story
export const Default: Story = {
  args: {
    variant: 'title',
    alignment: 'middle',
    title: 'Page Title',
  },
};

// Title variants
export const TitleLeft: Story = {
  args: {
    variant: 'title',
    alignment: 'left',
    title: 'Left Aligned Title',
  },
};

export const TitleCenter: Story = {
  args: {
    variant: 'title',
    alignment: 'middle',
    title: 'Centered Title',
  },
};

export const TitleRight: Story = {
  args: {
    variant: 'title',
    alignment: 'right',
    title: 'Right Aligned Title',
  },
};

// HeadSub variants
export const HeadSubCenter: Story = {
  args: {
    variant: 'headsub',
    alignment: 'middle',
    title: 'Main Title',
    subtitle: 'Subtitle description',
  },
};

export const HeadSubLeft: Story = {
  args: {
    variant: 'headsub',
    alignment: 'left',
    title: 'Main Title',
    subtitle: 'Subtitle description',
  },
};

// Logo variants
export const LogoLeft: Story = {
  args: {
    variant: 'logo',
    alignment: 'left',
    logoType: 'standard',
  },
};

export const LogoHorizontal: Story = {
  args: {
    variant: 'logo',
    alignment: 'left',
    logoType: 'horizontal',
  },
};

// Button variants
export const BackButton: Story = {
  args: {
    variant: 'backbutton',
    alignment: 'left',
  },
};

export const DismissButton: Story = {
  args: {
    variant: 'dismiss',
    alignment: 'right',
  },
};

export const TextButtonLeft: Story = {
  args: {
    variant: 'textbutton',
    alignment: 'left',
    buttonText: 'Cancel',
  },
};

export const TextButtonRight: Story = {
  args: {
    variant: 'textbutton',
    alignment: 'right',
    buttonText: 'Save',
  },
};

export const IconButtonLeft: Story = {
  args: {
    variant: 'iconbutton',
    alignment: 'left',
    icon: <EditIcon />,
  },
};

export const IconButtonRight: Story = {
  args: {
    variant: 'iconbutton',
    alignment: 'right',
    icon: <FilterIcon />,
  },
};

// Dark mode examples
export const DarkMode: Story = {
  render: () => (
    <div style={{ backgroundColor: '#00150F', padding: '0' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1px' }}>
        <NavBar variant="title" alignment="middle" title="Dark Mode Title" darkMode />
        <NavBar variant="backbutton" alignment="left" darkMode />
        <NavBar variant="headsub" alignment="middle" title="Main Title" subtitle="Subtitle" darkMode />
        <NavBar variant="textbutton" alignment="right" buttonText="Action" darkMode />
      </div>
    </div>
  ),
  parameters: {
    backgrounds: { default: 'dark' },
  },
};

// Complete navigation examples
export const NavigationExamples: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1px' }}>
      {/* Back + Title */}
      <div style={{ position: 'relative', display: 'flex', alignItems: 'center', minHeight: '56px', padding: '8px 24px', backgroundColor: '#FFFFFF', borderBottom: '1px solid rgba(0, 0, 0, 0.1)' }}>
        <NavBar variant="backbutton" alignment="left" />
        <NavBar variant="title" alignment="middle" title="Profile Settings" />
      </div>
      
      {/* Logo + Action */}
      <div style={{ position: 'relative', display: 'flex', alignItems: 'center', minHeight: '56px', padding: '8px 24px', backgroundColor: '#FFFFFF', borderBottom: '1px solid rgba(0, 0, 0, 0.1)' }}>
        <NavBar variant="logo" alignment="left" logoType="horizontal" />
        <NavBar variant="iconbutton" alignment="right" icon={<FilterIcon />} />
      </div>
      
      {/* Cancel + Title + Save */}
      <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'space-between', minHeight: '56px', padding: '8px 24px', backgroundColor: '#FFFFFF', borderBottom: '1px solid rgba(0, 0, 0, 0.1)' }}>
        <NavBar variant="textbutton" alignment="left" buttonText="Cancel" />
        <NavBar variant="title" alignment="middle" title="Edit Profile" />
        <NavBar variant="textbutton" alignment="right" buttonText="Save" />
      </div>
    </div>
  ),
};

// Mobile layout examples
export const MobileLayouts: Story = {
  render: () => (
    <div style={{ width: '390px', display: 'flex', flexDirection: 'column', gap: '1px' }}>
      <NavBar variant="backbutton" alignment="left" />
      <NavBar variant="title" alignment="middle" title="Mobile Navigation" />
      <NavBar variant="headsub" alignment="middle" title="Main Screen" subtitle="With subtitle" />
      <NavBar variant="logo" alignment="left" logoType="standard" />
    </div>
  ),
  parameters: {
    viewport: {
      defaultViewport: 'iphone13',
    },
  },
};

// All variants showcase
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1px' }}>
      <NavBar variant="dismiss" alignment="right" title="Dismiss Right" />
      <NavBar variant="dismiss" alignment="left" title="Dismiss Left" />
      <NavBar variant="backbutton" alignment="left" title="Back Button" />
      <NavBar variant="iconbutton" alignment="left" icon={<EditIcon />} title="Icon Left" />
      <NavBar variant="iconbutton" alignment="right" icon={<FilterIcon />} title="Icon Right" />
      <NavBar variant="textbutton" alignment="left" buttonText="Cancel" title="Text Left" />
      <NavBar variant="textbutton" alignment="right" buttonText="Save" title="Text Right" />
      <NavBar variant="logo" alignment="left" logoType="standard" title="Logo Standard" />
      <NavBar variant="logo" alignment="left" logoType="horizontal" title="Logo Horizontal" />
      <NavBar variant="title" alignment="left" title="Title Left" />
      <NavBar variant="title" alignment="middle" title="Title Center" />
      <NavBar variant="title" alignment="right" title="Title Right" />
      <NavBar variant="headsub" alignment="middle" title="HeadSub Center" subtitle="With subtitle" />
      <NavBar variant="headsub" alignment="left" title="HeadSub Left" subtitle="With subtitle" />
    </div>
  ),
}; 