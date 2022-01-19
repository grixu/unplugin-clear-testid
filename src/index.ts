import { createUnplugin } from 'unplugin'
import { Options } from './types'
import { htmlTransformer, vueTransformer} from './core'

export default createUnplugin<Options>(options => ({
  name: 'unplugin-clear-testid',
  transformInclude(id) {
    return /.(js|jsx|ts|tsx|vue)/.test(id)
  },
  transform(code) {
    code = htmlTransformer(code, options)
    code = vueTransformer(code, options)
    return code
  },
}))
