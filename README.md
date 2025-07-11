# AOK Design System

A mobile-first React component library for iOS and Android applications.

## 🚀 Getting Started

```bash
npm install @aok/design-system
```

### Basic Usage

```jsx
import { Button, Card, Input } from '@aok/design-system';

function App() {
  return (
    <Card>
      <Input label="Email" type="email" />
      <Button variant="primary">Submit</Button>
    </Card>
  );
}
```

## 📚 Documentation

View the component library in [Storybook](http://localhost:6006):

```bash
npm run storybook
```

## 🎨 Design Tokens

- **Colors**: AOK brand green (#005E3F) with semantic variants
- **Typography**: AOK Buenos Aires Text
- **Spacing**: 8px grid system
- **Touch Targets**: 44px minimum for mobile accessibility

## 📱 Mobile-First Components

All components are optimized for mobile interfaces:

- ✅ Touch-friendly interactions (44px+ targets)
- ✅ Dark mode support
- ✅ Responsive design
- ✅ WCAG 2.1 AA accessibility

## 🔧 Development

### Prerequisites

- Node.js 16+
- npm or yarn

### Setup

```bash
git clone https://github.com/aok/design-system.git
cd design-system
npm install
npm run storybook
```

### Building

```bash
npm run build
```

## 📦 Available Components

### Foundation (Complete)
- Button, Icon

### Navigation (Complete) 
- NavBar, TabBar

### Controls (Complete)
- IconButton, FAB

### Inputs (Complete)
- Input, Dropdown

### Containers (Complete)
- Card, List

### Feedback (Complete)
- Snackbar

### In Development
- Advanced form controls
- Data display components
- Modal system

## 🤝 Contributing

1. Create feature branch from `develop`
2. Make changes with proper TypeScript types
3. Add Storybook stories
4. Ensure accessibility compliance
5. Create pull request

### Development Guidelines

- All components must support dark mode
- Maintain 44px+ touch targets
- Follow existing TypeScript patterns
- Include comprehensive Storybook documentation

## 📖 Resources

- [Figma Design System](https://figma.com/aok-design-system)
- [Component Guidelines](./docs/guidelines.md)
- [Accessibility Standards](./docs/accessibility.md)

## 📄 License

MIT License - see [LICENSE](./LICENSE) for details.

---

**Version**: 0.8.2  
**Maintained by**: AOK Design System Team
