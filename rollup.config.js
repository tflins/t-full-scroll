// ./`rollup.config.js`

import typescript from 'rollup-plugin-typescript'
import sourceMaps from 'rollup-plugin-sourcemaps'
import serve from 'rollup-plugin-serve'

import livereload from 'rollup-plugin-livereload'

export default {
  input: './src/index.ts',
  plugins: [
    typescript({
      exclude: 'node_modules/**',
      typescript: require('typescript')
    }),
    sourceMaps(),
    livereload(),
    serve({
      open: true,
      openPage: '/public/index.html',
      port: 3000,
      contentBase: ''
    })
  ],
  output: [
    {
      format: 'cjs',
      file: 'lib/bundle.cjs.js',
      sourcemap: true
    },
    {
      format: 'es',
      file: 'lib/bundle.esm.js',
      sourcemap: true
    }
  ]
}
