import type { Meta, StoryObj } from '@storybook/react';

// Documentation content component
const DocumentationContent = () => (
  <div style={{ padding: '20px', maxWidth: '800px', lineHeight: '1.6' }}>
    <h1>AOK Design System</h1>
    
    <p>Welcome to the AOK Design System component library. This Storybook contains our mobile-first React components designed for iOS and Android applications.</p>
    
    <h2>🚀 Quick Start</h2>
    
    <h3>Installation</h3>
    <pre style={{ background: '#f5f5f5', padding: '12px', borderRadius: '4px' }}>
      <code>{`npm install @aok/design-system
# or
yarn add @aok/design-system`}</code>
    </pre>
    
    <h3>Basic Usage</h3>
    <pre style={{ background: '#f5f5f5', padding: '12px', borderRadius: '4px' }}>
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
    
    <h2>📱 Mobile-First Design</h2>
    <p>All components are designed with mobile-first principles:</p>
    <ul>
      <li><strong>Touch Targets</strong>: Minimum 44px for accessibility</li>
      <li><strong>Responsive</strong>: Optimized for iOS and Android viewports</li>
      <li><strong>Dark Mode</strong>: Complete theme support</li>
      <li><strong>Accessibility</strong>: WCAG 2.1 AA compliant</li>
    </ul>
    
    <h2>🎨 Design Tokens</h2>
    <p>Our design system is built on consistent design tokens:</p>
    <ul>
      <li><strong>Colors</strong>: AOK brand green (#005E3F) with semantic variants</li>
      <li><strong>Typography</strong>: AOK Buenos Aires Text font family</li>
      <li><strong>Spacing</strong>: 8px grid system</li>
      <li><strong>Touch Targets</strong>: Mobile-optimized interaction areas</li>
    </ul>
    
    <h2>📚 Component Categories</h2>
    
    <h3>Foundation</h3>
    <p>Core building blocks and basic elements</p>
    
    <h3>Navigation</h3>
    <p>Components for app navigation and wayfinding</p>
    
    <h3>Controls</h3>
    <p>Interactive elements and action triggers</p>
    
    <h3>Inputs</h3>
    <p>Form controls and data entry components</p>
    
    <h3>Containers</h3>
    <p>Layout and content organization components</p>
    
    <h3>Feedback</h3>
    <p>User feedback and notification components</p>
    
    <h2>🔧 Development Status</h2>
    <p>This design system is actively being developed. Current status:</p>
    <ul>
      <li>✅ <strong>Foundation Components</strong> - Complete</li>
      <li>✅ <strong>Navigation System</strong> - Complete</li>
      <li>✅ <strong>Basic Controls</strong> - Complete</li>
      <li>✅ <strong>Input System</strong> - Complete</li>
      <li>🚧 <strong>Advanced Controls</strong> - In Progress</li>
      <li>🚧 <strong>Data Display</strong> - Planned</li>
      <li>🚧 <strong>Overlay Components</strong> - Planned</li>
    </ul>
    
    <h2>🤝 Contributing</h2>
    <p>For questions, issues, or contributions, please contact the design system team.</p>
    
    <h3>Development Guidelines</h3>
    <ul>
      <li>All components must support dark mode</li>
      <li>Maintain minimum 44px touch targets for mobile</li>
      <li>Follow TypeScript strict mode</li>
      <li>Include comprehensive Storybook documentation</li>
      <li>Ensure WCAG 2.1 AA accessibility compliance</li>
    </ul>
    
    <h2>📖 Resources</h2>
    <ul>
      <li><a href="https://figma.com/aok-design-system">Figma Design File</a></li>
      <li><a href="https://github.com/aok/design-system">GitHub Repository</a></li>
      <li>Design Guidelines</li>
      <li>Component API Reference</li>
    </ul>
    
    <hr style={{ margin: '40px 0' }} />
    
    <p style={{ fontSize: '14px', color: '#666' }}>
      <strong>Version</strong>: 0.8.2<br />
      <strong>Last Updated</strong>: January 2024<br />
      <strong>Maintained by</strong>: AOK Design System Team
    </p>
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