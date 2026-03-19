import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  resolve: {
    alias: {
      // Add aliases to resolve paths correctly
      '@design-2-code-v1/components-v1': path.resolve(__dirname, '../../../packages/components-v1/src'),
      '@design-2-code-v1/design-system-v1': path.resolve(__dirname, '../../../packages/design-system-v1/src'),
      '@design-2-code-v1/atoms-v1': path.resolve(__dirname, '../../../packages/atoms-v1/src'),
      '@design-2-code-v1/molecules-v1': path.resolve(__dirname, '../../../packages/molecules-v1/src'),
      '@design-2-code-v1/organisms-v1': path.resolve(__dirname, '../../../packages/organisms-v1/src'),
      '@design-2-code-v1/screens-v1': path.resolve(__dirname, '../../../packages/screens-v1/src'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        // Add global SCSS imports
        additionalData: `
          @import "../../../packages/design-system-v1/src/scss/colors.scss";
          @import "../../../packages/design-system-v1/src/scss/typography.scss";
          @import "../../../packages/design-system-v1/src/scss/tokens.scss";
        `,
      },
    },
  },
  optimizeDeps: {
    // Include dependencies that need special handling
    include: ['react', 'react-dom'],
  },
});