import { defineConfig } from 'tsup';
import { sassPlugin } from 'esbuild-sass-plugin';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  esbuildPlugins: [
    sassPlugin({
      type: 'style',
    }),
  ],
  esbuildOptions(options) {
    options.banner = {
      js: '"use client"',
    };
  },
  // Ensure .d.ts files are generated
  tsconfig: 'tsconfig.json',
  // Don't bundle React
  external: ['react', 'react-dom']
});
