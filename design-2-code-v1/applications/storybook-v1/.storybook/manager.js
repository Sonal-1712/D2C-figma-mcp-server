import { addons } from '@storybook/manager-api';
import { themes } from '@storybook/theming';

// Set the theme for Storybook manager UI
addons.setConfig({
  theme: themes.light,
  // Configure sidebar UI
  sidebar: {
    showRoots: true,
    collapsedRoots: ['misc'],
  },
});