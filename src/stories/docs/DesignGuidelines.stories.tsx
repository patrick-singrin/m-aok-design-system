import type { Meta, StoryObj } from '@storybook/react';

// Documentation content component
const DocumentationContent = () => (
  <div style={{ padding: '20px', maxWidth: '800px', lineHeight: '1.6' }}>
    <h1>Design Guidelines</h1>
    
    <p>The AOK Design System follows these core principles to ensure consistency and usability across all mobile applications.</p>
    
    <h2>🎯 Design Principles</h2>
    
    <h3>Mobile-First Approach</h3>
    <ul>
      <li><strong>Touch-Friendly</strong>: Minimum 44px touch targets</li>
      <li><strong>Thumb Navigation</strong>: Key actions within easy reach</li>
      <li><strong>Gesture Support</strong>: Swipe, pinch, and tap interactions</li>
    </ul>
    
    <h3>Accessibility</h3>
    <ul>
      <li><strong>WCAG 2.1 AA Compliance</strong>: All components meet accessibility standards</li>
      <li><strong>Screen Reader Support</strong>: Proper ARIA labels and semantic markup</li>
      <li><strong>High Contrast</strong>: 4.5:1 minimum contrast ratio</li>
    </ul>
    
    <h2>🎨 Color System</h2>
    
    <h3>Primary Colors</h3>
    <div style={{ display: 'flex', gap: '16px', margin: '20px 0' }}>
      <div style={{ textAlign: 'center' }}>
        <div style={{ width: '80px', height: '80px', background: '#005E3F', borderRadius: '8px', margin: '0 auto 8px' }}></div>
        <div><strong>Primary</strong></div>
        <div style={{ fontSize: '12px', color: '#666' }}>#005E3F</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <div style={{ width: '80px', height: '80px', background: '#E8F5E8', border: '1px solid #ddd', borderRadius: '8px', margin: '0 auto 8px' }}></div>
        <div><strong>Primary Light</strong></div>
        <div style={{ fontSize: '12px', color: '#666' }}>#E8F5E8</div>
      </div>
    </div>
    
    <h3>Semantic Colors</h3>
    <div style={{ display: 'flex', gap: '16px', margin: '20px 0' }}>
      <div style={{ textAlign: 'center' }}>
        <div style={{ width: '60px', height: '60px', background: '#4CAF50', borderRadius: '6px', margin: '0 auto 4px' }}></div>
        <div style={{ fontSize: '12px' }}>Success</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <div style={{ width: '60px', height: '60px', background: '#FF9800', borderRadius: '6px', margin: '0 auto 4px' }}></div>
        <div style={{ fontSize: '12px' }}>Warning</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <div style={{ width: '60px', height: '60px', background: '#F44336', borderRadius: '6px', margin: '0 auto 4px' }}></div>
        <div style={{ fontSize: '12px' }}>Error</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <div style={{ width: '60px', height: '60px', background: '#2196F3', borderRadius: '6px', margin: '0 auto 4px' }}></div>
        <div style={{ fontSize: '12px' }}>Info</div>
      </div>
    </div>
    
    <h2>📝 Typography</h2>
    
    <h3>Font Family</h3>
    <p><strong>AOK Buenos Aires Text</strong> - Our custom brand typography</p>
    
    <h3>Type Scale</h3>
    <div style={{ marginLeft: '20px' }}>
      <h1 style={{ margin: '8px 0', fontSize: '32px' }}>Heading 1 - 32px</h1>
      <h2 style={{ margin: '8px 0', fontSize: '24px' }}>Heading 2 - 24px</h2>
      <h3 style={{ margin: '8px 0', fontSize: '20px' }}>Heading 3 - 20px</h3>
      <p style={{ margin: '8px 0', fontSize: '16px' }}>Body Text - 16px</p>
      <p style={{ margin: '8px 0', fontSize: '14px' }}>Small Text - 14px</p>
      <p style={{ margin: '8px 0', fontSize: '12px' }}>Caption - 12px</p>
    </div>
    
    <h2>📏 Spacing System</h2>
    
    <h3>8px Grid System</h3>
    <p>All spacing follows multiples of 8px for consistent rhythm:</p>
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center', margin: '20px 0' }}>
      <div style={{ width: '8px', height: '20px', background: '#005E3F' }}></div>
      <span>8px (1 unit)</span>
    </div>
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center', margin: '20px 0' }}>
      <div style={{ width: '16px', height: '20px', background: '#005E3F' }}></div>
      <span>16px (2 units)</span>
    </div>
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center', margin: '20px 0' }}>
      <div style={{ width: '24px', height: '20px', background: '#005E3F' }}></div>
      <span>24px (3 units)</span>
    </div>
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center', margin: '20px 0' }}>
      <div style={{ width: '32px', height: '20px', background: '#005E3F' }}></div>
      <span>32px (4 units)</span>
    </div>
    
    <h2>📱 Layout Guidelines</h2>
    
    <h3>Mobile Viewports</h3>
    <ul>
      <li><strong>iPhone 13</strong>: 390 × 844px (default)</li>
      <li><strong>Android Medium</strong>: 360 × 640px</li>
      <li><strong>iPhone SE</strong>: 375 × 667px</li>
    </ul>
    
    <h3>Safe Areas</h3>
    <ul>
      <li>Respect device notches and home indicators</li>
      <li>Minimum 16px padding from screen edges</li>
      <li>Consider keyboard overlay on inputs</li>
    </ul>
    
    <h2>🌙 Dark Mode</h2>
    <p>All components support both light and dark themes:</p>
    <ul>
      <li>Automatic system preference detection</li>
      <li>Manual theme toggle support</li>
      <li>Consistent contrast ratios in both modes</li>
    </ul>
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