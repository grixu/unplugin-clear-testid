import { createUnplugin } from 'unplugin'
import { Options } from './types'
import { htmlTransformer, vueTransformer } from './core'

export default createUnplugin<Options>(options => ({
  name: 'unplugin-clear-testid',
  transformInclude(id) {
    return /.(js|jsx|ts|tsx|vue)/.test(id)
  },
  transform(code) {
    code = vueTransformer(code, options)
    code = htmlTransformer(code, options)
    return code
  },
}))
