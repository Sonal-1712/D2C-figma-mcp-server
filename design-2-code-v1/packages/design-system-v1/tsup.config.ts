import { defineConfig } from 'tsup';
import { sassPlugin } from 'esbuild-sass-plugin';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  outDir: 'dist',
  esbuildPlugins: [
    sassPlugin({
      type: 'css',
      outDir: 'dist/css',
      basedir: './src',
    }),
  ],
  esbuildOptions(options) {
    options.loader = {
      ...options.loader,
      '.scss': 'css',
    };
  },
  onSuccess: 'cp -r src dist/sass',
});
