import type { Meta, StoryObj } from '@storybook/react';

// Documentation content component
const DocumentationContent = () => (
  <div style={{ 
    padding: '0',
    maxWidth: '100%', 
    lineHeight: '1.6',
    fontFamily: '"AOK Buenos Aires Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    color: '#1A1A1A'
  }}>
    {/* Hero Section */}
    <div style={{
      background: 'linear-gradient(135deg, #005E3F 0%, #003D2A 100%)',
      padding: '48px 32px',
      color: 'white',
      marginBottom: '0'
    }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ 
          fontSize: '48px', 
          fontWeight: 'bold', 
          margin: '0 0 16px 0',
          letterSpacing: '-0.5px'
        }}>AOK Design System</h1>
        <p style={{ 
          fontSize: '20px', 
          margin: '0 0 24px 0', 
          opacity: '0.9',
          lineHeight: '1.5'
        }}>Mobile-first React components designed for iOS and Android applications</p>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          padding: '12px 24px',
          borderRadius: '8px',
          border: '1px solid rgba(255, 255, 255, 0.2)'
        }}>
          <div style={{
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            background: '#4CAF50',
            marginRight: '8px'
          }}></div>
          <span style={{ fontSize: '14px', fontWeight: '500' }}>Version 0.8.2 • 11 Components • 70+ Stories</span>
        </div>
      </div>
    </div>

    {/* Content Section */}
    <div style={{ padding: '48px 32px', maxWidth: '800px', margin: '0 auto' }}>
      
      <p style={{ fontSize: '18px', marginBottom: '32px', color: '#666' }}>
        Welcome to the AOK Design System component library. This Storybook contains our mobile-first React components designed for iOS and Android applications.
      </p>
      
      <h2 style={{ color: '#005E3F', fontSize: '32px', marginBottom: '24px', fontWeight: 'bold' }}>🚀 Quick Start</h2>
      
      <h3 style={{ color: '#1A1A1A', fontSize: '24px', marginBottom: '16px', fontWeight: '600' }}>Installation</h3>
      <pre style={{ 
        background: '#F8F9FA', 
        padding: '24px', 
        borderRadius: '12px',
        fontSize: '14px',
        fontFamily: 'Monaco, "JetBrains Mono", "Fira Code", monospace',
        border: '1px solid #E8F5E8',
        overflow: 'auto'
      }}>
        <code>{`npm install @aok/design-system
# or
yarn add @aok/design-system`}</code>
      </pre>
      
      <h3 style={{ color: '#1A1A1A', fontSize: '24px', marginBottom: '16px', marginTop: '32px', fontWeight: '600' }}>Basic Usage</h3>
      <pre style={{ 
        background: '#F8F9FA', 
        padding: '24px', 
        borderRadius: '12px',
        fontSize: '14px',
        fontFamily: 'Monaco, "JetBrains Mono", "Fira Code", monospace',
        border: '1px solid #E8F5E8',
        overflow: 'auto'
      }}>
        <code>{`import { Button, Card, Input } from '@aok/design-system';

function App() {
  return (
    <div>
      <Button variant="primary">Get Started</Button>
      <Card>
        <Input label="Email" type="email" />
      </Card>
    </div>
  );
}`}</code>
      </pre>
      
      <h2 style={{ color: '#005E3F', fontSize: '32px', marginBottom: '24px', marginTop: '48px', fontWeight: 'bold' }}>📱 Mobile-First Design</h2>
      <p style={{ marginBottom: '16px', color: '#666' }}>All components are designed with mobile-first principles:</p>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '32px' }}>
        <div style={{ 
          padding: '24px', 
          background: '#F8F9FA', 
          borderRadius: '12px',
          border: '1px solid #E8F5E8'
        }}>
          <div style={{ fontSize: '24px', marginBottom: '8px' }}>🎯</div>
          <h4 style={{ margin: '0 0 8px 0', color: '#005E3F', fontWeight: '600' }}>Touch Targets</h4>
          <p style={{ margin: '0', fontSize: '14px', color: '#666' }}>Minimum 44px for accessibility</p>
        </div>
        <div style={{ 
          padding: '24px', 
          background: '#F8F9FA', 
          borderRadius: '12px',
          border: '1px solid #E8F5E8'
        }}>
          <div style={{ fontSize: '24px', marginBottom: '8px' }}>📱</div>
          <h4 style={{ margin: '0 0 8px 0', color: '#005E3F', fontWeight: '600' }}>Responsive</h4>
          <p style={{ margin: '0', fontSize: '14px', color: '#666' }}>Optimized for iOS and Android</p>
        </div>
        <div style={{ 
          padding: '24px', 
          background: '#F8F9FA', 
          borderRadius: '12px',
          border: '1px solid #E8F5E8'
        }}>
          <div style={{ fontSize: '24px', marginBottom: '8px' }}>🌙</div>
          <h4 style={{ margin: '0 0 8px 0', color: '#005E3F', fontWeight: '600' }}>Dark Mode</h4>
          <p style={{ margin: '0', fontSize: '14px', color: '#666' }}>Complete theme support</p>
        </div>
        <div style={{ 
          padding: '24px', 
          background: '#F8F9FA', 
          borderRadius: '12px',
          border: '1px solid #E8F5E8'
        }}>
          <div style={{ fontSize: '24px', marginBottom: '8px' }}>♿</div>
          <h4 style={{ margin: '0 0 8px 0', color: '#005E3F', fontWeight: '600' }}>Accessibility</h4>
          <p style={{ margin: '0', fontSize: '14px', color: '#666' }}>WCAG 2.1 AA compliant</p>
        </div>
      </div>
      
      <h2 style={{ color: '#005E3F', fontSize: '32px', marginBottom: '24px', fontWeight: 'bold' }}>🎨 Design Tokens</h2>
      <p style={{ marginBottom: '24px', color: '#666' }}>Our design system is built on consistent design tokens:</p>
      
      <div style={{ 
        background: '#F8F9FA', 
        padding: '32px', 
        borderRadius: '12px',
        border: '1px solid #E8F5E8',
        marginBottom: '32px'
      }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px' }}>
          <div>
            <h4 style={{ margin: '0 0 12px 0', color: '#005E3F', fontWeight: '600' }}>Colors</h4>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
              <div style={{ width: '24px', height: '24px', background: '#005E3F', borderRadius: '4px', marginRight: '12px' }}></div>
              <span style={{ fontSize: '14px', color: '#666' }}>Primary Green #005E3F</span>
            </div>
            <p style={{ margin: '0', fontSize: '12px', color: '#999' }}>With semantic variants</p>
          </div>
          <div>
            <h4 style={{ margin: '0 0 12px 0', color: '#005E3F', fontWeight: '600' }}>Typography</h4>
            <p style={{ margin: '0 0 8px 0', fontSize: '14px', color: '#666', fontWeight: '600' }}>AOK Buenos Aires Text</p>
            <p style={{ margin: '0', fontSize: '12px', color: '#999' }}>Custom brand typography</p>
          </div>
          <div>
            <h4 style={{ margin: '0 0 12px 0', color: '#005E3F', fontWeight: '600' }}>Spacing</h4>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
              <div style={{ width: '8px', height: '16px', background: '#005E3F', marginRight: '8px' }}></div>
              <div style={{ width: '16px', height: '16px', background: '#005E3F', marginRight: '8px' }}></div>
              <div style={{ width: '24px', height: '16px', background: '#005E3F', marginRight: '8px' }}></div>
            </div>
            <p style={{ margin: '0', fontSize: '12px', color: '#999' }}>8px grid system</p>
          </div>
        </div>
      </div>
      
      <h2 style={{ color: '#005E3F', fontSize: '32px', marginBottom: '24px', fontWeight: 'bold' }}>📚 Component Categories</h2>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px', marginBottom: '48px' }}>
        <div style={{ 
          padding: '24px', 
          background: 'white', 
          borderRadius: '12px',
          border: '2px solid #E8F5E8',
          boxShadow: '0 2px 8px rgba(0, 94, 63, 0.1)'
        }}>
          <h3 style={{ margin: '0 0 8px 0', color: '#005E3F', fontWeight: '600' }}>Foundation</h3>
          <p style={{ margin: '0', fontSize: '14px', color: '#666' }}>Core building blocks and basic elements</p>
        </div>
        <div style={{ 
          padding: '24px', 
          background: 'white', 
          borderRadius: '12px',
          border: '2px solid #E8F5E8',
          boxShadow: '0 2px 8px rgba(0, 94, 63, 0.1)'
        }}>
          <h3 style={{ margin: '0 0 8px 0', color: '#005E3F', fontWeight: '600' }}>Navigation</h3>
          <p style={{ margin: '0', fontSize: '14px', color: '#666' }}>Components for app navigation and wayfinding</p>
        </div>
        <div style={{ 
          padding: '24px', 
          background: 'white', 
          borderRadius: '12px',
          border: '2px solid #E8F5E8',
          boxShadow: '0 2px 8px rgba(0, 94, 63, 0.1)'
        }}>
          <h3 style={{ margin: '0 0 8px 0', color: '#005E3F', fontWeight: '600' }}>Controls</h3>
          <p style={{ margin: '0', fontSize: '14px', color: '#666' }}>Interactive elements and action triggers</p>
        </div>
        <div style={{ 
          padding: '24px', 
          background: 'white', 
          borderRadius: '12px',
          border: '2px solid #E8F5E8',
          boxShadow: '0 2px 8px rgba(0, 94, 63, 0.1)'
        }}>
          <h3 style={{ margin: '0 0 8px 0', color: '#005E3F', fontWeight: '600' }}>Inputs</h3>
          <p style={{ margin: '0', fontSize: '14px', color: '#666' }}>Form controls and data entry components</p>
        </div>
        <div style={{ 
          padding: '24px', 
          background: 'white', 
          borderRadius: '12px',
          border: '2px solid #E8F5E8',
          boxShadow: '0 2px 8px rgba(0, 94, 63, 0.1)'
        }}>
          <h3 style={{ margin: '0 0 8px 0', color: '#005E3F', fontWeight: '600' }}>Containers</h3>
          <p style={{ margin: '0', fontSize: '14px', color: '#666' }}>Layout and content organization components</p>
        </div>
        <div style={{ 
          padding: '24px', 
          background: 'white', 
          borderRadius: '12px',
          border: '2px solid #E8F5E8',
          boxShadow: '0 2px 8px rgba(0, 94, 63, 0.1)'
        }}>
          <h3 style={{ margin: '0 0 8px 0', color: '#005E3F', fontWeight: '600' }}>Feedback</h3>
          <p style={{ margin: '0', fontSize: '14px', color: '#666' }}>User feedback and notification components</p>
        </div>
      </div>
      
      <h2 style={{ color: '#005E3F', fontSize: '32px', marginBottom: '24px', fontWeight: 'bold' }}>🔧 Development Status</h2>
      <p style={{ marginBottom: '24px', color: '#666' }}>This design system is actively being developed. Current status:</p>
      
      <div style={{ 
        background: 'linear-gradient(135deg, #E8F5E8 0%, #F0F9F0 100%)', 
        padding: '32px', 
        borderRadius: '12px',
        border: '1px solid #D4E6D4',
        marginBottom: '32px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
          <div style={{ 
            width: '40px', 
            height: '8px', 
            background: '#005E3F', 
            borderRadius: '4px',
            marginRight: '12px'
          }}></div>
          <span style={{ fontSize: '16px', fontWeight: '600', color: '#005E3F' }}>70% Complete</span>
        </div>
        <ul style={{ margin: '0', paddingLeft: '20px', color: '#333' }}>
          <li>✅ <strong>Foundation Components</strong> - Complete</li>
          <li>✅ <strong>Navigation System</strong> - Complete</li>
          <li>✅ <strong>Basic Controls</strong> - Complete</li>
          <li>✅ <strong>Input System</strong> - Complete</li>
          <li>🚧 <strong>Advanced Controls</strong> - In Progress</li>
          <li>🚧 <strong>Data Display</strong> - Planned</li>
          <li>🚧 <strong>Overlay Components</strong> - Planned</li>
        </ul>
      </div>
      
      <hr style={{ margin: '48px 0', border: 'none', height: '1px', background: '#E8F5E8' }} />
      
      <div style={{ 
        background: '#F8F9FA', 
        padding: '32px', 
        borderRadius: '12px',
        border: '1px solid #E8F5E8',
        textAlign: 'center'
      }}>
        <p style={{ fontSize: '16px', color: '#666', margin: '0 0 8px 0' }}>
          <strong>Version</strong>: 0.8.2<br />
          <strong>Last Updated</strong>: January 2024<br />
          <strong>Maintained by</strong>: AOK Design System Team
        </p>
      </div>
    </div>
  </div>
);

const meta: Meta<typeof DocumentationContent> = {
  title: 'Introduction/Getting Started',
  component: DocumentationContent,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Documentation: Story = {
  render: () => <DocumentationContent />,
}; 