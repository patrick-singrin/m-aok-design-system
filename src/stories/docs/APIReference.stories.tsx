import type { Meta, StoryObj } from '@storybook/react';

// Documentation content component
const DocumentationContent = () => (
  <div style={{ 
    padding: '0',
    maxWidth: '100%', 
    lineHeight: '1.6',
    fontFamily: '"AOK Buenos Aires Text", -apple-system, BlinkMacSystemFont, "Segma UI", Roboto, sans-serif',
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
        }}>API Reference</h1>
        <p style={{ 
          fontSize: '20px', 
          margin: '0 0 24px 0', 
          opacity: '0.9',
          lineHeight: '1.5'
        }}>Complete component APIs, props, and implementation examples</p>
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
          <span style={{ fontSize: '14px', fontWeight: '500' }}>TypeScript • Fully Typed • Auto-Complete</span>
        </div>
      </div>
    </div>

    {/* Content Section */}
    <div style={{ padding: '48px 32px', maxWidth: '800px', margin: '0 auto' }}>
      
      <p style={{ fontSize: '18px', marginBottom: '32px', color: '#666' }}>
        Comprehensive documentation for all AOK Design System components, including props, methods, and TypeScript definitions.
      </p>
      
      <h2 style={{ color: '#005E3F', fontSize: '32px', marginBottom: '24px', fontWeight: 'bold' }}>🚀 Getting Started</h2>
      
      <div style={{ 
        background: 'linear-gradient(135deg, #E8F5E8 0%, #F0F9F0 100%)', 
        padding: '32px', 
        borderRadius: '12px',
        border: '1px solid #D4E6D4',
        marginBottom: '32px'
      }}>
        <h3 style={{ margin: '0 0 16px 0', color: '#005E3F', fontWeight: '600' }}>Basic Import</h3>
        <div style={{ 
          background: 'white', 
          padding: '24px', 
          borderRadius: '8px',
          fontSize: '14px',
          fontFamily: 'Monaco, "JetBrains Mono", "Fira Code", monospace',
          border: '1px solid #D4E6D4',
          marginBottom: '16px'
        }}>
          import &#123; Button, Card, Input &#125; from '@aok/design-system';<br/>
          <br/>
          // Import with types<br/>
          import &#123; Button, type ButtonProps &#125; from '@aok/design-system';
        </div>
        
        <h3 style={{ margin: '16px 0', color: '#005E3F', fontWeight: '600' }}>Global Styles</h3>
        <div style={{ 
          background: 'white', 
          padding: '24px', 
          borderRadius: '8px',
          fontSize: '14px',
          fontFamily: 'Monaco, "JetBrains Mono", "Fira Code", monospace',
          border: '1px solid #D4E6D4'
        }}>
          // Include CSS variables and base styles<br/>
          import '@aok/design-system/dist/index.css';
        </div>
      </div>
      
      <h2 style={{ color: '#2196F3', fontSize: '32px', marginBottom: '24px', fontWeight: 'bold' }}>📚 Foundation Components</h2>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '24px', marginBottom: '48px' }}>
        
        {/* Button Component */}
        <div style={{ 
          background: 'white', 
          padding: '32px', 
          borderRadius: '12px',
          border: '2px solid #E3F2FD',
          boxShadow: '0 2px 8px rgba(33, 150, 243, 0.1)'
        }}>
          <h3 style={{ margin: '0 0 16px 0', color: '#2196F3', fontWeight: '600', fontSize: '24px' }}>Button</h3>
          <p style={{ margin: '0 0 24px 0', color: '#666' }}>Primary action component with multiple variants and states.</p>
          
          <h4 style={{ margin: '0 0 12px 0', color: '#1A1A1A', fontWeight: '600' }}>Props</h4>
          <div style={{ 
            background: '#F8F9FA', 
            padding: '16px', 
            borderRadius: '8px',
            border: '1px solid #E3F2FD',
            marginBottom: '16px'
          }}>
            <div style={{ fontFamily: 'Monaco, monospace', fontSize: '13px' }}>
              <div style={{ marginBottom: '8px' }}><strong>variant?:</strong> 'primary' | 'secondary' | 'text'</div>
              <div style={{ marginBottom: '8px' }}><strong>size?:</strong> 'small' | 'medium' | 'large'</div>
              <div style={{ marginBottom: '8px' }}><strong>disabled?:</strong> boolean</div>
              <div style={{ marginBottom: '8px' }}><strong>loading?:</strong> boolean</div>
              <div style={{ marginBottom: '8px' }}><strong>icon?:</strong> React.ReactNode</div>
              <div style={{ marginBottom: '8px' }}><strong>fullWidth?:</strong> boolean</div>
              <div><strong>onClick?:</strong> (event: MouseEvent) =&gt; void</div>
            </div>
          </div>
          
          <h4 style={{ margin: '0 0 12px 0', color: '#1A1A1A', fontWeight: '600' }}>Usage</h4>
          <div style={{ 
            background: '#F8F9FA', 
            padding: '16px', 
            borderRadius: '8px',
            fontSize: '13px',
            border: '1px solid #E3F2FD',
            color: '#666'
          }}>
            See the Button component page for interactive examples and detailed usage patterns.
          </div>
        </div>
        
        {/* Icon Component */}
        <div style={{ 
          background: 'white', 
          padding: '32px', 
          borderRadius: '12px',
          border: '2px solid #E3F2FD',
          boxShadow: '0 2px 8px rgba(33, 150, 243, 0.1)'
        }}>
          <h3 style={{ margin: '0 0 16px 0', color: '#2196F3', fontWeight: '600', fontSize: '24px' }}>Icon</h3>
          <p style={{ margin: '0 0 24px 0', color: '#666' }}>SVG icon component with consistent sizing and colors.</p>
          
          <h4 style={{ margin: '0 0 12px 0', color: '#1A1A1A', fontWeight: '600' }}>Props</h4>
          <div style={{ 
            background: '#F8F9FA', 
            padding: '16px', 
            borderRadius: '8px',
            border: '1px solid #E3F2FD',
            marginBottom: '16px'
          }}>
            <div style={{ fontFamily: 'Monaco, monospace', fontSize: '13px' }}>
              <div style={{ marginBottom: '8px' }}><strong>name:</strong> IconName (30+ available icons)</div>
              <div style={{ marginBottom: '8px' }}><strong>size?:</strong> 'small' | 'medium' | 'large' | number</div>
              <div style={{ marginBottom: '8px' }}><strong>color?:</strong> 'primary' | 'secondary' | 'success' | 'warning' | 'error' | string</div>
              <div><strong>className?:</strong> string</div>
            </div>
          </div>
          
          <h4 style={{ margin: '0 0 12px 0', color: '#1A1A1A', fontWeight: '600' }}>Usage</h4>
          <div style={{ 
            background: '#F8F9FA', 
            padding: '16px', 
            borderRadius: '8px',
            fontSize: '13px',
            border: '1px solid #E3F2FD',
            color: '#666'
          }}>
            See the Icon component page for the complete icon library and usage examples.
          </div>
        </div>
      </div>
      
      <h2 style={{ color: '#FF9800', fontSize: '32px', marginBottom: '24px', fontWeight: 'bold' }}>🧩 Navigation Components</h2>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '24px', marginBottom: '48px' }}>
        
        {/* NavBar Component */}
        <div style={{ 
          background: 'white', 
          padding: '32px', 
          borderRadius: '12px',
          border: '2px solid #FFF8E1',
          boxShadow: '0 2px 8px rgba(255, 152, 0, 0.1)'
        }}>
          <h3 style={{ margin: '0 0 16px 0', color: '#FF9800', fontWeight: '600', fontSize: '24px' }}>NavBar</h3>
          <p style={{ margin: '0 0 24px 0', color: '#666' }}>Top navigation component with title, actions, and multiple variants.</p>
          
          <h4 style={{ margin: '0 0 12px 0', color: '#1A1A1A', fontWeight: '600' }}>Key Props</h4>
          <div style={{ 
            background: '#F8F9FA', 
            padding: '16px', 
            borderRadius: '8px',
            border: '1px solid #FFF8E1',
            marginBottom: '16px'
          }}>
            <div style={{ fontFamily: 'Monaco, monospace', fontSize: '13px' }}>
              <div style={{ marginBottom: '8px' }}><strong>title:</strong> string</div>
              <div style={{ marginBottom: '8px' }}><strong>subtitle?:</strong> string</div>
              <div style={{ marginBottom: '8px' }}><strong>leftAction?:</strong> NavBarAction</div>
              <div style={{ marginBottom: '8px' }}><strong>rightActions?:</strong> NavBarAction[]</div>
              <div style={{ marginBottom: '8px' }}><strong>variant?:</strong> 'default' | 'prominent' | 'floating'</div>
              <div><strong>transparent?:</strong> boolean</div>
            </div>
          </div>
        </div>
        
        {/* TabBar Component */}
        <div style={{ 
          background: 'white', 
          padding: '32px', 
          borderRadius: '12px',
          border: '2px solid #FFF8E1',
          boxShadow: '0 2px 8px rgba(255, 152, 0, 0.1)'
        }}>
          <h3 style={{ margin: '0 0 16px 0', color: '#FF9800', fontWeight: '600', fontSize: '24px' }}>TabBar</h3>
          <p style={{ margin: '0 0 24px 0', color: '#666' }}>Bottom navigation with badges and touch-optimized targets.</p>
          
          <h4 style={{ margin: '0 0 12px 0', color: '#1A1A1A', fontWeight: '600' }}>Key Props</h4>
          <div style={{ 
            background: '#F8F9FA', 
            padding: '16px', 
            borderRadius: '8px',
            border: '1px solid #FFF8E1'
          }}>
            <div style={{ fontFamily: 'Monaco, monospace', fontSize: '13px' }}>
              <div style={{ marginBottom: '8px' }}><strong>tabs:</strong> TabItem[]</div>
              <div style={{ marginBottom: '8px' }}><strong>activeTab:</strong> string</div>
              <div style={{ marginBottom: '8px' }}><strong>onTabChange:</strong> (tabId: string) =&gt; void</div>
              <div><strong>variant?:</strong> 'default' | 'floating' | 'minimal'</div>
            </div>
          </div>
        </div>
      </div>
      
      <h2 style={{ color: '#4CAF50', fontSize: '32px', marginBottom: '24px', fontWeight: 'bold' }}>📝 Form Components</h2>
      
      <div style={{ 
        background: 'linear-gradient(135deg, #E8F5E8 0%, #F0F9F0 100%)', 
        padding: '32px', 
        borderRadius: '12px',
        border: '1px solid #D4E6D4',
        marginBottom: '32px'
      }}>
        <p style={{ margin: '0 0 24px 0', color: '#666', fontSize: '16px' }}>
          All form components include built-in validation, error states, and accessibility features.
        </p>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '16px' }}>
          <div style={{ padding: '16px', background: 'white', borderRadius: '8px', border: '1px solid #D4E6D4' }}>
            <h4 style={{ margin: '0 0 8px 0', color: '#4CAF50', fontWeight: '600' }}>Input</h4>
            <p style={{ margin: '0', fontSize: '14px', color: '#666' }}>Text input with labels, validation, and icons</p>
          </div>
          <div style={{ padding: '16px', background: 'white', borderRadius: '8px', border: '1px solid #D4E6D4' }}>
            <h4 style={{ margin: '0 0 8px 0', color: '#4CAF50', fontWeight: '600' }}>Dropdown</h4>
            <p style={{ margin: '0', fontSize: '14px', color: '#666' }}>Single/multi-select with search and grouping</p>
          </div>
        </div>
      </div>
      
      <h2 style={{ color: '#673AB7', fontSize: '32px', marginBottom: '24px', fontWeight: 'bold' }}>🔧 TypeScript Support</h2>
      
      <div style={{ 
        background: 'linear-gradient(135deg, #F3E5F5 0%, #E1BEE7 100%)', 
        padding: '32px', 
        borderRadius: '12px',
        border: '1px solid #CE93D8',
        marginBottom: '32px'
      }}>
        <h3 style={{ margin: '0 0 16px 0', color: '#673AB7', fontWeight: '600' }}>Fully Typed Components</h3>
        <p style={{ margin: '0 0 16px 0', color: '#666' }}>
          All components include comprehensive TypeScript definitions for better development experience.
        </p>
        
        <div style={{ 
          background: 'white', 
          padding: '24px', 
          borderRadius: '8px',
          fontSize: '14px',
          fontFamily: 'Monaco, "JetBrains Mono", "Fira Code", monospace',
          border: '1px solid #CE93D8'
        }}>
          // Type definitions are included<br/>
          import &#123; Button, type ButtonProps, type IconName &#125; from '@aok/design-system';<br/>
          <br/>
          // Full IntelliSense support<br/>
          const buttonProps: ButtonProps = &#123;<br/>
          &nbsp;&nbsp;variant: 'primary', // Autocomplete available<br/>
          &nbsp;&nbsp;size: 'large',<br/>
          &nbsp;&nbsp;disabled: false<br/>
          &#125;;<br/>
          <br/>
          // Icon names are strongly typed<br/>
          const iconName: IconName = 'user'; // 30+ options
        </div>
      </div>
      
      <hr style={{ margin: '48px 0', border: 'none', height: '1px', background: '#E8F5E8' }} />
      
      <div style={{ 
        background: '#F8F9FA', 
        padding: '32px', 
        borderRadius: '12px',
        border: '1px solid #E8F5E8',
        textAlign: 'center'
      }}>
        <h3 style={{ margin: '0 0 16px 0', color: '#005E3F', fontWeight: '600' }}>Explore Components</h3>
        <p style={{ fontSize: '16px', color: '#666', margin: '0' }}>
          Visit individual component pages in the sidebar to see detailed examples, interactive demos, and complete prop documentation.
        </p>
      </div>
    </div>
  </div>
);

const meta: Meta<typeof DocumentationContent> = {
  title: 'Introduction/API Reference',
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