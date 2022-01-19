import { Thenable, TransformResult } from 'unplugin'
import { Options } from './types'

export default function(code: string, options: Options | undefined): Thenable<TransformResult> {
  if (options?.testing)
    return code

  const attrs = options?.attrs || ['data-testid', 'data-cy']
  const regexp = new RegExp(`(${attrs.join('|')})(=")[^"]*(")`, 'gm')

  return code.replace(regexp, '')
}
