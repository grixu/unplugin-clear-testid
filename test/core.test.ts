import transformer from '../src/core'

describe('Core', () => {
  const exampleCode = '<div data-testid="something">data-testid</div>'
    + '<div data-test-id="some-shot">data-test-id</div><div data-cy="cypresss">data-cy</div>'

  it('it replace given attrs', () => {
    const result = transformer(exampleCode, { attrs: ['data-test-id'] })

    expect(result).toBeTruthy()
    expect(result).toContain('data-testid="')
    expect(result).toContain('data-cy="')
    expect(result).not.toContain('data-test-id="')
    expect(result).toContain('>data-test-id<')
    expect(result).toContain('>data-testid<')
    expect(result).toContain('>data-cy<')
  })

  it('passing code with any modifications when in testing mode', () => {
    const result = transformer(exampleCode, { testing: true })

    expect(result).toMatch(exampleCode)
  })

  it('working without given options', () => {
    const result = transformer(exampleCode, undefined)

    expect(result).toBeTruthy()
    expect(result).not.toContain('data-testid="')
    expect(result).not.toContain('data-cy="')
    expect(result).toContain('data-test-id="')
    expect(result).toContain('>data-test-id<')
    expect(result).toContain('>data-testid<')
    expect(result).toContain('>data-cy<')
  })
})
