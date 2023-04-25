import { defineConfig } from 'tsup';

export default defineConfig((options) => {
  return {
    entry: ['index.ts'],
    format: 'cjs',
    splitting: false,
    sourcemap: true,
    dts: false,
    clean: true,
    minify: !options.watch,
  };
});
