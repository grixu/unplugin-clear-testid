import { vueTransformer } from '../src/core'

describe('HtmlTransformer', () => {
  const exampleCode = `function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock(), _createElementBlock("div", null, [
    _createElementVNode("div", _hoisted_1, [
      _withDirectives(_createElementVNode("input", _mergeProps({
        id: $setup.innerId,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.innerValue = $event),
        type: "checkbox"
      }, _ctx.$attrs, {
        "data-testid": "input-checkbox",
        class: ["h-4 w-4 rounded", $setup.validationStyle]
      }), null, 16, _hoisted_2), [
        [_vModelCheckbox, $setup.innerValue]
      ]),
      _createElementVNode("label", {
        for: $setup.innerId,
        class: "ml-2 block text-sm text-gray-900 data-testid data-test-id data-cy",
        "data-testid": "input-checkbox-label",
        "data-test-id": "input-checkbox-label",
        "data-cy": "input-checkbox-label"
      }, _toDisplayString($setup.label), 9, _hoisted_3)
    ]),
    $setup.errors.length > 0 ? (_openBlock(), _createElementBlock("div", _hoisted_4, [
      (_openBlock(true), _createElementBlock(_Fragment, null, _renderList($setup.errors, (error, index) => {
        return _openBlock(), _createElementBlock("p", {
          id: "1",
          key: index,
          class: "mt-2 text-sm text-red-600"
        }, _toDisplayString(error), 9, _hoisted_5);
      }), 128))
    ])) : _createCommentVNode("v-if", true)
  ]);
}`

  it('it replace given attrs', () => {
    const result = vueTransformer(exampleCode, { attrs: ['data-testid'] })

    expect(result).toBeTruthy()
    expect(result).toContain('data-test-id":')
    expect(result).toContain('data-cy":')
    expect(result).not.toContain('data-testid":')
    expect(result).toContain('class: "ml-2 block text-sm text-gray-900 data-testid data-test-id data-cy"')
  })

  it('passing code with any modifications when in testing mode', () => {
    const result = vueTransformer(exampleCode, { testing: true })

    expect(result).toMatch(exampleCode)
  })

  it('working without given options', () => {
    const result = vueTransformer(exampleCode, undefined)

    expect(result).toBeTruthy()
    expect(result).toContain('data-test-id":')
    expect(result).not.toContain('data-cy":')
    expect(result).not.toContain('data-testid":')
    expect(result).toContain('class: "ml-2 block text-sm text-gray-900 data-testid data-test-id data-cy"')
  })
})