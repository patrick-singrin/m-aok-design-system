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

### Live Documentation
🔗 **[View Live Storybook](https://aok-design-system.netlify.app)** - Complete component library and design guidelines

### Local Development
```bash
# Start Storybook locally
npm run storybook

# Build for production  
npm run build-storybook
```

### Deployment
See [DEPLOYMENT.md](./DEPLOYMENT.md) for instructions on deploying to Netlify via GitHub.

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

### ✨ Achievement Highlights
- **11 Components** - Complete and production-ready
- **70+ Stories** - Comprehensive Storybook documentation  
- **Created in One Day** - November 7, 2025
- **Mobile-First** - Optimized for iOS and Android
- **Design System** - Complete with tokens and guidelines

### 🔮 Coming Next
- Advanced form controls (date pickers, sliders)
- Data display components (tables, charts)
- Modal and overlay system
- Advanced navigation patterns

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

- [Live Storybook](https://aok-design-system.netlify.app) - Interactive component documentation
- [Deployment Guide](./DEPLOYMENT.md) - How to deploy to Netlify
- [Figma Design System](https://figma.com/aok-design-system) - Design specifications
- [Component Guidelines](./docs/guidelines.md) - Development standards
- [Accessibility Standards](./docs/accessibility.md) - A11y requirements

## 📄 License

MIT License - see [LICENSE](./LICENSE) for details.

---

**Version**: 1.0.0  
**Created**: November 7, 2025  
**Status**: Production Ready  
**Maintained by**: AOK Design System Team
