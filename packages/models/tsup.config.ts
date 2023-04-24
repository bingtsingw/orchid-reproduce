import { defineConfig } from 'tsup';

export default defineConfig((options) => {
  return {
    entry: ['index.ts'],
    format: 'cjs',
    splitting: false,
    sourcemap: true,
    dts: true,
    clean: true,
    minify: !options.watch,
  };
});
