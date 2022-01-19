import { createUnplugin } from 'unplugin'
import { Options } from './types'
import transformer from './core'

export default createUnplugin<Options>(options => ({
  name: 'unplugin-clear-testid',
  transformInclude(id) {
    return /.(js|jsx|ts|tsx|vue)/.test(id)
  },
  transform(code) {
    return transformer(code, options)
  },
}))
