import { defineConfig } from 'vite'
import ClearTestid from '../src/vite'

export default defineConfig({
  plugins: [
    ClearTestid({
      testing: true
    }),
  ],
})
