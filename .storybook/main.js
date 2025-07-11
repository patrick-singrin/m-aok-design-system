const config = {
  stories: [
    '../src/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-links',
    '@storybook/addon-docs',
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  staticDirs: ['../public'],
  // Ensure proper static file serving for deployment
  managerHead: (head) => `
    ${head}
    <base href="/" />
  `,
  typescript: {
    check: false,
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
    },
  },
  features: {
    buildStoriesJson: true,
  },
  webpackFinal: async (config) => {
    // Ensure TypeScript files are handled properly
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      exclude: /node_modules/,
      use: [
        {
          loader: 'ts-loader',
          options: {
            transpileOnly: true,
          },
        },
      ],
    });

    config.resolve.extensions.push('.ts', '.tsx');

    // Ensure proper public path for deployment
    config.output = config.output || {};
    config.output.publicPath = '/';

    return config;
  },
};

export default config; 