import type { Meta, StoryObj } from '@storybook/react';
import { Snackbar } from './Snackbar';
import { useState } from 'react';

const meta: Meta<typeof Snackbar> = {
  title: 'Foundation/Feedback/Snackbar',
  component: Snackbar,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
# Snackbar Component

AOK Design System snackbar for user feedback and notifications in mobile applications.

## Features
- Multiple variants (default, success, warning, error, info)
- Flexible positioning (top, bottom, center options)
- Auto-hide with customizable duration
- Action buttons with text or outlined styles
- Optional close button
- Automatic variant icons
- Dark mode support
- Accessibility compliant (WCAG 2.1 AA)
- Smooth animations and transitions

## Design Tokens Used
- Colors: Semantic colors for feedback states
- Typography: AOK Buenos Aires Text hierarchy
- Spacing: 8px grid system with touch targets
- Touch Targets: 44px minimum for mobile accessibility

## Use Cases
- Success confirmations
- Error messages
- Warning notifications
- Information alerts
- User feedback
- Toast notifications
        `,
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'success', 'warning', 'error', 'info'],
      description: 'Snackbar variant',
    },
    position: {
      control: { type: 'select' },
      options: ['top', 'bottom', 'top-center', 'bottom-center'],
      description: 'Snackbar position',
    },
    message: {
      control: { type: 'text' },
      description: 'Snackbar message',
    },
    open: {
      control: { type: 'boolean' },
      description: 'Show/hide snackbar',
    },
    autoHideDuration: {
      control: { type: 'number' },
      description: 'Auto-hide duration (ms)',
    },
    showCloseButton: {
      control: { type: 'boolean' },
      description: 'Show close button',
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
  render: () => {
    const [open, setOpen] = useState(false);
    
    return (
      <div style={{ padding: '20px' }}>
        <button
          onClick={() => setOpen(true)}
          style={{
            padding: '12px 24px',
            backgroundColor: '#005E3F',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
          }}
        >
          Show Snackbar
        </button>
        
        <Snackbar
          message="This is a default snackbar message"
          open={open}
          onClose={() => setOpen(false)}
        />
      </div>
    );
  },
};

// Variants
export const Variants: Story = {
  render: () => {
    const [openStates, setOpenStates] = useState({
      default: false,
      success: false,
      warning: false,
      error: false,
      info: false,
    });
    
    const toggleSnackbar = (variant: keyof typeof openStates) => {
      setOpenStates(prev => ({ ...prev, [variant]: !prev[variant] }));
    };
    
    return (
      <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <h3>Click buttons to show different variants:</h3>
        
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <button
            onClick={() => toggleSnackbar('default')}
            style={{ padding: '8px 16px', border: '1px solid #ccc', borderRadius: '4px', cursor: 'pointer' }}
          >
            Default
          </button>
          <button
            onClick={() => toggleSnackbar('success')}
            style={{ padding: '8px 16px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
          >
            Success
          </button>
          <button
            onClick={() => toggleSnackbar('warning')}
            style={{ padding: '8px 16px', backgroundColor: '#FF9800', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
          >
            Warning
          </button>
          <button
            onClick={() => toggleSnackbar('error')}
            style={{ padding: '8px 16px', backgroundColor: '#F44336', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
          >
            Error
          </button>
          <button
            onClick={() => toggleSnackbar('info')}
            style={{ padding: '8px 16px', backgroundColor: '#2196F3', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
          >
            Info
          </button>
        </div>
        
        <Snackbar
          message="Default message notification"
          variant="default"
          open={openStates.default}
          onClose={() => setOpenStates(prev => ({ ...prev, default: false }))}
          position="bottom"
        />
        
        <Snackbar
          message="Success! Your action was completed successfully."
          variant="success"
          open={openStates.success}
          onClose={() => setOpenStates(prev => ({ ...prev, success: false }))}
          position="bottom"
        />
        
        <Snackbar
          message="Warning: Please check your input before proceeding."
          variant="warning"
          open={openStates.warning}
          onClose={() => setOpenStates(prev => ({ ...prev, warning: false }))}
          position="bottom"
        />
        
        <Snackbar
          message="Error: Something went wrong. Please try again."
          variant="error"
          open={openStates.error}
          onClose={() => setOpenStates(prev => ({ ...prev, error: false }))}
          position="bottom"
        />
        
        <Snackbar
          message="Info: New features are now available in settings."
          variant="info"
          open={openStates.info}
          onClose={() => setOpenStates(prev => ({ ...prev, info: false }))}
          position="bottom"
        />
      </div>
    );
  },
};

// Positions
export const Positions: Story = {
  render: () => {
    const [position, setPosition] = useState<'top' | 'bottom' | 'top-center' | 'bottom-center'>('bottom');
    const [open, setOpen] = useState(false);
    
    return (
      <div style={{ padding: '20px' }}>
        <h3>Select position and show snackbar:</h3>
        
        <div style={{ display: 'flex', gap: '12px', marginBottom: '20px', flexWrap: 'wrap' }}>
          {['top', 'bottom', 'top-center', 'bottom-center'].map((pos) => (
            <button
              key={pos}
              onClick={() => {
                setPosition(pos as any);
                setOpen(false);
                setTimeout(() => setOpen(true), 100);
              }}
              style={{
                padding: '8px 16px',
                backgroundColor: position === pos ? '#005E3F' : '#f0f0f0',
                color: position === pos ? 'white' : 'black',
                border: '1px solid #ccc',
                borderRadius: '4px',
                cursor: 'pointer',
              }}
            >
              {pos}
            </button>
          ))}
        </div>
        
        <Snackbar
          message={`Snackbar positioned at ${position}`}
          variant="info"
          position={position}
          open={open}
          onClose={() => setOpen(false)}
        />
      </div>
    );
  },
};

// With Actions
export const WithActions: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    
    return (
      <div style={{ padding: '20px' }}>
        <button
          onClick={() => setOpen(true)}
          style={{
            padding: '12px 24px',
            backgroundColor: '#005E3F',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
          }}
        >
          Show Snackbar with Action
        </button>
        
        <Snackbar
          message="Item deleted successfully"
          variant="success"
          open={open}
          onClose={() => setOpen(false)}
          action={{
            label: 'UNDO',
            onClick: () => {
              alert('Undo action triggered!');
              setOpen(false);
            },
            variant: 'text'
          }}
          autoHideDuration={8000}
        />
      </div>
    );
  },
};

// With Close Button
export const WithCloseButton: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    
    return (
      <div style={{ padding: '20px' }}>
        <button
          onClick={() => setOpen(true)}
          style={{
            padding: '12px 24px',
            backgroundColor: '#005E3F',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
          }}
        >
          Show Persistent Snackbar
        </button>
        
        <Snackbar
          message="This message will stay until you close it manually"
          variant="info"
          open={open}
          onClose={() => setOpen(false)}
          showCloseButton
          autoHideDuration={0} // Won't auto-hide
        />
      </div>
    );
  },
};

// Dark Mode
export const DarkMode: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    
    return (
      <div style={{ backgroundColor: '#00150F', minHeight: '400px', padding: '20px' }}>
        <button
          onClick={() => setOpen(true)}
          style={{
            padding: '12px 24px',
            backgroundColor: '#005E3F',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
          }}
        >
          Show Dark Mode Snackbar
        </button>
        
        <Snackbar
          message="This is a dark mode snackbar with an action"
          variant="default"
          open={open}
          onClose={() => setOpen(false)}
          darkMode
          action={{
            label: 'ACTION',
            onClick: () => alert('Action clicked!'),
          }}
          showCloseButton
        />
      </div>
    );
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};

// Mobile App Example
export const MobileAppExample: Story = {
  render: () => {
    const [snackbars, setSnackbars] = useState({
      upload: false,
      save: false,
      offline: false,
      update: false,
    });
    
    const showSnackbar = (type: keyof typeof snackbars) => {
      setSnackbars(prev => ({ ...prev, [type]: true }));
    };
    
    const hideSnackbar = (type: keyof typeof snackbars) => {
      setSnackbars(prev => ({ ...prev, [type]: false }));
    };
    
    return (
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
          <h2 style={{ margin: 0, fontSize: '18px' }}>Photo Gallery</h2>
        </div>
        
        {/* Content */}
        <div style={{ flex: 1, padding: '16px', backgroundColor: '#FFFFFF' }}>
          <h3>Trigger notifications:</h3>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <button
              onClick={() => showSnackbar('upload')}
              style={{ padding: '12px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '4px' }}
            >
              Upload Photo
            </button>
            
            <button
              onClick={() => showSnackbar('save')}
              style={{ padding: '12px', backgroundColor: '#2196F3', color: 'white', border: 'none', borderRadius: '4px' }}
            >
              Save Changes
            </button>
            
            <button
              onClick={() => showSnackbar('offline')}
              style={{ padding: '12px', backgroundColor: '#FF9800', color: 'white', border: 'none', borderRadius: '4px' }}
            >
              Go Offline
            </button>
            
            <button
              onClick={() => showSnackbar('update')}
              style={{ padding: '12px', backgroundColor: '#F44336', color: 'white', border: 'none', borderRadius: '4px' }}
            >
              Update Error
            </button>
          </div>
        </div>
        
        {/* Snackbars */}
        <Snackbar
          message="Photo uploaded successfully!"
          variant="success"
          open={snackbars.upload}
          onClose={() => hideSnackbar('upload')}
          action={{
            label: 'VIEW',
            onClick: () => {
              alert('View photo');
              hideSnackbar('upload');
            },
          }}
        />
        
        <Snackbar
          message="Changes saved to cloud"
          variant="info"
          open={snackbars.save}
          onClose={() => hideSnackbar('save')}
        />
        
        <Snackbar
          message="You're offline. Changes will sync when connected."
          variant="warning"
          open={snackbars.offline}
          onClose={() => hideSnackbar('offline')}
          showCloseButton
          autoHideDuration={0}
        />
        
        <Snackbar
          message="Update failed. Please try again."
          variant="error"
          open={snackbars.update}
          onClose={() => hideSnackbar('update')}
          action={{
            label: 'RETRY',
            onClick: () => {
              alert('Retrying update...');
              hideSnackbar('update');
            },
          }}
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

// Custom Icons
export const CustomIcons: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    
    return (
      <div style={{ padding: '20px' }}>
        <button
          onClick={() => setOpen(true)}
          style={{
            padding: '12px 24px',
            backgroundColor: '#005E3F',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
          }}
        >
          Show Custom Icon Snackbar
        </button>
        
        <Snackbar
          message="Download completed"
          variant="default"
          open={open}
          onClose={() => setOpen(false)}
          icon="check"
          action={{
            label: 'OPEN',
            onClick: () => {
              alert('Opening file...');
              setOpen(false);
            },
          }}
        />
      </div>
    );
  },
};

// Interactive Demo
// TODO: Implement proper notification queue management
// Current limitation: Multiple snackbars may not stack properly on all devices 