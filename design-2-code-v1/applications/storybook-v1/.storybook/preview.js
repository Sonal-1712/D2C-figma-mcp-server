/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    layout: 'centered',
    // Ensure proper path handling for assets
    staticDirs: {
      // Use production path for GitHub Pages, relative path for development
      base: process.env.NODE_ENV === 'production' ? '/SDLC/design-2-code-v1' : '.',
    },
  },
};

export default preview;