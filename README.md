# unplugin-clear-testid

[![NPM version](https://img.shields.io/npm/v/unplugin-clear-testid?color=a1b858&label=)](https://www.npmjs.com/package/unplugin-clear-testid)

Simple unplugin which removes `data-testid` & `data-cy` from your code.

## Install

```bash
yarn add -D unplugin-clear-testid
```

<details>
<summary>Vite</summary><br>

```ts
// vite.config.ts
import ClearTestid from 'unplugin-clear-testid/vite'

export default defineConfig({
  plugins: [
    ClearTestid({
      attrs: ['data-testid', 'data-cy'],
      testing: process.env.NODE_ENV === 'testing'
    }),
  ],
})
```

Example: [`playground/`](./playground/)

<br></details>

<details>
<summary>Rollup</summary><br>

```ts
// rollup.config.js
import Starter from 'unplugin-clear-testid/rollup'

export default {
  plugins: [
    Starter({
      attrs: ['data-testid', 'data-cy'],
      testing: process.env.NODE_ENV === 'testing'
    }),
  ],
}
```

<br></details>


<details>
<summary>Webpack</summary><br>

```ts
// webpack.config.js
module.exports = {
  /* ... */
  plugins: [
    require('unplugin-clear-testid/webpack')({
      attrs: ['data-testid', 'data-cy'],
      testing: process.env.NODE_ENV === 'testing'
    })
  ]
}
```

<br></details>

<details>
<summary>Nuxt</summary><br>

```ts
// nuxt.config.js
export default {
  buildModules: [
    ['unplugin-clear-testid/nuxt', {
      attrs: ['data-testid', 'data-cy'],
      testing: process.env.NODE_ENV === 'testing'
    }],
  ],
}
```

> This module works for both Nuxt 2 and [Nuxt Vite](https://github.com/nuxt/vite)

<br></details>

<details>
<summary>Vue CLI</summary><br>

```ts
// vue.config.js
module.exports = {
  configureWebpack: {
    plugins: [
      require('unplugin-clear-testid/webpack')({
        attrs: ['data-testid', 'data-cy'],
        testing: process.env.NODE_ENV === 'testing'
      }),
    ],
  },
}
```

<br></details>


## Options

There are only two options which allows you to customize data attributes you want to remove and boolean flag to
determine it is testing environment or not. Below there are default values:

```ts
{
  attrs: ['data-testid', 'data-cy'],
  testing: false
}
```