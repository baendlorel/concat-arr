import terser from '@rollup/plugin-terser';

export default {
  input: 'lib/index.js',
  output: [
    {
      file: 'dist/concat-arr.cjs',
      format: 'cjs',
      exports: 'auto',
      plugins: [terser()],
    },
    {
      file: 'dist/concat-arr.mjs',
      format: 'esm',
      plugins: [terser()],
    },
  ],
};
