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
        }}>Work in Progress</h1>
        <p style={{ 
          fontSize: '20px', 
          margin: '0 0 24px 0', 
          opacity: '0.9',
          lineHeight: '1.5'
        }}>Current development status and upcoming features</p>
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
          <span style={{ fontSize: '14px', fontWeight: '500' }}>11 Components • Production Ready</span>
        </div>
      </div>
    </div>

    {/* Content Section */}
    <div style={{ padding: '48px 32px', maxWidth: '800px', margin: '0 auto' }}>
      
      <p style={{ fontSize: '18px', marginBottom: '32px', color: '#666' }}>
        The AOK Design System is actively being developed. Here's our current progress and what's coming next.
      </p>
      
      <h2 style={{ color: '#4CAF50', fontSize: '32px', marginBottom: '24px', fontWeight: 'bold' }}>✅ Completed Components (v1.0.0)</h2>
      <div style={{ 
        background: 'linear-gradient(135deg, #E8F5E8 0%, #F0F9F0 100%)', 
        padding: '32px', 
        borderRadius: '12px',
        border: '1px solid #D4E6D4',
        marginBottom: '32px'
      }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '16px' }}>
          <div>
            <h4 style={{ margin: '0 0 12px 0', color: '#005E3F', fontWeight: '600' }}>Foundation Components</h4>
            <ul style={{ margin: '0', paddingLeft: '20px', color: '#333' }}>
              <li><strong>Button</strong> - Primary, secondary, text variants with icons</li>
              <li><strong>Icon</strong> - 30+ SVG icons with proper accessibility</li>
            </ul>
          </div>
          <div>
            <h4 style={{ margin: '0 0 12px 0', color: '#005E3F', fontWeight: '600' }}>Navigation</h4>
            <ul style={{ margin: '0', paddingLeft: '20px', color: '#333' }}>
              <li><strong>NavBar</strong> - App navigation with actions and variants</li>
              <li><strong>TabBar</strong> - Bottom navigation with badges</li>
            </ul>
          </div>
          <div>
            <h4 style={{ margin: '0 0 12px 0', color: '#005E3F', fontWeight: '600' }}>Controls</h4>
            <ul style={{ margin: '0', paddingLeft: '20px', color: '#333' }}>
              <li><strong>IconButton</strong> - Compact action buttons</li>
              <li><strong>FAB</strong> - Floating action button with positioning</li>
            </ul>
          </div>
          <div>
            <h4 style={{ margin: '0 0 12px 0', color: '#005E3F', fontWeight: '600' }}>Inputs & Containers</h4>
            <ul style={{ margin: '0', paddingLeft: '20px', color: '#333' }}>
              <li><strong>Input</strong> - Text input with validation and icons</li>
              <li><strong>Dropdown</strong> - Single/multi-select with search</li>
              <li><strong>Card</strong> - Content containers with variants</li>
              <li><strong>List</strong> - Structured lists with icons and actions</li>
            </ul>
          </div>
          <div>
            <h4 style={{ margin: '0 0 12px 0', color: '#005E3F', fontWeight: '600' }}>Feedback</h4>
            <ul style={{ margin: '0', paddingLeft: '20px', color: '#333' }}>
              <li><strong>Snackbar</strong> - Toast notifications with actions</li>
            </ul>
          </div>
        </div>
      </div>
      
      <h2 style={{ color: '#FF9800', fontSize: '32px', marginBottom: '24px', fontWeight: 'bold' }}>🚧 In Progress (v1.1.0)</h2>
      <div style={{ 
        background: 'linear-gradient(135deg, #FFF8E1 0%, #FFF3C4 100%)', 
        padding: '32px', 
        borderRadius: '12px',
        border: '1px solid #FFE0B2',
        marginBottom: '32px'
      }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
          <div style={{ 
            padding: '24px', 
            background: 'white', 
            borderRadius: '12px',
            border: '1px solid #FFE0B2'
          }}>
            <h4 style={{ margin: '0 0 12px 0', color: '#FF9800', fontWeight: '600' }}>Modal System</h4>
            <ul style={{ margin: '0', paddingLeft: '20px', color: '#333' }}>
              <li>Dialog overlays</li>
              <li>Fullscreen modals</li>
              <li>Bottom sheets</li>
            </ul>
          </div>
          <div style={{ 
            padding: '24px', 
            background: 'white', 
            borderRadius: '12px',
            border: '1px solid #FFE0B2'
          }}>
            <h4 style={{ margin: '0 0 12px 0', color: '#FF9800', fontWeight: '600' }}>Navigation</h4>
            <ul style={{ margin: '0', paddingLeft: '20px', color: '#333' }}>
              <li>Drawer component</li>
              <li>Action sheets</li>
              <li>Side navigation panels</li>
            </ul>
          </div>
          <div style={{ 
            padding: '24px', 
            background: 'white', 
            borderRadius: '12px',
            border: '1px solid #FFE0B2'
          }}>
            <h4 style={{ margin: '0 0 12px 0', color: '#FF9800', fontWeight: '600' }}>Indicators</h4>
            <ul style={{ margin: '0', paddingLeft: '20px', color: '#333' }}>
              <li>Badge component</li>
              <li>Progress bars</li>
              <li>Loading indicators</li>
            </ul>
          </div>
        </div>
      </div>
      
      <h2 style={{ color: '#2196F3', fontSize: '32px', marginBottom: '24px', fontWeight: 'bold' }}>📋 Planned (v1.2.0)</h2>
      <div style={{ 
        background: 'linear-gradient(135deg, #E3F2FD 0%, #BBDEFB 100%)', 
        padding: '32px', 
        borderRadius: '12px',
        border: '1px solid #90CAF9',
        marginBottom: '32px'
      }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
          <div style={{ 
            padding: '24px', 
            background: 'white', 
            borderRadius: '12px',
            border: '1px solid #90CAF9'
          }}>
            <h4 style={{ margin: '0 0 12px 0', color: '#2196F3', fontWeight: '600' }}>Form Controls</h4>
            <ul style={{ margin: '0', paddingLeft: '20px', color: '#333' }}>
              <li>Checkbox groups</li>
              <li>Radio button sets</li>
              <li>Toggle switches</li>
              <li>Range sliders</li>
            </ul>
          </div>
          <div style={{ 
            padding: '24px', 
            background: 'white', 
            borderRadius: '12px',
            border: '1px solid #90CAF9'
          }}>
            <h4 style={{ margin: '0 0 12px 0', color: '#2196F3', fontWeight: '600' }}>Advanced Inputs</h4>
            <ul style={{ margin: '0', paddingLeft: '20px', color: '#333' }}>
              <li>Date/time pickers</li>
              <li>Search with suggestions</li>
              <li>File upload</li>
              <li>Rich text editor</li>
            </ul>
          </div>
          <div style={{ 
            padding: '24px', 
            background: 'white', 
            borderRadius: '12px',
            border: '1px solid #90CAF9'
          }}>
            <h4 style={{ margin: '0 0 12px 0', color: '#2196F3', fontWeight: '600' }}>Data Display</h4>
            <ul style={{ margin: '0', paddingLeft: '20px', color: '#333' }}>
              <li>Data tables</li>
              <li>Charts & graphs</li>
              <li>Timeline component</li>
              <li>Avatar groups</li>
            </ul>
          </div>
        </div>
      </div>
      
      <h2 style={{ color: '#F44336', fontSize: '32px', marginBottom: '24px', fontWeight: 'bold' }}>🐛 Known Issues</h2>
      
      <div style={{ 
        background: 'linear-gradient(135deg, #FFEBEE 0%, #FFCDD2 100%)', 
        padding: '32px', 
        borderRadius: '12px',
        border: '1px solid #EF9A9A',
        marginBottom: '32px'
      }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
          <div>
            <h4 style={{ margin: '0 0 12px 0', color: '#F44336', fontWeight: '600' }}>Current Limitations</h4>
            <ul style={{ margin: '0', paddingLeft: '20px', color: '#333' }}>
              <li>TabBar badge positioning on smaller screens</li>
              <li>Dropdown keyboard navigation improvements needed</li>
              <li>Snackbar queue management could be more sophisticated</li>
              <li>Some dark mode edge cases with nested components</li>
            </ul>
          </div>
          <div>
            <h4 style={{ margin: '0 0 12px 0', color: '#F44336', fontWeight: '600' }}>Performance Optimizations</h4>
            <ul style={{ margin: '0', paddingLeft: '20px', color: '#333' }}>
              <li>Bundle size optimization for icon library</li>
              <li>Lazy loading for complex components</li>
              <li>Animation performance on older devices</li>
              <li>Memory usage in long lists</li>
            </ul>
          </div>
        </div>
      </div>
      
      <h2 style={{ color: '#673AB7', fontSize: '32px', marginBottom: '24px', fontWeight: 'bold' }}>📈 Progress Metrics</h2>
      
      <div style={{ 
        background: 'linear-gradient(135deg, #E8F5E8 0%, #F0F9F0 100%)', 
        padding: '32px', 
        borderRadius: '12px',
        border: '1px solid #D4E6D4',
        marginBottom: '32px'
      }}>
        <div style={{ marginBottom: '24px' }}>
          <h4 style={{ margin: '0 0 12px 0', color: '#005E3F', fontWeight: '600' }}>Component Coverage</h4>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
                      <div style={{ 
            width: '300px', 
            height: '20px', 
            background: '#E8F5E8', 
            borderRadius: '10px', 
            marginRight: '16px',
            overflow: 'hidden'
          }}>
            <div style={{ width: '100%', height: '100%', background: '#005E3F', borderRadius: '10px' }}></div>
          </div>
            <span style={{ fontSize: '16px', fontWeight: '600', color: '#005E3F' }}>11 components complete • Essential mobile coverage achieved</span>
          </div>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#005E3F', marginBottom: '4px' }}>11</div>
            <div style={{ fontSize: '14px', color: '#666' }}>Components v1.0</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#FF9800', marginBottom: '4px' }}>6</div>
            <div style={{ fontSize: '14px', color: '#666' }}>Next (v1.1)</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#2196F3', marginBottom: '4px' }}>12+</div>
            <div style={{ fontSize: '14px', color: '#666' }}>Future (v1.2+)</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#673AB7', marginBottom: '4px' }}>70+</div>
            <div style={{ fontSize: '14px', color: '#666' }}>Stories</div>
          </div>
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
        <p style={{ fontSize: '16px', color: '#666', margin: '0 0 8px 0' }}>
          <strong>Last Release</strong>: July 11, 2025<br />
          <strong>Status</strong>: Production Ready<br />
          <strong>Next Milestone</strong>: Advanced Component Library
        </p>
      </div>
    </div>
  </div>
);

const meta: Meta<typeof DocumentationContent> = {
  title: 'Introduction/Work in Progress',
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