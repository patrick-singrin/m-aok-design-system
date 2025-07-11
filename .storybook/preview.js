const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    viewport: {
      viewports: {
        iphone13: {
          name: 'iPhone 13',
          styles: {
            width: '390px',
            height: '844px',
          },
        },
      },
      defaultViewport: 'iphone13',
    },
    options: {
      storySort: {
        order: [
          'Introduction', 
          [
            'Getting Started',
            'Work in Progress', 
            'Design Guidelines', 
            'API Reference'
          ],
          'Components',
          '*'
        ],
      },
      // Set the initial story selection
      initialActive: 'introduction-getting-started--documentation'
    },
  },
};

export default preview; 