import { defineConfig } from 'tsup';
import { sassPlugin } from 'esbuild-sass-plugin';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'],
  dts: false, // Disable TypeScript declaration generation for now
  splitting: false,
  sourcemap: true,
  clean: true,
  esbuildPlugins: [
    sassPlugin()
  ],
  esbuildOptions(options) {
    options.loader = {
      ...options.loader,
      '.scss': 'css',
    };
  },
});