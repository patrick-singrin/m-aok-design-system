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
        }}>Design Guidelines</h1>
        <p style={{ 
          fontSize: '20px', 
          margin: '0 0 24px 0', 
          opacity: '0.9',
          lineHeight: '1.5'
        }}>Principles, patterns, and best practices for the AOK Design System</p>
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
          <span style={{ fontSize: '14px', fontWeight: '500' }}>WCAG 2.1 AA • Mobile-First • 8px Grid</span>
        </div>
      </div>
    </div>

    {/* Content Section */}
    <div style={{ padding: '48px 32px', maxWidth: '800px', margin: '0 auto' }}>
      
      <p style={{ fontSize: '18px', marginBottom: '32px', color: '#666' }}>
        Our design system is built on consistent principles that ensure accessibility, usability, and visual coherence across all AOK applications.
      </p>
      
      <h2 style={{ color: '#005E3F', fontSize: '32px', marginBottom: '24px', fontWeight: 'bold' }}>🎨 Design Principles</h2>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', marginBottom: '48px' }}>
        <div style={{ 
          padding: '32px', 
          background: 'linear-gradient(135deg, #E8F5E8 0%, #F0F9F0 100%)', 
          borderRadius: '12px',
          border: '1px solid #D4E6D4'
        }}>
          <div style={{ fontSize: '32px', marginBottom: '16px' }}>♿</div>
          <h3 style={{ margin: '0 0 12px 0', color: '#005E3F', fontWeight: '600' }}>Accessibility First</h3>
          <p style={{ margin: '0', fontSize: '14px', color: '#666', lineHeight: '1.5' }}>
            WCAG 2.1 AA compliance is not optional. Every component includes proper ARIA labels, keyboard navigation, and screen reader support.
          </p>
        </div>
        <div style={{ 
          padding: '32px', 
          background: 'linear-gradient(135deg, #E8F5E8 0%, #F0F9F0 100%)', 
          borderRadius: '12px',
          border: '1px solid #D4E6D4'
        }}>
          <div style={{ fontSize: '32px', marginBottom: '16px' }}>📱</div>
          <h3 style={{ margin: '0 0 12px 0', color: '#005E3F', fontWeight: '600' }}>Mobile-First</h3>
          <p style={{ margin: '0', fontSize: '14px', color: '#666', lineHeight: '1.5' }}>
            Designed for touch interfaces with minimum 44px touch targets and optimized for thumb-friendly interactions.
          </p>
        </div>
        <div style={{ 
          padding: '32px', 
          background: 'linear-gradient(135deg, #E8F5E8 0%, #F0F9F0 100%)', 
          borderRadius: '12px',
          border: '1px solid #D4E6D4'
        }}>
          <div style={{ fontSize: '32px', marginBottom: '16px' }}>🔧</div>
          <h3 style={{ margin: '0 0 12px 0', color: '#005E3F', fontWeight: '600' }}>Consistency</h3>
          <p style={{ margin: '0', fontSize: '14px', color: '#666', lineHeight: '1.5' }}>
            Unified design tokens ensure visual and functional consistency across all components and applications.
          </p>
        </div>
        <div style={{ 
          padding: '32px', 
          background: 'linear-gradient(135deg, #E8F5E8 0%, #F0F9F0 100%)', 
          borderRadius: '12px',
          border: '1px solid #D4E6D4'
        }}>
          <div style={{ fontSize: '32px', marginBottom: '16px' }}>⚡</div>
          <h3 style={{ margin: '0 0 12px 0', color: '#005E3F', fontWeight: '600' }}>Performance</h3>
          <p style={{ margin: '0', fontSize: '14px', color: '#666', lineHeight: '1.5' }}>
            Lightweight, efficient components with minimal bundle impact and optimized rendering performance.
          </p>
        </div>
      </div>
      
      <h2 style={{ color: '#2196F3', fontSize: '32px', marginBottom: '24px', fontWeight: 'bold' }}>🎯 Spacing System</h2>
      
      <div style={{ 
        background: 'linear-gradient(135deg, #E3F2FD 0%, #BBDEFB 100%)', 
        padding: '32px', 
        borderRadius: '12px',
        border: '1px solid #90CAF9',
        marginBottom: '32px'
      }}>
        <h3 style={{ margin: '0 0 24px 0', color: '#2196F3', fontWeight: '600' }}>8px Grid System</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '16px', marginBottom: '24px' }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ width: '8px', height: '32px', background: '#2196F3', margin: '0 auto 8px', borderRadius: '2px' }}></div>
            <div style={{ fontSize: '14px', fontWeight: '600', color: '#2196F3' }}>4px</div>
            <div style={{ fontSize: '12px', color: '#666' }}>xs</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ width: '8px', height: '32px', background: '#2196F3', margin: '0 auto 8px', borderRadius: '2px' }}></div>
            <div style={{ fontSize: '14px', fontWeight: '600', color: '#2196F3' }}>8px</div>
            <div style={{ fontSize: '12px', color: '#666' }}>sm</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ width: '16px', height: '32px', background: '#2196F3', margin: '0 auto 8px', borderRadius: '2px' }}></div>
            <div style={{ fontSize: '14px', fontWeight: '600', color: '#2196F3' }}>16px</div>
            <div style={{ fontSize: '12px', color: '#666' }}>md</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ width: '24px', height: '32px', background: '#2196F3', margin: '0 auto 8px', borderRadius: '2px' }}></div>
            <div style={{ fontSize: '14px', fontWeight: '600', color: '#2196F3' }}>24px</div>
            <div style={{ fontSize: '12px', color: '#666' }}>lg</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ width: '32px', height: '32px', background: '#2196F3', margin: '0 auto 8px', borderRadius: '2px' }}></div>
            <div style={{ fontSize: '14px', fontWeight: '600', color: '#2196F3' }}>32px</div>
            <div style={{ fontSize: '12px', color: '#666' }}>xl</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ width: '48px', height: '32px', background: '#2196F3', margin: '0 auto 8px', borderRadius: '2px' }}></div>
            <div style={{ fontSize: '14px', fontWeight: '600', color: '#2196F3' }}>48px</div>
            <div style={{ fontSize: '12px', color: '#666' }}>xxl</div>
          </div>
        </div>
        <p style={{ margin: '0', fontSize: '14px', color: '#666', textAlign: 'center' }}>
          All spacing values are multiples of 8px for consistent rhythm and alignment
        </p>
      </div>
      
      <h2 style={{ color: '#FF9800', fontSize: '32px', marginBottom: '24px', fontWeight: 'bold' }}>🎨 Color System</h2>
      
      <div style={{ 
        background: 'linear-gradient(135deg, #FFF8E1 0%, #FFF3C4 100%)', 
        padding: '32px', 
        borderRadius: '12px',
        border: '1px solid #FFE0B2',
        marginBottom: '32px'
      }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px' }}>
          <div>
            <h4 style={{ margin: '0 0 16px 0', color: '#FF9800', fontWeight: '600' }}>Primary</h4>
            <div style={{ marginBottom: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
                <div style={{ width: '32px', height: '32px', background: '#005E3F', borderRadius: '6px', marginRight: '12px' }}></div>
                <div>
                  <div style={{ fontSize: '14px', fontWeight: '600', color: '#333' }}>Primary</div>
                  <div style={{ fontSize: '12px', color: '#666' }}>#005E3F</div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h4 style={{ margin: '0 0 16px 0', color: '#FF9800', fontWeight: '600' }}>Semantic</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{ width: '20px', height: '20px', background: '#4CAF50', borderRadius: '4px', marginRight: '8px' }}></div>
                <span style={{ fontSize: '12px', color: '#666' }}>Success</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{ width: '20px', height: '20px', background: '#FF9800', borderRadius: '4px', marginRight: '8px' }}></div>
                <span style={{ fontSize: '12px', color: '#666' }}>Warning</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{ width: '20px', height: '20px', background: '#F44336', borderRadius: '4px', marginRight: '8px' }}></div>
                <span style={{ fontSize: '12px', color: '#666' }}>Error</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{ width: '20px', height: '20px', background: '#2196F3', borderRadius: '4px', marginRight: '8px' }}></div>
                <span style={{ fontSize: '12px', color: '#666' }}>Info</span>
              </div>
            </div>
          </div>
          <div>
            <h4 style={{ margin: '0 0 16px 0', color: '#FF9800', fontWeight: '600' }}>Neutrals</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{ width: '20px', height: '20px', background: '#1A1A1A', borderRadius: '4px', marginRight: '8px' }}></div>
                <span style={{ fontSize: '12px', color: '#666' }}>Text Primary</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{ width: '20px', height: '20px', background: '#666', borderRadius: '4px', marginRight: '8px' }}></div>
                <span style={{ fontSize: '12px', color: '#666' }}>Text Secondary</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{ width: '20px', height: '20px', background: '#F8F9FA', border: '1px solid #E8F5E8', borderRadius: '4px', marginRight: '8px' }}></div>
                <span style={{ fontSize: '12px', color: '#666' }}>Background</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <h2 style={{ color: '#673AB7', fontSize: '32px', marginBottom: '24px', fontWeight: 'bold' }}>📝 Typography</h2>
      
      <div style={{ 
        background: 'linear-gradient(135deg, #F3E5F5 0%, #E1BEE7 100%)', 
        padding: '32px', 
        borderRadius: '12px',
        border: '1px solid #CE93D8',
        marginBottom: '32px'
      }}>
        <h3 style={{ margin: '0 0 24px 0', color: '#673AB7', fontWeight: '600' }}>AOK Buenos Aires Text</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ padding: '16px', background: 'white', borderRadius: '8px', border: '1px solid #CE93D8' }}>
            <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#1A1A1A', marginBottom: '4px' }}>Heading 1</div>
            <div style={{ fontSize: '12px', color: '#666' }}>32px • Bold • -0.5px letter spacing</div>
          </div>
          <div style={{ padding: '16px', background: 'white', borderRadius: '8px', border: '1px solid #CE93D8' }}>
            <div style={{ fontSize: '24px', fontWeight: '600', color: '#1A1A1A', marginBottom: '4px' }}>Heading 2</div>
            <div style={{ fontSize: '12px', color: '#666' }}>24px • Semibold</div>
          </div>
          <div style={{ padding: '16px', background: 'white', borderRadius: '8px', border: '1px solid #CE93D8' }}>
            <div style={{ fontSize: '16px', fontWeight: '500', color: '#1A1A1A', marginBottom: '4px' }}>Body Text</div>
            <div style={{ fontSize: '12px', color: '#666' }}>16px • Medium • 1.6 line height</div>
          </div>
          <div style={{ padding: '16px', background: 'white', borderRadius: '8px', border: '1px solid #CE93D8' }}>
            <div style={{ fontSize: '14px', fontWeight: '400', color: '#666', marginBottom: '4px' }}>Caption Text</div>
            <div style={{ fontSize: '12px', color: '#666' }}>14px • Regular</div>
          </div>
        </div>
      </div>
      
      <h2 style={{ color: '#4CAF50', fontSize: '32px', marginBottom: '24px', fontWeight: 'bold' }}>📐 Component Guidelines</h2>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '24px', marginBottom: '48px' }}>
        <div style={{ 
          padding: '24px', 
          background: 'white', 
          borderRadius: '12px',
          border: '2px solid #E8F5E8',
          boxShadow: '0 2px 8px rgba(0, 94, 63, 0.1)'
        }}>
          <h3 style={{ margin: '0 0 16px 0', color: '#4CAF50', fontWeight: '600' }}>Touch Targets</h3>
          <ul style={{ margin: '0', paddingLeft: '20px', color: '#333', lineHeight: '1.6' }}>
            <li>Minimum 44px × 44px for mobile</li>
            <li>48px for primary actions</li>
            <li>Adequate spacing between targets</li>
            <li>Visual feedback for all interactions</li>
          </ul>
        </div>
        <div style={{ 
          padding: '24px', 
          background: 'white', 
          borderRadius: '12px',
          border: '2px solid #E8F5E8',
          boxShadow: '0 2px 8px rgba(0, 94, 63, 0.1)'
        }}>
          <h3 style={{ margin: '0 0 16px 0', color: '#4CAF50', fontWeight: '600' }}>Content Structure</h3>
          <ul style={{ margin: '0', paddingLeft: '20px', color: '#333', lineHeight: '1.6' }}>
            <li>Clear visual hierarchy</li>
            <li>Meaningful headings and labels</li>
            <li>Logical reading order</li>
            <li>Scannable content layout</li>
          </ul>
        </div>
        <div style={{ 
          padding: '24px', 
          background: 'white', 
          borderRadius: '12px',
          border: '2px solid #E8F5E8',
          boxShadow: '0 2px 8px rgba(0, 94, 63, 0.1)'
        }}>
          <h3 style={{ margin: '0 0 16px 0', color: '#4CAF50', fontWeight: '600' }}>Responsive Design</h3>
          <ul style={{ margin: '0', paddingLeft: '20px', color: '#333', lineHeight: '1.6' }}>
            <li>Mobile-first approach</li>
            <li>Flexible layouts</li>
            <li>Optimal content density</li>
            <li>Platform-specific optimizations</li>
          </ul>
        </div>
        <div style={{ 
          padding: '24px', 
          background: 'white', 
          borderRadius: '12px',
          border: '2px solid #E8F5E8',
          boxShadow: '0 2px 8px rgba(0, 94, 63, 0.1)'
        }}>
          <h3 style={{ margin: '0 0 16px 0', color: '#4CAF50', fontWeight: '600' }}>Accessibility</h3>
          <ul style={{ margin: '0', paddingLeft: '20px', color: '#333', lineHeight: '1.6' }}>
            <li>ARIA labels and descriptions</li>
            <li>Keyboard navigation support</li>
            <li>Screen reader compatibility</li>
            <li>Color contrast compliance</li>
          </ul>
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
        <h3 style={{ margin: '0 0 16px 0', color: '#005E3F', fontWeight: '600' }}>Need Help?</h3>
        <p style={{ fontSize: '16px', color: '#666', margin: '0' }}>
          Questions about implementation? Check the API Reference or contact the Design System team for guidance on specific use cases.
        </p>
      </div>
    </div>
  </div>
);

const meta: Meta<typeof DocumentationContent> = {
  title: 'Introduction/Design Guidelines',
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