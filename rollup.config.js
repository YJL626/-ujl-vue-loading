import packageJSON from './package.json'
import path from 'path'

import image from '@rollup/plugin-image'
import vuePlugin from 'rollup-plugin-vue'
import ts from 'rollup-plugin-typescript2'
import dts from 'rollup-plugin-dts'

// eslint-disable-next-line no-undef
const getPath = (_path) => path.resolve(__dirname, _path)

const commonConf = {
  input: getPath('./src/index.ts'),
  plugins: [ts(), image(), vuePlugin()],
  watch: {
    include: 'src/**',
  },
}
const outputMap = [
  /*   {
    file: packageJSON.iife, // iife
    format: 'iife',
    name: 'loading',
    globals: {
      vue: 'vue',
    },
  }, */
  {
    file: packageJSON.main, // cjs
    format: 'cjs',
    external: ['vue'],
  },
  {
    file: packageJSON.module, // es
    format: 'es',
  },
]

const buildConf = (options) => Object.assign({}, commonConf, options)

export default outputMap.map((output) =>
  buildConf({ output: { name: packageJSON.name, ...output } })
)
