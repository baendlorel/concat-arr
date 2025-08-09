export default {
  input: 'lib/index.js',
  output: [
    {
      file: 'dist/concat-arr.cjs',
      format: 'cjs',
      exports: 'auto',
    },
    {
      file: 'dist/concat-arr.mjs',
      format: 'esm',
    },
  ],
};
