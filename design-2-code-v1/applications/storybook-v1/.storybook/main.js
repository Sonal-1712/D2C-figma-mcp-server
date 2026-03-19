/** @type { import('@storybook/react-vite').StorybookConfig } */
import path from 'path';

const config = {
  stories: [
    // Include test stories from the Storybook app
    '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    // Include atoms-v1 components only
    '../../../packages/atoms-v1/src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    // Include screens-v1 components
    '../../../packages/screens-v1/src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    // Include components-v1 components
    '../../../packages/components-v1/src/**/*.stories.@(js|jsx|mjs|ts|tsx)'
    // molecules-v1 and organisms-v1 packages will be added later when they're created
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  staticDirs: ['../public'],
  viteFinal: (config) => {
    // Set the base URL for GitHub Pages deployment only in production
    // Use relative path in development to fix module loading issues
    config.base = process.env.NODE_ENV === 'production' ? '/SDLC/design-2-code-v1/' : './';
    
    // Configure Vite to resolve relative imports properly
    if (!config.resolve) {
      config.resolve = {};
    }
    
    if (!config.resolve.alias) {
      config.resolve.alias = {};
    }
    
    // Add aliases for our packages
    config.resolve.alias['@design-2-code-v1/components-v1'] = path.resolve(__dirname, '../../../packages/components-v1/src');
    config.resolve.alias['@design-2-code-v1/design-system-v1'] = path.resolve(__dirname, '../../../packages/design-system-v1/src');
    
    // Configure SASS for components
    config.css = {
      ...config.css,
      preprocessorOptions: {
        ...config?.css?.preprocessorOptions,
        scss: {
          ...config?.css?.preprocessorOptions?.scss,
          additionalData: '@import "../../../packages/design-system-v1/src/scss/colors.scss"; @import "../../../packages/design-system-v1/src/scss/typography.scss"; @import "../../../packages/design-system-v1/src/scss/tokens.scss";'
        }
      }
    };
    
    // Add fs support for Vite
    config.optimizeDeps = {
      ...(config.optimizeDeps || {}),
      esbuildOptions: {
        ...(config?.optimizeDeps?.esbuildOptions || {}),
        plugins: [
          ...(config?.optimizeDeps?.esbuildOptions?.plugins || []),
        ],
        define: {
          ...(config?.optimizeDeps?.esbuildOptions?.define || {}),
          'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
        }
      },
    };
    
    return config;
  },
};
export default config;