import { Options } from './types'

function htmlTransformer(code: string, options: Options | undefined): string {
  if (options?.testing)
    return code

  const attrs = options?.attrs || ['data-testid', 'data-cy']
  const regexp = new RegExp(`(${attrs.join('|')})(=")[^"]*(")`, 'gm')

  return code.replace(regexp, '')
}

function vueTransformer(code: string, options: Options | undefined): string {
  if (options?.testing)
    return code

  const attrs = options?.attrs || ['data-testid', 'data-cy']
  const regexp = [
    new RegExp(`"(${attrs.join('|')})":\\s+".*[^"]`, 'gm'),
    new RegExp(`'(${attrs.join('|')})':\\s+'.*[^']`, 'gm'),
    new RegExp(`:(${attrs.join('|')})=".*[^"]`, 'gm'),
    new RegExp(`:(${attrs.join('|')})='.*[^']`, 'gm'),
  ]

  for (const regex of regexp)
    code = code.replace(regex, '')

  return code
}

export {
  htmlTransformer,
  vueTransformer,
}
