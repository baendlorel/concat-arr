import terser from '@rollup/plugin-terser';

const terserOptions = {
  mangle: {
    toplevel: true, // 混淆顶层变量名
  },
  compress: true,
  format: {
    comments: false,
  },
};

export default {
  input: 'lib/index.js',
  output: [
    {
      file: 'dist/concat-arr.cjs',
      format: 'cjs',
      exports: 'auto',
      plugins: [terser(terserOptions)],
    },
    {
      file: 'dist/concat-arr.mjs',
      format: 'esm',
      plugins: [terser(terserOptions)],
    },
  ],
};
