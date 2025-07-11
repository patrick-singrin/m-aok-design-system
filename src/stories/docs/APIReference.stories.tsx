import type { Meta, StoryObj } from '@storybook/react';

// Documentation content component
const DocumentationContent = () => (
  <div style={{ padding: '20px', maxWidth: '800px', lineHeight: '1.6' }}>
    <h1>API Reference</h1>
    
    <p>Complete TypeScript API documentation for all AOK Design System components.</p>
    
    <h2>🏗️ Foundation Components</h2>
    
    <h3>Button</h3>
    <pre style={{ background: '#f5f5f5', padding: '12px', borderRadius: '4px', fontSize: '14px' }}>
      <code>{`interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'text';
  size?: 'small' | 'medium' | 'large';
  darkMode?: boolean;
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  onClick?: () => void;
  children: React.ReactNode;
}`}</code>
    </pre>
    
    <h3>Icon</h3>
    <pre style={{ background: '#f5f5f5', padding: '12px', borderRadius: '4px', fontSize: '14px' }}>
      <code>{`interface IconProps {
  name: IconName;
  size?: 'small' | 'medium' | 'large';
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'inherit';
  darkMode?: boolean;
  customSize?: number;
  customColor?: string;
  onClick?: () => void;
}`}</code>
    </pre>
    
    <h2>🧭 Navigation Components</h2>
    
    <h3>NavBar</h3>
    <pre style={{ background: '#f5f5f5', padding: '12px', borderRadius: '4px', fontSize: '14px' }}>
      <code>{`interface NavBarProps {
  title: string;
  variant?: 'default' | 'prominent' | 'transparent';
  darkMode?: boolean;
  leftAction?: {
    icon: IconName;
    onClick: () => void;
    'aria-label'?: string;
  };
  rightActions?: Array<{
    icon: IconName;
    onClick: () => void;
    'aria-label'?: string;
  }>;
}`}</code>
    </pre>
    
    <h3>TabBar</h3>
    <pre style={{ background: '#f5f5f5', padding: '12px', borderRadius: '4px', fontSize: '14px' }}>
      <code>{`interface TabBarProps {
  items: TabItem[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
  variant?: 'default' | 'elevated' | 'minimal';
  darkMode?: boolean;
}

interface TabItem {
  id: string;
  label: string;
  icon: IconName;
  badge?: number;
  disabled?: boolean;
}`}</code>
    </pre>
    
    <h2>🎮 Control Components</h2>
    
    <h3>IconButton</h3>
    <pre style={{ background: '#f5f5f5', padding: '12px', borderRadius: '4px', fontSize: '14px' }}>
      <code>{`interface IconButtonProps {
  icon: IconName;
  size?: 'small' | 'medium' | 'large';
  variant?: 'default' | 'primary' | 'secondary';
  darkMode?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  'aria-label': string;
}`}</code>
    </pre>
    
    <h3>FAB (Floating Action Button)</h3>
    <pre style={{ background: '#f5f5f5', padding: '12px', borderRadius: '4px', fontSize: '14px' }}>
      <code>{`interface FABProps {
  icon: IconName;
  variant?: 'primary' | 'secondary' | 'surface' | 'tertiary';
  size?: 'small' | 'medium' | 'large';
  extended?: boolean;
  label?: string;
  loading?: boolean;
  darkMode?: boolean;
  onClick?: () => void;
  position?: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left';
}`}</code>
    </pre>
    
    <h2>📝 Input Components</h2>
    
    <h3>Input</h3>
    <pre style={{ background: '#f5f5f5', padding: '12px', borderRadius: '4px', fontSize: '14px' }}>
      <code>{`interface InputProps {
  label: string;
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url';
  value?: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  error?: string;
  helperText?: string;
  leftIcon?: IconName;
  rightIcon?: IconName;
  darkMode?: boolean;
  onChange?: (value: string) => void;
  onFocus?: () => void;
  onBlur?: () => void;
}`}</code>
    </pre>
    
    <h3>Dropdown</h3>
    <pre style={{ background: '#f5f5f5', padding: '12px', borderRadius: '4px', fontSize: '14px' }}>
      <code>{`interface DropdownProps {
  label: string;
  options: DropdownOption[];
  value?: string | string[];
  placeholder?: string;
  searchable?: boolean;
  multiSelect?: boolean;
  disabled?: boolean;
  error?: string;
  darkMode?: boolean;
  onChange?: (value: string | string[]) => void;
}

interface DropdownOption {
  value: string;
  label: string;
  description?: string;
  group?: string;
  disabled?: boolean;
}`}</code>
    </pre>
    
    <h2>📦 Container Components</h2>
    
    <h3>Card</h3>
    <pre style={{ background: '#f5f5f5', padding: '12px', borderRadius: '4px', fontSize: '14px' }}>
      <code>{`interface CardProps {
  variant?: 'default' | 'outlined' | 'elevated';
  darkMode?: boolean;
  padding?: 'none' | 'small' | 'medium' | 'large';
  clickable?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
}`}</code>
    </pre>
    
    <h3>List</h3>
    <pre style={{ background: '#f5f5f5', padding: '12px', borderRadius: '4px', fontSize: '14px' }}>
      <code>{`interface ListProps {
  variant?: 'default' | 'outlined' | 'divided';
  darkMode?: boolean;
  children: React.ReactNode;
}

interface ListItemProps {
  primaryText: string;
  secondaryText?: string;
  leftIcon?: IconName;
  rightIcon?: IconName;
  trailing?: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
}`}</code>
    </pre>
    
    <h2>💬 Feedback Components</h2>
    
    <h3>Snackbar</h3>
    <pre style={{ background: '#f5f5f5', padding: '12px', borderRadius: '4px', fontSize: '14px' }}>
      <code>{`interface SnackbarProps {
  message: string;
  variant?: 'default' | 'success' | 'warning' | 'error' | 'info';
  open: boolean;
  onClose: () => void;
  autoHideDuration?: number;
  position?: 'top' | 'bottom' | 'top-center' | 'bottom-center';
  action?: {
    label: string;
    onClick: () => void;
  };
  showCloseButton?: boolean;
  icon?: IconName;
  darkMode?: boolean;
}`}</code>
    </pre>
    
    <h2>🎨 Design Tokens</h2>
    
    <h3>Colors</h3>
    <pre style={{ background: '#f5f5f5', padding: '12px', borderRadius: '4px', fontSize: '14px' }}>
      <code>{`const colors = {
  primary: {
    main: '#005E3F',
    light: '#E8F5E8',
    dark: '#003D2A',
  },
  semantic: {
    success: '#4CAF50',
    warning: '#FF9800',
    error: '#F44336',
    info: '#2196F3',
  },
  light: {
    background: '#FFFFFF',
    surface: '#F8F9FA',
    text: { primary: '#1A1A1A', secondary: '#666666' },
  },
  dark: {
    background: '#00150F',
    surface: '#1A2E23',
    text: { primary: '#FFFFFF', secondary: '#B3B3B3' },
  },
};`}</code>
    </pre>
    
    <h2>📚 Usage Examples</h2>
    
    <p>For complete usage examples, see the individual component stories in the sidebar navigation.</p>
    
    <h3>Basic Example</h3>
    <pre style={{ background: '#f5f5f5', padding: '12px', borderRadius: '4px', fontSize: '14px' }}>
      <code>{`import { Button, Card, Input, NavBar } from '@aok/design-system';

function MyApp() {
  return (
    <>
      <NavBar
        title="My App"
        leftAction={{
          icon: 'arrow-left',
          onClick: () => history.back(),
        }}
      />
      <Card>
        <Input 
          label="Email"
          type="email"
          placeholder="Enter your email"
        />
        <Button variant="primary" fullWidth>
          Sign In
        </Button>
      </Card>
    </>
  );
}`}</code>
    </pre>
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