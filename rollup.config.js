// rollup.config.js
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';


export default {
  input: 'src/sketch.js',
  output: {
    file: 'bundle.js',
    format: 'iife',
  },
  preserveEntrySignatures: 'exports-only',
  plugins: [resolve(), commonjs()],
};