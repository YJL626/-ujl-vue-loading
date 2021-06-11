import packageJSON from './package.json'
import path from 'path'
import image from '@rollup/plugin-image'
import vuePlugin from 'rollup-plugin-vue'
import ts from 'rollup-plugin-typescript2'
import dts from 'rollup-plugin-dts'
// eslint-disable-next-line no-undef
const getPath = (_path) => path.resolve(__dirname, _path)
const input = getPath('./src/index.ts')
const external = ['vue']
const watch = {
  include: 'src/**',
}
const jsBaseConfig = {
  input,
  plugins: [image(), ts(), vuePlugin()],
  watch,
  external,
}
const outputMap = [
  {
    file: packageJSON.iife, // iife
    format: 'iife',
    name: 'loading',
    globals: {
      vue: 'Vue',
    },
  },
  {
    file: packageJSON.main, // cjs
    format: 'cjs',
  },
  {
    file: packageJSON.module, // es
    format: 'es',
  },
]
const buildJsConf = (options) => Object.assign({}, jsBaseConfig, options)
const jsConfigs = outputMap.map((output) =>
  buildJsConf({ output: { name: packageJSON.name, ...output } })
)
const dtsConfig = {
  input,
  output: {
    file: packageJSON.types,
    format: 'es',
  },
  plugins: [dts()],
  external,
}
export default [...jsConfigs, dtsConfig]
